import React, {Component } from 'react'
import Style from './index.css'
import cs from 'classnames'
import iconfont from 'STYLES/iconfont.css'
import { Route } from 'react-router'

class ListItem extends Component {
  render () {
    const { data, handleClick } = this.props

    return (
      <Route path={`${data.router}`} children={({ match }) => (
        <div
          className={
            cs(
              iconfont['iconfont'],
              iconfont[data.icon],
              Style['listItem'],
              { [Style['active']]: match }
            )
          }
          onClick={ () => {
            handleClick(data.select ? data.select : data.router)
          }}
        >
          { data.title }
        </div>
      )}/>
    )
  }
}

export default ListItem
