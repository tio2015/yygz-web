/**
 * 冒烟测试 — 大健康站（yiyeguizhen.com/health）
 * 目标：4 个页面均可访问、关键内容存在、无阻断性错误
 */
import { test, expect } from "@playwright/test";

const PAGES = [
  { name: "首页", path: "/", keyword: "一叶归真" },
  { name: "三大赛道", path: "/tracks", keyword: "赛道" },
  { name: "科研背书", path: "/research", keyword: "院士" },
  { name: "合作咨询", path: "/partner", keyword: "合作" },
];

// ─── 通用：所有页面均可访问 ─────────────────────────────
for (const { name, path, keyword } of PAGES) {
  test(`[冒烟] ${name}页面加载正常，含关键词"${keyword}"`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator("body")).toContainText(keyword);
  });
}

// ─── 首页冒烟 ──────────────────────────────────────────
test.describe("首页 / 冒烟", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("页面标题含'一叶归真'", async ({ page }) => {
    await expect(page).toHaveTitle(/一叶归真/);
  });

  test("导航栏可见", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible();
  });

  test("Hero 区域品牌名可见", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("一叶归真");
  });

  test("两个 CTA 按钮存在", async ({ page }) => {
    await expect(page.locator('a[href="/tracks"]')).toBeVisible();
    await expect(page.locator('a[href="/partner"]').first()).toBeVisible();
  });

  test("无 JS 控制台报错", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.reload();
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });
});

// ─── 三大赛道页冒烟 ────────────────────────────────────
test.describe("三大赛道页 / 冒烟", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/tracks");
  });

  test("三个赛道标签全部存在", async ({ page }) => {
    // sleep / drink / beauty
    await expect(page.locator("body")).toContainText("晚安");
    await expect(page.locator("body")).toContainText("且酌");
    await expect(page.locator("body")).toContainText("颜");
  });

  test("配方框架标题可见", async ({ page }) => {
    await expect(page.locator("body")).toContainText("药食同源");
  });
});

// ─── 科研背书页冒烟 ────────────────────────────────────
test.describe("科研背书页 / 冒烟", () => {
  test("页面含院士关键信息", async ({ page }) => {
    await page.goto("/research");
    await expect(page.locator("body")).toContainText("刘仲华");
    await expect(page.locator("body")).toContainText("中国工程院");
  });
});

// ─── 合作咨询页冒烟 ────────────────────────────────────
test.describe("合作咨询页 / 冒烟", () => {
  test("页面有合作相关内容", async ({ page }) => {
    await page.goto("/partner");
    await expect(page.locator("body")).toContainText("合作");
  });
});

// ─── 404 页 ────────────────────────────────────────────
test("访问不存在路由，显示 404 页面", async ({ page }) => {
  await page.goto("/nonexistent-page-xyz");
  await expect(page.locator("body")).toContainText(/404|找不到|not found/i);
});
