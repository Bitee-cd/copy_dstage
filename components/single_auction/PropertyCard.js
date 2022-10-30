const PropertyCard =()=>{
    return(
        <div className="p-4 grid gap-5 p-small-text my-5 md:my-0 md:grid-cols-5 rounded-[5px] md:border-b-[1px] border-[#382162] bg-background_purple">
            {/* first */}
            <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
                <div className="md:hidden ">
                    <p>Trait Type</p>
                </div>

                <div className=" items-center">
                    <p>Headwears</p>
                </div>
            </div>
        {/* first */}

        {/* second  */}
        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
            <div className="md:hidden ">
                <p>Value</p>
            </div>

            <div className=" items-center">
                <p>Moon Heart</p>
            </div>
        </div>
        {/* second  */}

        

        {/* third */}
        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
            <div className="md:hidden ">
                <p>Items</p>
            </div>

            <div className=" items-center">
                <p>355</p>
            </div>
        </div>
        {/* third */}

        {/* fourth */}
        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
            <div className="md:hidden ">
                <p>Value</p>
            </div>  

            <div className="flex gap-1">
                <img src="/svg/ethereum.svg" alt=""/>
                <div className="grid gap-1 ">
                    <p>0.908 ETH</p>
                    <p className="">≈ $9021</p>
                </div>
            </div>
        </div>
        {/* fourth */}


        {/* fifth  */}
        <div className="flex justify-between  border-b-[1px] border-[#382162] md:border-0">
            <div className="md:hidden ">
                <p>Score</p>
            </div>

            <div className=" text-[#14CC86] items-center">
                <p>+40.88%</p>
            </div>
        </div>
        {/* fifth  */}

    </div>
    )
}
export default PropertyCard