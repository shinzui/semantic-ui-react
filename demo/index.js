import React, { Component }  from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.css'

import { Container, Message, Grid, Column, Menu } from '../src/index'
import FormDemo from './FormDemo'
import ButtonDemo from './ButtonDemo'
import DividerDemo from './DividerDemo'
import ImageDemo from './ImageDemo'

const root = document.createElement('div')
document.body.appendChild(root)

class Page extends Component {

  constructor(props) {
    super(props)
    this.onHashChange = ::this.onHashChange
  }

  state = {
    Page:  undefined
  }

  componentDidMount() {
    this.setPage()
    window.addEventListener('hashchange', this.onHashChange)
  }

  setPage() {
    const pages = {
      forms: FormDemo,
      buttons: ButtonDemo,
      images: ImageDemo,
      divider: DividerDemo
    }

    let hash = window.location.hash
    let newPage = pages[hash.substring(1)]

    if(newPage) {
      this.setState({ Page: newPage})
    } else {
      this.setState({ Page: undefined })
    }
  }

  onHashChange()  {
    this.setPage()
  }


  render() {
    const { Page } = this.state

    const content = Page ? <Page /> : undefined

    return (
      <Grid page>
        <Column width={3}>
          <Menu>
            <a className='item' href='#forms'>Form Demo</a>
            <a className='item' href='#buttons'>Button Demo</a>
            <a className='item' href='#images'>Images Demo</a>
            <a className='item' href='#divider'>Divider Demo</a>
          </Menu>
        </Column>
        <Column width={13}>
          {content}
        </Column>
      </Grid>
    )
  }
}

ReactDOM.render(<Page />, root)
