import { useEffect, useState } from "react"
import { profiles } from "../../data/single_sellers"
import ProfilePrice from "./ProfilePrice"

const ProfileBlock=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{setData(profiles)},[])

    return(
        <div className="md:w-[60%] flex justify-between">
        <div className="w-[15%]">
            <div>
                <img src="/svg/circle_single.svg" alt=""/>
            </div>
        </div>

        <div className="w-[80%] grid gap-4">
            <div className="flex gap-12 items-center">
                <h2 className="h2-text">0x7b5...372c1</h2>
                <div><img src="/svg/copy_icon.svg" alt=""/></div>
            </div>

            <div className="flex gap-5">
                <img src="/svg/socials/discord.svg" alt=""/>
                <img src="/svg/socials/social.svg" alt=""/>
                <img src="/svg/socials/twitter.svg" alt=""/>
                <img src="/svg/socials/www.svg" alt=""/>
            </div>

            <div>
                <p className="text-p-text font-Head">
                A collection of 10,000 Bandits, Outcasts, & Misfits of the Metaverse. Ella Mae is the epicenter...<span className="text-sub2">read more</span>
                </p>
            </div>

            <div className="grid grid-cols-4">
                {
                    data && data.map((profile)=>(
                        <ProfilePrice profile={profile} key={profile.id}/>
                    ))
                }
            </div>
        </div>
    </div>
    )
}

export default ProfileBlock