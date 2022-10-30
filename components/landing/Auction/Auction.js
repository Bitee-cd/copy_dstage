import Link from "next/link"
import { trending } from "../../../data/landing"
import AuctionCard from "./AuctionCard";

const Auction=()=> {
  
  return (
    <div className=" truncate max-w-[1440px] w-[100%] mx-auto " >
    <div className="flex-col relative  my-10 rotate-[-4deg]">

        {/* start of title bar */}
        <div className=" flex  w-[90%] my-5 max-w-[1440px] mx-auto items-center  justify-between">
      <div className=" flex gap-[1em] items-center">
        <p className="font-par h2-text  font-[600]">Live Auctions</p>
        <img className="w-[20px] md:w-full" src="images/fire.svg" alt="fire"/>
      </div>

      <div className="relative">
      
      <Link href="/auctions"><a>
        <button
         className="button  border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]"
         >View all</button>
      </a></Link>

      </div>
      </div>
      {/* end of title bar */}

<div className="relative mb-24 md:mb-36 ">
  <div className="">
    <div className="flex animate-slide3  translate-x-[-150px]" >
        {
          trending.map((auction)=>(
          <AuctionCard key={auction.id} auction={auction}/>
      ))
    }
    </div>
    <div className="flex animate-slide4 translate-x-[-1300px] mt-5" >
        {
          trending.map((auction)=>(
            <AuctionCard key={auction.id} auction={auction}/>
      ))
    }
    </div>
    </div>          
</div>
</div>
</div>
  )
}

export default Auction