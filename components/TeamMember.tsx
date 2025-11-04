import Image from 'next/image';
import React from 'react';

const TeamMember = () => {
  return (
    <div className="member-card">
      <div className="member-image-wrapper">
        <Image 
          src={"/images/user.png"}
          alt="An image of the member"
          fill
          className="member-image"
        />
      </div>
      <p className="member-name">Jane Doe</p>
      <p className="member-title">CDS Officer</p>
    </div>
  );
}

export default TeamMember;