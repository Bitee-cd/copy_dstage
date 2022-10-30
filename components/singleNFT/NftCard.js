import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NftCard({data}) {
  return (
    <div className=" wrapper">
    <Link href={`NFT/${data.id}/properties`}><a>
    <div className="">
        <Image 
        src={`/images/auctions/${data.svg}`} 
        className="object-cover"
        width="100%"
        height="100%"
        layout="responsive"
         alt=""/>
         <div className="relative mt-[-54px] h-[54px] md:mt-[-72px] md:h-[72px] w-full bg-[rgba(255,255,255,0.5)] flex items-center justify-center ">
            <p className=" text-black font-Header font-[700] auction_text">14:40:30</p>
        </div>
    </div>

    <div className ="w-[90%] mx-auto my-5 grid gap-y-3">
        <div className="flex gap-3 items-center">
            <p className="hidden lg:block p-text font-bold font-Header">{"Degodsshsdjjks..."}</p>
            <p className="lg:hidden p-text font-bold font-Header">{"Degodsshsdjjks...".slice(0,6)}</p>
            <div>
                <img   
                className="object-contain"
                src="/images/collections/tick.svg" 
                alt=""   
                width="100%"
                height="100%"
                />
            </div>
        </div>

        <div className="flex justify-between items-center">
            <div className="flex gap-1  md:gap-3">
                <img src="/images/collections/tick.svg" alt=""/>
                <p className=" p-small-text">0xdO5e42nhsw9...</p>
            </div>
           
            <p className="hidden lg:block p-h6">#34502</p>
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

        <div className="flex gap-5 items-center ">
            <button className="button capitalize text-primary p-small-text bg-sub2 border-sub2">
            <p className="lg:hidden">{"bid now".slice(0,3)}</p>
            <p className="hidden lg:block">bid now</p>
                </button>
            <p className=" text-sub2 capitalize md:mx-5 font-bold p-small-text">details</p>
        </div>

    </div>
    </a></Link> 
</div>
  )
}

export default NftCard