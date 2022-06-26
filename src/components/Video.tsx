import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Spinner } from "phosphor-react";
import { Footer } from "./Footer";

import '@vime/core/themes/default.css';
import { gql, useQuery } from "@apollo/client";

interface VideoProps {
  lessonSlug: string
}

interface GetLessonBySlugResponse {
  lesson: {
    id: string
    lessonType: 'class' | 'live'
    title: string
    videoId: string
    description: string
    teacher: {
      name: string
      bio: string
      avatarURL: string
    }
  }
}

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}, stage: PUBLISHED) {
      id
      lessonType
      title
      videoId
      description
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

export function Video(props: VideoProps) {
  function renderLoading() {
    return (
      <div className="flex-1 p-6 flex gap-8 justify-center items-center">
        <Spinner size={32} className="animate-spin"/>
        <span className="text-3xl">Carregando...</span>
      </div>
    )
  }

  function renderLessonContent() {
    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG, {
      variables: {
        slug: props.lessonSlug
      }
    })

    return data == undefined ? renderLoading() : (
      <div className="flex-1 p-6 flex flex-col gap-8 items-center">

        {/* Video Player */}
        <div className="max-w-[1110px] max-h-[60rem] gap-[60px] h-full w-full aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>

        <div className="flex max-w-[1110px] gap-[60px]">

          {/* Video Description */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="leading-relaxed">
              {data.lesson.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 font-medium">
            <a className="flex p-4 uppercase gap-3 rounded bg-green-500 hover:bg-green-700 transition-colors" href="#">
              <DiscordLogo size={24}/>
              Comunidade no discord
            </a>
            <a className="flex p-4 uppercase gap-3 rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors" href="#">
              <Lightning size={24}/>
              Comunidade no discord
            </a>
            <a href="#"></a>
          </div>
        </div>

        {/* Cards */}
        <div className="flex w-full max-w-[1110px] gap-[60px] grid-cols-2">

          <a className="rounded flex items-stretch overflow-hidden bg-gray-700 hover:bg-gray-600 transition-all w-full" href="#">
            <div className="bg-green-700 p-6 flex items-center">
              <FileArrowDown size={40}/>
            </div>
            <div className="flex flex-col gap-2 p-6">
              <span className="text-2xl font-bold">Material Complementar</span>
              <p className="text-sm text-gray-200">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="p-6 flex items-center">
              <CaretRight size={24} className="text-blue-500"/>
            </div>
          </a>
          <a className="rounded flex items-stretch overflow-hidden bg-gray-700 hover:bg-gray-600 transition-all w-full" href="#">
            <div className="bg-green-700 p-6 flex items-center">
              <FileArrowDown size={40}/>
            </div>
            <div className="flex flex-col gap-2 p-6">
              <span className="text-2xl font-bold">Wallpapers exclusivos</span>
              <p className="text-sm text-gray-200">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="p-6 flex items-center">
              <CaretRight size={24} className="text-blue-500"/>
            </div>
          </a>
        </div>
      </div>
    )
  }

  return props.lessonSlug
    ? renderLessonContent()
    : <div className="flex-1 "/>
}
