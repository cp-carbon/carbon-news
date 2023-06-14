import axios from "axios";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

async function getNews() {
  const res = await axios.get("http://localhost:3000/api/news");
  return res.data.articles;
}

export default async function Post() {
  const news = await getNews();

  return (
    <>
      {news && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {news.slice(0, 6).map((post, index) => (
              <PostList
                key={index}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {news.slice(6, 12).map((post, index) => (
              <PostList key={index} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all news</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
