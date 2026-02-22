/**
 * 植养萃 - 产品详情页 ProductPage.tsx
 * 路由路径: /product
 */
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Leaf,
  FlaskConical,
  Microscope,
  Shield,
  Moon,
  Sparkles,
  Wine,
  ArrowRight,
  CheckCircle2,
  Award,
  BookOpen,
  Building2,
  Beaker,
  Users,
  Clock,
  Zap,
  ChevronDown,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { INGREDIENT_IMAGES } from "@/lib/data";

// ─────────────────────────────────────────────
// 原料图片引用自 data.ts INGREDIENT_IMAGES
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// 动画 Variants（复用全站统一标准）
// ─────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: {
    duration: 0.5,
    delay: i * 0.1,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
});

// ─────────────────────────────────────────────
// 数据层
// ─────────────────────────────────────────────
const HERBS = [
  {
    role: "君",
    roleLabel: "核心主导",
    roleColor: "red",
    items: [
      {
        name: "葛根",
        molecule: "葛根素 Puerarin、异黄酮、大豆苷元",
        science:
          "可特异性提高 ADH 和 ALDH2 活性，加速乙醇→乙醛→乙酸代谢链；抑制肝星状细胞活化，抗纤维化；扩张血管改善微循环",
        classic: "《神农本草经》列为中品，主消渴，身大热，呕吐",
        image: INGREDIENT_IMAGES.gegen,
      },
      {
        name: "人参",
        molecule: "人参皂苷 Ginsenoside（Rb1 等）",
        science:
          "调节 GABA 受体产生镇静放松效应；调节 5-HT/DA 系统稳定情绪和睡眠-觉醒周期；适应原样作用恢复 HPA 轴正常节律；抑制 NF-κB 通路抗炎",
        classic: "《神农本草经》列为上品，百草之王，主补五脏，安精神",
        image: INGREDIENT_IMAGES.renshen,
      },
    ],
  },
  {
    role: "臣",
    roleLabel: "强效协同",
    roleColor: "amber",
    items: [
      {
        name: "高良姜",
        molecule: "姜黄素、高良姜素 Galangin",
        science:
          "增强 ADH 和 ALDH2 活性，与葛根素产生协同增效；强大的抗炎、抗溃疡作用",
        classic: "温胃散寒，消食止痛",
        image: INGREDIENT_IMAGES.gaoliangjiang,
      },
      {
        name: "灵芝",
        molecule: "灵芝三萜 Ganoderic Acid、灵芝多糖",
        science:
          "灵芝三萜抑制 NF-κB 通路减少 TNF-α、IL-6 等炎症因子；灵芝多糖增强免疫调节、促进细胞新陈代谢；调节 GABA 受体协同安神",
        classic: "仙草，补气安神，止咳平喘",
        image: INGREDIENT_IMAGES.lingzhi,
      },
      {
        name: "茯砖茶",
        molecule: "茶多酚、茶多糖、茶黄素、金花菌代谢产物",
        science:
          "茶多酚和茶多糖结合毒素加速排出；冠突散囊菌代谢产物调节肠道菌群，影响酒精首过代谢；天然他汀类成分调节血脂，减轻肝脏脂质负担",
        classic: "黑茶之祖，「宁可三日无粮，不可一日无茶」",
        image: INGREDIENT_IMAGES.fuzhuan,
      },
    ],
  },
  {
    role: "佐",
    roleLabel: "辅助协作",
    roleColor: "emerald",
    items: [
      {
        name: "青苹果",
        molecule: "维生素 C、苹果多酚、绿原酸、有机酸",
        science:
          "强效抗氧化剂，直接清除自由基并上调 SOD、GSH 等内源性抗氧化酶系统",
        classic: "酸甘生津、开胃醒脾，「日食一苹果，医生远离我」",
        image: INGREDIENT_IMAGES.apple,
      },
      {
        name: "罗汉果",
        molecule: "罗汉果甜苷 V Mogroside V、三萜类",
        science:
          "甜度为蔗糖 300 倍但零热量；三萜类成分润肺通便，帮助代谢废物从肠道排出，改善睡眠生理基础；同时作为「使」，天然清甜串联全方",
        classic: "神仙果，《岭南采药录》记载理痰火咳嗽",
        image: INGREDIENT_IMAGES.luohanguo,
      },
    ],
  },
];

