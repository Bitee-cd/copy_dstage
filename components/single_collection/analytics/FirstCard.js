const FirstCard=()=>{
    return(
        <div className=" font-Body max-w-[1440px] w-[90%] mx-auto my-10 border_box py-5 px-2 md:px-10 grid gap-y-4 md:grid-cols-4 bg-[#1E1037]">
        {/* first  */}
        <div className="flex flex-row-reverse  justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
            <p className="p-text">694</p>
            <p className="p-small-text text-[#828282]  font-[400]">Items Listed</p>
        </div>
        {/* first  */}

        {/* second  */}
        <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
            <p className="p-text">49</p>
            <p className="p-small-text text-[#828282]  font-[400]">Last 24hr Listed</p>
        </div>
        {/* second  */}

        {/* third */}
        <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2 border-b md:border-b-0 md:border-r border-[#382162] md:text-center">
            <p className="p-text">6467</p>
            <p className="p-small-text text-[#828282]  font-[400]">Unique Holders</p>
        </div>
        {/* third  */}

        {/* fourth  */}
        <div className="flex flex-row-reverse justify-between md:justify-center md:grid gap-2 border-b md:border-b-0  border-[#382162] md:text-center">
            <div className="flex justify-center gap-2">
                <img src="/svg/ethereum.svg" alt="ethereum"/>
                <p className="p-text">76.8</p>
            </div>
            <p className="p-small-text text-[#828282]  font-[400]">Floor Price</p>
        </div>
        {/* fourth  */}

    </div>
    )
}
export default FirstCard