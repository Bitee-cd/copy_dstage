import AuctionCard from "../../components/auctions/AuctionCard"
import AuctionTitle from "../../components/auctions/AuctionTitle"
import Category_Selection from "../../components/single_auction/CategorySelection"
import Profile from "../../components/single_auction/Profile"
import { explore } from "../../data/explore"

const Auctions =()=>{
    return(
        <>
        <Profile/>
        <Category_Selection/>
        <div className="w-[90%] mx-auto max-w-[1440px]">
            <AuctionTitle/>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {
                explore.map((data)=>(
                    <AuctionCard data={data} key={data.id}/>
                ))
            }
            </div>

        </div>
        </>
    )
}
export default Auctions