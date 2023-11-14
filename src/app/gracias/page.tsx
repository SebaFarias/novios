import Cuenta from "@/components/Cuenta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <div>
        <h1 className="text-center text-2xl md:text-7xl">Gracias por tu aporte</h1>
        <h1 className="text-center text-sm md:text-2xl mt-2 md:mt-8">solo queda 1 paso, deposita el monto q quieres aportar  a esta cuenta:</h1>
      </div>
      <Cuenta/>
      <a href="/">volver</a>
    </main>
  )
}
