import Image from 'next/image'

import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { TbDeviceLandlinePhone } from 'react-icons/tb'
import { GrLocation } from 'react-icons/gr'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col sm:flex-row sm:h-[calc(100vh-120px)] rounded-lg sm:p-10 pt-4'>
        <div className='sm:w-2/3 flex flex-col sm:flex-row justify-center items-center'>
          <div className='h-full w-full relative'>
            <Image
              src='/main.webp'
              alt='img'
              width={1500}
              height={1500}
              quality={100}
              className='object-fill w-full h-full sm:rounded-l-lg pointer-events-none z-50'
            />
            <Image
              src='/logo.webp'
              alt='img'
              width={100}
              height={100}
              className='absolute top-0 right-0 object-cover pointer-events-none'
            />
          </div>
          {/*imza*/}
          <Image
            src='/imza.webp'
            alt='img'
            width={800}
            height={500}
            quality={100}
            className='absolute w-52 3xl:w-[800px] bottom-[400px] right-[-30px] sm:w-[500px] sm:bottom-20 sm:right-[600px] 3xl:bottom-24  3xl:right-[700px] pointer-events-none'
          />
        </div>
        <div className='sm:w-1/3 flex flex-col items-center justify-center rounded-r-lg shadow-2xl'>
          <Image
            src='/TBMM.jpg'
            alt='meclis'
            width={400}
            height={300}
            className='relative -top-20 sm:relative sm:-top-10 -z-10 3xl:static px-2 sm:px-0 rounded-lg pointer-events-none sm:w-[300px] sm:h-[300px]  object-cover'
          />

          <p className='relative -top-28 sm:relative sm:-top-24 3xl:static px-5 3xl:px-12 leading-6 text-center select-none text-sm 3xl:text-base'>
            2004 yılında Ankara Üniversitesi Eczacılık Fakültesini bitirdim. Mezuniyet sonrası Mamak
            {`'`}ta serbest eczacılık yaptım ve Türk Eczacıları Birliği delegesi oldum. 35., 36. ve
            37. Cumhuriyet Halk Partisi Olağan Kurultaylarında Parti Meclisi üyesi seçildim. 7
            Haziran 2015 Genel Seçimi öncesi Ankara{`'`}da CHP Milletvekili adaylığı için
            gerçekleşen ön seçimde 5. sırada çıktım. 24 Haziran 2018 Genel Seçimi{`'`}nde Ankara 1.
            Bölge 5. sıra Milletvekili adayı oldum ve seçildim. Kadın ve çocuk hakları, sosyal
            güvenlik, sağlık ve ilaç politikaları hakkında çalışmalar ve projeler yapıyorum. TBMM
            Kadın Erkek Fırsat Eşitliği Komisyonu üyesiyim. Kasım ayından itibaren CHP Genel Başkan
            Yardımcısı olarak görev yapmaktayım.
          </p>
          <div className='relative -top-14 sm:relative sm:-top-24 3xl:static sm:mt-10 3xl:mt-20 flex gap-5'>
            <Link href={'https://www.facebook.com/eczgamzetascier'} target='_blank'>
              <AiFillFacebook size={40} className='fill-blue-500' />
            </Link>

            <Link href={'https://www.instagram.com/gamze_tascier/'} target='_blank'>
              <img src='/instagram.png' alt='instagram' className='w-10 h-10' />
            </Link>

            <Link href={'https://twitter.com/gamzetascier'} target='_blank'>
              <BsTwitter size={40} className='fill-blue-500' />
            </Link>
          </div>

          <div className=' sm:relative sm:-top-24 3xl:static flex flex-col 3xl:flex-row justify-center items-center gap-10 sm:gap-2 3xl:gap-10 sm:mt-10 3xl:mt-20 container mb-10 sm:mb-0'>
            <div className='flex flex-col items-center'>
              <AiOutlineMail size={30} />
              <p>gamze.tascier@tbmm.gov.tr</p>
            </div>

            <div className='flex flex-col items-center'>
              <TbDeviceLandlinePhone size={30} />
              <p>(0312) 420 58 42/43</p>
            </div>

            <div className='flex flex-col items-center 3xl:mt-5'>
              <GrLocation size={30} />
              <p className='text-center text-base sm:text-xs w-[300px] sm:w-[250px]'>
                Türkiye Büyük Millet Meclisi Halkla İlişkiler Binası Oda No: B416 Bakanlıklar
                Çankaya/Ankara
              </p>
            </div>

            <Link
              href={
                'https://www.tbmm.gov.tr/milletvekili/milletvekilidetay?DonemId=134155f0-c3d6-4d24-893b-f3a2ef695ae7&Id=f72877c2-d9e0-037b-e050-007f01005610'
              }
              target='_blank'
              className='bg-gray-800 text-white py-2 px-5 rounded-lg text-sm sm:hidden'>
              TBMM SAYFASI
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
