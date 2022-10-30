import { useEffect, useState } from "react";
export default function Days() {
 
  const [menuItems, setMenuItems ] = useState({
    activeMenu: null,
    Items: []
  });
   
  useEffect(()=> {   
    const day_menu = [{id:1, text:"1 day"}, {id:2, text:"7 days"}, {id:3, text:"30 days"},]
    
     const getMenuItems = () => {
        var res = [];
        for(var i in day_menu)
        res.push(day_menu[i]);
        const menuItems = {
          activeMenu: null,
          Items: []
        };
        setMenuItems({...menuItems, activeMenu:res[0], Items: res });
       
    }
   getMenuItems();
  },[]);




  function toggleActive(index) {
    setMenuItems({...menuItems, activeMenu: menuItems.Items[index] });
  }

  function toggleActiveStyles(index){
    if(menuItems.Items[index] === menuItems.activeMenu) {
      return "day_menu active"
    } else {
      return "day_menu";
    }
  }



  return (
    <div className=" font-Header md:font-Body relative grid grid-cols-3 font-[600]  w-full gap-5 md:gap-3 xl:gap-5 items-center bg-area p-1 rounded-[10px] p-small-text md:my-0 my-5">
           {menuItems.Items.map( (day, index) => {
            return (
            <div className={toggleActiveStyles(index)} onClick={()=>toggleActive(index)} key={index}>
              <p className="day_menu_text">{day.text}</p>
            </div>
            )
        })}
    </div>
  )
}
