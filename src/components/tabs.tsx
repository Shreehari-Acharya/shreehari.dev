import { useState } from "react";
import Experience from "./tabContents/experience";
import { motion, AnimatePresence } from "motion/react"
import Projects from "./tabContents/projects";
import Blogs from "./tabContents/blogs";
import Skills from "./tabContents/skills";
import About from "./tabContents/about";

const tabs = [
    { id: "tab1", label: "Experience", component: <Experience /> },
    { id: "tab2", label: "Projects", component: <Projects/> },
    { id: "tab3", label: "Blogs", component: <Blogs/> },
    { id: "tab4", label: "Skills", component: <Skills/> }, 
    { id: "tab5", label: "About", component: <About /> }
]

export default function TabSection() {
    const [activeTab, setActiveTab] = useState("tab1");
     const activeComponent = tabs.find((tab) => tab.id === activeTab)?.component;

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="tab-section w-full flex flex-col items-center">
            <div className="tab-buttons flex justify-between px-4 mt-3 w-full md:w-1/2 md:text-xl">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? "active text-blue-400 " : "hover:text-slate-300"} cursor-pointer`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content w-full mt-6"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                    >
                        {activeComponent}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}