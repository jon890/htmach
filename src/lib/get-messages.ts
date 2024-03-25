import "server-only";

const messages = {
  en: () => import("../../messages/en.json").then((module) => module.default),
  ko: () => import("../../messages/ko.json").then((module) => module.default),
};

export const getMessages = async (locale: "en" | "ko") => messages[locale]();
