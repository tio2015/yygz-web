/*
 * NAD+ Knowledge Base - Structured Data
 * Design: Investor Intelligence (dark, data-dense, decision-oriented)
 * Route Colors: Amber=Photocatalysis, Cyan=Enzyme Engineering, Emerald=Small Molecule
 */

export interface TechRoute {
  id: string;
  name: string;
  nameCn: string;
  color: string;
  colorDim: string;
  colorClass: string;
  glowClass: string;
  timeline: string;
  timelineCn: string;
  maturity: number; // 0-100
  investability: number; // 0-100
  marketReadiness: number; // 0-100
  summary: string;
  image: string;
  coreAdvantage: string;
  mainChallenge: string;
  keyStudies: Study[];
  details: string[];
  investmentSignals: string[];
}

export interface Study {
  title: string;
  journal: string;
  year: number;
  keyFinding: string;
  doi?: string;
}

export interface NADPrecursor {
  name: string;
  fullName: string;
  advantage: string;
  disadvantage: string;
  keyStudy: string;
  highlight: boolean;
}

export const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/2sXNZCTjnf6Fn4sQ84bSjN-img-1_1771440572000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94LzJzWE5aQ1RqbmY2Rm40c1E4NGJTak4taW1nLTFfMTc3MTQ0MDU3MjAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wFG-F13dR~Pq4zFyLugJsyuJ~HEXRnrOD23qQF7XEwHF-IyJUw0F2W3ZutaFz4YEOKnYJZXZYEtCQfh8YTzWO6VF8KgfCNe1irswZaV~NJ38npHudoxITUIV2EEtKzpI8b0MwLpE517v8u0cH6UXQcVelWqSN2jFti-hC309ooNnCKCZW6gMkf1FGFvImVEa4ezyOI3gAN-JO6cM0xwUKiwE~~kNa96CKYiMT18NEJQUM~0FDDrmKZQ2laMNOLMHBDx-ihNWH9SUQPnInfcZWN1c8sh5MY17nb4FzjqPHoC4TwIokbV3~DlB1Q1tNu3vz19PzoXP2-Pk-n3KJXoYVg__";

