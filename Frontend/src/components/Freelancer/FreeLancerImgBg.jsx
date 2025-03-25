import BgImg from '../../assets/bgImage.png';

const FreeLancerImgBg = () => {

  return (
    <div className='relative max-xl:overflow-hidden'>
      <div className='bg-[#2942A5] h-[400px]' />
      <img src={BgImg} className='absolute top-4 right-0 w-fit' alt="" />
    </div>
  );
};

export default FreeLancerImgBg;
