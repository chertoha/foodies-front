// import { useGetUserInfoQuery } from "../../redux/users/usersApi";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogOutThunk } from "../../redux/auth/thunks";
import { useFollowUserMutation, useUnfollowUserMutation, useGetUserFollowingQuery } from "../../redux/users/usersApi";

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
  followingCount,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFollowing, setIsFollowing] = useState(false);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  const { data: followingData } = useGetUserFollowingQuery();

  console.log("followingData", followingData.result)

  useEffect(() => {
    if (followingData) {
      const isFollowingUser = followingData.result.some((user) => user.id === userId);
      console.log(isFollowingUser);
      setIsFollowing(isFollowingUser);
    }
  }, [followingData, userId]);
[
  {_id: '6669784b2990091f7536da21', name: 'Anton', email: 'anton-4@aka.com'}
  {_id: '666a061d2990091f7536e8a7', name: 'Nikol', email: 'nikol-1@mail.com'}
]
  const onClickLogOut = async () => {
    try {
      await dispatch(authLogOutThunk()).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const handleFollowClick = async () => {
    if (isFollowing) {
      try {
        await unfollowUser(userId).unwrap();
        setIsFollowing(false);
        console.log("unfollowUser")
      } catch (error) {
        console.error("Failed to unfollow user:", error);
      }
    } else {
      try {
        await followUser(userId).unwrap();
        setIsFollowing(true);
        console.log("followUser")
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
          <ActiveButton label={isFollowing ? "Unfollow" : "Follow"} onClick={handleFollowClick} />
        </>
      )}
    </UserInfoWrapp>
  );
};

export default UserInfo;
