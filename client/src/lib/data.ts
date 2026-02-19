/* ─── 植物提取科普知识库 · 数据层 ─── */

export const HERO_IMAGE =
  "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/jbY0GChLpYRA8ZCKlrBBvJ-img-1_1771532273000_na1fn_aGVyby1ib3RhbmljYWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94L2piWTBHQ2hMcFlSQThaQ0tsckJCdkotaW1nLTFfMTc3MTUzMjI3MzAwMF9uYTFmbl9hR1Z5YnkxaWIzUmhibWxqWVd3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ilNzKoasIjQhFm4G5EIZDQhcLnf6AI25nyb0UMmm-Q52eZlQQYvXrpTTllvznn9Lko1Atgx6ng5JhCxV8STWwrHTchpTzjI6E0I5VwMiOE85aWvaNbXMLODU0kFnDeUnsijAcKBNnJ858nXNJeoSQLO75e2~e7rYrF5~epDrEqSzjt91d3qwtR-sI0Qpoij2Y22QM9uhwjv8cumze7nUhIi~a7qWr98UZ9IOjsuEiYX88HemSn0Kfvdakm1v7KeI5KBKTXDm0gN7bWkZdQ4u127ynP6Ud2V1pJjBaa9VxNgSGE34CRMTLj5~ZnyRE2tftoL6wji9UIHDixGoGzw2Wg__";

/* ─── Section 1: 什么是植物提取 ─── */
export const WHAT_IS = {
  title: "从一片叶子到一个分子",
  subtitle:
    "植物提取，是用现代科学的手术刀，精准切开植物的细胞壁，把藏在里面的活性分子完整地请出来。",
  points: [
    {
      title: "植物活性分子",
      desc: "植物在亿万年进化中产生了数以万计的次级代谢产物：黄酮类、萜类、多酚类、皂苷类、生物碱。这些分子是植物的\"免疫系统\"，也是人类健康的宝库。全球超过50%的已批准药物，直接或间接来源于植物天然产物。",
      icon: "leaf",
    },
    {
      title: "分子药理学",
      desc: "现代分子药理学能精确解析每一种植物活性分子的作用靶点和信号通路。比如葛根中的葛根素，可以特异性地提高乙醇脱氢酶（ADH）和乙醛脱氢酶（ALDH2）的活性；灵芝三萜能抑制NF-κB促炎信号通路。",
      icon: "microscope",
    },
    {
      title: "多靶点协同效应",
      desc: "与化学合成的单一分子不同，植物提取物天然含有数十种活性成分。它们通过\"多成分-多靶点-多通路\"的网络药理学机制产生协同效应，整体效果大于各部分之和。学术界称之为 Entourage Effect。",
      icon: "network",
    },
  ],
};

