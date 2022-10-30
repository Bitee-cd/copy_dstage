const PropertyCard=()=>{
    return(
    <div className="border_box2 font-Body px-3 py-4 grid gap-3">
        <div>
            <p className="text-sub2 p-text">Beak</p>
        </div>
        <div className="flex justify-between items-center">
            <div>
                <p className="h4-text">Short</p>
            </div>

            <div className="flex gap-1 md:gap-2">
                <img src="/svg/ethereum.svg" alt=""/>
                <p className="p-small-text">0.908 ETH</p>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
                <p className="h5-text">1,656 (16.56%)</p>
            </div>

            <div>
                <p className="p-small-text font-Header font-[600] text-sub2">Make Offer</p>
            </div>
        </div>
        
    </div>
    )
}
export default  PropertyCard