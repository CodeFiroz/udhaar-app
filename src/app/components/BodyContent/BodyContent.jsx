"use client"
import { useTheme } from "@/app/context/Themecontext/Themecontext";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const BodyContent = ({children}) => {
  const { sitetheme } = useTheme(); // useTheme only after ThemeProvider is applied

  return (
    <body className={sitetheme}>
    <div className="main-wrapper">
      <div className="main-sidebar">
        <Sidebar />
      </div>
      
      <main>
        <Header />
        <div className="main-container">
          {children}
        </div>
      </main>
    </div>
  </body>
  )
}

export default BodyContent