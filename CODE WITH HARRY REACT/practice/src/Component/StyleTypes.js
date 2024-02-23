import React from 'react'
// for 2nd style method
import './Mystyle.css';  
// for 3rd style method
import style from './Custome.module.css'

export default function StyleTypes() {
  return (
    <>
    {/* // 1.using external css file */}
    <div>
      <h1 className='container'>This is 1st type of Style ..<small>using this we import external css file and use it.</small></h1>
    </div>
    {/* // 2.inline css  */}
    <div>
    <h1 style={{color:'red',backgroundColor:'black'}}>This is 2nd type of style ..<small>hear we use inline css</small></h1>
    </div>
    {/* 3rd type using module.css file */}
    <div>   
        <h1 className={style.sucess}>This is 3rd type of css style..<small>hear we use external module.css file to use style.</small></h1>
    </div>
    </>
     )
}
