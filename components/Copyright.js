import { FaTwitter,FaDiscord ,FaFacebook,FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'
const Copyright=()=>{
    return(
        <div className="" >
            <div className="flex-col font-Body mx-auto max-w-[1440px] w-[90%]">
                <div className="bg-line1 h-[.5px] "/>
                
                <div className="md:flex justify-between mt-5">
                    <div>
                    <p className="p-small-text text-center">© 2022  DStage. All rights reserved by Web3 for Web3</p>
                    </div>

                    <div className="flex gap-4 mt-4 md:mt-0 items-center justify-center ">
                        
                        <div className="" >
                        <FaTwitter size="1.3rem" color='grey'/>
                        </div>
                        <div className="">
                        <FaLinkedin size="1.3rem" color='grey'/>
                        </div>
                        <div className="">
                        <FaFacebook size="1.3rem" color="grey"/>
                        </div>
                        <div className="">
                            <FaInstagram size="1.3rem" color='grey'/>
                        </div>
                        <div className="">
                        <FaYoutube size="1.3rem" color='grey'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[10px]  bg-btn2 mt-[50px]"/>
        </div>
    )
}
export default Copyright