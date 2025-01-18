import suratClutch from './imageMurodbek/image (36).png'
import suratLogoClient from './imageMurodbek/client-logo.png'
import suratLogo2 from './imageMurodbek/client-logo (1).png'
import suratLogo3 from './imageMurodbek/client-logo (2).png'
import suratLogo4 from './imageMurodbek/client-logo (3).png'
import suratLogo5 from './imageMurodbek/client-logo (4).png'
import suratLogo6 from './imageMurodbek/client-logo (5).png'
import suratKamanda from './imageMurodbek/image (37).png'
import suratPratsent1 from './imageMurodbek/figure.png'
import suratPratsent2 from './imageMurodbek/figure (1).png'
import suratPratsent3 from './imageMurodbek/figure (2).png'
import suratPratsent4 from './imageMurodbek/figure (3).png'
import Table from './imageMurodbek/illustration (2).png'
import ImageOfPerson from './imageMurodbek/illustration (3).png'
import suratElon from './imageMurodbek/ic-target.png'
import suratDukhtar from './imageMurodbek/illustration (4).png'
import surat5 from './imageMurodbek/image (38).png'
import "./home.css/home.css"
import surat6 from './imageMurodbek/play-video.png'
import suratHeader from './imageMurodbek/illustration (5).png'
import Card1 from './card1/card1'
import Card2 from './card2/card2'
import Card3 from './card3/card3'
const Main = () => {
  return (
    <div className="max-w-[1250px] mx-auto ">
      <div className=' divHeader  w-[100%] h-[700px] flex justify-evenly items-center'>
        <div className='w-[40%]  text-[white]'>
          <h1 className='text-[40px] text-[white] '>Best <span className='text-[#7772F1]' > SEO & Marketing </span> Solutions for You</h1>
          <div className='w-[90%] flex items-center gap-[10px]'>
            <button className='border w-[200px] h-[40px] mt-[5px] rounded-lg'>Get a free analysis</button>
            <div>
              <img src={surat6} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img className='w-[500px]' src={suratHeader} alt="" />
        </div>
      </div>
      <div className="w-[90%] m-auto flex justify-center gap-[20px] mt-[100px]">
        <div className="w-[35%]">
          <h1 className="text-[20px]">Createx SEO Agency not is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</h1>
        </div>
        <div className='w-[50%] flex flex-wrap gap-[10px]'>
          <div className='w-[230px]  flex items-center'>
            <div className=''>
              <img src={suratClutch} alt="" />
            </div>
            <h1>Top SEO Companies 2020  by Clutch</h1>
          </div>
          <div className='w-[230px]  flex items-center  '>
            <div className=''>
              <img src={suratClutch} alt="" />
            </div>
            <h1 >Top SEO Companies 2020  by Clutch</h1>
          </div>
          <div className='w-[230px]  flex items-center  '>
            <div className=''>
              <img src={suratClutch} alt="" />
            </div>
            <h1 >Top SEO Companies 2020  by Clutch</h1>
          </div>
          <div className='w-[230px]  flex items-center  '>
            <div className=''>
              <img src={suratClutch} alt="" />
            </div>
            <h1 >Top SEO Companies 2020  by Clutch</h1>
          </div>
        </div>
      </div>

      <div className='w-[90%] m-auto flex justify-evenly mt-[60px]'>
        <div>
          <img src={suratLogoClient} alt="" />
        </div>
        <div>
          <img src={suratLogo2} alt="" />
        </div>
        <div>
          <img src={suratLogo3} alt="" />
        </div>
        <div>
          <img src={suratLogo4} alt="" />
        </div>
        <div>
          <img src={suratLogo5} alt="" />
        </div>
        <div>
          <img src={suratLogo6} alt="" />
        </div>
      </div>

      <div className='w-[90%] m-auto mt-[60px] flex justify-center gap-[20px]'>
        <div className='w-[30%]'>
          <h1 className='text-[40px]'>Createx Agency </h1>
          <p className='mt-[10px]'>Lacus acmollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
          <button className='w-[120px] h-[40px] rounded-lg bg-[#7772F1] mt-[10px] text-white'>More about us</button>
        </div>
        <div>
          <img className='w-[500px]' src={suratKamanda} alt="" />
        </div>
      </div>

      <div className='w-[90%] m-auto flex justify-evenly mt-[70px]'>
        <div>
          <img src={suratPratsent1} alt="" />
        </div>
        <div>
          <img src={suratPratsent2} alt="" />
        </div>
        <div>
          <img src={suratPratsent3} alt="" />
        </div>
        <div>
          <img src={suratPratsent4} alt="" />
        </div>
      </div>

      <h1 className='text-[40px] font-bold text-center mt-[60px] '>Our services</h1>

      <div className='w-[90%] m-auto flex justify-between mt-[50px]'>
        <h1 className='p-[5px] border-2 w-[160px] text-center'>Social Media</h1>
        <h1 className='p-[5px] border-2 w-[160px] text-center'>SEO</h1>
        <h1 className='p-[5px] border-2 w-[160px] text-center'>Research</h1>
        <h1 className='p-[5px] border-2 w-[160px] text-center'>Payed Traffic</h1>
      </div>

      <div className='w-[90%] m-auto mt-[70px] p-[10px] flex justify-evenly'>
        <div className='w-[40%]'>
          <h1 className='text-[30px]'>Complete Worflow For Any SEO Professional</h1>
          <h1 className='text-[blue] mt-[20px] text-[17px]'>Aenean enim tellus morbi nisl vulputate dictumst.</h1>
          <h1 className='text-[blue] mt-[10px] text-[17px]'>Nibh sapien volutpat lacus augue.</h1>
          <h1 className='text-[blue] mt-[10px] text-[17px]'>Vel in amet, placerat adipiscing est pharetra.</h1>
          <h1 className='text-[blue] mt-[10px] text-[17px]'>Gravida ornare sit in et ut sit sem id.</h1>
          <h1 className='text-[blue] mt-[10px] text-[17px]'>Ultrices pellentesque dictum enim egestas ac diam.</h1>
          <h1 className='text-[blue] mt-[10px] text-[17px]'>Sit semper enim senectus integer ut turpis et.</h1>
          <div className='w-[100%] m-auto mt-[30px] flex justify-between'>
            <button className='w-[120px] h-[40px] text-[17px] rounded-lg border-2 border-[blue] text-[blue]'>Learn more</button>
            <button className='w-[120px] h-[40px] text-[17px] rounded-lg border-2 border-[blue] text-white bg-[blue]'>Try SEO toolkit</button>
          </div>
        </div>
        <div>
          <img src={Table} alt="" />
        </div>
      </div>

      <Card1/>

      <div className='w-[90%] m-auto mt-[80px] flex justify-evenly'>
        <div className='w-[50%]'>
          <h1 className='text-[30px]'>Freequently Ask Questions</h1>
          <h1><span className='text-[20px] text-[blue]'>-</span><span className='text-[20px] ml-[5px] text-[blue]'>Aliquet lectus urna viverra in odio?</span></h1>
          <h1 className='mt-[10px]  text-[grey]'>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</h1>
          <h1 className='mt-[10px]'><span className='text-[20px] text-[blue]'>+</span><span className='text-[20px] ml-[5px] text-[blue]'>Orci commodo, viverra orci mollis ut euismod?</span></h1>
          <h1 className='mt-[10px]'><span className='text-[20px] text-[blue]'>+</span><span className='text-[20px] ml-[5px] text-[blue]'>Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</span></h1>
          <h1 className='mt-[10px]'><span className='text-[20px] text-[blue]'>+</span><span className='text-[20px] ml-[5px] text-[blue]'>In id dolor quis nunc, urna hendrerit pharetra?</span></h1>
          <button className='mt-[40px] h-[40px] bg-[#7772F1] w-[150px] rounded-lg text-[white]'>Discover more</button>
        </div>
        <div>
          <img src={ImageOfPerson} alt="" />
        </div>
      </div>
      <Card2/>
      <h1 className='text-[40px] text-center mt-[50px]'>Our benefits</h1>
      <div className='w-[90%] m-auto flex justify-evenly mt-[50px]'>
        <div className='w-[30%] '>
          <div className='w-[90%] border flex flex-col items-center text-center gap-[10px] p-[5px]'>
            <div>
              <img src={suratElon} alt="" />
            </div>
            <h1 className='text-[20px] font-bold'>Social Advertising Experts</h1>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </div>
          <div className='w-[90%] border flex flex-col items-center text-center gap-[10px] p-[5px] mt-[10px] h-[180px]'>
            <div>
              <img src={suratElon} alt="" />
            </div>
          </div>
          <div className='w-[90%] border flex flex-col items-center text-center gap-[10px] p-[5px] mt-[10px] h-[180px]'>
            <div>
              <img src={suratElon} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={suratDukhtar} alt="" />
        </div>
        <div className='w-[30%] '>
          <div className='w-[90%] border flex flex-col items-center text-center gap-[10px] p-[5px] h-[180px]'>
            <div>
              <img src={suratElon} alt="" />
            </div>

          </div>
          <div className='w-[90%] border flex flex-col items-center text-center gap-[10px] p-[5px] mt-[10px] h-[180px]'>
            <div>
              <img src={suratElon} alt="" />
            </div>
          </div>
          <div className='w-[90%] border flex flex-col items-center text-center gap-[10px] p-[5px] mt-[10px] h-[180px]'>
            <div>
              <img src={suratElon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-[30px] text-center mt-[60px]'>Flexible pricing plans</h1>
      <div className='w-[30%] m-auto mt-[50px] flex items-center rounded-xl'>
        <h1><p className='p-[10px] w-[150px] text-center  bg-[blue] border-2 border-[blue] text-[white]'>Monthly</p></h1>
        <h1><p className='p-[10px] w-[150px] text-center border-2 border-[blue]'>Yearly -12% Off</p></h1>
      </div>
      <div className='w-[90%] m-auto mt-[70px] flex  justify-evenly flex-wrap items-center'>
        <div className='w-[330px] flex flex-col items-center shadow-2xl p-[5px] rounded-lg'>
          <h1 className='text-[25px] font-bold'>Basic</h1>
          <p className='text-[30px] text-[blue]'>$24/mon</p>
          <hr className='w-[90%] m-auto mt-[20px]' />
          <div>
            <h1 className='text-[16px] mt-[20px]'>Advanced Analytics</h1>
            <h1 className='text-[16px] mt-[20px]'>Change Management</h1>
            <h1 className='text-[16px] mt-[20px]'>Corporate Finance</h1>
            <h1 className='text-[16px] mt-[20px]'>One Way Link Building</h1>
            <h1 className='text-[16px] mt-[20px]'>Social Media Marketing</h1>
            <h1 className='text-[16px] mt-[20px]'>Strategy & Marketing</h1>
            <h1 className='text-[16px] mt-[20px]'>Information Technology</h1>
          </div>
          <button className='w-[120px] h-[40px] border mt-[40px] text-[blue]'>Choose plan</button>
        </div>
        <div className='w-[330px] flex flex-col bg-[#1E212C] text-[white] items-center shadow-2xl p-[5px] rounded-lg'>
          <h1 className='text-[25px] font-bold'>Basic</h1>
          <p className='text-[30px] text-[blue]'>$24/mon</p>
          <hr className='w-[90%] m-auto mt-[20px]' />
          <div>
            <h1 className='text-[16px] mt-[20px]'>Advanced Analytics</h1>
            <h1 className='text-[16px] mt-[20px]'>Change Management</h1>
            <h1 className='text-[16px] mt-[20px]'>Corporate Finance</h1>
            <h1 className='text-[16px] mt-[20px]'>One Way Link Building</h1>
            <h1 className='text-[16px] mt-[20px]'>Social Media Marketing</h1>
            <h1 className='text-[16px] mt-[20px]'>Strategy & Marketing</h1>
            <h1 className='text-[16px] mt-[20px]'>Information Technology</h1>
          </div>
          <button className='w-[120px] h-[40px] border mt-[40px] text-[white] bg-[blue] rounded-xl'>Choose plan</button>
        </div>
        <div className='w-[330px] flex flex-col items-center shadow-2xl p-[5px] rounded-lg'>
          <h1 className='text-[25px] font-bold'>Basic</h1>
          <p className='text-[30px] text-[blue]'>$24/mon</p>
          <hr className='w-[90%] m-auto mt-[20px]' />
          <div>
            <h1 className='text-[16px] mt-[20px]'>Advanced Analytics</h1>
            <h1 className='text-[16px] mt-[20px]'>Change Management</h1>
            <h1 className='text-[16px] mt-[20px]'>Corporate Finance</h1>
            <h1 className='text-[16px] mt-[20px]'>One Way Link Building</h1>
            <h1 className='text-[16px] mt-[20px]'>Social Media Marketing</h1>
            <h1 className='text-[16px] mt-[20px]'>Strategy & Marketing</h1>
            <h1 className='text-[16px] mt-[20px]'>Information Technology</h1>
          </div>
          <button className='w-[120px] h-[40px] border mt-[40px] text-[blue] '>Choose plan</button>
        </div>   

      </div>
      <h1 className='text-[40px] text-center mt-[70px]'>What our clients say</h1>
      <div className='w-[70%] m-auto p-[20px] shadow-2xl mb-[40px]'>
        <div>
          <h1 className='text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</h1>
        </div>
        <div className='w-[300px] flex items-center mt-[40px]'>
          <div>
            <img src={surat5} alt="" />
          </div>
          <div>

            <h1 className='text-[20px] font-bold'>Courtney Alexander</h1>
            <h1 className='mt-[10px]'>Position, Company name</h1>
          </div>
        </div>
      </div>
             <Card3/>
    </div>
  )
}

export default Main
