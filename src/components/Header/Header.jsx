import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div>
      <h2 className='font-secondary h4 px-4'>Made with React & Node</h2>
      <h1 id="headerButton" className='position-relative btn btn-light font-secondary shadow p-3 mt-2 bg-body rounded'>Blog</h1>
      <img src="https://images.unsplash.com/photo-1561103547-564d4edbb64b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" width="100%" height="300px" alt="React & Node Blog" className='headerImg shadow'/>
    </div>
  )
}

export default Header