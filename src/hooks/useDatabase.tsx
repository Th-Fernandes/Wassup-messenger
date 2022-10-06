import { supabase } from "utils/supabaseClient";

interface MessageTableRow {
  username: string,
  message: string,
  session_id: string
}

export function useDatabase() {
  return {
    readAll: {
      async from(table: string, errorHandler?: () => void) {
        const { data, error } = await supabase
          .from(table)
          .select("*");

        if (error) return errorHandler();
        return data;
      }
    },
    insert2: {
      async from(table: string, newContent: MessageTableRow, errorHandler?: () => void) {
        const { error } = await supabase
          .from(table)
          .insert(newContent);

        if (error) return errorHandler();
        return true;
      }
    },

    insert(newRow:MessageTableRow) {
      return {
        newRow,
        async from(table: string, errorHandler?: () => void) {
          const { error } = await supabase
            .from(table)
            .insert(this.newRow);
  
          if (error) return errorHandler();
          return true;
        }
      };
    }
  };
}