import { getNotification } from 'graphql/ProfileQueries';
import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import RoomNotification from './RoomNotification';

function NotificationList({onClose}) {
    const [notiList, setNotiList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const getNotiList = async () => {
            const list = await getNotification({
                num: 6,
                page: 1,
            });
            setLoading(false);
            setNotiList(list);
        }
        getNotiList();
    }, []) 

    

    return (
        <div className="noti__list">
            <h5 className="font-semibold"> Thông báo </h5>
            {loading ? <Loader className="noti__list__spinner" type="ThreeDots" color="#00BFFF" height={40} width={80} />
                : <ul >
                    {notiList?.map(item => (
                        <RoomNotification key={item?._id} noti={item} onClose={() => onClose()}/>
                    ))}
                </ul>}
        </div>
        
    );
}

export default NotificationList;