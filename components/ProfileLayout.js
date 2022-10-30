import Footer from "./Footer"
import Navbar from "./Navbar"
import CategorySelection from "./profile/CategorySelection"
import PortfolioProfile from "./profile/PortfolioProfile"
import SelectCategory from "./profile/SelectCategory"

const Profile = ({children})=>{
    return(
    <>
    <Navbar/>
    <div>
            <div className="md:flex justify-between max-w-[1440px] w-[90%] mx-auto my-10">
                <div className="md:w-[30%]"><PortfolioProfile/>
                </div>
                <div className="md:w-[65%]">
                    <CategorySelection/>
                    <div className="my-10"><SelectCategory/></div>
                {children}
                </div>
            </div>
        </div>
    <Footer/>
    </>
    )
}
export default Profile