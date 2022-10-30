import Category_Selection from "../../../components/single_auction/CategorySelection"
import Profile from "../../../components/single_auction/Profile"
import ActivityCard from "../../../components/single_seller/ActivityCard"
import { activities } from "../../../data/single_sellers"

const Activity =()=>{
    return(
        <div>
            <Profile/>
            <Category_Selection/>
        <div>
            <div className="mx-auto w-[90%] max-w-[1440px] my-20">
                <div className="border_box ">
                    <div className="hidden  md:grid md:grid-cols-5 border-b-[1px] border-[#382162] p-4">
                        <div className="p-tiny-text"><p>EVENT</p></div>
                        <div className="p-tiny-text col-span-2"><p>FROM/TO</p></div>
                        <div className="p-tiny-text"><p>VALUE</p></div>
                        <div className="p-tiny-text"><p>DATE</p></div>
                    </div>
                    {/* card component  */}
                    {
                        activities.map((card)=>(
                            <ActivityCard card={card} key={card.id}/>
                        ))
                    }
                    


                </div>

            </div>
        </div>
        </div>
    )
}
export default Activity