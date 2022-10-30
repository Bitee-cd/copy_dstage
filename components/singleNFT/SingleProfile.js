
const SingleProfile=()=>{
    
    return(
        <div>
            <div className="w-[90%] max-w-[1440px] mx-auto md:flex my-10 justify-between ">
                <div className="md:w-[40%]">
                    <img 
                    src="/images/singleNFT/profile.svg" 
                    className="object-cover"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    alt=""/>
                </div>

                <div className="md:w-[55%] font-Header font-bold grid gap-3">
                    <div className="flex justify-between ">
                        <div className=" hidden md:grid ">
                            <div className="flex gap-3 md:gap-5 items-center">
                                <p className="p-text">Moon Walk</p>
                                <img src="/svg/Verified_tick.svg"alt="" className="w-[15px]"/>
                            </div>  
                            <p className="h2-text">#4697</p>
                        </div>
                        <div className="hidden md:grid  ">
                            <p className="p-text">Rank</p>
                            <p className="h2-text">6513</p>
                        </div>
                        <p className="p-text md:hidden mt-5">NFT Title</p>
                    </div>

                    <div className="">
                        <p className="p-small-text font-Body ">Our community-centric company. We work hard to be responsive, close to the ground, and in service to the best interests of our collections and in service to the best interests of our collectionsand in service to the best interests of our collections... <span className="text-sub2">Read more</span></p>
                    </div>

                    <div className="flex font-Body pb-2 justify-between border-b border-[#80FFDB]">
                       
                            <div className="flex w-[45%] gap-1 lg:gap-5">
                                <div>
                                    <img 
                                    src="/svg/creator.svg" 
                                    className="object-cover min-w-[20px]"
                                    alt=""/>
                                </div>
                                <div className="grid font-Body ">
                                    <p className="p-small-text text-[#828282] font-[400]">Creator</p>
                                    <p className="p-text font-[600]">0xcbe566d4h</p>
                                </div>
                            </div>

                            <div className="flex gap-1 w-[45%] lg:gap-5">
                                <div>
                                    <img
                                    src="/svg/owner.svg" 
                                    className="object-cover min-w-[20px]"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    alt=""/>
                                </div>
                                <div className="font-Body">
                                    <p className="p-small-text text-[#828282]  font-[400]">Current Owner</p>
                                    <p className="p-text font-[600]">0xcbe566d4h</p>
                                </div>
                            </div>
                       
                    </div>

                    <div className="flex font-Body justify-between md:justify-start gap-10 items-center ">
                        <div className="flex gap-2">
                            <div> <img 
                                    src="/svg/export.svg" 
                                    className="object-contain"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    alt=""/>
                            </div>
                            <p className="p-small-text text-[#828282]  font-[400]">Share</p>
                        </div>

                        <div className="flex gap-2">
                            <div> <img 
                                    src="/svg/refresh.svg" 
                                    className="object-contain"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    alt=""/>
                            </div>
                            <p className="p-small-text text-[#828282]  font-[400]">Refresh</p>
                        </div>
                    </div>

                    <div className="border_box2 grid gap-5 rounded-[12px] font-Body gradient_  p-4 w-full lg:w-[70%]  ">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="bg-Bid2 p-2 grid gap-1 rounded-xl">
                                <p className="p-small-text text-[#828282]  font-[400]">Current Owner</p>
                                <p className="p-text f-[600]">9.78 ETH</p>
                                <p className="p-small-text text-[#828282]  font-[400]">$19,065</p>
                            </div>
                            <div className="bg-Bid2 p-2 grid gap-1 rounded-xl">
                                <p className="p-small-text text-[#828282]  font-[400]">Highest Floor bid</p>
                                <p className="p-text f-[600]">19.78 ETH</p>
                                <p className="p-small-text  font-[400]"><span className="text-[#828282] ">by</span> 0xcbe56...6d4h </p>
                            </div>
                        </div>

                        <div className="flex gap-10 items-center">
                            <button className="button border-sub2 bg-sub2 text-primary">Buy now @ 19.78 ETH</button>
                            <p className="p-small-text text-sub2 text-[600]"><span className="hidden md:block">Make Offer</span><span className="md:hidden">Place a bid</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleProfile