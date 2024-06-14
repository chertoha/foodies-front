// import { useState, useEffect } from "react";
// import { useAuth } from "../../hooks/useAuth";
// import { useFollowUserMutation, useUnfollowUserMutation } from "../../redux/users/usersApi";

// import { Modal } from "components/Modal/Modal";
// import LogOut from "components/LogOut";
// import { useModalWindow } from "hooks/useModalWindow";
// import UserAvatar from "../../components/UserAvatar/UserAvatar";
// import sprite from "assets/images/icons/sprite.svg";
// import ActiveButton from "components/Buttons/ActiveButton/ActiveButton";
// import {
//   UserInfoWrapp,
//   UserCard,
//   UserCardTitle,
//   UserCardInfo,
//   UserCardtext,
//   UserCardspan,
//   IconWrapp,
//   Button,
//   Icon,
// } from "./UserInfo.styled";

// const MyUserInfo = ({
//   isCurrentUserProfile,
//   userId,
//   avatar,
//   name,
//   email,
//   recipesCount,
//   favoritesCount,
//   followersCount,
//   followingCount,
// }) => {
//   const { user } = useAuth();

//   const [isFollowing, setIsFollowing] = useState(false);
//   const [followUser] = useFollowUserMutation();
//   const [unfollowUser] = useUnfollowUserMutation();

//   const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModalWindow();
//   // const [isOpen, setIsOpen] = useState(false);

//   // const close = () => setIsOpen(false);

//   useEffect(() => {
//     if (user.following) {
//       const isFollowingUser = user.following.includes(userId);
//       setIsFollowing(isFollowingUser);
//     }
//   }, [user.following, userId]);

//   // const onClickLogOut = () => {
//   //   setIsOpen(true);
//   //   console.log("click", isOpen);
//   // };

//   const handleFollowClick = async () => {
//     if (isFollowing) {
//       try {
//         await unfollowUser(userId).unwrap();
//         setIsFollowing(false);
//       } catch (error) {
//         console.error("Failed to unfollow user:", error);
//       }
//     } else {
//       try {
//         await followUser(userId).unwrap();
//         setIsFollowing(true);
//       } catch (error) {
//         console.error("Failed to follow user:", error);
//       }
//     }
//   };
//   return (
//     <UserInfoWrapp>
//       {isCurrentUserProfile ? (
//         <>
//           <div>
//             <UserCard>
//               <IconWrapp>
//                 <UserAvatar
//                   size={[80, 120, 120]}
//                   src={avatar}
//                 />
//                 <Button>
//                   <Icon>
//                     <use href={sprite + "#icon-plus"}></use>
//                   </Icon>
//                 </Button>
//               </IconWrapp>
//               <UserCardTitle>{name}</UserCardTitle>
//               <UserCardInfo>
//                 <UserCardtext>
//                   <UserCardspan>Email: {email}</UserCardspan>
//                 </UserCardtext>
//                 <UserCardtext>
//                   <UserCardspan>Added recipes: {recipesCount}</UserCardspan>
//                 </UserCardtext>
//                 <UserCardtext>
//                   <UserCardspan>Favorites: {favoritesCount}</UserCardspan>
//                 </UserCardtext>
//                 <UserCardtext>
//                   <UserCardspan>Followers: {followersCount}</UserCardspan>
//                 </UserCardtext>
//                 <UserCardtext>
//                   <UserCardspan>Following: {followingCount}</UserCardspan>
//                 </UserCardtext>
//               </UserCardInfo>
//             </UserCard>
//             <ActiveButton
//               label={"log out"}
//               onClick={openModal}
//             />
//           </div>
//           {isModalOpen && (
//             <Modal onClose={closeModal}>
//               <LogOut onClose={closeModal} />
//             </Modal>
//           )}
//         </>
//       ) : (
//         <>
//           <UserCard>
//             <IconWrapp>
//               <UserAvatar
//                 size={[80, 120, 120]}
//                 src={avatar}
//               />
//             </IconWrapp>
//             <UserCardTitle>{name}</UserCardTitle>
//             <UserCardInfo>
//               <UserCardtext>
//                 <UserCardspan>Added recipes: {recipesCount}</UserCardspan>
//               </UserCardtext>

