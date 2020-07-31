import React, { ReactElement, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import {
  Copyright,
  CustomContent,
  CustomDivider,
  CustomFooter,
  CustomHeader,
  CustomLayout,
  CustomSider,
  CustomText,
  DrawerOptions,
} from '../components'
import { getMenuOptions } from '../actions/user'
import { getBusinessInfo } from '../actions/business'
import { getSessionInfo, isLoggedIn, removeSession } from '../utils/session'
import { PATH_LOGIN } from '../constants/routes'
import { StoreState } from '../reducers'

const SiderHeaderContainer = styled.div`
  text-align: center;

  .logo {
    width: 100px;
  }

  .username {
    display: block;
    font-weight: bold;
  }
`

const HeaderTextContainer = styled(CustomText)`
  color: #fff;
  font-size: 20px;
`

type Props = {
  children: ReactElement[] | ReactElement
}

const ProtectedRoutesWrapper = (props: Props): ReactElement => {
  const dispatch = useDispatch()
  const userStore = useSelector((state: StoreState) => state.user)
  const businessStore = useSelector((state: StoreState) => state.business)
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  const { username = '', businessId = '' } = getSessionInfo()
  const handleDrawerToggle = () => {
    setIsCollapsed(!isCollapsed)
  }

  useEffect(() => {
    dispatch(getMenuOptions(username, businessId))
    dispatch(getBusinessInfo(businessId))
  }, [businessId, username, dispatch])

  if (!isLoggedIn()) {
    removeSession()

    return <Redirect to={PATH_LOGIN} />
  }

  return (
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
        <CustomContent style={{ padding: '15px' }}>
          {props.children}
        </CustomContent>
        <CustomFooter style={{ textAlign: 'center' }}>
          <Copyright />
        </CustomFooter>
      </CustomLayout>
    </CustomLayout>
  )
}

export default ProtectedRoutesWrapper
