

const Profile=()=>{
 
    
    return(
        <div>
            <div className="w-[90%] max-w-[1440px] grid mx-auto md:flex my-10 gap-10">
                <div className="md:w-[33%]">
                    <img 
                    src="/images/singleNFT/profile.svg" 
                    className="object-cover"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    alt=""/>
                    
                    <div className="relative mt-[-54px] h-[54px] md:mt-[-72px] md:h-[72px] w-full bg-[rgba(255,255,255,0.5)] flex items-center justify-center ">
                        <p className=" text-black font-Header font-[700] auction_text">14:40:30</p>
                    </div>
                       
                </div>

                <div className="md:w-[33%] font-Bold">
                    <div className="grid gap-5 ">
                        
                        <div className=" grid ">
                            <div className="flex gap-5">
                                <p className="p-text">Moonwalk</p>
                                <img src="/svg/Verified_tick.svg"alt=""/>
                            </div>  
                            <p className="h2-text font-[700] font-Header">#4697</p>
                        </div>
                       
                        <div className="flex items-center gap-5 my-5 ">
                            <img  src="/images/collection-avatar/right/2.svg" alt="" className="w-[10%]"/>
                            <p className="p-small-text">0xdO5e42nhsw9...</p>
                        </div>
                       
                    </div>

                    <div className="flex gap-20 ">
                        <div className=" grid pr-8 border-r border-[#382162]">
                            <div className="flex gap-2">
                                <img src="/svg/ethereum.svg" alt="ethereum"/>
                                <p className="p-text">0.908</p>
                            </div>
                            
                            <p className="p-small-text text-[#BDBDBD]">Listed for</p>
                        </div>
                        <div className="grid">
                            <p className="p-text">6513</p>
                            <p className="p-small-text text-[#BDBDBD]">Rank</p>
                        </div>
                        
                    </div>

                    <div className="mt-5 mb-5">
                        <p className="p-small-text font-Body ">A collection of 10,000 Bandits, Outcasts, & Misfits of the Metaverse. Ella Mae is the epicenter... <span className="text-sub2">Read more</span></p>
                    </div>
                    <div className="flex gap-5 my-5">
                        <img src="/svg/socials/discord.svg" alt="" className="w-[24px] lg:w-[36px]"/>
                        <img src="/svg/socials/social.svg" alt="" className="w-[24px] lg:w-[36px]"/>
                        <img src="/svg/socials/twitter.svg" alt="" className="w-[24px] lg:w-[36px]"/>
                        <img src="/svg/socials/www.svg" alt="" className="w-[24px] lg:w-[36px]"/>
                    </div>

                    <div className="flex gap-10 items-center">
                            <button className="button border-sub2 bg-sub2 text-primary">Buy now</button>
                            <button className="button border-sub2  text-sub2">Place  Bid</button>
                            
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Profile