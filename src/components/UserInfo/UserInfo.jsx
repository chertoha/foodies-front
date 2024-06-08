import UserAvatar from "../../components/UserAvatar/UserAvatar";
import sprite from "assets/images/icons/sprite.svg";
import ActiveButton from "components/Buttons/ActiveButton/ActiveButton";
import {
  UserInfoWrapp,
  UserCard,
  UserCardTitle,
  UserCardInfo,
  UserCardtext,
  UserCardspan,
  IconWrapp,
  Button,
  Icon
} from "./UserInfo.styled";

const UserInfo = () => {
  return (
    <UserInfoWrapp>
      <UserCard>
        <IconWrapp>
        <UserAvatar
          size={[80, 80, 120, 120, 120, 120]}
          src={"https://s3-alpha-sig.figma.com/img/b211/921d/2af5c7a8bf64f8977ed4c03cf630696b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dtp~1YUEKmQ3qdInYCrRpjK7FXcyPHZ984XWNnACx9c~7~jJdp0kgy5Ihy5KTKZ7sUh39IsIxyAki3xVnK4UD-IyC7bnHK5FOC2NYXZbWLiNgTdi98HBb~gkdlpx1ajag1NAQLvFeiN~OKOQRuHqBrMFQR94xz1MHzAtkAHuUMWCRruoj9xNduNF7xpxsVBj72rkQqmNO1N5ycwzpxfsWRQ~iNgXPnWeFKBP5cnRtNJdB8LebpvCL~HBKueJeGj-vZr5XPM1C-461ctQA191-rNMM~21gbeC8lCwVzhv18CjLaR7xvVgRJlC1KG7HGC6VDkquhwnj0eBNdatUP9RHA__"}
        />
        <Button>
        <Icon>
            <use href={sprite + "#icon-plus"}></use>
        </Icon>
        </Button>
      </IconWrapp>
        <UserCardTitle>VICTORIA</UserCardTitle>
        <UserCardInfo>
          <UserCardtext>
            <UserCardspan>Email:</UserCardspan>
            victoria28682@gmai.com
          </UserCardtext>
          <UserCardtext>
            <UserCardspan>Added recipes:</UserCardspan>9
          </UserCardtext>
          <UserCardtext>
            <UserCardspan>Favorites:</UserCardspan>9
          </UserCardtext>
          <UserCardtext>
            <UserCardspan>Followers:</UserCardspan>5
          </UserCardtext>
          <UserCardtext>
            <UserCardspan>Following:</UserCardspan>5
          </UserCardtext>
        </UserCardInfo>
      </UserCard>
      <ActiveButton label={"log out"} />
    </UserInfoWrapp>
  );
};

export default UserInfo;
