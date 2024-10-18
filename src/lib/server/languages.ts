import { LocaleType } from "@/types/locale-type";
import "server-only";

const languages = {
  en: () =>
    import("../../../messages/en.json").then((module) => module.default),
  ko: () =>
    import("../../../messages/ko.json").then((module) => module.default),
};

export type LanguageReturnType = Awaited<ReturnType<typeof ofLocale>>;
const ofLocale = async (locale: LocaleType) => languages[locale]();

const Languages = {
  ofLocale,
};

export default Languages;
