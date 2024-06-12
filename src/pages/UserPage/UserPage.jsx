import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Container from "components/Container";
import MainTitle from "components/MainTitle/MainTitle";
import SubTitle from "components/SubTitle";
import UserInfo from "components/UserInfo";

import MyRecipes from "components/ProfilePages/MyRecipes";
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
  const [allActiveTab, setAllActiveTab] = useState("My recipes");
  const [lessActiveTab, setLessActiveTab] = useState("Recipes");

  const isCurrentUserProfile = location.pathname.includes("/user/12");

  const handleTabChange = tab => {
    setAllActiveTab(tab);
    setLessActiveTab(tab);
  };

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
          <UserInfo />

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
