import { withStyles, createStyleSheet } from 'material-ui/styles'

const styles = createStyleSheet({ root: { color: 'red' } })

export default withStyles(styles)(({ children, classes }) => <p className={classes.root}>{ children }</p>)
