import Chat from "components/Chat/Chat.jsx";
import { Box } from '@skynexui/components';
import {defaultSection} from "common/styles/defaultSection"


export default function Home() {

  return (
    <main>
     <Box
      as="section"
      styleSheet={defaultSection}
     >
        <Chat />
     </Box>
    </main>
  )
}
