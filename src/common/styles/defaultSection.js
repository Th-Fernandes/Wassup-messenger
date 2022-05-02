import colors from "../colors.json"

const defaultSection = {
  width: '100%',
  backgroundColor: `${colors.neutrals["black-500"]}`,
  height: {xs: '100vh', xl: '97vh'},
  borderRadius: {xs: '0', xl: '3.2rem'},
  padding: {sm: "0.8rem" ,md: '1.6rem', lg: '3.2rem'},
}

const fullDefaultSection = {
  ...defaultSection,
  padding: 0
}

export {defaultSection, fullDefaultSection}