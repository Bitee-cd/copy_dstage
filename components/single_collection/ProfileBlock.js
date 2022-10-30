
import { useEffect, useState } from "react"
import { profiles } from "../../data/single_sellers"
import ProfilePrice from "../single_seller/ProfilePrice"


const ProfileBlock=()=>{
    const [data,setData]=useState([])
    
    useEffect(()=>{setData(profiles)},[])

    return(
        <div className="md:w-[60%] flex justify-between">
        <div className="w-[15%]">
            <div>
                <img src="/images/single_collections/profile.svg" alt=""/>
            </div>
        </div>

        <div className="w-[80%] grid gap-4">
            <div className="flex gap-2 items-center">
                <p className="h2_5-text font-Header md:font-Body font-[600]">Bored Ape Yacht Club</p>
                <div><img src="/svg/Verified_tick.svg" alt=""/></div>
            </div>
            <div className="grid grid-cols-4">
                {
                    data && data.map((profile)=>(
                        <ProfilePrice profile={profile} key={profile.id}/>
                    ))
                }
            </div>
            
            <div>
                <p className="p-small-text font-Head">
                A collection of 10,000 Bandits, Outcasts, & Misfits of the Metaverse. Ella Mae is the epicenter...<span className="text-sub2">read more</span>
                </p>
            </div>
            <div className="grid gap-3 lg:flex">
                <div className="flex gap-5">
                    <img src="/svg/socials/discord.svg" alt=""/>
                    <img src="/svg/socials/social.svg" alt=""/>
                    <img src="/svg/socials/twitter.svg" alt=""/>
                    <img src="/svg/socials/www.svg" alt=""/>
                </div>
                <button className="ml-auto button bg-sub2 text-primary border-sub2">Make offer</button>
            </div>
        </div>
    </div>
    )
}

export default ProfileBlock