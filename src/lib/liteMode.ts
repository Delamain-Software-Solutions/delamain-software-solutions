import { useSyncExternalStore } from "react";

/**
 * "Lite effects" mode — a latch we flip when continuously-animated, heavily
 * composited effects are going to crawl instead of run.
 *
 * The backdrop (a ~1440px SVG sitting under a 56px blur), the soft-light grain
 * overlay and the header's backdrop-filter are close to free on a GPU and
 * brutal without one: every animation frame forces the whole blurred surface
 * to be re-rasterised on the CPU. When hardware acceleration is off, browsers
 * fall back to a software rasteriser and the page drops to single-digit fps.
 *
 * There is no API that answers "is compositing accelerated?", so we use two
 * signals: the WebGL renderer string (browsers name their CPU fallback), and
 * actual frame pacing measured shortly after load. The flag only ever turns
 * on — once we've seen the page struggle we don't flip back and forth.
 *
 * Consumers freeze animation but keep the static artwork; see the `.lite-fx`
 * rules in index.css and `useLiteMode` callers.
 */

/** Renderer names browsers report when they're rasterising on the CPU. */
const SOFTWARE_RENDERER = /swiftshader|llvmpipe|softpipe|software|basic render/i;

const PROBE_DELAY_MS = 600; // let mount and font/image settling pass first
const PROBE_WINDOW_MS = 1200;
const MIN_FPS = 24; // low enough that a 30Hz panel isn't mistaken for jank

let lite = false;
const listeners = new Set<() => void>();
let started = false;

const enableLiteMode = () => {
  if (lite) return;
  lite = true;
  document.documentElement.classList.add("lite-fx");
  listeners.forEach((notify) => notify());
};

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/** `?lite` forces the mode on, so it can be checked without disabling the GPU. */
const forcedByQuery = () => new URLSearchParams(window.location.search).has("lite");

/**
 * "unknown" when WebGL is unavailable — that's usually a privacy extension
 * blocking the fingerprint, not proof of a slow machine, so we let the frame
 * probe make the call instead of degrading the design on a guess.
 */
const rendererVerdict = (): "software" | "accelerated" | "unknown" => {
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    if (!gl) return "unknown";
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = String(
      debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : gl.getParameter(gl.RENDERER)
    );
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return SOFTWARE_RENDERER.test(renderer) ? "software" : "accelerated";
  } catch {
    return "unknown";
  }
};

/** Catches the slow setups that still report a real GPU. */
const sampleFrameRate = () => {
  let frames = 0;
  const start = performance.now();

  const tick = (now: number) => {
    // rAF is throttled to a crawl in background tabs, which would look
    // exactly like a struggling compositor. Abandon the sample instead.
    if (document.visibilityState !== "visible") return;

    frames += 1;
    const elapsed = now - start;
    if (elapsed < PROBE_WINDOW_MS) {
      requestAnimationFrame(tick);
      return;
    }
    if (frames / (elapsed / 1000) < MIN_FPS) enableLiteMode();
  };

  requestAnimationFrame(tick);
};

/** Call once at boot, before the first render, so there's no flash of animation. */
export const initLiteMode = () => {
  if (started || typeof window === "undefined") return;
  started = true;

  if (forcedByQuery() || prefersReducedMotion() || rendererVerdict() === "software") {
    enableLiteMode();
    return;
  }
  window.setTimeout(sampleFrameRate, PROBE_DELAY_MS);
};

/** True when expensive per-frame effects should be frozen. */
export const useLiteMode = () =>
  useSyncExternalStore(
    (onStoreChange) => {
      listeners.add(onStoreChange);
      return () => {
        listeners.delete(onStoreChange);
      };
    },
    () => lite,
    () => false
  );
