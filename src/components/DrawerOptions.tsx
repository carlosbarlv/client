import React from 'react';
import { CustomMenu, CustomSubMenu, CustomMenuItem } from '../components';

const getMenuItems = (userOptions: object[] = []) => {
  return userOptions.map((route: any) => {
    return route.children && route.children.length ? (
      <CustomSubMenu key={route.id} title={route.name}>
        {getMenuItems(route.children)}
      </CustomSubMenu>
    ) : (
      <CustomMenuItem key={route.id}>{route.name}</CustomMenuItem>
    );
  });
};

const DrawerOptions = (props: any) => {
  const { userMenuOptions = [] } = props;

  return (
    <CustomMenu mode={'inline'} inlineIndent={10}>
      {getMenuItems(userMenuOptions)}
    </CustomMenu>
  );
};

export default DrawerOptions;
