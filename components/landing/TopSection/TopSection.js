import Link from "next/link"
import { useEffect, useState } from "react"
import { top_section } from "../../../data/landing"
import TopCollection from "./TopCollection"
import TopSellers from "./TopSellers"


const TopSection =()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        setData(top_section)
    },[])
   
    return(
        <div className=" py-[150px]"> 
        <div className="relative md:flex max-w-[1440px] w-[90%] mx-auto justify-between gap-y-10">
            <div className="gradient-2"></div>
            {/* start of left and side  */}
            <div className="md:w-[50%]">
                <div className="mb-5 text-center md:text-left">
                    <h1 className="h2-text mb-5 font-Header font-[700]">Top Collections</h1>
                    <p className="p-text font-Body">24hrs Volume</p>
                </div>

                    {/* start of card component  */}
                    <div className=" bg-primary rounded-[25px]   relative border_shadow2">
                        <div className="mx-auto w-[90%] my-5">

                            {/* start of card title  */}
                            <div className="flex mb-5 font-Header  my-5 mx-3">
                                <p className="w-[50%]  h5-text font-[600]">Collection</p>
                                <div className="w-[50%] h5-text font-[600] flex justify-between">
                                    <p className="">Floor Price</p>
                                    <p className="text-end">24h vol</p>
                                </div>
                            </div>
                            {/* end of card title  */}
                        {
                            data && data.map((card)=>
                                    <TopCollection card={card} key={card.id} />
                            )
                        }

                    <div className="flex justify-center absolute bottom-[-5%] translate-x-2/4 right-[50%]">
                    
                    <Link href="/collections"><a>
                           <button className="bg-sub2 text-primary font-[500] z-[1px] border-sub2 hover:shadow-[0_7px_12px_rgba(202,202,255,0.16)] button">Explore</button>
                    </a></Link> 
                    </div>
                    </div>
                </div> 
                 {/* start of card component  */}

            </div>
             {/* start of left and side  */}

             {/* start of the right side  */}
            <div className="w-[100%] md:w-[45%] mt-20 md:mt-0 ">
                <div className="mb-5 text-center md:text-left ">
                    <h1 className="h2-text font-Header  font-[700] mb-5">Top Sellers</h1>
                    <p className="p-text font-Body">Ranking</p>
                </div>
                
                {/* start of right hand card  */}
                <div className="bg-primary  rounded-[25px] border_shadow2  relative ">
                    <div className="mx-auto w-[90%] my-5 ">

                        {/* start of card title  */}
                        <div className="flex font-Header  mx-3 my-5">
                            <p className="w-[60%] h4-text font-[600]">Collector</p>
                            <p className="w-[40%] h4-text font-[600]">Total Sale</p>
                        </div>
                        {/* end of card title  */}

                        {
                            data && data.map((card)=>
                                <TopSellers card={card} key={card.id}/>
                            )
                        }
                    </div>
                <div className="flex justify-center absolute bottom-[-5%] translate-x-2/4 right-[50%]">
                    <Link href="/sellers"><a><button className=" bg-sub2  z-[1px] border-sub2 text-primary hover:shadow-[0_7px_12px_rgba(202,202,255,0.16)] button">Discover</button>
                </a></Link>
                </div>
            </div>
             {/* start of right hand card  */}           

            </div>
            {/* start of the right side  */}

        </div>
    </div>
    )
}
export default TopSection