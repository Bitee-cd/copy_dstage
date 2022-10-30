import Image from "next/image"

const CategoryCard = ({category})=>{

    return(
        <div  className="dark-shadow bg-primary px-2 py-3">
            <div className=" border-white border-solid border-4">
              <img 
              className="object-cover" 
              src={`images/category/${category.svg}`} 
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
               />
            </div>
          <div className="pt-3">
            <h1 className="button-text font-[700]  text-center font-Header">{category.title}</h1>
            <p className="p-small-text pt-3 font-Body" >{category.text}</p>
          </div>
      </div>
    )
}
export default CategoryCard