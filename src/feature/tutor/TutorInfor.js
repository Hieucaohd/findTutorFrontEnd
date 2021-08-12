import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectId_of_user, selectToken } from "../auth/authSlice";
import InvitedListForTutor from "./components/InvitedListForTutor";
import TeachingListForTutor from "./components/TeachingListForTutor";
import TryTeachingListForTutor from "./components/TryTeachingListForTutor";
import WaitingListForTutor from "./components/WaitingListForTutor";
import {
  deleteInvitedListForTutorInfor,
  fetchInvitedListForTutorInfor,
  selectInvitedListForTutorInfor
} from "./invitedListForTutorInforSlice";
import {
  addToTeachingTutorInfor,
  fetchTeachingForTutorInfor,
  selectTeachingForTutorInfor
} from "./teachingForTutorInforSlice";
import {
  addTryTeachingForTutorInfor,
  deleteTryTeachingForTutorInfor,
  fetchTryTeachingForTutorInfor,
  selectTryTeachingForTutorInfor
} from "./tryTeachingForTutorInforSlice";
import {
  deleteWaitingListForTutorInfor,
  fetchWaitingListForTutorInfor,
  selectWaitingListForTutorInfor
} from "./waitingListForTutorInforSlice";



function TutorInfor() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken);

  //thông tin người dùng
  const id_of_user = useSelector(selectId_of_user);

  //chưa có tài khoản, đẩy về trang login
  if (!token) {
    history.push("/login");
  }

  useEffect(() => {
    if (token) {
      // dispatch something here.
      dispatch(fetchWaitingListForTutorInfor({ token }));
      dispatch(fetchInvitedListForTutorInfor({ token }));
      dispatch(fetchTryTeachingForTutorInfor({ token }));
      dispatch(fetchTeachingForTutorInfor({ token }));
    }
  }, [token]);

  //xóa khỏi danh sách chờ
  const handleDeleteWaiting = (waitingId) => {
    dispatch(
    deleteWaitingListForTutorInfor({ waitingId: waitingId, token: token })
    );
  };  

  //đồng ý dạy thử, thêm vào danh sách dạy thử
  const handleTryTeach = (invitedId) => {
    dispatch(
      addTryTeachingForTutorInfor({ invitedId: invitedId, token: token })
    );
  };

  //không đồng ý dạy thử, xóa khỏi danh sách mời
  const handleDontTryTeach = (invitedId) => {
    dispatch(
      deleteInvitedListForTutorInfor({ invitedId: invitedId, token: token })
    );
  };

  //đồng ý dạy chính thức
  const handleTeach = (tryTeachId) => {
    addToTeachingTutorInfor({
      try_teachingId: tryTeachId,
      token: token,
      dispatch: dispatch,
    });
  };

  //không đồng ý dạy chính thức, xóa khỏi danh sách dạy thử
  const handleDontTeach = (tryTeachId) => {
    dispatch(
      deleteTryTeachingForTutorInfor({
        try_teachingId: tryTeachId,
        token: token,
      })
    );
  };

  //get lists
  const waitingList = useSelector(selectWaitingListForTutorInfor);
  const invitedList = useSelector(selectInvitedListForTutorInfor);
  const tryTeaching = useSelector(selectTryTeachingForTutorInfor);
  const teaching = useSelector(selectTeachingForTutorInfor);

  return (
    <div>
      <h3>Id user: {id_of_user}</h3>
      <h4>Danh sach cho</h4>
      <WaitingListForTutor waitingList = {waitingList} onDelete = {handleDeleteWaiting}/>
      <h4>Danh sach moi</h4> 
      <InvitedListForTutor invitedList = {invitedList} onTryTeach = {handleTryTeach} onDelete = {handleDontTryTeach}/>
      <h4>Danh sach day thu</h4>
      <TryTeachingListForTutor tryTeachingList = {tryTeaching} onTeach = {handleTeach} onDelete = {handleDontTeach}/>
      <h4>Danh sach dang day</h4>
      <TeachingListForTutor teachingList = {teaching}/>
    </div>
  );
}

export default TutorInfor;