const MECHANISMS = [
  {
    icon: Wine,
    color: "emerald",
    title: "代谢疏导",
    problem: "酒局负荷、身体沉重",
    science:
      "NAD⁺ 辅酶再生 + ADH/ALDH 双激活，加速乙醇→乙醛→乙酸代谢链",
    molecules: "葛根素、高良姜素、茶多酚",
  },
  {
    icon: Moon,
    color: "indigo",
    title: "深度舒缓",
    problem: "身心紧绷、难以放松",
    science: "GABA 受体调节产生温和镇静效应 + 5-HT/DA 系统稳定情绪",
    molecules: "人参皂苷 Rb1、灵芝三萜",
  },
  {
    icon: Shield,
    color: "amber",
    title: "内态稳固",
    problem: "压力大、熬夜后状态差",
    science:
      "适应原样作用恢复 HPA 轴节律 + 多层次抗氧化防线（SOD/GSH）+ NF-κB 通路抗炎",
    molecules: "人参皂苷、灵芝多糖、维生素 C",
  },
  {
    icon: Sparkles,
    color: "rose",
    title: "状态呈现",
    problem: "气色暗沉、精神不振",
    science:
      "扩张血管改善微循环 + 促进皮肤细胞新陈代谢和修复 + 抗炎性衰老（Inflammaging）",
    molecules: "葛根素、灵芝多糖、茶黄素",
  },
];

const SCENES = [
  {
    icon: Wine,
    color: "emerald",
    title: "酒局应酬",
    when: "酒前 30 分钟 + 酒后",
    dose: "1-2 瓶",
    guide:
      "酒前 1 瓶建立打底，让 ADH/ALDH 提前激活；酒中可间歇补 1 瓶减负；酒后 1 瓶帮助重回正轨",
  },
  {
    icon: Moon,
    color: "indigo",
    title: "夜间助眠",
    when: "睡前 30 分钟",
    dose: "1 瓶",
    guide:
      "温水冲调，放松身心，让 GABA 受体调节引导入静，告别辗转反侧",
  },
  {
    icon: Zap,
    color: "amber",
    title: "工作日常",
    when: "上午 / 下午各一次",
    dose: "2 瓶/天",
    guide:
      "忙碌间隙冲一杯，像喝茶一样自然融入工作节奏，维持清爽在线状态",
  },
  {
    icon: Sparkles,
    color: "rose",
    title: "日常轻养",
    when: "每天固定时间",
    dose: "1-2 瓶/天",
    guide:
      "持续饮用，让状态和气色逐步改善，真正的年轻从细胞内部开始",
  },
];

const CROWD = [
  {
    icon: Users,
    label: "商务应酬人群",
    scene: "饭局多、酒局频繁",
    pain: "喝完难受，次日状态差",
    help: "葛根素 + 高良姜素双激活 ADH/ALDH，NAD⁺ 辅酶再生打破代谢瓶颈",
    color: "emerald",
  },
  {
    icon: Zap,
    label: "高压职场人群",
    scene: "长期加班、精神紧绷",
    pain: "压力大、状态起伏",
    help: "人参皂苷适应原作用恢复 HPA 轴节律，多重抗氧化分子构建防线",
    color: "amber",
  },
  {
    icon: Moon,
    label: "睡眠欠佳人群",
    scene: "入睡困难、夜间辗转",
    pain: "躺下睡不着，醒了还是累",
    help: "人参皂苷 Rb1 + 灵芝三萜调节 GABA 受体，温和镇静不产生依赖",
    color: "indigo",
  },
  {
    icon: Sparkles,
    label: "注重气色的人群",
    scene: "皮肤暗沉、显老显疲",
    pain: "涂了很多护肤品没用",
    help: "葛根 + 人参改善微循环，灵芝多糖促进细胞修复，茶黄素抗炎性衰老",
    color: "rose",
  },
];

