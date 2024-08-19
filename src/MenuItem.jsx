import { useState } from "react";
import MenuList from "./MenuList";


export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

   function handleToggleChildren(getCurrentLabel){
      setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
      })
   }
        // console.log(getCurrentLabel);
       console.log(displayCurrentChildren);
  return (
      <li>
        <div style={{display:'flex', gap:'20px'}}>
          <p>{item.label}</p>
          {item && item.children && item.children.length  ? <span onClick={()=>handleToggleChildren(item.label)}>+</span>  :null}
        </div>
        {item && item.children && item.children.length  && displayCurrentChildren[item.label] ? 
          <MenuList menus={item.children} />
        : null}
      </li>
  );
}