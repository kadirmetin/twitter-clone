import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import SEO from "@/components/Seo";

export default function Home() {
  return (
    <>
      <SEO pageTitle="Home / Twitter" />
      <Header label="Home" />
      <Form placeholder="What's happening" />
      <PostFeed />
    </>
  );
}
