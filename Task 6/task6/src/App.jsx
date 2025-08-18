import { useState } from 'react'
import BackgroundImage from './layouts/BackgroundImage.jsx'
import TopbarSidebar from './layouts/TopbarSidebar.jsx'
import TopbarSidebarLayout from './layouts/TopbarSidebarLayout.jsx'
import OverviewPage from './pages/OverviewPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <BrowserRouter>
        <BackgroundImage toggleSidebar={toggleSidebar} />
        <TopbarSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <TopbarSidebarLayout isOpen={isOpen}>
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </TopbarSidebarLayout>
      </BrowserRouter> 
    </div>
  )
}