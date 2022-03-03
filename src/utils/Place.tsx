interface PlaceProps {
    name: string;
    location: string;
    vists: number;
    image: string; 
}

function Place(props :PlaceProps) :JSX.Element{
    return(
        <>
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <p>number of times visted: {props.vists}</p>
        </>
    );
}

export default Place