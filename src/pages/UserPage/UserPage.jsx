import { Outlet } from "react-router-dom";
import Container from "components/Container";
import MainTitle from "components/MainTitle/MainTitle";
import SubTitle from "components/SubTitle";
import UserInfo from "components/UserInfo";

import MyRecipes from "components/ProfilePages/MyRecipes";
import MyFavorites from "components/ProfilePages/MyFavorites";
import Followers from "components/ProfilePages/Followers";
import Following from "components/ProfilePages/Following";

import { TitleWrapp, ProfileWrapp, ListWrapp, TabsList, TabsButton } from "./UserPage.styled";
import { useState } from "react";
const tabs = [
  { id: 1, tab: "My recipes", label: "My recipes" },
  { id: 2, tab: "My favorites", label: "My favorites" },
  { id: 3, tab: "Followers", label: "Followers" },
  { id: 4, tab: "Following", label: "Following" },
];
const UserPage = () => {
  const [activeTab, setActiveTab] = useState("My recipes");

  const handleTabChange = tab => {
    setActiveTab(tab);
  };
  return (
    <section>
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
            <TabsList>
              {tabs.map(({ id, label, tab }) => (
                <li key={id}>
                  <TabsButton
                    variant={activeTab === label ? "active" : "inactive"}
                    onClick={() => handleTabChange(tab)}
                  >
                    {label}
                  </TabsButton>
                </li>
              ))}
            </TabsList>
            {activeTab === "My recipes" && <MyRecipes />}
            {activeTab === "My favorites" && <MyFavorites />}
            {activeTab === "Followers" && <Followers />}
            {activeTab === "Following" && <Following />}

            <Outlet />
          </ListWrapp>
        </ProfileWrapp>
      </Container>
    </section>
  );
};

export default UserPage;
