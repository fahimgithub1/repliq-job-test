import { AiOutlineUser, AiFillGift } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { FaHammer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BottomNav(){

    return(
        <div className="fixed bottom-0 left-0 bg-green border-t-[1px] border-black w-[100%] text-center p-3 px-5 text-4xl flex justify-between bg-blue-400 md:left-[calc((100%_-_475px)/2)] md:w-[475px]">
            <div className='w-[20%]'>
                <Link to='/customers'>
                    <BsPeopleFill className='text-center -mb-4 m-auto p-0 ' />
                    <span className='text-base font-bold m-0 p-0 '>Customers</span>
                </Link>
            </div>

            <div className='w-[20%] pl-2'>
                <Link to='/products'>
                    <MdProductionQuantityLimits className='text-center -mb-4 m-auto p-0 ' />
                    <span className='text-base font-bold m-0 p-0 '>Products</span>
                </Link>
            </div>

            <div className='w-[20%] pl-1'>
                <Link to='/orders'>
                    <FaHammer className='text-center -mb-4 m-auto p-0 ' />
                    <span className='text-base font-bold m-0 p-0 '>Orders</span>
                </Link>
            </div>

            <div className='w-[20%] pl-1'>
                <Link to='/offers'>
                    <AiFillGift className='text-center -mb-4 m-auto p-0 ' />
                    <span className='text-base font-bold m-0 p-0 '>Offers</span>
                </Link>
            </div>

            <div className='w-[20%] pl-1'>
                <Link to='/'>
                    <AiOutlineUser className='text-center -mb-4 m-auto p-0 ' />
                    <span className='text-base font-bold m-0 p-0 '>Login</span>
                </Link>
            </div>
        </div>
    )
}