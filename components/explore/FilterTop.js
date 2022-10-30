
const FilterTop =(props)=>{

     function popFilter () {
      props.setOpenFilter(true)
     }
    return(
        <div className="flex justify-between mb-10 md:flex-row-reverse">
        <div className="flex gap-2 items-center bg-area px-2 py-3 rounded-xl">
            <p className="p-small-text font-Header font-bold">Recently Listed</p>
            <div>
                <img src="/svg/arrow_down.svg" alt=""/>
            </div>
        </div>
        <div className="bg-area md:hidden px-3 py-3 rounded-[5px] max-h-[50px] flex items-center" onClick={popFilter}>
              <img src="/images/menu.svg" alt=""/>
          </div>
    </div>
    )
}
export default FilterTop