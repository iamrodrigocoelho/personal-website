import { Sparkles, Layers, Cpu, Leaf, GraduationCap, ShoppingBag } from "lucide-react";

const focuses = [
  { label: "Product Leadership", icon: <Layers size={12} />, color: "bg-violet-100 text-violet-700" },
  { label: "Generative AI", icon: <Sparkles size={12} />, color: "bg-emerald-100 text-emerald-700" },
  { label: "Digital Transformation", icon: <Cpu size={12} />, color: "bg-blue-100 text-blue-700" },
  { label: "Sustainable Innovation", icon: <Leaf size={12} />, color: "bg-green-100 text-green-700" },
  { label: "Executive Education", icon: <GraduationCap size={12} />, color: "bg-orange-100 text-orange-700" },
  { label: "Retail Tech", icon: <ShoppingBag size={12} />, color: "bg-pink-100 text-pink-700" },
];

const metrics = [
  { value: "2", label: "empresas\nde escala" },
  { value: "5+", label: "anos em\nvarejo" },
  { value: "3+", label: "publicações\nacadêmicas" },
];

const feed = [
  { tag: "Artigo", label: "IA & Energia: a vantagem do Brasil", tagColor: "bg-emerald-100 text-emerald-700" },
  { tag: "Projeto", label: "IA Generativa no varejo farmacêutico", tagColor: "bg-violet-100 text-violet-700" },
  { tag: "Aula", label: "MBA — Negócios Sustentáveis", tagColor: "bg-orange-100 text-orange-700" },
];

export function HeroMockupCard() {
  return (
    <div
      className="relative rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#f0f0f0] bg-[#f8f9fa]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 border border-[#e5e7eb] max-w-[180px]">
          <span className="text-[10px] text-[#898989] font-mono">rodrigocoelho.me</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Current focus tags */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#898989] mb-2.5">
            Current Focus
          </p>
          <div className="flex flex-wrap gap-1.5">
            {focuses.map((f) => (
              <span
                key={f.label}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium leading-none ${f.color}`}
              >
                {f.icon}
                {f.label}
              </span>
            ))}
          </div>
        </div>

        {/* Hairline */}
        <div className="h-px bg-[#f3f4f6]" />

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2.5">
          {metrics.map((m) => (
            <div key={m.label} className="bg-[#f8f9fa] rounded-xl p-3 text-center">
              <p className="text-xl font-semibold text-[#111111] leading-none mb-1.5">{m.value}</p>
              <p className="text-[9px] text-[#898989] leading-tight whitespace-pre-line">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Hairline */}
        <div className="h-px bg-[#f3f4f6]" />

        {/* Activity feed */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#898989] mb-2.5">
            Latest activity
          </p>
          <div className="space-y-1">
            {feed.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 py-2 px-2.5 rounded-lg bg-[#f8f9fa]"
              >
                <span
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 leading-none ${item.tagColor}`}
                >
                  {item.tag}
                </span>
                <span className="text-[11px] text-[#374151] truncate font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 pt-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
          </span>
          <span className="text-[11px] text-[#6b7280] font-medium">Available for projects & speaking</span>
        </div>
      </div>
    </div>
  );
}
