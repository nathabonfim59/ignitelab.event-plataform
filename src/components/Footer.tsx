import { LogoRocketseat } from "./Logo";

export function Footer() {
  return (
    <div className="flex min-w-full gap-4 border-t pt-6 border-gray-600 text-gray-300">
      <LogoRocketseat />
      <p className="text-[16px] flex-1">Rocketseat - Todos os direitos reservados</p>
      <p className="">Política de privacidade</p>
    </div>
  )
}
