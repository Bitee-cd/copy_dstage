import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Copyright from './Copyright'
import { FaTwitter,FaDiscord ,FaFacebook,FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-Bid3">
      <div className=" w-[90%] max-w-[1440px] mx-auto my-20 pt-10">

      <div className="grid grid-cols-3">
          <div >
            <div className="flex items-center gap-1 md:gap-2 w-[70%] md:w-full">
              <Image 
              src="/svg/logo.svg"
               alt="Dstage logo"
               width="100%"
              height="100%"
               objectFit="contain"
              />
            </div>
            
          </div>
          <div className=" p-small-text grid gap-y-3 font-Body">
            <div className='flex gap-1'>
              <div><FaDiscord size="1.3rem"/></div>              
              <p className= "">Discord</p>
            </div>
            <div className='flex gap-1'>
              <div><FaTwitter size="1.3rem"/></div>              
              <p className= "">Twitter</p>
            </div>
            <div className='flex gap-1'>
              <div><FaFacebook size="1.3rem"/></div>              
              <p className= "">Facebook</p>
            </div>
            <div className='flex gap-1'>
              <div><FaInstagram size="1.3rem"/></div>
              <p className= "">Instagram</p>
            </div>
          </div>

          <div className=" p-small-text grid gap-y-2 font-Header font-[600]">
          <p className= "text-sub2">Quick Links</p>
          <Link href="/about"><a><p className= "">About Us</p></a></Link>
          <Link href="#"><a><p className= "">Contact</p></a></Link>
          <Link href="#"><a><p className= "">Privacy Policy</p></a></Link>
          <Link href="#"><a><p className= "">Terms of Use</p></a></Link>
          </div>
      </div> 
      </div>
      <Copyright/>
    </div>

  )
}

export default Footer