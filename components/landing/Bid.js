import Link from "next/link"
import { bid, landing } from "../../data/landing"

function Bid() {
  return (
    <div className="my-5 md:my-10">
       <img className="absolute z-[-100] w-[40%] h-[40%] md:animate-cycle animate-cycle_2" src="/images/glow.png" alt=""/>    
        <div className="mx-auto w-[90%] max-w-[1440px] ">
            <p className="font-Header h2-text font-[700] md:my-5">New Collections</p> 
            <div className="grid md:grid-cols-2 gap-5 ">
          
                {
                bid.map((bid)=>(
                    <Link href={`/collections/${bid.id}/items`} key={bid.id}><a><div  className="font-Body flex justify-between px-4 py-4 bg-primary rounded-[10px]">
                    <div className="flex items-center gap-3">
                        <div>
                            <img src="/images/landing/bids/Ellipse297.svg" alt="" className="card_img"/>
                        </div>
                        <p className="h5-text">CrowdSurfers</p>
                    </div>

                    <div className="">
                        <div className="flex gap-3">
                            <img className="w-[15px] 2xl:w-[25px]"src="images/hero-eth.svg" alt="profile image"/>
                            <p className="h6-text">{bid.price} {bid.currency}</p>
                        </div>
                        <p className="p-small  text-end">25%</p>
                    </div>
                </div>
                </a></Link>
                ))
                }
                
            </div>
        <div className="flex justify-center mt-3 md:mt-10">
            <Link href="/collections" as="/collections/new"><a>
                <button className="button border-sub2 bg-sub2 text-primary hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]">Explore</button>
            </a></Link>
        </div>
        </div>
    </div> 
  )
}

export default Bid