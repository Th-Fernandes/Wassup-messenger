import { Box, Text, Image, TextField } from '@skynexui/components';
import colors from "common/colors.json"
import unknowIcon from "../../../../public/unknown-user.jpg"
import sendIcon from "../../../../public/send-message.svg"

export default function Messages() {
  return (
    <>
    <Box
      styleSheet={{
        backgroundColor: colors.neutrals['black-300'],
        padding: '1.6rem',
        marginTop: '1.2rem',
        borderRadius: '0.8rem',
        height: {xs: '95%', md: '95%'},
        overflowY: 'scroll',
      }}
    >
      <Box as='ul'
      >
        {
          [
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            { name: 'thiago', date: `${new Date().getHours()}:${new Date().getMinutes()}`, message: 'kkkk' },
            
          ]
            .map(el => (
              <li
                style={{margin: '3rem 0' }}
              >
                <Box
                  styleSheet={{
                    backgroundColor: colors.neutrals['black-200'],
                    maxWidth: '50rem',
                    padding: '1.6rem 0.8rem',
                    borderRadius: '1.6rem 1.6rem 1.6rem 0'
                  }}
                >
                  {el.message}
                </Box>
                <Box 
                  styleSheet={{
                    display: 'flex', alignItems: 'center',
                    marginTop: '1rem'
                  }}  
                >
                  <Image
                    src={unknowIcon.src}
                    styleSheet={{ width: '2.5rem' }}
                  />
                  <span style={{marginLeft: '0.5rem'}}>{el.name}</span>
                  <span style={{marginLeft: '0.5rem', color: colors.neutrals['white-500']}}>{el.date}</span>

                </Box>
              </li>
            ))
        }
      </Box>
    </Box>

    <Box
    styleSheet={{
      position: 'relative',
      top: '-70px',
      zIndex: 999,
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '0 2.5rem'
    }}
    >

      <TextField 
        rounded='full'
        styleSheet={{width: '90%'}} 
      />
      <Image 
        src={sendIcon.src}
        styleSheet={{cursor: 'pointer'}}
      />
    </Box>
    </>

  )
}