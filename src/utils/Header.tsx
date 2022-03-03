import NavItem from "./NavItem"

function Header() :JSX.Element{
    return(
        <div className="nav">
            <h1>MY FAVOURITE PLACES</h1>
            <div className="navItem">
                <NavItem name={"Mexico"} isEnd={false}/>
                <NavItem name={"Orlando"} isEnd={false}/>
                <NavItem name={"Paris"} isEnd={true}/>
            </div>
        </div>
    );
}

export default Header;