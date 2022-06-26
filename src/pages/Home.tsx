import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Home() {
  return (
      <div className="bg-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-1 p-6">
          <Footer />
        </main>
      </div>
  )
}
