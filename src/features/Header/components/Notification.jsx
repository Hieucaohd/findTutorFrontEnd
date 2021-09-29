import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useState } from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
Notification.propTypes = {
    
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        fontSize: 20,
        margin: "0 12px",
        position: 'relative',
        "& svg": {
            "&:hover": {
                color: "#0061FF",
                cursor: "pointer",
            }
        }
    },
    dropdown: {
        position: 'absolute',
        bottom: -124,
        right: -100,
        margin: 0,
        minWidth: 200,
        padding: 0,
        backgroundColor: 'white',
        boxShadow: "0px 4px 8px 0px rgb(0 0 0 / 20%)",
        borderRadius: 8,
        "& li": {
            padding: 8,
            fontSize: 16,
            listStyleType: 'none',
        },
        "z-index": "101",
        
    },
    overlay: {
        position: "fixed",
        top: "40px",
        left: "0px",
        bottom: "0px",
        right: "0px",
        background:"rgba(0,0,0,0)",
        "z-index": "100",
    }
})

function Notification(props) {
    const classes = useStyles();
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div className={classes.root}>
            <IoNotificationsOutline onClick={() => setShowDropDown(!showDropDown)}/>
            {showDropDown && <ul className={classes.dropdown}>
                <li>abc vừa mời bạn</li>
                <li>xyz vừa đồng ý bạn</li>
                <li>fff vừa xóa bạn</li>
            </ul>}
            {showDropDown && <div className={classes.overlay} onClick={() => setShowDropDown(false)}></div>}
        </div>
    );
}

export default Notification;