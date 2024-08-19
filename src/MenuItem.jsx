import MenuList from "./MenuList";



export default function MenuItem({ item }) {
  

  return (
      <li>
        <p>
        {item.label}
        </p>
        {item && item.children && item.children.length ? 
          <MenuList menus={item.children} />
        : null}
      </li>
  );
}