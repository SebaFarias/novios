'use client'

import Image from 'next/image'
import Flor from '../../public/flor-sola.png'
import Hoja from '../../public/hoja.png'
export interface FloresProps{}

const Flores2: React.FunctionComponent<FloresProps> = props => {

  return(
    <div className={`relative h-[100px] md:h-[200px] w-full z-0 md:translate-y-20 my-[20vh] transition-opacity`}>
      <div className="absolute inset-0">
        <div className=" relative h-full w-full translate-x-20 -translate-y-10 md:translate-x-40 md:-translate-y-20">
          <Image
            src={Hoja}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
            />
        </div>
        </div>
      <div className="absolute inset-0">
      <div className="relative w-full h-full rotate-180 -translate-x-16 translate-y-6 md:-translate-x-28 md:translate-y-8">
          <Image
            src={Hoja}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
          </div>
      <div className="absolute inset-0">
      <div className="relative animate-rotappear w-full h-full  z-10 row-start-1 ">
          <Image
            className=""
            src={Flor}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
      </div>
    </div>
  )
}

export default Flores2