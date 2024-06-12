import { Outlet, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Container from "components/Container";
import MainTitle from "components/MainTitle/MainTitle";
import SubTitle from "components/SubTitle";
import UserInfo from "components/UserInfo";

import MyRecipes from "components/ProfilePages/MyRecipes";
import MyFavorites from "components/ProfilePages/MyFavorites";
import Followers from "components/ProfilePages/Followers";
import Following from "components/ProfilePages/Following";

import { useGetUserInfoQuery } from "../../redux/users/usersApi";

import {
  SectionWrapper,
  TitleWrapp,
  ProfileWrapp,
  ListWrapp,
  TabsList,
  TabsButton,
} from "./UserPage.styled";
import { useState } from "react";
const allTabs = [
  { id: 1, tab: "My recipes", label: "My recipes" },
  { id: 2, tab: "My favorites", label: "My favorites" },
  { id: 3, tab: "Followers", label: "Followers" },
  { id: 4, tab: "Following", label: "Following" },
];

const lessTabs = [
  { id: 1, tab: "Recipes", label: "Recipes" },
  { id: 2, tab: "Followers", label: "Followers" },
];

const UserPage = () => {
  const location = useLocation();
  const { userId } = useParams();
  const [allActiveTab, setAllActiveTab] = useState("My recipes");
  const [lessActiveTab, setLessActiveTab] = useState("Recipes");

  const currentUserId = "666a03962990091f7536e7e6"; // Замініть на фактичний ID поточного користувача
  const isCurrentUserProfile = location.pathname.includes("/user/666a03962990091f7536e7e6");
  // const isCurrentUserProfile = userId === currentUserId;

  const handleTabChange = tab => {
    setAllActiveTab(tab);
    setLessActiveTab(tab);
  };

  // const { data } = useGetRecipiesQuery({
  //   page: 1,
  //   limit: 5,
  //   category: "Dessert",
  //   area: "French",
  //   ingredient: "Icing Sugar",
  // });

  const {
    data: dataUserInfo,
    error: errorUserInfo,
    isFetching: isFetchingUserInfo,
  } = useGetUserInfoQuery(isCurrentUserProfile);

  if (isFetchingUserInfo) return <div>Loading...</div>;
  if (errorUserInfo) return <div>Error loading recipes.</div>;
  if (!dataUserInfo) return null;
  console.log(dataUserInfo);
  console.log(dataUserInfo.name);
  return (
    <SectionWrapper>
      <Container>
        <TitleWrapp>
          <MainTitle
            as={"h1"}
            label={"Profile"}
          />
        </TitleWrapp>
        <SubTitle
          label={
            "Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          }
        />

        <ProfileWrapp>
          <UserInfo
            isCurrentUserProfile={isCurrentUserProfile}
            avatar={dataUserInfo.avatar}
            name={dataUserInfo.name}
            email={isCurrentUserProfile ? dataUserInfo.email : null}
            recipesCount={dataUserInfo.recipesCount}
            favoritesCount={dataUserInfo.favoritesCount}
            followersCount={dataUserInfo.followersCount}
            followingCount={dataUserInfo.followingCount}
          />

          <ListWrapp>
            {isCurrentUserProfile ? (
              <>
                <TabsList>
                  {allTabs.map(({ id, label, tab }) => (
                    <li key={id}>
                      <TabsButton
                        variant={allActiveTab === label ? "active" : "inactive"}
                        onClick={() => handleTabChange(tab)}
                      >
                        {label}
                      </TabsButton>
                    </li>
                  ))}
                </TabsList>
              </>
            ) : (
              <>
                <TabsList>
                  {lessTabs.map(({ id, label, tab }) => (
                    <li key={id}>
                      <TabsButton
                        variant={lessActiveTab === label ? "active" : "inactive"}
                        onClick={() => handleTabChange(tab)}
                      >
                        {label}
                      </TabsButton>
                    </li>
                  ))}
                </TabsList>
              </>
            )}

            {isCurrentUserProfile ? (
              <>
                {allActiveTab === "My recipes" && <MyRecipes />}
                {allActiveTab === "My favorites" && <MyFavorites />}
                {allActiveTab === "Followers" && <Followers />}
                {allActiveTab === "Following" && <Following />}
              </>
            ) : (
              <>
                {lessActiveTab === "Recipes" && <MyRecipes />}
                {lessActiveTab === "Followers" && <Followers />}
              </>
            )}

            <Outlet />
          </ListWrapp>
        </ProfileWrapp>
      </Container>
    </SectionWrapper>
  );
};

export default UserPage;
