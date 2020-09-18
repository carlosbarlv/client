import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { CustomMenu, CustomMenuItem, CustomSubMenu } from '../components'
import { MenuOption } from '../reducers/user'

let history

const getMenuItems = (userOptions: MenuOption[]) => {
  return userOptions.map((route: MenuOption) => {
    return route.CHILDREN && route.CHILDREN.length ? (
      <CustomSubMenu key={route.ID} title={route.NAME}>
        {getMenuItems(route.CHILDREN)}
      </CustomSubMenu>
    ) : (
      <CustomMenuItem
        key={route.ID}
        onClick={() => {
          if (route.MODULE) {
            history.push(route.MODULE, { activityId: route.ID })
          }
        }}
      >
        {route.NAME}
      </CustomMenuItem>
    )
  })
}

type Props = {
  userMenuOptions: MenuOption[]
}

const DrawerOptions = (props: Props): ReactElement => {
  history = useHistory()

  return (
    <CustomMenu mode={'inline'} inlineIndent={10}>
      {getMenuItems(props.userMenuOptions)}
    </CustomMenu>
  )
}

export default DrawerOptions
