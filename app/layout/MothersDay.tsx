import Image from 'next/image'
import { GiftSectionImage1, GiftSectionImage2, GiftSectionImage3, GiftSectionImage4, GiftSectionImage5 } from '@/public/images/index'
import { NewArrivalsImage1, NewArrivalsImage2, NewArrivalsImage3, NewArrivalsImage4 } from '@/public/images/index'
import Link from 'next/link';

const MothersDay: React.FC = () => {
  return (
    <div id='home'>
      <div className='justify-center flex mt-36'>
        <p className='text-[20px] xs:text-[24px] w-[400px] max-w-[90%] font-semibold text-center text-title-color dark:text-title-color-dark'>
          Let&apos;s consider an example:
        </p>
      </div>
      <div className="mt-4 mb-48 w-[280px] sm:w-[380px] md:w-[500px] max-w-4xl mx-auto">
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <Image src={GiftSectionImage4} alt='Christmas' className='w-[120px]' />
          <div className="my-8 sm:px-6 rounded">
            <p className='text-[20px] w-full font-semibold text-start'>
              It&apos;s Christmas and you want to send a gift for your Mom.
            </p>
            <p className="text-md font-normal text-text-color mt-4 dark:text-text-color-dark">
              Show your love with a unique and memorable gift from BTCGiftShop.
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <Image src={NewArrivalsImage2} alt='' className='w-[120px]' />
          <div className="my-8 sm:px-6 rounded">
            <p className='text-[20px] w-full font-semibold text-start'>
              You prefer a perfect and different gift but have no idea!
            </p>
            <p className="text-md font-normal text-text-color mt-4 dark:text-text-color-dark">
              BTCGiftShop AI assists you in selecting a gift she&apos;ll love, offering a variety of options, including art and crafts with authenticity certificates on the Bitcoin network, along with investment gifts such as a Bitcoin savings account.
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <Image src={NewArrivalsImage1} alt='Gift Delivery' className='w-[120px]' />
          <div className="my-8 sm:px-6 rounded">
            <p className='text-[20px] w-full font-semibold text-start'>
              Just send the link of the gift to your Mom.
            </p>
            <p className="text-md font-normal text-text-color mt-4 dark:text-text-color-dark">
              Your Mom can easily manage her gift with our AI&apos;s friendly assistance, whether it&apos;s an oil painting with an Ordinal certificate, Runes or Satoshis.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Link href='prepare_for_launch' className='rounded-[64px] w-fit h-auto bg-first-color px-12 py-4 text-[15px] xs:text-[16px] font-medium text-white mt-20 cursor-pointer'>
            Start Giving
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MothersDay;
