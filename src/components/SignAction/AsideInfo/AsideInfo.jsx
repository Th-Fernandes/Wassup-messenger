import wassupIcon from '../../../../public/wassup-icon.png';
import { Box, Image, Text } from '@skynexui/components';
import colors from "common/colors.json";


export default function AsideInfo() {
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
      <Image 
        styleSheet={{
          width: '15rem',
          margin: '0 auto 2rem '
        }}
        src={wassupIcon.src} 
        alt="ícone do wassup messenger na cor roxa" 
      />
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