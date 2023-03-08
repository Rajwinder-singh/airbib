import Image from "next/image";

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src='https://drive.google.com/uc?export=view&id=18d9RO1nKpUzdiBBKH-DZ9MyRbHf11hCp' fill style={{
            objectFit: 'cover'
        }}/>

        <div className='absolute top-1/2 w-full text-center text-white'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
            <button className='shadow-md rounded-full bg-white text-purple-500 px-10 py-4 font-bold my-3
            hover:shadow-xl active:scale-90 transition duration-150'>
                I'm flexible
            </button>
        </div>
    </div>
  )
}

export default Banner;