import React from 'react'
import { activity } from '../../../data/profile'

function Activity() {
  return (
    
    <div className='my-20'>
        {activity.map((data)=>(
            <div key={data.id} className="my-10">
                <div className='flex gap-5'>
                    <div><img src="/images/profile/orange_circle.svg" alt=""/></div>
                    <div className='grid gap-2 p-small-text'>
                        <p className=' font-Body'>Oct 16, 2020 at 9:12 AM</p>
                        <p className=' font-Header font-[600]'>You created new My First Test -1 NFT one day ago.</p>
                    </div>
                </div>
    
                <div className='border_box2 p-small-text rounded-[7px] grid grid-cols-3 gap-2 gap-y-3 lg:grid-cols-6 justify-between p-3 items-center my-5'>
                    
                    <div><img src="/images/profile/purple_circle.svg" alt="" className='w-[20px]'/></div>
                    <p className=' font-Body'>Abstract Moon</p>
                    <p className=' font-Header font-bold text-sub1'>0.908 ETH</p>
                    <p className=' font-Body'>Untitled collection</p>
                    <div>
                    <button className='button font-Header text-primary font-[600] bg-lighter_purple border-lighter_purple p-tiny-text'>On Sale</button>
                    </div>
                   
                    <p className=' font-Header font-bold  text-sub2'>{data.text}</p>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default Activity