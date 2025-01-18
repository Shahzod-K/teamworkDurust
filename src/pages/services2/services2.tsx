import backgroundImage from './pictures/background.png';
import input from './pictures/input-group.png'

const Services2 = () => {

  return (<div className="">
    <div className="mt-[0px] w-[100%] h-[620px] pt-[120px]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className="text-[20px] text-gray-300 text-center">Home/Services/Search Engine Optimization</p>
      <p className="text-[50px] mt-[20px] font-bold text-white text-center">Search Engine Optimization</p>
      <p className="text-[20px] text-gray-400 text-center mt-[20px]">Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer <br />  facilisi. Ultrices vitae tempor amet nec euismod non. </p>
      <img className="mt-[70px] m-auto" src={input} alt="" />
    </div>

    <div className="">

    </div>
  </div >

  )
}

export default Services2