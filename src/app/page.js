import MainContent from "@/components/MainContent/MainContent";
import { getPosts } from "./lib/api";
import Head from "next/head";

export const getData = async () => {
  const posts = await getPosts();
  return posts.posts;
};

export default async function Home() {
  const posts = await getData();
  return (
    <>
      <Head></Head>
      <MainContent posts={posts} />
    </>
  );
}
