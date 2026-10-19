"use client";

import { useSyncExternalStore } from "react";

/** Clave de localStorage para el consentimiento del mapa de Google. */
export const MAP_CONSENT_KEY = "map-consent";

const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): boolean {
  try {
    return window.localStorage.getItem(MAP_CONSENT_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

/** ¿Ha aceptado la persona cargar el mapa de Google? (sincroniza pestañas) */
export function useMapConsent(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function acceptMapConsent() {
  try {
    window.localStorage.setItem(MAP_CONSENT_KEY, "1");
  } catch {}
  notify();
}

export function resetMapConsent() {
  try {
    window.localStorage.removeItem(MAP_CONSENT_KEY);
  } catch {}
  notify();
}
