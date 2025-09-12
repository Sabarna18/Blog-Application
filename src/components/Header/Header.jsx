import React, { useEffect, useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <header className='py-3 shadow bg-slate-900'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Logo width='70px' />
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-6 py-2 bg-black text-white transition
                     duration-400 my-2 mx-2 p-2 cursor-pointer border-transparent border-2 hover:border-blue-700 rounded-xl'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <div>
                <li>
                  <LogoutBtn />
                </li>
                <div className='p-1 border-2 border-transparent hover:border-blue-700 transition 
                      duration-300 cursor-pointer bg-black rounded-md'>
                  <h1 className='bg-blend-difference p-2 roundedmd text-bold text-white'>welcome to THE CORE {userData.email}</h1>
                </div>
              </div>


            )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}


export default Header