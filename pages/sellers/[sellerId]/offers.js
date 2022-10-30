import Category_Selection from "../../../components/single_seller/Category_selection"
import OfferCard from "../../../components/single_seller/OfferCard"
import Profile from "../../../components/single_seller/Profile"
import { bid } from "../../../data/landing"


const Offer=()=>{
    return(
        <div>
           <Profile/>
            <Category_Selection/>
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
    )
}
export default Offer 