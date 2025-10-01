import { ThemeProvider } from "@/components/theme-provider";
import { AppFooter, AppHeader, AppSidebar } from "./components/common";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
            {/* 카테고리 사이드바 */}
            <AppSidebar />
            {/* 토픽 컨텐츠 */}
            <section></section>
          </main>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>

  );
}

export default App;
