import { FunctionComponent } from "react"

export interface Regalo{
  nombre: string
  precio: number
}
export interface RegaloCardProps{
  regalo: Regalo
}
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const RegaloCard: FunctionComponent<RegaloCardProps> = props => {
  
  const {nombre, precio,} = props.regalo
  
  return (
    <a href='/gracias'>
    <li className="m-auto w-[230px] sm:w-[340px] list-none p-5 border-4 border-amber-950 hover:border-amber-800 hover:scale-105 transition-transform font-serif px-5 py-4 ">
      <h2 className={`mb-3 text-2xl font-semibold text-slate-600`}>
            {nombre}
          </h2>
          <h3 className=" text-xl font-bold text-slate-600">{formatter.format(precio).replace(",",".")}</h3>
    </li>
    </a>
  )
}

export default RegaloCard



