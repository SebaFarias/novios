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
    <a href="/#regalos" className="text-xl border-4 border-pink-600 text-pink-600 rounded-full px-4 py-2 hover:bg-pink-100 z-20 font-bold opacity-50">V</a>
      <h2 className="text-center mt-16 font-serif text-gray-500">Tu compañía es nuestro mejor regalo </h2>
  </section>
  )
}

export default Hero