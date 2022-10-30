import Link from "next/link"
import { useRouter } from "next/router"
import { menu } from "../../data/profile_menu"


const CategorySelection=()=>{
    const router =useRouter()
    const id = router.query.profileId
    return(
        <div>
                <div className="my-5 font-Body">
                    <div className="grid_class p-small-text border-b border-light_ash border-opacity-30">

                    {menu.map((item, index) => {
               return (
                <div className={router.asPath.includes(`${item.path}`)?"profile_menu_item active":"profile_menu_item"} key={index} >
                 <Link  href={`/profile/${id}/${item.path}`}><a className="flex items-center gap-1">
                 <img src={`/images/profile/${item.img}`} alt=""/> 
                    <p>{item.title}</p>
                    </a></Link> 
                                  
                </div>
               ) 
               })}
                        
                        
                    </div>
                </div>
       
        </div>
    )
}
export default CategorySelection