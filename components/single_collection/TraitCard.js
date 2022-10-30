const TraitCard=({card})=>{
    return(
        <div className="p-4 grid gap-5 font-Body p-small-text my-5 md:my-0 md:grid-cols-7 rounded-[5px] md:border-b-[1px] border-[#382162] bg-background_purple">
                        {/* first  */}
                        <div className="flex justify-between border-b-[1px] border-[#382162] md:border-0 md:col-span-2">
                            <div className="md:hidden ">
                                <p>TRAIT/RARITY</p>
                            </div>

                            <div className="grid gap-1">
                                    <p>Lumber Jack Shirt</p>
                                    <p>Clothes | Uncommon</p>
                            </div>
                        </div>
                        {/* first  */}

                       {/* second */}
                       <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>FLOOR</p>
                            </div>

                            <div className="flex gap-1">
                                <img src="/svg/ethereum.svg" alt="" className="max-w-[12px]"/>
                                <div className="grid gap-1 ">
                                    <p>0.908 ETH</p>
                                    <p className="">≈ $9021</p>
                                </div>
                                
                                
                            </div>
                        </div>
                        {/* second */}

                        {/* third  */}
                        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>AVERAGE</p>
                            </div>

                            <div className="flex gap-1">
                                <img src="/svg/ethereum.svg" alt="" className="max-w-[12px]"/>
                                <div className="grid gap-1 ">
                                    <p>0.908 ETH</p>
                                    <p className="">≈ $9021</p>
                                </div>
                                
                                
                            </div>
                        </div>
                        {/* third  */}

                          {/* fourth  */}
                          <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>VOLUME</p>
                            </div>

                            <div className="flex gap-1">
                                <img src="/svg/ethereum.svg" alt="" className="max-w-[12px]"/>
                                <div className="grid gap-1 ">
                                    <p>0.908 ETH</p>
                                    <p className="">≈ $9021</p>
                                </div>
                                
                                
                            </div>
                        </div>
                        {/* fourth  */}

                        {/* fifth  */}
                        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>SALES</p>
                            </div>

                            <div className=" items-center">
                                <p>5</p>
                                <p className="text-sub2">+300%</p>
                            </div>
                        </div>
                        {/* fifth  */}

                        {/* sixth */}
                        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>%LISTED</p>
                            </div>

                            <div className=" items-center">
                                <p>7.51% </p>
                                <p className="">16 Listed</p>
                            </div>
                        </div>
                        {/* sixth */}

                    
                    </div>
    )
}
export default TraitCard