import Hero from "@/components/Hero"
import RegalosShower from "@/components/RegalosShower"
import MapaShower from "@/components/MapaShower"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-[100vw] overflow-x-hidden">
      <Hero/>
      <RegalosShower/>
      <MapaShower/>
    </main>
  )
}
