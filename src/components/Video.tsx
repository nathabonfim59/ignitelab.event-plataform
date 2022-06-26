import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning } from "phosphor-react";
import { Footer } from "./Footer";

import '@vime/core/themes/default.css';

export function Video() {
  return (
    <div className="flex-1 p-6 flex flex-col gap-8 items-center">
      <div className="max-w-[1110px] max-h-[60rem] gap-[60px] h-full w-full aspect-video">
        <Player>
          <Youtube videoId="KJj70dBgRPo" />
          <DefaultUi />
        </Player>
      </div>
      <div className="flex max-w-[1110px] gap-[60px]">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            Aula 1 • O início da especialização em ReactJS
          </h1>
          <p className="leading-relaxed">
            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
          </p>
        </div>

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
      <Footer />
    </div>
  )
}
