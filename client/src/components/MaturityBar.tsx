import { motion } from "framer-motion";

interface MaturityBarProps {
  value: number;
  color: string;
  label: string;
  delay?: number;
}

export default function MaturityBar({ value, color, label, delay = 0 }: MaturityBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-xs text-muted-foreground font-[var(--font-body)]">{label}</span>
        <span className="text-sm font-semibold font-[var(--font-heading)]" style={{ color }}>{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay, ease: [0, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}
