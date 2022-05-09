import { DefaultModal } from '../../../DefaultModal/DefaultModal';
import { Box, Button } from '@skynexui/components';
import colors from "../../../../common/colors.json"
import {useState} from 'react'

export function LogoutModal({closeModal, SignOut}) {
  const [onLoading, setOnLoading] = useState()

  return (
    <DefaultModal>
    <Box styleSheet={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '4rem' }}>Deseja mesmo sair?</h2>
      <p style={{ fontSize: '2.5rem' }}>você confirma que deseja sair de sua conta?</p>

      <ul style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
        <li>
          <Button
            buttonColors={{
              contrastColor: '#ffffff',
            }}
            label='cancelar'
            onClick={() => closeModal()}
            styleSheet={{
              backgroundColor: colors.neutrals['white-100'],
              color: colors.neutrals['black-500'],
              width: '15rem',
              fontWeight: 'bold'
            }}
          />

        </li>
        <li>
          <Button
            label='sair'
            onClick={() => {
              setOnLoading(true)
              SignOut()
              setOnLoading(false)
            }}
            styleSheet={{ width: '10rem', fontWeight: 'bold' }}
          />
        </li>
      </ul>
    </Box>
  </DefaultModal>
  )
}