import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import spellNumber from '../../util/spellNumber'
import propsToClasses from '../../util/propsToClasses'

export default class Row extends Component {

  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    centered: PropTypes.bool
  }

  columnClasses() {
    const { columns } = this.props

    if(columns) return `${spellNumber(columns)} column`
  }

  render() {
    const { style, className } = this.props
    const classesFromProps = propsToClasses(['centered'], this.props)
    let classes = classNames('ui', this.columnClasses(), classesFromProps, 'row', className)

    return <div className={classes} style={style}>{this.props.children}</div>
  }
}

