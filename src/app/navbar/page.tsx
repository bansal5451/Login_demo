
"use client";

import Link from 'next/link';
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        router.push('/login');
      }
       return (
     <>
  <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link href="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >Dashboard</Link>
            <Link href="/contacts" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contacts</Link>
            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
          </div>
        </div>
      </div>
         <button className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={handleLogout}>Sign out</button>
     
    </div>
  </div>
</nav>
</>
 )
 }