import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useFollowUserMutation, useUnfollowUserMutation } from "../../redux/users/usersApi";

import UserAvatar from "../../components/UserAvatar/UserAvatar";
import ActiveButton from "components/Buttons/ActiveButton/ActiveButton";
import {
  UserInfoWrapp,
  UserCard,
  UserCardTitle,
  UserCardInfo,
  UserCardtext,
  UserCardspan,
  IconWrapp,
} from "./UserInfo.styled";

const UserInfo = ({ userId, avatar, name, recipesCount, followersCount }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  useEffect(() => {
    if (user && user.following) {
      const isFollowingUser = user.following.includes(userId);
      setIsFollowing(isFollowingUser);
    }
  }, [user, userId]);

  const handleFollowClick = async followerId => {
    if (isFollowing) {
      try {
        await unfollowUser(followerId).unwrap();
        setIsFollowing(false);
      } catch (error) {
        console.error("Failed to unfollow user:", error);
      }
    } else {
      try {
        await followUser(followerId).unwrap();
        setIsFollowing(true);
      } catch (error) {
        console.error("Failed to follow user:", error);
      }
    }
  };
  return (
    <UserInfoWrapp>
      <UserCard>
        <IconWrapp>
          <UserAvatar
            size={[80, 120, 120]}
            src={"avatar"}
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
        onClick={() => handleFollowClick(id)}
      />
    </UserInfoWrapp>
  );
};

export default UserInfo;
