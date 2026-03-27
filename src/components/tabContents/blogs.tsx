import {
  startTransition,
  useEffect,
  useState
} from "react";
import BlogCard from "../blog-card";

const ITEMS_PER_PAGE = 4;
const BLOG_QUERY = `
  query Publication {
    publication(host: "shreehari-06.hashnode.dev") {
      posts(first: 10) {
        edges {
          node {
            title
            brief
            url
            readTimeInMinutes
          }
        }
      }
    }
  }
`;

type BlogEdge = {
  node: {
    title: string;
    brief: string;
    url: string;
    readTimeInMinutes: number;
  };
};

export default function Blogs() {
  const [blogData, setBlogData] = useState<BlogEdge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ query: BLOG_QUERY }),
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error("Unable to fetch blogs");
        }

        const data = await response.json();
        const edges = data?.data?.publication?.posts?.edges;
        setBlogData(Array.isArray(edges) ? edges : []);
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
          return;
        }

        setError("Oops! Something went wrong while fetching the blogs.");
      } finally {
        setLoading(false);
      }
    };

    void fetchBlogs();

    return () => controller.abort();
  }, []);

  const hasMore = visibleCount < blogData.length;

  const loadMore = () => {
    startTransition(() => {
      setVisibleCount((current) =>
        Math.min(current + ITEMS_PER_PAGE, blogData.length)
      );
    });
  };

  if (!loading && !error && blogData.length === 0) {
    return null;
  }

  return (
    <section id="blogs" className="section-panel mt-20">
      <div className="flex flex-col gap-4">
        <h2 className="section-heading text-lg">
          <span className="section-heading-accent">/</span>
          blogs
        </h2>

        {loading && (
          <div className="grid gap-1">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="border-t border-white/10 py-6"
              >
                <div className="h-4 w-24 rounded-full bg-white/8"></div>
                <div className="mt-4 h-6 w-3/4 rounded-full bg-white/10"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 rounded-full bg-white/8"></div>
                  <div className="h-3 w-5/6 rounded-full bg-white/8"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-sm text-rose-200">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <div className="grid gap-1">
              {blogData.slice(0, visibleCount).map((item) => (
                <BlogCard
                  key={item.node.url}
                  title={item.node.title}
                  brief={item.node.brief}
                  url={item.node.url}
                  readTime={item.node.readTimeInMinutes}
                />
              ))}
            </div>

            {hasMore && (
              <div className="pt-4">
                <button onClick={loadMore} type="button" className="subtle-button">
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
