interface NavItemProps {
  name: string;
  isEnd: boolean;
}

function NavItem(props: NavItemProps): JSX.Element {
  const str = props.isEnd ? "" : "|";
  const link = "#" + props.name;
  return (
    <>
      <a href={link}>{props.name}</a>
      <span> {str} </span>
    </>
  );
}

export default NavItem;
