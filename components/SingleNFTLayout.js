import Footer from "./Footer"
import Navbar from "./Navbar"
import AlsoLike from "./singleNFT/AlsoLike"
import Category_Selection from "./singleNFT/CategorySelection"
import SingleProfile from "./singleNFT/SingleProfile"

const SingleNFTLayout =({children})=>{
    return(
        <>
        <Navbar/>
        <main>
            <SingleProfile/>
            <Category_Selection/>
            {children}
            <AlsoLike/>
        </main>
        <Footer/>
        </>
    )
}
export default SingleNFTLayout