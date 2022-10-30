import Link from "next/link"
import { useState } from "react"
import { category } from "../../../data/category"
import { category_few } from "../../../data/landing"


import CategoryCard from "./CategoryCard"



function Category() {
const [data,setData]=useState(category_few)
const updateList=()=>{
  setData(category)
}

  return (
    <div >
      <div className="flex-col mx-auto w-[90%] max-w-[1440px] my-10 md:my-20">
              <p className="h2-text text-center font-[700] font-Header">Browse by category</p>
          <div className="md:grid-cols-3 grid justify-between gap-y-5 md:gap-y-0 gap-5 mt-10">
            {data.map((category)=>(
              <CategoryCard category={category} key={category.id} /> 
            ))}   
          </div>
          <div className=" text-center my-[100px] hidden md:block">
           
            <a className="font-Head p-text link-2" >
                <button onClick={()=>updateList()} className="button  border-sub2 hover:shadow-[0_3px_10px_rgba(173,255,228,0.4)]" >
                  All Categories
                </button>
                </a>
           
          </div>
      </div>
    </div>
  )
}

export default Category