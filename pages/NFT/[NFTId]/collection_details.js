import AlsoLike from "../../../components/singleNFT/AlsoLike"
import Category_Selection from "../../../components/singleNFT/CategorySelection"
import SingleProfile from "../../../components/singleNFT/SingleProfile"

const CollectionDetails=()=>{
    return(
        <>
        <SingleProfile/>
        <Category_Selection/>
        <div className=" font-Body max-w-[1440px] w-[90%] mx-auto my-10 border_box py-5 px-2 md:px-8 grid gap-y-4 md:grid-cols-5 bg-[#1E1037]">
        {/* first  */}
        <div className="flex flex-row-reverse  justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
            <p className="p-text">200</p>
            <p className="p-small-text text-[#828282]  font-[400]">Items</p>
        </div>
        {/* first  */}

        {/* second  */}
        <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
            <div className="flex justify-center gap-2">
                <img src="/svg/ethereum.svg" alt="ethereum"/>
                <p className="p-text">12.2</p>
            </div>
            <p className="p-small-text text-[#828282]  font-[400]">Floor Price</p>
        </div>
        {/* second  */}

        {/* third */}
        <div className="flex flex-row-reverse  justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
            <p className="p-text">6.5K</p>
            <p className="p-small-text text-[#828282]  font-[400]">Holders</p>
        </div>
        {/* third  */}

        {/* fourth  */}
        <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2  border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
            <div className="flex justify-center gap-2">
                <img src="/svg/ethereum.svg" alt="ethereum"/>
                <p className="p-text">50.2</p>
            </div>
            <p className="p-small-text text-[#828282]  font-[400]">Total Volume</p>
        </div>
        {/* fourth  */}

        {/* fifth  */}
        <div className="flex flex-row-reverse  justify-between md:justify-center md:grid md:text-center">
            <div>
                <button className="button bg-sub2 border-sub2 text-primary p-small-text font-[500]">Make an Offer</button>
            </div>
        </div>
        {/* fifth  */}
    </div>
    <AlsoLike/>
    </>
    )
}
export default CollectionDetails