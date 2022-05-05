import { Box } from '@skynexui/components';
import {fullDefaultSection} from "../src/common/styles/defaultSection"
import SignAction from "../src/components/SignAction/SignAction"


export default function Login() {
  return (
    <main>
      <Box
        as="section"
        styleSheet={{
          ...fullDefaultSection,
          display: 'flex'
        }}
     >
       <SignAction />
     </Box>
    </main>
  )
}