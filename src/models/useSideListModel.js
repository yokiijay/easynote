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
  },
  {
    id: '2',
    catagory: 'note',
    contentId: '2',
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '第一次使用Easynote就得心应手',
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
  },
  {
    id: '3',
    catagory: 'note',
    contentId: '3',
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '🌈🌈Easynote是真的🐂🍺',
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
  },
  {
    id: '4',
    catagory: 'note',
    contentId: '4',
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '🌈🌈Easynote是真的🐂🍺',
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
  },
  {
    id: '5',
    catagory: 'note',
    contentId: '5',
    createdTime: '2020-03-10',
    updatedTime: '2020-03-11 00:52:49',
    content: {
      title: '🌈🌈Easynote是真的🐂🍺',
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

function useSideListModel() {
  const [list, setList] = useState(initData)

  const appenBody = ({ index, contentId, behave, content, linkUrl }) => {
    // console.log(
    //   list
    //     .find(item => item.contentId === contentId)
    //     .content.body.concat({
    //       id: uuid(),
    //       behave,
    //       content,
    //       linkUrl
    //     })
    // )
    setList(list=>{
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
    list,
    setList,
    appenBody
  }
}

export default createModel(useSideListModel)
