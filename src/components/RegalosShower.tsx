import { REGALOS } from '@/data/data'
import { FunctionComponent } from 'react'
import RegaloCard, { Regalo } from './RegaloCard'


export interface RegalosShowerProps {
  regalos?: Regalo[]
}

const RegalosShower : FunctionComponent<RegalosShowerProps> = ({regalos = REGALOS}) => {
  return(
  <section className='min-h-[60vh] pb-32' id="regalos">
    <h2 className="text-2xl md:text-4xl mb-5 md:mb-8 text-center px-4">Escoge una manera de demostrarnos tu Amor</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-col items-stretch justify-center px-8">
      {REGALOS.map((regalo, index)=><RegaloCard key={`${regalo.nombre}-${index}`} regalo={regalo} />)}  
    </ul>
  </section>
  )
}

export default RegalosShower