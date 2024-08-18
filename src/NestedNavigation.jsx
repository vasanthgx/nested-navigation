import MenuList from "./MenuList";
import './styles.css'


export default function NestedNavigation({menus}) {
  return (
    <div className="menu-container">
      <MenuList menus={menus}/>
    </div>
  )
}

