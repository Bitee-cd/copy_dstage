import BannerCard from "./BannerCard"


function Banner() {
  return (

<div className="flex justify-between bg-dark_purple py-8 mx-auto">
     <BannerCard number="8000+" text="collections"/>
     <BannerCard number="21,000,000" text="Unique Monthly Visitors"/>
     <BannerCard number="$1.8 Biliion" text="Trading Volume"/>
    
</div>
  )
}

export default Banner