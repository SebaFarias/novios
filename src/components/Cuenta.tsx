import { FunctionComponent } from "react"

const Cuenta: FunctionComponent = props => {
  return(<section className='text-xl text-center mx-auto bg-[#8C6238] text-[#F0E5DB] w-[230px] sm:w-[340px] list-none border-4 border-[#D5B699] hover:scale-105 transition-all duration-300 font-serif px-5 md:px-6 py-4 '>
    <p>Banco Itaú</p>
    <p>Cuenta cte 0220990769</p>
    <p>Andrea Díaz Ubilla</p>
    <p>18.169.168-9</p>
  </section>)
}

export default Cuenta