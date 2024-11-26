import { ThemeProvider} from "./context/Themecontext/Themecontext"; // Import ThemeProvider and useTheme
import "./globals.css";
import BodyContent from "./components/BodyContent/BodyContent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        {/* Now sitetheme can be used because ThemeProvider is active */}
        <BodyContent>{children}</BodyContent>
      </ThemeProvider>
    </html>
  );
}


