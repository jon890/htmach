const HTM_MENU_CONST = [
  { langKey: "madyn", link: "madyn", order: 2, visible: true },
  { langKey: "company-introduce", link: "/introduce", order: 1, visible: true },
  { langKey: "business-area", link: "/business", order: 3, visible: false },
  { langKey: "technilogy-status", link: "#", order: 4, visible: false },
  {
    langKey: "performance-cases",
    link: "/performance",
    order: 5,
    visible: true,
  },
  { langKey: "help", link: "/help", order: 6, visible: true },
] as const;

export const HTM_VISIBLE_MENU = HTM_MENU_CONST.filter((it) => it.visible);
