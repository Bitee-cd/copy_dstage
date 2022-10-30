import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const OnSaleCard=({data})=>{
    const [onSale,setOnSale]=useState(false)
    const router = useRouter()
    
    useEffect(()=>{
        if (router.pathname==="/profile/on_sale"){
            setOnSale(true)
        }
    },[router.pathname])

    return(
            <div className="wrapper font-Body">
                <div className="">
                    <img 
                    src={`/images/explore/${data.svg}`} 
                    className="image_"
                    width="100%"
                    height="100%"
                    layout="responsive"
                     alt=""/>
                </div>
    
                <div className ="w-[90%] mx-auto my-5 grid gap-y-3">
                    <div className="flex gap-3 items-center">
                        <p className="hidden md:block p-text font-bold">{"Degodsshsdjjks..."}</p>
                        <p className="md:hidden p-text font-bold">{"Degodsshsdjjks...".slice(0,6)}</p>
                        <div>
                            <img   
                            src="/images/collections/tick.svg" 
                            alt=""   
                            width="100%"
                            height="100%"
                            objectFit="contain"/>
                        </div>
                    </div>
    
                    <div className="flex justify-between items center">
                        <div className="hidden md:block ">
                            
                            <img src="/images/collection-avatar/right/4.svg" alt="" className="w-[70%]"/>
                        </div>
                        <p className=" hidden md:block p-small-text">0xdO5e42nhsw9...</p>
                        <p className="p-h6">#34502</p>
                    </div>
    
                    <div className="flex justify-between items-center p-tiny-text">
                        <div className="flex align-middle items-center gap-1 md:gap-2">
                            <div>
                                <img 
                                src="/svg/ethereum.svg "
                                 className=""
                                  alt="" />
                            </div>
                            <p className="">0.908 ETH</p>
                        </div>
    
                        <div>
                            <p className=" bg-area text-light_purple  p-1 rounded-lg font-bold">
                                Rank #8765
                            </p>
                        </div>
                    </div>
                    {
                        onSale ? 
                        <div className="flex gap-3 items-center font-Header">
                            <button className="button border-sub2 bg-sub2 text-primary">cancel</button>
                            <p className="mx-3 font-[500] font-Body text-sub2">Lower</p>
                        </div>
                    :
                    <div className="flex gap-3 items-center font-Header">
                        <button className="button border-sub2 bg-sub2 text-primary">Bid now</button>
                        <p className="mx-3 font-[500] font-Body text-sub2">Details</p>
                    </div>
                    }
                  
    
                </div>
            </div>
    )
}
export default OnSaleCard
