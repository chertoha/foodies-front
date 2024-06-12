import followers from "pages/UserPage/follower.json";

import { useGetUserFollowersQuery } from "../../redux/users/usersApi";
// import UserAvatar from "components/UserAvatar/UserAvatar";
import SubTitle from "../SubTitle/SubTitle";
import FollowersList from "../FollowerList/FollowerList";
import { SubTitleWrapper } from "./ProfilePages.styled";
const Followers = () => {
  // const array = [];

  const {
    data,
    error: errorFollowers,
    isFetching: isFetchingFollowers,
  } = useGetUserFollowersQuery({
    id: "666a03962990091f7536e7e6",
    page: 1,
    limit: 9,
  });

  if (isFetchingFollowers) return <div>Loading...</div>;
  if (errorFollowers) return <div>Error loading Followers.</div>;
  if (!data) return null;

  console.log("Followers", data);

  return (
    <>
      {followers.length > 0 ? (
        <FollowersList followers={followers} />
      ) : (
        <SubTitleWrapper>
          <SubTitle
            label={
              "There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile."
            }
          />
        </SubTitleWrapper>
      )}
    </>
  );
};

export default Followers;
