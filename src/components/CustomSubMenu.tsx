import React, { ReactNode } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

interface TitleEventEntity {
  key: string;
  domEvent: Event;
}

interface CustomSubMenuProps {
  popupClassName?: string;
  disabled?: boolean;
  key?: string;
  title?: string | ReactNode;
  icon?: ReactNode;
  onTitleClick?: (e: TitleEventEntity) => void;
}

const CustomSubMenu: React.FunctionComponent<CustomSubMenuProps> = (
  props
): React.ReactElement => <SubMenu {...props}>{props.children}</SubMenu>;

CustomSubMenu.defaultProps = {
  disabled: false,
};

export default CustomSubMenu;
