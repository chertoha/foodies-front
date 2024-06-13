import { useGetUserFollowersQuery } from "../../redux/users/usersApi";

import SubTitle from "../SubTitle/SubTitle";
import FollowersList from "../FollowerList/FollowerList";
import { SubTitleWrapper } from "./ProfilePages.styled";
const Followers = ({ id }) => {
  const {
    data,
    error: errorFollowers,
    isFetching: isFetchingFollowers,
  } = useGetUserFollowersQuery(id);

  if (isFetchingFollowers) return <div>Loading...</div>;
  if (errorFollowers) return <div>Error loading Followers.</div>;
  if (!data) return null;

  console.log("Followers", data.result);

  return (
    <>
      {data.result.length > 0 ? (
        <FollowersList
          followers={data.result}
          type={"Followers"}
        />
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