const LABS = [
  {
    name: "国家植物功能成分利用工程技术研究中心",
    level: "国家级（国内该领域唯一）",
    work: "完成七味本草配方的活性成分筛选、提取工艺优化与配比验证",
  },
  {
    name: "国家中医药管理局亚健康干预技术实验室",
    level: "国家级",
    work: "为产品定位和应用场景提供科学依据",
  },
  {
    name: "茶学教育部重点实验室 / 湖南师范大学大健康研究院",
    level: "省部级",
    work: "完成年份茯砖茶原料的功能成分分析和品质标准化",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "植物原料定向提取", desc: "精准锁定目标活性分子" },
  {
    step: "02",
    title: "核心功能成分 15× 浓缩",
    desc: "用科研级标准做到高浓度精华",
  },
  {
    step: "03",
    title: "科学配伍结构重组",
    desc: "按君臣佐使原则重新组合",
  },
  {
    step: "04",
    title: "稳定包裹片苷载体",
    desc: "保护活性分子不被降解",
  },
  {
    step: "05",
    title: "中空微颗粒喷雾干燥",
    desc: "遇水即溶，充沛释放活性成分",
  },
];

// ─────────────────────────────────────────────
// 颜色映射工具
// ─────────────────────────────────────────────
const colorMap: Record<
  string,
  { text: string; bg: string; border: string; dot: string }
> = {
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  amber: {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    dot: "bg-amber-400",
  },
  indigo: {
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    dot: "bg-indigo-400",
  },
  rose: {
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    dot: "bg-rose-400",
  },
  red: {
    text: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    dot: "bg-red-400",
  },
  teal: {
    text: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    dot: "bg-teal-400",
  },
};

// ─────────────────────────────────────────────
// 子组件
// ─────────────────────────────────────────────