/* ─── Section 2: 三条路径对比 ─── */
export const THREE_PATHS = {
  title: "同一棵植物，三种打开方式",
  subtitle: "以葛根为例，看三种技术路径如何处理同一味原料",
  paths: [
    {
      id: "traditional",
      name: "传统煎制",
      era: "千年传承",
      color: "amber",
      method: "水煮熬制",
      description:
        "将葛根切片，加水大火煮沸后小火慢熬30-60分钟。这是最古老的方式，依赖经验和手感。",
      pros: [
        "传承千年的经验智慧",
        "整体调理的哲学思想",
        "原料易得、操作简单",
      ],
      cons: [
        "有效成分提取率仅10-30%",
        "高温破坏热敏性活性分子",
        "批次间差异大，无法标准化",
        "口感苦涩，依从性差",
      ],
      extractionRate: "10-30%",
      keyLoss: "葛根素在100°C下降解率约15-25%",
    },
    {
      id: "synthesis",
      name: "化学合成",
      era: "现代化学",
      color: "sky",
      method: "化学反应合成单体分子",
      description:
        "在实验室中用化学反应从零合成葛根素单体分子。纯度极高，但只有一种分子。",
      pros: [
        "纯度可达99%以上",
        "批次一致性极高",
        "剂量精确可控",
      ],
      cons: [
        "只有单一分子，丢失协同效应",
        "合成过程可能引入有害溶剂残留",
        "成本高，工艺复杂",
        "缺少植物基质中的辅助因子",
      ],
      extractionRate: "N/A",
      keyLoss: "丢失大豆苷元、黄酮类等数十种协同分子",
    },
    {
      id: "extraction",
      name: "现代植物提取",
      era: "科技融合",
      color: "emerald",
      method: "超临界萃取 / 膜分离 / 大孔树脂吸附",
      description:
        "用精确控温控压的现代工艺，在不破坏活性分子结构的前提下，把植物中的有效成分群完整地提取出来。",
      pros: [
        "有效成分提取率70-90%",
        "保留多组分协同效应",
        "可标准化控制有效成分含量",
        "低温操作保护热敏分子",
      ],
      cons: [
        "设备投入大，技术门槛高",
        "需要深厚的植物化学研究基础",
        "产业化需要国家级实验室支撑",
      ],
      extractionRate: "70-90%",
      keyLoss: "最大限度保留全组分活性",
    },
  ],
  comparisonTable: [
    {
      metric: "有效成分提取率",
      traditional: "10-30%",
      synthesis: "N/A（化学合成）",
      extraction: "70-90%",
    },
    {
      metric: "活性分子多样性",
      traditional: "部分保留",
      synthesis: "单一分子",
      extraction: "完整保留",
    },
    {
      metric: "批次标准化",
      traditional: "低",
      synthesis: "极高",
      extraction: "高",
    },
    {
      metric: "协同效应",
      traditional: "有但不稳定",
      synthesis: "无",
      extraction: "有且可控",
    },
    {
      metric: "热敏分子保护",
      traditional: "差（100°C水煮）",
      synthesis: "不涉及",
      extraction: "好（低温萃取）",
    },
    {
      metric: "安全性",
      traditional: "高（食用历史）",
      synthesis: "需验证（溶剂残留）",
      extraction: "高（天然+质控）",
    },
  ],
};

/* ─── Section 3: 国家重点实验室 ─── */
export const LABS = {
  title: "谁在做这件事",
  subtitle:
    "植物提取不是在厨房里煮茶，是需要国家级科研平台支撑的系统工程",
  institutions: [
    {
      name: "国家植物功能成分利用工程技术研究中心",
      level: "国家级",
      focus: "植物功能成分的高效提取、分离纯化和产业化应用",
      significance:
        "全国唯一专注于植物功能成分利用的国家级工程技术研究中心，掌握从原料筛选到产业化的全链条技术。",
    },
    {
      name: "国家中医药管理局亚健康干预技术重点实验室",
      level: "国家级",
      focus: "亚健康状态的中医药干预技术研究",
      significance:
        "将传统中医药理论与现代干预技术结合，为食药同源产品提供研究支撑。",
    },
    {
      name: "湖南农业大学茶学教育部重点实验室",
      level: "省部级",
      focus: "茶叶功能成分与健康效应研究",
      significance:
        "在茶多酚、茶多糖等功能成分的提取和活性研究方面处于国内领先水平。",
    },
    {
      name: "湖南师范大学大健康研究院",
      level: "省部级",
      focus: "大健康产业的基础研究和应用转化",
      significance:
        "跨学科整合生物学、化学、医学资源，为植物提取产品的功能验证提供科学依据。",
    },
  ],
};

/* ─── Section 4: C端市场空白 ─── */
export const MARKET_GAP = {
  title: "一个奇怪的现象",
  subtitle:
    "中国有全球最强的植物提取产业链，却几乎没有面向消费者的植物提取品牌",
  stats: [
    {
      label: "全球植物提取物市场（2023）",
      value: "358亿",
      unit: "美元",
      growth: "CAGR 10.5%",
    },
    {
      label: "中国药用植物提取物（2025）",
      value: "8.65亿",
      unit: "美元",
      growth: "CAGR 9.24%",
    },
    {
      label: "中国膳食补充剂（2024）",
      value: "259亿",
      unit: "美元",
      growth: "CAGR 10.4%",
    },
  ],
  paradox: [
    {
      title: "产业链全球领先",
      desc: "中国是全球最大的植物提取物生产国和出口国。从原料种植、提取工艺到质量检测，产业链完整且成熟。",
    },
    {
      title: "出口为主，内销为辅",
      desc: "绝大部分植物提取物以B2B形式出口到欧美日韩，被国外品牌做成保健品、化妆品后高价卖回中国。",
    },
    {
      title: "C端品牌几乎空白",
      desc: "国内消费者能买到的要么是传统中成药，要么是进口保健品。\"植物提取\"这个品类在C端几乎没有认知。",
    },
    {
      title: "海外已有成功先例",
      desc: "日本的\"汉方\"、韩国的\"红参\"、欧洲的\"植物药\"都已完成C端品类教育。中国在这个赛道上还是空白。",
    },
  ],
};

