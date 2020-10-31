import React from 'react'
import { CustomCol, CustomForm, CustomInput, CustomRow } from '.'

const ComponenteNuevo = (): React.ReactElement => {
  return (
    <div>
      <CustomForm>
        <CustomRow>
          <CustomCol xs={24} sm={8}>
            <CustomInput placeholder={'DKDKDLDKALSKSLKDSLDDSLDKSLDDLK'} />
          </CustomCol>
          <CustomCol xs={24} sm={16}>
            <CustomInput placeholder={'Adios'} />
          </CustomCol>
        </CustomRow>
      </CustomForm>
    </div>
  )
}

export default ComponenteNuevo
