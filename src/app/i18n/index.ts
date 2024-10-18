import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions, LocaleType } from "./settings";

const initI18next = async (locale: LocaleType, namespace: string) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: LocaleType, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(locale, namespace));

  return i18nInstance;
};

export async function useTranslation(
  locale: LocaleType,
  namespace: string,
  options = {},
) {
  const i18nInstance = await initI18next(locale, namespace);
  return {
    t: i18nInstance.getFixedT(
      locale,
      Array.isArray(namespace) ? namespace : [namespace],
    ),
    i18n: {
      changeLanguage: async (language: LocaleType, callback: () => void) =>
        i18nInstance.changeLanguage(language, callback),
    },
  };
}
