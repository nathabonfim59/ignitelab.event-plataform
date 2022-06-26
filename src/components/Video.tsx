import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { Footer } from "./Footer";

import '@vime/core/themes/default.css';

interface VideoProps {
  videoSlug: string
}

export function Video(props: VideoProps) {
  return (
    <div className="flex-1 p-6 flex flex-col gap-8 items-center">

      {/* Video Player */}
      <div className="max-w-[1110px] max-h-[60rem] gap-[60px] h-full w-full aspect-video">
        <Player>
          <Youtube videoId="KJj70dBgRPo" />
          <DefaultUi />
        </Player>
      </div>

      <div className="flex max-w-[1110px] gap-[60px]">

        {/* Video Description */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            Aula 1 • O início da especialização em ReactJS
          </h1>
          <p className="leading-relaxed">
            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
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
      <Footer />
    </div>
  )
}
