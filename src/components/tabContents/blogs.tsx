import { useEffect, useState } from "react"
import axios from "axios"
import BlogCard from "../blog-card"
import { motion } from "framer-motion"




export default function Blogs() {
    const [blogData, setBlogData] = useState([])
    const [loading, setLoading] = useState(true)
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
                console.error("Error fetching blogs:", error)
            }
        }

        fetchBlogs()
    }, [])

    if(loading) {
        return (
            <div className="flex justify-center items-center ">
                    <img src="/infinite-spinner.svg" className="w-1/12 h-1/12" alt="" />
            </div>
        )
    }
    return (
            
        <motion.div 
            className={`grid ${blogData.length > 1 ? "grid-cols-3" : ""} gap-8 `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeIn" }}    
        >
            {blogData.map((item, idx) => (
                <BlogCard
                    key={idx}
                    title={item.node.title}
                    brief={item.node.brief}
                    url={item.node.url}
                    readTime={item.node.readTimeInMinutes}
                />
            ))}
        </motion.div>
    )
}