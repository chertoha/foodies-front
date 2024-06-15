import { useState, useRef } from "react";
import { Modal } from "components/Modal/Modal";
import LogOut from "components/LogOut";
import { useModalWindow } from "hooks/useModalWindow";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import sprite from "assets/images/icons/sprite.svg";
import ActiveButton from "components/Buttons/ActiveButton/ActiveButton";
import { allowedImageMIMETypes } from "utils/allowedImageMimeTypes";
import { useUpdateUserAvatarMutation } from "../../redux/users/usersApi";
import { toast } from "react-toastify";
import {
  UserInfoWrapp,
  UserCard,
  UserCardTitle,
  UserCardInfo,
  UserCardtext,
  UserCardspan,
  IconWrapp,
  Button,
  Icon,
} from "./UserInfo.styled";

const MyUserInfo = ({
  avatar,
  name,
  email,
  recipesCount,
  favoritesCount,
  followersCount,
  followingCount,
}) => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModalWindow();
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const onInputFile = async e => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      await updateUserAvatar(formData).unwrap();
      toast.success("Avatar updated successfully");
    } catch (error) {
      toast.error(`${error}, Failed to update avatar`);
    }
  };

  return (
    <UserInfoWrapp>
      <div>
        <UserCard>
          <IconWrapp>
            <UserAvatar
              size={[80, 120, 120]}
              src={avatar}
            />
            <label>
              <Button>
                <Icon>
                  <use href={sprite + "#icon-plus"}></use>
                </Icon>
              </Button>
              <input
                type="file"
                accept={allowedImageMIMETypes.join(",")}
                onChange={onInputFile}
                hidden
              />
            </label>
          </IconWrapp>
          <UserCardTitle>{name}</UserCardTitle>
          <UserCardInfo>
            <UserCardtext>
              <UserCardspan>Email: {email}</UserCardspan>
            </UserCardtext>
            <UserCardtext>
              <UserCardspan>Added recipes: {recipesCount}</UserCardspan>
            </UserCardtext>
            <UserCardtext>
              <UserCardspan>Favorites: {favoritesCount}</UserCardspan>
            </UserCardtext>
            <UserCardtext>
              <UserCardspan>Followers: {followersCount}</UserCardspan>
            </UserCardtext>
            <UserCardtext>
              <UserCardspan>Following: {followingCount}</UserCardspan>
            </UserCardtext>
          </UserCardInfo>
        </UserCard>
        <ActiveButton
          label={"log out"}
          onClick={openModal}
        />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <LogOut onClose={closeModal} />
        </Modal>
      )}
    </UserInfoWrapp>
  );
};

export default MyUserInfo;
