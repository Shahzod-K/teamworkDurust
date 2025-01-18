import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/Instagram.png'
import fourImgs1 from '../../assets/images/fourImgs1.png'
import fourImgs2 from '../../assets/images/fourImgs2.png'
import fourImgs3 from '../../assets/images/fourImgs3.png'
import fourImgs4 from '../../assets/images/fourImgs4.png'
import purChevronUp from '../../assets/images/purChevronUp.png'

const Footer = () => {
  return (
    <div className='h-[505px] bg-[#1E212C] flex flex-col justify-end items-center gap-[80px]'>
      <div className='flex gap-[85px]'>
        <div className='flex flex-col gap-[30px] items-start'>
          <img src={logo} />
          <p className='text-[12px] text-[#424551]'>
            Createx SEO Agency is a full-service digital marketing <br />
            agency. We help businesses make more money <br />
            through a wealth of performance data and market <br />
            research. We create science-based SEO strategies <br />
            to empower our clients.
          </p>
          <div className='flex gap-[10px]'>
            <img src={facebook} />
            <img src={linkedin} />
            <img src={twitter} />
            <img src={instagram} />
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h2 className='font-bold text-white'>COMPANY</h2>
          <p className='text-[#424551]'>About Us</p>
          <p className='text-[#424551]'>Case Studies</p>
          <p className='text-[#424551]'>Blog</p>
          <p className='text-[#424551]'>Careers</p>
          <p className='text-[#424551]'>Contacts</p>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h2 className='font-bold text-white'>SERVICES</h2>
          <p className='text-[#424551]'>Social Media</p>
          <p className='text-[#424551]'>SEO</p>
          <p className='text-[#424551]'>Research</p>
          <p className='text-[#424551]'>Content & PR</p>
          <p className='text-[#424551]'>Payed Traffic</p>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h2 className='font-bold text-white'>CONTACT US</h2>
          <p className='text-[#424551]'>(405) 555-0128</p>
          <p className='text-[#424551]'>hello@createx.com</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <h2 className='font-bold text-white'>SIGN UP TO OUR NEWSLETTER</h2>
          <input type="text" className='w-[285px] h-[35px] rounded bg-[#ffffff3a]'/>
          <p className='text-white text-[10px]'>*Subscribe to our newsletter to receive communications and early <br /> updates from Createx SEO Agency.</p>
        </div>
      </div>
      <div className='flex gap-[560px] items-center'>
        <div className='flex gap-[20px]'>
          <img src={fourImgs1} />
          <img src={fourImgs2} />
          <img src={fourImgs3} />
          <img src={fourImgs4} />
        </div>
        <div className='flex gap-[10px] items-center'>
          <p className='text-[14px] text-white'>GO TO TOP</p>
          <img src={purChevronUp} />
        </div>
      </div>
      <footer className='w-full h-[50px] bg-[#ffffff21] pl-[150px] flex items-center'>
        <p className='text-[12px] text-white'>© All rights reserved.Made with by Createx Studio </p>
      </footer>
    </div>
  )
}

export default Footer
