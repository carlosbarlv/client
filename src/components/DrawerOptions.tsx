import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import menuOptions from '../constants/menuOptions';

const getMenuItems = (routes: any = [], userOptions: string[] = []) => {
  return routes.map((route: any) => {
    if (userOptions.includes(route.id)) {
      return (
        <TreeItem key={route.id} nodeId={route.id} label={route.name}>
          {route.children ? getMenuItems(route.children, userOptions) : null}
        </TreeItem>
      );
    } else {
      return null;
    }
  });
};

const DrawerOptions = (props: any) => {
  const { userMenuOptions = [] } = props;

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {getMenuItems(menuOptions, userMenuOptions)}
    </TreeView>
  );
};

export default DrawerOptions;
