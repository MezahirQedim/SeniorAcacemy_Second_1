import React from 'react'
import {  useLang, useTheme } from '../../context'


const Table = () => {

  const data = useTheme()
  const lang = useLang()

  return (
    <div className='text-white' style={{backgroundColor: data.theme, height: "400px"}}>
      
      {lang.change.table}
      
      </div>
  )
}

export default Table