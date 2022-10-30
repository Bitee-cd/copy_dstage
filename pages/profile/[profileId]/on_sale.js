import OnSaleCard from "../../../components/profile/OnSaleCard"
import { landing } from "../../../data/landing"

const OnSale=()=>{
    return(
        <div className="my-10">
            
              <div className=" grid gap-3 grid-cols-2 lg:grid-cols-3">
                 {
                            landing.map((data)=>(
                                <OnSaleCard data={data} key={data.id}/>
                            ))
                        }</div>
        </div>
    )
}
export default OnSale