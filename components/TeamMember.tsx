import Image from 'next/image';
import React from 'react';

interface TeamMemberProps{ 
  name: string
  imgUrl: string
  role: string
}

const TeamMember = (props: TeamMemberProps) => {
  const { imgUrl, name, role } = props;
  return (
    <div className="member-card">
      <div className="member-image-wrapper">
        <Image 
          src={imgUrl}
          alt="An image of the team member"
          fill
          className="member-image"
        />
      </div>
      <p className="member-name">{name}</p>
      <p className="member-title">{role}</p>
    </div>
  );
}

export default TeamMember;