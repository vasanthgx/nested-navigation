import MenuItem from "./MenuItem";

export default function MenuList({ menus =[]}) {
  return (
    <ul className="menu-list-container">
      { menus && menus.length ? menus.map((listItem,index) => <MenuItem key={index} item={listItem} />) : null
    }
    </ul>
  );
}