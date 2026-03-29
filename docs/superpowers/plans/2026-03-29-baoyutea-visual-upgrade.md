# BaoyuTea Visual Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把且酌×宝玉煮茶联名落地页从纯文字占位升级为有真实品牌图片的视觉展示页。

**Architecture:** 只改 `ColabBaoyuTeaPage.tsx` 一个文件，新增图片常量区统一管理路径，各 section 组件内嵌入图片。图片先 cp 到 `client/public/baoyutea/imgs/`，通过 `/baoyutea/imgs/xxx` 绝对路径引用（与现有 `og.png` 等保持一致）。

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vite 7

---

## File Map

| 操作 | 路径 | 说明 |
|------|------|------|
| 新增图片 | `client/public/baoyutea/imgs/img-000.jpg` | 金色粒子叠加 |
| 新增图片 | `client/public/baoyutea/imgs/img-010.jpg` | 宝玉煮茶印章Logo |
| 新增图片 | `client/public/baoyutea/imgs/img-020.jpg` | 草本食材平铺 |
| 新增图片 | `client/public/baoyutea/imgs/img-050.jpg` | 红茶壶+茶点 |
| 新增图片 | `client/public/baoyutea/imgs/img-055.jpg` | 手工制茶特写 |
| 新增图片 | `client/public/baoyutea/imgs/img-109.jpg` | 白露·红玉青柠饮 |
| 新增图片 | `client/public/baoyutea/imgs/img-113.jpg` | 寒露·桂魄煮雪（Hero主视觉） |
| 新增图片 | `client/public/baoyutea/imgs/img-116.jpg` | 红楼梦人物线描 |
| 修改 | `client/src/pages/ColabBaoyuTeaPage.tsx` | 唯一改动文件 |

---

## Task 1：复制图片素材到 public 目录

**Files:**
- 无代码改动，shell 命令

- [ ] **Step 1: 复制所需图片**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"

SRC="/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/宝玉煮茶-院士轻养茶-图片"
DEST="client/public/baoyutea/imgs"

cp "$SRC/img-000.jpg" "$DEST/img-000.jpg"
cp "$SRC/img-010.jpg" "$DEST/img-010.jpg"
cp "$SRC/img-020.jpg" "$DEST/img-020.jpg"
cp "$SRC/img-050.jpg" "$DEST/img-050.jpg"
cp "$SRC/img-055.jpg" "$DEST/img-055.jpg"
cp "$SRC/img-109.jpg" "$DEST/img-109.jpg"
cp "$SRC/img-113.jpg" "$DEST/img-113.jpg"
cp "$SRC/img-116.jpg" "$DEST/img-116.jpg"
```

- [ ] **Step 2: 确认文件存在**

```bash
ls -lh "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web/client/public/baoyutea/imgs/"
```

预期输出：列表中包含 `img-000.jpg` 到 `img-116.jpg` 共8个新文件，以及原有的 `characters.jpg` 等。

- [ ] **Step 3: commit**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"
git add client/public/baoyutea/imgs/img-*.jpg
git commit -m "assets: add baoyutea brand image assets"
```

---

## Task 2：在 ColabBaoyuTeaPage.tsx 顶部新增图片路径常量

**Files:**
- Modify: `client/src/pages/ColabBaoyuTeaPage.tsx`（在现有常量区追加）

- [ ] **Step 1: 在文件顶部现有颜色常量后追加图片路径常量**

在 `ColabBaoyuTeaPage.tsx` 的第35行（`/* ─── Brand color constants ─── */` 块）之后，找到：

```typescript
const BY_RED = "#C0392B";   // 宝玉煮茶 朱红
const BY_CREAM = "#F5F0E8"; // 宝玉煮茶 米色
const QZ_GOLD = "#C9A84C";  // 且酌 金色
```

在其后紧接着添加：

```typescript
/* ─── Image asset paths ─── */
const IMG = {
  particles:   "/baoyutea/imgs/img-000.jpg",  // 金色粒子叠加（黑底）
  logoStamp:   "/baoyutea/imgs/img-010.jpg",  // 宝玉煮茶印章Logo（朱红椭圆）
  herbs:       "/baoyutea/imgs/img-020.jpg",  // 草本食材平铺
  teapot:      "/baoyutea/imgs/img-050.jpg",  // 红茶壶+粉色茶点（白底）
  craftHands:  "/baoyutea/imgs/img-055.jpg",  // 手工制茶特写
  drinkRed:    "/baoyutea/imgs/img-109.jpg",  // 白露·红玉青柠饮（深红竖版）
  drinkBrown:  "/baoyutea/imgs/img-113.jpg",  // 寒露·桂魄煮雪（暖棕竖版，Hero主视觉）
  characters:  "/baoyutea/imgs/img-116.jpg",  // 红楼梦人物线描（朱红，米白底）
} as const;
```

