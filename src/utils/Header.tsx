import NavItem from "./NavItem"

function Header() :JSX.Element{
    return(
        <>
            <h1>MY FAVOURITE PLACES</h1>
            <nav>
                <NavItem name={"mexico"} />
            </nav>
        </>
    );
}

export default Header;