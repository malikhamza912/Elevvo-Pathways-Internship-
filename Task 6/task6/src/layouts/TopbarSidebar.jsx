import { useNavigate } from "react-router-dom"
import { useState } from 'react';

export default function TopbarSidebar({isOpen, toggleSidebar})
{
    const [isToggled, setIsToggled] = useState(false);
    const toggleNotif = () => {
        setIsToggled(!isToggled);
    }

    const nav = useNavigate();
    const performNav = () => {
        nav("/projects");
    }

    const performNavToOverview = () => {
        nav("/");
    }
    return (
        <div>
            <div className="TopBar z-10 fixed w-screen bg-gradient-to-r from-black to-slate-900 border-white text-white flex flex-row items-center justify-between h-24 align-text-top shadow-lg">
                <div>
                    <i className="fa-solid fa-bars ml-2 text-2xl lg:hover:cursor-pointer" onClick={toggleSidebar}></i>
                </div>

                <div className="align-text-top w-screen p-2 flex flex-row space-x-3 items-center justify-between overflow-hidden">
                    <h1 className="font-bold ml-3 lg:ml-4 text-3xl">Workly</h1>
                    <p className="text-lg">Manage. Track. Succeed.</p>
                    <button className="text-[16px] border-b-black pt-1 rounded-3xl bg-gray-700 pb-1 pl-2 pr-2 mr-4 border-white hover:cursor-pointer hover:bg-white hover:text-black">Log Out</button>
                </div>

                <div>
                    <i className="absolute right-29 text-gray-700 top-9 fa-solid fa-bell ml-2 text-2xl lg:hover:cursor-pointer hover:text-white hover:text-3xl transition transform duration-300" onClick={toggleNotif}></i>
                </div>
            </div>

            <div className={`NotifBar z-2 flex absolute right-15 top-24 bg-black text-white flex-col h-auto max-h-[300px] w-36 lg:justify-between transform transition-transform duration-300 ease-in-out ${isToggled ? "translate-y-0" : "translate-y-[-100%]"}`}>
                <div className="flex flex-col gap-1 text-[12px] text-center text-black p-1">
                    <p className="p-2 bg-cyan-200 hover:bg-cyan-400">New comment on your task</p>
                    <p className="p-2 bg-green-200 hover:bg-green-400">Project deadline approaching</p>
                    <p className="p-2 bg-blue-200 hover:bg-blue-400">New task assigned to you</p>
                    
                </div>
            </div>

            <div className={`Sidebar z-10 flex fixed mt-24 bg-black text-white flex-col h-screen lg:min-h-full w-48 lg:justify-between transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-[-100%]"}`}>
                <div className="flex flex-col gap-3">
                    <button className="p-4 hover:bg-gray-700 hover:cursor-pointer" onClick={performNavToOverview}>Overview</button>
                    <button className="p-4 hover:bg-gray-700 hover:cursor-pointer" onClick={performNav}>Projects</button>
                    <button className="p-4 hover:bg-gray-700 hover:cursor-pointer">Tasks</button>
                    <button className="p-4 hover:bg-gray-700 hover:cursor-pointer">Settings</button>
                </div>
            </div>
        </div>
    )
}