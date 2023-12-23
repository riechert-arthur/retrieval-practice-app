import Image from 'next/image'
import Timer from '@/components/Timer'
import { roboto } from '@/library/fonts'

export default function Home() {
  return (
    <main className='flex flex-col items-center h-screen w-full'>
      <div className={ `flex flex-col mt-20 w-full ${roboto.className} text-4xl` }>
        <text><b>Current:</b></text>
        <text>Read Chapter 2</text>
      </div>
      <div className='flex justify-center items-center mt-16 w-full'>
        <Timer />
      </div>      
    </main>
  )
}
