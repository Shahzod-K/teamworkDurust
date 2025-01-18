import { Link } from 'react-router'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <header className='w-full h-[100px] flex justify-center items-center absolute'>
      <div className='w-[1230px] flex justify-between items-center'>
        <Link to={'/'}><img src={logo} /></Link>
        <div className='flex gap-5'>
          <Link to={'services'}><p className='font-bold text-white'>Services</p></Link>
          <Link to={'services2'}><p className='font-bold text-white'>Services2</p></Link>
          <Link to={'caseStudies'}><p className='font-bold text-white'>Case Studies</p></Link>
          <Link to={'caseStudies2'}><p className='font-bold text-white'>Case Studies2</p></Link>
          <Link to={'aboutUs'}><p className='font-bold text-white'>About Us</p></Link>
          <Link to={'aboutUs2'}><p className='font-bold text-white'>About Us2</p></Link>
          <Link to={'blog'}><p className='font-bold text-white'>Blog</p></Link>
          <Link to={'blog2'}><p className='font-bold text-white'>Blog2</p></Link>
          <Link to={'contacts'}><p className='font-bold text-white'>Contacts</p></Link>
        </div>
        <button className='w-[200px] h-[50px] rounded bg-[#7772F1] font-bold text-white'>Talk to a human</button>
      </div>
    </header>
  )
}

export default Header