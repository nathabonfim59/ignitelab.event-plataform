import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'

interface LessonProps {
  id: string
  title: string
  slug: string
  availableAt: Date
  type: 'class' |  'live'
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • ' d ' de 'MMMM' • 'HH'h'mm",
    { locale: ptBR }
  )

  function captalizeFirstLetter(str: string) {
    return str.replace(/^./, str[0].toUpperCase())
  }

  return (
    <a className="flex flex-col gap-2 group" href={'/event/lesson/' + props.slug}>
      <span className="text-gray-300">
        { captalizeFirstLetter(availableDateFormatted) }
      </span>

      <div className="p-4 rounded border border-gray-600 flex flex-col gap-4 group-hover:border-green-500">
        <header className="text-sm font-medium flex h-6">
          { isLessonAvailable ? (
            <span className="flex flex-1 text-blue-500 items-center">
              <CheckCircle size={20} className="mr-2"/>
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex flex-1 text-orange-500 items-center">
              <Lock size={20} className="mr-2"/>
              Em breve
            </span>
          )}

          <span className="rounded border border-green-300 py-[0.125rem] px-2 text-xs h-[23px] flex items-center">
            { props.type == "live" ? "AO VIVO" : "AULA PRÁTICA" }
          </span>
        </header>
        <strong className="text-base">
          { props.title }
        </strong>
      </div>
    </a>
  )
}
