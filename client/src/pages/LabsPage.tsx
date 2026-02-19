/*
 * 养生将军 · 本草新解 - 科研平台页面
 * Design: 深色投资决策界面，翠绿色主调
 * 内容：国家级/省部级实验室详细介绍
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Award,
  Users,
  BookOpen,
  FlaskConical,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation, Footer } from "@/components/Layout";
import { LABS_PAGE } from "@/lib/data";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const LEVEL_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/30" },
};

export default function LabsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-background" />
          <div className="relative container pt-20 pb-12 sm:pt-32 sm:pb-20">
            <motion.div {...fadeInUp()}>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                返回首页
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold font-[var(--font-heading)] tracking-tight">
                    {LABS_PAGE.title}
                  </h1>
                  <p className="text-sm text-muted-foreground mt-1">{LABS_PAGE.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Labs List */}
        <section className="container py-8 sm:py-16">
          <div className="space-y-8">
            {LABS_PAGE.labs.map((lab, i) => {
              const colors = LEVEL_COLORS[lab.levelColor] || LEVEL_COLORS.emerald;
              const hasAchievements = Object.values(lab.achievements).some((v) => v);

              return (
                <motion.div key={i} {...fadeInUp(i * 0.1)}>
                  <Card className={`border ${colors.border} overflow-hidden`}>
                    {/* Header */}
                    <div className={`${colors.bg} px-5 sm:px-8 py-4 border-b ${colors.border}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border} w-fit font-semibold`}
                        >
                          {lab.level}
                        </span>
                        <h2 className="text-lg sm:text-xl font-bold font-[var(--font-heading)]">
                          {lab.name}
                        </h2>
                      </div>
                      <p className={`text-xs ${colors.text} mt-1`}>{lab.position}</p>
                    </div>

                    <CardContent className="p-5 sm:p-8">
                      {/* Basic Info */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Building2 className="w-4 h-4 text-muted-foreground shrink-0" />
                            <span className="text-muted-foreground">依托单位：</span>
                            <span className="text-foreground">{lab.host}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <BookOpen className="w-4 h-4 text-muted-foreground shrink-0" />
                            <span className="text-muted-foreground">批准设立：</span>
                            <span className="text-foreground">{lab.established}</span>
                          </div>
                        </div>
                        {lab.director && (
                          <div className="space-y-2">
                            <div className="flex items-start gap-2 text-sm">
                              <GraduationCap className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">负责人：</span>
                                <span className="text-foreground font-medium">{lab.director}</span>
                                {lab.directorAchievements.length > 0 && (
                                  <ul className="mt-1 space-y-1">
                                    {lab.directorAchievements.map((a, j) => (
                                      <li key={j} className="text-xs text-muted-foreground leading-relaxed">
                                        {a}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground leading-relaxed font-[var(--font-body)]">
                          {lab.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      {hasAchievements && (
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            科研成果
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {Object.entries(lab.achievements)
                              .filter(([, v]) => v)
                              .map(([key, value], j) => (
                                <div
                                  key={j}
                                  className="flex items-start gap-2 text-sm bg-card/40 rounded-lg p-3"
                                >
                                  <FlaskConical className={`w-3.5 h-3.5 ${colors.text} shrink-0 mt-0.5`} />
                                  <span className="text-muted-foreground leading-relaxed">
                                    {value}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Impact & Talent */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {lab.impact && (
                          <div className="flex-1 bg-emerald-500/5 rounded-lg p-4 border border-emerald-500/20">
                            <h4 className="text-xs font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5" />
                              经济效益
                            </h4>
                            <p className="text-sm text-muted-foreground">{lab.impact}</p>
                          </div>
                        )}
                        {lab.talent && (
                          <div className="flex-1 bg-blue-500/5 rounded-lg p-4 border border-blue-500/20">
                            <h4 className="text-xs font-semibold text-blue-400 mb-1 flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5" />
                              人才引进
                            </h4>
                            <p className="text-sm text-muted-foreground">{lab.talent}</p>
                          </div>
                        )}
                      </div>

                      {/* Link */}
                      {lab.url && (
                        <div className="mt-5 pt-4 border-t border-border/20">
                          <a
                            href={lab.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-sm ${colors.text} hover:opacity-80 transition-opacity`}
                          >
                            访问官方网站
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
