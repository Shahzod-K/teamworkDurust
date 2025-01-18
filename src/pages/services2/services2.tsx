import backgroundImage from './pictures/background.png';
import input from './pictures/input-group.png'
import second from './pictures/Clients.png'
import third from "./pictures/image.png"
import left from "./pictures/left.png"
import fourth from "./pictures/CTA.png"
import line from "./pictures/line.png"
import left1 from "./pictures/left1.png"
import pricing from "./pictures/pricing.png"
import pricing1 from "./pictures/pricing (1).png"

const Services2 = () => {

  return (<div className="">
    <div className="mt-[0px] w-[100%] h-[620px] pt-[120px]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className="text-[20px] text-gray-300 text-center">Home/Services/Search Engine Optimization</p>
      <p className="text-[50px] mt-[20px] font-bold text-white text-center">Search Engine Optimization</p>
      <p className="text-[20px] text-gray-400 text-center mt-[20px]">Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer <br />  facilisi. Ultrices vitae tempor amet nec euismod non. </p>
      <img className="mt-[70px] m-auto" src={input} alt="" />
    </div>
    <img src={second} className='m-auto mt-[50px]' alt="" />

    <div className="w-[90%] m-auto flex mt-[50px] items-center justify-between">
      <img src={third} alt="" />
      <div className="w-[400px]">
        <p className='text-[40px] font-bold'>We go above and beyond to ensure successful SEO</p>
        <p className='text-[20px] mt-[20px]'>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
      </div>
    </div>

    <p className='text-[40px] text-center font-bold mt-[50px]'>Our services</p>

    <div className="w-[90%] m-auto flex mt-[50px] items-center justify-between flex-wrap">
      <img className='w-[30%]' src={left} alt="" />
      <img className='w-[30%]' src={left} alt="" />
      <img className='w-[30%]' src={left} alt="" />
      <img className='w-[30%] mt-[40px]' src={left} alt="" />
      <img className='w-[30%] mt-[40px]' src={left} alt="" />
      <img className='w-[30%] mt-[40px]' src={left} alt="" />
    </div>

    <img src={fourth} className='m-auto mt-[50px] w-[90%]' alt="" />

    <div className='w-[70%] m-auto flex justify-center'>
      <div className="w-[400px]">
        <div className='h-[300px]'></div>
        <div className="">
          <p className='text-[30px] font-semibold'>Technical SEO Optimizations</p>
          <p className=' text-[20px]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
        </div>

        <div className="mt-[100px]">
          <p className='text-[30px] font-semibold'>Technical SEO Optimizations</p>
          <p className=' text-[20px]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
        </div>
      </div>
      <img src={line} className='m-auto h-[800px] bg-black' alt="" />

      <div className="w-[400px]">
        <div className="">
          <p className='text-[30px] font-semibold'>Technical SEO Optimizations</p>
          <p className=' text-[20px]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
        </div>

        <div className="mt-[100px]">
          <p className='text-[30px] font-semibold'>Technical SEO Optimizations</p>
          <p className=' text-[20px]'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
        </div>
      </div>
    </div>

    <p className='text-[40px] text-center font-bold mt-[50px]'>Flexible pricing plans</p>
    <img src={left1} className='m-auto mt-[50px]' alt="" />

    <div className="w-[90%] m-auto flex mt-[50px] items-center justify-between">
      <img className='w-[33%]' src={pricing} alt="" />
      <img className='w-[33%]' src={pricing1} alt="" />
      <img className='w-[33%]' src={pricing} alt="" />
    </div>
  </div >

  )
}

export default Services2