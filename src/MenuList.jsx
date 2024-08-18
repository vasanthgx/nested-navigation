import MenuItem from "./MenuItem";

export default function MenuList({ menus}) {
  return (
    <ul className="menu-list-container">
      { menus.map((listItem) => <MenuItem item={listItem} />)
    }
    </ul>
  );
}