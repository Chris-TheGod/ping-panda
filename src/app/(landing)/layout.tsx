import Navbar from "../components/navbar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
