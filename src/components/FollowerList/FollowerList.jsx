import UserAvatar from "components/UserAvatar/UserAvatar";
import FollowerButton from "components/Buttons/FollowerButton/FollowerButton";
import sprite from "assets/images/icons/sprite.svg";
import { useState, useEffect } from "react";
import { useFollowUserMutation, useUnfollowUserMutation } from "../../redux/users/usersApi";

import {
  FollowerList,
  FollowerItem,
  FollowerItemWrapp,
  FollowerTitle,
  FollowerText,
  CardList,
  CardListImage,
  LinkButton,
  Icon,
} from "./FollowerList.styled";
import { useAuth } from "hooks/useAuth";
import { useRevalidateUser } from "hooks/useRevalidateUser";

const FollowersList = ({ followers, type }) => {
  const { revalidateUserData } = useRevalidateUser();
  const { user } = useAuth();
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();

  const [followingState, setFollowingState] = useState({});

  useEffect(() => {
    if (!user) return;
    if (user.following) {
      const followingMap = {};
      user.following.forEach(id => {
        followingMap[id] = true;
      });
      setFollowingState(followingMap);
    }
  }, [user]);

  const handleFollowClick = async followerId => {
    if (followingState[followerId]) {
      try {
        await unfollowUser(followerId).unwrap();
        setFollowingState(prevState => ({ ...prevState, [followerId]: false }));
      } catch (error) {
        console.error("Failed to unfollow user:", error);
      }
    } else {
      try {
        await followUser(followerId).unwrap();
        setFollowingState(prevState => ({ ...prevState, [followerId]: true }));
      } catch (error) {
        console.error("Failed to follow user:", error);
      }
    }
    revalidateUserData();
  };
  return (
    <FollowerList>
      {followers.map(({ _id, avatar, name, recipes }) => (
        <FollowerItem key={_id}>
          <FollowerItemWrapp>
            <UserAvatar
              size={[60, 85, 85]}
              src={avatar}
              name={name}
            />

            <div>
              <FollowerTitle>{name}</FollowerTitle>
              <FollowerText>Own recipes: {recipes.length}</FollowerText>
              {user._id !== _id && (
                <>
                  {type === "Followers" ? (
                    <FollowerButton
                      label={followingState[_id] ? "Unfollow" : "Follow"}
                      onClick={() => handleFollowClick(_id)}
                    />
                  ) : (
                    <FollowerButton
                      label={followingState[_id] ? "Unfollow" : "Following"}
                      onClick={() => handleFollowClick(_id)}
                    />
                  )}
                </>
              )}
            </div>
          </FollowerItemWrapp>

          <CardList>
            {recipes.map(({ _id, title, thumb }) => (
              <li key={_id}>
                <CardListImage
                  src={thumb}
                  alt={title}
                />
              </li>
            ))}
          </CardList>
          <LinkButton to={`/user/${_id}`}>
            <Icon>
              <use href={sprite + "#icon-arrow-up-right"}></use>
            </Icon>
          </LinkButton>
        </FollowerItem>
      ))}
    </FollowerList>
  );
};

export default FollowersList;
