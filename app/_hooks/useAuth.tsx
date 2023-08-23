import { ApiError } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React from "react"; 
import { supabase } from "../_utils/supabaseClient";

export function useAuth() {
  const router = useRouter();
  const [authError, setAuthError] = React.useState<ApiError | null>(null);
  const [isSignActionLoading, setIsSignActionLoading] = React.useState<boolean>(false);

  function cleanPreviousAuthError() {
    setAuthError(null);
  }

  function getSession() {
    return supabase.auth.session();
  }

  async function signIn(email:string, password:string){
    cleanPreviousAuthError();
    setIsSignActionLoading(true);

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      setAuthError(error);
      setIsSignActionLoading(false);
      return;
    }
     
    router.push("/chat");
    setIsSignActionLoading(false);
  }

  async function signUp(email:string, password:string, username:string) {
    cleanPreviousAuthError();
    setIsSignActionLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    },
    {
      data: {
        username
      }
    });

    if(error) setAuthError(error);
    setIsSignActionLoading(false);
  
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if(error) return error;
    return true;
  }

  const actions = {
    signIn,
    signOut,
    signUp,
    getSession,
    authError: authError?.message,
    isSignActionLoading
  };

  return actions; 
}