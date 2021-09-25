import { makeStyles } from "@material-ui/core";
import Loading from "components/Loading/Loading";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../authSlice";
import LoginGoogle from "./LoginGoogle";

const selectToken = (state) => state.auth.token;

function Login({onShow}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const token = useSelector(selectToken);
  const loadingRef = useRef(null);

  //token đã tồn tại chuyển sang trang home
  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);

  const onSubmit = async (data) => {
    const args = {
      email: data.email,
      password: data.password,
    };
    loadingRef.current.style.display = "flex";
    await dispatch(login(args));
    loadingRef.current.style.display = "none";
  };

  const handleShowRegisterForm = () => {
    if(!onShow) return;
    onShow();
  }

  return (
    <div className={classes.root}>
      <div ref={loadingRef} style={{display: 'none'}}>
        <Loading />
      </div>
          <h2>Đăng nhập</h2>
          <form className ={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.formField}>
              <LoginGoogle />
            </div>
          <div className={classes.lineSpace}>
            <span/>
            <div> hoặc đăng nhập với email</div>
            <span/>
          </div>
          {/* <div className={classes.formField}>
              <LoginFacebook />
          </div> */}
            <div className={classes.formField}>
              <label className={classes.label}>Email*</label>
              <input 
                name="email" 
                type="email" placeholder="mail@website.com" 
                {...register("email", { required: true }
                )}/>
                <span className={classes.error}>{errors.email && "Cần nhập Email"}</span>
            </div>
            
            <div className={classes.formField}>
              <label className={classes.label}>Mật khẩu*</label>
              <input name="password" 
              type="password" 
              placeholder="Tối thiểu 6 kí tự" 
              {...register("password", { required: true })}/>
              <span className={classes.error}>{errors.username && "Cần nhập mật khẩu"}</span>
            </div>
            <div className={classes.forget}>
              <a href="/forget">Quên mật khẩu?</a>
            </div>
            <div className={classes.formField}>
              <button type="submit" className={classes.submit}>Sign in</button>
            </div>
            <div style={{marginTop: "-12px"}}>
              <span className={classes.registerspan}>Chưa có tài khoản?</span>
              <Link to="/signup">
                <span onClick={handleShowRegisterForm} className={classes.register}>
                Đăng kí tài khoản</span>
              </Link>
            </div>
          </form> 
    </div>              
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    // height: '100vh',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  form: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: { 
      width: '340px',
    },
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  },
  formField: {
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    '& input': {
      padding: '12px 14px',
      borderRadius: '8px',
      border: '0.5px solid #ccc',
      "&:focus-visible": {
        outline: 'none',
      }
    },
    '& button': {
      width: '100%',
    },
  },
  register: {
    fontSize: '14px',
    color: '#5037EC',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      color: '#303F9F',
    }
  },
  error: {
    fontSize: '12px',
    color: 'red',
    marginBottom: '2px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
  },
  registerspan: {
    fontSize: '14px',
    marginRight: '4px',
  },
  submit: {
    backgroundColor: '#0061ff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 0px',
    opacity: 0.8,
      "&:hover": {
        opacity: 1,
        cursor: 'pointer'
    }
    // width: '50%!important',
  },
  lineSpace: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '12px 0px',
    '& span': {
      width: '27%',
      height: '0.5px',
      backgroundColor: '#999393',
    },
    '&>div': {
      fontSize: '8px',
      color: '#999393',
      margin: '0px 4px',
    }
  },
  forget: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '20px',
    marginTop: "-16px",
    '& a': {
      fontSize: '10px',
      color: '#5037EC',
      fontWeight: '500',
      textDecoration: 'none',
    }
  }
}))

export default Login;