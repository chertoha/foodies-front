import {
  UserPageList,
  UserPageListItem,
  UserPageListImage,
  UserPageListTitle,
  UserPageListText,
} from "./UserPageListItems.styled";
const UserPageListItems = ({ list }) => {
  return (
    <UserPageList>
      {list.map(({ id, img, title, text }) => (
        <UserPageListItem key={id}>
          <UserPageListImage src={img} />
          <div>
            <UserPageListTitle>{title}</UserPageListTitle>
            <UserPageListText>{text}</UserPageListText>
          </div>
        </UserPageListItem>
      ))}
    </UserPageList>
  );
};

export default UserPageListItems;
