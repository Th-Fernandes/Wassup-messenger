import { Box, Image, } from '@skynexui/components';
import colors from '../../../../common/colors.json'


export default function SendedMessage({messageData}) {
  return(
    <li
    style={{ 
      margin: '3rem 0', 
      display: 'flex',
      justifyContent: 'flex-end'
    }}
    >
      <Box
        styleSheet={{
          backgroundColor: colors.primary['purple'],
          maxWidth: '50rem',
          padding: '1.6rem 1.2rem',
          borderRadius: '1.6rem 1.6rem  0 1.6rem',
          wordBreak: 'break-all',
          fontSize: '1.4rem'
        }}
      >
        {messageData.message}
      </Box>
    </li>
  )
}