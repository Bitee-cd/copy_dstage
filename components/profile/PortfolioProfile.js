
import { useEffect,useState } from "react"

import EditProfile from "./EditProfile"

function PortfolioProfile() {
 
    const [modal,setModal]= useState(false)

  return (
    <div className=" mt-20 font-Body">
        
         
        <div className="flex gap-2 justify-end" onClick={()=>setModal(true)}>
            <div className=""><img src="/images/profile/edit_icon.svg" alt=""/></div>
            <p className="font-Body text-sub2">Edit</p>
        </div>
      
        {modal &&
        <div className="modal absolute top-[10%] bg-primary overflow-x-hidden w-[90%] lg:w-[50%] right-1/2 translate-x-1/2 ">
            <EditProfile setModal={setModal}/>
        </div>
        }
        <div className="">
            <img 
            className="rounded-full border-white border-[4px]"
            src="/images/profile/profile.svg" alt="profile"

            />
            
        </div>

        <div className="grid relative gap-7 mt-10">
        <div className="bg-profile"></div>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <p className="p-small-text">B10MECHAS</p>
                    <img src="/images/profile/purple_check.svg" alt=""/>
                </div>
             
                <div className="border-sub1 rounded-md border-2 flex gap-1 lg:gap-3 px-3 ">
                    <div className="my-2 "><img src="/images/profile/exportp.svg" alt=""/></div>
                    <div className="p-2  border-x-sub1 border-x-2 "><img src="/images/profile/instagramp.svg" alt="instagram"/></div>
                    <div className="my-2 "><img src="/images/profile/twitterp.svg" alt="twitter"/></div>
                </div>
            </div>

            <div className="flex justify-between bg-[#170B2D] px-4 py-2 rounded-2xl">
                <p>0x18240....83bb</p>
                <img src="/images/profile/copyp.svg" alt="profile"/>
            </div>
            
            {/* investment  */}
            <div className="flex justify-between">
                <div className="grid gap-2">
                    <p className="text-dark_grey">Total invested</p>

                    <div className="flex items-start gap-2 p-small-text">
                        <img src="/svg/ethereum.svg" alt=""/>
                        <div className="">
                            <p>0.908 ETH</p>
                            <p className="opacity-75">≈$45000</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-2 p-small-text">
                    <p className="text-dark_grey">Portfolio Value</p>

                    <div className="flex items-start gap-2">
                        <img src="/svg/ethereum.svg" alt=""/>
                        <div className="">
                            <p>0.908 ETH</p>
                            <p className="text-dark_grey">≈$45000</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* investment  */}

            {/* start of sales  */}
            <div className="flex justify-between p-small-text">
                <div className="grid gap-2">
                    <p className="text-dark_grey">Realised Gains</p>

                    <div className="flex items-start gap-2">
                        <img src="/svg/ethereum.svg" alt=""/>
                        <div className="">
                            <p>0.908 ETH</p>
                            <p className="opacity-75">≈$45000</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-2">
                    <p className="text-dark_grey">Total Sales</p>

                    <div className="flex items-start gap-2">
                        <img src="/svg/ethereum.svg" alt=""/>
                        <div className="">
                            <p>0.908 ETH</p>
                            <p className="text-dark_grey">≈$45000</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of sales  */}
        </div>
    </div>
  )
}

export default PortfolioProfile