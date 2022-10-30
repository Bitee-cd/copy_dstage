import LineChart from "../chart/LineChart"
import ProfileBlock from "./ProfileBlock"

const Profile=()=>{
    return(
        <div className="w-[90%] mx-auto max-w-[1440px]">
        {/* profile section  */}
            <div className="md:flex justify-between my-10">
                    <ProfileBlock/>

                <div className="md:w-[35%]">
                    <LineChart/>
                </div>
            </div>
         {/* profile section  */}
    </div>
    )
}
export default Profile