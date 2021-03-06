import { makeStyles } from "@material-ui/core/styles";
import Loading from "components/Loading/Loading";
import Location from "components/location/Location";
import Modal from "components/Modal/Modal";
import { CreateParentRoom } from "graphql/mutationGraphQl";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectId_of_user } from "../auth/authSlice";

function CreateRoom(props) {
  const classes = useStyles();
  const days = [2, 3, 4, 5, 6, 7, 8];
  const history = useHistory();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showFailModal, setShowFailModal] = useState(false);
  const [showCheckModal, setShowCheckModal] = useState(false);
  const [location, setLocation] = useState({
    province: 0,
    district: 0,
    ward: 0
  })
  const id = useSelector(selectId_of_user)
  const loadingRef = useRef(null);

  const handleGetLocation = (data) => {
    setLocation(data);
  }

  //handle submit
  const onSubmit = async (data) => {
    // get day can teach
    let dayCanTeach = []
    for(let i = 2; i<9; i++) {
      if(data[i]){
        dayCanTeach.push(i);
      }
    }
    const getTypeTeacher = (str) => {
      if(str === 'both') {
        return ["sv", "gv"];
      } else if (str === 'sv') {
        return ["sv"];
      } 
      return ["gv"];
    }
    const getGender = (str) => {
      if(str === 'both') {
        return ["nam", "nu"];
      } else if (str === 'nam') {
        return ["nam"];
      }
      return ["nu"];
    }
    
    const roomInfor = {
      "day_can_teach": dayCanTeach || null, 
      "subject": data.subject || null,
      "lop": data.lop || null,
      "other_require": data.other_require || null,
      "province_code": Number(location.province),
      "district_code": Number(location.district),
      "ward_code": Number(location.ward),
      "detail_location": data.detailLocation || null,
      // "time_in_one_day": Number(1.5) || 2,
      "time_in_one_day": Number(data.hours) + Number(data.minutes/60||0) || 2,
      "money_per_day": Number(data.price) < 1000 ? Number(data.price)*1000 : Number(data.price),
      "type_teacher": getTypeTeacher(data.job),
      "sex_of_teacher": getGender(data.gender),
    };
    console.log(roomInfor);
    loadingRef.current.style.display = "flex";
    const response = await CreateParentRoom({roomInfo: roomInfor});
    if(response) {
      setShowCheckModal(true);
    } else {
      setShowFailModal(true);
      loadingRef.current.style.display = "none";
    }
}

  return (
    <div className={classes.root}>
      <div ref={loadingRef} style={{display: 'none'}}>
        <Loading />
      </div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}> 
        <div className = {classes.day}> 
        {days.map((day, index) => {
          return (
            <div className={classes.dayField}>
              <label for={index}>{day === 8 ? "Ch??? nh???t " : "Th??? " + day}</label>
              <input
                type="checkbox"
                value="checked"
                name={String(day)}
                id={index} 
                {...register(String(day))}
              />
            </div>
          );
        })}
        </div>
        <div className={classes.field}>
        <label for="lop">L???p </label>
        <select name="lop" className={classes.select} {...register("lop", { required: true })}>
            <option value="1">L???p 1</option>
            <option value="2">L???p 2</option>
            <option value="3">L???p 3</option>
            <option value="4">L???p 4</option>
            <option value="5">L???p 5</option>
            <option value="6">L???p 6</option>
            <option value="7">L???p 7</option>
            <option value="8">L???p 8</option>
            <option value="9">L???p 9</option>
            <option value="10">L???p 10</option>
            <option value="11">L???p 11</option>
            <option value="12">L???p 12</option>
            <option value="13">?????i h???c/Cao ?????ng</option>
        </select>
          <span className={classes.error}>{errors.class && "C???n nh???p l???p"}</span>
        </div>
        <div className={classes.field}>
          <label for="subject">M??n h???c </label>
          <select name="subject" className={classes.select} {...register("subject", { required: true })}>
            <option value="To??n ">To??n</option>
            <option value="Ng??? V??n">Ng??? V??n</option>
            <option value="H??a H???c">H??a H???c</option>
            <option value="V???t L??">V???t L??</option>
            <option value="Sinh H???c">Sinh H???c</option>
            <option value="?????a L??">?????a L??</option>
            <option value="L???ch S???">L???ch S???</option>
            <option value="Ti???ng Anh">Ti???ng Vi???t</option>
            <option value="Ti???ng Vi???t">Ti???ng Anh</option>
          </select>
          <span className={classes.error}>{errors.subject && "C???n nh???p m??n h???c"}</span>
        </div>
        <div className={classes.priceField}>
            <label>Gi?? ti???n m???i bu???i </label>
            {/* <input 
              name="price" 
              type="number"
              defaultValue={100000}
              {...register("price", { required: true })}
            /> */}
            <div>
              <input 
                name="price" 
                type="number"
                defaultValue={100}
                {...register("price", { required: true })}
              /> 
              .000??
            </div>
            
            <span className={classes.error}>{errors.price && "C???n nh???p gi?? ti???n"}</span>
        </div>
        <div className={classes.timeField}>
            <label>S??? gi??? d???y m???i bu???i</label>
            <div>
              <input 
                name="hours" 
                type="number"
                defaultValue={1}
                {...register("hours", { required: true })}
              /> gi???
              <input 
                name="minutes" 
                type="number"
                min={0}
                max={59}
                className="ml-4"
                defaultValue={0}
                {...register("minutes", { required: true })}
              /> ph??t
              
            </div>
            <span className={classes.error}>{errors.hours && "C???n nh???p s??? gi???"}</span>
        </div>

        <div className={classes.field}>
            <label>Gi???i t??nh gia s??</label>
            <select name="gender" className={classes.select} {...register("gender")}>
              <option value="both">Kh??ng y??u c???u</option>
              <option value="nam">Nam</option>
              <option value="nu">N???</option>
            </select>
        </div>
               
        <div className={classes.field}>
            <label>Ngh??? nghi???p gia s??</label>
            <select name="job" className={classes.select} {...register("job")}>
              <option value="both">Kh??ng y??u c???u</option>
              <option value="sv">Sinh vi??n</option>
              <option value="gv">Gi??o vi??n</option>
            </select>
        </div>
        <div className={classes.field}>
            <label>?????a ch???</label>
            <Location onChange={handleGetLocation} />
        </div>
        <div className={classes.field}>
            <label>Chi ti???t ?????a ch???</label>
            <input 
              name="detailLocation" 
              type="text"
              {...register("detailLocation")}
           />
            <span className={classes.error}>{errors.detailLocation && "C???n nh???p chi ti???t ?????a ch???"}</span>
        </div>

        <div className={classes.field}>
          <label for="other_require">Y??u c???u kh??c </label>
          <input
            type="text"
            id="other_require"
            {...register("other_require")}
          />
        </div>

        <div className={classes.field}>
          <button className={classes.submit} type="submit" variant="contained" color="primary" >T???o ph??ng</button>
        </div>
      </form>
      {showCheckModal && <Modal typeIcon="check" text="T???o ph??ng th??nh c??ng" onAgree={() => history.push(`/parentInfo/${id}`)} />}
      {showFailModal && <Modal typeIcon="fail" text="T???o ph??ng th???t b???i" onAgree={() => setShowFailModal(false)} />}
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: { 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 52,
    flexDirection: "column",
    [theme.breakpoints.down('sm')]: {
      marginTop: 56,
      paddingTop: 20,
      backgroundColor: "white",
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 76,
    },
    "& label": {
      fontSize: '12px',
      fontWeight: '600',
    },
  },
  field: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
    marginBottom: "6px",
    "& input": {
        padding: "8px 12px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "white",
        fontSize: 14,
    },
  },
  priceField: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
    marginBottom: 6,
    "& input" : {
      padding: "8px 12px",
      border: "1px solid #ccc",
      backgroundColor: "white",
      borderRadius: 8,
      fontSize: 14,
      width: 90,
    }
  },
  day: {
    display: "flex",
    marginBottom: "6px",
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
    justifyContent: 'space-between',
    label: {
      fontSize: '12px',
      fontWeight: '500',
    }
  },
  dayField: {
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      display: 'flex',
      alignItems: 'center',
      flexDirection: "column",
      '& label': {
        fontSize: '12px',
        marginRight: 4,
        fontWeight: 500,
      }
    },
    [theme.breakpoints.up('md')]: {
      marginRight: "8px",
      display: 'flex',
      alignItems: 'center',
      '& label': {
        marginRight: 4,
        fontSize: '13px',
        fontWeight: 500,
      }
    },
  },
  timeField: {
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
    marginBottom: 6,
    "& input" : {
      padding: "8px 12px",
      border: "1px solid #ccc",
      backgroundColor: "white",
      borderRadius: 8,
      fontSize: 14,
      width: 66,
    }
  },
  error: {
    fontSize: "12px",
    color: "red",
    marginBottom: "2px",
  },
  success: {
    display: "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "z-index": "1000",
        
  },
  addressInput: {
    width: "94%",
  },
  submit: {
    backgroundColor: '#0095FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 0px',
    fontSize: 12,
    opacity: 0.8,
    "&:hover": {
      cursor: 'pointer',
      opacity: 1,
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    
  },
  select: {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    fontSize: 14,
  },
}));

export default CreateRoom;