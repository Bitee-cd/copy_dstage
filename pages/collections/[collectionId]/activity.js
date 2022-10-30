


import ActivityCard from "../../../components/single_collection/ActivityCard"
import CategorySelection from "../../../components/single_collection/CategorySelection"
import Profile from "../../../components/single_collection/Profile"
import { activities } from "../../../data/single_sellers"


const Activity =()=>{
    return(
        <div>
            <Profile/>
            <CategorySelection/>
        <div>

            <div className="mx-auto w-[90%] max-w-[1440px] my-20">
                <div className="border_box ">
                    <div className="hidden  md:grid md:grid-cols-8 border-b-[1px] border-[#382162] p-4">
                        <div className="p-tiny-text"><p>EVENT</p></div>
                        <div className="p-tiny-text col-span-2"><p>TOKEN</p></div>
                        <div className="p-tiny-text"><p>VALUE</p></div>
                        <div className="p-tiny-text col-span-3"><p>FROM/TO</p></div>
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