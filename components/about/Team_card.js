import { FaTwitter,FaDiscord } from 'react-icons/fa'

const Team_card = ({team})=>{
  return ( 
    <div className=" max-w-[435px] bg-[#190935] py-5 px-5">  
    <div className="image_container w-[90%]"><img src={`/images/about/${team.img}`}alt=""/></div>
       <div>
        <div className="flex justify-between items-center mt-5">
          <h1 className="font-Header font-bold h3-text">{team.title}</h1>
          <div className="flex gap-2">
          <div><FaTwitter size="1.5rem" color="	#1DA1F2"/></div>
             <div><FaDiscord   size="1.5rem" color="#7289da"/></div>
          </div>
          </div>
          <h3 className="h4-text font-Header font-semibold mt-5">{team.job}</h3>
          <p className="mt-4 p-small-text font-Body">{team.text}</p>
    </div>
    </div>
  )
}

export default Team_card