/* ─── Section 5: 七味食药同源配方理念 ─── */
export const FORMULA = {
  title: "七味食药同源",
  subtitle:
    "每一味原料都有千年的食用历史，每一种活性分子都有现代科学的解析",
  ingredients: [
    {
      name: "葛根",
      role: "君",
      roleLabel: "核心主力",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/jbY0GChLpYRA8ZCKlrBBvJ-img-2_1771532290000_na1fn_aW5ncmVkaWVudC1nZWdlbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94L2piWTBHQ2hMcFlSQThaQ0tsckJCdkotaW1nLTJfMTc3MTUzMjI5MDAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFuWldkbGJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R2STWKEYwma1C3woYD~4j2CTVicSOQ-fCyjzfd6xtFXYrRU~AIu5WZmlauXLF~nKW7y4FNg5JMdZ1GbbHMkGioeIXdYmoWjLQxWVSZZgHEBobQrS0jePq5J8zT2FknNtBP15K9x-~4j0WSu2LP6YIwWLapisjSKulNt5SJDzXX6epefGPnAPe85VJ6JTyMwcwwG0-fL16-1nz98IpCWG6rdB4dYQ6gdd3GlrDUr6FKMr89Tf3--l5OjRzQVpC-xSm5H6rfxpV9dYLkA7PC9mRFY4gbwy~Q1OW8CO57wD1qWKZFCPsGEUZ6ZbArLx89tRLo0jpVJSyFa5MLamgso3QQ__",
      tradition: "《神农本草经》列为中品，\"主消渴，身大热，呕吐\"",
      molecules: ["葛根素", "大豆苷元", "黄酮类"],
      modernScience:
        "葛根素可特异性提高ADH和ALDH2活性，大豆苷元具有植物雌激素样作用，黄酮类成分是强效抗氧化剂。",
      color: "emerald",
    },
    {
      name: "人参",
      role: "君",
      roleLabel: "核心主力",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/jbY0GChLpYRA8ZCKlrBBvJ-img-3_1771532281000_na1fn_aW5ncmVkaWVudC1yZW5zaGVu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94L2piWTBHQ2hMcFlSQThaQ0tsckJCdkotaW1nLTNfMTc3MTUzMjI4MTAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzF5Wlc1emFHVnUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sihHxQRS~1DulevSHNPBrqxeOZZ9DYeH-nxeV4XgzsF09gQl6JpKb-h3g5TN-qwqi6Eg6MHOR1~2-EHrxKLeyf2VzrZJ9Vue7et7b3Zyh8S1Q1Rhas3rv5BLllr0DIEdXjRRa9W0DVe8YCm0Yjd1exXSoTPtfq6ly~qC0AFh30-RxGoS4N2UeE~F~dKifUXropRyqNlZOG31~k1fujo~QfTrMreJHaAl8buspvWcFjDtgCkn9dz2uXrdUYTTe3~v6Ekc-ajS7Dr5X-gO92iisggGauxFRH3mxtwcHpin6TENeCxZKCIY-6vwOiZy3SbpliRss1yHvyGL81YdhZRBwA__",
      tradition: "\"百草之王\"，《神农本草经》列为上品，\"主补五脏，安精神\"",
      molecules: ["人参皂苷", "皂苷Rb1", "三萜类"],
      modernScience:
        "人参皂苷抑制NF-κB促炎信号通路，皂苷Rb1调节GABA受体，具有适应原样作用调节HPA轴应激反应。",
      color: "red",
    },
    {
      name: "高良姜",
      role: "臣",
      roleLabel: "辅助增强",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/jbY0GChLpYRA8ZCKlrBBvJ-img-4_1771532266000_na1fn_aW5ncmVkaWVudC1nYW9saWFuZ2ppYW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94L2piWTBHQ2hMcFlSQThaQ0tsckJCdkotaW1nLTRfMTc3MTUzMjI2NjAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFuWVc5c2FXRnVaMnBwWVc1bi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=POpUfYe81~~lzmozpJi5inN74IU38Sv9q-lc9~pl2lFnA6Pxy6zTYjfTuau-wrbSznBq7A7EhoXalj0LNbW0OC2CsVVhha9c3gPgxnhqXxizz5psVcx8Jhh3JQDfJyYxiU6So-0iXZ-xEXt-R-P4sX7wIi4o9HOZwx6feYv0Xfh8fCWco3qkwHqco2o7FEKkuCLfR~S6d4xxy5pj3jCtBswQupWqD8jhuwZbOBVSMP9j8Jd5KKpSNAtvPDFlbEqeQWmrdXXDq~2NErDKRC3FpfdPoC8vLbjIL7fBkeHtiqL7hs6e29~X1hOHl~Ur5J6ygFSQm0OPAzMk~qFFrP8WFg__",
      tradition: "《名医别录》记载，\"温胃散寒，消食止痛\"",
      molecules: ["姜黄素", "高良姜素"],
      modernScience:
        "姜黄素和高良姜素增强ADH和ALDH2活性，与葛根协同增效。同时具有强大的抗炎、抗溃疡作用。",
      color: "orange",
    },
    {
      name: "灵芝",
      role: "臣",
      roleLabel: "辅助增强",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/jbY0GChLpYRA8ZCKlrBBvJ-img-5_1771532267000_na1fn_aW5ncmVkaWVudC1saW5nemhp.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94L2piWTBHQ2hMcFlSQThaQ0tsckJCdkotaW1nLTVfMTc3MTUzMjI2NzAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFzYVc1bmVtaHAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WTAq-Ql5y3DYn28jm~ISsSDp-FTDc0BhURvewEkXUhz2JVbBTDSEKxzRW47xAvObpoS5WV9QtyL6BKkIumik5WHUkgJmkyBHtAp0tpeC9UYyncvsOouY1HQj6Lz2SOK1nnD7G00xwtr3VypFPzr1D9xviBhB35pwtg6zR4xTwl9h2uwsloh~mNBbdOZYnVTBIotobBPrjrPOGzl4eWprJtaUjovg0e8QskGYE3~NXqT3bp4z~u6C6v~LOQlHuvZyDXONbt3RULXAtHg7Kg9ehawvGWG~tWCFVVc~nYYjxNe9xKwoz-DAFMPxglm2q9hV54G8RypJe7VKdheDtlnQBQ__",
      tradition: "\"仙草\"，《神农本草经》列为上品，\"补气安神，止咳平喘\"",
      molecules: ["灵芝三萜", "灵芝多糖"],
      modernScience:
        "灵芝三萜抑制NF-κB通路，灵芝多糖增强免疫调节、促进细胞新陈代谢，调节GABA受体协同安神。",
      color: "purple",
    },
    {
      name: "年份茯砖茶",
      role: "臣",
      roleLabel: "辅助增强",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/KXE9q1FBNJwpmkxUCzabVY-img-1_1771532370000_na1fn_aW5ncmVkaWVudC1mdXpodWFu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94L0tYRTlxMUZCTkp3cG1reFVDemFiVlktaW1nLTFfMTc3MTUzMjM3MDAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFtZFhwb2RXRnUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=T-ZUwkpzZ6p5WdOtkp3VaGQKg45f9BkGMxDqDvewEZ00xCa6a5NYxp8mXPzREu4InkVQ3dPfsTYRanG1QKfkB64t~WCnz~duynRO~p95mJ5tOMCZl3uohaBOlVcbbUgS0FOpQ86G6MJrAGZ~qHtUENiHnnFBX3vClqnSDtMuUd2iOGEOAq87VHKmmpN-7G5pnpKhGwFq9kUAZwvaQq2G2dXkd79udtXUQC~buqJcJYgIwJFx4DGXuRaCa~6YhN6st8d58r9hFB5KgTSA7~11UZ0x8pYnB1s0j2WnLzr96Ch1H5qcR2plvpRk5WdpuYhxu0EN0SDndCNJDZfKFpr8sQ__",
      tradition: "\"黑茶之祖\"，边疆民族\"宁可三日无粮，不可一日无茶\"",
      molecules: ["茶多酚", "茶多糖", "他汀类"],
      modernScience:
        "茶多酚和茶多糖结合毒素加速排出，益生菌代谢产物调节肠道菌群，天然他汀类成分调节血脂代谢。",
      color: "yellow",
    },
    {
      name: "青苹果",
      role: "佐",
      roleLabel: "协助兼治",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/KXE9q1FBNJwpmkxUCzabVY-img-2_1771532361000_na1fn_aW5ncmVkaWVudC1hcHBsZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94L0tYRTlxMUZCTkp3cG1reFVDemFiVlktaW1nLTJfMTc3MTUzMjM2MTAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFoY0hCc1pRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kuBvyaXCbVwi1yf4nrjBYfYrDje9WMO6cOpW1LVyIUhGqNYRoGOlMryeyFwbShZ1r-QPK4Hs09mImzaS6BiiHu6AQRju0OZ6ja~MlJUritgE3be7xqPqtGcQHh4IlWV8BYGSm36DIrikCHgBud~GRxIWs6uXccONmh-pzGNVBe9oZJnaLrErOfhKWUWJax0XXk2bbxOoeLSsUceV1636s1SI6-5RHeLGkW6CkMhozsROLULOyY5RRSmujrAIfkfORtfMWWBeBVMKcr8dSU0obzf2TvU9vwZADdr74-fVhBQI5d9klxSJi8IZMGfz1qp0HaVR1Sho-6n-UEviApml~w__",
      tradition: "\"日食一苹果，医生远离我\"，酸甘生津、开胃醒脾",
      molecules: ["维生素C", "多酚"],
      modernScience:
        "维生素C和多酚是强效抗氧化剂，直接清除自由基并上调SOD、GSH等抗氧化酶系统。酸甘之性缓解口干。",
      color: "green",
    },
    {
      name: "罗汉果",
      role: "佐",
      roleLabel: "协助兼治",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/YkFRAwpqtEPCRLrGXX29J5/sandbox/KXE9q1FBNJwpmkxUCzabVY-img-3_1771532368000_na1fn_aW5ncmVkaWVudC1sdW9oYW5ndW8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWWtGUkF3cHF0RVBDUkxyR1hYMjlKNS9zYW5kYm94L0tYRTlxMUZCTkp3cG1reFVDemFiVlktaW1nLTNfMTc3MTUzMjM2ODAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFzZFc5b1lXNW5kVzgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MY9QGjD9J7gknEzdBa7ycg9zcPmqvLL456CqpejO67EXbf8PfKlBG3nVRjXo4x6K0UEDoqmX6GomxkYz-X6SUIVu0TDIVOVD915NhD02XoDNc--djsZpKAp1ZrETMvqIfL6NVSi8KGP-FJL8b9xLC~QDJboMFpo~oKnWJWCV3F732UMepNaSY5AdVVzZI-qr-ANbuIjlf6nfXZnwV2qqFiRE7w-6npYZRNl~Y0QDPMKdmCgqB7roEG7JdLoSw-LtBxu7N8iHwJ5wkfvRYFuR6eC0v2GRcBYwFsfKm9zX5BFCzmIB~x68b0iMyWhrH1MvF1RLQoHlfZnlSpOdMkRmaQ__",
      tradition: "\"神仙果\"，《岭南采药录》记载，\"理痰火咳嗽\"",
      molecules: ["罗汉果甜苷", "三萜类"],
      modernScience:
        "罗汉果甜苷甜度为蔗糖300倍但零热量，三萜类成分润肺通便，有助于将代谢废物从肠道排出。",
      color: "teal",
    },
  ],
};

