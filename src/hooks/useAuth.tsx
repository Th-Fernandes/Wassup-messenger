import { supabase } from "utils/supabaseClient";

export function useAuth() {
  return {
    getSession() {
      return supabase.auth.session();
    },

    async signIn(email:string, password:string, handleError:any){
      const { error } = await supabase.auth.signIn({
        email,
        password,
      });

      if(error) {
        handleError(error);
        return false;
      }
      return true;
    },

    async signUp(email:string, password:string, username:string, handleError:any) {
      const { error } = await supabase.auth.signUp(
        {
          email,
          password,
        },
        {
          data: {
            username
          }
        }
      );

      if(error) {
        handleError(error);
        return false;
      }
      return true;
    },

    async signOut() {
      const { error } = await supabase.auth.signOut();

      if(error) return error;
      return true;
    }
  };
}