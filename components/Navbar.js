import React, { useState } from 'react';
import Link from 'next/link';
import { category } from '../data/category';



function Navbar() {
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [navOpen, setNavOpen] = useState(false);


  return (
       <div className="flex w-11/12 max-w-[1440px] mx-auto my-5 items-center justify-between"> 
       {/* start of left hand side  */}
          <div className="flex items-center justify-between md:w-[14%]">
            <div className='flex items-center'>
            <Link href="/"><a>
              <img
               src="/svg/logo.svg" 
               alt="Dstage logo"
               className='nav-width'
                />
              </a></Link>
            </div>
          </div>
      {/* end of left hand side  */}



      {/* start of right hand side */}
        <div className="md:w-[86%] flex justify-between items-center gap-5 md:gap-0">

         {/* start of right search */}  
        <form className="nav_form ">
        <div className="md:w-[6%] md:h-[6%] md:ml-4"><img src="/images/search.svg"  alt="" /></div>
            <input  className="hidden absolute w-[95%]  p-tiny-text md:block bg-sub1  py-3 lg:pl-16 pl-12 pr-4 rounded-[25px]  bg-opacity-[30%] placeholder:text-[#fff]  "  type="text" placeholder="Search Collections, NFT or Seller"/>
          </form>

        {/* end of right search */}  
          

             {/* start of right list*/}  
          <div className={"right_navbar "+ (navOpen && "active")}>
          <div className="menu_list">
            <div onClick={()=> {setMenuOpen1(!menuOpen1); setMenuOpen2(false);}} className={"list_title "+ (menuOpen1 && "active")}>
              <p className="p-text font-Header font-bold">Explore</p>
              <img className="cursor-pointer"src="/images/drop.svg"  alt=""/>
            </div>

            <div className={"dropdown_menu "+ (menuOpen1 && "active")}>
              <div>
                 <Link href="/explore"><a><p>ALL NFTs</p></a></Link>
              </div>
              <div>
                 <Link href=""><a><p>Solana NFTs</p></a></Link>
              </div>
              {category.map((cat, index)=> {
                return (
                  <div key={index}>
                 <Link href=""><a><p>{cat.title}</p></a></Link>
                 </div>
                )
              })}
            </div>
          </div> 

          <div className="list_title">
            <p className="p-text font-Header font-bold">Rewards</p>
          </div>

          <div className="menu_list">
            <div className={"list_title "+ (menuOpen2 && "active")} onClick={ ()=> {setMenuOpen2(!menuOpen2); setMenuOpen1(false); }} >
              <p className="p-text font-Header font-bold">P2P </p>
              <img  className="cursor-pointer" src="/images/drop.svg" alt=""/>
            </div>
             
            <div className={"dropdown_menu "+ (menuOpen2 && "active")}>
              <div>
                 <Link href=""><a><p>Loan</p></a></Link>
              </div>
              <div>
                 <Link href=""><a><p>Trade</p></a></Link>
              </div>
            </div>
          </div> 
          </div> 

          <div className="md:ml-[5%]">
            <a className=" rounded-[5px] py-2 px-2 flex  items-center justify-center bg-sub2 hover:shadow-[0_1.5px_10px_rgba(173,255,228,0.4)] max-w-[200px]" href="#"><p className="font-Body h6-text text-sub3 text-primary hidden md:block" >Connect</p><img className="md:hidden"src="/svg/nav/wallet.svg" alt="" layout="fill"/></a>
          </div>
          <div className={"mobile_right "+ (navOpen && "active")} >
            <div className="hamburger" onClick={()=>setNavOpen(!navOpen)}><div className="bar"></div></div> 
         </div>
        
        
         </div>
         {/* mobile right hand side */}
        
           {/* end of right hand side */}
    </div>
  )
}

export default Navbar