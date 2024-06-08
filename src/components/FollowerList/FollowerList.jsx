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
  Button,
  Icon,
} from "./FollowerList.styled";

const FollowersList = ({ followers }) => {
  return (
    <FollowerList>
      {followers.map(({ id, image, name, recipes, card }) => (
        <FollowerItem key={id}>
          <FollowerItemWrapp>
            <UserAvatar
              size={[60, 60, 85, 85]}
              src={image}
            />

            <div>
              <FollowerTitle>{name}</FollowerTitle>
              <FollowerText>Own recipes:{recipes}</FollowerText>
              <FollowerButton>Follow</FollowerButton>
            </div>
          </FollowerItemWrapp>

          <CardList>
            {card.map((card, idx) => (
              <li key={idx}>
                <CardListImage
                  src={card}
                  alt="follow"
                />
              </li>
            ))}
          </CardList>
          <Button>
            <Icon>
              <use href={sprite + "#icon-arrow-up-right"}></use>
            </Icon>
          </Button>
        </FollowerItem>
      ))}
    </FollowerList>
  );
};

export default FollowersList;
