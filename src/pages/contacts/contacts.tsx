import './contact.css'
import location from './contactImgs/location.png'
import iPhone from './contactImgs/iPhone.png'
import chat from './contactImgs/chat.png'
import clock from './contactImgs/clock.png'
import imgContact from './contactImgs/imgContact.png'

const Contacts = () => {
  return (
    <>
      <div className='backContact h-[585px] flex flex-col justify-center items-center gap-[30px]'>
        <p className='text-[14px] text-white'>Contacts</p>
        <h1 className='text-[72px] text-white font-[900]'>Contacts</h1>
        <div className='flex gap-[70px]'>
          <div className='flex gap-[10px] items-start'>
            <img src={location} />
            <div className='flex flex-col'>
              <p className='text-[14px] font-bold text-white'>Visit us</p>
              <p className='text-white'>2464 Royal Ln. Mesa,</p>
              <p className='text-white'>New Jersey 45463, USA</p>
              <p className='text-[#7772F1]'>See on the map</p>
            </div>
          </div>
          <div className='backLine1 w-[1px] h-[100px]'></div>
          <div className='flex gap-[10px] items-start'>
            <img src={iPhone} />
            <div className='flex flex-col'>
              <p className='text-[14px] font-bold text-white'>Call us</p>
              <p className='text-white'>(405) 555-0128</p>
              <p className='text-white'>(603) 555-0123</p>
            </div>
          </div>
          <div className='backLine2 w-[1px] h-[100px]'></div>
          <div className='flex gap-[10px] items-start'>
            <img src={chat} />
            <div className='flex flex-col'>
              <p className='text-[14px] font-bold text-white'>Talk to us</p>
              <p className='text-white'>hello@createx.com</p>
            </div>
          </div>
          <div className='backLine1 w-[1px] h-[100px]'></div>
          <div className='flex gap-[10px] items-start'>
            <img src={clock} />
            <div className='flex flex-col'>
              <p className='text-[14px] font-bold text-white'>Working Hours</p>
              <p className='text-white'>Mon-Fri: 9 am — 6 pm</p>
              <p className='text-white'>Sat-Sun: days off</p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[1000px] flex justify-center items-center gap-[30px]'>
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[46px] font-[900] tetx-[#1E212C]'>Ready to get started?</h1>
          <p className='text-[#424551]'>Services</p>
          <div className='flex gap-[15px]'>
            <button className='w-[110px] h-[30px] border border-[#D7DADD] rounded text-[#D7DADD] font-bold text-[14px]'>Social Media</button>
            <button className='w-[60px] h-[30px] border border-[#D7DADD] rounded text-[#D7DADD] font-bold text-[14px]'>SEO</button>
            <button className='w-[90px] h-[30px] border bg-[#7772F1] border-[#D7DADD] rounded text-white font-bold text-[14px]'>Research</button>
            <button className='w-[115px] h-[30px] border border-[#D7DADD] rounded text-[#D7DADD] font-bold text-[14px]'>Content & PR</button>
            <button className='w-[110px] h-[30px] border border-[#D7DADD] rounded text-[#D7DADD] font-bold text-[14px]'>Payed Traffic</button>
          </div>
          <div className='flex gap-[30px]'>
            <div className='flex flex-col'>
              <label className='text-[#424551]'>First Name*</label>
              <input type="text" placeholder='Your first name' className='w-[285px] h-[50px] rounded  bg-[#D7DADD] pl-[20px]'/>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#424551]'>Last Name*</label>
              <input type="text" placeholder='Your last name' className='w-[285px] h-[50px] rounded  bg-[#D7DADD] pl-[20px]'/>
            </div>
          </div>
          <div className='flex gap-[30px]'>
            <div className='flex flex-col'>
              <label className='text-[#424551]'>Email*</label>
              <input type="text" placeholder='Your first name' className='w-[285px] h-[50px] rounded  bg-[#D7DADD] pl-[20px]'/>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#424551]'>Phone*</label>
              <input type="text" placeholder='Your phone number' className='w-[285px] h-[50px] rounded  bg-[#D7DADD] pl-[20px]'/>
            </div>
          </div>
          <div className='flex gap-[30px]'>
            <div className='flex flex-col'>
              <label className='text-[#424551]'>Company</label>
              <input type="text" placeholder='Your company name' className='w-[285px] h-[50px] rounded  bg-[#D7DADD] pl-[20px]'/>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#424551]'>Position</label>
              <input type="text" placeholder='Your position' className='w-[285px] h-[50px] rounded  bg-[#D7DADD] pl-[20px]'/>
            </div>
          </div>
          <p className='text-[#424551]'>Approx. budget</p>
          <div className=''>
            <div className='flex gap-[200px] pl-[220px]'>
              <div className='w-[50px] h-[20px] rounded bg-[#424551] text-white text-[12px] flex justify-center items-center'>$32K</div>
              <div className='w-[50px] h-[20px] rounded bg-[#424551] text-white text-[12px] flex justify-center items-center'>$81K</div>
            </div>
            <input type="range" className='w-[600px]'/>
            <div className='flex gap-[122px]'>
              <p className='text-[10px] text-[#1E212C]'>$1K</p>
              <p className='text-[10px] text-[#1E212C]'>$25K</p>
              <p className='text-[10px] text-[#1E212C]'>$50K</p>
              <p className='text-[10px] text-[#1E212C]'>$75K</p>
              <p className='text-[10px] text-[#1E212C]'>$100K</p>
            </div>
          </div>
          <p className='text-[#424551]'>Additional Details</p>
          <textarea className='w-[600px] h-[125px] rounded bg-[#D7DADD] p-[20px]' placeholder='Your message'></textarea>
          <div className='flex gap-[70px]'>
            <div className='flex gap-[10px] items-start'>
              <input type="checkbox" className='mt-[7px]'/>
              <p className='text-[#424551]'>I agree to receive communications from <br /> Createx SEO Agency</p>
            </div>
            <button className='w-[225px] h-[50px] rounded bg-[#7772F1] font-bold text-white'>Request a proposal</button>
          </div>
        </div>
        <img src={imgContact} />
      </div>
    </>
  )
}

export default Contacts