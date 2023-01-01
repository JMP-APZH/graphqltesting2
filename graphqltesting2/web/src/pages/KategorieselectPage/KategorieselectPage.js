import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import wheel_bw from './luckywheel_bw.png'
import arrow_bw from './arrow_bw.png'
import left_arrow from './left_arrow.png'
import plus_black from './plus_black.jpg'

import { FaUserPlus } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiAt } from "react-icons/ci";

const KategorieselectPage = () => {
  return (
    <>
      <MetaTags title="Kategorieselect" description="Kategorieselect page" />

      <div className='flex flex-col items-cemter justify-center h-screen w-screen border border-solid'>
        <div className='flex flex-col items-center justify-center pl-48 w-52'>



        <div className='flex flex-col items-center justify-center '>
        <div className='flex justify-start w-full'>
        <div className='w-full '>
          <img
            src={left_arrow}
            width="20"
            height="20"
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>

        <div className='flex justify-end w-full'>
          <img
            src={plus_black}
            width="20"
            height="20"
          />
        </div>

        <div className=''>
        <FaUserPlus
          width="35"
          height="35"
        />
        </div>

        <div className=''>
        <AiFillStar
          width="35"
          height="35"
        />
        </div>

        </div>


        </div>

          <div className='h-48 w-48 bg-black rounded-full relative'></div>
          <p className='absolute text-center text-white'>Entscheidungsrad</p>
          <div className='flex justify-center items-center gap-36'>
          <p className='flex flex-col justify-center items-center h-12 w-12 p-1 text-2xl'>
            <CiAt />
            <p className='absolute flex justify-center items-center text-xs bg-red-600 text-white font-bold rounded-full w-4 h-4 ml-6 mb-6'>4</p>
          </p>
          <p className='border border-solid border-black p-1'>Fertig</p>
        </div>
        </div>




      <div className='flex flex-col items-center justify-center gap-4 mt-6'>

        <p className='flex text-center items-center justify-center w-60 h-12 bg-white border border-solid border-black p-2'>
          <p className=''>
          Freitext
          </p>

          <div className='flex flex-row pl-10 gap-6'>
          <img
            src={wheel_bw}
            width="35"
            height="35"
            className=''
          />
          <div className='w-8'>

          </div>
          </div>
        </p>
        <p className='flex flex-row text-center items-center justify-center w-60 h-12 bg-white border border-solid border-black p-2'>
        <p className=''>
          Essen
          </p>
          <div className='flex flex-row pl-14 gap-6'>
          <img
            src={wheel_bw}
            width="35"
            height="35"
          />

          <Link
            to={routes.subkategories()}
            className='flex items-center'
          >
          <img
            src={arrow_bw}
            width="35"

          />
          </Link>

          </div>


        </p>
        <p className='flex text-center items-center justify-center w-60 h-12 gap-6 bg-white border border-solid border-black p-2'>
          Sport
          <div className='flex flex-row gap-6 pl-8'>
          <img
            src={wheel_bw}
            width="35"
            height="35"
          />
           <Link
            to={routes.subkategories()}
            className='flex items-center'
          >
          <img
            src={arrow_bw}
            width="35"

          />
          </Link>
          </div>
        </p>
        <p className='flex text-center items-center justify-center w-60 h-12 gap-2 bg-white border border-solid border-black p-2'>
          Unterhalten
          <div className='flex flex-row gap-6 pl-1'>
          <img
            src={wheel_bw}
            width="35"
            height="35"
          />
           <Link
            to={routes.subkategories()}
            className='flex items-center'
          >
          <img
            src={arrow_bw}
            width="35"

          />
          </Link>
          </div>
        </p>
      </div>
      </div>
      </div>
    </>
  )
}

export default KategorieselectPage
