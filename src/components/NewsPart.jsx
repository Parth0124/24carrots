import React from 'react'

function NewsPart() {
  return (
    <section className=' flex mt-20'>
        <div className=' w-[50%] bg-[#dc6431] flex flex-col gap-10 justify-center items-center'>
            <div className=' w-[80%] text-white flex flex-col gap-7'>
                <h2 className=' text-[55px] font-semibold'>Endless Inspiration</h2>
                <p className=' text-left font-light'>Sign up to our newsletter for fresh updates, encouragement, and exclusive insights.</p>
                <div className=' flex gap-5'>
                    <input
                        type='text'
                        placeholder='Enter your Email'
                        className=' rounded-3xl p-2 w-[70%] text-black text-center placeholder:text-[#d56231]'
                        id='email'
                    />
                    <button className=' font-sans w-[30%] bg-[#9c4823] text-center uppercase hover:bg-[#b8562c] rounded-3xl'>sign up  <span className=''>→</span></button>
                </div>
                <p className=' font-thin'>By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.</p>
            </div>
        </div>
        <div className='w-[50%] '>
            <img
                src="https://24carrots.com/wp-content/uploads/2023/08/signup.png"
                alt='img'
            />
        </div>
    </section>
  )
}

export default NewsPart