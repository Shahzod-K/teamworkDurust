import surat1 from '../../../components/ImagesOfCom/client-logo (6).png'
import surat2 from '../../../components/ImagesOfCom/features (1).png'
import surat3 from '../../../components/ImagesOfCom/hover.png'
import surat4 from '../../../components/ImagesOfCom/image (39).png'
import surat5 from '../../../components/ImagesOfCom/features (2).png'
import Card3 from '../card3/card3'
const Card2 = () => {
    return (
        <div>
            <h1 className='text-[40px] ml-[50px]'>Read our clients' case studies</h1>
            <div className="w-[90%] m-auto flex mt-[50px] justify-center">
                <div className="w-[30%] shadow-xl p-[10px]">
                    <div className='p-[10px]'>
                        <img src={surat1} alt="" />
                    </div>
                    <h1 className='text-[20px] mt-[20px]'>Charity organisation</h1>
                    <hr className=' mt-[20px]' />
                    <h1 className='mt-[10px]'>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</h1>
                    <div className='mt-[20px]'>
                        <img src={surat2} alt="" />
                    </div>
                </div>
                <div className="w-[30%] shadow-xl p-[10px]">
                    <div>
                        <img className='w-[100%] h-[100%]' src={surat3} alt="" />
                    </div>
                </div>
                <div className="w-[30%] shadow-xl p-[10px]">
                    <div>
                        <img src={surat4} alt="" />
                    </div>
                    <hr className='mt-[30px]' />
                    <div className='mt-[160px]'>
                        <img src={surat5} alt="" />
                    </div>
                </div>
            </div>

            <div className='w-[50%] m-auto mt-[60px] flex justify-center gap-[10px]'>
                <h1 className='text-[20px]'>Explore more case studies</h1>
                <button className='w-[170px] h-[40px] bg-[#7772F1] text-[white] rounded-lg'>View all case studies</button>
            </div>

        </div>
    )
}

export default Card2