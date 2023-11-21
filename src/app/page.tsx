import Hero from "@/components/Hero"
import RegalosShower from "@/components/RegalosShower"
import MapaShower from "@/components/MapaShower"
import Flores2 from "@/components/Flores2"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-[100vw] overflow-x-hidden">
      <Hero/>
      <RegalosShower/>
      <Flores2/>
      <MapaShower/>
    </main>
  )
}
