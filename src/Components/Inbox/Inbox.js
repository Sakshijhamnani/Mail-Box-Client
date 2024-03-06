import React, { useEffect, useState } from 'react';
import classes from './Inbox.module.css';
import SideBar from '../SideBar/SideBar';

const fetchData = async () => {
  const email = localStorage.getItem('email');
  const newEmail = email.replace(/[^\w\s]/gi, '');

  if (!email) {
    console.error('Email not found in localStorage');
    return;
  }

  const response = await fetch(`https://mail-client-box-5531a-default-rtdb.firebaseio.com/${newEmail}.json`);

  if (!response.ok) {
    console.error('Failed to fetch cart items');
    return;
  }

  const existingItems = await response.json();
  return existingItems ? Object.values(existingItems) : [];
};

const Inbox = () => {
  const [items, setItems] = useState(['hey']);

  useEffect(() => {
    fetchData().then((data) => {
      setItems(data);
      console.log(items)
    });
  }, []); // Empty dependency array means this effect runs only once when component mounts

  return (
    <div className={classes.div}>
      <SideBar />
      <div className={classes.inbox}>
        <h1>Inbox</h1>
        <ul className={classes.ul}>
          {items.map((item, index) => (
            <li key={index} className={classes.li}>
              <div className={classes.firstLine}>
                <h5 className={classes.email}>{item.from}</h5>
                <h6>{item.time}</h6>
              </div>
              <div className={classes.secondLine}>
                <h6 className={classes.subject}>{item.subject}</h6>
                <p>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <button onClick={()=>fetchData()}>Fetch</button> */}
    </div>
  );
};

export default Inbox;
