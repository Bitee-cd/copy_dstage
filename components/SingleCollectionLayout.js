import Footer from "./Footer"
import Navbar from "./Navbar"
import CategorySelection from "./single_collection/CategorySelection"
import Profile from "./single_collection/Profile"

const SingleCollectionLayout =({children})=>{
    return(
        <>
        <Navbar/>
        <main>
            <Profile/>
            <CategorySelection/>
            {children}
        </main>
        <Footer/>
        </>
    )
}
export default SingleCollectionLayout