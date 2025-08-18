
export default function TopbarSidebarLayout({isOpen, children }) {
    return (
        <div>
            <main className={`TopbarSidebarLayout relative pt-16 z-9 p-2 items-center ${isOpen ? "ml-48" : "ml-0"}`}>{children}</main> 
        </div>
    )
}