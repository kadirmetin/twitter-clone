import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import SEO from "@/components/Seo";
import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Notifications = () => {
  return (
    <>
      <SEO pageTitle="Notifications / Twitter" />
      <Header label="Notifications" showBackArrow />
      <NotificationsFeed />
    </>
  );
};

export default Notifications;
