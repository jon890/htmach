export const fallbackLng = "ko";
export const languages = [fallbackLng, "en"];
export const I18N_DEFAULT_NAMESPACE = "translation";
export const I18NEXT_COOKIE_NAME = "i18next";

export function getOptions(lng = fallbackLng, ns = I18N_DEFAULT_NAMESPACE) {
  return {
    lng,
    fallbackLng,
    defaultNS: I18N_DEFAULT_NAMESPACE,
    ns,
  };
}
