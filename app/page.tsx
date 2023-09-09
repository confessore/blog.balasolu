import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose max-w-full dark:prose-invert">
      {allPosts
        .sort((x, y) => Date.parse(y.date) - Date.parse(x.date))
        .map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
    </div>
  );
}
