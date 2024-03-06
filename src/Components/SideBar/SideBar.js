import React from 'react'
import classes from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={classes.div}>
        <ul className={classes.ul}>
            <li className={classes.li}>Compose</li>
            <li className={classes.li}>Inbox</li>
            <li className={classes.li}>Sent Mail</li>
        </ul>
    </div>
  )
}

export default SideBar