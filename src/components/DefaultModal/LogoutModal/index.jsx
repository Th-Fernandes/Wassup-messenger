import { DefaultModal } from "../DefaultModal";
import { Box, Button } from '@skynexui/components';
import colors from "../../../common/colors.json";

export function LogoutModal({ signOut, closeModal }) {
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
              onClick={() => signOut()}
              styleSheet={{ width: '10rem', fontWeight: 'bold' }}
            />
          </li>
        </ul>
      </Box>
    </DefaultModal>
  )
}