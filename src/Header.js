import React from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {Avatar} from '@material-ui/core'


export const Header  = () => {
    
    return <div className="topheader">
                <div className="header_left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-facebook_f_logo_%282019%29.svg.png"></img>
                    <SearchIcon/>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="header_center">
                    <div className="header_option header_option--active">
                      <HomeIcon fontSize="Large"  /> 
                    </div>
                    <div className="header_option">
                        <FlagIcon fontSize="Large"/>
                    </div>
                    <div className="header_option">
                        <SubscriptionsOutlinedIcon fontSize="Large"/>
                    </div>
                    <div className="header_option">
                        <StorefrontOutlinedIcon fontSize="Large"/>
                    </div>
                    <div className="header_option">
                        <SupervisedUserCircleIcon fontSize="Large"/>
                    </div>
                </div>
                <div className="header_right">
                    <Avatar/>
                    <h4>Khan</h4>
                    <AddIcon/>
                    <ForumIcon/>
                    <NotificationsActiveIcon/>
                    <ExpandMoreIcon/>
                    <span class="material-icons md-48">face</span>
                </div>
            </div>;
}