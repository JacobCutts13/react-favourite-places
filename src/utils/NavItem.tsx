interface NavItemProps {
    name: string;
    isEnd: boolean;
}

function NavItem(props: NavItemProps) :JSX.Element {
    const str = props.isEnd? "" : "|"
    return (
        <> 
            <a href="{props.name}">{props.name}</a>
            <span> {str} </span>
        </>      
    );
}

export default NavItem;