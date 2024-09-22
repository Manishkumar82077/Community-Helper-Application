import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Login() {

  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
  });

  const changeEventHandle = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  }
  const changeFileHandle = (e) => {
    setInput({...input, profile: e.target.files[0]});
  }

  const submitHandler = async (e)=>{

    e.preventDefault();
    console.log(input);
  }

  return (
    <>
      <div >
        <Navbar />

        <div className=" flex items-center justify-center max-w-7xl mx-auto ">
          <form onSubmit={submitHandler} className="border-gray-200 w-1/2 p-6 rounded shadow-md my-20  " >
            <h1 className="font-bold text-xl mb-5">Login</h1>
            
            <div className="my-2">
              <Label>Email</Label>
              <Input 
              type="email" 
              value={input.email}
              name="email"
              onChange={changeEventHandle}
              placeholder="Enter your Email" />
            </div>
           
            <div className="my-2">
              <Label>Password</Label>
              <Input 
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandle}
               placeholder="Enter your Password" />
            </div>
            <div className='flex items-center justify-between '>

              <RadioGroup className='flex items-center gap-4 my-4'>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="volunteer"
                    checked={input.role === 'volunteer'}
                    onChange={changeEventHandle}
                    className="cursor-pointer"
                  ></Input>
                  <Label htmlFor="option-one">Volunteer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="organizer"
                    checked={input.role === 'organizer'}
                    onChange={changeEventHandle}
                    className="cursor-pointer"
                  ></Input>
                  <Label htmlFor="option-two">Organizer</Label>
                </div>
              </RadioGroup>

            </div>
          
            <Button type="submit" className='w-full my-4'>Login</Button>
            <span className='text-sm'>Don't Have an Account? <Link to='/signup' className='text-blue-600'>SignUp</Link> </span>
          </form>
        </div>
      </div>

    </>
  );
}

export default Login;
