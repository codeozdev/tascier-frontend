import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-red-600 text-neutral-200'>
      <div className='container py-5 flex items-center justify-between'>
        <div className='sm:inline-block text-center space-y-1 w-full sm:w-fit'>
          <p className='font-bold text-2xl sm:text-4xl'>Ecz.Gamze Taşcıer</p>
          <p className=''>Ankara Milletvekili / CHP Genel Başkan Yardımcısı</p>
        </div>

        <nav className='hidden sm:flex'>
          <ul className='flex items-center gap-5 font-semibold'>
            <li>
              <Link
                href={
                  'https://www.tbmm.gov.tr/milletvekili/milletvekilidetay?DonemId=134155f0-c3d6-4d24-893b-f3a2ef695ae7&Id=f72877c2-d9e0-037b-e050-007f01005610'
                }
                target='_blank'
                className='bg-white p-2 rounded-lg text-gray-600 text-sm hover:bg-red-500 hover:text-white'>
                TBMM SAYFASI
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
