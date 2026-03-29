# 且酌 × 宝玉煮茶联名落地页视觉升级设计方案

**日期**：2026-03-29
**目标页面**：`baoyutea.yiyeguizhen.com`（`ColabBaoyuTeaPage.tsx`）
**方案**：方案B — 视觉层重设计（保持现有组件结构，全面填充真实素材）

---

## 背景

现有联名落地页有5个区块，逻辑和文案已完整，但宝玉煮茶部分完全没有真实图片，视觉冲击力不足。现已获取125张宝玉煮茶品牌素材，覆盖Logo、产品图、饮品海报、食材场景、装饰光效等。

**受众**：商务合作方 + 终端消费者（双场景）
**核心目标**：品牌展示，留下印象（不以购买转化为优先）

---

## 图片资产路径

所有图片来源于：`/Users/dt2026/Library/Mobile Documents/com~apple~CloudDocs/宝玉煮茶-院士轻养茶-图片/`

需复制到项目的 `yygz-web/client/public/baoyutea/imgs/` 目录下供网页引用。

关键素材映射：

| 用途 | 文件 | 说明 |
|------|------|------|
| 金色粒子叠加 | `img-000.jpg` | 黑底金色粒子，screen/overlay混合 |
| 宝玉煮茶印章Logo | `img-010.jpg` | 朱红椭圆篆字Logo |
| 草本食材平铺 | `img-020.jpg` | 深木色桌面，中草药摆拍 |
| 品牌手册版式 | `img-025.png` | BAOYUTEA英文Logo参考 |
| 黑色纸杯产品图 | `img-040.jpg` | 宝玉煮茶黑色纸杯+茶水飞溅 |
| 红茶壶+茶点 | `img-050.jpg` | 朱红茶壶+粉色茶饼，白底 |
| 手工制茶特写 | `img-055.jpg` | 手部特写，玻璃罐食材 |
| 中式茶点 | `img-060.jpg` | 花形点心，红色背景 |
| 节气饮品·葡萄饮 | `img-107.jpg` | 处暑·观峰葡萄饮，金棕背景竖版海报 |
| 节气饮品·石榴饮 | `img-109.jpg` | 白露·红玉青柠饮，深红背景竖版海报 |
| 节气饮品·红袍 | `img-112.jpg` | 小雪·暖玉红袍，橙色背景竖版海报 |
| 节气饮品·桂花煮雪 | `img-113.jpg` | 寒露·桂魄煮雪，深棕背景竖版海报 |
| 红楼梦人物插画 | `img-116.jpg` | 宝玉/黛玉线描，朱红色，米白底 |

---

## 各区块改造方案

### Section 1：Hero 区

**改动**：
- 布局改为左文右图的两栏结构（桌面端）
- 右侧加节气饮品海报图：`img-113.jpg`（寒露·桂魄煮雪，暖棕色调，与黑底融合最自然）
- 图片带 fade-in 进场动画（0.8s ease-out）
- Hero 背景叠加金色粒子：`img-000.jpg`，`mix-blend-mode: screen`，`opacity: 0.06`
- 移动端：图片移至文字上方，单列布局

**技术要点**：
- 图片容器 `max-height: 60vh`，`object-fit: cover`
- 右侧图片加圆角（`border-radius: 12px`）和朱红色边框（`1px solid rgba(192,57,43,0.3)`）

---

### Section 2：联名故事区（StorySection）

**且酌卡片**：基本不动，保留现有外链产品图。

**宝玉煮茶卡片改造**：
- 卡片顶部：用 `img-010.jpg`（印章Logo）替换现有 "BAO YU TEA" 文字框，`height: 48px`，`object-fit: contain`
- 产品占位区（现为纯CSS文字"怡红"）：替换为 `img-050.jpg`（红茶壶+茶点），`object-fit: contain`，`max-height: 180px`，图片背景透明处理
- 右下角加 `img-116.jpg` 人物线描小图，`width: 60px`，`opacity: 0.5`，绝对定位于卡片右下角

---

### Section 3：四场景区（SceneSection）

每张卡片加半透明背景图层（伪元素 `::before` 或内嵌 `<img>`，`position: absolute`，`inset: 0`）：

| 卡片 | 背景图 | Opacity |
|------|--------|---------|
| 席前（金色） | `img-020.jpg` 草本食材 | 0.15 |
| 席间（金色） | `img-055.jpg` 手工制茶 | 0.15 |
| 席后（朱红） | `img-050.jpg` 红茶壶裁切 | 0.15 |
| 次日（朱红） | `img-116.jpg` 人物线描裁切 | 0.12 |

**交互**：hover 时 opacity 提升至 0.25，`transition: opacity 0.3s`

---

### Section 4：科研背书区（ScienceSection）

**且酌卡片**：右上角小图保持，加外链产品图（现有）。

**宝玉煮茶卡片**：
- 右上角加 `img-116.jpg` 人物插画，`width: 80px`，`opacity: 0.7`，浮于卡片右上区域
- 视觉让「红楼文化IP」标签与插画直接呼应

**底部联名桥接模块**：
- 加 `img-020.jpg` 草本食材图，`opacity: 0.08`，铺满背景
- 叠加 `img-000.jpg` 金色粒子，`mix-blend-mode: screen`，`opacity: 0.06`

---

### Section 5：CTA 区

**改动**：
- 分割线中间品牌标识：「宝玉煮茶」文字替换为 `img-010.jpg` 印章Logo，`height: 24px`
- 背景加 `img-109.jpg`（白露·红玉青柠饮），`opacity: 0.06`，全区块铺底
- 金色粒子叠加：`img-000.jpg`，`opacity: 0.04`

---

## 技术实施要点

### 图片处理
- 所有新增图片复制至 `yygz-web/client/public/baoyutea/imgs/` 并以原文件名引用
- 白底产品图（img-050）在 CSS 中用 `mix-blend-mode: multiply` 融入深色背景

### 性能
- 背景氛围图（粒子、食材）使用 `loading="lazy"`
- 主视觉图（Hero右侧、联名卡片产品图）使用 `loading="eager"`

### 移动端适配
- Hero：两栏 → 单列，图片在上
- 联名故事卡片：保持现有响应式（已有 `md:grid-cols-2`）
- 四场景卡片：背景图在移动端降低 opacity（0.10）避免影响可读性

---

## 不改动的部分

- 所有文案、文字内容
- 现有5个区块的整体布局结构
- 动画逻辑（`useInView` hook）
- 颜色系统（`BY_RED`、`QZ_GOLD`、`BY_CREAM`）
- 路由和外部链接
