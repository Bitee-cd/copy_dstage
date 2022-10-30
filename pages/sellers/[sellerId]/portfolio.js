
import Explore from "../../explore"
import Category_Selection from "../../../components/single_seller/Category_selection"
import Profile from "../../../components/single_seller/Profile"

const Portfolio=()=>{
    return(
        <div>
             <Profile/>
            <Category_Selection/>
            <div>
                {/* dynamic section  */}
                <Explore/>
                {/* dynamic section  */}
            </div>
        </div>
    )
}

export default Portfolio