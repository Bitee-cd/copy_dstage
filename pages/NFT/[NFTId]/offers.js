import AlsoLike from "../../../components/singleNFT/AlsoLike"
import Category_Selection from "../../../components/singleNFT/CategorySelection"
import SingleProfile from "../../../components/singleNFT/SingleProfile"
import OfferCard from "../../../components/single_seller/OfferCard"
import { bid } from "../../../data/landing"

const Offer=()=>{
    return(
      <>
      <SingleProfile/>
      <Category_Selection/>
        <div>
            <div>
                {/* dynamic section  */}
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 w-[90%] mx-auto max-w-[1440px] my-10">
                    {
                      bid.map((card)=>(
                        <OfferCard key={card.id}/>
                      ))  
                    }
                </div>
                    
                {/* dynamic section  */}
           
        </div>
        </div>
        <AlsoLike/>
        </>
    )
}
export default Offer 