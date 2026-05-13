import { useEffect } from "react";

const upsertMeta = (selector: string, attr: "name" | "property", key: string, value: string) => {
  let el = document.querySelector<HTMLMetaElement>(selector);
  const previous = el?.content ?? null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
  return { el, previous };
};

/**
 * Set the document.title and og:title / twitter:title for a route. Pass a short label like "Blog" —
 * it will be formatted as "Agendac | <label>". Restores previous values on unmount.
 */
export const usePageTitle = (label: string) => {
  useEffect(() => {
    const fullTitle = `Agendac | ${label}`;
    const previousDoc = document.title;
    document.title = fullTitle;
    const og = upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    const tw = upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    return () => {
      document.title = previousDoc;
      if (og.el && og.previous !== null) og.el.content = og.previous;
      if (tw.el && tw.previous !== null) tw.el.content = tw.previous;
    };
  }, [label]);
};

/**
 * Set <meta name="description"> + og:description / twitter:description for the current page.
 */
export const useMetaDescription = (description: string) => {
  useEffect(() => {
    const desc = upsertMeta('meta[name="description"]', "name", "description", description);
    const og = upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    const tw = upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    return () => {
      if (desc.el && desc.previous !== null) desc.el.content = desc.previous;
      if (og.el && og.previous !== null) og.el.content = og.previous;
      if (tw.el && tw.previous !== null) tw.el.content = tw.previous;
    };
  }, [description]);
};

/**
 * Set <link rel="canonical"> + og:url / twitter:url for the current page.
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
    const og = upsertMeta('meta[property="og:url"]', "property", "og:url", href);
    const tw = upsertMeta('meta[name="twitter:url"]', "name", "twitter:url", href);
    return () => {
      if (link && previous !== null) link.href = previous;
      if (og.el && og.previous !== null) og.el.content = og.previous;
      if (tw.el && tw.previous !== null) tw.el.content = tw.previous;
    };
  }, [pathOrUrl]);
};