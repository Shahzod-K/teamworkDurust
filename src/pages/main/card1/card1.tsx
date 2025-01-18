import surat1 from '../../../components/ImagesOfCom/group (7).png'
const Card1 = () => {
    return (
        <div className="w-[90%] m-auto mt-[40px] bg-[#1E212C] p-[20px] rounded-xl flex justify-evenly text-[white]">
            <div>
                <img className='w-[300px]' src={surat1} alt="" />
            </div>
            <div className='w-[40%]'>
               <h1 className='text-[30px]'>Get a Free SEO Analysis!</h1>
               <div className='w-[100%] mt-[40px]'>
                  <div className='w-[100%] flex justify-between'>
                    <input type="text" className='w-[190px] h-[40px] bg-[grey] rounded-xl' />
                    <input type="text" className='w-[190px] h-[40px] bg-[grey] rounded-xl' />
                  </div>
                  <div className='w-[100%] m-auto'>
                    <input type="text" className='w-[100%] mt-[40px] h-[40px] bg-[grey] rounded-xl' />
                  </div>
               </div>

               <div className='w-[100%] mt-[20px] flex items-center'>
                 <h1 className='w-[60%] '>I agree to receive communications from Createx SEO Agency</h1>
                 <button className='w-[40%] h-[40px] border bg-[#7772F1]'>Get a free analysis</button>
               </div>
            </div>
        </div>
    )
}

export default Card1