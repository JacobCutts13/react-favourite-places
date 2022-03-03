interface NavItemProps {
    name: string;
}

function NavItem(props: NavItemProps) :JSX.Element {
    return (
        <> 
            <a href="#">{props.name}</a>
            <span>|</span>
        </>      
    );
}

export default NavItem;