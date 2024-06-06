// import followers from "pages/UserPage/follower.json";
// import UserAvatar from "components/UserAvatar/UserAvatar";
import SubTitle from "../SubTitle/SubTitle";
import FollowersList from "../FollowerList/FollowerList";
import { SubTitleWrapper } from "./ProfilePages.styled";
const Following = () => {
  const array = [];
  return (
    <>
      {array.length > 0 ? (
        <FollowersList followers={array} />
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
