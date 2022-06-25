import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-1">
          <Video />
          <Sidebar />
        </main>
      </div>
    )
}
