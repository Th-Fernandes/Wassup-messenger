import { supabase } from "utils/supabaseClient";

export const supabaseAuthActions = {
  async signIn({email, password, onError, thenDo}) {
    const {error: signInError } = await supabase.auth.signIn({
      email,
      password,
    });

    if(signInError) {
      onError(signInError.message);
      throw new Error(`não foi possível realizar login. ${signInError.message}`); 
    }

    thenDo();
  },

  async signUp({email, password, onError, thenDo}) {
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if(signUpError) {
      onError(signUpError.message);
      throw new Error(`não foi possível realizar cadastro. ${signUpError.message}`); 
    }

    thenDo ? thenDo() : null;

  },

  async signOut({onError, thenDo}) {
    const { error } = await supabase.auth.signOut();

    !error ? thenDo() : onError(error.message);
  },

  async getSessionInfo({hasSession, hasNotSession}) {
    const session = supabase.auth.session();

    if(session ) {
      hasSession ? hasSession(session) : null;
    } else {
      hasNotSession ? hasNotSession() : null;
    }
  },

  async updateUserInfo({update, onError}) {
    const { error } = await supabase.auth.update(update);

    if(error) onError ? onError() : null;
  }
};