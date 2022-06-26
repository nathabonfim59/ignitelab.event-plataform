import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const QUERY_GET_LESSONS = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: Date
    lessonType: 'class' | 'live'
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(QUERY_GET_LESSONS)

  return (
    <aside className="bg-gray-700 w-[348px] border-l p-6 border-gray-600">
      <span className="pb-6 mb-6 font-bold text-2xl border-b border-gray-600 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        { data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            id={lesson.id}
            availableAt={new Date(lesson.availableAt)}
            title={lesson.title}
            slug={lesson.slug}
            type={lesson.lessonType}
          />
        )) }
      </div>
    </aside>
  )
}
