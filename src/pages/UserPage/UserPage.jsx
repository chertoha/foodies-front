import { Outlet, useParams } from "react-router-dom";
import { useState } from "react";
// import { useLocation } from "react-router-dom";

import { useGetUserInfoQuery } from "../../redux/users/usersApi";
import { useAuth } from "hooks/useAuth";

import Container from "components/Container";
import MainTitle from "components/MainTitle/MainTitle";
import SubTitle from "components/SubTitle";
import UserInfo from "components/UserInfo";

import MyRecipes from "components/ProfilePages/MyRecipes";
import UserRecipes from "components/ProfilePages/UserRecipes";
import MyFavorites from "components/ProfilePages/MyFavorites";
import Followers from "components/ProfilePages/Followers";
import Following from "components/ProfilePages/Following";

import {
  SectionWrapper,
  TitleWrapp,
  ProfileWrapp,
  ListWrapp,
  TabsList,
  TabsButton,
} from "./UserPage.styled";

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
  // const location = useLocation();
  const { id } = useParams();
  const { user } = useAuth();
  const [allActiveTab, setAllActiveTab] = useState("My recipes");
  const [lessActiveTab, setLessActiveTab] = useState("Recipes");

  // console.log("useAuth", user);
  // console.log("id", id);

  const currentUserId = user._id;
  const isCurrentUserProfile = id === currentUserId;

  const handleTabChange = tab => {
    setAllActiveTab(tab);
    setLessActiveTab(tab);
  };

  const {
    data: dataUserInfo,
    error: errorUserInfo,
    isFetching: isFetchingUserInfo,
  } = useGetUserInfoQuery(id);

  if (isFetchingUserInfo) return <div>Loading...</div>;
  if (errorUserInfo) return <div>Error loading UserPage.</div>;
  if (!dataUserInfo) return null;
  // console.log("dataUserInfo", dataUserInfo);

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
        {/* {errorUserInfo && ( */}
        <ProfileWrapp>
          <UserInfo
            isCurrentUserProfile={isCurrentUserProfile}
            userId={id}
            avatar={dataUserInfo.avatar}
            name={dataUserInfo.name}
            email={dataUserInfo.email}
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
                {allActiveTab === "Followers" && <Followers id={id} />}
                {allActiveTab === "Following" && <Following />}
              </>
            ) : (
              <>
                {lessActiveTab === "Recipes" && <UserRecipes id={id} />}
                {lessActiveTab === "Followers" && <Followers id={id} />}
              </>
            )}

            <Outlet />
          </ListWrapp>
        </ProfileWrapp>
        {/* )} */}
      </Container>
    </SectionWrapper>
  );
};

export default UserPage;
