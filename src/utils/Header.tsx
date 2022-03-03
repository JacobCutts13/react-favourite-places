import NavItem from "./NavItem"

function Header() :JSX.Element{
    return(
        <>
            <h1>MY FAVOURITE PLACES</h1>
            <nav>
                <NavItem name={"Mexico"} isEnd={false}/>
                <NavItem name={"Orlando"} isEnd={false}/>
                <NavItem name={"Paris"} isEnd={true}/>
            </nav>
        </>
    );
}

export default Header;