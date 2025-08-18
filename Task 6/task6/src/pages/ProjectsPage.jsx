import { motion } from "framer-motion";
import { useState } from 'react';
import Layout from '../layouts/TopbarSidebarLayout.jsx';
import BarChart from "../components/BarChart.jsx";

export default function OverviewPage() {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
    <Layout>
        <h1 className="OverviewPage text-white text-center font-bold text-[96px] pb-2">PROJECTS</h1>
        <p className="text-center text-lg text-white font-bold text-[16px] pb-10">This is the projects page where you can find information about all your projects.</p>

        <div className="mt-14 mb-24 mr-36 ml-36 sm:mr-30 sm:ml-30 lg:mr-18 lg:ml-18">
            <h2 className="text-white text-center font-bold text-4xl mb-8">LIST OF PROJECTS</h2>
            <div className="flex justify-center">
                <div className="bg-[rgba(1,1,1,0.8)] sm:w-screen p-2 mt-4 mb-4 rounded-lg shadow-lg w-full max-w-3xl">
                    <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                        <th className="py-3 px-4 text-left">Project Name</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Deadline</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        <tr className="border-b hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">Project Alpha</td>
                        <td className="py-2 px-4">In Progress</td>
                        <td className="py-2 px-4">04/09/2025</td>
                        </tr>
                        <tr className="border-b hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">Project Beta</td>
                        <td className="py-2 px-4">Completed</td> 
                        <td className="py-2 px-4">02/10/2025</td>
                        </tr>
                        <tr className="hover:bg-blue-100 hover:text-black">
                        <td className="py-2 px-4">Project Insight</td>
                        <td className="py-2 px-4">In Progress</td>
                        <td className="py-2 px-4">01/02/2026</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
  );
}