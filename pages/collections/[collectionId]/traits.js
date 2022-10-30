import CategorySelection from "../../../components/single_collection/CategorySelection"
import Profile from "../../../components/single_collection/Profile"
import TraitCard from "../../../components/single_collection/TraitCard"
import { activities } from "../../../data/single_sellers"

const Traits=()=>{
    return(
        <div>
            <Profile/>
            <CategorySelection/>
        <div>

        <div className="mx-auto w-[90%] max-w-[1440px] my-20">
            <div className="border_box ">
                <div className="hidden  md:grid md:grid-cols-7 border-b-[1px] border-[#382162] p-4 p-tiny-text">
                    <div className="md:col-span-2"><p>TRAIT/RARITY</p></div>
                    <div className=" "><p>FLOOR</p></div>
                    <div className=""><p>AVERAGE</p></div>
                    <div className=""><p>VOULUME</p></div>
                    <div className=""><p>SALES</p></div>
                    <div className=""><p>LISTED</p></div>
                </div>
        {/* card component  */}
        {
            activities.map((card)=>(
                <TraitCard card={card} key={card.id}/>
            ))
        }
        


    </div>

</div>
</div>
        </div>
    )
}
export default Traits