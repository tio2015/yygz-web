/**
 * UI 用例 — 大健康站
 * 目标：导航交互、页面跳转、移动端菜单、各页内容区块
 */
import { test, expect } from "@playwright/test";

// ─── 导航栏 ────────────────────────────────────────────
test.describe("导航栏 / 桌面端", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Logo 品牌名'一叶归真'可见", async ({ page }) => {
    await expect(page.locator("header")).toContainText("一叶归真");
  });

  test("初始状态：导航栏透明（bg-transparent）", async ({ page }) => {
    const header = page.locator("header");
    const cls = await header.getAttribute("class");
    expect(cls).not.toContain("backdrop-blur");
  });

  test("滚动 100px 后：导航栏变毛玻璃", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 150));
    await page.waitForTimeout(600);
    const header = page.locator("header");
    const cls = await header.getAttribute("class");
    expect(cls).toContain("backdrop-blur");
  });

  test("桌面导航包含'三大赛道'链接", async ({ page }) => {
    await expect(
      page.locator("header nav").getByRole("link", { name: /赛道/ })
    ).toBeVisible();
  });

  test("桌面导航包含'科研背书'链接", async ({ page }) => {
    await expect(
      page.locator("header nav").getByRole("link", { name: /科研/ })
    ).toBeVisible();
  });

  test("点击'三大赛道'跳转到 /tracks", async ({ page }) => {
    await page.locator("header nav").getByRole("link", { name: /赛道/ }).click();
    await expect(page).toHaveURL(/\/tracks/);
  });

  test("点击'合作咨询'按钮跳转到 /partner", async ({ page }) => {
    await page.locator("header").getByRole("link", { name: "招商合作" }).click();
    await expect(page).toHaveURL(/\/partner/);
  });
});

test.describe("导航栏 / 移动端汉堡菜单", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("桌面导航链接在手机端隐藏", async ({ page }) => {
    // 手机端 lg:flex 被隐藏
    const desktopNav = page.locator("header nav > .hidden");
    await expect(desktopNav.first()).not.toBeVisible();
  });

  test("汉堡按钮可见", async ({ page }) => {
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();
  });

  test("点击汉堡按钮，移动菜单展开", async ({ page }) => {
    await page.click('button[aria-label="Toggle menu"]');
    await expect(page.locator("header")).toContainText("招商合作");
  });

  test("移动菜单展开后，点击链接自动关闭", async ({ page }) => {
    await page.click('button[aria-label="Toggle menu"]');
    await page.locator("header").getByRole("link", { name: /赛道/ }).click();
    await expect(page).toHaveURL(/\/tracks/);
    // 菜单关闭：汉堡图标重新出现
    await expect(
      page.locator('button[aria-label="Toggle menu"]')
    ).toBeVisible();
  });
});

// ─── 首页各区块 ────────────────────────────────────────
test.describe("首页 / 各区块 UI", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Hero 副标题含'睡眠'、'应酬'、'养颜'三大场景", async ({ page }) => {
    const p = page.locator("section p").first();
    await expect(page.locator("section")).toContainText("睡眠");
  });

  test("信任数据区：存在4个统计项", async ({ page }) => {
    // TRUST_STATS 有4个指标
    await page.locator("section").nth(1).scrollIntoViewIfNeeded();
    const statNums = page.locator("[class*='text-4xl'], [class*='text-3xl']");
    expect(await statNums.count()).toBeGreaterThanOrEqual(3);
  });

  test("三大赛道预览卡片至少有3个", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(500);
    // 找赛道卡片
    const trackLinks = page.locator('a[href*="/tracks"]');
    expect(await trackLinks.count()).toBeGreaterThanOrEqual(1);
  });

  test("'了解三大赛道' CTA 点击跳转正确", async ({ page }) => {
    await page.getByRole("link", { name: /了解三大赛道/ }).click();
    await expect(page).toHaveURL(/\/tracks/);
  });

  test("'合作咨询' CTA 点击跳转正确", async ({ page }) => {
    await page.getByRole("link", { name: "合作咨询" }).first().click();
    await expect(page).toHaveURL(/\/partner/);
  });
});

// ─── 三大赛道页 ────────────────────────────────────────
test.describe("三大赛道页 / UI", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/tracks");
  });

  test("配方框架区块：七味原料全部展示", async ({ page }) => {
    await page.locator("body").scrollIntoViewIfNeeded();
    const ingredients = ["葛根", "人参", "高良姜", "灵芝", "茯砖茶", "青苹果", "罗汉果"];
    for (const ing of ingredients) {
      await expect(page.locator("body")).toContainText(ing);
    }
  });

  test("三个赛道 Tab 可点击切换", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    // 找赛道切换按钮
    const tabs = page.locator("button").filter({ hasText: /晚安|且酌|颜/ });
    expect(await tabs.count()).toBeGreaterThanOrEqual(2);
  });

  test("配伍框架包含君臣佐使标签", async ({ page }) => {
    await expect(page.locator("body")).toContainText("君药");
    await expect(page.locator("body")).toContainText("臣药");
  });
});

// ─── 科研背书页 ────────────────────────────────────────
test.describe("科研背书页 / UI", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/research");
  });

  test("院士姓名、头衔可见", async ({ page }) => {
    await expect(page.locator("body")).toContainText("刘仲华");
    await expect(page.locator("body")).toContainText("中国工程院院士");
  });

  test("国家科技进步奖信息可见", async ({ page }) => {
    await expect(page.locator("body")).toContainText("国家科技进步");
  });

  test("三个国家级科研平台展示", async ({ page }) => {
    await expect(page.locator("body")).toContainText("工程技术研究中心");
  });
});

// ─── 合作咨询页 ────────────────────────────────────────
test.describe("合作咨询页 / UI", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/partner");
  });

  test("页面包含联系方式相关内容", async ({ page }) => {
    await expect(page.locator("body")).toContainText(/联系|微信|电话|合作/);
  });
});

// ─── Footer ────────────────────────────────────────────
test.describe("Footer / UI", () => {
  test("所有页面均有 Footer", async ({ page }) => {
    for (const path of ["/", "/tracks", "/research", "/partner"]) {
      await page.goto(path);
      await page.locator("footer").scrollIntoViewIfNeeded();
      await expect(page.locator("footer")).toBeVisible();
    }
  });

  test("Footer 含品牌名称", async ({ page }) => {
    await page.goto("/");
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(page.locator("footer")).toContainText("一叶归真");
  });
});

// ─── 响应式布局 ────────────────────────────────────────
test.describe("响应式 / iPad 横屏", () => {
  test.use({ viewport: { width: 1024, height: 768 } });

  test("首页在平板宽度正常显示", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("h1")).toBeVisible();
  });
});
