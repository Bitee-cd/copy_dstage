import Link from 'next/link'
import React from 'react'
import CategorySelection from '../../../components/single_collection/CategorySelection'
import Profile from '../../../components/single_collection/Profile'
import Explore from '../../explore'


function Collections() {
  return (
    <>
    <Profile/>
    <CategorySelection/>
    <div>
        <div className="md:flex flex-row-reverse justify-center items-center mt-5">      
          <div className="md:flex hidden gap-4 mx-auto">
            <Link href="/single_collections/closed"><a className="text-sub2">Closed Auctions</a></Link>
            <Link href="/single_collections/live"><a className="">Live Auctions</a></Link>
          </div>    

           
           </div>
           <div>
          <Explore/>
           </div>
    </div>
    </>
  )
}

export default Collections