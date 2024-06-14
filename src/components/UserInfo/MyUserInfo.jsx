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
  // const [dragIsOver, setDragIsOver] = useState(false);
  const [initialAvatar, setInitialAvatar] = useState(avatar);
  const [updateUserAvatar] = useUpdateUserAvatarMutation();
  const fileInputRef = useRef(null);

  const handleDragOver = e => {
    e.preventDefault();
    // setDragIsOver(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    // setDragIsOver(false);
  };

  const handleDrop = e => {
    e.preventPreventDefault();
    // setDragIsOver(false);

    const file = Array.from(e.dataTransfer.files)[0];
    file && handleFile(file);
  };

  const handleFile = async file => {
    if (!allowedImageMIMETypes.includes(file.type)) {
      alert(`Wrong file type!. Allowed types: ${allowedImageMIMETypes.join(", ")}`);
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const updatedUser = await updateUserAvatar(formData).unwrap();
      setInitialAvatar(updatedUser.avatar); // Оновити стан аватара з новим значенням
      toast.success("Avatar updated successfully");
    } catch (error) {
      toast.error(`${error}, Failed to update avatar`);
    }
  };

  const onInputFile = e => {
    const file = e.target.files[0];
    file && handleFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <UserInfoWrapp>
      <div>
        <UserCard>
          <IconWrapp>
            <UserAvatar
              size={[80, 120, 120]}
              src={initialAvatar}
            />
            <label
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleButtonClick}
            >
              <Button onClick={handleButtonClick}>
                <Icon>
                  <use href={sprite + "#icon-plus"}></use>
                </Icon>
              </Button>
              <input
                type="file"
                accept={allowedImageMIMETypes.join(",")}
                onChange={onInputFile}
                ref={fileInputRef}
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
