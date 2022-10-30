


export default function Create_collection_1() {

 
  return (
    <form className="mx-auto w-[90%] max-w-[1440px] my-8 font-Body">
            {/* Title  section */}
        <h1 className="h7-create font-Header font-bold my-8">Create Collection</h1>
        <p className="h8-create my-5 ">Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times</p>
             {/* Title  section */}
       
         {/* choose type section*/}
         <div className="grid my-6 gap-8 md:flex ">

           {/* choose type Card 1 */}
           <div className="md:w-[37%]">
           <input  type="radio" id="single"  className="sr-only peer" name="choose type"  defaultChecked/>
           <label for="single" className="flex flex-col items-center justify-between py-12 px-6 rounded-[8px] min-h-[334px] bg-create_card   peer-checked:border-2 border-sub2 cursor-pointer">
            <img src="/images/create/single.svg"  alt="" /> 
            <div className="flex gap-4"><p className="text-[22px] font-bold font-Header ">Stage Single </p> <img src="/images/create/question.svg"  alt=""/>  </div>
          </label>
          </div>


       
          {/* choose type Card 2 */}
       
          <div className="md:w-[37%]">
          <input  type="radio" id="multiple"  className="sr-only peer" name="choose type" />
          <label for="multiple" className="flex flex-col items-center justify-between py-12 px-6 rounded-[8px] min-h-[334px] bg-create_card  peer-checked:border-2 border-sub2 cursor-pointer">
            <img className="" src="/images/create/multiple.svg"  alt="" /> 
            <div className="flex gap-4"><p className="text-[22px] font-bold font-Header">Stage Mutiple </p> <img src="/images/create/question.svg"  alt=""/>  </div>
          </label>
          </div>
          </div>

          
          {/* end of choose type section */}
          <div className="flex justify-end my-4">
          <button className="button bg-sub2 border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]">
                <a className="link-2 h3-text text-primary" href="#">Create</a>
         </button>
         </div>

    </form>
  )
}
