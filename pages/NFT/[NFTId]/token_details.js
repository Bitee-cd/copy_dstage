import AlsoLike from "../../../components/singleNFT/AlsoLike"
import Category_Selection from "../../../components/singleNFT/CategorySelection"
import SingleProfile from "../../../components/singleNFT/SingleProfile"

const TokenDetails=()=>{
    return(
        <>
        <SingleProfile/>
        <Category_Selection/>
            <div className=" font-Body max-w-[1440px] w-[90%] mx-auto my-10 border_box py-5 px-2 md:px-8 grid gap-y-4 md:grid-cols-5 bg-[#1E1037]">
                {/* first  */}
                <div className="flex flex-row-reverse  justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
                    <p className="p-text">8194</p>
                    <p className="p-small-text text-[#828282]  font-[400]">Token Id</p>
                </div>
                {/* first  */}

                {/* second  */}
                <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
                    <div className="flex justify-center">
                        <img src="/svg/ethereum.svg" alt="ethereum"/>
                    </div>
                    <p className="p-small-text text-[#828282]  font-[400]">Blockchain</p>
                </div>
                {/* second  */}

                {/* third */}
                <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
                    <p className="p-text">ERC721</p>
                    <p className="p-small-text text-[#828282]  font-[400]">Token Standard</p>
                </div>
                {/* third  */}

                {/* fourth  */}
                <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2  border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
                    <p className="p-text">5.0%</p>
                    <p className="p-small-text text-[#828282]  font-[400]">Creator Royalties</p>
                </div>
                {/* fourth  */}

                {/* fifth  */}
                <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2 md:text-center">
                    <p className="p-text text-sub2">0x...a68b</p>
                    <p className="p-small-text text-[#828282]  font-[400]">Contract</p>
                </div>
                {/* fifth  */}
            </div>
            <AlsoLike/>
            </>
    )
}
export default TokenDetails 