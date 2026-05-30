import { motion } from "framer-motion";

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "left",
}: {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <div className="h-px w-8 bg-gold" />
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
          {tag}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base lg:text-lg text-muted-foreground font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}