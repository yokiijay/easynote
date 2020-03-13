import { createModel } from 'hox'
import { useState } from 'react'
import { uuid } from 'uuidv4'

const initData = [
  {
    id: '0',
    catagory: 'note',
    contentId: '0',
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '🌈🌈Easynote是真的🐂🍺',
      body: [
        {
          id: uuid(),
          behave: 'h1',
          content: 'dasdafafadasdad',
        },
        {
          id: uuid(),
          behave: 'link',
          content: '百度',
          linkUrl: 'https://www.baidu.com'
        }
      ]
    }
  },
  {
    id: '1',
    catagory: 'note',
    contentId: '1',
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '把👴整笑了',
      body: [
        {
          id: uuid(),
          behave: 'h1',
          content: 'dasdafafadasdad'
        },
        {
          id: uuid(),
          behave: 'link',
          content: '百度',
          linkUrl: 'https://www.baidu.com'
        }
      ]
    }
  }
]

function useDataModal() {
  const [data, setData] = useState(initData)

  const appenBody = ({ index, contentId, behave, content, linkUrl }) => {
    setData(list=>{
      const copyList = JSON.parse(JSON.stringify(list))
      copyList.forEach(item=>{
        if(item.contentId===contentId){
          console.log( index )
          item.content.body.splice(index+1,0,{
            id: uuid(),
            behave,
            content,
            linkUrl
          })
        }
      })

      return copyList
    })
  }

  return {
    data,
    setData,
    appenBody
  }
}

export default createModel(useDataModal)
