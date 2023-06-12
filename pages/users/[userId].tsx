import { useRouter } from "next/router";

import useUser from "@/hooks/useUser";

import Header from "@/components/Header";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";

import { PuffLoader } from "react-spinners";
import PostFeed from "@/components/posts/PostFeed";
import SEO from "@/components/Seo";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div
        className="
          flex
          justify-center
          items-center
          h-full
        "
      >
        <PuffLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <SEO
        pageTitle={`${fetchedUser?.name} (@${fetchedUser?.username}) / Twitter`}
      />
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  );
};

export default UserView;
