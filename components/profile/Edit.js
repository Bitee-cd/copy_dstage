

const Edit=()=> {
  return (
    <div>
        <div className='w-[80%] h-full mx-auto my-10 bg-Bid'>
            {/* start of links  */}
            <div className='grid gap-2'>
                <div>
                    <p>Links</p>
                    <p>Add your Links here to display on your profile</p>
                </div>

                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex items-center'>
                        <p>Website Link</p>
                    </div>

                    <div className='border_box1 relative'>
                        <input type="text" className='px-10 py-3 rounded-lg'/>
                        <div className='absolute top-1/2 -translate-y-1/2 left-[5%]'>
                            <img src="/svg/socials/twitter.svg" alt="edit image"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of links  */}
        </div>
    </div>
  )
}

export default Edit