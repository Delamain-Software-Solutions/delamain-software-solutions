import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

export const SITE_NAME = "Delamain Software Solutions";
export const SITE_URL = "https://delamainsoftware.com";

const DEFAULT_DESCRIPTION =
  "Next-gen software development agency specializing in AI-driven solutions for businesses.";
const DEFAULT_IMAGE = `${SITE_URL}/logos/logo-full-black.png`;

type PageMeta = {
  /** Page-specific part of the title; the site name is appended automatically. */
  title: string;
  description?: string;
  /** og:image — absolute, or a site-root path; falls back to the company logo. */
  image?: string;
};

/** Crawlers won't resolve a relative og:image, so make bundled asset URLs absolute. */
const toAbsolute = (url: string) =>
  /^https?:\/\//.test(url) ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;

/** Creates the tag on first use so index.html only has to carry the defaults. */
const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};

/**
 * Sets the document title and the social/canonical meta for a route, then
 * reports the page view to GA4.
 *
 * Title and analytics are deliberately in the same effect: the page_view has to
 * be sent after document.title is updated, or GA records the previous page's
 * title against the new URL.
 */
export const usePageMeta = ({ title, description, image }: PageMeta) => {
  const location = useLocation();
  const fullTitle = title && title !== SITE_NAME ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const desc = description ?? DEFAULT_DESCRIPTION;
  const img = image ? toAbsolute(image) : DEFAULT_IMAGE;
  const path = location.pathname + location.search;

  useEffect(() => {
    const url = `${SITE_URL}${location.pathname}`;

    document.title = fullTitle;

    upsertMeta("name", "description", desc);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", img);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", img);
    upsertCanonical(url);

    trackPageView();
  }, [fullTitle, desc, img, path, location.pathname]);
};

export default usePageMeta;
