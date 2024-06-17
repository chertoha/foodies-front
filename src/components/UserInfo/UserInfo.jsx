import UserAvatar from "../../components/UserAvatar/UserAvatar";
import ActiveButton from "components/Buttons/ActiveButton/ActiveButton";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useFollowUserMutation, useUnfollowUserMutation } from "../../redux/users/usersApi";
import {
  UserInfoWrapp,
  UserCard,
  UserCardTitle,
  UserCardInfo,
  UserCardtext,
  UserCardspan,
  IconWrapp,
} from "./UserInfo.styled";
import { useRevalidateUser } from "hooks/useRevalidateUser";

const UserInfo = ({ userId, avatar, name, recipesCount, followersCount }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const { revalidateUserData } = useRevalidateUser();
  const [followUser, { isLoading: isFollowLoading }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: isUnFollowLoading }] = useUnfollowUserMutation();

  const isFollowing = user.following.includes(userId);

  const handleFollowClick = async followerId => {
    if (isFollowing) {
      try {
        await unfollowUser(followerId).unwrap();
      } catch (error) {
        console.error("Failed to unfollow user:", error);
      }
    } else {
      try {
        await followUser(followerId).unwrap();
      } catch (error) {
        console.error("Failed to follow user:", error);
      }
    }
    revalidateUserData();
  };
  return (
    <UserInfoWrapp>
      <div>
        <UserCard>
          <IconWrapp>
            <UserAvatar
              size={[80, 120, 120]}
              src={avatar}
              name={name}
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
          disabled={isFollowLoading || isUnFollowLoading}
          label={isFollowing ? "Unfollow" : "Follow"}
          onClick={() => handleFollowClick(id)}
        />
      </div>
    </UserInfoWrapp>
  );
};

export default UserInfo;
