import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <p className="font-[var(--font-data)] text-7xl font-bold text-gold/30">404</p>
        <h1 className="text-2xl font-bold text-foreground">页面未找到</h1>
        <p className="text-muted-foreground">您访问的页面不存在或已被移除</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-medium rounded-sm hover:bg-gold-bright transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          返回首页
        </Link>
      </div>
    </div>
  );
}
