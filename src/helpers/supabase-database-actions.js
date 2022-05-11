import { supabase } from "../common/utils/supabaseClient"

export const supabaseDatabaseActions = {
  async insert({ inTable, createRow, thenDo }) {
    const { data, error } = await supabase
      .from(inTable)
      .insert(createRow)

    if (error) throw new Error(`não foi possível enviar a requisição ao banco de dados: ${error.message}`)
    thenDo ? thenDo(data) : null
  },

  async readAll({ inTable, thenDo }) {
    const { data, error } = await supabase
      .from(inTable)
      .select('*')
      .order('id', { ascending: true })

    console.log(data)
    if (error) throw new Error(`não foi possível receber a resposta do banco de dados: ${error.message}`)
    thenDo ? thenDo(data) : null
  },

  async update({ inTable, updateRow, match, thenDo }) {
    const { data, error } = await supabase
      .from(inTable)
      .update(updateRow)
      .match(match)

    if (error) throw new Error(`não foi possível atualizar do banco de dados: ${error}`)
    thenDo ? thenDo() : null
  },

  async delete({inTable, match, thenDo}) {
    const { data, error } = await supabase
      .from(inTable)
      .delete()
      .match(match)
    
    if (error) throw new Error(`não foi possível deletar dados: ${error.message}`)
    thenDo ? thenDo() : null
  }
}

