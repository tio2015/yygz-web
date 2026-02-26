/**
 * 单元测试 — data.ts 数据层
 * 目标：确保核心数据完整、结构正确，改错了立刻报警
 */
import { describe, it, expect } from "vitest";
import { BRAND, TRACKS, TRUST_STATS, ACADEMICIAN, FORMULA_FRAMEWORK, NAV_ITEMS } from "../lib/data";

describe("BRAND — 品牌资产", () => {
  it("品牌名称为'一叶归真'", () => {
    expect(BRAND.name).toBe("一叶归真");
  });

  it("sub 品牌为'植养萃'", () => {
    expect(BRAND.sub).toBe("植养萃");
  });

  it("logo3d URL 不为空", () => {
    expect(BRAND.logo3d).toBeTruthy();
    expect(BRAND.logo3d).toMatch(/^https?:\/\//);
  });

  it("tagline 包含'院士科研'", () => {
    expect(BRAND.tagline).toContain("院士科研");
  });
});

describe("TRACKS — 三大赛道", () => {
  it("恰好有三个赛道", () => {
    expect(TRACKS).toHaveLength(3);
  });

  it("赛道 id 唯一", () => {
    const ids = TRACKS.map((t) => t.id);
    expect(new Set(ids).size).toBe(3);
  });

  it("每个赛道都有必填字段", () => {
    for (const track of TRACKS) {
      expect(track.id).toBeTruthy();
      expect(track.name).toBeTruthy();
      expect(track.tagline).toBeTruthy();
      expect(track.description).toBeTruthy();
      expect(track.scenarios.length).toBeGreaterThan(0);
    }
  });

  it("包含睡眠、解酒、养颜三大赛道", () => {
    const ids = TRACKS.map((t) => t.id);
    expect(ids).toContain("sleep");
    expect(ids).toContain("drink");
    expect(ids).toContain("beauty");
  });

  it("每个赛道有产品图片 URL", () => {
    for (const track of TRACKS) {
      expect(track.productImage).toMatch(/^https?:\/\//);
    }
  });
});

describe("TRUST_STATS — 信任数据", () => {
  it("存在且不为空", () => {
    expect(TRUST_STATS).toBeDefined();
    expect(TRUST_STATS.length).toBeGreaterThan(0);
  });

  it("每个指标有数值和标签", () => {
    for (const stat of TRUST_STATS) {
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    }
  });
});

describe("ACADEMICIAN — 院士信息", () => {
  it("姓名为'刘仲华'", () => {
    expect(ACADEMICIAN.name).toBe("刘仲华");
  });

  it("头衔含'中国工程院院士'", () => {
    expect(ACADEMICIAN.title).toContain("中国工程院院士");
  });

  it("至少有一项荣誉", () => {
    expect(ACADEMICIAN.awards.length).toBeGreaterThan(0);
  });
});

describe("FORMULA_FRAMEWORK — 配方框架", () => {
  it("包含七味原料", () => {
    expect(FORMULA_FRAMEWORK.ingredients).toHaveLength(7);
  });

  it("每味原料有名称、角色、说明", () => {
    for (const ing of FORMULA_FRAMEWORK.ingredients) {
      expect(ing.name).toBeTruthy();
      expect(ing.role).toBeTruthy();
      expect(ing.desc).toBeTruthy();
    }
  });

  it("君药至少有两味", () => {
    const junYao = FORMULA_FRAMEWORK.ingredients.filter((i) => i.role === "君药");
    expect(junYao.length).toBeGreaterThanOrEqual(2);
  });
});

describe("NAV_ITEMS — 导航菜单", () => {
  it("导航项不为空", () => {
    expect(NAV_ITEMS.length).toBeGreaterThan(0);
  });

  it("每个导航项有 label 和 href", () => {
    for (const item of NAV_ITEMS) {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^\//);
    }
  });

  it("包含首页路由", () => {
    const hrefs = NAV_ITEMS.map((i) => i.href);
    expect(hrefs.some((h) => h === "/" || h.includes("home"))).toBeTruthy();
  });
});
