import { CheckCircle } from 'phosphor-react'
export function Lesson() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-300">
        Domingo • 20 de junho • 19h00
      </span>

      <div className="p-4 rounded border border-gray-600 flex flex-col gap-4">
        <header className="text-sm font-medium flex h-6">
          <span className="flex flex-1 text-blue-500 items-center">
            <CheckCircle size={20} className="mr-2"/>
            Conteúdo liberado
          </span>

          <span className="rounded border border-green-300 py-[0.125rem] px-2 text-xs h-[23px] flex items-center">
            AO VIVO
          </span>
        </header>
        <strong className="text-base">
          Abertura do evento Ignite labs
        </strong>
      </div>
    </div>
  )
}
