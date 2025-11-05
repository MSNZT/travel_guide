"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Users } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Moscow – the Heart of Russia",
    description: "Discover the capital of Russia with visits to its main landmarks",
    image: "/moscow-red-square-kremlin.jpg",
    duration: "3 days",
    difficulty: "Easy",
    groupSize: "2–8 people",
    attractions: [
      "Red Square",
      "The Kremlin and Cathedral Square",
      "Cathedral of Christ the Saviour",
      "Bolshoi Theatre",
      "Moscow City",
    ],
    region: "moscow",
  },
  {
    id: 2,
    title: "Saint Petersburg – the Venice of the North",
    description: "Visit Russia’s cultural capital and discover its grandeur",
    image: "/saint-petersburg-hermitage-palace.jpg",
    duration: "4 days",
    difficulty: "Medium",
    groupSize: "2–10 people",
    attractions: ["Hermitage Museum", "Palace Square", "Peter and Paul Fortress", "Nevsky Prospect", "Kazan Cathedral"],
    region: "spb",
  },
  {
    id: 3,
    title: "The Golden Ring of Russia",
    description: "A journey through ancient Russian towns with traditional architecture",
    image: "/golden-ring-russia-historic-churches.jpg",
    duration: "5 days",
    difficulty: "Medium",
    groupSize: "2–12 people",
    attractions: ["Rostov the Great", "Suzdal", "Sergiev Posad", "Pereslavl-Zalessky", "Yaroslavl"],
    region: "golden-ring",
  },
  {
    id: 4,
    title: "Lake Baikal – the Pearl of Siberia",
    description: "An epic journey to one of the most beautiful lakes in the world",
    image: "/lake-baikal-siberia-mountains.jpg",
    duration: "6 days",
    difficulty: "Hard",
    groupSize: "2–6 people",
    attractions: ["Lake Baikal", "Olkhon Island", "Shamanka Rock", "Slyudyanka", "Listvyanka"],
    region: "lake-baikal",
  },
  {
    id: 5,
    title: "Altai – Land of Wilderness",
    description: "An adventure among majestic mountains and untouched nature",
    image: "/altai-mountains-hiking-wilderness.jpg",
    duration: "7 days",
    difficulty: "Hard",
    groupSize: "2–8 people",
    attractions: ["Mount Belukha", "Lake Ledyanoye", "Altai mountain passes", "Katun River Valley", "Ukok Plateau"],
    region: "altai",
  },
  {
    id: 6,
    title: "The Caucasus – Land of Adventures",
    description: "Explore some of the most impressive mountain landscapes in Russia",
    image: "/caucasus-mountains-elbrus-peaks.jpg",
    duration: "5 days",
    difficulty: "Hard",
    groupSize: "2–10 people",
    attractions: ["Mount Elbrus", "Dombay", "Elbrus Region", "Caucasian Nature Reserve", "Arkhyz"],
    region: "caucasus",
  },
];

export default function ToursPage() {
  return (
    <>
      <section className="border-b bg-blue-50 py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 mb-4">
              Tours in Russia
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              All tours and itineraries
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Choose a route by interests, format, and duration — from short walks to rich multi-day trips across
              Russia’s regions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <Link key={tour.id} href={`/destination/${tour.region}`}>
                <article className="group rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-xl transition overflow-hidden h-full cursor-pointer flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      width={900}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-blue-600 transition">
                      {tour.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 flex-1">{tour.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4 pt-4 border-t border-blue-100">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span>{tour.groupSize}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-slate-500 mb-2">Included:</p>
                      <div className="flex flex-wrap gap-1">
                        {tour.attractions.slice(0, 2).map((attr, idx) => (
                          <span key={idx} className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {attr}
                          </span>
                        ))}
                        {tour.attractions.length > 2 && (
                          <span className="inline-block text-xs text-slate-500">
                            +{tour.attractions.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                      <span className="text-xs font-semibold text-blue-600">{tour.difficulty}</span>
                      <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
                        <span className="text-sm font-semibold">Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border-t py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Didn&apos;t find the right itinerary?</h2>
          <p className="text-slate-600 mb-8">
            We can help you plan a custom route based on your interests and travel preferences.
          </p>
          <Link
            href="/trip-planner"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-base font-semibold text-white hover:bg-blue-700 transition shadow-lg">
            Plan a custom route
          </Link>
        </div>
      </section>
    </>
  );
}
