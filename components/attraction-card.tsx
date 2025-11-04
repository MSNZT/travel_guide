import Image from "next/image";
import { Card } from "@/components/ui/card";
import clsx from "clsx";

interface AttractionCardProps {
  title: string;
  description: string;
  image?: string;
  category?: string;
}

export function AttractionCard({ title, description, image, category }: AttractionCardProps) {
  return (
    <Card
      className={clsx(
        "group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
        "transition-shadow hover:shadow-md"
      )}>
      <div className="flex h-full flex-col">
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 80vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
          {category && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{category}</p>
          )}

          <h3 className="text-lg md:text-xl font-semibold text-slate-900">{title}</h3>

          <p className="text-sm leading-relaxed text-slate-700">{description}</p>
        </div>
      </div>
    </Card>
  );
}
