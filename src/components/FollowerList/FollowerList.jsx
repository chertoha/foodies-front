// import UserAvatar from "components/UserAvatar/UserAvatar";
import { CiCircleChevRight } from "react-icons/ci";
import {
  FollowerList,
  FollowerItem,
  FollowerItemWrapp,
  FollowerImage,
  FollowerTitle,
  FollowerText,
  FollowerButton,
  CardList,
  CardListImage,
} from "./FollowerList.styled";

const FollowersList = ({ followers }) => {
  return (
    <FollowerList>
      {followers.map(({ id, image, name, recipes, card }) => (
        <FollowerItem key={id}>
          <FollowerItemWrapp>
            <FollowerImage
              src={image}
              alt="follow"
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
          <CiCircleChevRight
            width={36}
            height={36}
          />
        </FollowerItem>
      ))}
    </FollowerList>
  );
};

export default FollowersList;
