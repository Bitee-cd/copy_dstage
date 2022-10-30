import { useEffect, useState } from "react";
export default function Header() {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems ] = useState({
    activeMenu: null,
    Items: []
  });
   
   useEffect(()=> {    
    const collection_menu = [{id:1, text:"Recently Listed"}, {id:2, text:"Recently List"}, {id:3, text:"Recently Lists"},]
     const getMenuItems = () => {
        var res = [];
        for(var i in collection_menu)
        res.push(collection_menu[i]);
        setMenuItems({...menuItems, activeMenu:res[0], Items: res });
       
    }
   getMenuItems();
  },[menuItems]);




  function toggleActive(index) {
    setMenuItems({...menuItems, activeMenu: menuItems.Items[index] });
  }

  function toggleActiveItem(index){
    if(menuItems.Items[index] === menuItems.activeMenu) {
      return "collection_menu_item active"
    } else {
      return "collection_menu_item";
    }
  }

  return (
    <div className="flex h6-text font-[600] items-start justify-between gap-4 md:justify-end font-Header md:font-Body">
     <div className={"collection_menu_container "+ (menuOpen && "active")}>
    {menuItems.Items.map((items, index) => {
      return (
    <div className={toggleActiveItem(index)}  key={index} >
      <p onClick={()=> { toggleActive(index); setMenuOpen(false)}}>{items.text}</p>
      <div><img className="cursor-pointer invisible" onClick={()=>setMenuOpen(!menuOpen)} src="/svg/arrow_down.svg" alt=""/></div>
      </div>
       )
      })}
       </div>

    <div className="flex gap-2 items-center bg-area px-6 py-3 rounded-xl md:hidden">
      <p className="">All category</p>
      <div>
      <img src="/svg/arrow_down.svg" alt="" />
      </div>
    </div>

</div>
  )
}
