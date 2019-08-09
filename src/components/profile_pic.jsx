import React from 'react';
import '../styles/profile_pic.css'

const ProfilePic = (src) => (
  <div className="profile-pic" style={{backgroundImage: 'url(' + src + ')'}} />
);

export default ProfilePic;
