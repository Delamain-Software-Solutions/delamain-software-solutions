/**
 * GA4 (gtag.js) helpers.
 *
 * The tag itself is loaded in index.html — that snippet defines `window.gtag`
 * and the `dataLayer` queue before this bundle runs, so everything here is safe
 * to call immediately; calls made before googletagmanager.com finishes loading
 * are queued and flushed by the library.
 *
 * The tag is configured with `send_page_view: false`, so page views come from
 * here (see trackPageView) once the route's title has been applied.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-PFV83521RW";

const LOCAL_HOSTS = ["localhost", "127.0.0.1", "[::1]", "::1"];

/** Keeps `bun dev` traffic out of the production property. */
const isLocalHost = () =>
  LOCAL_HOSTS.includes(window.location.hostname) ||
  window.location.hostname.endsWith(".local");

type EventParams = Record<string, unknown>;

const send = (command: string, name: string, params?: EventParams) => {
  if (typeof window === "undefined") return;

  if (isLocalHost()) {
    // Still useful while developing: shows exactly what production would send.
    console.debug("[analytics] skipped on localhost:", command, name, params);
    return;
  }

  window.gtag?.(command, name, params);
};

/**
 * Path of the last page_view we sent. The route-level fallback in
 * <RouteAnalytics /> uses this to avoid double-counting a page that already
 * reported itself through usePageMeta.
 */
let lastTrackedPath: string | null = null;

export const getLastTrackedPath = () => lastTrackedPath;

/**
 * Sends a GA4 page_view for the URL currently in the address bar.
 *
 * Call this *after* document.title has been set for the new route, otherwise
 * the hit is attributed to the previous page's title.
 */
export const trackPageView = (params?: EventParams) => {
  if (typeof window === "undefined") return;

  const path = window.location.pathname + window.location.search;
  lastTrackedPath = path;

  send("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
    ...params,
  });
};

/** Any custom / recommended GA4 event, e.g. trackEvent("generate_lead"). */
export const trackEvent = (name: string, params?: EventParams) => {
  send("event", name, params);
};
