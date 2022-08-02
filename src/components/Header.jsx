import React from 'react'
import Close from '../components/images/icon-remove.svg'
import '../css/header.css'

function Header({keywords,deleteKeyword,clearAll}) {
  return (
    <div className='header_section'>
    <div className='header_container'>
      <div className="part1"> {keywords.map((key,id) => (<li className='keyword' key={id}>{key}
      <button className='deleteKeyword' onClick={()=> deleteKeyword(key)}><img src={Close}></img></button>
      </li>))}</div>
     
      <div className='clear_all'><button onClick={()=> {clearAll()}}>Clear All</button></div>
      </div>
      
      </div>
  )
}

export default Header