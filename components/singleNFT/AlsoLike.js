
import { also_like } from "../../data/nfts"
import AlsoLikeCard from "./AlsoLikeCard"

const AlsoLike=()=>{
    return(
        <div className="mb-20 mt-32">
            <div className="w-[90%] max-w-[1440px] mx-auto ">
                <h2 className="auction_text font-[600] font-Header mb-5">You may also like</h2>
                <div className="grid gap-5 grid-cols-2 md:grid-cols-3 md:gap-[100px]">
                    {
                        also_like.map((data)=>(
                            <AlsoLikeCard data={data} key={data.id}/>
                        ))
                    }
                
                </div>

            </div>
        </div>
    )
}
export default AlsoLike