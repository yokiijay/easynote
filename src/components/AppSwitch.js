import React, { useState, useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import useThemeModel from '../models/useThemeModel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const AppSwitch = () => {
  const { theme } = useThemeModel()
  const [active, setActive] = useState(0)

  useEffect(() => {
    window.addEventListener('keydown', ev => {
      if (ev.key === 'ArrowLeft') setActive(prevActive=>(prevActive+1)%2)
      if (ev.key === 'ArrowRight') setActive(prevActive=>(prevActive+1)%2)
      return
    })
    return () =>
      window.removeEventListener('keydown', ev => {
        if (ev.key === 'ArrowLeft') setActive(prevActive=>(prevActive+1)%2)
      if (ev.key === 'ArrowRight') setActive(prevActive=>(prevActive+1)%2)
        return
      })
  }, [])

  return (
    <div
      css={css`
        margin: 0 auto;
        min-width: 100px;
        height: 36px;
        background: ${theme.background.backface};
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: ${theme.color.caption};

        .note,
        .todo {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          height: 100%;
          border-radius: 50px;
          cursor: pointer;
        }

        .active {
          padding: 0 24px;
          color: ${theme.button.color};
          background: ${theme.button.background};
        }
      `}
    >
      <div
        onClick={() => setActive(0)}
        className={`note ${active === 0 ? 'active' : null}`}
      >
        {active === 0 ? '笔记' : <FontAwesomeIcon icon={faAddressBook} />}
      </div>
      <div
        onClick={() => setActive(1)}
        className={`todo ${active === 1 ? 'active' : null}`}
      >
        {active === 1 ? '待办' : <FontAwesomeIcon icon={faCheckSquare} />}
      </div>
    </div>
  )
}

export default AppSwitch
