import bgImage from '../assets/bg.jpg';

export default function BackgroundImage() {
        return (
            <div className="BackgroundImage fixed z-10 h-screen w-screen bg-cover bg-center" style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            </div>
        )
}