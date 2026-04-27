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