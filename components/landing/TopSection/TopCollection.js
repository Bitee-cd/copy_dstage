import Link from "next/link"
import { useEffect, useState } from "react"
import { BsStack } from 'react-icons/bs'

const TopCollection =({card})=>{
    
    const [positive,setPositive]= useState(false)
    useEffect(()=>{
       
        if (card.sign==="+"){
            setPositive(true)
        }
    },[card.sign])
    return(
        <Link href={`collections/${card.id}/items`}><a>
        <div className="small-box hover1 font-Body">  
        <div className="flex w-1/2 gap-2">  
            <img className="card_img" src={`images/collection-avatar/left/${card.svg}`} alt=""/>
            
            <div>
                <p className="h5-text">{card.name}</p>
                <p className="h6-text">{card.quantity} {card.currency}</p>
            </div>
        </div>

        <div className="w-1/2 flex justify-between h6-text">
            <div className="flex gap-1 md:gap-2 items-center">
               <BsStack/>
                <p className="">{card.floor_price}</p>
            </div>
            <div>
                <p className={positive?"text-[#00FF00]":"text-[#BE3B37]"}>{card.sign}{card.vol}</p>
            </div>
        </div>
    </div>
    </a></Link>
    )
}

export default TopCollection