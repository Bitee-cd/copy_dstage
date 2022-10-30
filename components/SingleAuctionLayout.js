import Footer from "./Footer"
import Navbar from "./Navbar"
import Category_Selection from "./single_auction/CategorySelection"
import Profile from "./single_auction/Profile"


const SingleSellerLayout =({children})=>{
    return(
        <>
        <Navbar/>
        <main>
            <Profile/>
            <Category_Selection/>
            {children}
        </main>
        <Footer/>
        </>
    )
}
export default SingleSellerLayout