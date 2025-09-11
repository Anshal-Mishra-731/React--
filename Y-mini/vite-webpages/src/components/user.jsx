import { useParams } from "react-router-dom";

export default function User() {
    const {userid} = useParams()
    return (
        <h1 className="text-3xl text-red-400 mx-150">Heil seig: {userid}</h1>
    )
    //We can see the paramters being used ! 
}