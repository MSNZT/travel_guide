import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 mb-3">о проекте</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Russia Uncovered
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Неспешный путеводитель по России: помогаем увидеть страну глубже — от известных городов до тихих мест, о
            которых мало пишут в туристических буклетах.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Миссия проекта</h2>
          <Card className="p-6 sm:p-8 border-slate-200 bg-white rounded-2xl">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Russia Uncovered — некоммерческий гид для тех, кто хочет увидеть Россию без лишнего шума и рекламы. Мы
              собираем маршруты, фактуру и практику, чтобы вам не приходилось тонуть в бесконечных вкладках.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              От Москвы и Петербурга до Байкала, Алтая и Кавказа — мы даём контекст, подсказки по логистике и помогаем
              выбрать точки, с которых удобнее начать знакомство с регионом.
            </p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Что вы найдёте на сайте</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <Card className="p-5 sm:p-6 border-slate-200 bg-white rounded-2xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">маршруты и города</p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Структурированные гиды</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Краткая история, характер места, ключевые точки и логичный порядок, в котором их удобно смотреть.
              </p>
            </Card>

            <Card className="p-5 sm:p-6 border-slate-200 bg-white rounded-2xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">практическое</p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Полезные детали</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Транспорт, сезоны, длительность поездки, ориентиры по бюджету и вещи, о которых лучше подумать заранее.
              </p>
            </Card>

            <Card className="p-5 sm:p-6 border-slate-200 bg-white rounded-2xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">впечатления</p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Отобранные места</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Не только «обязательная программа», но и тихие улицы, смотровые, кафешки и маршруты, куда стоит
                свернуть.
              </p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Регионы, с которых мы начинаем</h2>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Москва</h4>
              <p className="text-sm text-slate-600">
                Столица с классическими must-see и районами, где жизнь чувствуется сильнее, чем открытки.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Санкт-Петербург</h4>
              <p className="text-sm text-slate-600">
                Каналы, музеи, дворы и пара маршрутов, чтобы не застрять только на Невском и в Эрмитаже.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Байкал</h4>
              <p className="text-sm text-slate-600">
                Озеро, вокруг которого легко потеряться в вариантах. Помогаем выбрать сезон и базовые маршруты.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Алтай</h4>
              <p className="text-sm text-slate-600">
                Горы и долины для тех, кто готов к немного более дикому, но очень красивому путешествию.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Кавказ</h4>
              <p className="text-sm text-slate-600">
                Высокие перевалы, горные посёлки и кухня, ради которой хочется задержаться подольше.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Золотое кольцо</h4>
              <p className="text-sm text-slate-600">
                Небольшие города с храмами, историей и спокойным ритмом, куда удобно уехать на пару дней из Москвы.
              </p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Подход Russia Uncovered</h2>
          <Card className="p-6 sm:p-8 border-slate-200 bg-white rounded-2xl">
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Некоммерческий подход.</strong> Цель — помочь спланировать поездку, а не продать тур.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Фокус на подлинности.</strong> Без «10 лучших мест ради галочки», только то, что правда стоит
                  времени.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Широкий охват.</strong> От крупных городов до удалённых регионов и природных парков.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Практика.</strong> Конкретные советы, как оптимизировать маршрут, бюджет и время.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Уважение к месту.</strong> Поддерживаем бережное отношение к природе и локальным сообществам.
                </span>
              </li>
            </ul>
          </Card>
        </section>

        <section className="text-center pt-4 pb-6">
          <p className="text-sm sm:text-base text-slate-600 mb-4">Хотите сразу к маршрутам?</p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-slate-900 hover:text-slate-600">
            <span>Перейти к турам и направлениям</span>
            <span className="text-xs">→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
