import Image from "next/image";

interface DestinationHeaderProps {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  bestTime?: string;
  difficulty?: string;
}

export function DestinationHeader({
  name,
  tagline,
  description,
  heroImage,
  bestTime,
  difficulty,
}: DestinationHeaderProps) {
  return (
    <section className="space-y-6 lg:space-y-8">
      <div className="relative h-[240px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
        <Image src={heroImage || "/placeholder.svg"} alt={name} fill priority className="block object-cover" />
        <div className="absolute inset-x-4 bottom-5 sm:inset-x-8 sm:bottom-7 flex flex-col gap-2 sm:gap-3">
          <span className="inline-flex w-fit items-center rounded-full bg-white/12 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-100 border border-white/25 backdrop-blur-sm">
            {tagline}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">{name}</h1>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{description}</p>
        </div>

        {(bestTime || difficulty) && (
          <div className="mt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            {bestTime && (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs sm:text-sm text-slate-700">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700">
                  •
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">лучшее время</span>
                  <span className="font-medium text-slate-800">{bestTime}</span>
                </div>
              </div>
            )}

            {difficulty && (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs sm:text-sm text-slate-700">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                  ↗
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">сложность</span>
                  <span className="font-medium text-slate-800">{difficulty}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
