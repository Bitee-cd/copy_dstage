import Category_Selection from "../../../components/single_seller/Category_selection"
import Profile from "../../../components/single_seller/Profile"
import Explore from "../../explore"


const Items=()=>{
    return(
    <div>
        <Profile/>
        <Category_Selection/>
        {/* dynamic section  */}
        <Explore/>
        {/* dynamic section  */}
    </div>

    )
}
export default Items