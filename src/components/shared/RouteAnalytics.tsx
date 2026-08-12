import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLastTrackedPath, trackPageView } from "@/lib/analytics";

/**
 * Safety net for GA4 page views.
 *
 * Every page sends its own page_view through usePageMeta, which is where the
 * correct per-route title comes from. This component only fires for a route
 * that didn't do that (a new page added without the hook, or a redirect), so
 * navigation is never silently missing from analytics.
 *
 * The timeout defers the check until after the route's own effects have run,
 * so it doesn't race the hook and double-count.
 */
const RouteAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    const id = window.setTimeout(() => {
      if (getLastTrackedPath() !== path) trackPageView();
    }, 0);

    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);

  return null;
};

export default RouteAnalytics;
