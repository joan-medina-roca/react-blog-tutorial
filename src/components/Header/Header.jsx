import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div>
      <h2 className='font-secondary h4'>React & Node</h2>
      <h1 id="headerButton" className='position-relative btn btn-light font-secondary shadow p-3 mt-2 bg-body rounded d-none d-md-inline-block' style={{ fontSize: "5rem"}}>Blog</h1>
      <h1 id="headerButton" className='position-relative btn btn-light font-secondary shadow p-3 mt-2 bg-body rounded d-md-none' style={{ fontSize: "3.5rem"}}>Blog</h1>
      <img src="https://images.unsplash.com/photo-1561103547-564d4edbb64b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" width="100%" height="400px" alt="React & Node Blog" className='d-none d-md-block' style={{ marginTop: "-80px", objectFit: "cover" }}/>
      <img src="https://images.unsplash.com/photo-1561103547-564d4edbb64b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" width="100%" height="300px" alt="React & Node Blog" className='d-md-none' style={{ marginTop: "-65px", objectFit: "cover" }}/>
    </div>
  )
}

export default Header