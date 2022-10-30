import { useState } from 'react';
import PriceRangeSlider from './PriceRangeSlider';




const PriceFilter = (props) => {

// Our States

const [open,setOpen] = useState(false)
const [open1,setOpen1] = useState(false)
const [open2,setOpen2] = useState(false)

function cancelFilter () {
    props.setOpenFilter(false);
   }
  

return (
    
    <div className={"filter_mobile "+ (props.openFilter && "active")}>
        <div className='flex justify-between items-center'>
            <h2 className=' font-Header font-bold'>Filters</h2>
            <div className="bg-area md:hidden px-3 py-3 rounded-[5px] max-h-[50px] flex items-center" onClick={cancelFilter}>
              <img src="/images/cancel.svg" alt=""/>
          </div>
        </div>
    <div className="grid gap-5 p-text">
       
       
            <div className='grid gap-1 mt-10 md:mt-auto '>
            <p className=''>Price (ETH)</p>
           <PriceRangeSlider
            min={0}
            max={5000}
            onChange={({ min, max }) => console.log("")}
           />
            </div>
        <div >
            <div className='flex justify-between items-center'>
                <p>Category</p>
                <div onClick={()=>setOpen(!open)}>
                    <img src="/svg/arrow_right.svg" alt=""className={open ?`cursor-pointer transform rotate-90`:"cursor-pointer"}/>
                </div>
            </div>

            <div className={ open ?"grid ml-5 mt-3":"hidden"}>
                <div className="flex gap-5">
                <input type="checkbox" className="w-[20px]"/>
                <p>Collectibles</p>
                </div> 
                <div className="flex gap-5">
                <input type="checkbox" className="w-[20px]"/>
                <p>Sports</p>
                </div> 
                <div className="flex gap-5">
                <input type="checkbox" className="w-[20px]"/>
                <p>Music</p>
                </div> 
            </div>
        </div>
        <div>
            <div className='flex justify-between items-center'>
                <p>Status</p>
                <div onClick={()=>setOpen1(!open1)}><img src="/svg/arrow_right.svg" alt=""className={open1 ?`cursor-pointer transform rotate-90`:"cursor-pointer"}/></div>
            </div>

            <div className={ open1 ?"grid ml-5 mt-3":"hidden"}>
                <div className="flex gap-5">
                <input type="checkbox" className="w-[20px]"/>
                <p>Active</p>
                </div> 
                <div className="flex gap-5">
                <input type="checkbox" className="w-[20px]"/>
                <p>Inactive</p>
                </div> 
            </div>
        </div>
        <div>
            <div className='flex justify-between items-center'>
                <p>Collection</p>
                <div onClick={()=>setOpen2(!open2)}><img src="/svg/arrow_right.svg" alt=""className={open2 ?`cursor-pointer transform rotate-90`:"cursor-pointer"}/></div>
            </div>

            <div className={ open2 ?"grid ml-5 mt-3":"hidden"}>
                <div className="flex gap-5">
                <input type="checkbox" className="w-[20px]"/>
                <p>Collectibles</p>
                </div> 
                <div className="flex gap-5">
                <input type="checkbox" className="w-[20px]"/>
                <p>Sports</p>
                </div> 
                <div className="flex gap-5">
                <input type="checkbox" className="w-[20px]"/>
                <p>Music</p>
                </div> 
            </div>
        </div>
        </div>

      
    </div>
   
);
}

export default PriceFilter;
