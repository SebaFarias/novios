import Link from "next/link";
import { FunctionComponent } from "react"

export interface Regalo{
  nombre: string
  precio: number
}
export interface RegaloCardProps{
  regalo: Regalo
  cortada?: boolean
}
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const RegaloCard: FunctionComponent<RegaloCardProps> = ({ regalo, cortada = false}) => {
  
  const {nombre, precio,} = regalo
  
  return (
    <Link href={`/gracias?regalo=${regalo.nombre}`}>
    <li className={`papel agranda flex flex-1 rounded-xl m-auto font-serif list-none border-4 border-[#D5B699] duration-300 justify-between items-center ${cortada?"cortada":""} ${cortada?'w-[200px]':'w-[230px] sm:w-[340px]'}`}>
      <div className="ml-3 md:ml-5 my-4">
        <h2 className={`mb-3 text-2xl font-semibold text-amber-950 opacity-50`}>
            {nombre}
        </h2>
        <h3 className=" text-xl font-bold text-amber-950 opacity-60 ">{formatter.format(precio).replace(",",".")}</h3>
      </div>
      {!cortada && <div className=" w-[35px] h-[96px] border-l-2 border-dashed border-l-amber-950 opacity-30"/>}
    </li>
    </Link>
  )
}

export default RegaloCard



