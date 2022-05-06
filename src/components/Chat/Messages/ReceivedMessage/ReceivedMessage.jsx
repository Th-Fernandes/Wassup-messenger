import { Box } from '@skynexui/components';
import colors from "../../../../common/colors.json"
import {UserCircle} from 'phosphor-react'

export default function ReceivedMessage({messageData}) {

  function handleMessageTime(messageDate) {
    //o dado recebido como argumento é como isso: 2022-05-02T18:37:53.961699+00:00
    const divideInfo = messageDate.split('T')
    const getHour = divideInfo[1].split('.')

    return getHour[0]
  }

  return (
    <li
      style={{ margin: '3rem 0',  display: 'flex', flexWrap: 'wrap'}}
    >
      <Box
        styleSheet={{
          backgroundColor: colors.neutrals['black-200'],
          maxWidth: '50rem',
          padding: '1.6rem 1.2rem',
          borderRadius: '1.6rem 1.6rem 1.6rem 0',
          wordBreak: 'break-all',
          fontSize: '1.4rem'
        }}
      >
        {messageData.message}
      </Box>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center',
          marginTop: '1rem', 
          width: '100%'
        }}
      >
        <UserCircle size={26}  weight="fill" />
        <span style={{ marginLeft: '0.5rem' }}>{messageData.username}</span>
        <span style={{ marginLeft: '0.5rem', color: colors.neutrals['white-500'] }}>
          { handleMessageTime(messageData.created_at) }
        </span>

      </Box>
    </li>
  )
}