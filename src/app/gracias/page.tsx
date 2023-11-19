import Cuenta from "@/components/Cuenta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around px-2">
      <div className="">
        <h1 className="text-center text-4xl md:text-7xl font-serif text-amber-950 opacity-70 font-medium">Gracias por tu aporte</h1>
        <h1 className="text-center text-sm md:text-2xl mt-2 md:mt-8 font-serif text-amber-950 opacity-70">SÓLO QUEDA UN PASO, DEPOSITA EL MONTO EN ESTA CUENTA:</h1>
      </div>
      <Cuenta/>
      <a href="/" className="font-serif  bg-[#8C6238] hover:text-[#F0E5DB] py-2 px-6 rounded text-[#D5B699] hover:scale-105 transition-all " >VOLVER</a>
    </main>
  )
}
