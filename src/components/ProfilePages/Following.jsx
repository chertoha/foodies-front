import { useGetUserFollowingQuery } from "../../redux/users/usersApi";
import SubTitle from "../SubTitle/SubTitle";
import FollowersList from "../FollowerList/FollowerList";
import { SubTitleWrapper } from "./ProfilePages.styled";

const Following = () => {
  const {
    data,
    error: errorFollowing,
    isFetching: isFetchingFollowing,
  } = useGetUserFollowingQuery({
    page: 1,
    limit: 9,
  });

  if (isFetchingFollowing) return <div>Loading...</div>;
  if (errorFollowing) return <div>Error loading recipes.</div>;
  if (!data) return null;

  // console.log("Following", data.result);
  return (
    <>
      {data.result.length > 0 ? (
        <FollowersList
          followers={data.result}
          type={"Following"}
        />
      ) : (
        <SubTitleWrapper>
          <SubTitle
            label={
              "Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you."
            }
          />
        </SubTitleWrapper>
      )}
    </>
  );
};

export default Following;
