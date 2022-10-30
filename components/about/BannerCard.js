const BannerCard =({number,text})=>{
    return(
        <div className="grid gap-3 bg-dark_purple">
            <p className="text-center banner-h2 font-bold font-Header">{number}</p>
            <p className=" text-center banner-p  font-Body bg-gradient-to-r from-sub2 to-sub1 bg-clip-text text-transparent">{text}</p>
        </div>
    )
}
export default BannerCard