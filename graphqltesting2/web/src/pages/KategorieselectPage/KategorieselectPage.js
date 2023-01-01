import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import wheel_bw from './luckywheel_bw.png'
import arrow_bw from './arrow_bw.png'

const KategorieselectPage = () => {
  return (
    <>
      <MetaTags title="Kategorieselect" description="Kategorieselect page" />

      <div className='flex flex-col items-cemter justify-center h-screen w-screen'>
        <div className='flex flex-col items-center justify-center '>
          <div className='h-36 w-36 bg-black rounded-full relative'></div>
          <p className='absolute text-center text-white'>Entscheidungsrad</p>
        </div>


      <div className='flex flex-col items-center justify-center gap-4 mt-6'>

        <p className='flex text-center items-center justify-center w-60 h-12 bg-white border border-solid p-2'>
          <p className=''>
          Freitext
          </p>

          <div className='flex flex-row pl-10 gap-6'>
          <img
            src={wheel_bw}
            width="20"
            height="20"
            className=''
          />
          <div className='w-4'>

          </div>
          </div>
        </p>
        <p className='flex flex-row text-center items-center justify-center w-60 h-12 bg-white border border-solid p-2'>
        <p className=''>
          Essen
          </p>
          <div className='flex flex-row pl-14 gap-6'>
          <img
            src={wheel_bw}
            width="20"
            height="20"
          />
          <img
            src={arrow_bw}
            width="20"
            height="20"
          />
          </div>


        </p>
        <p className='flex text-center items-center justify-center w-60 h-12 gap-6 bg-white border border-solid p-2'>
          Sport
          <div className='flex flex-row gap-6 pl-8'>
          <img
            src={wheel_bw}
            width="20"
            height="20"
          />
          <img
            src={arrow_bw}
            width="20"
            height="20"
          />
          </div>
        </p>
        <p className='flex text-center items-center justify-center w-60 h-12 gap-2 bg-white border border-solid p-2'>
          Unterhalten
          <div className='flex flex-row gap-6 pl-1'>
          <img
            src={wheel_bw}
            width="20"
            height="20"
          />
          <img
            src={arrow_bw}
            width="20"
            height="20"
          />
          </div>
        </p>
      </div>
      </div>
    </>
  )
}

export default KategorieselectPage
