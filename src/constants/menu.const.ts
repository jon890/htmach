export type HTM_MENU_TYPE = {
  langKey: string;
  link: string;
  order: number;
  visible: boolean;
  depth: number;
  children?: HTM_MENU_TYPE[];
};

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
      },
    ],
  },
  {
    langKey: "company-introduce",
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
      },

      {
        langKey: "map",
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
        langKey: "business.remanufacturing",
        link: "/business/remanufacturing",
        order: 1,
        visible: true,
        depth: 2,
      },

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
    langKey: "technilogy-status",
    link: "#",
    order: 4,
    visible: false,
    depth: 1,
  },
  {
    langKey: "performance-cases",
    link: "/performance",
    order: 5,
    visible: true,
    depth: 1,
  },

  { langKey: "help", link: "/help", order: 6, visible: true, depth: 1 },
] as const;

export const HTM_VISIBLE_MENU = HTM_MENU_CONST.filter(
  (it) => it.visible && it.depth === 1,
).sort((a, b) => a.order - b.order);
