
import Category_Selection from "../../../components/single_auction/CategorySelection"
import Profile from "../../../components/single_auction/Profile"
import PropertyCard from "../../../components/single_auction/PropertyCard"
import { bid } from "../../../data/landing"


const Properties =()=>{
    return(
        <>
        <Profile/>
        <Category_Selection/>
        <div>
        <div className="mx-auto w-[90%] max-w-[1440px] my-20">
            <div className="border_box ">
                <div className="hidden  md:grid md:grid-cols-5 border-b-[1px] border-[#382162] p-5">
                    <div className="p-tiny-text"><p>TRAIT TYPE</p></div>
                    <div className="p-tiny-text"><p>VALUE</p></div>
                    <div className="p-tiny-text"><p>ITEMS</p></div>
                    <div className="p-tiny-text"><p>FLOOR PRICE</p></div>
                    <div className="p-tiny-text"><p>SCORE</p></div>
                </div>
                {/* card component  */}
                {
                    bid.map((card)=>(
                        <PropertyCard key={card.id}/>
                    ))
                }


            </div>

        </div>
        </div>
        </>
        
    )
}
export default Properties