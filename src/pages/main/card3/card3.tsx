import surat1 from '../../../components/ImagesOfCom/pic.png'
import surat2 from '../../../components/ImagesOfCom/meta.png'
const Card3 = () => {
    return (
        <div className="pb-[40px] w-[90%] m-auto flex justify-evenly ">
            <div className="w-[20%]">
                <h1 className="text-[40px]">Latest news</h1>
                <h1 className="mt-[10px]">Check more posts in our blog for featured news and advertising insights</h1>
                <button className="w-[120px] h-[40px] text-[white] bg-[#7772F1] mt-[10px] rounded-lg">Go to blog</button>
            </div>
            <div className="w-[30%]">
                <div><img src={surat1} alt="" /></div>
                <div className='mt-[10px]'><img src={surat2} alt="" /></div>
                <button className='w-[140px] text-[blue] mt-[150px]'>Read more</button>
            </div>
            <div className="w-[30%]">
                <div><img src={surat1} alt="" /></div>
                <div className='mt-[10px]'><img src={surat2} alt="" /></div>
                <h1 className='text-[20px] font-bold'>The Basics of Blogging Search Engine Optimization.</h1>
                <h1 className='mt-[10px]'>Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</h1>
                <button className='w-[140px] text-[blue] mt-[10px]'>Read more</button>
            </div>
        </div>
    )
}

export default Card3