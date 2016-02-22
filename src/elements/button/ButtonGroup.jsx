import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class Button extends Component {

  propTypes = {
    icon: PropTypes.bool,
    color: SemanticUiPropTypes.color
  }

  render() {
    const { className, color } = this.props
    const classesFromProps = propsToClasses(['icon'], this.props)
    const classes = classNames(color, 'ui', classesFromProps, 'buttons', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
