import React from "react";
import { Avatar, InitialsAvatar, InitialsSpan } from "./UserAvatar.styled";
import DefaultImg from "assets/images/hero/hero-image1-mobile.png";

const UserAvatar = ({ size, src, alt = "avatar", name }) => {
  const getInitials = name => {
    const names = name.split(" ");
    const initials = names.map(name => name[0].toUpperCase()).join("");
    return initials.slice(0, 2);
  };

  const getRandomColor = name => {
    const colors = [
      "#4DB6AC",
      "#90A4AE",
      "#BA68C8",
      "#64B5F6",
      "#F06292",
      "#81C784",
      "#E57373",
      "#FFD54F",
      "#FF8A65",
      "#A1887F",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <>
      {src !== "" ? (
        <Avatar
          size={size}
          src={src}
          alt={alt}
        />
      ) : (
        <InitialsAvatar
          size={size}
          style={{ backgroundColor: getRandomColor(name) }}
        >
          <InitialsSpan>{getInitials(name)}</InitialsSpan>
        </InitialsAvatar>
      )}
    </>
  );
};

export default UserAvatar;
