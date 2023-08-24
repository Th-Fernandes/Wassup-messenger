import { MessagesTable } from "@/_types/MessagesTable";
import { supabase } from "@/_utils/supabaseClient";

export function useDatabase() {
  return {
    readAll: {
      async from(table: string, errorHandler?: () => void) {
        const { data, error } = await supabase
          .from<MessagesTable>(table)
          .select("*");

        if (error && errorHandler) return errorHandler();
        return data ;
      }
    },

    insert(newRow:MessagesTable) {
      return {
        newRow,
        async from(table: string, errorHandler?: () => void) {
          const { error } = await supabase
            .from(table)
            .insert(this.newRow);
  
          if (error && errorHandler) return errorHandler();
          return true;
        }
      };
    }
  };
}