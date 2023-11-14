import { FunctionComponent } from "react"

const Cuenta: FunctionComponent = props => {
  return(<section className='rounded-lg border px-5 py-4 border-gray-600 hover:bg-gray-100'>
    <p>nombre del titular de la Cuenta</p>
    <p>rut del titular de la Cuenta</p>
    <p>mail del titular de la Cuenta</p>
    <p>número de  Cuenta</p>
  </section>)
}

export default Cuenta