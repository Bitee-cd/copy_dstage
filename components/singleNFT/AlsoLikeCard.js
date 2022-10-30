import Link from "next/link"

const AlsoLikeCard =({data})=>{
    return(
        <>
        <Link href={`/NFT/${data.id}/offers`}><a>
        <div className="max-w-[316px]">
            <div className="">
                <img 
                src={`/images/singleNFT/also_like.svg`} 
                className="image_"
                width="100%"
                height="100%"
                layout="responsive"
                 alt=""/>
            </div>

            <div className ="w-[90%] mx-auto my-5 grid gap-y-3">
        	    <div className="flex gap-5 items-center">
                    <p className="block p-text font-bold font-Header">{"Degodsshsdjjks...".slice(0,6)}</p>
                    <div>
                        <img   
                        src="/images/collections/tick.svg" 
                        alt=""   
                       
                        />
                    </div>
                </div>

        	    <div className="flex justify-between items center font-Body">
                    <p className="h6-text text-dark_grey font-Body ">#34502</p>
                </div>

        	    <div className="flex justify-between items-center p-tiny-text">
                    <div className="flex align-middle items-center gap-1 md:gap-2">
                        <div>
                            <img 
                            src="/svg/ethereum.svg "
                             className=""
                              alt="" />
                        </div>
                        <p className=" font-Head">0.908 ETH</p>
                    </div>

                    <div>
                        <p className=" bg-area text-light_purple font-Header p-1 rounded-lg font-bold">
                            Rank #8765
                        </p>
                    </div>
                </div>

                <div className="flex gap-5 items-center font-Header">
                    <button className="button text-primary bg-sub2 border-sub2 p-small-text">buy</button>
                    <p className=" font-[600] text-sub2 p-small-text">details</p>
                </div>

            </div>
        </div>
        </a></Link>
        </>
    )
}
export default AlsoLikeCard