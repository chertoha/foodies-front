import list from "pages/UserPage/list.json";
// import UserAvatar from "components/UserAvatar/UserAvatar";
import SubTitle from "../SubTitle/SubTitle";
import UserPageListItems from "../UserPageListItems/UserPageListItems";
import { SubTitleWrapper } from "./ProfilePages.styled";
const MyFavorites = () => {
  return (
    <>
      {list.length > 0 ? (
        <UserPageListItems list={list} />
      ) : (
        <SubTitleWrapper>
          <SubTitle
            label={
              "Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
            }
          />
        </SubTitleWrapper>
      )}
    </>
  );
};

export default MyFavorites;
