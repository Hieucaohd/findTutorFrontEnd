import { makeStyles } from '@material-ui/core/styles';
import { catchDistrictName, catchProvinceName, catchWardName, getDistrictName, getProvinceName, getWardName } from 'components/location/getLocation';
import { GetTutorProfile } from 'graphql/ProfileQueries';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import GeneralProfile from './components/GeneralProfile';
import MoreInfoProfile from './components/MoreInfoProfile';
import ProfileSkeleton from './components/ProfileSkeleton';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 12px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '0px 220px',
        },
    }, 
}));

function TutorProfile(props) {
    const match = useRouteMatch("/profile/tutor/:tutorId");
    const tutorId = Number(match.params.tutorId);
    const classes = useStyles();
    const [tutorInfo, setTutorInfo] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        const getUserInfo = async () => {
            const info = await GetTutorProfile(tutorId);
            const provinceName = await getProvinceName(info.province_code) || "";
            const districtName = await getDistrictName({provinceCode: info.province_code, districtCode: info.district_code}) || "";
            const wardName = await getWardName({districtCode: info.district_code, wardCode: info.ward_code});
            info["address"] = `${catchWardName(wardName)}, ${catchDistrictName(districtName)}, ${catchProvinceName(provinceName)}`;
            setTutorInfo(info);
            setLoading(false);
        }
        getUserInfo();
    }, []);

    return (
        <div className={classes.root}> 
            {loading ? <ProfileSkeleton /> 
            :  <div>
                <GeneralProfile tutorInfo={tutorInfo} />
                <MoreInfoProfile tutorInfo={tutorInfo}/> 
            </div>
        }
        </div>
        
    );
}

export default TutorProfile;