"use client";

import { sendGAEvent } from "@next/third-parties/google";

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  sendGAEvent("event", eventName, eventParams);
}