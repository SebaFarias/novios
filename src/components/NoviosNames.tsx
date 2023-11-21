export interface NoviosNameProps {

}

const NoviosName: React.FunctionComponent<NoviosNameProps> = props => {
    return (
        <article className="flex flex-col items-center relative ">
            <h3 className="absolute animate-[appeartrans 1s ease-out] inset-0 -translate-y-10 md:translate-y-0 text-[200px] text-center text-[#dbb289] opacity-30 font-serif ">{'&'}</h3>
            <h1 className="text-6xl animate-[appear_3s_ease-out_forwards] md:text-8xl text-pink-600 font-manus z-10 opacity-0">Andrea</h1>
            <h1 className="font-serif animate-[appear_2s_ease-out_1s_forwards] text-pink-600 z-10 opacity-0">Díaz Ubilla</h1>
            <h1 className="text-6xl animate-[appear_3s_ease-out_forwards] md:text-8xl text-pink-600 font-manus z-10 mt-10 opacity-0">Felipe</h1>
            <h1 className="font-serif animate-[appear_2s_ease-out_1s_forwards]  text-pink-600 z-10 opacity-0">Norambuena San Martín</h1>
        </article>
    )
}

export default NoviosName