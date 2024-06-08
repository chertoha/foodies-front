const { Image } = require("./RecipeImage.styled");

const RecipeImage = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
  />
);

export default RecipeImage;
