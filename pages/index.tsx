import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const dateYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Billz Health Tips</title>
      </Head>
      <div className='h-screen w-screen  flex flex-col justify-between'>
        <div className='max-w-5xl mx-auto pt-3 px-6 text-center'>
          <Image
            src='/images/drugs.jpg'
            alt='eugene pills'
            width={450}
            height={270}
          />
          <h1 className='sm:text-5xl text-2xl sm:my-14 my-10 font-semibold'>
            How To Cure Stroke Permanently
          </h1>
          <button
            className='bg-ct-read-600 outline-none border-black border-2 sm:text-3xl font-medium rounded-sm sm:px-10 px-7 py-3 text-white
        hover:bg-ct-dark-600'
            onClick={() =>
              router.replace(
                'https://www.billzhealthtips.com/2022/06/stroke-treatment-in-ghana_22.html'
              )
            }
          >
            CLICK HERE
          </button>
          <p className='text-ct-dark-600 mt-10 mb-5'>
            This site is not a part of the Facebook, Instagram, or YouTube
            website or Google, Inc. Additionally, this site is not endorsed by
            Facebook or Google in any way. FACEBOOK and GOOGLE are trademarks of
            FACEBOOK Inc and ALPHABET INC respectively
          </p>
        </div>
        <div className='mt-auto border-t-[1px] border-gray-500 pt-9 pb-4 text-center text-sm'>
          {`Copyright@${dateYear}`}{' '}
          <Link href='https://www.billzhealthtips.com/'>
            <a className='text-ct-read-600'>BillzHealth</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
