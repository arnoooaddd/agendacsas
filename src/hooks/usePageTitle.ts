import { useEffect } from "react";

/**
 * Set the document.title for a route. Pass a short label like "Blog" or
 * "Prise de rendez-vous" — it will be formatted as "Agendac | <label>".
 * Restores the default site title on unmount.
 */
export const usePageTitle = (label: string) => {
  useEffect(() => {
    const previous = document.title;
    document.title = `Agendac | ${label}`;
    return () => {
      document.title = previous;
    };
  }, [label]);
};

/**
 * Set <link rel="canonical"> for the current page. Pass a path starting with "/"
 * (e.g. "/blog") or a full URL. Defaults to https://agendac.fr as base.
 */
export const useCanonical = (pathOrUrl: string) => {
  useEffect(() => {
    const base = "https://agendac.fr";
    const href = pathOrUrl.startsWith("http")
      ? pathOrUrl
      : `${base}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previous = link?.href ?? null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = href;
    return () => {
      if (link && previous !== null) link.href = previous;
    };
  }, [pathOrUrl]);
};