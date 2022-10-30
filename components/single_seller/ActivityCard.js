import {MdCancel } from 'react-icons/md'

const ActivityCard=({card})=>{
    return(
        <div className="p-4 grid gap-5 p-small-text my-5 md:my-0 md:grid-cols-5 rounded-[5px] md:border-b-[1px] border-[#382162] bg-background_purple">
                        {/* first  */}
                        <div className="flex justify-between border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>Event</p>
                            </div>

                            <div className="items-center grid gap-1">
                                <div className="flex gap-1 ">
                                    <MdCancel color="white" size="20px"/>
                                    <p>Cancel</p>
                                </div>
                                <div className="flex gap-1 ">
                                    <img src="/svg/opensea.svg" alt=""/>
                                    <p>Opensea</p>
                                </div>
                                
                            </div>
                        </div>
                        {/* first  */}

                        {/* second  */}
                        <div className="flex justify-between md:col-span-2  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>From/To</p>
                            </div>
                            <div className=" col-span-2 md:flex gap-2 items-center">
                                <div className=" flex gap-2 items-center">
                                    <img src="/svg/gradient_circle.svg" alt="" className="w-[16px] lg:w-[30px]"/> 
                                    <p>0xdcf...ce225 </p>
                                </div>
                                <div className=" flex gap-2 items-center">
                                    <img src="/svg/long_arrow_right.svg" alt="" />
                                </div>
                                <div className=" flex gap-2 items-center">
                                    <img src="/svg/purple_circle.svg" alt="" className="w-[16px] lg:w-[30px]"/>
                                    <p>TofuSandwich</p>
                                </div>
                            </div>
                        </div>
                        {/* second  */}

                        {/* third  */}
                        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>Value</p>
                            </div>

                            <div className="flex gap-1">
                                <img src="/svg/ethereum.svg" alt="" className="w-[15px]"/>
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
                                <p>Date</p>
                            </div>

                            <div className=" items-center">
                                <p>7 hours Ago</p>
                            </div>
                        </div>
                        {/* fourth  */}

                    
                    </div>
    )
}
export default ActivityCard