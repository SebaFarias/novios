import { FunctionComponent } from "react"

const Cuenta: FunctionComponent = props => {
  return(<section className='drop-shadow-md hover:drop-shadow-2xl text-xl text-center text-amber-950 mx-auto papel rounded-2xl w-[230px] sm:w-[340px] list-none border-4 border-[#D5B699] hover:scale-105 transition-all duration-300 font-serif px-5 md:px-6 py-4 '>
    <p className="opacity-60">Banco Itaú</p>
    <p className="opacity-60">Cuenta cte 0220990769</p>
    <p className="opacity-60">Andrea Díaz Ubilla</p>
    <p className="opacity-60">18.169.168-9</p>
  </section>)
}

export default Cuenta