export const TECH_ROUTES: TechRoute[] = [
  {
    id: "photocatalysis",
    name: "Photocatalysis",
    nameCn: "光催化",
    color: "var(--color-amber)",
    colorDim: "var(--color-amber-dim)",
    colorClass: "text-amber",
    glowClass: "glow-amber",
    timeline: "Long-term (10+ years)",
    timelineCn: "远期（10年以上）",
    maturity: 15,
    investability: 20,
    marketReadiness: 8,
    summary: "利用光敏剂在光照下产生高能电子，直接将NADH氧化为NAD+。终极目标是构建独立于人体的「人工肝脏」系统，在体外高效完成NAD+再生和酒精解毒。",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/2sXNZCTjnf6Fn4sQ84bSjN-img-2_1771440574000_na1fn_cGhvdG9jYXRhbHlzaXMtY2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94LzJzWE5aQ1RqbmY2Rm40c1E4NGJTak4taW1nLTJfMTc3MTQ0MDU3NDAwMF9uYTFmbl9jR2h2ZEc5allYUmhiSGx6YVhNdFkyRnlaQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NDQmrRgvf41HQf4YvV9~f94rzE8kAn1TK9CiTYy6xpFq8TE-4LPgFDZ3Clgm~W7VozeGIDoSJRWbtd0YaQcer8~ydKUQy11GamvxnZyW2Z36ZT5OlEyDRH9adbNwPDzcTF8rEkXRjO3gebA7Jz3WYfbuW9ZGJh5N48ZAiK5qC1RE-IwiheYDVQIaa9WeuhUoXp40S~5l1sU8HVaj1TTlnIndy1lT5gFE7yrUw3WPIT8Y41gzQfV8AYezIKKMAxobHszr310a05Wikl7Q-FSBPb7zZg7nCQwXGh6DyqU29AwnEneAOMJBdn770NtzaRzeQqXQbYb0fg0oIIkOYSP0hA__",
    coreAdvantage: "反应效率高，可独立于人体生物系统，有望实现「即时解酒」",
    mainChallenge: "安全性（ROS、重金属泄露），生物相容性，递送方式，成本高昂",
    keyStudies: [
      {
        title: "Integrating incompatible tandem photobiocatalysis in artificial cells",
        journal: "Science Advances",
        year: 2025,
        keyFinding: "德国马普所构建「人工细胞」，将光催化模块和生物催化模块分别封装在纳米二氧化硅细胞器中，解决了ROS使解酒酶失活的核心矛盾。与肝细胞共培养时显著降低酒精和乙醛的氧化应激。",
        doi: "10.1126/sciadv.adu4828"
      },
      {
        title: "Topology-controlled Pt atomic sites enhance electron utilization efficiency for NAD+ regeneration",
        journal: "National Science Review",
        year: 2025,
        keyFinding: "中国团队在Co3O4晶格中引入拓扑结构可控的铂（Pt）原子位点，创造出高效NADH氧化酶模拟物，显著提升电子利用效率，用于急性酒精解毒。",
        doi: "10.1093/nsr/nwaf379"
      }
    ],
    details: [
      "利用量子点、碳氮化物、有机染料等光敏剂",
      "光照下产生高能电子直接氧化NADH为NAD+",
      "可构建体外循环系统或可穿戴设备",
      "为「过滤」血液中酒精提供科学基础"
    ],
    investmentSignals: [
      "目前仅处于实验室概念验证阶段",
      "距离产品化还很遥远，短期不具备投资可行性",
      "适合作为基础科学长期跟踪方向",
      "关注马普所、中科院等顶级团队的后续进展"
    ]
  },
  {
    id: "enzyme-engineering",
    name: "Enzyme Engineering",
    nameCn: "酶工程",
    color: "var(--color-cyan)",
    colorDim: "var(--color-cyan-dim)",
    colorClass: "text-cyan",
    glowClass: "glow-cyan",
    timeline: "Mid-term (3-5 years)",
    timelineCn: "中期（3-5年）",
    maturity: 35,
    investability: 45,
    marketReadiness: 25,
    summary: "通过改造或筛选更高效的生物催化剂来直接或间接加速NAD+再生。包括改造ADH/ALDH使其活性更高、寻找天然激活剂、以及利用合成生物学引入全新酶促反应。",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/2sXNZCTjnf6Fn4sQ84bSjN-img-3_1771440580000_na1fn_ZW56eW1lLWVuZ2luZWVyaW5nLWNhcmQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94LzJzWE5aQ1RqbmY2Rm40c1E4NGJTak4taW1nLTNfMTc3MTQ0MDU4MDAwMF9uYTFmbl9aVzU2ZVcxbExXVnVaMmx1WldWeWFXNW5MV05oY21RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JVFz2~gUOwmYmwf~iV2MWsqk3XpWUkhq1N0qVHSKhP7g~BLOl7KjL~aWhDqQGF7gzTcKXu8YcTE2oai9JhGOBITmUZlme2PjMTsL~9ug7H69VJ1N6OUT6MqTwqg4ynFvtbMEhwUB7LR2qT~040n0cjA4P9uyDfPp-~fdo~iIZh8IgXt4nNWLwLJ0j9-WJxFFl284yz7OzEx1wE130f5YNnWZ4tmMTruLkECVYM-aIFofALXP4oZRvsn8b-qBXz-8TDBTc3To411S9zEyImcVK~b-VByq0Sno3Z01Pb-dOWchYwqM1lPm~mguJNZU~r66Bw~7HrMJfEBCSJ0~ptFIbQ__",
    coreAdvantage: "靶点明确，特异性强，可利用现有生物系统（如肠道菌群）",
    mainChallenge: "酶的稳定性，递送效率，体内环境复杂性，法规审批",
    keyStudies: [
      {
        title: "NADH-Activated Near-Infrared Fluorescent Probe for Efficient Screening of ADH/ALDH2 Dual Agonists",
        journal: "Analytical Chemistry",
        year: 2026,
        keyFinding: "开发新型NADH近红外荧光探针，高通量筛选ADH/ALDH2「双效激动剂」。从天然产物中筛选得到柚皮苷（Naringin），在动物模型中验证了加速酒精代谢和保护肝脏的功效。",
        doi: "10.1021/acs.analchem.xxxx"
      },
      {
        title: "A Novel Lactobacillus strain with Alcohol Degradation Capability",
        journal: "Preprints.org",
        year: 2025,
        keyFinding: "成功改造植物乳杆菌使其在肠道内表达ADH，在动物模型中展现出降低血液酒精浓度的效果，为开发「解酒益生菌」开辟道路。"
      }
    ],
    details: [
      "高通量筛选平台可从天然产物中发现新活性分子",
      "合成生物学改造益生菌在肠道内表达解酒酶",
      "「筛选平台+天然产物验证」模式具有可复制性",
      "柚皮苷等天然产物已有初步动物实验数据"
    ],
    investmentSignals: [
      "高通量筛选平台技术具有平台价值",
      "工程菌株在3-5年内可能有突破",
      "具备中期投资价值，关注合成生物学公司",
      "法规路径仍不清晰，需关注监管动态"
    ]
  },
  {
    id: "small-molecule",
    name: "Small Molecule Supplements",
    nameCn: "小分子补充",
    color: "var(--color-emerald)",
    colorDim: "var(--color-emerald-dim)",
    colorClass: "text-emerald",
    glowClass: "glow-emerald",
    timeline: "Near-term (1-2 years)",
    timelineCn: "近期（1-2年）",
    maturity: 72,
    investability: 85,
    marketReadiness: 68,
    summary: "通过口服补充剂为身体提供合成NAD+的「燃料」或直接激活相关代谢通路。包括NAD+直接前体（NMN、NR、NADH、NRH）和天然小分子（DHM等）及复合配方。",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/2sXNZCTjnf6Fn4sQ84bSjN-img-4_1771440571000_na1fn_c21hbGwtbW9sZWN1bGUtY2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94LzJzWE5aQ1RqbmY2Rm40c1E4NGJTak4taW1nLTRfMTc3MTQ0MDU3MTAwMF9uYTFmbl9jMjFoYkd3dGJXOXNaV04xYkdVdFkyRnlaQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eZhvuhRAU3Mrp34FYOOzbfspwnuOTFb5k-ANCpFsEHFLAAWoLbM4-IO9zLmgQbkT33yE8qF23VZPaPxHHQTNZlDt-xxeAc-p~VOz5weIHNvcibzwjC4OvAQiWonnizmRKaoZHGDnkKwM4mOBT2~i4D83oLm5fPvpTuiQ1hZNJd-ALGOcla4K1BifswzogG5UklQ1jTaRFhFnBvZA3NR~xehdE~k~RvptFgR5n6f7OIfSTqPpl4sydKXzL5WuNnyneJZ3b6yX-Wf2Pov8rcHbcuQD8gRmPx~c0ypWx3ugLC5039xvZDyWMCw7xV83jmMwBqKFWDmEgfXqSRMPdnZBAg__",
    coreAdvantage: "技术成熟度高，产品化路径清晰，已有人体临床试验数据",
    mainChallenge: "NADH/NRH稳定性差，配方优化需更多临床验证，竞争激烈",
    keyStudies: [
      {
        title: "NADH and NRH as potential dietary supplements for early liver injury caused by acute alcohol exposure",
        journal: "Journal of Functional Foods",
        year: 2021,
        keyFinding: "首次系统比较NADH和NRH的效果：与NMN相比，NADH和NRH在相同浓度下能诱导更高水平的NAD+提升，无论预防性还是治疗性给药都能显著降低血液中的乙醇和乙醛浓度。",
        doi: "10.1016/j.jff.2021.104852"
      },
      {
        title: "Food plants as adjuvant medicines: protective effects and clinical potential in alcoholic liver disease",
        journal: "Frontiers in Pharmacology",
        year: 2025,
        keyFinding: "DHM能通过激活AMPK使肝脏NAD+水平提升43%，并恢复SIRT1和线粒体SIRT3的表达。",
        doi: "10.3389/fphar.2025.1586238"
      },
      {
        title: "A novel blend of dietary ingredients mitigates blood and breath ethanol levels after acute alcohol intake",
        journal: "Nutrition and Dietary Supplements",
        year: 2025,
        keyFinding: "Safety Shot产品（含红参、NAC、DHM、胞磷胆碱等）的双盲RCT：显著降低血液和呼气酒精浓度，加速乙醛清除，改善头痛、疲劳等主观感受。",
        doi: "10.2147/NDS.S503897"
      },
      {
        title: "Hepatic NMNAT1 is required to defend against alcohol-associated fatty liver disease",
        journal: "Science Advances",
        year: 2025,
        keyFinding: "酒精通过IRF1泛素化降解通路下调NMNAT1表达，导致核内NAD+池枯竭，抑制SIRT1活性，引发酒精性脂肪肝。",
        doi: "10.1126/sciadv.adt6195"
      }
    ],
    details: [
      "NAD+前体（NMN、NR、NADH、NRH）直接补充辅酶原料",
      "NADH/NRH效果优于NMN，但稳定性和成本是核心痛点",
      "DHM（二氢杨梅素）可使肝脏NAD+水平提升43%",
      "复合配方（如Safety Shot）已有双盲RCT临床证据",
      "多成分协同：加速代谢+抗氧化+抗炎+神经保护"
    ],
    investmentSignals: [
      "NADH/NRH稳定化技术是关键壁垒，谁先突破谁赢",
      "DHM高效提取和纯化工艺是核心竞争力",
      "高质量人体临床试验数据是品牌护城河",
      "复合配方的科学配比（非简单堆砌）是差异化关键",
      "展现出最强的产品化潜力，近期可行"
    ]
  }
];

