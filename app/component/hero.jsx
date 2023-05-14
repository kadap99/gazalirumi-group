import {AiOutlineInstagram, AiFillFacebook, AiOutlineYoutube,} from 'react-icons/ai'
import {BsTiktok} from 'react-icons/bs'
 
function Hero() {
  return (
    <div className="h-screen bg-img bg-center bg-cover">
    <div className="flex h-full w-full bg-black/80 z-10 items-center justify-center">
        <div className=" text-white ">
            <h1 className="font-bold text-4xl">Gazali Rumi <br /> Group</h1>
            <div className="mt-5 mb-5 bg-emerald-700 inline-block px-4 py-3 rounded-xl cursor-pointer">
                Hubungi Kami
            </div>
            <h2>Atau kunjungi social media kami.</h2>

            <div className='flex py-5 gap-5 text-xl cursor-pointer'>
                  <a href="https://www.instagram.com/gazali_rumi/" target='_blank'><AiOutlineInstagram /></a> 
                  <a href="https://facebook.com" target='_blank'><AiFillFacebook /></a> 
                  <a href="https://youtube.com" target='_blank'><AiOutlineYoutube /></a> 
                  <a href="https://tiktok.com" target='_blank'><BsTiktok /></a> 
                  
                  
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero