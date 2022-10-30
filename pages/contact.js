
export default function contact() {
  return (
    <div className="mx-auto w-[90%] max-w-[1440px] ">
         {/* contact container */}
        <div className="md:flex md:justify-between  my-20  grid gap-14">

                {/* desktop left side || mobile top */}
            <div className="flex flex-col justify-between md:my-10 max-h-[780px] gap-9 md:w-[45%]">
                <div>
                    <h1 className="font-Header h2-text font-bold">Message Us!</h1>
                    <p className="p-small-text font-Body opacity-70">Fill the form and we will get back to you within 24 hours.</p>
               </div>

               <div className="grid gap-3">
                <div className="flex font-Body gap-4 items-center">
                 <img src="/svg/contact/phone.svg" alt=""/>
                 <p className="p-text">+1613-555-0169</p>
                </div>

                <div className="flex font-Body gap-4 items-center">
                 <img src="/svg/contact/discord.svg" alt=""/>
                  <p className="p-text">hello@dstage.com</p>
                 </div>

                <div className="flex font-Body gap-4 items-center">
                 <img src="/svg/contact/location.svg" alt=""/>
                 <p className="p-text">084 Kuphal Springs, Tennessee</p>
                 </div>
               </div>
             
               <div className="flex gap-4 items-center w-full">
               <div><img src="/svg/contact/twitter.svg" alt="twitter logo"/></div>
               <div><img src="/svg/contact/facebook.svg" alt="facebook logo"/></div>
               <div><img src="/svg/contact/instagram.svg" alt="instagram logo"/></div>
               <div><img src="/svg/contact/discord.svg" alt="discord logo"/></div>
               </div>
            </div>


            {/* desktop right side || mobile button */}
            
            <form className="grid py-8 px-8 bg-[#1D0F36] md:w-[45%] lg:mr-20 gap-8">
            <div/>
                <div>
                    <label className="text-create_border">Your Name</label>
                    <div className="relative flex my-2">
                    <img className="absolute my-2 mx-4" src="/svg/contact/user.svg" alt="discord logo"/>
                    <input type="text" className="w-full bg-transparent border-2 rounded-[10px] border-create_border py-2 pr-6 pl-14 outline-none "/>
                    </div>
                </div>

                <div>
                    <label className="text-create_border">Your Email</label>
                    <div className="relative flex my-2">
                    <img className="absolute my-3 mx-4" src="/svg/contact/email.svg" alt="discord logo"/>
                    <input type="email" className="w-full bg-transparent border-2 rounded-[10px] border-create_border py-2 pr-6 pl-14 outline-none "/>
                    </div>
                </div>

                <div>
                    <label className="text-create_border">Your Message</label>
                    <div className="relative flex my-2">
                    <textarea type="text" className="w-full bg-transparent border-2 rounded-[10px] border-create_border py-2 px-4 outline-none resize-none overflow-hidden h-[213px]"/>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-create_border py-3 px-8 rounded-md">Send Message</button>
                </div>

            </form>

        </div>


    </div>
  )
}
