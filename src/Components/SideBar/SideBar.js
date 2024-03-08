import React from 'react'
import classes from './SideBar.module.css'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const count=useSelector(state=>state.mail.count)
  return (
    <div className={classes.div}>
        <ul className={classes.ul}>
            <li className={classes.li}>Compose</li>
            <li className={classes.li}>Inbox <span className={classes.count}>{count}</span></li>
            <li className={classes.li}>Sent Mail</li>
        </ul>
    </div>
  )
}

export default SideBar