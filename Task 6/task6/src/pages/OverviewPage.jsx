import { motion } from "framer-motion";
import { useState } from 'react';
import Layout from '../layouts/TopbarSidebarLayout.jsx';
import BarChart from "../components/BarChart.jsx";
import { useNavigate } from "react-router-dom";

export default function OverviewPage() {
    const [isExpanded, setIsExpanded] = useState(false);
    const nav = useNavigate();
    const performNav = () => {
        nav("/projects");
    }

    return (
    <Layout>
        <h1 className="OverviewPage text-white text-center font-bold text-[96px] pb-2">OVERVIEW</h1>
        <p className="text-center text-lg text-white font-bold text-[16px] pb-10">This is the overview page where you can find general information and insights. Click on any one to view a detailed view.</p>
        <div className="flex flex-col items-center rounded-lg shadow-lg bg-[rgba(1,1,1,0.8)] pt-20 pb-20 pr-20 pl-20 mt-14 mb-24 mr-28 ml-28 sm:mr-44 sm:ml-44 lg:mr-18 lg:ml-18">

            <div className="grid grid-cols-1 gap-x-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">

                <div className="text-center bg-yellow-400 p-8 aspect-square h-72 w-72 md:h-50 md:w-50 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mb-4 cursor-pointer hover:bg-[rgba(128,117,0,0.6)] transition duration-300 flex flex-col items-center justify-center" onClick={performNav}>
                    <p className="font-bold text-3xl">ACTIVE PROJECTS:</p>
                    <p className="mt-6 text-3xl text-black font-semibold">5</p>
                </div>

                <motion.div 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="relative bg-[rgba(77,255,86,1)] transition-all duration-300 ease-in-out flex flex-col items-center h-72 w-72 md:h-50 md:w-50 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mb-4 aspect-square p-8 cursor-pointer hover:bg-[rgba(77,255,86,0.5)]" 
                    layout
                    transition={{ duration: 0.3, type:"tween" }}
                    style={{
                        position: isExpanded ? "absolute" : "relative",
                        top: isExpanded ? "5" : undefined,
                        left: isExpanded ? "0" : undefined,
                        width: isExpanded ? "100%" : undefined,
                        height: isExpanded ? "50rem" : undefined,
                        textAlign: isExpanded ? "left" : "left",
                        backgroundColor: isExpanded ? "rgba(255,255,255,255)" : "rgba(77,255,86,1)",
                        color: isExpanded ? "rgba(1,1,1,1)" : undefined,
                    }}
                    >
                        <div className="text-center p-8">
                            <p className="font-bold text-3xl">MONTHLY EARNINGS:</p>
                            <p className="mt-6 text-3xl text-black font-semibold">$10,000</p>  
                        </div>
                    
                        {isExpanded && (
                        <motion.div
                            className="mt-2 text-sm"
                        >
                            <p className="text-black font-bold">This section provides detailed insights into the monthly earnings, letting you view a bar chart on your previous earnings.</p>
                            <p className="text-black text-center font-bold mb-4">If you want to return to the dashboard, you may do so by clicking anywhere on this section to minimize it.</p>

                            <BarChart 
                            data={{ labels: ["January", "February", "March", "April", "May", "June", "July", "August"], values: [2500, 3000, 4100, 2300, 5000, 8000, 7000, 10000] }}
                            options={{ responsive: true, plugins: { legend: { display: true }, title: { display: true, text: "Monthly Earnings" } } }}
                            />

                        </motion.div>
                        )}
                    </motion.div>

                <div className="text-center bg-red-500 p-8 aspect-square h-72 w-72 md:h-50 md:w-50 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mb-3 cursor-pointer hover:bg-[rgba(150,0,0,0.6)] transition duration-300 flex flex-col items-center justify-center">
                    <p className="font-bold text-3xl">PENDING TASKS:</p>
                    <p className="mt-6 text-3xl text-black font-semibold">3</p>
                </div>

            </div>
        </div>

        <div className="mt-14 mb-24 mr-36 ml-36 sm:mr-30 sm:ml-30 lg:mr-18 lg:ml-18">
            <h2 className="text-white text-center font-bold text-4xl mb-8">RECENT ACTIVITIES</h2>
            <div className="flex justify-center">
                <div className="bg-[rgba(1,1,1,0.8)] sm:w-screen pt-8 pb-8 pr-12 pl-12 mt-4 mb-4 rounded-lg shadow-lg w-full max-w-2xl">
                    <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                        <th className="py-3 px-4 text-left">Activity</th>
                        <th className="py-3 px-4 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        <tr className="border-b hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">Project Alpha started</td>
                        <td className="py-2 px-4">01/01/2023</td>
                        </tr>
                        <tr className="border-b hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">Task Beta completed</td>
                        <td className="py-2 px-4">02/01/2023</td>
                        </tr>
                        <tr className="hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">New client added</td>
                        <td className="py-2 px-4">03/01/2023</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="mt-14 mb-24 mr-36 ml-36 sm:mr-30 sm:ml-30 lg:mr-18 lg:ml-18">
            <h2 className="text-white text-center font-bold text-4xl mb-8">UPCOMING DEADLINES</h2>
            <div className="flex justify-center">
                <div className="bg-[rgba(1,1,1,0.8)] sm:w-screen pt-8 pb-8 pr-12 pl-12 mt-4 mb-4 rounded-lg shadow-lg w-full max-w-2xl">
                    <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                        <th className="py-3 px-4 text-left">Project</th>
                        <th className="py-3 px-4 text-left">Deadline</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        <tr className="border-b hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">Project Alpha</td>
                        <td className="py-2 px-4">15/01/2023</td>
                        </tr>
                        <tr className="border-b hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">Task Beta</td>
                        <td className="py-2 px-4">20/01/2023</td>
                        </tr>
                        <tr className="hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">Client meeting with Jane Smith</td>
                        <td className="py-2 px-4">25/01/2023</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
  );
}