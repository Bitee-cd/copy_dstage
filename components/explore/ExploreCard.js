import Image from "next/image"
import Link from "next/link"

const ExploreCard =({data})=>{
    return(
       <Link href={`/NFT/${data.id}/offers`} ><a> <div className="wrapper">
            <div className="">
                <Image 
                src={`/images/explore/${data.svg}`} 
                className="image_"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                priority
                 alt=""/>
            </div>

            <div className ="w-[90%] mx-auto my-5 grid gap-y-3 font-Body">
        	    <div className="flex gap-2 items-center">
                    <p className="hidden md:block p-text font-bold font-Header">{"Degodsshsdjjks"}</p>
                    <p className="md:hidden p-text font-bold font-Header">{"Degodsshsdjjks...".slice(0,6)}</p>
                    <div>
                        <img   
                        src="/images/collections/tick.svg" 
                        alt=""   
                        width="100%"
                        height="100%"
                        />
                    </div>
                </div>

        	    <div className="flex gap-2 justify-between items center">
                    <div className=" hidden md:flex gap-1 items-center">
                    <div>
                        <img src="/images/collections/tick.svg" alt=""/>
                    </div>
                    <p className=" hidden md:block p-small-text">0xdO5e42nhu</p>
                    </div>
                    <p className="p-small-text text-dark_grey">#34502</p>
                </div>

        	    <div className="flex justify-between items-center ">
                    <div className="flex align-middle items-center gap-1 md:gap-2">
                        <div>
                            <img 
                            src="/svg/ethereum.svg "
                             className=""
                              alt="" />
                        </div>
                        <p className=" font-Head p-small-text">0.908 ETH</p>
                    </div>

                    <div>
                        <p className=" bg-area text-light_purple font-Header p-1 rounded-lg font-bold p-tiny-text">
                            Rank #8765
                        </p>
                    </div>
                </div>

                <div className="flex md:gap-3 items-center font-Header p-small-text">
                    <button className="button text-primary bg-sub2 border-sub2 "><span className="hidden md:block">Buy Now</span><span className="md:hidden">Buy</span></button>
                    <button className="button border-0 text-sub2">Details</button>
                </div>

            </div>
        </div>
        </a></Link>
    )
}
export default ExploreCard