import AlsoLike from "../../../components/singleNFT/AlsoLike"
import Category_Selection from "../../../components/singleNFT/CategorySelection"
import PropertyCard from "../../../components/singleNFT/PropertyCard"
import SingleProfile from "../../../components/singleNFT/SingleProfile"
import { bid } from "../../../data/landing"


const Properties =()=>{
    return(
      <>
      <SingleProfile/>
      <Category_Selection/>
        <div className=" mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 w-[90%] mx-auto max-w-[1440px] my-10">
                    {
                      bid.map((card)=>(
                        <PropertyCard key={card.id}/>
                      ))  
                    }
                </div>
            
        </div>
        <AlsoLike/>
        </>

        
    )
}
export default Properties