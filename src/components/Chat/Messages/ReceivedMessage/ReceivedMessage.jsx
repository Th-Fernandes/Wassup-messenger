import { Box, Image, } from '@skynexui/components';
import unknownIcon from "../../../../../public/unknown-user.jpg"
import colors from "../../../../common/colors.json"
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
          padding: '1.6rem 0.8rem',
          borderRadius: '1.6rem 1.6rem 1.6rem 0'
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
        <Image
          src={unknownIcon.src}
          styleSheet={{ width: '2.5rem' }}
        />
        <span style={{ marginLeft: '0.5rem' }}>{messageData.username}</span>
        <span style={{ marginLeft: '0.5rem', color: colors.neutrals['white-500'] }}>
          {
            handleMessageTime(messageData.created_at)
            
          }
        </span>

      </Box>
    </li>
  )
}