const EditProfile
 = ({setModal})=>{
    return(
        <div className="bg-Bid3">
        <div className='w-[90%] h-full mx-auto my-10 bg-Bid p-5 p-small-text'>
        <div className='grid gap-5 mt-5'>
            {/* top form  */}
            <div className="grid md:grid-cols-2 gap-y-2">
                <div className="relative">
                    <img 
                    className="rounded-full border-white border-[4px] opacity-30"
                    src="/images/profile/profile.svg" alt="profile"
                    />
                    <div className="absolute top-1/2 right-1/2 translate-x-[70%] md:translate-x-1/2 ">
                        <label>
                     <span className="flex gap-2"><img  src="/images/profile/camera.svg" alt=""/>EDIT</span>
                    <input  type="file" name="file"  className="sr-only" />
                 </label>
                    </div>
                </div>
                <div className="items-end flex">
                    <div className="flex justify-between rounded-lg bg-[#3D2364] px-4 w-full p-2">
                        <p>0x18240....83bb</p>
                        <div><img src="/images/profile/copyp.svg" alt="profile"/></div>
                    </div>
                 </div>
            </div>
                {/* Dosplay name  */}
                <div className='grid md:grid-cols-2 gap-y-2'>
                    <div className='items-center'>
                        <p>Display Name</p>
                        <p className="text-[10px] font-[300]">This is display name for your profile on marketplace. </p>
                    </div>
                    <div className='border border-create_border rounded-lg'>
                        <input type="email" className='px-10 py-3 rounded-lg bg-transparent outline-none'/>
                        
                    </div>
                </div>
                {/* Dosplay name  */}

                {/* Email Address  */}
                <div className='grid md:grid-cols-2 gap-y-2'>
                    <div className='flex items-center'>
                        <p>Email Address</p>
                    </div>
                    <div className='border border-create_border rounded-lg'>
                        <input type="email" className='px-10 py-3 rounded-lg bg-transparent outline-none'/>
                        
                    </div>
                </div>
                {/* Email Address  */}

                {/* Description  */}
                <div className='grid md:grid-cols-2 '>
                    <div className='flex items-center'>
                        <p>Description</p>
                    </div>
                    <div className='border border-create_border rounded-lg'>
                        <input type="message" className='px-10 py-3 rounded-lg bg-transparent outline-none'/>
                        
                    </div>
                </div>
                {/* Description  */}

            {/* top form  */}
            
            {/* start of links  */}
            
                <div>
                    <p>Links</p>
                    <p>Add your Links here to display on your profile</p>
                </div>

                {/* website link  */}
                <div className='grid md:grid-cols-2 gap-y-2'>
                    <div className='flex items-center'>
                        <p>Website Link</p>
                    </div>
                    <div className='border border-create_border rounded-lg relative'>
                        <input type="text" className='px-10 py-3 rounded-lg bg-transparent outline-none'/>
                        <div className='absolute top-1/2 -translate-y-1/2  border-r border-r-create_border h-full w-[30px] items-center justify-center flex'>
                            <img src="/images/profile/exportp.svg" alt="" className="w-[20px]"/>
                        </div>
                    </div>
                </div>
                {/* website link  */}

                {/* Instagram link  */}
                <div className='grid md:grid-cols-2 gap-y-2 '>
                    <div className='flex items-center'>
                        <p>Instagram Link</p>
                    </div>
                    <div className='border border-create_border rounded-lg relative'>
                        <input type="text" className='px-10 py-3 rounded-lg bg-transparent outline-none '/>
                        <div className='absolute top-1/2 -translate-y-1/2  border-r border-r-create_border h-full w-[30px] items-center justify-center flex'>
                            <img src="/images/profile/instagramp.svg" alt="" className="w-[20px]"/>
                        </div>
                    </div>
                </div>
                {/* Instagram link  */}

                {/* twitter link  */}
                <div className='grid md:grid-cols-2 gap-y-2'>
                    <div className='flex items-center'>
                        <p>Twitter Link</p>
                    </div>
                    <div className='border border-create_border rounded-lg relative'>
                        <input type="text" className='px-10 py-3 rounded-lg bg-transparent outline-none '/>
                        <div className='absolute top-1/2 -translate-y-1/2  border-r border-r-create_border h-full w-[30px] items-center justify-center flex'>
                            <img src="/images/profile/twitterp.svg" alt="" className="w-[20px]"/>
                        </div>
                    </div>
                </div>
                {/* twitter link  */}

                {/* discord link  */}
                <div className='grid md:grid-cols-2 gap-y-2'>
                    <div className='flex items-center'>
                        <p>discord Link</p>
                    </div>
                    <div className='border border-create_border rounded-lg relative'>
                        <input type="text" className='px-10 py-3 rounded-lg bg-transparent outline-none '/>
                        <div className='absolute top-1/2 -translate-y-1/2  border-r border-r-create_border h-full w-[30px] items-center justify-center flex'>
                            <img src="/images/profile/discord.svg" alt="" className="w-[20px]"/>
                        </div>
                    </div>
                </div>
                {/* discord link  */}

                {/* reddit link  */}
                <div className='grid md:grid-cols-2 gap-y-2'>
                    <div className='flex items-center'>
                        <p>Reddit Link</p>
                    </div>
                    <div className='border border-create_border rounded-lg relative'>
                        <input type="text" className='px-10 py-3 rounded-lg bg-transparent outline-none '/>
                        <div className='absolute top-1/2 -translate-y-1/2  border-r border-r-create_border h-full w-[30px] items-center justify-center flex'>
                            <img src="/images/profile/reddit.svg" alt="" className="w-[20px]"/>
                        </div>
                    </div>
                </div>
                {/* reddit link  */}

            </div>
            {/* end of links  */}

            {/* button group  */}
            <div className="flex my-5 gap-5 gap-y-2">
                <button onClick={()=>setModal(false)}className="ml-auto button text-sub2 border-sub2">cancel</button>
                <button className=" button bg-sub2 text-primary border-sub2">save changes</button>
            </div>
            {/* button group  */}
        </div>
    </div>
    )
}
 export default EditProfile
