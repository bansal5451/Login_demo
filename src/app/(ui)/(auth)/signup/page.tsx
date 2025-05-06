
'use client';
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');


    const handleSignup = async (e:any) => {
        e.preventDefault();
        // setLoading(true);
        // setError(null);


    // try {
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
  
        // if (!response.ok) {
        //   throw new Error('Signup failed');
        // }
  
        const data = await res.json();
        setMessage(data.message || (res.ok ? 'Signup successful' : 'Signup failed'));
        // Handle successful login (e.g., save token, redirect, etc.)
        // console.log('Signup successful:', data);
    // } catch (err) {
    //     setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200 relative overflow-hidden ">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mt-2">Welcome</h2>
            <p className="text-gray-500 text-sm">Sign up to continue</p>
          </div>
          <form className="mt-6" onSubmit={handleSignup}> {/* Added onSubmit */}

          <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username}
            onChange={(e) => setUsername(e.target.value)}
              placeholder="Username" 
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" 
            />


            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
            onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address" 
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" 
            />

            <label className="block text-sm font-medium text-gray-700 mt-4" htmlFor="password">Password</label>
            <div className="relative">
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" 
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 border-gray-300" /> Remember me
              </label>
              <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:underline" href="#">
                Forgot Password?
              </Link>
            </div>
            {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
            <div className="flex items-center justify-between">
              <button 
                className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-center font-semibold" 
                // disabled={loading} 
                type="submit" // Ensure it's a submit button 
                >Signup
                {/* {loading ? "Logging in..." : "Login"} */}
              </button>
            </div>
            <br />
            <p className="text-center">
               Already have an account?
              <Link className="text-indigo-500 hover:underline" href="/loggIn">
                Login
              </Link>
            </p>
          </form>
          <p>{message}</p>

        </div>
      </div>
    </>
  );
}
