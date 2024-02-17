import React from 'react'

function Page4() {
  return (
    <>
        <section className=' flex flex-col justify-center items-center'>
            <div className=' flex flex-col justify-center items-center mt-24 relative overflow-hidden'>
                <img
                    className="circle-banner"
                    src="https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png"
                    alt="img"
                />
                <div className='half-circle font-bold bg-white w-[650px] h-[650px] rounded-full absolute -bottom-[475px]'></div>
            </div>
            <div className=' flex flex-col gap-10 justify-center items-center relative -top-10'>
                <h3 className=' text-green-600 tracking-widest '>VENUES</h3>
                <h2 className=' text-green-900 text-center font-bold text-[70px]'>Unforgettable<br/> Venues</h2>
                <p className=' font-sans font-extralight text-center w-[600px] text-gray-600'>24 Carrots is the exclusive or preferred caterer at Southern California’s most spectacular properties. From intimate understated spaces to large and luxurious, we’ll help you find the event venue that makes your heart skip a beat.</p>
                <button className='font-sans w-1/2 border text-[#C15627] border-[#C15627] text-center uppercase px-3 py-2 hover:border-[#b8562c] rounded-3xl'>explore venues <span className=''>→</span></button>
            </div>
        </section>
    </>
  )
}

export default Page4