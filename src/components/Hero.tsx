import NoviosNames from './NoviosNames'
import Flores from "@/components/Flores"

export interface HeroProps{

}

const Hero : React.FunctionComponent<HeroProps> = props => {
  return(
  <section className="px-8 min-h-screen flex flex-col justify-around items-center relative w-full">
    <div className="flex flex-col ">
      <div className="absolute inset-0 flex">
        
      </div>
      <NoviosNames/>
    </div>
    <Flores/>
    <h2 className="text-center font-serif text-amber-950 opacity-60 text-2xl sm:text-3xl md:text-4xl uppercase">Tu compañía es nuestro mejor regalo </h2>
    <a href="/#regalos" className="animate-bounce text-xl border-4 border-amber-950 text-amber-950 rounded-full px-4 py-2 hover:scale-105 transition-transform z-20 font-bold opacity-50">V</a>
  </section>
  )
}

export default Hero