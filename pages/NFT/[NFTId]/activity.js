import AlsoLike from "../../../components/singleNFT/AlsoLike"
import Category_Selection from "../../../components/singleNFT/CategorySelection"
import SingleProfile from "../../../components/singleNFT/SingleProfile"
import ActivityCard from ".././../../components/singleNFT/ActivityCard"
import { activities } from ".././../../data/single_sellers"

const SingleActivity=()=>{
    return(
        <>
        <SingleProfile/>
        <Category_Selection/>
        <div className="w-[90%] max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-3 gap-5 my-10">

            {
                 activities.map((card)=>(
                            <ActivityCard card={card} key={card.id}/>
                        ))
            }
                    

            </div>
        </div>
        <AlsoLike/>
        </>
    )
}
export default SingleActivity