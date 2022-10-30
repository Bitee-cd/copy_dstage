import Footer from "./Footer"
import Navbar from "./Navbar"
import Category_selection from "./single_seller/Category_selection"
import Profile from "./single_seller/Profile"

const SingleSellerLayout =({children})=>{
    return(
        <>
        <Navbar/>
        <main>
            <Profile/>
            <Category_selection/>
            {children}
        </main>
        <Footer/>
        </>
    )
}
export default SingleSellerLayout