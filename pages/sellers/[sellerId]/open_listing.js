import Category_Selection from "../../../components/single_seller/Category_selection"
import OpenListingCard from "../../../components/single_seller/OpenListingCard"
import ProfileBlock from "../../../components/single_seller/ProfileBlock"
import { bid } from "../../../data/landing"


const OpenListing=()=>{
    return(
        <>
        <div>
        <ProfileBlock/>
        <Category_Selection/>
        <div className="mx-auto w-[90%] max-w[1440px] my-20">
            <div className="border_box ">
                <div className="hidden  md:grid md:grid-cols-7 border-b-[1px] border-[#382162] p-4">
                    <div className="p-tiny-text"><p>PLATFORM</p></div>
                    <div className="p-tiny-text col-span-2"><p>COLLECTION</p></div>
                    <div className="p-tiny-text"><p>LISTING PRICE</p></div>
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