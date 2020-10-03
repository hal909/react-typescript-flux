import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const Font = {
  // font here
}

export const colors = {
  // colors here
}

const breakpoints = createBreakpoints({
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1800
  }
})

const defaultTheme =  {
  breakpoints: breakpoints
}

export default defaultTheme;