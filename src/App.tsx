import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Portfolio } from "./pages/Portfolio";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { LoginPage } from "./pages/admin/LoginPage";
import { ProjectsAdmin } from "./pages/admin/ProjectsAdmin";

function App() {
  return (
    <div className={"min-h-screen overflow-x-clip bg-neutral-950 text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"}>
      <div className={"fixed top-0 -z-10 h-full w-full"}>
        <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<ProjectsAdmin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
