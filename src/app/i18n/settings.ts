export type LocaleType = "ko" | "en";

export const fallbackLng = "ko";
export const languages = [fallbackLng, "en"];
export const dfeaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = dfeaultNS) {
  return {
    lng,
    fallbackLng,
    defaultNS: dfeaultNS,
    ns,
  };
}
