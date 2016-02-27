import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class ButtonGroup extends Component {

  static propTypes = {
    icon: PropTypes.bool,
    vertical: PropTypes.bool,
    color: SemanticUiPropTypes.color,
    labeledIcon: PropTypes.bool,
    basic: PropTypes.bool,
    size: SemanticUiPropTypes.size
  }

  render() {
    const { className, color, labeledIcon, size } = this.props
    const classesFromProps = propsToClasses(['icon', 'vertical', 'basic'], this.props)
    const classes = classNames(color, 'ui', size, classesFromProps,
                               {'labeled icon': labeledIcon}, 'buttons', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
