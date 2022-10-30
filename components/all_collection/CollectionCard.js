import Link from "next/link"
import { BsFillPatchCheckFill } from 'react-icons/bs'

const  CollectionCard =({row}) => {
  return (  
    <>
    <Link href={`collections/${row.id}/items`}><a>
      <div className="font-Body p-small-text p-4 md:flex justify-between gap-5  my-10 p- md:my-0 md:grid-cols-7 rounded-[5px] md:border-b-[1px] border-[#382162] bg-background_purple hover2 cursor-pointer">
                        
                      {/* first  */}
                        <div className="hidden md:flex justify-between md:w-[5%] border-b-[1px] border-[#382162] md:border-0 py-2 md:py-0">
                            <div className=" md:hidden">
                                <p>N0</p>
                            </div>

                            <div className="">
                                     <p className="">{row.id}</p>
                            </div>
                        </div>
                        {/* first  */}

                        {/* second  */}
                        <div className="flex py-2 md:py-0 justify-between md:w-[30%]  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden item-center">
                                <p>COLLECTION</p>
                            </div>
                            <div className=" flex gap-1 items-center">
                                <div><img src={`/images/collections/${row.profile_pic}`} alt="" className="min-w-[25px]"/></div>
                                <p className="">{row.name}</p> 
                                <div> <BsFillPatchCheckFill  color="#0788F5" className="verified_icon" /> </div>
                            </div>
                        </div>
                        {/* second  */}

                        {/* third  */}
                        <div className="flex py-2 md:py-0  justify-between text-center md:w-[20%]  border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>FLOOR</p>
                            </div>

                            <div className="">
                              <div className="flex items-center gap-5"><img src={`/images/collections/${row.svg}`} alt=""/> <p className="">{row.floor_price}</p></div>
                              <div><p className="text-profit_color text-right">{row.floor_profit}</p></div>
                            </div>
                        </div>
                        {/* third  */}

                        {/* fourth  */}
                        <div className="flex justify-between py-2 md:py-0  md:w-[20%] border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>24HR VOL</p>
                            </div>

                            <div className="">
                              <div className="flex items-center gap-5"><img src={`/images/collections/${row.svg}`} alt=""/> <p>{row.floor_price}</p></div>
                              <div><p className="text-profit_color text-right">{row.floor_profit}</p></div>
                            </div>
                        </div>
                        {/* fourth  */}

                        {/* fifth  */}
                        <div className="flex justify-between py-2 md:py-0  md:w-[20%] border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>TOTAL VOL</p>
                            </div>

                            <div className="flex gap-1">
                                <div> <img src={`/images/collections/${row.svg}`} layout="fill" alt="" /></div>
                                <p>{row.total}</p>  
                            </div>
                        </div>
                        {/* fifth  */}

                        {/* sixth  */}
                        <div className="flex justify-between py-2 md:py-0  md:w-[15%] border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>OWNERS</p>
                            </div>

                            <div className="">
                            <p>{row.owners}</p>
                            </div>
                        </div>

                        {/* seventh  */}
                        <div className="flex justify-between py-2 md:py-0  md:w-[15%] border-b-[1px] border-[#382162] md:border-0">
                            <div className="md:hidden ">
                                <p>REALISED GAINS</p>
                            </div>

                            <div className="">
                              <p>{row.released_gains}</p>
                            </div>
                        </div>
             
                   </div>
                   </a></Link>
  </>
  )
}

export default CollectionCard