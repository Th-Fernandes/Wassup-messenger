import { ChatsCircle } from "phosphor-react" 
import { Box,  Text } from '@skynexui/components';
import colors from "../../../common/colors.json";


export function AsideInfo() {
  return (
    <Box
      styleSheet={{
        textAlign: 'center',
        maxWidth: '30rem',
        display: {xs: 'none', lg: 'flex'},
        visibility: {xs: 'hidden', lg: 'visible'}, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexWrap: 'wrap', alignContent: 'center',
        backgroundColor: colors.primary['purple'],
        height: '100%'
      }}
    >
      <ChatsCircle size={96} color="#A225DB" weight="fill" />
      <article>
        <Text
          as='h2'
          styleSheet={{ 
            fontSize: '2.4rem' ,
            fontFamily: "'Lexend Deca', sans-serif"
          }}
          
        >
          WASSUP MESSENGER
        </Text>
        <Text
          as='p'
          styleSheet={{ 
            fontSize: '1.4rem' ,
            fontFamily: "'Lexend Deca', sans-serif",
            color: colors.neutrals['white-500']
          }}
          
        >
          rápido. simples. Do jeito que você gosta.
          </Text>
      </article>
    </Box>
  )
}