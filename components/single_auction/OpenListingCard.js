const OpenListingCard =({card})=>{
    return(
        <div className="p-4 grid gap-5 p-small-text my-5 md:my-0 md:grid-cols-5 rounded-[5px] md:border-b-[1px] border-[#382162] bg-background_purple">
                         {/* first */}
                         <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>Listing Price</p>
                            </div>

                            <div className="">
                                <div className="flex gap-1 items-center">
                                    <img src="/svg/ethereum.svg" alt=""/>
                                    <p>0.99</p>
                                </div>
                                <p className="text-green-500">+40.88</p>
                            </div>
                        </div>
                        {/* first */}
                        
                        {/* second */}
                        <div className="flex justify-between border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>Platform</p>
                            </div>

                            <div className="flex gap-1">
                                <div className=" items-center">
                                    <img src="/svg/opensea.svg" alt=""/>
                                </div>
                                <div className="">
                                    <p>Opensea</p>
                                    <p className="">Fee 7.50%</p>
                                </div>
                            </div>
                        </div>
                        {/* second */}


                       

                        {/* third  */}
                        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>Listed</p>
                            </div>

                            <div className=" items-center">
                                <p>17 Seconds ago</p>
                            </div>
                        </div>
                        {/* third  */}

                        {/* fourth  */}
                        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>Expires in</p>
                            </div>

                            <div className=" items-center">
                                <p>04:14:53:24</p>
                            </div>
                        </div>
                        {/* fourth  */}

                        {/* fifth  */}
                        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>Platform</p>
                            </div>

                            <div className=" text-green-600 items-center">
                                <p>Accepted</p>
                            </div>
                        </div>
                        {/* fifth  */}

                    </div>
    )
}
export default OpenListingCard