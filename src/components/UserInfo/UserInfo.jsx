// import { useGetUserInfoQuery } from "../../redux/users/usersApi";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogOutThunk } from "../../redux/auth/thunks";
import { useFollowUserMutation, useUnfollowUserMutation } from "../../redux/users/usersApi";

import UserAvatar from "../../components/UserAvatar/UserAvatar";
import sprite from "assets/images/icons/sprite.svg";
import ActiveButton from "components/Buttons/ActiveButton/ActiveButton";
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

const UserInfo = ({
  isCurrentUserProfile,
  userId,
  avatar,
  name,
  email,
  recipesCount,
  favoritesCount,
  followersCount,
  followingCount
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFollowing, setIsFollowing] = useState(false);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  useEffect(() => {
    // Тут можна реалізувати логіку перевірки чи є користувач в списку підписок
    // Наприклад, через API-запит до вашого сервера
    const checkFollowingStatus = async () => {
      try {
        // Отримуємо дані користувача для поточного профілю
        // Припустимо, що отримуємо з сервера інформацію про підписки
        const response = await fetch(`/api/users/${userId}/following`);
        const data = await response.json();
        const currentUserId = "666a03962990091f7536e7e6"; // Замініть на фактичний ID поточного користувача
        const isFollowingUser = data.following.includes(currentUserId);
        setIsFollowing(isFollowingUser);
      } catch (error) {
        console.error("Error checking following status:", error);
      }
    };

    checkFollowingStatus();
  }, [userId]);

  const onClickLogOut = async () => {
    try {
      await dispatch(authLogOutThunk()).unwrap();
      navigate("/");
      // Можливо додати навігацію або інші дії після успішного логаута
    } catch (error) {
      console.error("Failed to log out:", error);
      // Обробка помилки (наприклад, показ повідомлення користувачу)
    }
  };


  const handleFollowClick = async () => {
    if (isFollowing) {
      try {
        await unfollowUser(userId).unwrap();
        setIsFollowing(false);
      } catch (error) {
        console.error("Failed to unfollow user:", error);
      }
    } else {
      try {
        await followUser(userId).unwrap();
        setIsFollowing(true);
      } catch (error) {
        console.error("Failed to follow user:", error);
      }
    }
  };
  return (
    <UserInfoWrapp>
      {isCurrentUserProfile ? (
        <>
          <UserCard>
            <IconWrapp>
              <UserAvatar
                size={[80, 120, 120]}
                src={avatar}
              />
              <Button>
                <Icon>
                  <use href={sprite + "#icon-plus"}></use>
                </Icon>
              </Button>
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
            onClick={onClickLogOut}
          />
        </>
      ) : (
        <>
          <UserCard>
            <IconWrapp>
              <UserAvatar
                size={[80, 120, 120]}
                src={avatar}
              />
            </IconWrapp>
            <UserCardTitle>{name}</UserCardTitle>
            <UserCardInfo>
              <UserCardtext>
                <UserCardspan>Added recipes: {recipesCount}</UserCardspan>
              </UserCardtext>

              <UserCardtext>
                <UserCardspan>Followers: {followersCount}</UserCardspan>
              </UserCardtext>
            </UserCardInfo>
          </UserCard>
          <ActiveButton
            label={isFollowing ? "Unfollow" : "Follow"}
            onClick={handleFollowClick}
          />
        </>
      )}
    </UserInfoWrapp>
  );
};

export default UserInfo;
