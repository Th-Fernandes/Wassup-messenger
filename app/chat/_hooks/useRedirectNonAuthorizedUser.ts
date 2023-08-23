import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRedirectNonAuthorizedUser() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    const hasSession = auth.getSession() !== null;
    if (!hasSession) router.push("/");
  }, []);
}