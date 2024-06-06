import followers from "pages/UserPage/follower.json";
// import UserAvatar from "components/UserAvatar/UserAvatar";
import SubTitle from "../SubTitle/SubTitle";
import FollowersList from "../FollowerList/FollowerList";
import { SubTitleWrapper } from "./ProfilePages.styled";
const Followers = () => {
  // const array = [];
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
