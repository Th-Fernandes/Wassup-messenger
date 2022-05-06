import { supabase } from "../common/utils/supabaseClient"

export const supabaseAuthActions = {
  async signIn({email, password, onError, thenDo}) {
    const { user, session, error: signInError } = await supabase.auth.signIn({
      email,
      password,
    })

    if(signInError) {
      onError(signInError.message)
      throw new Error(`não foi possível realizar login. ${signInError.message}`) 
    }

    thenDo(signInError)
  },

  async signUp({email, password, onError, thenDo}) {
    const { user, session, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if(signUpError) {
      onError(signUpError.message)
      throw new Error(`não foi possível realizar cadastro. ${signUpError.message}`) 
    }

    thenDo(signUpError)

  },

  async getSessionInfo({hasSession, hasNotSession}) {
    const session = supabase.auth.session()

    if(session) {
      hasSession(session)
    } else {
      hasNotSession ? hasNotSession() : null
    }
  }
}