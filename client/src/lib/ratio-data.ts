/* ═══════════════════════════════════════════════════
 * 三赛道配比图数据
 * 来源: track-ratio-v2.html
 * ═══════════════════════════════════════════════════ */

export interface RatioIngredient {
  name: string;
  molecule: string;
  role: "君药" | "臣药" | "佐药" | "佐使药" | "使药";
  /** bar 宽度百分比，如 "93%" */
  barWidth: string;
  /** "core" | "base" | "dim" 决定条形样式 */
  barType: "core" | "base" | "dim";
  /** 条形下方说明文字 */
  sublabel: string;
  /** 右侧权重文字 */
  weight: string;
  /** 是否为核心成分（高亮权重文字） */
  isCore: boolean;
}

export interface RatioCallout {
  text: string;
}

export interface TrackRatioData {
  trackId: string;
  eyebrow: string;
  name: string;
  desc: string;
  ingredients: RatioIngredient[];
  /** 核心/辅助成分分界线位置（在第几个成分之后插入分隔线，0-indexed） */
  separatorAfter: number;
  calloutLabel: string;
  callouts: RatioCallout[];
  footLeft: string;
  footRight: string;
}

export const TRACK_RATIO_DATA: TrackRatioData[] = [
  /* ── 睡眠赛道: 晚安密码 ── */
  {
    trackId: "sleep",
    eyebrow: "Sleep Edition · 配比侧重",
    name: "晚安密码",
    desc: "同一七味框架，针对夜间场景精准调优\n人参皂苷与灵芝三萜双重强化，其余成分辅助协同",
    ingredients: [
      {
        name: "人参",
        molecule: "皂苷 Rb1 · Rg1",
        role: "君药",
        barWidth: "93%",
        barType: "core",
        sublabel: "夜间场景最高配比 · 压力轴调节",
        weight: "核心 ●●●●●",
        isCore: true,
      },
      {
        name: "灵芝",
        molecule: "三萜 · 多糖",
        role: "臣药",
        barWidth: "88%",
        barType: "core",
        sublabel: "三萜配比强化 · 与人参协同",
        weight: "核心 ●●●●●",
        isCore: true,
      },
      {
        name: "葛根",
        molecule: "葛根素 · 黄酮",
        role: "君药",
        barWidth: "38%",
        barType: "base",
        sublabel: "协同辅助",
        weight: "协同 ●●○○○",
        isCore: false,
      },
      {
        name: "高良姜",
        molecule: "高良姜素",
        role: "臣药",
        barWidth: "18%",
        barType: "dim",
        sublabel: "基础辅助",
        weight: "辅助 ●○○○○",
        isCore: false,
      },
      {
        name: "茯砖茶",
        molecule: "多酚 · 多糖",
        role: "佐药",
        barWidth: "50%",
        barType: "base",
        sublabel: "三款共用基础",
        weight: "基础 ●●●○○",
        isCore: false,
      },
      {
        name: "青苹果",
        molecule: "苹果多酚 · 维C",
        role: "佐使药",
        barWidth: "32%",
        barType: "dim",
        sublabel: "抗氧化协同",
        weight: "协同 ●●○○○",
        isCore: false,
      },
      {
        name: "罗汉果",
        molecule: "罗汉果甜苷",
        role: "使药",
        barWidth: "28%",
        barType: "dim",
        sublabel: "调味基底",
        weight: "基底 ●●○○○",
        isCore: false,
      },
    ],
    separatorAfter: 1,
    calloutLabel: "睡眠赛道核心强化成分",
    callouts: [
      { text: "人参皂苷 Rb1 · Rg1 — 最高配比权重" },
      { text: "灵芝三萜 — 强化配比 · 双核协同" },
    ],
    footLeft: "配比权重示意图 · 非精确数值",
    footRight: "院士团队针对夜间场景调优 · 同一七味底层框架",
  },

  /* ── 应酬赛道: 且酌 ── */
  {
    trackId: "drink",
    eyebrow: "Social Edition · 配比侧重",
    name: "且\u3000酌",
    desc: "同一七味框架，针对应酬场景精准调优\n葛根素与高良姜素双引擎强化，协同针对饮酒前后场景",
    ingredients: [
      {
        name: "葛根",
        molecule: "葛根素 · 大豆苷元",
        role: "君药",
        barWidth: "96%",
        barType: "core",
        sublabel: "应酬赛道最高配比 · 双引擎之一",
        weight: "核心 ●●●●●",
        isCore: true,
      },
      {
        name: "高良姜",
        molecule: "高良姜素 · 姜黄素",
        role: "臣药",
        barWidth: "91%",
        barType: "core",
        sublabel: "与葛根素同步强化 · 双引擎之二",
        weight: "核心 ●●●●●",
        isCore: true,
      },
      {
        name: "人参",
        molecule: "皂苷 Rb1 · Rg1",
        role: "君药",
        barWidth: "40%",
        barType: "base",
        sublabel: "适应原协同",
        weight: "协同 ●●○○○",
        isCore: false,
      },
      {
        name: "灵芝",
        molecule: "三萜 · 多糖",
        role: "臣药",
        barWidth: "20%",
        barType: "dim",
        sublabel: "基础辅助",
        weight: "辅助 ●○○○○",
        isCore: false,
      },
      {
        name: "茯砖茶",
        molecule: "多酚 · 多糖",
        role: "佐药",
        barWidth: "50%",
        barType: "base",
        sublabel: "三款共用基础",
        weight: "基础 ●●●○○",
        isCore: false,
      },
      {
        name: "青苹果",
        molecule: "苹果多酚 · 维C",
        role: "佐使药",
        barWidth: "32%",
        barType: "dim",
        sublabel: "抗氧化协同",
        weight: "协同 ●●○○○",
        isCore: false,
      },
      {
        name: "罗汉果",
        molecule: "罗汉果甜苷",
        role: "使药",
        barWidth: "28%",
        barType: "dim",
        sublabel: "调味基底",
        weight: "基底 ●●○○○",
        isCore: false,
      },
    ],
    separatorAfter: 1,
    calloutLabel: "应酬赛道核心强化成分",
    callouts: [
      { text: "葛根素 · 大豆苷元 — 最高配比权重" },
      { text: "高良姜素 — 同步强化 · 双引擎协同" },
    ],
    footLeft: "配比权重示意图 · 非精确数值",
    footRight: "院士团队针对应酬场景调优 · 同一七味底层框架",
  },

  /* ── 养颜赛道: 女神肌密 ── */
  {
    trackId: "beauty",
    eyebrow: "Beauty Edition · 配比侧重",
    name: "女神肌密",
    desc: "同一七味框架，针对日常滋养场景精准调优\n葛根黄酮与灵芝多糖配比倾斜，青苹果多酚同步加重",
    ingredients: [
      {
        name: "葛根",
        molecule: "葛根黄酮 · 大豆苷",
        role: "君药",
        barWidth: "94%",
        barType: "core",
        sublabel: "养颜赛道最高配比 · 黄酮侧重",
        weight: "核心 ●●●●●",
        isCore: true,
      },
      {
        name: "灵芝",
        molecule: "多糖 · 三萜",
        role: "臣药",
        barWidth: "90%",
        barType: "core",
        sublabel: "多糖配比强化 · 睡眠赛道则三萜为主",
        weight: "核心 ●●●●●",
        isCore: true,
      },
      {
        name: "青苹果",
        molecule: "苹果多酚 · 维C",
        role: "佐使药",
        barWidth: "72%",
        barType: "core",
        sublabel: "养颜赛道专属加重 · 其余两款配比较低",
        weight: "强化 ●●●●○",
        isCore: true,
      },
      {
        name: "人参",
        molecule: "皂苷 Rb1 · Rg1",
        role: "君药",
        barWidth: "50%",
        barType: "base",
        sublabel: "协同基础",
        weight: "基础 ●●●○○",
        isCore: false,
      },
      {
        name: "高良姜",
        molecule: "高良姜素",
        role: "臣药",
        barWidth: "18%",
        barType: "dim",
        sublabel: "基础辅助",
        weight: "辅助 ●○○○○",
        isCore: false,
      },
      {
        name: "茯砖茶",
        molecule: "多酚 · 多糖",
        role: "佐药",
        barWidth: "50%",
        barType: "base",
        sublabel: "三款共用基础",
        weight: "基础 ●●●○○",
        isCore: false,
      },
      {
        name: "罗汉果",
        molecule: "罗汉果甜苷",
        role: "使药",
        barWidth: "28%",
        barType: "dim",
        sublabel: "调味基底",
        weight: "基底 ●●○○○",
        isCore: false,
      },
    ],
    separatorAfter: 2,
    calloutLabel: "养颜赛道核心强化成分",
    callouts: [
      { text: "葛根黄酮 — 最高配比权重" },
      { text: "灵芝多糖 — 强化配比" },
      { text: "青苹果多酚 — 养颜专属加重" },
    ],
    footLeft: "配比权重示意图 · 非精确数值",
    footRight: "院士团队针对日常滋养场景调优 · 同一七味底层框架",
  },
];
