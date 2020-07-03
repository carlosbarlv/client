import React from 'react'
import { CustomMenu, CustomMenuItem, CustomSubMenu } from '../components'
import { useHistory } from 'react-router-dom'

let history: any

const getMenuItems = (userOptions: object[] = []) => {
  return userOptions.map((route: any) => {
    return route.children && route.children.length ? (
      <CustomSubMenu key={route.id} title={route.name}>
        {getMenuItems(route.children)}
      </CustomSubMenu>
    ) : (
      <CustomMenuItem
        key={route.id}
        onClick={() => {
          if (route.MODULO) history.push(route.MODULO)
        }}
      >
        {route.name}
      </CustomMenuItem>
    )
  })
}

const DrawerOptions = (props: any) => {
  const { userMenuOptions = [] } = props
  history = useHistory()
  return (
    <CustomMenu mode={'inline'} inlineIndent={10}>
      {getMenuItems(userMenuOptions)}
    </CustomMenu>
  )
}

export default DrawerOptions
