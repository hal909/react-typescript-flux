import React, { Component } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { createStyles, withStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import {
  ERROR,
} from '../../actions'

import Store from "../../stores"

const emitter = Store.emitter
const dispatcher = Store.dispatcher
const store = Store.store

const styles = (theme: Theme) => createStyles({
  root: {
  },
});


interface Props extends RouteComponentProps {
  // props interface
}

class Footer extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>Footer</div>
    )
  }
}

export default withRouter(withStyles(styles)(Footer));