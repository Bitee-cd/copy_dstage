import Banner from '../components/about/Banner'
import Team_card from '../components/about/Team_card'
import { team } from "../data/about_team"


function About() {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto">
      
        {/* background gradient */}
        <div className="gradient-3"/>

        {/* welcome section */}
        <div className="max-w-[1440px] w-[90%] mx-auto">
            <div className=" grid  gap-6 md:gap-10 text-center font-Header my-40 lg:mb-[20%] ">
                <h1 className="font-bold  h1-text">Welcome to <strong className="text-sub2 font-bold">Dstage</strong></h1>
                <p className="font-semibold  h3-text">This is who we are!</p>
                <div className=" "><a className=" text-primary font-Body font-regular" href="#"><button className='button-2'>Explore</button></a></div>
            </div>
        </div>
         {/* welcome section */} 


         {/* about  section */}
       <div className="">
        <div className="items-center my-28 md:flex-row-reverse md:flex w-full md:justify-between">
            <div className="grid gap-y-5 md:w-[62%] items-center">
                <div className="flex flex-col items-center lg:w-[35%] mx-auto  mb-10">
                    <h1 className="font-bold font-Header h2-text">Our Story</h1>
                    <div>
                        <img src="/images/about/story-arrow.svg" alt=""/>
                    </div>
                </div>  
                 <p className="font-Body p-small-text">Our community-centric company. We work hard to be responsive, close to the ground, and in service to the best interests of our collections. To prove our commitment to the community, we airdropped Magic Ticket, our own collection, to over 30,000 users.  Holding a Magic Ticket gives holders access to our discord-based DAO, MagicDAO, where we deliver interconnectivity via social programs. To prove our commitment to the community, we airdropped Magic Ticket, our own collection, to over 30,000 users.  Holding a Magic Ticket gives holders access to our discord-based DAO, MagicDAO, where we deliver interconnectivity via social programs.To prove our commitment to the community, we airdropped Magic Ticket, our own collection, to over 30,000 users. Holding a Magic Ticket gives holders access to our discord-based DAO, MagicDAO, where we deliver interconnectivity via social programs.</p> 
            </div>

            <div className="md:w-[32%] mt-4 md:mt-auto">
                    <img className='w-full' src="/images/about/OurStoryCard.svg" alt="" />
           </div>
      </div>
      </div>
        {/* about  section */}


        {/* collection  section */}
        
        <div className="relative my-20">       
          <Banner/>
        </div>
        {/* collection  section */}
        <div className="">
        {/* what we do  section */}
         <div className="flex flex-col items-center my-[20%] md:flex-row-reverse  md:justify-between lg:mb-[20%] ">
            <div className="w-[80%] ml-auto md:w-[50%] my-20 md:my-0">
                <div className='relative w-[70%] mx-auto'>
                    <div><img src="/images/about/tstory.png" alt=""/></div> 
                    <div className="w-[100%] absolute top-[35%] right-[25%] "><img  src="/images/about/bstory.png" alt=""/></div>  
                </div> 
            </div>

            <div className="md:w-[40%] flex flex-col w-full items-center mt-32 md:mt-0 ">
                <h1 className="font-bold font-Header h2-text">What we do</h1>
                <div>
                    <img src="/images/about/story-arrow.svg" alt=""/>
                </div>
                <p className="p-small-text font-Body mt-10">Our community-centric company. We work hard to be responsive, close to the ground, and in service to the best interests of our collections. To prove our commitment to the community, we airdropped Magic Ticket, our own collection, to over 30,000 users. Holding a Magic Ticket gives holders access to our discord-based DAO, MagicDAO, where we deliver interconnectivity via social programs. Holding a Magic Ticket gives holders access to our discord-based DAO, MagicDAO, where we deliver interconnectivity via social programs.Holding a Magic Ticket gives holders access to our discord-based DAO, MagicDAO, where we deliver interconnectivity via social programs.</p>
            </div>
        </div>
        {/* what we do  section */}
        
        {/* team */}
        <div className="flex flex-col items-center mt-32 my-20">
            <div className="grid w-auto">
            <h1 className="font-bold font-Header h2-text">The Core Team </h1>
            <div className="w-[35%] h-1 bg-gradient-to-r from-sub2 to-sub1 rounded-sm justify-self-end"/>
            </div>
            
            <p className=" mt-12 md:w-[80%] mx-auto p-small-text lg:p-text font-Body font-regular text-center">This is the core team of the DStage platform always working tirelessly to make the dream come true. They remain ever valuable and indispensable to the company and we celebrate them daily to show we love them. They remain ever valuable and indispensable to the company and we celebrate them daily to show we love them</p>
            <div className="md:grid-cols-3 grid justify-between gap-y-5 md:gap-y-0 gap-5 mt-10">    
                  {team.map((team)=>(
             <Team_card team={team} key={team.id}/>
            ))} 
            </div>
        </div>
        </div>
        {/* team */}

        {/* icon-sections */}
        <div className="flex justify-between items-center">
            <img src="images/about/nft-icon.svg" alt=""/>
            <img src="images/about/blockchain-icon.svg" alt=""/>
            <img src="images/about/nft-icon.svg" alt=""/>
            <img src="images/about/link-icon.svg" alt=""/>
        </div>
        {/* icon-sections */}

      </div>

  )
}

export default About