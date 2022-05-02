import { Box, Image, } from '@skynexui/components';
import unknowIcon from "../../../../../public/unknown-user.jpg"
import colors from "../../../../common/colors.json"
export default function RecievedMessage({messageData}) {
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
          src={unknowIcon.src}
          styleSheet={{ width: '2.5rem' }}
        />
        <span style={{ marginLeft: '0.5rem' }}>{messageData.username}</span>
        <span style={{ marginLeft: '0.5rem', color: colors.neutrals['white-500'] }}>
          {messageData.created_at}
        </span>

      </Box>
    </li>
  )
}