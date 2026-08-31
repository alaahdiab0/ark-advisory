export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  const gtag = (window as typeof window & {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }).gtag;

  if (!gtag) return;

  gtag("event", eventName, eventParams);
}