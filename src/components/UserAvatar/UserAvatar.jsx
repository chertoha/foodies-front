import React from "react";
import { Avatar } from "./UserAvatar.styled";

const UserAvatar = ({ size, src, alt = "avatar" }) => {
  return (
    <div>
      <Avatar
        size={size}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default UserAvatar;
