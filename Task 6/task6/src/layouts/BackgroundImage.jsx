import bgImage from '../assets/bg.jpeg';

export default function BackgroundImage({ toggleSidebar }) {
        return (
            <div className="BackgroundImage fixed -z-10 h-screen w-screen bg-cover bg-center" style={{
                backgroundImage: `url(${bgImage})`,
            }} onClick={toggleSidebar}>
            </div>
        )
}