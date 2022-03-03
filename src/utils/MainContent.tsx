import Place from "./Place";

function MainContent() :JSX.Element{
    return(
        <>
            <section id="Mexico">
                <Place 
                name={"mexico"} 
                location={"North America"} 
                vists={2}
                image={"images/mexico.jpg"}
                /> 
            </section>

            <section id="Orlando">
                <Place 
                name={"Orlando"} 
                location={"North America"} 
                vists={3}
                image={"images/orlando.jpg"}
                />
            </section>
 
            <section id="Paris">
                <Place 
                name={"Paris"} 
                location={"Europe"} 
                vists={0}
                image={"images/paris.jpg"}
                />
            </section>
 
        </>
    )
}

export default MainContent