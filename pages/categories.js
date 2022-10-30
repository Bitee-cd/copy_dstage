import CategoryCard from "../components/landing/Category/CategoryCard"
import { category } from "../data/category"


const Category=()=>{
    return(
    <div className="w-[90%] max-w-[1440px] mx-auto my-10">
        <div>
            <div className="flex justify-between md:justify-end">
                <div className="flex md:justify-end mb-10">
                    <div className="flex gap-2 items-center bg-area px-2 py-3 rounded-xl">
                        <p className="p-small-text font-Header font-bold">All Categories</p>
                        <div>
                            <img src="/svg/arrow_down.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="md:hidden bg-area px-2 py-3 rounded-xl items-center mb-10">
                    <img src="/svg/3_lines.svg" alt=""/>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {
            category.map((category)=>(
                <CategoryCard category={category} key={category.id}/>
            ))
        }
        </div>
    </div>

    )
}
export default Category