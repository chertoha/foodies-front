import sprite from "assets/images/icons/sprite.svg";
import {
  UserPageList,
  UserPageListItem,
  UserPageListImage,
  UserPageListTitle,
  UserPageListText,
  ButtonWrapp,
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
            <Button>
              <Icon>
                <use href={sprite + "#icon-arrow-up-right"}></use>
              </Icon>
            </Button>
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
