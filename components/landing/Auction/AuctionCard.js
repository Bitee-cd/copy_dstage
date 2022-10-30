import Image from "next/image"
import Link from "next/link"

const AuctionCard = ({auction})=>{
    return(
        <Link href={`/auctions/${auction.id}/properties`} key={auction.id} ><a>
            <div className="flex-col r-width  ml-[25px] hover:scale-110 transition-transform" >
            <img src={`/images/landing/auctions/${auction.png}`} alt="auction image"/>   
            <div className="relative mt-[-72px] h-[72px] r-width bg-[rgba(255,255,255,0.5)] flex items-center justify-center ">
                <img src="/svg/time.svg" alt="time"/>
                <p className="text-[23px] leading-[24px] auction_text font-san text-black font-[700] ml-[20px]">14:40:30</p>
            </div>
            </div>
        </a></Link>
    )
}
export default AuctionCard