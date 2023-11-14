export interface HeroProps{

}

const Hero : React.FunctionComponent<HeroProps> = props => {
  return(
  <section className="px-8 min-h-screen flex flex-col justify-around items-center">
    <div className="flex flex-col">
      <h1 className="text-center text-2xl md:text-7xl">Matri Felipe & Señora </h1>
      <h2 className="text-center mt-16">Gracias por hacerte presente en este momento tan importante </h2>
    </div>
    <a href="/#regalos" className="text-xl border border-gray-700 rounded-full px-4 py-2 hover:bg-gray-100">V</a>
  </section>
  )
}

export default Hero