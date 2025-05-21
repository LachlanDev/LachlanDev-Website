import { Avatar } from "@heroui/react";
import profilePic from "../img/profile.png";

export const ProfileHeader = () => {
  return (
    <div className="flex justify-center pt-8 pb-4">
      {/* Avatar */}
      <Avatar
        src={profilePic}
        className="w-40  h-40 text-large"
        isBordered="false"
        color="#121214"
      />
    </div>
  );
};