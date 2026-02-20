import { useEffect, useState } from "react"
import axios from "axios"
import BlogCard from "../blog-card"
import { motion, AnimatePresence } from "framer-motion"

const ITEMS_PER_PAGE = 4

export default function Blogs() {
    const [blogData, setBlogData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.post("https://gql.hashnode.com", {
                    query: `
                    query Publication {
                        publication(host: "shreehari-06.hashnode.dev") {
                            isTeam
                            title
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
                    }`
                })
                setBlogData(data.data.publication.posts.edges)
                setLoading(false)
            } catch (error) {
                setError("Oops! Something went wrong while fetching the blogs.")
                setLoading(false)
                console.error("Error fetching blogs:", error)
            }
        }

        fetchBlogs()
    }, [])

    const hasMore = visibleCount < blogData.length

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, blogData.length))
    }

    if(loading) {
        return (
            <div className="flex justify-center items-center ">
                    <img src="/infinite-spinner.svg" className="w-1/4 md:w-1/12 md:h-1/12" alt="" />
            </div>
        )
    }
    if(error) {
        return (
            <div className="flex justify-center items-center w-full ">
                <p className="text-red-500 text-center w-2/3">{error}</p>
            </div>
        )
    }

    if (blogData.length === 0) {
        return null
    }

    return (
        <motion.div 
            className={`flex flex-col justify-center items-center w-full mt-16 px-4`}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeIn" }}    
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-slate-200 font-Sedan mb-6"
            >
                <span className="text-cyan-400">/</span>blogs
            </motion.h2>

            <AnimatePresence mode="popLayout">
                {blogData.slice(0, visibleCount).map((item, idx) => (
                    <motion.div
                        key={item.node.url}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="w-full max-w-2xl"
                    >
                        <BlogCard
                            title={item.node.title}
                            brief={item.node.brief}
                            url={item.node.url}
                            readTime={item.node.readTimeInMinutes}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>

            {hasMore && (
                <motion.button
                    onClick={loadMore}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 px-6 py-2 text-sm text-slate-300 border border-slate-600/50 rounded-lg hover:border-cyan-400/50 hover:text-cyan-300 transition-colors duration-200"
                >
                    View more
                </motion.button>
            )}
        </motion.div>
    )
}
