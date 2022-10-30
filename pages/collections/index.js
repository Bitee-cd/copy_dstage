import CollectionCard from "../../components/all_collection/CollectionCard"
import { row } from "../../data/collection_data";
import Header from "../../components/all_collection/Header";
import Days from "../../components/all_collection/Days";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";




const AllCollections=()=> {
  const [dates,setDates]=useState(false)
  const router =useRouter()

  
  useEffect(()=>{
    if(router.asPath.includes("new")){
      setDates(true)
    }
    else{
      setDates(false)
    }
  },[router])



  return (
       <div className="mx-auto w-[90%] max-w-[1440px] my-14">
            {/* header */}
          <div className="md:flex flex-row-reverse justify-between items-start">

           <Header/>       
          <div className="md:flex hidden gap-5  font-[600] mt-3">
            <a  className={router.asPath.includes("all")?"text-sub2 flex gap-2":"flex gap-2"}>All <span className="md:hidden lg:block"> collections</span></a>
            <a  className={router.asPath.includes("top")?"text-sub2 flex gap-2":"flex gap-2"}>Top <span className="md:hidden lg:block"> collections</span></a>  
            <a  className={router.asPath.includes("new")?"text-sub2 flex gap-2":"flex gap-2"}>New <span className="md:hidden lg:block"> collections</span></a>  
          </div>    

           <div className="md:w-[45%] lg:w-[30%]">
            {dates ?"":
              <Days/>
            }
           </div>
           </div>

           {/* start of collection table  */}

           {/* table Tittle */}
           <div className="font-Body border_box my-10 p-small-text ">
              <div className="hidden uppercase md:flex justify-between border-b-[1px] border-[#382162] p-4">
                <div className="w-[7%]"><p>NO</p></div>
                <div className=" w-[30%]"><p>COLLECTION</p></div>
                <div className="w-[20%]"><p>FLOOR</p></div>
                <div className=" w-[20%]"><p>24HR VOL</p></div>
                <div className=" w-[20%]"><p>TOTAL</p></div>
                <div className=" w-[15%]"><p>OWNERS</p></div>
                <div className=" w-[15%]"><p>REALEASED GAINS</p></div>
              </div>
           {
                    row.map((row)=>(
                        <CollectionCard row={row} key={row.id}/>
                    ))
                }
                </div>
                    
                {/* end of collection table */}

                <div className="my-10 text-center">
                <button className="text-primary button button-text bg-sub2 border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]">
                See more
              </button>
            </div>
            
        </div>
 
  );
}

export default AllCollections