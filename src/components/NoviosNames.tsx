export interface NoviosNameProps {

}

const NoviosName: React.FunctionComponent<NoviosNameProps> = props => {
    return (
        <article className="flex flex-col items-center relative ">
            <h3 className="absolute inset-0 text-center text-[200px] align-text-center z-0 -translate-y-12 md:translate-y-0 md:leading-snug text-[#dbb289] opacity-40 ">{'&'}</h3>
            <h1 className="text-6xl md:text-8xl text-pink-600 font-manus z-10">Andrea</h1>
            <h1 className="font-serif text-pink-600 z-10">Díaz Ubilla</h1>
            <h1 className="text-6xl md:text-8xl text-pink-600 font-manus z-10 mt-10">Felipe</h1>
            <h1 className="font-serif text-pink-600 z-10">Norambuena San Martín</h1>
        </article>
    )
}

export default NoviosName