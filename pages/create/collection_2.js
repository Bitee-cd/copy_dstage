import { category } from "../../data/category"
import {useEffect, useState} from "react"


function Create_collection_2() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState();

  const [catItems, setCatItems ] = useState({
      activeCat: null,
      Items: []
    });
     
    useEffect(()=> {    
       const getCatItems = () => {
          var res = [];
          for(var i in category)
          res.push(category[i]);
          setCatItems({...catItems, Items: res });
          console.log(res);
      }
     getCatItems();
    },[catItems]);
   
    function toggleActive(index) {
      setCatItems({...catItems, activeCat: catItems.Items[index] });
    }

  return (
    
    <form className="mx-auto w-[90%] max-w-[1440px] my-8 font-Body">

    {/* Title  section */}
      <h1 className="h7-create font-Header font-bold my-8">Create Collection</h1>
      <p className="p-create my-6">This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. File types supported: JPG, PNG, SVG. Max size: 3 MB. Size recommended 1400 x 400px</p>
      
      
        {/* first_image upload section*/}
      <div className="flex flex-col border-2 border-dashed border-create_border items-center justify-between py-6 px-3 rounded-[8px] min-h-[334px] p-small-text text-center mb-6">
              <img  src="/images/create/upload.svg" alt=""/>
              <div>
              <span>DRAG OR DROP FILE</span>
              <label>
                   <span className="ml-2 text-sub2">OR UPLOAD FROM YOUR DEVICE</span>
                  <input  type="file" name="file"  className="sr-only" />
               </label>
               </div>
         </div>


              {/* second_image upload section*/}
      <div className="grid my-6 gap-10 md:flex md:justify-between">


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

 <div className="md:w-[37%]  cursor-pointer ">
           <input  type="radio" id="single"  className="sr-only peer" name="choose type"  defaultChecked/>
           <label for="single" className="flex flex-col items-center justify-between py-12 px-6 rounded-[8px] min-h-[334px] bg-create_card   peer-checked:border-2 border-sub2 cursor-pointer">
            <img src="/images/create/single.svg"  alt="" /> 
            <div className="flex gap-4"><p className="text-[22px] font-bold font-Header ">Stage Single </p> <img src="/images/create/question.svg"  alt=""/>  </div>
          </label>
          </div>


       
          {/* choose type Card 2 */}
       
          <div className="md:w-[37%]  ">
          <input  type="radio" id="multiple"  className="sr-only peer" name="choose type" />
          <label for="multiple" className="flex flex-col items-center justify-between py-12 px-6 rounded-[8px] min-h-[334px] bg-create_card  peer-checked:border-2 border-sub2 cursor-pointer">
            <img className="" src="/images/create/multiple.svg"  alt="" /> 
            <div className="flex gap-4"><p className="text-[22px] font-bold font-Header">Stage Mutiple </p> <img src="/images/create/question.svg"  alt=""/>  </div>
          </label>
          </div>

          </div>

 
     
          {/* form writeup section */}

       <div className="grid gap-6 md:flex md:justify-between md:items-center my-12">

         {/* name form writeup section */}
       <div className="flex flex-col justify-between py-6 px-6 rounded-[8px] h-[338px] bg-create_card md:w-[45%]">
        
         {/* name */}
          <div>
            <label><p className="font-Header h8-create font-bold mb-3">Collection Name*</p></label>
            <input type="text" placeholder="My first Collection" className="w-full bg-transparent border-2 rounded-[5px] h-11 border-create_border px-3 placeholder:text-white"/>
          </div>

          {/* collection */}
          <div>
            <p className="font-Header h8-create font-bold">Category*</p>
            <p className="p-small-text my-2">Place your category in the relevant category</p>
            <div className="relative">  
            <div className="px-5 flex justify-between  rounded-[5px] items-center text-[#64748B] h-11 border-2 border-create_border"><p>{(!selectedCat) ?  "Add Category" : selectedCat }</p>
            <img src="/images/drop2.svg" alt="" onClick={()=>setMenuOpen(!menuOpen)}/>
            </div>
             { menuOpen && (
                 <div className="grid gap-5 mt-4 absolute w-full bg-[#1D0F36] rounded-[5px] py-3">
                 {catItems.Items.map((item, index) => {
               return (
                    <div className="cursor-pointer w-full hover:text-sub2" key={item.id}onClick={()=> {
                      toggleActive(index); setMenuOpen(false); setSelectedCat(item.title)}}>
                      <input  type="radio" id={item.id}  className="sr-only peer" name="add_category"/>
                      <label className="cursor-pointer z-10 px-5" for={item.title}>{item.title}</label>
                    </div>
                     ) 
                    })}
                 </div>
            )}
            </div>     
            
          </div>

               {/* end of name form writeup section */}
       </div>
     
            {/* start of description form writeup section */}
       <div className=" flex flex-col gap-4 rounded-[8px] h-[338px] bg-create_card my-6 md:w-[45%] py-6 px-6">
         <label className="font-Header h8-create font-bold text-start">Description</label>
         <div className="w-full h-[80%]">
         <textarea type="text" className="w-full h-full bg-transparent resize-none border-2  border-create_border px-3 box-border rounded-[4px]"/>
         </div>
         {/* end of description form writeup section */}
       </div>
         {/* end of form writeup section */}

       </div>

             {/* start of link section*/}

       <div className="grid bg-create_card max-w-[1096px] h-[530px] rounded-[8px] px-6 py-5">
         <h1 className="text-[22px] font-bold font-header">Links</h1>
         <p className="p-create"> Add your links here to display your collection in a better way to user</p>
        
         <div className="flex justify-between items-center border-2 rounded-[4px] border-create_border px-3 p-create my-3 max-w-[871px] h-[64px]">
            <img src="/images/create/link.svg" alt=""/>
            <input placeholder="Enter your Website link" className="bg-transparent w-[95%] outline-none placeholder:text-white"/>
         </div>

         <div className="flex justify-between items-center border-2 rounded-[4px] border-create_border px-3 p-create my-3 max-w-[871px] h-[64px]">
            <img src="/images/create/instagram.svg" alt=""/>
            <input placeholder="Enter your Instagram profile link" className="bg-transparent w-[95%] outline-none"/>
         </div>

         <div className="flex justify-between items-center border-2 rounded-[4px] border-create_border px-3 p-create my-3 max-w-[871px] h-[64px]">
            <img src="/images/create/twitter.svg" alt=""/>
            <input placeholder="Enter your Twitter profile link" className="bg-transparent w-[95%] outline-none"/>
         </div>

         <div className="flex justify-between items-center border-2 rounded-[4px] border-create_border px-3 p-create my-3 max-w-[871px] h-[64px]">
            <img src="/images/create/discord.svg" alt=""/>
            <input placeholder="Enter your Discord profile link" className="bg-transparent w-[95%] outline-none"/>
         </div>

         <div className="flex justify-between items-center border-2 rounded-[4px] border-create_border px-3 p-create my-3 max-w-[871px] h-[64px]">
            <img src="/images/create/reddit.svg" alt=""/>
            <input placeholder="Enter your Reddit link" className="bg-transparent w-[95%] outline-none"/>
         </div>

          {/* end of link section*/}

       </div>
       

     
      <div className="flex justify-end my-6 gap-6">
  
            <button className="button  border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)" >
              <a className="font-Head h3-text link-2 "  href="#">Discard</a>
            </button>

            <button className="button bg-sub2 border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]">
              <a className="link-2 h3-text text-primary" href="#">Create</a>
           </button>
      </div>
   </form>
  )
}

export default Create_collection_2