import MostActiveCard from "./MostActiveCard"
import TopTen from "./TopTen"

const SecondCard=()=>{
    return(
        <div className="max-w-[1440px] w-[90%] mx-auto grid md:grid-cols-3 gap-y-5 gap-3">
            <MostActiveCard/>
            <TopTen title="MINTERS"/>
            <TopTen title="HOLDERS"/>

        </div>
    )
}
export default SecondCard