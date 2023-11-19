import Image from 'next/image'
import Tulipan from '../../public/tulipan.png'
import Flor from '../../public/flor-sola.png'
import Hoja from '../../public/hoja.png'

export interface FloresProps{}

const Flores: React.FunctionComponent<FloresProps> = props => {
  return(
    <div className='relative h-[100px] md:h-[200px] w-full z-0 md:translate-y-20'>
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
      <div className="relative w-full h-full -scale-x-100 -translate-x-20 -translate-y-10 md:-translate-x-40 md:-translate-y-20">
          <Image
            src={Hoja}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
          </div>
      <div className="absolute inset-0">
      <div className="relative w-full h-full  z-10 row-start-1 ">
          <Image
            className=""
            src={Flor}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
          </div>
      <div className="absolute inset-0">
      <div className="relative h-full w-full z-0 translate-x-16 -translate-y-4 md:translate-x-28 md:-translate-y-10">
          <Image
            src={Tulipan}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
          />
        </div>
          </div>
      <div className="absolute inset-0">
      <div className=" relative h-full w-full  z-0 -scale-x-100 -translate-x-16 -translate-y-4 md:-translate-x-28 md:-translate-y-10">
          <Image
            src={Tulipan}
            alt=''
            fill
            style={{ objectFit: 'contain'}}
            />
        </div>
      </div>
    </div>
  )
}

export default Flores