export const NAD_PRECURSORS: NADPrecursor[] = [
  {
    name: "NMN/NR",
    fullName: "烟酰胺单核苷酸 / 烟酰胺核糖苷",
    advantage: "研究充分，抗衰老概念加持",
    disadvantage: "价格昂贵，稳定性问题，口服吸收转化率争议",
    keyStudy: "Redox Biology (2018)",
    highlight: false
  },
  {
    name: "NAM",
    fullName: "烟酰胺",
    advantage: "成本极低，易于获取",
    disadvantage: "大剂量可能抑制Sirtuins",
    keyStudy: "Food Sci & Nutr (2024)",
    highlight: false
  },
  {
    name: "NADH/NRH",
    fullName: "还原型烟酰胺腺嘌呤二核苷酸 / 还原型烟酰胺核糖苷",
    advantage: "直接提升NAD+/NADH比值，效果更强",
    disadvantage: "成本更高，稳定性差，研究相对较少",
    keyStudy: "J Funct Foods (2021)",
    highlight: true
  }
];

export const CORE_MECHANISM = {
  title: "为什么NAD+再生是酒精代谢的「限速步骤」",
  points: [
    {
      label: "代谢链",
      text: "乙醇 → (ADH, 消耗NAD+) → 乙醛 → (ALDH2, 消耗NAD+) → 乙酸"
    },
    {
      label: "核心矛盾",
      text: "每代谢1分子乙醇，消耗2分子NAD+。大量饮酒时NAD+迅速耗尽，NAD+/NADH比值急剧下降。"
    },
    {
      label: "负反馈",
      text: "高浓度NADH反过来抑制ADH和ALDH活性，酒精和乙醛在体内堆积，这是醉酒和宿醉的主因。"
    },
    {
      label: "最新发现",
      text: "线粒体NAD+含量是肝脏再生的直接限制因素（Nature Metabolism, 2025）；酒精通过降解NMNAT1导致核内NAD+枯竭（Science Advances, 2025）。"
    }
  ],
  conclusion: "所有有效的解酒策略，底层逻辑必然指向同一个终点：维持或提升关键区室的NAD+水平，加速NADH的再氧化。"
};

