const AllSellersTitle =()=>{
    return(
        <div className=" flex gap-5 justify-between">
            <div className="">
            <h2 className="font-Header h2-text font-bold">All Sellers </h2>
            </div>
    
            <div className="flex gap-2 items-center bg-area px-4  justify-center rounded-xl">
                <p className="p-small-text font-Header font-bold">By volume</p>
                <div>
                    <img src="/svg/arrow_down.svg" alt=""/>
                </div>
            </div>
           
        </div>
    )
}
export default AllSellersTitle