import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-machine.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] w-full bg-background grain"
    >
      {/* background image + grid */}
      <div className="absolute inset-0 min-h-full overflow-hidden">
        <img
          src={heroImg}
          alt="Máquina expendedora premium Colvending AR en oficina moderna"
          width={1280}
          height={1280}
          className="absolute right-0 top-0 h-full w-full object-cover object-right opacity-60 lg:w-[60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-6 max-md:flex max-md:flex-col max-md:pt-20 max-md:pb-16 md:px-8 md:py-24 md:pt-28 lg:flex lg:min-h-[100dvh] lg:flex-col lg:justify-center lg:px-10 lg:py-32">
        <div className="max-md:pt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex items-center gap-3 max-md:mb-6"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              Vending Premium · Argentina
            </span>
          </motion.div>

          <h1 className="font-display w-full max-w-5xl font-bold tracking-[-0.04em] max-md:flex max-md:flex-col max-md:gap-y-2">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block text-[clamp(2rem,12vw,2.75rem)] leading-[1.1] max-md:leading-[1] sm:text-5xl md:text-6xl lg:text-[8.5vw] lg:leading-[0.92] xl:text-[140px]"
            >
              INGRESO
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="block text-gold italic text-[clamp(2rem,12vw,2.75rem)] leading-[1.1] max-md:leading-[1] sm:text-5xl md:text-6xl lg:text-[8.5vw] lg:leading-[0.92] xl:text-[140px]"
            >
              PASIVO.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-stroke py-px text-[clamp(1.5rem,8.5vw,2.25rem)] leading-[1.1] max-md:leading-[1] sm:text-4xl md:text-5xl lg:text-[min(7.25vw,6.5rem)] lg:leading-[0.92] xl:text-[130px]"
            >
              AUTOMATIZADO.
            </motion.span>
          </h1>
        </div>

        <div className="max-md:mt-6 max-md:flex max-md:flex-col md:contents">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 max-w-xl text-lg font-light leading-relaxed text-muted-foreground max-md:mt-0 max-md:border-l-2 max-md:border-gold max-md:pl-4 max-md:text-xl lg:text-xl"
          >
            Máquinas expendedoras de alta gama para empresas, oficinas y
            emprendedores. Funcionan 24/7. Vos solo cobrás.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-12 flex flex-col gap-3 max-md:mt-6 md:mt-12 md:flex-row md:gap-4"
          >
            <a
              href="#contacto"
              className="group inline-flex max-md:w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all hover:gold-glow hover:scale-[1.02] max-md:py-3"
            >
              Ver Propuesta Comercial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex max-md:w-full items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-all hover:border-gold hover:text-gold max-md:py-3"
            >
              Hablar con un Asesor
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:bottom-8"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 text-gold" />
      </motion.div>
    </section>
  );
}
