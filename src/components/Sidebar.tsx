import { Lesson } from "./Lesson";

export function Sidebar() {
  return (
    <aside className="bg-gray-700 w-[348px] border-l p-6 border-gray-600">
      <span className="pb-6 mb-6 font-bold text-2xl border-b border-gray-600 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
      </div>
    </aside>
  )
}
