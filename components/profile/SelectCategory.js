import { menu } from "../../data/profile_filter_menu";
import { useState } from "react";

function SelectCategory() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeFilterMenu, setActiveFilterMenu] = useState([]);

  return (
        <div className="flex justify-between my-10 font-Body p-small-text overflow-hidden">
                <div className="grid md:flex gap-5  max-h-10">
                    { activeFilterMenu.map((item, index) => {
                        return (
                            <div className="flex gap-2 py-1 px-2 items-center border_box3 cursor-pointer" key={index}>
                            <div><img src={`/images/profile/${item.img}`} alt="filter"/></div>                        
                            <p className="">{item.title}</p>
                        </div>
                        )
                    })
                   }
                  </div>

                   
                <div className="mx-2">
                    <div className="flex border-sub1 border-2 rounded-sm  p-2 gap-5 cursor-pointer">
                        <div className="flex gap-2">
                            <img src="/images/profile/filter.svg" alt="filter"/>
                            <p className="">Add Filter</p>
                        </div>
                        <img src="/svg/arrow_down.svg" alt="arrow down" onClick={()=> setMenuOpen(!menuOpen)}/>
                    </div>
                     <div className= {"profile_filter_menu "+ (menuOpen && "active")} >
                         { menu.map((item, index) => { 
                            return (        
                          <div className="flex gap-2 p-2 cursor-pointer" key={index} onClick={()=> {
                           (activeFilterMenu.includes(item))? "": setActiveFilterMenu([...activeFilterMenu, item]
                            )}}>
                            <img src={`/images/profile/${item.img}`} alt="filter"/>
                            <p className="">{item.title}</p>
                        </div>
                    
                          )
                        })

                    }
            </div>
                  
                </div>
            </div>
  )
}

export default SelectCategory