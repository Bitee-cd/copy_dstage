const ProfilePrice =({profile})=>{
    return(
        <div  className="grid gap-y-3 font-Body">
            <div className="flex gap-2">
                <div>
                    <img src="/svg/ethereum.svg" alt=""/>
                </div>

                <div>
                    <p className=" md:font-Body font-Header font-[600] h5-text">2.044</p>
                    <div>
                        <p className="p-small-text text-light_ash">$9021</p>
                    </div>
                </div>
            </div>

            <p className="p-small-text">Floor Price</p>
        </div>
    )
}
export default ProfilePrice