import { FaTwitter,FaDiscord } from 'react-icons/fa'
import Link from "next/link";
import { landing } from "../../../data/landing";
import SimpleSlider from "./Hero_img";

export default function Hero() {
  const data = landing
  return (
    <div>
      <div className="relative w-11/12 max-w-[1440px] my-20 mx-auto md:flex justify-between">
       

        {/* begining of left part  */}
        <div className="md:w-[45%]">
          <div className="flex gap-6">
            <div><FaTwitter size="2.5rem" color="	#1DA1F2"/></div>
            <div><FaDiscord size="2.5rem" color="#7289da"/></div>  
          </div>

          <div className="my-5">
            <p className="font-Header h1-text font-bold leading-tight md:leading-none">Own Your Stage. You Rule It. The <span className="md:text-grad2">NFT</span> and DeFi Marketplace for <span className="md:text-grad2">Web3</span></p>
          </div>

          <div className=" flex gap-x-10 md:gap-x-10">
              <Link href="/explore">
              <a className=""><button className="text-primary button bg-sub2 button-text  border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]">
               Explore
              </button>
              </a></Link>

              <Link href="/create/Nft">
              <a className="" >
                <button className=" button  border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.2)] button-text" >
                  Create
              </button>
              </a>
              </Link>
          
          </div>
      </div>
      {/* end of left part  */}

      {/* beginning of middle arrow  */}
      <div className="absolute hidden md:block top-3/4 right-2/4 w-[10%] max-w-[10rem]">
        <img src="images/arrow.svg" alt=""/>
      </div>
      {/* end of middle arrow */}

      {/* begining of right part  */}
      <div className="relative md:w-1/2 bg-glow">
          
        <div className="mx-auto md:w-[75%] mt-10">
        <div className=" gradient-1"/>
          <SimpleSlider data={data}/>
        </div>
      </div>
      {/* end of right part  */}

    </div>
   </div>
  )
}
