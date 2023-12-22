import Image from 'next/image'
import Timer from '@/components/Timer'

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center h-screen w-full'> 
      <Timer />
    </main>
  )
}
