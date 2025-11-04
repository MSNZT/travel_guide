"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Users } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Москва - сердце России",
    description: "Откройте для себя столицу России с посещением главных достопримечательностей",
    image: "/moscow-red-square-kremlin.jpg",
    duration: "3 дня",
    difficulty: "Легко",
    groupSize: "2-8 человек",
    attractions: [
      "Красная площадь",
      "Кремль и Соборная площадь",
      "Храм Христа Спасителя",
      "Большой театр",
      "Москва-Сити",
    ],
    region: "moscow",
  },
  {
    id: 2,
    title: "Санкт-Петербург - венеция Севера",
    description: "Посетите культурную столицу России и откройте для себя её величие",
    image: "/saint-petersburg-hermitage-palace.jpg",
    duration: "4 дня",
    difficulty: "Средне",
    groupSize: "2-10 человек",
    attractions: ["Эрмитаж", "Дворцовая площадь", "Петропавловская крепость", "Невский проспект", "Казанский собор"],
    region: "spb",
  },
  {
    id: 3,
    title: "Золотое кольцо России",
    description: "Путешествие по древним русским городам с традиционной архитектурой",
    image: "/golden-ring-russia-historic-churches.jpg",
    duration: "5 дней",
    difficulty: "Средне",
    groupSize: "2-12 человек",
    attractions: ["Ростов Великий", "Суздаль", "Сергиев Посад", "Переславль-Залесский", "Ярославль"],
    region: "golden-ring",
  },
  {
    id: 4,
    title: "Озеро Байкал - жемчужина Сибири",
    description: "Великое путешествие к одному из самых прекрасных озер мира",
    image: "/lake-baikal-siberia-mountains.jpg",
    duration: "6 дней",
    difficulty: "Сложно",
    groupSize: "2-6 человек",
    attractions: ["Озеро Байкал", "Остров Ольхон", "Скала Шаманка", "Слюдянка", "Листвянка"],
    region: "baikal",
  },
  {
    id: 5,
    title: "Алтай - край дикой природы",
    description: "Приключение среди величественных гор и нетронутой природы",
    image: "/altai-mountains-hiking-nature.jpg",
    duration: "7 дней",
    difficulty: "Сложно",
    groupSize: "2-8 человек",
    attractions: ["Гора Белуха", "Озеро Ледяное", "Перевалы Алтая", "Долина реки Катуни", "Плато Укок"],
    region: "altai",
  },
  {
    id: 6,
    title: "Кавказ - край приключений",
    description: "Исследуйте одни из самых впечатляющих горных пейзажей России",
    image: "/caucasus-mountains-hiking-landscape.jpg",
    duration: "5 дней",
    difficulty: "Сложно",
    groupSize: "2-10 человек",
    attractions: ["Эльбрус", "Домбай", "Приэльбрусье", "Кавказский заповедник", "Архыз"],
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
              Туры по России
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Все экскурсии и маршруты
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Подберите маршрут по интересам, формату и длительности — от коротких прогулок до насыщённых путешествий по
              регионам России.
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
                      <p className="text-xs font-semibold text-slate-500 mb-2">Включено:</p>
                      <div className="flex flex-wrap gap-1">
                        {tour.attractions.slice(0, 2).map((attr, idx) => (
                          <span key={idx} className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {attr}
                          </span>
                        ))}
                        {tour.attractions.length > 2 && (
                          <span className="inline-block text-xs text-slate-500">
                            +{tour.attractions.length - 2} ещё
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                      <span className="text-xs font-semibold text-blue-600">{tour.difficulty}</span>
                      <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
                        <span className="text-sm font-semibold">Подробнее</span>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Не нашли нужный маршрут?</h2>
          <p className="text-slate-600 mb-8">
            Мы можем помочь вам спланировать кастомный маршрут в зависимости от ваших интересов и возможностей
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-base font-semibold text-white hover:bg-blue-700 transition shadow-lg">
            Спланировать кастомный маршрут
          </button>
        </div>
      </section>
    </>
  );
}
