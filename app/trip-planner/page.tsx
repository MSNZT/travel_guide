import Link from "next/link";

export default function TripPlannerPage() {
  return (
    <main className="bg-blue-50 min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-10 text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 mb-4">
            Trip planner
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Plan your custom trip
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Soon you’ll be able to build a route tailored to your interests, dates, and travel style. For now, this
            planner is in active development.
          </p>
        </section>

        <section className="mb-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 sm:px-5 sm:py-4 flex gap-3 items-start">
            <span className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-amber-700">In development</span>
            <p className="text-sm text-amber-800">
              The planner interface below is a preview. Fields are not yet interactive — we’re still working on the
              logic for saving routes, recommendations, and smart suggestions.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white shadow-sm border border-slate-200/70 px-5 py-6 sm:px-8 sm:py-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Basic trip info</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">Preferred region</label>
                <input
                  type="text"
                  placeholder="e.g. Moscow, Golden Ring, Altai"
                  disabled
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500 placeholder:text-slate-400 cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">Trip duration</label>
                <input
                  type="text"
                  placeholder="e.g. 3–7 days"
                  disabled
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500 placeholder:text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">Travel dates</label>
                <input
                  type="text"
                  placeholder="Approximate dates"
                  disabled
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500 placeholder:text-slate-400 cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">Group size</label>
                <input
                  type="text"
                  placeholder="Number of travelers"
                  disabled
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500 placeholder:text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Your interests</h2>
            <p className="text-xs text-slate-500">
              In the future you’ll be able to mark what matters most: museums, nature, cities, local cuisine, road
              trips, etc.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Nature", "City walks", "Museums", "Road trips", "Mountains", "History"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  disabled
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 cursor-not-allowed">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Notes for your future itinerary</h2>
            <textarea
              rows={4}
              placeholder="Here you’ll be able to write wishes for the route, constraints, and ideas..."
              disabled
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-500 placeholder:text-slate-400 resize-none cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Later, this page will help generate a draft itinerary and suggest tours matching your preferences.
            </p>
            <div className="flex gap-3">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 transition">
                Browse existing tours
              </Link>
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white opacity-60 cursor-not-allowed">
                Save plan (soon)
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
