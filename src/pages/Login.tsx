import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Modal } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import {
  Copyright,
  CustomAvatar,
  CustomButton,
  CustomCol,
  CustomContent,
  CustomDivider,
  CustomForm,
  CustomFormItem,
  CustomInput,
  CustomLayout,
  CustomPasswordInput,
  CustomRow,
  CustomTitle,
} from '../components'
import { authenticateUser, authenticateUserHideError } from '../actions/login'
import { isLoggedIn } from '../utils/session'
import { PATH_MAIN } from '../constants/routes'

type State = {
  isSubmitted: boolean
  showAuthenticationError: boolean
}

type Props = {
  login: State
}

const StyledCol = styled(CustomCol)`
  height: 100%;
`

const StyledRow = styled(CustomRow)`
  height: 100%;
`

const ContentContainer = styled.div`
  text-align: center;
  background-color: white;
  height: 100%;
  padding: 35px 20px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

const FormContainer = styled.div`
  text-align: left;
`

const Login: React.FunctionComponent = () => {
  const { showAuthenticationError, isSubmitted } = useSelector(
    (state: Props) => state.login
  )
  const dispatch = useDispatch()

  if (isLoggedIn()) {
    return <Redirect to={PATH_MAIN} />
  }

  if (showAuthenticationError) {
    Modal.error({
      title: 'Error',
      content:
        'Ocurrió un error al iniciar sesión, por favor verifique sus datos.',
      onOk() {
        dispatch(authenticateUserHideError())
      },
    })
  }

  return (
    <CustomLayout>
      <CustomContent>
        <StyledRow justify={'end'}>
          <StyledCol xs={24} sm={16} md={10}>
            <ContentContainer>
              <CustomAvatar size={40} icon={<LockOutlined />} />
              <CustomTitle level={2}>Iniciar Sesión</CustomTitle>
              <CustomDivider />
              <CustomForm
                onFinish={({ username, password }) => {
                  dispatch(authenticateUser(username, password))
                }}
              >
                <FormContainer>
                  <CustomFormItem
                    required
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'El campo Usuario es requerido',
                      },
                    ]}
                  >
                    <CustomInput
                      prefix={<UserOutlined />}
                      placeholder={'Usuario'}
                    />
                  </CustomFormItem>
                  <CustomFormItem
                    required
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'El campo Contraseña es requerido',
                      },
                    ]}
                  >
                    <CustomPasswordInput
                      prefix={<LockOutlined />}
                      placeholder={'Contraseña'}
                    />
                  </CustomFormItem>
                </FormContainer>
                <CustomFormItem>
                  <CustomButton
                    htmlType="submit"
                    type="primary"
                    disabled={isSubmitted}
                    loading={isSubmitted}
                  >
                    Iniciar Sesión
                  </CustomButton>
                </CustomFormItem>
              </CustomForm>
              <Copyright />
            </ContentContainer>
          </StyledCol>
        </StyledRow>
      </CustomContent>
    </CustomLayout>
  )
}

export default Login
