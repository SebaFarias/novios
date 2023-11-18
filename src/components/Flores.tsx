import Image from 'next/image'
import Tulipan from '../../public/tulipan.png'
import Flor from '../../public/flor-sola.png'
import Hoja from '../../public/hoja.png'

export interface FloresProps{}

const Flores: React.FunctionComponent<FloresProps> = props => {
  return(
    <div className='grid grid-cols-3 h-[20vh] w-full grid-rows-1 z-0 '>
      <div className=" relative h-[20vh] w-full col-start-2  row-start-1 translate-x-16 -translate-y-10 md:translate-x-40 md:-translate-y-28">
          <Image
            src={Hoja}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
      <div className="relative h-[20vh] w-full col-start-2  row-start-1 -scale-x-100 -translate-x-16 -translate-y-10 md:-translate-x-40 md:-translate-y-28">
          <Image
            src={Hoja}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
      <div className="relative h-[20vh] w-full col-start-2 z-10 row-start-1 ">
          <Image
            className="latiendo"
            src={Flor}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
      <div className="relative h-[20vh] w-full col-start-2 z-0 row-start-1 translate-x-12 -translate-y-4 md:translate-x-32 md:-translate-y-10">
          <Image
            src={Tulipan}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
      <div className=" relative h-[20vh] w-full col-start-2 z-0 row-start-1 -scale-x-100 -translate-x-12 -translate-y-4 md:-translate-x-32 md:-translate-y-10">
          <Image
            src={Tulipan}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
    </div>
  )
}

export default Flores