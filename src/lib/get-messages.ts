import { LocaleType } from "@/types/locale-type";
import "server-only";

const messages = {
  en: () => import("../../messages/en.json").then((module) => module.default),
  ko: () => import("../../messages/ko.json").then((module) => module.default),
};

export const getMessages = async (locale: LocaleType) => messages[locale]();
