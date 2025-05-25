import React from 'react'
import logo from "../assets/logo.svg"
import NetflixHome from "../assets/NetflixHome.jpg"
import { Button } from './styles/Button'
import { MenuItem, TextField } from '@mui/material';

const HeroSection = () => {
  return (
    <div className='relative h-[90vh] md:h-[100vh] ' >
        <div className='w-full absolute top-0 left-0 -z-10 h-full bg-gradient-to-b from-black/80 to-black/60 ' />
        <img src={NetflixHome} className='w-full absolute top-0 -z-40 h-full left-0 object-cover
         '  alt="" />

        <div className='flex justify-center items-center h-[100vh] md:w-10/12 mx-auto ' >
          <header className='flex absolute top-0 w-full sm:w-10/12 mx-auto  justify-between p-5  ' >
            <img src={logo} className=' h-8 sm:h-10'  alt="" />

            <div className='flex gap-2 sm:gap-5 items-center'  >
              <TextField
                select
                defaultValue="English"
                helperText="Language"
                InputProps={{
                  sx: {
                    color: '#fff',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid #6b7280', // Tailwind's gray-500
                    borderRadius: '0.5rem',      // Tailwind's rounded-lg
                    minHeight: 36,               // Reduce height (default is 56px)
                    height: 36,
                    paddingY: 0,
                    fontSize: 14,
                  },
                }}
                InputLabelProps={{
                  sx: { color: '#fff' }
                }}
                SelectProps={{
                  sx: {
                    color: '#fff',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '0.5rem',
                    minHeight: 36,
                    height: 36,
                    fontSize: 14,
                    '.MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #6b7280',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff',
                    },
                  },
                }}
                sx={{
                  minWidth: 120,
                  '& .MuiInputBase-root': {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid #6b7280',
                    borderRadius: '0.5rem',
                    minHeight: 36,
                    height: 36,
                    color: '#fff',
                    fontSize: 14,
                    paddingY: 0,
                  },
                  '& .MuiInputLabel-root': {
                    color: '#fff',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #6b7280',
                  },
                }}
              >
                  <MenuItem key="English" value="English">
                    English
                  </MenuItem>
                  <MenuItem key="Hindi" value="Hindi">
                    Hindi
                  </MenuItem>
                
              </TextField>
              <Button >
                Sign In
              </Button>
            </div>

          </header>

          <div className='text-white flex flex-col gap-5 text-center sm:gap-7 w-full  max-w-2xl mt-32 sm:mt-40 ' >
            <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold leading-tight' >
              Unlimited movies,<br /> TV shows and more
            </h1>
            <h4 className='font-bold text-lg sm:text-xl ' >Starts at ₹149. Cancel at any time.</h4>
            <p  className='text-base sm:text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='w-full flex flex-col md:flex-row relative items-center justify-between gap-3 sm:gap-5' >
              <div className='bg-black/50 border-gray-500 rounded-lg w-2xs md:w-xs lg:w-sm  border-1 h-fit' >
                <TextField 
                placeholder='Email Address' 
                varient="filled" 
                fullWidth 
                InputProps={{
                  sx: { color: '#fff' }
                }} />
              </div>
              <Button fontSize={"1.5rem"} >Get Started </Button>
            </div>
          </div>

        </div>


    </div>
  )
}

export default HeroSection

