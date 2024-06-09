import React from "react";
import { Avatar } from "./UserAvatar.styled";

const UserAvatar = ({ size, src, alt = "avatar" }) => {
  return (
    <Avatar
      size={size}
      src={src}
      alt={alt}
    />
  );
};

export default UserAvatar;
