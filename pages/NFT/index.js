import React from 'react'
import AlsoLike from '../../components/singleNFT/AlsoLike'
import Category_Selection from '../../components/singleNFT/CategorySelection'
import NftCard from '../../components/singleNFT/NftCard'
import SingleProfile from '../../components/singleNFT/SingleProfile'
import { explore } from '../../data/explore'

function Index() {
  return (
    <>
    <SingleProfile/>
    <Category_Selection/>
    <div className="w-[90%] mx-auto max-w-[1440px]">
        <div className="flex  md:my-10 font-bold font-Body justify-center">
            <div className=" p-text">
                <p className="text-sub2 cursor-pointer">Trending NFT</p>
              
            </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {
                explore.map((data)=>(
                    <NftCard data={data} key={data.id}/>
                ))
            }
            </div>

        </div>
        <AlsoLike/>
        </>
  )
}

export default Index