import { AiFillQuestionCircle } from 'react-icons/ai'
export default function CreateNft() {
  return (
    <form className="mx-auto w-[90%] max-w-[1440px] my-8 font-Body">

      {/* Title  section */}
        <h1 className="h7-create font-Header font-bold md:mt-20 mt-5">Create New Item</h1>
        <p className="text-[22px] font-Header font-bold my-3">Image, Video & 3D Modal</p>
        <p className="p-create my-6">File types supported: JPG, PNG, GIF, SVG, MP4. Max size: 100 MB</p>



                {/* image upload section*/}
        <div className="grid my-2 gap-10 md:flex md:justify-between">


                 {/* Drag and drop section*/}
                <div className="flex flex-col border-2 border-dashed border-create_border items-center justify-between py-6 px-3 rounded-[8px] min-h-[334px] p-small-text md:w-[45%] text-center ">
                    <p className="">NFT (Format: JPG, PNG, GIF, SVG. Recommended size 700 x 1300px)</p>
                    <img  src="/images/create/upload.svg" alt=""/>
                <div>
                <span>DRAG OR DROP FILE</span>
                <label>
                     <span className="ml-2 text-sub2">OR UPLOAD FROM YOUR DEVICE</span>
                    <input  type="file" name="file"  className="sr-only" />
                 </label>
                 </div>
                </div>
          

                 {/* Display 3d section*/}
            <div className="flex flex-col items-center justify-start text-center px-3 gap-6 py-6 rounded-[8px] min-h-[334px] bg-create_card p-small-text md:w-[45%]">
                <p>Preview (Your uploaded image, video, audio, or 3D model)</p>
                <img src="/images/create/uploaded.svg" alt=""/>

            </div>


            {/*End of Image Section*/}
        </div>
         

          {/* choose type section*/}

             {/* choose type title*/}
         <h1 className="text-[22px] font-Header font-bold mt-14">Choose Type</h1>
         <p className="p-create mb-3">Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times</p>
        
        {/* choose type Cards*/}
         <div className="grid my-6 gap-8 md:flex ">

           {/* choose type Card 1 */}
           <div className="md:w-[37%]">
           <input  type="radio" id="single"  className="sr-only peer" name="choose type"  defaultChecked/>
           <label for="single" className="flex flex-col items-center justify-between py-12 px-6 rounded-[8px] min-h-[334px] bg-create_card   peer-checked:border-2 border-sub2 cursor-pointer">
            <img src="/images/create/single.svg"  alt="" /> 
            <div className="flex gap-4 items-center"><p className="text-[22px] font-bold font-Header ">Stage Single </p> <AiFillQuestionCircle color="#975BE3" className='verified_icon'/>  </div>
          </label>
          </div>


       
          {/* choose type Card 2 */}
       
          <div className="md:w-[37%] ">
          <input  type="radio" id="multiple"  className="sr-only peer" name="choose type" />
          <label for="multiple" className="flex flex-col items-center justify-between py-12 px-6 rounded-[8px] min-h-[334px] bg-create_card  peer-checked:border-2 border-sub2 cursor-pointer">
            <img className="" src="/images/create/multiple.svg"  alt="" /> 
            <div className="flex gap-4 items-center"><p className="text-[22px] font-bold font-Header">Stage Mutiple </p> <AiFillQuestionCircle color="#975BE3" className='verified_icon'/>  </div>
          </label>
          </div>

          
          {/* end of choose type section */}

         </div>
   
       
            {/* form writeup section */}

         <div className="grid gap-6 md:flex md:justify-between md:items-center my-12">

           {/* name form writeup section */}
         <div className="flex flex-col justify-between py-6 px-6 rounded-[8px] h-[464px] bg-create_card md:w-[45%]">
          
           {/* name */}
            <div className='w-full '>
              <label><p className="font-Header h8-create font-bold mb-3">Name*</p></label>
              <input type="text" placeholder="test-1123" className="w-full bg-transparent border-2 rounded-[5px] h-11 border-create_border px-3"/>
            </div>

            {/* collection */}
            <div className='w-full '>
              <label><p className="font-Header h8-create font-bold">Collection*</p></label>
              <p className="p-small-text my-2">This is the collection where your item will appear.</p>
              <input type="text" placeholder="Select collection" className="w-full bg-transparent border-2 rounded-[5px] h-11 border-create_border px-3"/>
            </div>
           
            {/* royalities */}
            <div className="flex gap-4">
              <div>
              <label><p className="font-Header h8-create font-bold mb-2">Royalities*</p></label>
              <input type="text" placeholder="1" className="w-full bg-transparent border-2 rounded-[5px] h-11 border-create_border px-3"/>
              </div>
              <div>
              <label><p className="font-Header h8-create font-bold mb-2">No of Copies*</p></label>
              <input type="text" placeholder="0" className="w-full bg-transparent border-2 rounded-[5px] h-11 border-create_border px-3"/>
              </div>
            </div>

             {/* free minting */}
            <div className="flex justify-between items-center w-full">
             
              <div className=''>
              <div className="flex items-center gap-6 ">
              <p className="font-Header h8-create font-bold">Free Minting </p> 
              <AiFillQuestionCircle color="#975BE3" className='verified_icon'/>                
              </div>
              <p className="p-small-text">Buyer will pay Gas for minting:</p>
              </div>

   
                <label for="check" className="toggle_btn h-[32px] rounded-[24px] bg-create_border relative cursor-pointer flex items-center">
                  <input type="checkbox" id="check" className="sr-only peer"/>
                  <span className="absolute w-[23px] h-[23px] bg-white rounded-full left-2  lg:peer-checked:ml-[45%] peer-checked:ml-[30%] md:peer-checked:ml-[37%] transition-all duration-500" ></span>
                </label>


            </div>

                 {/* end of name form writeup section */}
         </div>
       
              {/* start of description form writeup section */}
         <div className=" flex flex-col gap-4 rounded-[8px] h-[464px] bg-create_card my-6 md:w-[45%] py-6 px-6">
           <label className="font-Header h8-create font-bold text-start">Description</label>
           <div className="w-full h-[80%]">
           <textarea type="text" className="w-full h-full bg-transparent resize-none border-2  border-create_border px-3 box-border rounded-[4px] overflow-hidden"/>
           </div>
           {/* end of description form writeup section */}
         </div>
           {/* end of form writeup section */}
         </div>

        {/* start of put on sale section */}

        <div>

          {/* title of put on sale section */}
         <div className="flex justify-between my-2">
          <h1 className="font-Header text-[22px] font-bold">Put on Sale</h1> 

          <label for="checked" className="toggle_btn h-[32px] rounded-[24px] bg-create_border relative cursor-pointer flex items-center">
                  <input type="checkbox" id="checked" className="sr-only peer"/>
                  <span className="absolute w-[23px] h-[23px] bg-white rounded-full left-2  lg:peer-checked:ml-[45%] peer-checked:ml-[30%] md:peer-checked:ml-[37%] transition-all duration-500" ></span>
            </label>
         </div>
         <p className="p-create">Choose the relevant option below to proceed with your NFT creation process</p>
        
        {/* put on sale card_section */}
         <div className="grid md:flex gap-6 my-10">
        
        {/* put on sale card_1 */}
         <div className="md:w-[37%]">
         <input  type="radio" id="fixed_price"  className="sr-only peer" name="put on sale" defaultChecked/>
         <label for="fixed_price" className="flex flex-col items-center justify-between py-8 px-6 rounded-[8px] min-h-[334px] bg-create_card   peer-checked:border-2 border-sub2 cursor-pointer">
           <img  src="/images/create/wallet.svg"  alt=""/>
           <div className="grid gap-4 text-center">
            <h1 className="font-Header text-[22px] font-bold">Fixed Price</h1>
            <p className="p-create">Enter price to allow users instantly <br/> purchase your NFT</p>
            </div>
            </label>
           </div>

        
         {/* put on sale card_2 */}
         <div className="md:w-[37%]">
          <input  type="radio" id="time_auction"  className="sr-only peer" name="put on sale" />
          <label for="time_auction" className="flex flex-col items-center justify-between py-8 px-6 rounded-[8px] min-h-[334px] bg-create_card   peer-checked:border-2 border-sub2 cursor-pointer">
           <img className="" src="/images/create/time.svg"  alt="" />
           <div className="grid gap-4 text-center">
            <h1 className="font-Header text-[22px] font-bold">Time Auction </h1>
            <p className="p-small-text">Set a period of time for which <br/> buyers can place bids</p>
           </div>
         </label>

         </div> 
         </div>
 
         {/* price Section */}
         <div>
          <h1 className="font-Header text-[22px] font-bold my-6">Price*</h1>
          <div className="flex justify-between items-center border-2 rounded-[5px] border-create_border px-3 font-Header text-[22px] font-bold my-3 max-w-[778px] h-[64px]"><input placeholder="0.013" className="bg-transparent w-[95%] outline-none"/> <p className="text-sub2">ETH</p></div>
          <p className="h8-create">Service fee <em className="text-sub2"> 2.5%</em>. You will receive <em className="text-sub2">0.975 ETH, $3,723</em></p>
         </div>

            {/* end of put on sale Section */}
         </div>

        
        
        
           {/* start of property card*/}

        <div className="flex flex-col justify-between rounded-[8px] min-h-[334px] bg-create_card max-w-[1089px] my-8">
         
          {/* properties Section */}
          <div className="flex justify-between items-center border-b-2 px-3 py-8 border-create_border_b w-full">
            <div className="flex justify-between ">
              <img src="/images/create/properties_icon.svg" alt="properties"/>
              <div className="mx-6">
              <div className="flex gap-4">
              <p className="font-Header text-[20px] font-bold">Properties</p>
              <AiFillQuestionCircle color="#975BE3" className='verified_icon'/>
              </div>
              <p className="p-small-text">Textual traits that show as text box</p>
              </div>
              </div>
              <img className=""src="/images/create/plus.svg"  alt=""/>
          </div>

           {/* Level Section */}
           <div className="flex justify-between items-center border-b-2 px-3 py-8 border-create_border_b w-full">
           <div className="flex justify-between ">
              <img src="/images/create/levels_icon.svg"  alt=""/>
              <div className="mx-6">
              <div className="flex gap-4">
              <p className="font-Header text-[20px] font-bold">Levels</p>
              <AiFillQuestionCircle color="#975BE3" className='verified_icon'/>
              </div>
              <p className="p-small-text">Numerical traits that show as progress bar</p>
              </div>
              </div>
              <img className=""src="/images/create/plus.svg"  alt=""/>
          </div>

          {/* Unlockable Section */}
          <div className="flex justify-between items-center  px-6 py-8 w-full">
          <div className="flex justify-between ">
              <img src="/images/create/unlock_icon.svg"  alt=""/>
              <div className="mx-6">
              <div className="flex gap-4">
              <p className="font-Header text-[20px] font-bold">Unlockable Content</p>
              <AiFillQuestionCircle color="#975BE3" className='verified_icon'/>
              </div>
              <p className="p-small-text">Content is only visible for NFT Owner</p>
              </div>
              </div>
              <label for="checks" className="toggle_btn h-[32px] rounded-[24px] bg-create_border relative cursor-pointer flex items-center">
                  <input type="checkbox" id="checks" className="sr-only peer"/>
                  <span className="absolute w-[23px] h-[23px] bg-white rounded-full left-2  lg:peer-checked:ml-[45%] peer-checked:ml-[30%] md:peer-checked:ml-[37%] transition-all duration-500" ></span>
            </label>
          </div>

        </div>

        <div className="flex justify-end my-6 gap-6">
    
              <button className="button  border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)" >
                <a className="font-Head h3-text link-2 "  href="#">Discard</a>
              </button>

              <button type="submit" className="button bg-sub2 border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]">
                <a className="link-2 h3-text text-primary" href="#">Create</a>
             </button>
        </div>


    </form>
  )
}
