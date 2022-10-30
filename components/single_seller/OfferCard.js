const OfferCard=()=>{
    return(
        <div className="border_box2 px-3 py-4 grid gap-10">
            <div className="flex justify-between items-center">
                <div className="flex gap-1 md:gap-2">
                    <img src="/svg/ethereum.svg" alt=""/>
                    <p className="h5-text">2.044</p>
                </div>

                <div>
                    <p className="p-small-text text-dark_grey">30% below</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                    <img src="/images/collection-avatar/right/1.svg" className="about-svg" alt=""/>
                    <p className="h5-text">0xd2nhsw9...</p>
                </div>

                <div>
                    <p className="p-small-text text-dark_grey">11 hours left</p>
                </div>
            </div>
            
        </div>
    )
}
export default OfferCard