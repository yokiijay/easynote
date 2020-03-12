import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import MenuBar from './MenuBar'
import useThemeModel from '../models/useThemeModel'
import AppSwitch from './AppSwitch'

const Header = ({toggleSideListOn}) => {
  const {theme} = useThemeModel()

  return(
    <div css={css`
      padding: 0 17px;
      height: 68px;
      border-bottom: 1px solid ${theme.color.divider};
      display: flex;
      align-items: center;
    `}>
      <MenuBar toggleSideListOn={toggleSideListOn} />
      <AppSwitch />
    </div>
  )
}

export default React.memo(Header)