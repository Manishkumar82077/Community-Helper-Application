import React, { } from 'react'

import { Popover, PopoverContent } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const user = false;
  return (
    <div className='mt-5   bg-white w-full justify-between' style={{ position: 'absolute', top: 0, left: 0 }} >
      <div className='flex items-center justify-between mx-auto w-full h-16' >
        <div>
          <h1 className='text-2xl font-bold'>Community Helper <span className='text-[#F83002]'>Portal</span></h1>
        </div>
        <div className='justify-end flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5  '>
            <li>Home</li>
            <li>Community</li>
            <li>Browse</li>
          </ul>

          {
            !user ? (
              <div className='flex items-center gap-2'>
                <Link to="/login"><Button variant='secondary'>Login</Button>
                </Link>

                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#2c076d]">Sign Up</Button>
                </Link>
              </div>
            ) :
              (
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className='cursor-pointer'>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className='w-80'>
                    <div className='flex gap-4 space-y-2'>
                      <Avatar className='cursor-pointer'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      </Avatar>
                      <div>
                        <h4 className='font-medium'>Manish Singh</h4>
                        <p className='text-sm text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, exercitationem!</p>
                      </div>
                    </div>

                    <div className='flex flex-col gap-3 my-2 text-gray-600'>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2 />
                        <Button className="bg-transparent" variant="link">View Profile</Button>
                      </div>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <LogOut />
                        <Button className="bg-[#f04d4d] hover:bg-[#912a2a]">Logout</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )
          }





        </div>
      </div>

    </div>
  )
}

export default Navbar