/* ─── Section 6: 海外对标 ─── */
export const OVERSEAS = {
  title: "他们已经做到了",
  subtitle:
    "日本、韩国、欧洲的植物提取品牌早已完成C端品类教育，并创造了数十亿美元的市场",
  brands: [
    {
      country: "日本",
      flag: "🇯🇵",
      brand: "津村 Tsumura",
      founded: "1893年",
      revenue: "12.2亿美元",
      marketSize: "231亿美元（2025）",
      marketGrowth: "预计2033年达486亿美元",
      core: "128种汉方处方制剂",
      highlight: "80%纳入日本国民医保",
      story:
        "津村用了130年，把中国传来的草药方剂做成了标准化提取物制剂。128种汉方处方中有80%被纳入日本国民医保体系。一家企业，撑起了一个品类。",
      color: "rose",
    },
    {
      country: "韩国",
      flag: "🇰🇷",
      brand: "正官庄 CheongKwanJang",
      founded: "1899年",
      revenue: "10.4亿美元",
      marketSize: "7.5亿美元（红参市场）",
      marketGrowth: "CAGR 5.1%",
      core: "6年根红参提取物",
      highlight: "全球人参市场份额41.9%，连续10年第一",
      story:
        "正官庄只做一件事：把高丽红参做到极致。6年根种植、标准化提取、全球化品牌。单一原料做到10亿美元级，连续10年全球人参市场第一。",
      color: "red",
    },
    {
      country: "欧洲",
      flag: "🇩🇪",
      brand: "Schwabe / Bionorica",
      founded: "1866年",
      revenue: "数十亿欧元（合计）",
      marketSize: "653亿美元（2024）",
      marketGrowth: "预计2033年达1105亿美元",
      core: "银杏叶提取物 EGb 761",
      highlight: "EMA植物药专论体系，临床试验驱动",
      story:
        "Schwabe的银杏叶提取物EGb 761是全球植物药的标杆产品。欧洲建立了完整的植物药专论体系（EMA），用临床试验数据说话，让植物提取物获得了和化学药同等的医学地位。",
      color: "blue",
    },
  ],
  insight:
    "日本用汉方、韩国用红参、欧洲用植物药，都完成了从传统草药到现代消费品牌的跨越。中国拥有最丰富的药用植物资源和最强的提取产业链，这个赛道上的C端品牌机会，还在等待被填补。",
};

