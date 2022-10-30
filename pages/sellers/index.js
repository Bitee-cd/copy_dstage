import AllSellersCard from "../../components/all_sellers/AllSellersCard"

import { useRouter } from 'next/router'
import AllSellersTitle from "../../components/all_sellers/AllSellersTitle"
import TopSellersTitle from "../../components/all_sellers/TopSllersTitle"
import { useEffect, useState } from "react"
import { sellers } from "../../data/sellers"

const AllSellers=()=>{
    const [allSellers,SetAllSellers]=useState(false)

    const router = useRouter()
    useEffect(()=>{
        if(router.pathname==="sellers/all"){
            SetAllSellers(true)
        }
    },[router.pathname])
    return(
        <div>
            <div className="w-[90%] max-w-[1440px] mx-auto">
                   
                
                {/* start of title  */}
                {
                       allSellers?
                       <AllSellersTitle/>:
                        <TopSellersTitle/>
                      }
                {/* end of title  */}

                {/* begining of card body  */}
                <div className="font-Body border_box my-10">

                    {/* begining of card title  */}
                    <div className="hidden p-small-text uppercase md:flex justify-between border-b-[1px] border-[#382162] p-4">
                        <div className=" w-[5%]"><p>NO</p></div>
                        <div className=" w-[27.5%]"><p>NAME</p></div>
                        <div className=" w-[17.5%]"><p>TOTAL SALE</p></div>
                        <div className=" w-[22%]"><p>Total Invested</p></div>
                        <div className=" w-[22%]"><p>Portfolio value</p></div>
                        <div className=" w-[16.5%]"><p>Realised gains</p></div>
                    </div>
                {/* end of card title                  */}

                {/* start of single card  */}
                {
                    sellers.map((card)=>(
                        <AllSellersCard card={card} key={card.id}/>
                    ))
                }
                    
                {/* end of single card  */}

            </div>
            <div className="my-10 text-center">
                <button className="text-primary button button-text bg-sub2 border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]">
                See more
              </button>
            </div>
            </div>

        </div>
        
    )
}
export default AllSellers