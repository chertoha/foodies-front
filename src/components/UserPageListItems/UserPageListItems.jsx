import sprite from "assets/images/icons/sprite.svg";
import {
  UserPageList,
  UserPageListItem,
  UserPageListImage,
  UserPageListTitle,
  UserPageListText,
  ButtonWrapp,
  LinkButton,
  Button,
  Icon,
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

          <ButtonWrapp>
            <LinkButton to={`/some-page/${id}`}>
              <Icon>
                <use href={sprite + "#icon-arrow-up-right"}></use>
              </Icon>
            </LinkButton>
            <Button>
              <Icon>
                <use href={sprite + "#icon-trash"}></use>
              </Icon>
            </Button>
          </ButtonWrapp>
        </UserPageListItem>
      ))}
    </UserPageList>
  );
};

export default UserPageListItems;