/** 板块标题（与全站统一） */
function SectionTitle({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-3 font-medium">
        {label}
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
        {title}
      </h2>
      {sub && (
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

/** 原料卡片 */
function HerbCard({
  item,
  index,
}: {
  item: (typeof HERBS)[0]["items"][0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div {...stagger(index)}>
      <div
        className="bg-card/60 border border-border/30 rounded-lg overflow-hidden hover:border-emerald-500/30 transition-colors cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* 图片区 */}
        <div className="relative h-36 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <span className="text-lg font-bold text-foreground">
              {item.name}
            </span>
          </div>
        </div>

        {/* 分子信息 */}
        <div className="p-4">
          <p className="text-xs text-emerald-400 mb-2 font-medium">核心活性分子</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {item.molecule}
          </p>

          {/* 展开/收起 */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
            <span className="text-xs text-muted-foreground">
              {open ? "收起科学详情" : "查看科学详情"}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>

          {open && (
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-xs text-amber-400 mb-1 font-medium">
                  科学研究发现
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.science}
                </p>
              </div>
              <div>
                <p className="text-xs text-teal-400 mb-1 font-medium">
                  本草记载
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  {item.classic}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// 主页面
// ─────────────────────────────────────────────
export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="植养萃产品详情 | 植物提取固体饮料"
        description="植养萃，中国工程院院士刘仲华领衔研发，7种食药同源植物15倍浓缩，四向协同机制"
      />

      {/* ── 1. Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]" />

        <div className="container relative z-10 px-4 py-24 text-center">
          {/* 标签行 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6 flex-wrap"
          >
            {["院士科研", "实证路径", "多机制参与"].map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-widest uppercase text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-4"
          >
            植养萃
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-2"
          >
            基于植物成分研究体系的日常支持方案
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm text-muted-foreground/70 mb-10"
          >
            植物提取固体饮料 · 72g（24瓶 × 3g）
          </motion.p>

          {/* 核心价值 4 项 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { num: "7", label: "食药同源植物" },
              { num: "15×", label: "活性分子浓缩" },
              { num: "3", label: "国家级科研平台" },
              { num: "30+", label: "年植物科研积累" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card/60 border border-border/30 rounded-lg p-4"
              >
                <p className="text-2xl font-bold text-emerald-400">
                  {item.num}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* 向下箭头 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground/40 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. 产品是什么 ── */}
      <section className="py-16 sm:py-24">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle
              label="WHAT IS IT"
              title="这款产品是什么？"
              sub="它不是药，不是保健品，而是以现代植物提取技术制成的日常状态管理饮品"
            />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* 一句话概括 */}
            <motion.div
              {...stagger(1)}
              className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-8 text-center"
            >
              <Leaf className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
              <p className="text-foreground leading-relaxed">
                用院士团队的植物提取专利技术，把{" "}
                <span className="text-emerald-400 font-medium">7 味本草</span>{" "}
                中真正有价值的活性分子提取、浓缩、重组，做成一瓶随时能喝的{" "}
                <span className="text-emerald-400 font-medium">
                  植物精华饮
                </span>
                。
              </p>
            </motion.div>

            {/* 核心价值表格 */}
            <div className="space-y-3">
              {[
                {
                  label: "科研背书",
                  value:
                    "中国工程院院士领衔，三大国家级 / 省部级科研平台联合研发验证",
                  color: "emerald",
                },
                {
                  label: "技术路径",
                  value:
                    "现代植物提取（非传统煎煮、非化学合成），15 倍浓缩，保留多组分协同效应",
                  color: "amber",
                },
                {
                  label: "配方逻辑",
                  value:
                    "7 种食药同源原料，君臣佐使精准配伍，多成分-多靶点-多通路协同",
                  color: "indigo",
                },
                {
                  label: "核心机制",
                  value:
                    "代谢疏导 + 深度舒缓 + 内态稳固 + 状态呈现，四向协同",
                  color: "rose",
                },
                {
                  label: "产品形态",
                  value: "固体饮料，即冲即溶，口感温和清甜（零热量），随身携带",
                  color: "teal",
                },
              ].map((row, i) => {
                const c = colorMap[row.color];
                return (
                  <motion.div key={row.label} {...stagger(i + 2)}>
                    <div
                      className={`flex gap-4 p-4 rounded-lg ${c.bg} border ${c.border}`}
                    >
                      <span
                        className={`text-xs font-medium shrink-0 pt-0.5 w-16 ${c.text}`}
                      >
                        {row.label}
                      </span>
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {row.value}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 院士与科研平台 ── */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle
              label="SCIENCE AUTHORITY"
              title="院士亲自挂帅研发"
              sub="科研体系的高度，决定产品的上限。这正是植养萃与普通功能饮的根本差别。"
            />
          </motion.div>

          {/* 院士介绍 */}
          <motion.div {...stagger(1)} className="max-w-4xl mx-auto mb-12">
            <div className="bg-card/60 border border-emerald-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* 左侧：文字信息 */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-400 uppercase tracking-widest mb-1">
                        中国工程院院士
                      </p>
                      <h3 className="text-xl font-bold">刘仲华 教授</h3>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "国家植物功能成分利用工程技术研究中心主任",
                      "植物功能成分领域深耕 30+ 年",
                      "承担国家级科研项目 200 余项",
                      "获国家科技进步二等奖 2 项",
                      "授权发明专利 100 余项",
                      "阐明 25 种植物功能成分药理作用机制",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* 右侧：院士照片 */}
                <div className="shrink-0 sm:w-48 w-full">
                  <div className="relative overflow-hidden rounded-xl border border-emerald-500/20">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028732695/bfBWfNxAnqTFlfTl.png"
                      alt="刘仲华院士"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <p className="text-xs text-white/90 text-center font-medium">刘仲华 院士</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 三大科研平台 */}
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {LABS.map((lab, i) => (
              <motion.div key={lab.name} {...stagger(i + 2)}>
                <div className="bg-card/60 border border-border/30 rounded-lg p-5 h-full hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">
                      {lab.level}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold mb-3 leading-snug">
                    {lab.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {lab.work}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 技术路径对比 ── */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle
              label="TECHNOLOGY"
              title="专利植物提取技术"
              sub="不是煮茶，不是化学合成，三种技术路径，差距巨大"
            />
          </motion.div>

          {/* 对比表 */}
          <motion.div {...stagger(1)} className="max-w-4xl mx-auto mb-12 overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left p-3 text-xs text-muted-foreground font-medium border-b border-border/30 w-28">
                    对比项
                  </th>
                  <th className="text-center p-3 text-xs text-muted-foreground font-medium border-b border-border/30">
                    传统煎制
                  </th>
                  <th className="text-center p-3 text-xs text-muted-foreground font-medium border-b border-border/30">
                    化学合成
                  </th>
                  <th className="text-center p-3 text-xs text-emerald-400 font-medium border-b border-emerald-500/30 bg-emerald-500/5">
                    现代植物提取
                    <br />
                    <span className="text-[10px] text-emerald-400/70">
                      植养萃
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    item: "有效成分提取率",
                    trad: "仅 10-30%",
                    chem: "单一分子 99%+",
                    modern: "70-90%",
                  },
                  {
                    item: "多组分协同",
                    trad: "保留但浓度低",
                    chem: "完全丧失",
                    modern: "高浓度保留",
                  },
                  {
                    item: "活性分子完整性",
                    trad: "高温易破坏",
                    chem: "仅单一分子",
                    modern: "低温保护完整",
                  },
                  {
                    item: "标准化程度",
                    trad: "难以标准化",
                    chem: "高度标准化",
                    modern: "可精确控制",
                  },
                  {
                    item: "安全性",
                    trad: "天然安全",
                    chem: "潜在副作用",
                    modern: "天然 + 可控",
                  },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "" : "bg-card/20"}>
                    <td className="p-3 text-xs font-medium border-b border-border/20">
                      {row.item}
                    </td>
                    <td className="p-3 text-xs text-center text-muted-foreground border-b border-border/20">
                      {row.trad}
                    </td>
                    <td className="p-3 text-xs text-center text-muted-foreground border-b border-border/20">
                      {row.chem}
                    </td>
                    <td className="p-3 text-xs text-center text-emerald-400 font-medium border-b border-border/20 bg-emerald-500/5">
                      {row.modern}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* 五步工艺 */}
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
              五步核心工艺流程
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {PROCESS_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  {...stagger(i + 2)}
                  className="flex-1"
                >
                  <div className="bg-card/60 border border-border/30 rounded-lg p-4 h-full hover:border-emerald-500/30 transition-colors relative overflow-hidden">
                    <div className="text-3xl font-bold text-emerald-500/10 absolute top-2 right-3 select-none">
                      {s.step}
                    </div>
                    <Beaker className="w-4 h-4 text-emerald-400 mb-2" />
                    <p className="text-xs font-bold leading-snug mb-1">
                      {s.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. 七味原料（君臣佐使） ── */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle
              label="FORMULA"
              title="7 味食药同源的排兵布阵"
              sub="不是简单堆叠，而是一套有结构的配方体系。每一味原料都有千年食用历史，每一种活性分子都有现代科学解析。"
            />
          </motion.div>

          {/* 多靶点说明 */}
          <motion.div
            {...stagger(1)}
            className="max-w-2xl mx-auto mb-10 bg-card/40 border border-border/30 rounded-lg p-5"
          >
            <div className="flex items-start gap-3">
              <Microscope className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-emerald-400 mb-1">
                  多靶点协同效应（Entourage Effect）
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  与化学合成的单一分子不同，植物提取物天然含有数十种活性成分，通过「多成分-多靶点-多通路」的网络药理学机制产生协同效应，整体效果大于各部分之和。这正是植物提取物区别于单一化学合成分子的核心优势。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 各角色卡片组 */}
          <div className="space-y-10">
            {HERBS.map((group, gi) => {
              const c = colorMap[group.roleColor];
              return (
                <motion.div key={group.role} {...stagger(gi)}>
                  {/* 角色标题 */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-8 h-8 rounded-full ${c.bg} border ${c.border} flex items-center justify-center`}
                    >
                      <span className={`text-sm font-bold ${c.text}`}>
                        {group.role}
                      </span>
                    </div>
                    <div>
                      <span className={`text-sm font-bold ${c.text}`}>
                        {group.role} · {group.roleLabel}
                      </span>
                    </div>
                  </div>

                  {/* 原料卡片 */}
                  <div
                    className={`grid gap-4 ${
                      group.items.length === 2
                        ? "sm:grid-cols-2 max-w-2xl"
                        : "sm:grid-cols-3"
                    }`}
                  >
                    {group.items.map((item, ii) => (
                      <HerbCard key={item.name} item={item} index={ii} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 交叉覆盖矩阵 */}
          <motion.div {...stagger(4)} className="mt-14 overflow-x-auto">
            <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-5">
              7 味原料 × 四大健康维度交叉覆盖
            </p>
            <table className="w-full text-xs border-collapse min-w-[560px] max-w-3xl mx-auto">
              <thead>
                <tr>
                  <th className="p-2 text-left text-muted-foreground font-medium border-b border-border/30">
                    原料
                  </th>
                  {[
                    { label: "酒精代谢", color: "text-emerald-400" },
                    { label: "肝脏保护", color: "text-amber-400" },
                    { label: "睡眠调节", color: "text-indigo-400" },
                    { label: "皮肤健康", color: "text-rose-400" },
                  ].map((col) => (
                    <th
                      key={col.label}
                      className={`p-2 text-center font-medium border-b border-border/30 ${col.color}`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "葛根",
                    cols: [
                      "ADH/ALDH 双激活",
                      "抗纤维化",
                      "—",
                      "改善微循环",
                    ],
                  },
                  {
                    name: "人参",
                    cols: [
                      "—",
                      "抑制 NF-κB 抗炎",
                      "GABA + 5-HT/DA + HPA 轴",
                      "调节内分泌",
                    ],
                  },
                  {
                    name: "高良姜",
                    cols: ["与葛根协同增效", "抗炎抗溃疡", "—", "—"],
                  },
                  {
                    name: "灵芝",
                    cols: [
                      "—",
                      "抑制 NF-κB + 免疫调节",
                      "GABA 受体安神",
                      "促进细胞修复",
                    ],
                  },
                  {
                    name: "茯砖茶",
                    cols: ["调节肠道首过代谢", "调节血脂 + 肠肝轴", "—", "—"],
                  },
                  {
                    name: "青苹果",
                    cols: ["—", "抗氧化", "—", "清除自由基 + SOD/GSH"],
                  },
                  {
                    name: "罗汉果",
                    cols: ["—", "—", "润肺通便改善睡眠基础", "—"],
                  },
                ].map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? "" : "bg-card/20"}>
                    <td className="p-2 font-medium border-b border-border/20">
                      {row.name}
                    </td>
                    {row.cols.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`p-2 text-center border-b border-border/20 ${
                          cell === "—"
                            ? "text-muted-foreground/30"
                            : "text-foreground/80"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 6. 四大机制 ── */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle
              label="MECHANISMS"
              title="四向协同，重塑身体的有序感"
              sub="植养萃不是一款单一功能的产品，而是通过四向协同机制，覆盖多个日常状态场景"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {MECHANISMS.map((m, i) => {
              const c = colorMap[m.color];
              const Icon = m.icon;
              return (
                <motion.div key={m.title} {...stagger(i + 1)}>
                  <div
                    className={`${c.bg} border ${c.border} rounded-xl p-6 h-full`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`w-5 h-5 ${c.text}`} />
                      <h3 className={`font-bold ${c.text}`}>{m.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      解决：{m.problem}
                    </p>
                    <p className="text-xs text-foreground/80 leading-relaxed mb-3">
                      {m.science}
                    </p>
                    <div className={`text-xs ${c.text} font-medium`}>
                      核心分子：{m.molecules}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 流程箭头 */}
          <motion.div
            {...stagger(5)}
            className="flex items-center justify-center gap-2 mt-10 text-xs text-muted-foreground flex-wrap"
          >
            {[
              "多种植物功能成分",
              "→",
              "多机制参与",
              "→",
              "轻松的整体状态",
            ].map((item, i) => (
              <span
                key={i}
                className={
                  item === "→"
                    ? "text-emerald-500"
                    : "bg-card/60 border border-border/30 px-3 py-1 rounded-full"
                }
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. 适合人群 ── */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle
              label="FOR WHO"
              title="适合谁喝？"
              sub="面向有日常状态管理需求的成年人"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-8">
            {CROWD.map((item, i) => {
              const c = colorMap[item.color];
              const Icon = item.icon;
              return (
                <motion.div key={item.label} {...stagger(i + 1)}>
                  <div className="bg-card/60 border border-border/30 rounded-xl p-5 h-full hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`w-4 h-4 ${c.text}`} />
                      <span className="font-bold text-sm">{item.label}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      场景：{item.scene}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mb-3">
                      困扰：{item.pain}
                    </p>
                    <div
                      className={`text-xs ${c.text} ${c.bg} border ${c.border} rounded-lg p-3 leading-relaxed`}
                    >
                      {item.help}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 不适合人群 */}
          <motion.div
            {...stagger(5)}
            className="max-w-md mx-auto bg-rose-500/5 border border-rose-500/20 rounded-lg p-4 text-center"
          >
            <p className="text-xs text-rose-400 font-medium mb-2">
              不适合人群
            </p>
            <p className="text-xs text-muted-foreground">
              孕期、哺乳期女性 · 14 岁以下儿童 · 对配料中任一成分过敏者
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 8. 体感变化 ── */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle
              label="EXPERIENCE"
              title="身体最诚实，变化是可以被感受到的"
            />
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* 时间轴竖线 */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/50 via-indigo-500/50 to-rose-500/50" />

              <div className="space-y-6">
                {[
                  {
                    phase: "即时",
                    time: "入口当下",
                    feel: "负担感舒缓，身体开始放松",
                    color: "emerald",
                  },
                  {
                    phase: "短期",
                    time: "次日醒来",
                    feel: "起床更轻盈，精神更在线",
                    color: "indigo",
                  },
                  {
                    phase: "长期",
                    time: "持续饮用",
                    feel: "整个人的状态与气色趋于自然稳定",
                    color: "rose",
                  },
                ].map((item, i) => {
                  const c = colorMap[item.color];
                  return (
                    <motion.div
                      key={item.phase}
                      {...stagger(i + 1)}
                      className="flex gap-6 items-start"
                    >
                      <div
                        className={`w-12 h-12 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0 z-10`}
                      >
                        <span className={`text-xs font-bold ${c.text}`}>
                          {item.phase}
                        </span>
                      </div>
                      <div className="bg-card/60 border border-border/30 rounded-xl p-4 flex-1 hover:border-emerald-500/30 transition-colors">
                        <p className="text-xs text-muted-foreground mb-1">
                          {item.time}
                        </p>
                        <p className="text-sm text-foreground/90">
                          {item.feel}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.p
              {...stagger(4)}
              className="text-xs text-muted-foreground/50 text-center mt-6"
            >
              以上体感描述基于植物活性原理的主观感受，因人而异，不作功效承诺。
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 9. 全场景饮用指南 ── */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle
              label="HOW TO DRINK"
              title="全场景饮用指南"
              sub="精准对应每一个生活时刻的需求"
            />
          </motion.div>

          {/* 基本方法 */}
          <motion.div
            {...stagger(1)}
            className="max-w-lg mx-auto bg-card/60 border border-border/30 rounded-xl p-6 mb-10 text-center"
          >
            <FlaskConical className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
            <p className="text-sm font-medium mb-4">基本饮用方法</p>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground flex-wrap">
              {["取出 1 瓶（3g）", "→", "加入 300ml 水", "→", "轻微搅拌即溶"].map(
                (step, i) => (
                  <span
                    key={i}
                    className={
                      step === "→"
                        ? "text-emerald-500"
                        : "bg-secondary/60 px-2 py-1 rounded"
                    }
                  >
                    {step}
                  </span>
                )
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              冷水 · 温水 · 热水均可 · 口感温和清甜 · 随身携带
            </p>
          </motion.div>

          {/* 四大场景 */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {SCENES.map((scene, i) => {
              const c = colorMap[scene.color];
              const Icon = scene.icon;
              return (
                <motion.div key={scene.title} {...stagger(i + 2)}>
                  <div
                    className={`${c.bg} border ${c.border} rounded-xl p-5 h-full`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`w-4 h-4 ${c.text}`} />
                      <h3 className={`font-bold text-sm ${c.text}`}>
                        {scene.title}
                      </h3>
                    </div>
                    <div className="flex gap-4 mb-3 text-xs text-muted-foreground">
                      <span>
                        <Clock className="w-3 h-3 inline mr-1" />
                        {scene.when}
                      </span>
                      <span>
                        <Leaf className="w-3 h-3 inline mr-1" />
                        {scene.dose}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      {scene.guide}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 10. 产品规格 + 质检 ── */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="container px-4">
          <motion.div {...stagger(0)}>
            <SectionTitle label="SPECS" title="产品详情信息" />
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {/* 规格表 */}
            <motion.div
              {...stagger(1)}
              className="bg-card/60 border border-border/30 rounded-xl overflow-hidden"
            >
              {[
                { label: "品名", value: "植养萃" },
                { label: "产品类型", value: "植物提取固体饮料（普通食品）" },
                { label: "规格", value: "72 克（24 瓶 × 3 克/瓶）" },
                { label: "冲调水量", value: "300 毫升" },
                { label: "水温", value: "冷水 / 温水 / 热水均可" },
                { label: "口感", value: "温和清甜（罗汉果天然甜苷，零热量）" },
                {
                  label: "配料",
                  value:
                    "高良姜提取物、葛根提取物、金花黑茶提取物（茯砖茶）、人参提取物（5 年及 5 年以下人工种植）、苹果提取物、罗汉果甜苷提取物",
                },
                {
                  label: "质检",
                  value: "CTI 华测检测，品质保障，安心之选",
                  highlight: true,
                },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex gap-4 px-5 py-3 border-b border-border/20 last:border-0 ${
                    i % 2 === 0 ? "" : "bg-card/30"
                  }`}
                >
                  <span className="text-xs text-muted-foreground shrink-0 w-20 pt-0.5">
                    {row.label}
                  </span>
                  <span
                    className={`text-xs leading-relaxed ${
                      row.highlight
                        ? "text-emerald-400 font-medium"
                        : "text-foreground/90"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* 质检徽章 */}
            <motion.div
              {...stagger(2)}
              className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4"
            >
              <Award className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-medium text-emerald-400">
                  CTI 华测检测认证
                </p>
                <p className="text-xs text-muted-foreground">
                  权威第三方质检报告，品质保障，安心之选
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 11. 免责声明 ── */}
      <section className="py-10 border-t border-border/30">
        <div className="container px-4">
          <motion.div
            {...stagger(0)}
            className="max-w-2xl mx-auto text-center"
          >
            <BookOpen className="w-4 h-4 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-xs text-muted-foreground/50 leading-relaxed">
              本品为植物固体饮料（普通食品），非保健食品，非药品，不具备疾病预防或治疗功能，不替代药物或医疗行为。如对配料敏感或属特殊人群，请谨慎选择。
              <br />
              <span className="text-rose-400/70">
                孕期、哺乳期女性及 14 岁以下儿童禁止饮用。
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
