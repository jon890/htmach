"use client";

import { LocaleNamespaceType, LocaleType } from "@/types/locale-type";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  initReactI18next,
  UseTranslationOptions,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { getOptions, I18NEXT_COOKIE_NAME, languages } from "./settings";

const runsOnServierSide = typeof window === "undefined";

/**
 * client side에서 사용할 i18next 객체를 만듭니다.
 */
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: LocaleType, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions,
    lng: undefined,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServierSide ? languages : [],
  });

export function useTranslation({
  locale,
  namespace,
  options = {},
}: {
  locale?: LocaleType;
  namespace: LocaleNamespaceType;
  options?: UseTranslationOptions<undefined>;
}) {
  const [cookies, setCookie] = useCookies([I18NEXT_COOKIE_NAME]);
  const ret = useTranslationOrg(namespace, options);
  const { i18n } = ret;

  if (runsOnServierSide && locale && i18n.resolvedLanguage !== locale) {
    i18n.changeLanguage(locale);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLanguage, setActiveLanguage] = useState(i18n.resolvedLanguage);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (i18n.resolvedLanguage !== activeLanguage) {
        setActiveLanguage(i18n.resolvedLanguage);
      }
    }, [activeLanguage, i18n.resolvedLanguage]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!locale || i18n.resolvedLanguage === locale) return;
      i18n.changeLanguage(locale);
    }, [i18n, locale]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.i18next === locale) return;

      setCookie(I18NEXT_COOKIE_NAME, locale, { path: "/" });
    }, [locale, cookies.i18next]);
  }

  return ret;
}
