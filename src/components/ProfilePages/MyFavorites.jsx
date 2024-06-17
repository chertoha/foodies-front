import Paginator from "../Paginator/Paginator";
import Loader from "../Loader/Loader";
import SubTitle from "../SubTitle/SubTitle";
import UserPageListItems from "../UserPageListItems/UserPageListItems";
import { useGetFavoriteRecipesQuery } from "../../redux/recipes/recipesApi";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";
import { SubTitleWrapper } from "./ProfilePages.styled";

const MyFavorites = () => {
  const { isMobile } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = isMobile ? 5 : 8;
  const itemsPerPage = isMobile ? 8 : 12;

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const {
    data,
    error: errorMyFavorites,
    isFetching: isFetchingMyFavorites,
    refetch: refetchMyFavorites,
  } = useGetFavoriteRecipesQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  if (errorMyFavorites) return <div>Error loading My Favorites.</div>;
  if (!data) return null;

  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <>
      {isFetchingMyFavorites && <Loader />}
      {data.result.length > 0 ? (
        <>
          <UserPageListItems
            recipes={data.result}
            type="myFavorites"
            refetchRecipes={refetchMyFavorites}
          />
          {totalPages > 1 && !errorMyFavorites && (
            <Paginator
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={data.total}
              onPageChange={onPageChange}
              pageNumbersToShow={pageNumbersToShow}
            />
          )}
        </>
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
