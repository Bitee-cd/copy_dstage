import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import ExploreCard from "../components/explore/ExploreCard"
import FilterTop from "../components/explore/FilterTop"
import PriceFilter from "../components/explore/PriceFilter"
import { landing } from "../data/landing"


const Explore =()=>{
   const[explore_data,setExplore_Data]= useState([]);
   const[listed,setListed]=useState(true)
   const [openFilter, setOpenFilter] = useState(false);

   const router= useRouter()
   
  

   useEffect(()=>{
    setExplore_Data(landing)
    if(router.pathname.includes("Id")){
        setListed(false)
       }
   },[router]) ;

    return(
            <div className="mx-auto w-[90%] max-w-[1440px] my-20 ">
                {listed &&
                    <FilterTop openFilter={openFilter} setOpenFilter={setOpenFilter}/>
                }
               
                <div className="md:flex justify-between relative">
                    <div className="md:w-[23%]">
                        <div className="">
                        {!listed &&
                                   <div className="bg-area md:hidden px-3 w-[50px] py-3 rounded-[5px] max-h-[50px] flex items-center absolute right-0 top-[-8rem]" onClick={()=>setOpenFilter(true)}>
                                        <img src="/images/menu.svg" alt=""/>
                                    </div>
                            }
                            <PriceFilter openFilter={openFilter} setOpenFilter={setOpenFilter}/>

                        </div>
                    </div>

                    <div className="md:w-[73%] grid gap-3 grid-cols-2 lg:grid-cols-3 mt-10 md:mt-auto">
                        {
                            landing.map((data)=>(
                                <ExploreCard data={data} key={data.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Explore