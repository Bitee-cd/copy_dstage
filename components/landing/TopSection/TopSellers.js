import Link from "next/link"

const TopSellers =({card})=>{
    return(
        <div><Link href={`/sellers/${card.id}/offers`}><a>
    <div className="small-box hover1 flex font-Body" >
        <div className="w-[60%] flex items-center     gap-1 md:gap-2">
            <div className="">
                <img className="card_img" src={`/images/collection-avatar/right/${card.svg}`} alt=""/>
            </div>

            <div>
                <div className=""> 
                <p className="h5-text">{card.address}</p>
                <p className="h6-text">{card.no_sold} NFTs sold</p>
                </div>
            </div>

        </div>
    
        <div className="w-[40%] flex items-center justify-between">
            <div className="flex">
                <img className="w-[12px] md:w-[15px] 2xl:w-[25px]" src="images/hero-eth.svg" alt=""/>
                <p className="h6-text ml-[7px]">{card.price}{card.currency}</p>
            </div>

            <div>
                <img className="wallet_img" src="/svg/wallet.svg" alt=""/>
            </div>
        </div>
    </div>
    </a></Link></div>
    )
}
export default  TopSellers