export const COMPARISON_DIMENSIONS = [
  { key: "maturity", label: "技术成熟度", description: "从实验室到产品的距离" },
  { key: "investability", label: "投资价值", description: "当前阶段的投资吸引力" },
  { key: "marketReadiness", label: "市场就绪度", description: "距离商业化产品的距离" }
] as const;

/* ─── 养生将军产品案例 ─── */

export interface Ingredient {
  name: string;
  role: string; // 君/臣/佐/使
  roleLabel: string;
  modernMechanism: string;
  keyCompounds: string[];
}

export interface MechanismModule {
  id: string;
  title: string;
  icon: string; // lucide icon name
  color: string;
  pathways: {
    name: string;
    detail: string;
  }[];
}

export const YANGSHENG_PRODUCT = {
  name: "养生将军",
  type: "固体饮料",
  tagline: "食药同源植物配方，多靶点协同的解酒护肝体系",
  description: "以食药同源植物高良姜、葛根、人参、灵芝、年份茯砖茶、青苹果、罗汉果为原料，采用现代提取分离纯化技术，高效萃取生物活性成分精华，研制的具有解酒、护肝、助眠、养颜多重生物活性的速溶固体饮料。",
  institutions: [
    "国家植物功能成分利用工程技术研究中心",
    "北京一叶归真生物科技有限公司",
    "国家中医药管理局亚健康干预技术重点实验室",
    "湖南农业大学茶学教育部重点实验室",
    "湖南师范大学大健康研究院"
  ],
  ingredients: [
    {
      name: "葛根",
      role: "jun",
      roleLabel: "君药",
      modernMechanism: "葛根素、大豆苷元显著提高ADH和ALDH2活性，加速乙醇代谢；黄酮类成分减轻酒精对血脑屏障通透性影响；抑制肝星状细胞活化，抗肝纤维化",
      keyCompounds: ["葛根素", "大豆苷元", "黄酮类"]
    },
    {
      name: "人参",
      role: "jun",
      roleLabel: "君药",
      modernMechanism: "人参皂苷抑制NF-κB促炎信号通路，减少TNF-α、IL-6等炎症因子；皂苷Rb1调节GABA受体镇静安神；具有适应原样作用调节HPA轴",
      keyCompounds: ["人参皂苷", "皂苷Rb1", "三萜类"]
    },
    {
      name: "高良姜",
      role: "chen",
      roleLabel: "臣药",
      modernMechanism: "姜黄素、高良姜素增强ADH和ALDH2活性，与葛根协同增效；强大的抗炎、抗溃疡作用保护胃黏膜",
      keyCompounds: ["姜黄素", "高良姜素"]
    },
    {
      name: "灵芝",
      role: "chen",
      roleLabel: "臣药",
      modernMechanism: "灵芝三萜抑制NF-κB通路减轻酒精性肝炎；多糖增强免疫调节、促进皮肤细胞新陈代谢；调节GABA受体协同安神助眠",
      keyCompounds: ["灵芝三萜", "灵芝多糖"]
    },
    {
      name: "年份茯砖茶",
      role: "chen",
      roleLabel: "臣药",
      modernMechanism: "茶多酚、茶多糖及益生菌代谢产物结合酒精及毒素加速肾脏排出；他汀类天然成分调节血脂，减轻酒精性脂肪肝",
      keyCompounds: ["茶多酚", "茶多糖", "他汀类"]
    },
    {
      name: "青苹果",
      role: "zuo",
      roleLabel: "佐药",
      modernMechanism: "维生素C和多酚是强大抗氧化剂，直接清除自由基并上调SOD、GSH等抗氧化酶系统；酸甘之性缓解酒后口干舌燥",
      keyCompounds: ["维生素C", "多酚"]
    },
    {
      name: "罗汉果",
      role: "zuo",
      roleLabel: "佐药",
      modernMechanism: "通便作用有助于将酒毒从大肠排出；清热润肺缓解咽喉干燥；提供津液滋润",
      keyCompounds: ["罗汉果甜苷", "三萜类"]
    }
  ] as Ingredient[],
  mechanisms: [
    {
      id: "detox",
      title: "解酒",
      icon: "Zap",
      color: "#d4a017",
      pathways: [
        {
          name: "加速乙醇代谢",
          detail: "葛根素+大豆苷元提高ADH/ALDH2活性，高良姜素协同增效，加速乙醇→乙醛→乙酸全链路转化"
        },
        {
          name: "保护胃肠道与血脑屏障",
          detail: "高良姜抗炎抗溃疡保护胃黏膜，减少恶心呕吐；葛根黄酮减轻酒精对血脑屏障通透性影响，缓解头晕等神经症状"
        },
        {
          name: "促进排泄与吸附毒素",
          detail: "茯砖茶茶多酚、茶多糖及益生菌代谢产物结合酒精及毒素加速肾脏排出；罗汉果通便助肠道排毒"
        }
      ]
    },
    {
      id: "liver",
      title: "护肝",
      icon: "Shield",
      color: "#34d399",
      pathways: [
        {
          name: "抗氧化应激与清除自由基",
          detail: "葛根黄酮类、灵芝多糖和三萜、人参皂苷、青苹果维C和多酚，直接清除自由基并上调SOD、GSH等抗氧化酶系统，减轻脂质过氧化损伤"
        },
        {
          name: "抗炎与抑制肝细胞凋亡",
          detail: "灵芝三萜和人参皂苷抑制NF-κB促炎信号通路，减少TNF-α、IL-6等炎症因子产生；调节Bcl-2/Bax凋亡相关蛋白，抑制肝细胞程序性死亡"
        },
        {
          name: "调节肝脏代谢与抗纤维化",
          detail: "葛根素抑制肝星状细胞活化，减少胶原沉积，具有抗肝纤维化潜力；茯砖茶他汀类天然成分调节血脂，减轻酒精性脂肪肝"
        }
      ]
    },
    {
      id: "sleep",
      title: "助眠",
      icon: "Moon",
      color: "#818cf8",
      pathways: [
        {
          name: "调节神经递质",
          detail: "人参皂苷Rb1和灵芝三萜调节GABA受体产生镇静安神作用；调节5-HT和多巴胺系统稳定情绪，促进睡眠"
        },
        {
          name: "调节HPA轴",
          detail: "人参皂苷和灵芝多糖具有适应原样作用，帮助机体恢复HPA轴正常节律，降低应激反应，改善睡眠质量"
        },
        {
          name: "改善身体内环境",
          detail: "通过解酒护肝减轻身体不适（口干、胃肠不适），为睡眠创造良好的生理基础"
        }
      ]
    },
    {
      id: "beauty",
      title: "养颜",
      icon: "Sparkles",
      color: "#f472b6",
      pathways: [
        {
          name: "内源性抗氧化与抗炎",
          detail: "全面的抗氧化、抗炎成分通过血液循环作用于全身包括皮肤，从内部延缓皮肤老化"
        },
        {
          name: "改善微循环",
          detail: "葛根和人参扩张血管改善外周血液循环，为皮肤输送更多氧气和营养，带走代谢废物"
        },
        {
          name: "调节内分泌与免疫力",
          detail: "人参和灵芝调节内分泌增强免疫功能，改善因压力、熬夜导致的皮肤问题；灵芝多糖促进皮肤细胞新陈代谢和修复"
        }
      ]
    }
  ] as MechanismModule[],
  synergySummary: [
    { module: "解酒", formula: "葛根 + 高良姜协同加速酒精代谢，茯砖茶 + 罗汉果促进排泄" },
    { module: "护肝", formula: "葛根 + 灵芝 + 人参的强大抗氧化、抗炎组合，保护肝细胞" },
    { module: "助眠", formula: "人参 + 灵芝调节神经递质和HPA轴，从根源消除身体不适" },
    { module: "养颜", formula: "全面内源抗氧化、改善循环、调节免疫，由内而外" }
  ],
  nadConnection: "养生将军的解酒机制与NAD+再生理论高度契合：葛根素和高良姜素通过提高ADH/ALDH2活性加速乙醇代谢，本质上就是在加速NAD+的消耗和再生循环。配方中的抗氧化成分（灵芝三萜、人参皂苷、维C）则通过保护线粒体功能间接维护NAD+的再生能力。这是一个从传统经验出发、与现代NAD+代谢科学不谋而合的产品案例。"
};

