import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Hexagon, Menu, X, ArrowRight, ChevronDown, Clock, Radio, QrCode, ShieldCheck, ArrowUpRight, Check, Plus, MessageCircle, FileDown, Instagram, Facebook, Linkedin } from "lucide-react";
const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Máquinas", href: "#maquinas" },
  { label: "Rentabilidad", href: "#rentabilidad" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "header",
      {
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10", children: [
          /* @__PURE__ */ jsxs("a", { href: "#inicio", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsx(Hexagon, { className: "h-6 w-6 text-gold transition-transform group-hover:rotate-30", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-sm font-bold tracking-[0.25em] text-foreground", children: [
              "COLVENDING",
              /* @__PURE__ */ jsx("span", { className: "text-gold", children: "·" }),
              "AR"
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-10", children: links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contacto",
              className: "hidden lg:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-all hover:gold-glow hover:scale-[1.03]",
              children: "Solicitar Propuesta"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen(true),
              "aria-label": "Abrir menú",
              className: "lg:hidden text-foreground",
              children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[60] bg-ink/98 backdrop-blur-2xl lg:hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-5", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-display text-sm font-bold tracking-[0.25em]", children: [
              "COLVENDING",
              /* @__PURE__ */ jsx("span", { className: "text-gold", children: "·" }),
              "AR"
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "Cerrar menú", children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) })
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-2 px-6 pt-12", children: [
            links.map((l, i) => /* @__PURE__ */ jsx(
              motion.a,
              {
                href: l.href,
                onClick: () => setOpen(false),
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: 0.05 * i } },
                className: "font-display text-4xl font-bold uppercase tracking-tight border-b border-border py-4",
                children: l.label
              },
              l.href
            )),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contacto",
                onClick: () => setOpen(false),
                className: "mt-8 inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink",
                children: "Solicitar Propuesta"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
const heroImg = "/assets/hero-machine-DMsp5w0P.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "inicio",
      className: "relative min-h-screen w-full overflow-hidden bg-background grain",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: heroImg,
              alt: "Máquina expendedora premium Colvending AR en oficina moderna",
              width: 1280,
              height: 1280,
              className: "absolute right-0 top-0 h-full w-full object-cover object-right opacity-60 lg:w-[60%]"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.07]",
            style: {
              backgroundImage: "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
              backgroundSize: "80px 80px"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-24 lg:px-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "mb-8 flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-gold" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-gold", children: "Vending Premium · Argentina" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("h1", { className: "font-display text-[16vw] sm:text-[12vw] lg:text-[8.5vw] xl:text-[140px] font-bold leading-[0.92] tracking-[-0.04em] max-w-5xl", children: [
            /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.1 },
                className: "block",
                children: "INGRESO"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.25 },
                className: "block text-gold italic",
                children: "PASIVO."
              }
            ),
            /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "block text-stroke",
                children: "AUTOMATIZADO."
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.6 },
              className: "mt-10 max-w-xl text-lg font-light leading-relaxed text-muted-foreground lg:text-xl",
              children: "Máquinas expendedoras de alta gama para empresas, oficinas y emprendedores. Funcionan 24/7. Vos solo cobrás."
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.75 },
              className: "mt-12 flex flex-col gap-4 sm:flex-row",
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#contacto",
                    className: "group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all hover:gold-glow hover:scale-[1.02]",
                    children: [
                      "Ver Propuesta Comercial",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#contacto",
                    className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-all hover:border-gold hover:text-gold",
                    children: "Hablar con un Asesor"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            animate: { y: [0, 10, 0] },
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em]", children: "Scroll" }),
              /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-gold" })
            ]
          }
        )
      ]
    }
  );
}
const stats = [
  { value: 500, prefix: "", suffix: "", label: "Unidades por máquina", note: "400–500" },
  { value: 120, prefix: "", suffix: "%", label: "Margen de ganancia", note: "60–120%" },
  { value: 18, prefix: "", suffix: " meses", label: "Retorno de inversión", note: "12–18" },
  { value: 15, prefix: "", suffix: " años", label: "Vida útil estimada", note: "10–15" }
];
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to]);
  return /* @__PURE__ */ jsx(motion.span, { ref, children: rounded });
}
function Stats() {
  return /* @__PURE__ */ jsx("section", { className: "relative border-y border-border bg-ink", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4 px-6 lg:px-10", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay: i * 0.1 },
      className: `relative py-10 lg:py-14 px-4 ${i !== 0 ? "lg:border-l border-border" : ""} ${i % 2 !== 0 ? "border-l border-border lg:border-l" : ""}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-4xl lg:text-5xl font-bold text-gold tabular-nums", children: /* @__PURE__ */ jsx(Counter, { to: s.value, suffix: s.suffix }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 text-[11px] text-muted-foreground/60", children: [
          "Rango: ",
          s.note
        ] })
      ]
    },
    s.label
  )) }) });
}
function SectionHeader({
  tag,
  title,
  subtitle,
  align = "left"
}) {
  return /* @__PURE__ */ jsxs("div", { className: align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: `flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-gold" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-gold", children: tag })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.1 },
        className: "font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02]",
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 },
        className: "mt-6 text-base lg:text-lg text-muted-foreground font-light leading-relaxed",
        children: subtitle
      }
    )
  ] });
}
const features = [
  { icon: Clock, label: "Operación 24/7" },
  { icon: Radio, label: "Monitoreo remoto" },
  { icon: QrCode, label: "Pago QR / Tarjeta" },
  { icon: ShieldCheck, label: "Equipos certificados" }
];
function About() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-28 lg:py-40 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          tag: "Sobre Nosotros",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "El negocio que ",
            /* @__PURE__ */ jsx("span", { className: "text-gold italic", children: "trabaja" }),
            " mientras vos dormís."
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 space-y-6 text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-xl", children: [
        /* @__PURE__ */ jsx("p", { children: "Colvending AR diseña, instala y opera máquinas expendedoras premium con tecnología de punta. Funcionan de forma autónoma, sin personal, todos los días del año." }),
        /* @__PURE__ */ jsx("p", { children: "Cada equipo cuenta con monitoreo remoto en tiempo real: stock, ventas y mantenimiento desde tu celular, en cualquier momento." }),
        /* @__PURE__ */ jsx("p", { children: "Ideal para emprendedores que buscan un ingreso pasivo, y para empresas que quieren elevar la experiencia de sus oficinas y espacios comunes." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "relative rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-8 lg:p-10",
        style: { boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl border border-gold/30 pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: features.map((f) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "group rounded-xl border border-border bg-ink/60 p-6 transition-all hover:border-gold/60",
              children: [
                /* @__PURE__ */ jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold transition-all group-hover:gold-glow", children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("div", { className: "mt-5 text-sm font-medium tracking-wide", children: f.label })
              ]
            },
            f.label
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-3 border-t border-border pt-6", children: [
            /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gold/30" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Tecnología certificada" }),
            /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gold/30" })
          ] })
        ]
      }
    )
  ] }) });
}
const steps = [
  {
    n: "01",
    title: "Elegís tu máquina y ubicación",
    desc: "Te asesoramos en el modelo ideal según tu público y espacio disponible."
  },
  {
    n: "02",
    title: "Nosotros instalamos y configuramos todo",
    desc: "Logística, conexión, carga inicial y capacitación incluidas."
  },
  {
    n: "03",
    title: "La máquina vende, vos monitoreás",
    desc: "Controlás ventas, stock y reportes desde tu celular, 24/7."
  }
];
function Process() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-28 lg:py-40 bg-ink border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        tag: "Proceso",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Tan simple como ",
          /* @__PURE__ */ jsx("span", { className: "text-gold italic", children: "3 pasos." })
        ] }),
        align: "center"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-20 grid gap-12 lg:grid-cols-3 lg:gap-0 relative", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i * 0.15 },
        className: "relative lg:px-8",
        children: [
          i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-50%] h-px bg-gradient-to-r from-gold/60 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-background font-display text-xl font-bold text-gold", children: s.n }),
          /* @__PURE__ */ jsx("h3", { className: "mt-8 font-display text-2xl font-bold leading-tight max-w-xs", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs font-light", children: s.desc })
        ]
      },
      s.n
    )) })
  ] }) });
}
const m1 = "/assets/machine-1-CJXPjX_G.jpg";
const m2 = "/assets/machine-2-D_cYvBua.jpg";
const m3 = "/assets/machine-3-Ct-_3gdD.jpg";
const machines = [
  {
    img: m1,
    name: "Snack Pro 500",
    specs: ["Capacidad 500 unidades", "QR · Tarjeta · Efectivo", "Conectividad 4G"]
  },
  {
    img: m2,
    name: "Café Selecto",
    specs: ["Café en grano premium", "Pantalla táctil HD", "Hasta 12 selecciones"]
  },
  {
    img: m3,
    name: "Combo Premium",
    specs: ["Snacks + bebidas frías", "Refrigeración inteligente", "Doble columna"]
  }
];
function Machines() {
  return /* @__PURE__ */ jsx("section", { id: "maquinas", className: "relative py-28 lg:py-40 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        tag: "Nuestras Máquinas",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Equipos de ",
          /* @__PURE__ */ jsx("span", { className: "text-gold italic", children: "alto rendimiento." })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: machines.map((m, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i * 0.1 },
        className: "group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/60",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl border border-gold/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] overflow-hidden bg-ink", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: m.img,
              alt: m.name,
              loading: "lazy",
              width: 800,
              height: 1e3,
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold", children: m.name }),
            /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-1.5", children: m.specs.map((s) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-muted-foreground font-light", children: [
              "· ",
              s
            ] }, s)) }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contacto",
                className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold group/link",
                children: [
                  "Ver detalles",
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" })
                ]
              }
            )
          ] })
        ]
      },
      m.name
    )) })
  ] }) });
}
const points = [
  "Margen de ganancia: 60% a 120%",
  "Retorno de inversión: 12 a 18 meses",
  "Consumo eléctrico: ~$30.000/mes (ARS)",
  "Capacidad: 400 a 500 productos",
  "Financiación hasta 12 cuotas sin interés"
];
function ROIChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const progress = useMotionValue(0);
  const dash = useTransform(progress, (v) => `${v * 502} 502`);
  const percent = useTransform(progress, (v) => `${Math.round(v * 100)}%`);
  useEffect(() => {
    if (inView) {
      const c = animate(progress, 0.85, { duration: 2, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, progress]);
  const bars = [20, 35, 48, 60, 72, 85];
  return /* @__PURE__ */ jsxs("div", { ref, className: "relative rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-8 lg:p-12", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl border border-gold/20 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Progresión ROI" }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-bold mt-1", children: "18 meses" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative h-24 w-24", children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 180 180", className: "h-full w-full -rotate-90", children: [
          /* @__PURE__ */ jsx("circle", { cx: "90", cy: "90", r: "80", fill: "none", stroke: "var(--border)", strokeWidth: "6" }),
          /* @__PURE__ */ jsx(
            motion.circle,
            {
              cx: "90",
              cy: "90",
              r: "80",
              fill: "none",
              stroke: "var(--gold)",
              strokeWidth: "6",
              strokeLinecap: "round",
              style: { strokeDasharray: dash }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(motion.div, { className: "absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-gold", children: percent })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-end gap-2 h-48 mt-12 border-b border-border pb-2", children: bars.map((h, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0 },
        whileInView: { height: `${h}%` },
        viewport: { once: true },
        transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" },
        className: "flex-1 rounded-t bg-gradient-to-t from-gold/30 to-gold"
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground mt-3", children: [
      /* @__PURE__ */ jsx("span", { children: "M3" }),
      /* @__PURE__ */ jsx("span", { children: "M6" }),
      /* @__PURE__ */ jsx("span", { children: "M9" }),
      /* @__PURE__ */ jsx("span", { children: "M12" }),
      /* @__PURE__ */ jsx("span", { children: "M15" }),
      /* @__PURE__ */ jsx("span", { children: "M18" })
    ] })
  ] });
}
function Rentability() {
  return /* @__PURE__ */ jsx("section", { id: "rentabilidad", className: "relative py-28 lg:py-40 bg-ink border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-16 lg:grid-cols-2 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            tag: "Rentabilidad",
            title: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Números que ",
              /* @__PURE__ */ jsx("span", { className: "text-gold italic", children: "hablan solos." })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "mt-10 space-y-5", children: points.map((p, i) => /* @__PURE__ */ jsxs(
          motion.li,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.08 },
            className: "flex items-start gap-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gold/60 bg-gold/10", children: /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-gold", strokeWidth: 2.5 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-base lg:text-lg text-foreground font-light", children: p })
            ]
          },
          p
        )) })
      ] }),
      /* @__PURE__ */ jsx(ROIChart, {})
    ] }),
    /* @__PURE__ */ jsxs(
      motion.a,
      {
        href: "#contacto",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gold p-8 lg:p-10 group hover:gold-glow transition-all",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-ink/60", children: "Calculá tu inversión" }),
            /* @__PURE__ */ jsx("div", { className: "font-display text-2xl lg:text-3xl font-bold text-ink mt-2 max-w-2xl", children: "¿Querés saber cuánto podés ganar? Descargá la propuesta completa." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink whitespace-nowrap", children: [
            "Descargar",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] })
        ]
      }
    )
  ] }) });
}
const categories = [
  {
    icon: "⚙️",
    title: "Funcionamiento General",
    items: [
      { q: "¿Cómo opera una máquina Colvending?", a: "De forma 100% autónoma 24/7. Acepta pagos digitales y entrega productos automáticamente." },
      { q: "¿Necesito personal para atenderla?", a: "No. La máquina funciona sin operador. Vos solo monitoreás stock y ventas." },
      { q: "¿Dónde puedo instalarla?", a: "Oficinas, edificios, gimnasios, fábricas, universidades, hoteles y espacios con flujo de gente." },
      { q: "¿Cuánto espacio ocupa?", a: "Entre 0.8 y 1.2 m² según el modelo. Requiere toma de 220V común." }
    ]
  },
  {
    icon: "🔧",
    title: "Mantenimiento",
    items: [
      { q: "¿Cada cuánto requiere mantenimiento?", a: "Servicio preventivo cada 3 meses. Brindamos soporte técnico incluido el primer año." },
      { q: "¿Quién hace la recarga de productos?", a: "Vos o nuestro equipo logístico, según el plan contratado." },
      { q: "¿Qué pasa si falla?", a: "Atención técnica en 24-48hs hábiles en CABA y GBA. Repuestos siempre disponibles." }
    ]
  },
  {
    icon: "📦",
    title: "Productos y Stock",
    items: [
      { q: "¿Qué productos puedo vender?", a: "Snacks, bebidas, café, productos saludables. Te asesoramos según ubicación." },
      { q: "¿Cómo controlo el stock?", a: "Desde la app: ventas en tiempo real, alertas de bajo stock y reportes detallados." },
      { q: "¿Ustedes proveen los productos?", a: "Podemos hacerlo o gestionarlo vos directo con mayoristas, lo que prefieras." }
    ]
  },
  {
    icon: "🔒",
    title: "Pagos y Seguridad",
    items: [
      { q: "¿Qué medios de pago acepta?", a: "QR (Mercado Pago, Modo), tarjetas de débito/crédito y efectivo según el modelo." },
      { q: "¿La máquina es segura?", a: "Sí. Cerraduras reforzadas, sensores antivuelco y monitoreo remoto." },
      { q: "¿Cómo recibo el dinero?", a: "Las ventas digitales se acreditan directo en tu cuenta bancaria/billetera." }
    ]
  },
  {
    icon: "💰",
    title: "Costos y Rentabilidad",
    items: [
      { q: "¿Cuál es la inversión inicial?", a: "Depende del modelo. Ofrecemos financiación en hasta 12 cuotas sin interés." },
      { q: "¿Cuánto puedo ganar al mes?", a: "Entre 60% y 120% de margen según rotación. La propuesta detalla casos reales." },
      { q: "¿En cuánto recupero la inversión?", a: "Entre 12 y 18 meses con una buena ubicación." }
    ]
  },
  {
    icon: "🧑‍💻",
    title: "Garantía y Soporte",
    items: [
      { q: "¿Qué garantía tiene la máquina?", a: "12 meses sobre componentes electrónicos y mecánicos." },
      { q: "¿Brindan capacitación?", a: "Sí, capacitación inicial completa y soporte continuo por WhatsApp." },
      { q: "¿Hay soporte post-venta?", a: "Atención de lunes a sábado de 8 a 20hs. Comunidad de propietarios incluida." }
    ]
  }
];
function AccordionItem({ qa, open, onClick }) {
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-border", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick,
        className: "flex w-full items-center justify-between gap-6 py-5 text-left group",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-base lg:text-lg font-medium text-foreground group-hover:text-gold transition-colors", children: qa.q }),
          /* @__PURE__ */ jsx(
            Plus,
            {
              className: `h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.3, ease: "easeOut" },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx("p", { className: "pb-6 pr-12 text-sm lg:text-base text-muted-foreground font-light leading-relaxed", children: qa.a })
      }
    ) })
  ] });
}
function CategoryBlock({ cat }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? cat.items : cat.items.slice(0, 4);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4 pb-4 border-b border-gold/20", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xl", children: cat.icon }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold tracking-tight", children: cat.title })
    ] }),
    visible.map((qa, i) => /* @__PURE__ */ jsx(
      AccordionItem,
      {
        qa,
        open: openIdx === i,
        onClick: () => setOpenIdx(openIdx === i ? null : i)
      },
      qa.q
    )),
    cat.items.length > 4 && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setExpanded(!expanded),
        className: "mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:underline",
        children: expanded ? "Ver menos" : "Ver más"
      }
    )
  ] });
}
function Faq() {
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "relative py-28 lg:py-40 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        tag: "Preguntas Frecuentes",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Todo lo que ",
          /* @__PURE__ */ jsx("span", { className: "text-gold italic", children: "necesitás saber." })
        ] }),
        align: "center"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-20 grid gap-6 lg:grid-cols-2", children: categories.map((c) => /* @__PURE__ */ jsx(CategoryBlock, { cat: c }, c.title)) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contacto",
      className: "relative overflow-hidden py-32 lg:py-48 border-t border-border",
      style: {
        background: "linear-gradient(135deg, oklch(0.04 0 0) 0%, oklch(0.08 0.02 260) 100%)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.05]",
            style: {
              backgroundImage: "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center lg:px-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "flex items-center justify-center gap-3",
              children: [
                /* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-gold" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium uppercase tracking-[0.3em] text-gold", children: "Contacto" }),
                /* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-gold" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.h2,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              className: "font-display mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.04em] leading-[0.95]",
              children: [
                "Tu próxima inversión",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-gold italic", children: "empieza acá." })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              className: "mt-8 text-base lg:text-lg text-muted-foreground font-light",
              children: "Hablá con un asesor hoy. Horario de atención: 8:00 a 20:00 hs."
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3 },
              className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4",
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://wa.link/xilaff",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all hover:gold-glow hover:scale-[1.02]",
                    children: [
                      /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
                      "Hablar por WhatsApp"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#",
                    className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-all hover:border-gold hover:text-gold",
                    children: [
                      /* @__PURE__ */ jsx(FileDown, { className: "h-4 w-4" }),
                      "Descargar Propuesta"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.form,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.4, duration: 0.8 },
              onSubmit: (e) => e.preventDefault(),
              className: "mt-20 mx-auto max-w-2xl rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-8 lg:p-10 text-left relative",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl border border-gold/20 pointer-events-none" }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-6", children: "Solicitá tu propuesta" }),
                /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      placeholder: "Nombre",
                      "aria-label": "Nombre",
                      className: "bg-transparent border-b border-border focus:border-gold py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      placeholder: "Teléfono",
                      "aria-label": "Teléfono",
                      className: "bg-transparent border-b border-border focus:border-gold py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      placeholder: "Ciudad",
                      "aria-label": "Ciudad",
                      className: "bg-transparent border-b border-border focus:border-gold py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground sm:col-span-2"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      placeholder: "Mensaje",
                      "aria-label": "Mensaje",
                      rows: 3,
                      className: "bg-transparent border-b border-border focus:border-gold py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground sm:col-span-2 resize-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "mt-8 w-full rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all hover:gold-glow",
                    children: "Enviar Solicitud"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-ink", children: [
    /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Hexagon, { className: "h-5 w-5 text-gold", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-sm font-bold tracking-[0.25em]", children: [
              "COLVENDING",
              /* @__PURE__ */ jsx("span", { className: "text-gold", children: "·" }),
              "AR"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-muted-foreground font-light leading-relaxed max-w-xs", children: "Máquinas expendedoras premium para un negocio que trabaja 24/7." }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: [Instagram, Facebook, Linkedin].map((Icon, i) => /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              "aria-label": "Redes sociales",
              className: "flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-gold hover:text-gold",
              children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4", strokeWidth: 1.5 })
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-5", children: "Navegación" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground font-light", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#inicio", className: "hover:text-foreground transition-colors", children: "Inicio" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#maquinas", className: "hover:text-foreground transition-colors", children: "Máquinas" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faq", className: "hover:text-foreground transition-colors", children: "FAQ" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contacto", className: "hover:text-foreground transition-colors", children: "Contacto" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-5", children: "Contacto" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground font-light", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.link/xilaff", className: "hover:text-foreground transition-colors", children: "WhatsApp directo" }) }),
            /* @__PURE__ */ jsx("li", { children: "Lun a Sáb · 8 a 20hs" }),
            /* @__PURE__ */ jsx("li", { children: "Argentina" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-5", children: "Legal" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground font-light", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Política de privacidad" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Términos y condiciones" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx("div", { children: "© 2025 Colvending AR. Todos los derechos reservados." }),
        /* @__PURE__ */ jsx("div", { className: "uppercase tracking-[0.2em]", children: "Hecho con precisión en Argentina" })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Process, {}),
    /* @__PURE__ */ jsx(Machines, {}),
    /* @__PURE__ */ jsx(Rentability, {}),
    /* @__PURE__ */ jsx(Faq, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