//               <UserCardtext>
//                 <UserCardspan>Followers: {followersCount}</UserCardspan>
//               </UserCardtext>
//             </UserCardInfo>
//           </UserCard>
//           <ActiveButton
//             label={isFollowing ? "Unfollow" : "Follow"}
//             onClick={handleFollowClick}
//           />
//         </>
//       )}
//     </UserInfoWrapp>
//   );
// };

// export default MyUserInfo;

import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import LogOut from "components/LogOut";
import { useModalWindow } from "hooks/useModalWindow";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import sprite from "assets/images/icons/sprite.svg";
import ActiveButton from "components/Buttons/ActiveButton/ActiveButton";
import { allowedImageMIMETypes } from "utils/allowedImageMimeTypes";
import {
  UserInfoWrapp,
  UserCard,
  DropZone,
  UserCardTitle,
  UserCardInfo,
  UserCardtext,
  UserCardspan,
  IconWrapp,
  Button,
  Icon,
} from "./UserInfo.styled";

const MyUserInfo = ({
  avatar,
  name,
  email,
  recipesCount,
  favoritesCount,
  followersCount,
  followingCount,
}) => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModalWindow();
  const [dragIsOver, setDragIsOver] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleDragOver = e => {
    e.preventDefault();
    setDragIsOver(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setDragIsOver(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    setDragIsOver(false);

    // if (preview) return;

    // const file = Array.from(e.dataTransfer.files)[0];
    // file && handleFile(file);
  };

  // try {
  //   const formData = new FormData();
  //   Object.keys(data).forEach(key => {
  //     if (key === "ingredients") {
  //       data[key].forEach((ingredient, index) => {
  //         formData.append(`ingredients[${index}][ingredient]`, ingredient.ingredient);
  //         formData.append(`ingredients[${index}][amount]`, ingredient.amount);
  //       });
  //     } else {
  //       formData.append(key, data[key]);
  //     }
  //   });

  // const handleFile = file => {
  //   if (!allowedImageMIMETypes.includes(file.type)) {
  //     setError(name, {
  //       type: "custom",
  //       message: `Wrong file type!. Allowed types: ${allowedImageMIMETypes.join(", ")}`,
  //     });
  //     return;
  //   }

  //   clearErrors(name);

  //   setPreview(URL.createObjectURL(file));
  //   setValue(name, file);
  // };

  const onIputFile = e => {
    const file = e.target.files[0];
    // file && handleFile(file);
    setPreview(URL.createObjectURL(file));
    // setValue(name, file);
  };
  return (
    <UserInfoWrapp>
      <div>
        <UserCard>
          <IconWrapp>
            {/* <UserAvatar
              size={[80, 120, 120]}
              src={avatar}
            /> */}
            {/* <Button>
              <Icon>
                <use href={sprite + "#icon-plus"}></use>
              </Icon>
            </Button> */}
            {!preview ? (
              <DropZone
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept={allowedImageMIMETypes.join(",")}
                  onChange={onIputFile}
                  hidden
                  disabled={preview}
                />
              </DropZone>
            ) : (
              <UserAvatar
                size={[80, 120, 120]}
                src={avatar}
              />
            )}
          </IconWrapp>
          <UserCardTitle>{name}</UserCardTitle>
          <UserCardInfo>
            <UserCardtext>
              <UserCardspan>Email: {email}</UserCardspan>
            </UserCardtext>
            <UserCardtext>
              <UserCardspan>Added recipes: {recipesCount}</UserCardspan>
            </UserCardtext>
            <UserCardtext>
              <UserCardspan>Favorites: {favoritesCount}</UserCardspan>
            </UserCardtext>
            <UserCardtext>
              <UserCardspan>Followers: {followersCount}</UserCardspan>
            </UserCardtext>
            <UserCardtext>
              <UserCardspan>Following: {followingCount}</UserCardspan>
            </UserCardtext>
          </UserCardInfo>
        </UserCard>
        <ActiveButton
          label={"log out"}
          onClick={openModal}
        />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <LogOut onClose={closeModal} />
        </Modal>
      )}
    </UserInfoWrapp>
  );
};

export default MyUserInfo;
