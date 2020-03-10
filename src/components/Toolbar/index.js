import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ToolButton from './ToolButton'
import { faFont, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import useThemeModel from '../../models/useThemeModel'

const Toolbar = ({ ...props }) => {
  const {theme, setThemeMode} = useThemeModel()

  let ifDark = false
  if(theme.mode==='dark'){
    ifDark = true
  }else if(theme.mode==='default'){
    ifDark = false
  }

  return (
    <div
      {...props}
    >
      <ToolButton icon={faFont} style={{marginBottom: '20px'}} />
      <ToolButton icon={ifDark?faSun:faMoon} variant='default' onClick={()=>ifDark?setThemeMode('default'):setThemeMode('dark')} />
    </div>
  )
}

export default Toolbar
