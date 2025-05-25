import React from 'react'

const TrendingObj = [
    {
        url:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYVcRfFB91jy3f8-_Alb6H4RUzqXFRA7ejjOfCOXF20XLRVeCyT3ZFEimKbZAimt2ayVUWXSnp6ApNxpoK0mA3XzJD__irrDkdMD6lDrOFPSvQqP8s0xn2dNBaU9JxIu4lUd.webp?r=63b&quot"
    },
    {
        url : "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUbEuw4gn448vhUbeTgwsmEsA4ZhBFHAbPyFyAk414jH72BDs0ALdA2TEDez1mRZHuyUjlpB_EL0LxkrymlRyHs2joUg2Izzl4Q.webp?r=ad2&quot;"
    },
    {
        url:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWtQdcUd4n6VKz6HTm_IbI2cOq0VDU7fDQpomIXBLuCYqtJ4j8hj2pz7j6spnX2osjRgTMJQ9xkMieYZWqC6xC8G4tGlTLJBm3I.webp?r=cc2&quot"
    },
    {
        url : "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABf4wStrKekb1hEKRFD141eOa8rGZTWJK1QxVF2zxvJDivIDqQMNDUmh_d33HVtAxToXkZlAeLEzdhxPXCskBuNsi4X_wSv2Brzk.webp?r=7de&quot"
    },
    {
        url:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWICODelnT-cKofOSQdhQLss6C_fBti54ArwGM-lgCDCuQPcFWvvy5LVqIGVRrfpZWazXC7nexAvrML9AMcHfGXHY-atDP2BFyE.webp?r=cff&quot"
    },
    {
        url : "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYVcRfFB91jy3f8-_Alb6H4RUzqXFRA7ejjOfCOXF20XLRVeCyT3ZFEimKbZAimt2ayVUWXSnp6ApNxpoK0mA3XzJD__irrDkdMD6lDrOFPSvQqP8s0xn2dNBaU9JxIu4lUd.webp?r=63b&quot"
    },
      {
        url : "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUbEuw4gn448vhUbeTgwsmEsA4ZhBFHAbPyFyAk414jH72BDs0ALdA2TEDez1mRZHuyUjlpB_EL0LxkrymlRyHs2joUg2Izzl4Q.webp?r=ad2&quot;"
    },
    {
        url:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWtQdcUd4n6VKz6HTm_IbI2cOq0VDU7fDQpomIXBLuCYqtJ4j8hj2pz7j6spnX2osjRgTMJQ9xkMieYZWqC6xC8G4tGlTLJBm3I.webp?r=cc2&quot"
    },
    {
        url : "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABf4wStrKekb1hEKRFD141eOa8rGZTWJK1QxVF2zxvJDivIDqQMNDUmh_d33HVtAxToXkZlAeLEzdhxPXCskBuNsi4X_wSv2Brzk.webp?r=7de&quot"
    },
    {
        url:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWICODelnT-cKofOSQdhQLss6C_fBti54ArwGM-lgCDCuQPcFWvvy5LVqIGVRrfpZWazXC7nexAvrML9AMcHfGXHY-atDP2BFyE.webp?r=cff&quot"
    },

]

const ReasonObj = [
    {
        heading: "Enjoy on your TV",
        description : "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
    },
    {
        heading: "Download your shows to watch offline",
        description : "Save your favorites easily and always have something to watch."
    },
    {
        heading: "Watch everywhere",
        description : "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
        heading: "Create profiles for kids",
        description : "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
    }
]

const TrendingSection = () => {
  return (
    <div className='pt-5 w-full flex flex-col gap-20 bg-black' >
      <div className='w-10/12 mx-auto flex flex-col gap-2 ' >
        <h2 className=' text-white font-bold text-2xl ' >Trending Now</h2>
        <div className='overflow-x-auto ' >

            <div className='flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 py-2 min-w-[600px] md:min-w-0' >
                {TrendingObj.map((item , index) => (
                    <div key={index} className='relative hover:scale-105 transition-all duration-300  '  >
                        <img src={item.url} alt=""  className='rounded-md' />
                        <span className='absolute left-0 bottom-4 text-white font-bold text-6xl' >{index+1}</span>
                    </div>
                ) ).slice(0,6)}
            </div>
        </div>
      </div>

      <div className='w-10/12 mx-auto flex flex-col gap-2 ' >
        <h2 className=' text-white font-bold text-2xl ' >More reasons to Join</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-white p-4 gap-3 ' >
            {ReasonObj.map((item , index) => (
                <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl lg:text-2xl font-bold text-white mb-6 leading-tight">
                            {item.heading}
                        </h2>
                        <p className="text-gray-300 text-md lg:text-md leading-relaxed mb-8">
                            {item.description}
                        </p>
                    </div>        
        
                    {/* Background gradient accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
                </div>
            ) ).slice(0,6)}
        </div>
      </div>
    </div>
  )
}

export default TrendingSection
