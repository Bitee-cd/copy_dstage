import CategorySelection from "../../../components/single_collection/CategorySelection"
import Profile from "../../../components/single_collection/Profile"
import Explore from "../../explore"



const Items=()=>{
    return(
        <>
        <Profile/>
        <CategorySelection/>
    <div>
        {/* dynamic section  */}
        <Explore/>
        {/* dynamic section  */}
    </div>
    </>

    )
}
export default Items