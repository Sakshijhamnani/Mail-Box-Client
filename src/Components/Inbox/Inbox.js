import React, { useEffect, useState } from 'react';
import classes from './Inbox.module.css';
import SideBar from '../SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, viewMail } from '../store/MailSlice';
import { Link, NavLink } from 'react-router-dom';

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

  const data = await response.json();
  // return existingItems ? Object.values(existingItems):[] ;
  if (data && typeof data === "object") {
    const dataArray = Object.entries(data).map(([idd, entry]) => ({
      idd,
      ...entry,
    }));
    return dataArray
  } else {
    return []
  }
};

const Inbox = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const mailItems = useSelector(state => state.mail.items);
  const email = localStorage.getItem('email');
     const newEmail = email.replace(/[^\w\s]/gi, '');

  useEffect(() => {
    fetchData().then((data) => {
      setItems(data);
      dispatch(viewMail(data));
    });
  }, []); 

  useEffect(() => {
    const blueTickCount = items.filter((item) => item.blueTick).length;
    dispatch(increaseCount(blueTickCount));
  }, [items, dispatch]);

  const blueTickHandler=async(id)=>{
    try {
      const response = await fetch(
        `https://mail-client-box-5531a-default-rtdb.firebaseio.com/${newEmail}/${id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            blueTick: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to update blue tick (HTTP ${response.status})`);
      }
      setItems((prevData) =>
        prevData.map((item) =>
          item.idd === id ? { ...item, blueTick: false } : item
        )
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  
  console.log('Outside reducer:', mailItems);

  return (
    <div className={classes.div}>
      <SideBar />
      <div className={classes.inbox}>
        <h1>Inbox</h1>
        <ul className={classes.ul}>
      
          {items.map((item, index) => (
                <NavLink to={`maildetail/${item.id}`} onClick={()=>blueTickHandler(item.idd)}>
            <li key={index} className={classes.li}>
              <div className={classes.firstLine}>
                {item.blueTick && <p className={classes.blueTick}></p>}
                <h5  className={classes.email}>{item.from}</h5>
                <h6>{item.time}</h6>
              </div>
              <div className={classes.secondLine}>
                <h6 className={classes.subject}>{item.subject}</h6>
                <p>{item.content}</p>
              </div>
            </li>
                </NavLink>
          ))}
       
        </ul>
      </div>
    </div>
  );
};

export default Inbox;