export const REFERENCES = [
  { id: 1, text: "Cederbaum, A. I. (2012). Alcohol metabolism. Clinics in liver disease, 16(4), 667-685." },
  { id: 2, text: "Haseba, T. (2025). Enzymatic Control of Alcohol Metabolism in the Body. IJMS, 26(19), 9479." },
  { id: 3, text: "Ding, Q., et al. (2025). Hepatocyte mitochondrial NAD+ content is limiting for liver regeneration. Nature Metabolism." },
  { id: 4, text: "Ding, Q., et al. (2025). Hepatic NMNAT1 is required to defend against alcohol-associated fatty liver disease. Science Advances, 11(26)." },
  { id: 5, text: "Bell, D. J., et al. (2025). Integrating incompatible tandem photobiocatalysis in artificial cells. Science Advances, 11(27)." },
  { id: 6, text: "Tang, Y., et al. (2025). Topology-controlled Pt atomic sites enhance electron utilization efficiency for NAD+ regeneration. NSR, 12(11)." },
  { id: 7, text: "Li, J., et al. (2026). NADH-Activated NIR Fluorescent Probe for Screening of ADH/ALDH2 Dual Agonists. Analytical Chemistry." },
  { id: 8, text: "Wang, Y., et al. (2025). A Novel Lactobacillus strain with Alcohol Degradation Capability. Preprints.org." },
  { id: 9, text: "Wang, S., et al. (2018). NR attenuates alcohol induced liver injuries via SirT1/PGC-1α pathway. Redox Biology, 17, 89-98." },
  { id: 10, text: "Liu, Y., et al. (2024). Restoring energy metabolism by NAD+ supplement prevents alcohol-induced liver injury. Food Sci & Nutr." },
  { id: 11, text: "Wu, K., et al. (2021). NADH and NRH as potential dietary supplements for early liver injury. J Funct Foods, 87, 104852." },
  { id: 12, text: "Li, C., et al. (2025). Food plants as adjuvant medicines in alcoholic liver disease. Frontiers in Pharmacology, 16." },
  { id: 13, text: "La Monica, M. B., et al. (2025). A novel blend of dietary ingredients mitigates blood and breath ethanol levels. NDS, 17, 43-62." }
];
