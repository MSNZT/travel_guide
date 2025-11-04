// import { Card } from "@/components/ui/card"

// interface InfoSectionProps {
//   title: string
//   items: Array<{
//     label: string
//     value: string
//   }>
//   icon?: string
// }

// export function InfoSection({ title, items, icon }: InfoSectionProps) {
//   return (
//     <div className="mb-12">
//       <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
//         {icon && <span className="text-2xl">{icon}</span>}
//         {title}
//       </h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {items.map((item, idx) => (
//           <Card key={idx} className="p-4 border border-border">
//             <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2">{item.label}</p>
//             <p className="font-semibold text-foreground">{item.value}</p>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

import { Card } from "@/components/ui/card";

interface InfoSectionProps {
  title: string;
  items: Array<{
    label: string;
    value: string;
  }>;
  icon?: string;
}

export function InfoSection({ title, items, icon }: InfoSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        {icon && <span className="text-xl">{icon}</span>}
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      </div>
      <p className="text-sm text-slate-500 mb-5">
        Краткие факты, которые помогут спланировать поездку без хаоса в закладках.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <Card key={idx} className="p-4 border border-slate-200 bg-white/80 backdrop-blur-sm">
            <p className="text-[11px] text-slate-500 uppercase tracking-[0.16em] mb-1">{item.label}</p>
            <p className="text-sm font-semibold text-slate-900">{item.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
