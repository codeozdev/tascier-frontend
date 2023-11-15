import Image from 'next/image'

export default function Detail() {
  return (
    <div className='container grid grid-cols-2 sm:grid-cols-3 gap-5 my-10'>
      <Image src='/1.jpg' alt='img' width={500} height={500} className='object-cover w-full' />
      <Image src='/2.jpg' alt='img' width={500} height={500} className='object-cover w-full' />
      <Image src='/3.jpg' alt='img' width={500} height={500} className='object-cover w-full' />
      <Image src='/4.jpg' alt='img' width={500} height={500} className='object-cover w-full' />
      <Image src='/5.jpg' alt='img' width={500} height={500} className='object-cover w-full' />
      <Image src='/6.jpg' alt='img' width={500} height={500} className='object-cover w-full' />
    </div>
  )
}
