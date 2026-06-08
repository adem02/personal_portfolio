import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Portfolio } from "./pages/Portfolio";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { LoginPage } from "./pages/admin/LoginPage";
import { ProjectsAdmin } from "./pages/admin/ProjectsAdmin";

function App() {
  return (
    <div className={"min-h-screen overflow-x-clip bg-neutral-950 text-neutral-200 antialiased selection:bg-amber-200 selection:text-neutral-900 grain"}>
      <div className={"fixed top-0 -z-10 h-full w-full"}>
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[60vh] w-[80vw] max-w-[1100px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.10),rgba(255,255,255,0)_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(120,119,198,0.08),rgba(255,255,255,0)_70%)] blur-2xl" />
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
