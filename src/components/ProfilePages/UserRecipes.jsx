import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";
import Paginator from "../Paginator/Paginator";

import { useGetUserRecipesQuery } from "../../redux/users/usersApi";

import SubTitle from "../SubTitle/SubTitle";
import UserPageListItems from "../UserPageListItems/UserPageListItems";
import { SubTitleWrapper } from "./ProfilePages.styled";

const UserRecipes = ({ id }) => {
  const { isMobile } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = isMobile ? 5 : 8;
  const itemsPerPage = isMobile ? 8 : 12;

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const {
    data,
    error: errorUserRecipes,
    isFetching: isFetchingUserRecipes,
    refetch: refetchMyRecipes,
  } = useGetUserRecipesQuery(id);

  if (isFetchingUserRecipes) return <div>Loading...</div>;
  if (errorUserRecipes) return <div>Error loading recipes.</div>;
  if (!data) return null;

  console.log("UserRecipes", data);
  const totalPages = Math.ceil(data.total / itemsPerPage);
  return (
    <>
      {data.result.length > 0 ? (
        <>
          <UserPageListItems
            recipes={data.result}
            type="userRecipes"
            refetchRecipes={refetchMyRecipes}
          />
          {totalPages > 1 && !errorUserRecipes && (
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
              "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
            }
          />
        </SubTitleWrapper>
      )}
    </>
  );
};

export default UserRecipes;
