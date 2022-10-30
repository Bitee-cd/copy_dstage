import OnSaleCard from "../../../components/profile/OnSaleCard"
import SelectCategory from "../../../components/profile/SelectCategory"
import { landing } from "../../../data/landing"

const Portfolio=()=>{
    return(
        <div className="my-20">
          <div className=" grid gap-3 grid-cols-2 lg:grid-cols-3">
             {
                        landing.map((data)=>(
                            <OnSaleCard data={data} key={data.id}/>
                        ))
                    }</div>
    </div>
    )
}
export default Portfolio