import { Box } from '@skynexui/components';
import { fullDefaultSection } from "../src/common/styles/defaultSection"
import { SignAction } from "../src/components/SignAction"
import colors from "../src/common/colors.json";


export default function Login() {
  return (
    <main>
      <Box
        as="section"
        styleSheet={{    
          width: '100%',
          backgroundColor: `${colors.neutrals["black-500"]}`,
          height: {xs: '100vh', xl: '97vh'},
          borderRadius: {xs: '0', xl: '3.2rem'},
          padding: {sm: "0.8rem" ,md: '1.6rem', lg: '3.2rem'},
          display: 'flex'
        }}
     >
       <SignAction />
     </Box>
    </main>
  )
}