/* ─── 参考文献 ─── */
export const REFERENCES = [
  {
    id: 1,
    authors: "Nasim, N. et al.",
    title:
      "Plant-derived natural products for drug discovery: Current approaches and prospects",
    journal: "Nucleus",
    year: 2022,
    note: "50%以上已批准药物直接或间接来源于天然产物",
    url: "https://link.springer.com/article/10.1007/s13237-022-00405-3",
  },
  {
    id: 2,
    authors: "El-Saadony, M.T. et al.",
    title:
      "Plant bioactive compounds: extraction, biological activities, and applications",
    journal: "Frontiers in Nutrition",
    year: 2025,
    note: "植物源生物活性化合物的系统综述",
    url: "https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2025.1584985/full",
  },
  {
    id: 3,
    authors: "Cao, S. et al.",
    title:
      "Comparative analysis of extraction technologies for plant bioactive compounds",
    journal: "PMC",
    year: 2025,
    note: "现代提取技术对比：超临界CO2、微波辅助、超声波辅助等",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11835478/",
  },
  {
    id: 4,
    authors: "Li, S. et al.",
    title: "Systems pharmacology analysis of synergy of TCM",
    journal: "Nature Scientific Reports",
    year: 2018,
    note: "网络药理学证实中药复方多靶点多通路协同效应",
    url: "https://www.nature.com/articles/s41598-018-34917-7",
  },
  {
    id: 5,
    authors: "Bitwell, C. et al.",
    title:
      "A review of modern and conventional extraction techniques and their impact on bioactivity",
    journal: "ScienceDirect",
    year: 2023,
    note: "被引779次，提取技术对活性成分影响的权威综述",
    url: "https://www.sciencedirect.com/science/article/pii/S2772753X23000126",
  },
  {
    id: 6,
    authors: "Sasidharan, S. et al.",
    title:
      "Extraction, isolation and characterization of bioactive compounds from plants",
    journal: "African J. Traditional Medicine",
    year: 2010,
    note: "被引2705次，植物活性成分提取的经典文献",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3218439/",
  },
  {
    id: 7,
    authors: "Cognitive Market Research",
    title: "Plant Extract Market Report 2024-2034",
    journal: "Industry Report",
    year: 2024,
    note: "全球植物提取物市场358亿美元，CAGR 10.5%",
    url: "https://www.cognitivemarketresearch.com/report/global-plant-extract-market-report",
  },
  {
    id: 8,
    authors: "Grand View Research",
    title: "China Dietary Supplements Market Size Report 2024-2030",
    journal: "Industry Report",
    year: 2024,
    note: "中国膳食补充剂市场259亿美元，CAGR 10.4%",
    url: "https://www.grandviewresearch.com/industry-analysis/china-dietary-supplements-market",
  },
];
