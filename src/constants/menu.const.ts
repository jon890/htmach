export type HTM_MENU_TYPE = {
  langKey: string;
  link: string;
  order: number;
  visible: boolean;
  depth: number;
  children?: HTM_MENU_TYPE[];
  breadcrumb?: { langKey: string; href: string }[];
};

const HOME_BREADCRUMB = {
  langKey: "home",
  href: "/",
};

/**
 * 사이트 전반적인 메뉴를 관리하는 객체입니다.
 * 이 곳에 메뉴를 추가하면 반영됩니다.
 *
 * 언어 파일은 menu.json을 참고해주세요
 */
const HTM_MENU_CONST: HTM_MENU_TYPE[] = [
  {
    langKey: "madyn",
    link: "madyn",
    order: 2,
    visible: true,
    depth: 1,
    children: [
      {
        langKey: "madyn",
        link: "/madyn",
        order: 1,
        visible: true,
        depth: 2,
        breadcrumb: [
          HOME_BREADCRUMB,
          {
            langKey: "madyn",
            href: "/madyn",
          },
        ],
      },
    ],
  },
  {
    langKey: "introduce",
    link: "/introduce",
    order: 1,
    visible: true,
    depth: 1,
    children: [
      {
        langKey: "introduce",
        link: "/introduce",
        order: 1,
        visible: true,
        depth: 2,
        breadcrumb: [
          HOME_BREADCRUMB,
          {
            langKey: "introduce",
            href: "/introduce",
          },
        ],
      },

      {
        langKey: "introduce.map",
        link: "/introduce/map",
        order: 2,
        visible: true,
        depth: 2,
      },
    ],
  },
  {
    langKey: "business-area",
    link: "/business",
    order: 3,
    visible: true,
    depth: 1,
    children: [
      {
        langKey: "business.design",
        link: "/business/design",
        order: 2,
        visible: true,
        depth: 2,
      },

      {
        langKey: "business.flow_analysis",
        link: "/business/flow-analysis",
        order: 3,
        visible: true,
        depth: 2,
      },
      {
        langKey: "business.structural_analysis",
        link: "/business/structural-analysis",
        order: 4,
        visible: true,
        depth: 2,
      },
      {
        langKey: "business.axis_analysis",
        link: "/business/axis-analysis",
        order: 5,
        visible: true,
        depth: 2,
      },
    ],
  },
  {
    langKey: "performance-cases",
    link: "#",
    order: 4,
    visible: true,
    depth: 1,
    children: [
      {
        langKey: "performance-cases.license",
        link: "/board/license",
        order: 1,
        visible: true,
        depth: 2,
        breadcrumb: [
          HOME_BREADCRUMB,
          {
            langKey: "performance-cases.license",
            href: "/board/license",
          },
        ],
      },

      {
        langKey: "performance-cases.dissertation",
        link: "/board/dissertation",
        order: 2,
        visible: true,
        depth: 2,
        breadcrumb: [
          HOME_BREADCRUMB,
          {
            langKey: "performance-cases.dissertation",
            href: "/board/dissertation",
          },
        ],
      },
      {
        langKey: "performance-cases.performance",
        link: "/board/performance",
        order: 3,
        visible: true,
        depth: 2,
        breadcrumb: [
          HOME_BREADCRUMB,
          {
            langKey: "performance-cases.performance",
            href: "/board/performance",
          },
        ],
      },
    ],
  },

  {
    langKey: "help",
    link: "/help",
    order: 5,
    visible: true,
    depth: 1,
    children: [
      {
        langKey: "help",
        link: "/help",
        order: 1,
        visible: true,
        depth: 2,
        breadcrumb: [
          HOME_BREADCRUMB,
          {
            langKey: "help",
            href: "/help",
          },
        ],
      },
    ],
  },
] as const;

export const HTM_VISIBLE_MENU = HTM_MENU_CONST.filter(
  (it) => it.visible && it.depth === 1,
).sort((a, b) => a.order - b.order);

const HTM_LEAF_MENUS = HTM_VISIBLE_MENU.filter(
  (it) => it.children?.length ?? 0 > 0,
).flatMap((it) => it.children ?? []);

export function getCurrentMenu(pathname: string, locale: string) {
  return HTM_LEAF_MENUS.find((it) => `/${locale}${it.link}` === pathname);
}