- [ ] **Step 2: 确认 TypeScript 无报错**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"
pnpm check 2>&1 | head -30
```

预期：无错误输出或只有与本次无关的既有警告。

- [ ] **Step 3: commit**

```bash
git add client/src/pages/ColabBaoyuTeaPage.tsx
git commit -m "feat(baoyutea): add image path constants"
```

---

## Task 3：升级 HeroSection

**Files:**
- Modify: `client/src/pages/ColabBaoyuTeaPage.tsx` — `HeroSection` 组件（约第37-121行）

当前 Hero 是单列居中布局，仅有文字和颜色渐变。改为桌面两栏（文字左、产品图右），背景叠加金色粒子。

- [ ] **Step 1: 替换 HeroSection 组件**

找到并完整替换 `function HeroSection()` 至其对应的闭合 `}`（约第37-121行）：

```typescript
/* ─── Section: Hero ─── */
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        minHeight: "92vh",
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(192,57,43,0.18) 0%, transparent 65%),
                     radial-gradient(ellipse 60% 40% at 30% 70%, rgba(201,168,76,0.10) 0%, transparent 60%),
                     #0D0D0D`,
      }}
    >
      {/* 金色粒子背景叠加 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${IMG.particles})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.06,
        }}
      />

      {/* 横向纹理线（保留原有） */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${BY_CREAM} 0px, ${BY_CREAM} 1px, transparent 1px, transparent 48px)`,
        }}
      />

      {/* 内容区：桌面两栏，移动单列 */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">

        {/* 左侧：文字内容 */}
        <div className="flex flex-col items-center lg:items-start gap-8 flex-1 text-center lg:text-left">
          {/* Collab badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase"
            style={{ border: `1px solid ${BY_RED}50`, color: BY_RED, background: `${BY_RED}10` }}
          >
            联名呈献 · Limited Collaboration
          </div>

          {/* Logo lockup */}
          <div className="flex items-center justify-center lg:justify-start gap-5 flex-wrap">
            {/* 且酌 logo */}
            <div className="flex flex-col items-center gap-1.5">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028732695/CdMABrLIqerRhKoR.png"
                alt="一叶归真 · 且酌"
                className="h-10 opacity-90"
                style={{ filter: "brightness(10)" }}
              />
              <span className="text-xs tracking-widest" style={{ color: QZ_GOLD }}>且 酌</span>
            </div>
            <span className="text-3xl font-thin" style={{ color: BY_RED, opacity: 0.7 }}>×</span>
            <div className="flex flex-col items-center gap-1.5">
              <img
                src={IMG.logoStamp}
                alt="宝玉煮茶"
                className="h-10 object-contain"
                style={{ filter: "drop-shadow(0 0 6px rgba(192,57,43,0.4))" }}
              />
              <span className="text-xs tracking-widest" style={{ color: BY_CREAM, opacity: 0.7 }}>宝玉煮茶</span>
            </div>
          </div>

          {/* 主标题 */}
          <div className="space-y-4 max-w-lg">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
            >
              席间且酌
              <br />
              <span style={{ color: BY_RED }}>席后宝玉</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: `${BY_CREAM}99` }}>
              应酬全链路东方养护方案
              <br />
              草本护肝 · 院士还元
            </p>
          </div>

          {/* Scroll cue */}
          <div
            className="flex flex-col items-center gap-2 opacity-50 animate-bounce"
            style={{ color: BY_CREAM }}
          >
            <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, transparent, ${BY_CREAM})` }} />
            <span className="text-[10px] tracking-widest">向下探索</span>
          </div>
        </div>

        {/* 右侧：产品图（移动端隐藏，桌面显示） */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative">
            {/* 光晕背景 */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(ellipse at center, ${BY_RED}20 0%, transparent 70%)`,
                transform: "scale(1.2)",
              }}
            />
            <img
              src={IMG.drinkBrown}
              alt="寒露·桂魄煮雪"
              loading="eager"
              className="relative z-10 rounded-2xl object-cover"
              style={{
                maxHeight: "55vh",
                maxWidth: 280,
                border: `1px solid rgba(192,57,43,0.3)`,
                boxShadow: `0 0 60px rgba(192,57,43,0.15)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 确认 TypeScript 无报错**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"
pnpm check 2>&1 | head -20
```

预期：无新增错误。

- [ ] **Step 3: commit**

```bash
git add client/src/pages/ColabBaoyuTeaPage.tsx
git commit -m "feat(baoyutea): upgrade HeroSection with product image and particles"
```

---

## Task 4：升级 StorySection（联名故事）

**Files:**
- Modify: `client/src/pages/ColabBaoyuTeaPage.tsx` — `StorySection` 组件（约第123-251行）

宝玉煮茶卡片改造：印章Logo替换文字框，产品图替换CSS占位，右下角加人物线描点缀。

- [ ] **Step 1: 找到宝玉煮茶卡片中的占位区域并替换**

在 `StorySection` 中，找到「宝玉煮茶 card」部分（`{/* 宝玉煮茶 card */}` 注释开始）。

**将现有的卡片内的两处改动：**

**改动一**：找到显示文字Logo的 div（约第82-90行区域，内有 `BAO<br />YU<br />TEA` 的 div），**将它替换为**：

```typescript
{/* 印章Logo */}
<div className="flex flex-col items-center gap-1.5">
  <img
    src={IMG.logoStamp}
    alt="宝玉煮茶"
    className="h-12 object-contain"
    style={{ filter: "drop-shadow(0 0 4px rgba(192,57,43,0.5))" }}
  />
</div>
```

**改动二**：找到现有的 CSS 占位框（`style={{ minHeight: 160, background: radial-gradient... }}` 的 div），**将它整块替换为**：

```typescript
{/* 产品图 */}
<div className="relative w-full mt-2">
  <img
    src={IMG.teapot}
    alt="宝玉煮茶 · 红茶壶"
    loading="lazy"
    className="w-full rounded-lg object-contain"
    style={{
      maxHeight: 200,
      mixBlendMode: "multiply",
      background: "transparent",
    }}
  />
  {/* 右下角人物线描点缀 */}
  <img
    src={IMG.characters}
    alt="红楼梦人物"
    loading="lazy"
    className="absolute bottom-2 right-2 rounded opacity-40 object-cover"
    style={{ width: 56, height: 56 }}
  />
</div>
```

- [ ] **Step 2: 确认 TypeScript 无报错**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"
pnpm check 2>&1 | head -20
```

- [ ] **Step 3: commit**

```bash
git add client/src/pages/ColabBaoyuTeaPage.tsx
git commit -m "feat(baoyutea): upgrade StorySection with real product images"
```

---

## Task 5：升级 SceneSection（四场景）

**Files:**
- Modify: `client/src/pages/ColabBaoyuTeaPage.tsx` — `SceneSection` 组件（约第253-337行）

每张场景卡片加半透明背景图，卡片需改为 `position: relative` 且 `overflow: hidden`。

- [ ] **Step 1: 在 scenes 数组中加入 bgImage 字段**

找到 `const scenes = [` 数组，将其替换为：

```typescript
const scenes = [
  {
    time: "席前",
    title: "备战状态",
    desc: "重要饭局前，先为身体建好底气。且酌先行，草本植养，以备周全。",
    accent: QZ_GOLD,
    icon: "⚑",
    bgImage: IMG.herbs,
  },
  {
    time: "席间",
    title: "从容应酬",
    desc: "饮酒间隙，以且酌换杯。草本配伍，日常饮用，无需大张旗鼓，场面依旧周到。",
    accent: QZ_GOLD,
    icon: "◈",
    bgImage: IMG.craftHands,
  },
  {
    time: "席后",
    title: "宝玉还元",
    desc: "散场后，一杯怡红公子。院士团队研发的红枣基底，温热入腹，让身体慢慢缓回来。",
    accent: BY_RED,
    icon: "◉",
    bgImage: IMG.teapot,
  },
  {
    time: "次日",
    title: "元气如常",
    desc: "好的应酬，不以透支为代价。两个品牌守护的，是你明天还能全力以赴的状态。",
    accent: BY_RED,
    icon: "◎",
    bgImage: IMG.characters,
  },
];
```

- [ ] **Step 2: 更新卡片 JSX，加入背景图层**

找到场景卡片的 map 渲染（`{scenes.map((s) => (` 开始的 div），将整个卡片 div 替换为：

```typescript
{scenes.map((s) => (
  <div
    key={s.time}
    className="relative rounded-2xl p-6 space-y-4 transition-transform hover:-translate-y-1 overflow-hidden"
    style={{
      background: "#141414",
      border: `1px solid ${s.accent}20`,
      boxShadow: `0 0 30px ${s.accent}08`,
    }}
  >
    {/* 背景图氛围层 */}
    <img
      src={s.bgImage}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300"
      style={{ opacity: 0.15 }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.25"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.15"; }}
    />
    {/* 内容层 */}
    <div className="relative z-10 flex items-center justify-between">
      <span
        className="text-[10px] tracking-[0.2em] font-medium px-2 py-0.5 rounded"
        style={{ background: `${s.accent}15`, color: s.accent }}
      >
        {s.time}
      </span>
      <span className="text-lg opacity-30" style={{ color: s.accent }}>{s.icon}</span>
    </div>
    <h3 className="relative z-10 font-semibold text-base" style={{ color: BY_CREAM }}>{s.title}</h3>
    <p className="relative z-10 text-xs leading-relaxed" style={{ color: `${BY_CREAM}60` }}>{s.desc}</p>
  </div>
))}
```

**注意**：hover 背景效果用了 onMouseEnter/onMouseLeave，这是因为 Tailwind 无法动态绑定内联 opacity。如果项目有更严格的 lint 规则禁止 inline event handler，可改为 CSS class（但当前项目未见此限制）。

- [ ] **Step 3: 确认 TypeScript 无报错**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"
pnpm check 2>&1 | head -20
```

- [ ] **Step 4: commit**

```bash
git add client/src/pages/ColabBaoyuTeaPage.tsx
git commit -m "feat(baoyutea): upgrade SceneSection with ambient background images"
```

---

## Task 6：升级 ScienceSection（科研背书）

**Files:**
- Modify: `client/src/pages/ColabBaoyuTeaPage.tsx` — `ScienceSection` 组件（约第339-454行）

宝玉煮茶卡片右上角加人物插画，底部联名桥接模块加食材+粒子叠加背景。

- [ ] **Step 1: 宝玉煮茶卡片加人物插画**

找到 `{/* 宝玉煮茶 science */}` 注释对应的卡片 div。

在卡片 div 开头（`className="rounded-2xl p-8 space-y-6"` 的 div 内的第一个子元素之前）加入：

```typescript
{/* 人物插画装饰，绝对定位于右上角 */}
<div className="relative">
  <img
    src={IMG.characters}
    alt="红楼梦人物"
    loading="lazy"
    className="absolute -top-4 -right-4 rounded-lg object-cover opacity-60"
    style={{ width: 80, height: 80 }}
  />
</div>
```

同时将该卡片的外层 div 加上 `relative overflow-hidden`：
```typescript
// 找到：
className="rounded-2xl p-8 space-y-6"
// 改为：
className="relative overflow-hidden rounded-2xl p-8 space-y-6"
```

- [ ] **Step 2: 底部联名桥接模块加背景**

找到 `{/* Center bridge */}` 注释对应的 div（约第434行）。

在该 div 的第一个子元素（`<p>` 文案）之前加入：

```typescript
{/* 草本食材背景 */}
<img
  src={IMG.herbs}
  alt=""
  aria-hidden="true"
  loading="lazy"
  className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-2xl"
  style={{ opacity: 0.08 }}
/>
{/* 金色粒子叠加 */}
<img
  src={IMG.particles}
  alt=""
  aria-hidden="true"
  loading="lazy"
  className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-2xl"
  style={{ opacity: 0.05, mixBlendMode: "screen" } as React.CSSProperties}
/>
```

同时将该桥接 div 加上 `relative overflow-hidden`：
```typescript
// 找到（约第435行）：
className="mt-8 rounded-2xl p-8 text-center space-y-3"
// 改为：
className="relative overflow-hidden mt-8 rounded-2xl p-8 text-center space-y-3"
```

内部文字元素加 `relative z-10`，确保文字在图层上方：
```typescript
// 找到：
<p className="text-sm font-medium" style={{ color: BY_CREAM }}>
// 改为：
<p className="relative z-10 text-sm font-medium" style={{ color: BY_CREAM }}>

// 找到：
<p className="text-xs leading-relaxed max-w-lg mx-auto" style={{ color: `${BY_CREAM}60` }}>
// 改为：
<p className="relative z-10 text-xs leading-relaxed max-w-lg mx-auto" style={{ color: `${BY_CREAM}60` }}>
```

- [ ] **Step 3: 确认 TypeScript 无报错**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"
pnpm check 2>&1 | head -20
```

- [ ] **Step 4: commit**

```bash
git add client/src/pages/ColabBaoyuTeaPage.tsx
git commit -m "feat(baoyutea): upgrade ScienceSection with character art and ambient backgrounds"
```

---

## Task 7：升级 CTASection

**Files:**
- Modify: `client/src/pages/ColabBaoyuTeaPage.tsx` — `CTASection` 组件（约第457-527行）

分割线品牌标识换Logo图，背景加饮品图+粒子。

- [ ] **Step 1: 替换 CTASection 组件**

找到并完整替换 `function CTASection()` 至其对应的闭合 `}`：

```typescript
/* ─── Section: CTA ─── */
function CTASection() {
  const ref = useInView();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden opacity-0 py-24 px-6 text-center"
      style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${BY_RED}12 0%, transparent 70%), #0D0D0D`,
      }}
    >
      {/* 饮品图底层背景 */}
      <img
        src={IMG.drinkRed}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.06 }}
      />
      {/* 金色粒子叠加 */}
      <img
        src={IMG.particles}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.04, mixBlendMode: "screen" } as React.CSSProperties}
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: "'Noto Serif SC', serif", color: BY_CREAM }}
          >
            席间且酌，席后宝玉
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: `${BY_CREAM}60` }}>
            应酬是中国商业文化的一部分，我们不回避它，<br />
            我们只是让你扛得住，扛得好，扛得有品位。
          </p>
        </div>

        {/* 分割线 with logos */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${QZ_GOLD}40)` }} />
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: QZ_GOLD }}>且酌</span>
            <span className="text-xs" style={{ color: `${BY_CREAM}50` }}>·</span>
            <img
              src={IMG.logoStamp}
              alt="宝玉煮茶"
              className="h-6 object-contain"
              style={{ filter: "drop-shadow(0 0 3px rgba(192,57,43,0.5))" }}
            />
          </div>
          <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${BY_RED}40)` }} />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/health/tracks"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${QZ_GOLD} 0%, #8B7332 100%)`,
              color: "#0D0D0D",
            }}
          >
            了解且酌系列 →
          </a>
          <a
            href="https://www.baoyutea.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: "transparent",
              color: BY_CREAM,
              border: `1px solid ${BY_RED}50`,
            }}
          >
            探索宝玉煮茶 →
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] leading-relaxed" style={{ color: `${BY_CREAM}30` }}>
          *本产品均为普通食品（固体饮料）。适合作为日常饮用，不作为任何医疗或功能性承诺。
          本页面为品牌联名宣传内容，相关科研信息仅供参考。
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 确认 TypeScript 无报错**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"
pnpm check 2>&1 | head -20
```

- [ ] **Step 3: commit**

```bash
git add client/src/pages/ColabBaoyuTeaPage.tsx
git commit -m "feat(baoyutea): upgrade CTASection with brand logo and ambient backgrounds"
```

---

## Task 8：本地构建验证

- [ ] **Step 1: 运行单元测试确认无回归**

```bash
cd "/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/ai-workspace/yygz-web"
pnpm test:unit 2>&1 | tail -20
```

预期：所有现有测试通过（本次改动只涉及 JSX 视觉，不影响数据逻辑测试）。

- [ ] **Step 2: 构建生产版本**

```bash
pnpm build 2>&1 | tail -30
```

预期输出：`✓ built in X.XXs`，无 error。

- [ ] **Step 3: 确认 baoyutea 目录生成正确**

```bash
ls dist/public/baoyutea/imgs/ | grep img-
```

预期：列出 `img-000.jpg` 到 `img-116.jpg` 等8个新文件。

- [ ] **Step 4: 把新产品图片同步到部署目录**

```bash
cp client/public/baoyutea/imgs/img-*.jpg clawd/baoyutea_deploy/
```

- [ ] **Step 5: 最终 commit**

```bash
git add dist/ clawd/baoyutea_deploy/
git commit -m "build: production build with baoyutea visual upgrade"
```

---

## 自检结果

**Spec 覆盖检查**：
- ✅ Hero 两栏布局 + 产品图 + 粒子 → Task 3
- ✅ Story 宝玉煮茶卡片印章Logo + 产品图 + 人物线描 → Task 4
- ✅ Scene 四场景卡片背景图 + hover 效果 → Task 5
- ✅ Science 宝玉煮茶卡片人物插画 + 桥接模块背景 → Task 6
- ✅ CTA 印章Logo + 饮品图背景 + 粒子 → Task 7
- ✅ 图片复制到 public → Task 1
- ✅ 构建验证 → Task 8

**占位符扫描**：无 TBD、TODO、"similar to Task N" 等问题。

**类型一致性**：`IMG` 对象在 Task 2 定义，Task 3-7 全部使用同名 key（`IMG.particles`、`IMG.logoStamp` 等），无不一致。
