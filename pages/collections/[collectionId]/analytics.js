
import ListingLineChart from "../../../components/chart/ListingLineChart"
import PricesScatterChart from "../../../components/chart/PricesScatterChart"
import RarityDistribution from "../../../components/chart/RarityDistribution"
import SalesMixedChart from "../../../components/chart/SalesMixedChart"
import VolumeMixedChart from "../../../components/chart/VolumeMixedChart"
import FirstCard from "../../../components/single_collection/analytics/FirstCard"
import SecondCard from "../../../components/single_collection/analytics/SecondCards"
import CategorySelection from "../../../components/single_collection/CategorySelection"
import Profile from "../../../components/single_collection/Profile"

const Analytics=()=>{
    return(
        <div>
            <Profile/>
            <CategorySelection/>
            <FirstCard/>
           <VolumeMixedChart/>
           <SalesMixedChart/>
            <SecondCard/>
            <PricesScatterChart/>
            <ListingLineChart/>
            <RarityDistribution/>
           
            
        </div>
    )
}
export default Analytics