
import Category_Selection from "../../../components/single_auction/CategorySelection"
import OpenListingCard from "../../../components/single_auction/OpenListingCard"
import Profile from "../../../components/single_auction/Profile"
import { bid } from "../../../data/landing"

const OpenListing=()=>{
    return(
        <>
        <Profile/>
        <Category_Selection/>
        <div>

        <div className="mx-auto w-[90%] max-w-[1440px] my-20">
            <div className="border_box ">
                <div className="hidden  md:grid md:grid-cols-5 border-b-[1px] border-[#382162] p-5">
                    <div className="p-tiny-text"><p>LISTING PRICE</p></div>
                    <div className="p-tiny-text"><p>PLATFORM</p></div>
                    <div className="p-tiny-text"><p>LISTED</p></div>
                    <div className="p-tiny-text"><p>EXPIRES IN</p></div>
                </div>
                {/* card component  */}
                {
                    bid.map((card)=>(
                        <OpenListingCard key={card.id}/>
                    ))
                }


            </div>

        </div>
        </div>
        </>
    )
}

export default OpenListing