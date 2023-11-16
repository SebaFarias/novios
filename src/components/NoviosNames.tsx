export interface NoviosNameProps {

}

const NoviosName: React.FunctionComponent<NoviosNameProps> = props => {
    return (
        <article className="flex flex-col items-center">
            <h1 className="text-5xl text-pink-600 font-cursive ">Andrea</h1>
            <h1 className="font-serif text-pink-600">Díaz Ubilla</h1>
            <h1 className="text-5xl text-pink-600 font-cursive ">Felipe</h1>
            <h1 className="font-serif text-pink-600">Norambuena</h1>
        </article>
    )
}

export default NoviosName