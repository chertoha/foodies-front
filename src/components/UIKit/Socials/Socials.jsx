import sprite from "assets/images/icons/sprite.svg";
import { facebook, instagram, youtube } from "utils/contacts";
import { Icon, List, SocialLink } from "./Socials.styled";

const Socials = () => {
  return (
    <List>
      <li>
        <SocialLink
          href={facebook}
          aria-label="Facebook"
          target="_blank"
        >
          <Icon>
            <use href={sprite + "#icon-facebook"}></use>
          </Icon>
        </SocialLink>
      </li>

      <li>
        <SocialLink
          href={instagram}
          aria-label="Instagram"
          target="_blank"
        >
          <Icon>
            <use href={sprite + "#icon-instagram"}></use>
          </Icon>
        </SocialLink>
      </li>

      <li>
        <SocialLink
          href={youtube}
          aria-label="Youtube"
          target="_blank"
        >
          <Icon>
            <use href={sprite + "#icon-youtube"}></use>
          </Icon>
        </SocialLink>
      </li>
    </List>
  );
};

export default Socials;
