import Link from "next/link"
import { BsFillPatchCheckFill } from "react-icons/bs"

const AllSellersCard=({card})=>{
    return(
        <>
        <Link href={`sellers/${card.id}/activity`}><a>
        <div className="font-Body p-small-text p-4 md:flex justify-between gap-y-5 my-10 md:my-0 md:grid-cols-7 rounded-[5px] md:border-b-[1px] border-[#382162] bg-background_purple hover2 cursor-pointer">
                        {/* first  */}
                        <div className="hidden md:flex justify-between md:w-[5%] border-b-[1px] border-[#382162] md:border-0 ">
                            <div className=" md:hidden">
                                <p>Platform</p>
                            </div>

                            <div className="text-center">
                                     <p className="">{card.id}</p>
                            </div>
                        </div>
                        {/* first  */}

                        {/* second  */}
                        <div className="flex py-2 md:py-0 justify-between md:w-[27.5%]  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden item-center">
                                <p>NAME</p>
                            </div>
                            <div className=" col-span-2 flex gap-1 items-center ">
                                <div><img src="/images/terraforms.svg" alt="" className="card_img"/></div>
                                <p className="font-Header font-[600]">Terraforms</p>
                                <div><div> <BsFillPatchCheckFill  color="#0788F5"  className="verified_icon" /> </div></div>
                            </div>
                        </div>
                        {/* second  */}

                        {/* third  */}
                        <div className="flex py-2 md:py-0  justify-between md:w-[17.5%]  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>TOTAL SALE</p>
                            </div>

                            <div className="">
                                <p className="text-center">55</p>
                            </div>
                        </div>
                        {/* third  */}

                        {/* fourth  */}
                        <div className="flex justify-between py-2 md:py-0  md:w-[22%] border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>TOTAL INVESTED</p>
                            </div>

                            <div className="flex gap-1">
                                <div className="">
                                    <img src="/svg/ethereum.svg" alt=""/>
                                </div>
                                <div>
                                    <p>8.152 ETH</p>
                                    <p className="">≈ $9021</p>
                                </div>
                            </div>
                        </div>
                        {/* fourth  */}

                        {/* fifth  */}
                        <div className="flex justify-between py-2 md:py-0  md:w-[22%] border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>PORTFOLIO VALUE</p>
                            </div>

                            <div className="flex gap-1">
                                <div className="">
                                    <img src="/svg/ethereum.svg" alt=""/>
                                </div>
                                <div>
                                    <p>8.152 ETH</p>
                                    <p className="">≈ $9021</p>
                                </div>
                            </div>
                        </div>
                        {/* fifth  */}

                        {/* sixth  */}
                        <div className="flex justify-between py-2 md:py-0  md:w-[16.5%] border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>REALISED GAINS</p>
                            </div>

                            <div className="flex gap-1">
                                <div className="">
                                    <img src="/svg/ethereum.svg" alt=""/>
                                </div>
                                <div>
                                    <p>8.152 ETH</p>
                                    <p className="">≈ $9021</p>
                                </div>
                            </div>
                        </div>
                        {/* sixth  */}

                    </div>
                    </a></Link>
        </>
    )
}
export default AllSellersCard