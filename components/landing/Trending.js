import { trending } from "../../data/landing"
import Link from "next/link"



function Trending() {

  return (
  <div className=" w-[100%] truncate max-w-[1440px] mx-auto  my-2">
      {/* start of header select */}
      <div className="flex justify-center my-10 ">
        <div className="flex p-1 bg-area rounded-[12px] font-[600]">
         
          <div className="flex items-center gap-2 p-3 px-5 rounded-lg bg-[#190935] active:bg-[#190935] cursor-pointer">
            <img src="/svg/ethereum.svg" alt="ethereum logo"/>
            <p className="p-text">Ethereum</p>
          </div>
          <div className="flex items-center gap-2 p-3 px-5 rounded-lg active:bg-[#190935] cursor-pointer">
            <img src="/svg/solana.svg" alt="solana logo"/>
            <p className="p-text">Solana</p>
          </div>
        </div>
      </div>

      {/* start of header select */}
    <div className="flex-col mt-28 ">
            
      {/* start of title bar */}
      <div className=" flex  max-w-[1440px] mx-auto w-[90%] items-center  justify-between rotate-[-4deg]">

      <div className=" flex gap-[1em] items-center ">
        <p className="font-Header h2-text  font-[600]">Trending</p>
        <img className="w-[20px] md:w-full" src="images/fire.svg" alt=""/>
      </div>

      <div className="relative">

      <Link href="/explore"><a>
        <button  className="button  border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]">View all</button>
        </a></Link>
      </div>
      </div>
      {/* end of title bar */}
      {/*  */}
      {/* start of carousel  */}
      <div className="relative mt-5 h-fit rotate-[-4deg] mb-12 md:mb-24">
     
        <div className="flex animate-slide translate-x-[-100px]" >
            {
              trending.map((auction)=>(
                <Link href={`/NFT/${auction.id}/offers`} key={auction.id} ><a>
                <div className="flex-col r-width  ml-[25px]  hover:scale-110 transition-transform" >
                <img
                src={`/images/landing/section2a/${auction.img}`}
                 alt="items on auction"
                 />   
                <div className="relative mt-[-72px] h-[72px] r-width flex items-center justify-center ">
                </div>
                </div>
                </a></Link>
          ))
          }
        </div>

        <div className="flex animate-slide2 translate-x-[-500px] mt-4" >
            {
                trending.map((auction)=>(
                  <Link href={`/NFT/${auction.id}/offers`} key={auction.id}  ><a>
                <div className="flex-col r-width  ml-[25px]  hover:scale-110 transition-transform">
                <img src={`/images/landing/section2a/${auction.img}`} alt="items on auction"/>   
                <div className="relative mt-[-72px] h-[72px] r-width flex items-center justify-center ">
                </div>
                </div>
                </a>
                </Link>
          ))
          }
        </div>
      </div>  
      {/* start of carousel  */}
    </div>
 </div>
  )
}

export default Trending