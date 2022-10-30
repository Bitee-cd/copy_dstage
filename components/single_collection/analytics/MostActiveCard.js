import React from 'react'
import { activities } from '../../../data/single_sellers'

function MostActiveCard() {
  return (
    <div>
        <div className="border_box2 ">
                    <div className="hidden  md:grid border-b-[1px] border-[#382162] p-4">
                        <div className="p-tiny-text"><p>MOST ACTIVE ADDRESS</p></div>
                      
                    </div>
                    {/* card component  */}
                    {
                        activities.map((card)=>(
                            <div className="grid justify-between grid-cols-5 px-4 py-2  border-b-[1px] border-b-[#382162]" key={card.id}>
                            
                            <div className=" col-span-3 flex gap-2 items-center">
                                <div className=" flex gap-2 items-center">
                                    <img src="/svg/gradient_circle.svg" alt=""/> 
                                    <p>0xdcf...ce225 </p>
                                </div>
                            </div>

                            <div className="text-sub2">
                                <p>2↑</p>
                            </div>

                            <div className="text-[#FF0000]">
                                <p>3↓</p>
                            </div>
                        </div>
                        ))
                    }
                    {/* card component  */}
                </div>
    </div>
  )
}

export default MostActiveCard