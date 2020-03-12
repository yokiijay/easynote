/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import useThemeModel from '../models/useThemeModel'


const EditCell = ({ behave, children, onKeyDown, preventDefault }) => {
  const { theme } = useThemeModel()

  const behaveStyle = {
    h1: css`
      font-size: 30px;
      font-weight: bolder;
      margin: 20px 0;
    `,
    h2: css`
      font-size: 24px;
      font-weight: bold;
      margin: 14px 0;
    `,
    h3: css`
      font-size: 18px;
      font-weight: bold;
      margin: 12px 0;
    `,
    body: css`
      font-size: 15px;
      font-weight: normal;
      margin: 8px 0;
    `,
    link: css`
      font-size: 15px;
      font-weight: normal;
      color: ${theme.primary.base};
      margin: 8px 0;
    `
  }

  const handleKeyDown = ev=>{
    if(preventDefault) ev.preventDefault()
    onKeyDown && onKeyDown(ev.key)
  }

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      spellCheck='false'
      onKeyDown={handleKeyDown}
      css={css`
        ${behaveStyle[behave]};
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        min-height: 30px;
        /* background: ${theme.background.backdrop}; */
        position: relative;
        outline: none;
        caret-color: ${theme.primary.darken};


        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 0%;
          height: 1px;
          opacity: 0;
          background: ${theme.primary.base};
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          transition: .2s;
        }

        &:focus::after {
          width: 100%;
          opacity: 1;
          height: 2px;
        }

      `}
    >
      {children}
    </div>
  )
}

export default EditCell
