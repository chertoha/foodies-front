import UserAvatar from "components/UserAvatar/UserAvatar";
import sprite from "assets/images/icons/sprite.svg";
import {
  FollowerList,
  FollowerItem,
  FollowerItemWrapp,
  FollowerTitle,
  FollowerText,
  FollowerButton,
  CardList,
  CardListImage,
  LinkButton,
  Icon,
} from "./FollowerList.styled";

const FollowersList = ({ followers }) => {
  return (
    <FollowerList>
      {followers.map(({ _id, avatar, name, recipes, card }) => (
        <FollowerItem key={_id}>
          <FollowerItemWrapp>
            <UserAvatar
              size={[60, 85, 85]}
              src={avatar}
            />

            <div>
              <FollowerTitle>{name}</FollowerTitle>
              <FollowerText>Own recipes:{recipes}</FollowerText>
              <FollowerButton>Follow</FollowerButton>
            </div>
          </FollowerItemWrapp>

          <CardList>
            {[].map(card => (
              <li key={card}>
                <CardListImage
                  src={"../"}
                  alt="follow"
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
