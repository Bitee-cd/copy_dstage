const ActivityCard=({card})=>{
    return(
        <div className="border_box2 grid gap-5 p-2 md:p-5 font-Body p-tiny-text">
        <div className="flex justify-between">
            <div className="flex gap-2">
                <img src="/svg/send_arrow.svg" alt="send"/>
                <p className=" font-[500]">Transfer</p>
            </div>
            <div>
                <p className="">2 months ago</p>
            </div>
            <div className="flex gap-5">
                <img src="/svg/export_arrow.svg" alt="export"/>
            </div>
        </div>

        <div className="flex gap-3 justify-between md:justify-start items-center">
            <div className=" flex gap-2 items-center">
                <img src="/svg/gradient_circle.svg" alt="" className="w-[30%]"/> 
                <p>0xdcf...ce225 </p>
            </div>
            <div className=" flex gap-2 items-center">
                <img src="/svg/long_arrow_right.svg" alt=""/>
            </div>
            <div className=" flex gap-2  items-center">
                <img src="/svg/purple_circle.svg" alt=""className="w-[30%]"/>
                <p>TofuSandwich</p>
            </div>
        </div>
    </div>
    )
}
export default ActivityCard