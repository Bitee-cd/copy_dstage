

const AuctionTitle=()=>{


    return(
       <div className="flex md:w-[70%] md:ml-auto md:my-10 font-Bold justify-between">
            <div className="hidden md:flex gap-5 md:ml-auto p-small-text">
               <p
               
               className={ "text-sub2"}>
                Live Auctions</p>
                <p 
               
                className={ "text-sub2"}>
                    Closed Auctions</p>
            </div>
            <div className="flex justify-start mb-10 md:hidden">
                    <div className="flex gap-2 items-center bg-area px-2 py-3 rounded-xl">
                    <p className="p-small-text font-Header font-[600]">Live Auctions</p>
                <div >
                    <img src="/svg/arrow_down.svg" alt=""/>
                </div>
                </div>
            </div>
            <div className="hidden md:flex gap-5 ml-auto mr-20 ">
                <div className="cursor-pointer">
                    <img src="/svg/list.svg" alt="list"/>
                </div>
                <div className="cursor-pointer">
                    <img src="/svg/grid.svg" alt="grid"/>
                </div>
            </div>
            <div className="flex justify-end mb-10">
                    <div className="flex gap-2 items-center bg-area px-2 py-3 rounded-xl">
                    <p className="p-small-text font-Header font-[600]">Recently Listed</p>
                <div >
                    <img src="/svg/arrow_down.svg" alt=""/>
                </div>
                </div>
            </div>
       </div>

    )
}
export default AuctionTitle