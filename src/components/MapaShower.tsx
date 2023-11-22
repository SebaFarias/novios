import Image from "next/image"
import Mapa from "../../public/mapa-torres-llegar-paine.jpg"

export interface MapaShowerProps {

}

const MapaShower : React.FunctionComponent<MapaShowerProps> = props => {
  return (
    <section className="py-10" id="como-llegar">
      <h3 className="text-center text-amber-950 text-sm md:text-2xl font-serif font-bold opacity-60" >HAZ CLICK EN EL MAPA</h3>
      <a href="https://www.google.com/maps/place/Centro+de+Eventos+Torres+de+Paine/@-33.8342578,-70.7667977,17z/data=!4m14!1m7!3m6!1s0x966322df74f3d2bb:0x34199b8918bac75e!2sCentro+de+Eventos+Torres+de+Paine!8m2!3d-33.8342623!4d-70.7642228!16s%2Fg%2F11ckwmyjj4!3m5!1s0x966322df74f3d2bb:0x34199b8918bac75e!8m2!3d-33.8342623!4d-70.7642228!16s%2Fg%2F11ckwmyjj4?entry=ttu" target="_blank">
      <div className="border-[#D5B699] drop-shadow-lg border-4 my-10 relative w-[85vmin] aspect-[560/517] mx-auto ">
        <Image
          src={Mapa}
          alt="mapa al lugar"
          fill
          sizes="80vmin"
          placeholder="blur"
      /></div>
      </a>
      <p className="text-amber-950 text-center">{'Parcela 54,  Vírgen de Begoña. Pdte Gabriel Gonzales Videla (G540), Paine'}</p>
    </section>)
}

export default MapaShower