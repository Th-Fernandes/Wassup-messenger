import { supabase } from "../common/utils/supabaseClient"

export const supabaseDatabaseActions = {
  async insert({inTable, createRow, thenDo}) {
    const { data, error } = await supabase
      .from(inTable)
      .insert(createRow)

      if(error) throw new Error(`não foi possível enviar a requisição ao banco de dados: ${error.message}`)
      thenDo ? thenDo(data) : null
  },
  async readAll({inTable, thenDo}) {
    const { data, error } = await supabase
      .from(inTable)
      .select('*')
      .order('id', { ascending: true })  

    console.log(data)  
    if(error) throw new Error(`não foi possível receber a respostar do banco de dados: ${error.message}`)
    thenDo ? thenDo(data) : null
  }
}

