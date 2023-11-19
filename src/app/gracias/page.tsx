import Cuenta from "@/components/Cuenta";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around px-2">
      <div className="">
        <h1 className="text-center text-4xl md:text-7xl font-serif text-amber-950 opacity-70 font-medium">Gracias por tu aporte</h1>
        <h1 className="text-center text-sm md:text-2xl mt-2 md:mt-8 font-serif text-amber-950 opacity-70">SÓLO QUEDA UN PASO, DEPOSITA EL MONTO EN ESTA CUENTA:</h1>
      </div>
      <Cuenta/>
      <Link href="/" className="font-serif border-2 border-[#D5B699]  py-2 px-6 rounded text-[#9D8373] hover:text-[#8A6C5C] bg-transparent hover:bg-[#F0D7C1]  transition-all " >VOLVER</Link>
    </main>
  )
}
