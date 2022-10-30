import { activities } from "../../../data/single_sellers"

const TopTen=({title})=>{
    return(
        <div>
        <div className="border_box2 ">
                    <div className="hidden  md:grid border-b-[1px] border-[#382162] p-4">
                        <div className="p-tiny-text"><p>TOP 10 {title}</p></div>
                      
                    </div>
                    {/* card component  */}
                    {
                        activities.map((card)=>(
                            <div className="grid justify-between grid-cols-4 px-4 py-2  border-b-[1px] border-b-[#382162]" key={card.id}>
                            
                            <div className=" col-span-3 flex gap-2 items-center">
                                <div><img src="/images/terraforms.svg" alt=""/></div>
                                <p className="font-Header font-[600]">Terraforms</p>
                                <div><img src="/svg/Verified_tick.svg" alt=""/></div>
                            </div>

                        

                            <div className="">
                                <p>269 items</p>
                            </div>
                        </div>
                        ))
                    }
                    {/* card component  */}
                </div>
    </div>
    )
}
export default TopTen