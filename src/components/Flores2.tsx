'use client'

import Image from 'next/image'
import Flor from '../../public/flor-sola.png'
import Hoja from '../../public/hoja.png'
import { cercana } from '@/data/config'
import useObserver from '@/hooks/useObserver'
import { useState, useEffect, useRef } from 'react'

export interface FloresProps{}

const Flores2: React.FunctionComponent<FloresProps> = props => {

  const containerRef = useRef<HTMLDivElement>(null)
  const [ observer, setElements, entries] = useObserver(cercana)
  const [ isVisible, setIsVisible ] = useState<boolean>(false)
  useEffect(()=>{
    if(containerRef.current)setElements([containerRef.current])
  },[setElements])

  useEffect(()=>{
    if(entries[0]&&entries[0].isIntersecting)setIsVisible(entries[0].isIntersecting)
  },[entries])


  return(
    <div ref={ containerRef } className={`relative h-[100px] md:h-[200px] w-full z-0 md:translate-y-20 my-[20vh] transition-opacity ${isVisible?"":"hide"}`}>
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