import Place from "./Place";
import {PlaceProps} from "./Place"

function MainContent(): JSX.Element {
    //All objects of places
    const mexico: PlaceProps = {
        name: "Mexico",
        location: "North America",
        vists: 2,
        image: "images/mexico.jpg"
    }
    const orlando: PlaceProps ={
        name: "Orlando",
        location: "North America",
        vists: 2,
        image: "images/orlando.jpg"
    }
    const paris :PlaceProps ={
        name: "Paris",
        location: "Europe",
        vists: 0,
        image: "images/paris.jpg"
    }
    const placesArr: PlaceProps[] = [mexico, orlando, paris]; //array to store all places

    const placesToProps = (place :PlaceProps) => (
        <section id="place.name">
            <Place
            name={place.name}
            location={place.location}
            vists={place.vists}
            image={place.image}
            />
        </section> 
    ) 
    const mappedPlaces = placesArr.map(placesToProps);
    
    console.log(mappedPlaces)

  
    return (
    <div className="places">
        {mappedPlaces}
    </div>
  );
}

export default MainContent;
