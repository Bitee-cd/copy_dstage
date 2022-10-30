import Days from "../all_collection/Days"
import { useEffect, useState } from "react";

const TopSellersTitle=()=>{

   
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems ] = useState({
    activeMenu: null,
    Items: []
  });
   
   useEffect(()=> {   
    const seller_menu = [{id:1, text:"By Volume"}, {id:2, text:"By Price"}, {id:3, text:"By Category"},] 
     const getMenuItems = () => {
        var res = [];
        for(var i in seller_menu)
        res.push(seller_menu[i]);
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

    return(
        <div className=" grid grid-cols-2 md:flex gap-5 justify-between items-start mt-14">
            <div className="">
            <h2 className="font-Header h2-text font-bold">All Sellers </h2>
            </div>
    
            <div className=" md:ml-auto flex md:flex col-start-1 col-span-2 md:w-[45%] lg:w-[30%]">
               <Days/>
            </div>

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
           
        </div>
    )
}
export default TopSellersTitle