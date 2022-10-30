import Link from "next/link"
import { useRouter } from "next/router"
import { menu } from "../../data/collection_menu"
import { useState } from "react"

const CategorySelection=()=>{
    const router =useRouter()
    const id = router.query.collectionId

   const [menuOpen, setMenuOpen] = useState(false);
  
    
    return(
        <div className="w-[90%] mx-auto max-w-[1440px]">
        {/* category section  */}
        <div className="md:w-[100%] md:[70%] flex flex-col ml-auto justify-between items-center md:flex-row md:justify-end relative">
            <div className="w-full md:w-[25%] flex items-center gap-3 py-5 md:py-auto border-b-2  md:border-none mb-5 md:mb-auto">
                <div className="flex justify-between w-full">
                    <div className="flex">
                        <img src="/svg/red_circle.svg" alt="live dot"/>
                        <p className="ml-2">Live feed</p>
                    </div>  
                       <p className="md:hidden">24hrs Floor Price</p>
                </div>  
            </div> 
        <div className="flex justify-between w-full md:w-auto capitalize">
          <div className= {"mini_bar_container "+ (menuOpen && "active")}>
          {menu.map((item, index) => {
               return (
                <div className={router.asPath.includes(`${item.path}`)?"mini_bar_item active":"mini_bar_item"} key={index} >
                 <Link href={`/collections/${id}/${item.path}`}><a className="md:block flex justify-between items-center pr-3  md:py-0 md:px-0" onClick={()=> setMenuOpen(false)}>
                    <p className={router.asPath.includes(`${item.path}`)?"mini_bar_list active":"mini_bar_list"}>{item.title}</p>
                    </a></Link> 
                    <img className="md:hidden invisible" src="/images/drop.svg" alt="" onClick={()=> setMenuOpen(!menuOpen)}/>               
                </div>
               ) 
               })}
            </div> 

            </div> 
        </div>
           
 
        {/* category section  */}
    </div>
    )
}
export default CategorySelection