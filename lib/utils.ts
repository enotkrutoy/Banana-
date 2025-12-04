import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getApiKey(): string | null {
  if (typeof window !== 'undefined') {
    const settings = localStorage.getItem("ai-workflow-settings");
    if (settings) {
      try {
        const parsed = JSON.parse(settings);
        return parsed.apiKey || null;
      } catch (e) {
        return null;
      }
    }
  }
  return null;
}