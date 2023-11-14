import { FunctionComponent } from "react"

export interface Regalo{
  nombre: string
  precio: number
  descripcion: string
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
  
  const {nombre, precio, descripcion} = props.regalo
  
  return (
    <a href='/gracias'>
    <li className="m-auto w-[230px] sm:w-[340px] list-none rounded-lg border px-5 py-4 border-gray-600 hover:bg-gray-100">
      <h2 className={`mb-3 text-2xl font-semibold`}>
            {`${nombre}  `}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <h3 className="text-xl font-bold">{formatter.format(precio).replace(",",".")}</h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {descripcion}
          </p>
    </li>
    </a>
  )
}

export default RegaloCard



