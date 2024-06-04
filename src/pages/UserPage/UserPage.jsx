import { Outlet } from "react-router-dom";
import Container from "../../components/Container/Container";
import MainTitle from "../../components/MainTitle/MainTitle";
import SubTitle from "../../components/SubTitle/SubTitle";
import UserInfo from "../../components/UserInfo/UserInfo";

import MyRecipes from "../../components/ProfilePages/MyRecipes";
import MyFavorites from "../../components/ProfilePages/MyFavorites";
import Followers from "../../components/ProfilePages/Followers";
import Following from "../../components/ProfilePages/Following";

import { ProfileWrapp, ListWrapp, TabsList, TabsButton } from "./UserPage.styled";
import { useState } from "react";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("My recipes");

  const handleTabChange = tab => {
    setActiveTab(tab);
  };
  return (
    <section>
      <Container>
        <MainTitle label={"Profile"} />
        <SubTitle
          label={
            "Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          }
        />

        <ProfileWrapp>
          <UserInfo />

          <ListWrapp>
            <TabsList>
              <li>
                <TabsButton
                  variant={activeTab === "My recipes" ? "active" : "inactive"}
                  onClick={() => handleTabChange("My recipes")}
                >
                  My recipes
                </TabsButton>
              </li>
              <li>
                <TabsButton
                  variant={activeTab === "My favorites" ? "active" : "inactive"}
                  onClick={() => handleTabChange("My favorites")}
                >
                  My favorites
                </TabsButton>
              </li>

              <li>
                <TabsButton
                  variant={activeTab === "Followers" ? "active" : "inactive"}
                  onClick={() => handleTabChange("Followers")}
                >
                  Followers
                </TabsButton>
              </li>
              <li>
                <TabsButton
                  variant={activeTab === "Following" ? "active" : "inactive"}
                  onClick={() => handleTabChange("Following")}
                >
                  Following
                </TabsButton>
              </li>
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
