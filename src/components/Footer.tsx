import { LogoRocketseat } from "./Logo";

export function Footer() {
  return (
    <div className="flex min-w-full gap-4 border-t p-6 border-gray-600 text-gray-300 items-center">
      <LogoRocketseat />
      <p className="text-[16px] flex-1">Rocketseat - Todos os direitos reservados</p>
      <a className="hover:text-gray-200 hover:underline" href="#">Política de privacidade</a>
    </div>
  )
}
