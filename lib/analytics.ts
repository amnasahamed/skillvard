type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      name: string,
      params?: EventParams
    ) => void;
  }
}

export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", {
    event_category: "conversion",
    event_label: location,
    location,
  });
}

export function trackPhoneClick(location: string): void {
  trackEvent("phone_click", {
    event_category: "conversion",
    event_label: location,
    location,
  });
}
