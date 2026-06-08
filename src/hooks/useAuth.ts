import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const { user, loading, login, logout } = useAuthContext();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setError(null);
    setSubmitting(true);
    try {
      await login(email, password);
    } catch {
      setError("Email ou mot de passe incorrect.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return { user, loading, error, submitting, handleLogin, handleLogout };
};
