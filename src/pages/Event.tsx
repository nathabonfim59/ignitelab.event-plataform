import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
      <div className="bg-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-1">
          <Video lessonSlug={slug} />
          <Sidebar />
        </main>
        <Footer />
      </div>
    )
}
