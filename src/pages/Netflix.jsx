import React, { useState } from 'react'

export default function Netflix() {
  const[isScroll,setIsScroll]=useState(false);
  window.onscroll=()=>{
    setIsScroll(window.pageYOffset===0?false:true);
    return ()=>(window.onscroll=null);
  }
  return (
    <div>
      <Navbar isScrolled={isScrolled}/>
    </div>
  )
}
