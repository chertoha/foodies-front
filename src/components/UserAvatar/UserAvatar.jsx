import React from "react";
import { Avatar } from "./UserAvatar.styled";

const UserAvatar = ({ size, src }) => {
  return (
    <Avatar
      size={size}
      src={src}
      alt="avatar"
    />
  );
};

export default UserAvatar;
