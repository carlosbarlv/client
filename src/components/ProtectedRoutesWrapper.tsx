import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import {
  CustomLayout,
  CustomSider,
  CustomFooter,
  CustomHeader,
  CustomContent,
  CustomText,
  Copyright,
  CustomDivider,
  DrawerOptions,
} from '../components';
import { getMenuOptions } from '../actions/user';
import { getBusinessInfo } from '../actions/business';
import { isLoggedIn, getSessionInfo } from '../utils/session';
import { PATH_LOGIN } from '../constants/routes';

const SiderHeaderContainer = styled.div`
  text-align: center;

  .logo {
    width: 100px;
  }

  .username {
    display: block;
    font-weight: bold;
  }
`;

const HeaderTextContainer = styled(CustomText)`
  color: #fff;
  font-size: 20px;
`;

const ProtectedRoutesWrapper = (props: any) => {
  const dispatch = useDispatch(),
    userStore = useSelector((state: any) => state.user),
    businessStore = useSelector((state: any) => state.business),
    [isCollapsed, setIsCollapsed] = React.useState(true),
    { username = '', businessId = '' } = getSessionInfo(),
    handleDrawerToggle = () => {
      setIsCollapsed(!isCollapsed);
    };

  useEffect(() => {
    dispatch(getMenuOptions(username, businessId));
    dispatch(getBusinessInfo(businessId));
  }, [businessId, username, dispatch]);

  return isLoggedIn() ? (
    <CustomLayout>
      <CustomSider
        collapsed={isCollapsed}
        collapsedWidth={0}
        width={240}
        theme="light"
      >
        <SiderHeaderContainer>
          <img
            className="logo"
            src={`/assets/bpstec_logo.jpg`}
            alt={'Logo BPSTEC'}
          />
          <p className="username">{username}</p>
          <CustomDivider />
        </SiderHeaderContainer>
        <DrawerOptions userMenuOptions={userStore.menuOptions} />
      </CustomSider>
      <CustomLayout>
        <CustomHeader
          style={{
            // TODO: These colors are not final. We should put app colors in a separate place.
            backgroundColor: '#3f51b5',
            color: '#fff',
            fontSize: '25px',
            padding: '0 15px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {React.createElement(
            isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              onClick: handleDrawerToggle,
              style: {
                fontSize: '18px',
                padding: '0 15px',
                cursor: 'pointer',
              },
            }
          )}
          <HeaderTextContainer ellipsis={true}>
            {businessStore.name}{' '}
            {businessStore.ccName ? ` - ${businessStore.ccName}` : ''}
          </HeaderTextContainer>
        </CustomHeader>
        <CustomContent>{props.children}</CustomContent>
        <CustomFooter style={{ textAlign: 'center' }}>
          <Copyright />
        </CustomFooter>
      </CustomLayout>
    </CustomLayout>
  ) : (
    <Redirect to={PATH_LOGIN} />
  );
};

export default ProtectedRoutesWrapper;
