import React from 'react'
import { Addresses, CustomRow, Phone, SocialNetworks } from '.'

const AddressesAndPhone: React.FunctionComponent = () => {
  return (
    <CustomRow justify={'space-between'} style={{ marginBottom: 10 }}>
      <Addresses />
      <Phone />
      <SocialNetworks />
    </CustomRow>
  )
}

export default AddressesAndPhone
