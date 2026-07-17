export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      box_bidders: {
        Row: {
          bidder_id: string
          box_id: number
          id: string
        }
        Insert: {
          bidder_id: string
          box_id: number
          id: string
        }
        Update: {
          bidder_id?: string
          box_id?: number
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "box_bidders_bidder_id_fkey"
            columns: ["bidder_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "box_bidders_box_id_fkey"
            columns: ["box_id"]
            isOneToOne: false
            referencedRelation: "boxes"
            referencedColumns: ["id"]
          },
        ]
      }
      box_rewards: {
        Row: {
          box_id: number
          id: string
          token: string
          totalamount: number
          user_id: string
        }
        Insert: {
          box_id: number
          id: string
          token: string
          totalamount?: number
          user_id: string
        }
        Update: {
          box_id?: number
          id?: string
          token?: string
          totalamount?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "box_rewards_box_id_fkey"
            columns: ["box_id"]
            isOneToOne: false
            referencedRelation: "boxes"
            referencedColumns: ["id"]
          },
        ]
      }
      box_status_statistical: {
        Row: {
          id: string
          status_0_supply: number
          status_1_supply: number
          status_2_supply: number
          status_3_supply: number
          status_4_supply: number
          status_5_supply: number
          status_6_supply: number
          status_7_supply: number
          total_supply: number
        }
        Insert: {
          id?: string
          status_0_supply?: number
          status_1_supply?: number
          status_2_supply?: number
          status_3_supply?: number
          status_4_supply?: number
          status_5_supply?: number
          status_6_supply?: number
          status_7_supply?: number
          total_supply?: number
        }
        Update: {
          id?: string
          status_0_supply?: number
          status_1_supply?: number
          status_2_supply?: number
          status_3_supply?: number
          status_4_supply?: number
          status_5_supply?: number
          status_6_supply?: number
          status_7_supply?: number
          total_supply?: number
        }
        Relationships: []
      }
      box_user_order_amounts: {
        Row: {
          box_id: number
          currentamount: number
          id: string
          token: string
          user_id: string
        }
        Insert: {
          box_id: number
          currentamount?: number
          id: string
          token: string
          user_id: string
        }
        Update: {
          box_id?: number
          currentamount?: number
          id?: string
          token?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "box_user_order_amounts_box_id_fkey"
            columns: ["box_id"]
            isOneToOne: false
            referencedRelation: "boxes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "box_user_order_amounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      boxes: {
        Row: {
          accepted_token: string | null
          arbitration_deadline: number | null
          box_info_cid: string | null
          buyer_id: string | null
          complete_timestamp: number | null
          completer_id: string | null
          create_timestamp: number
          deadline: number
          id: number
          listed_mode: number | null
          listed_timestamp: number | null
          minter_id: string
          price: number
          private_key: string | null
          publish_timestamp: number | null
          publisher_id: string | null
          purchase_timestamp: number | null
          refund_permit: boolean | null
          request_refund_deadline: number | null
          seller_id: string | null
          status: number
        }
        Insert: {
          accepted_token?: string | null
          arbitration_deadline?: number | null
          box_info_cid?: string | null
          buyer_id?: string | null
          complete_timestamp?: number | null
          completer_id?: string | null
          create_timestamp: number
          deadline?: number
          id: number
          listed_mode?: number | null
          listed_timestamp?: number | null
          minter_id: string
          price?: number
          private_key?: string | null
          publish_timestamp?: number | null
          publisher_id?: string | null
          purchase_timestamp?: number | null
          refund_permit?: boolean | null
          request_refund_deadline?: number | null
          seller_id?: string | null
          status: number
        }
        Update: {
          accepted_token?: string | null
          arbitration_deadline?: number | null
          box_info_cid?: string | null
          buyer_id?: string | null
          complete_timestamp?: number | null
          completer_id?: string | null
          create_timestamp?: number
          deadline?: number
          id?: number
          listed_mode?: number | null
          listed_timestamp?: number | null
          minter_id?: string
          price?: number
          private_key?: string | null
          publish_timestamp?: number | null
          publisher_id?: string | null
          purchase_timestamp?: number | null
          refund_permit?: boolean | null
          request_refund_deadline?: number | null
          seller_id?: string | null
          status?: number
        }
        Relationships: []
      }
      forwarder_state: {
        Row: {
          id: string
          paused: boolean
        }
        Insert: {
          id?: string
          paused?: boolean
        }
        Update: {
          id?: string
          paused?: boolean
        }
        Relationships: []
      }
      fund_manager_state: {
        Row: {
          id: string
          paused: boolean
        }
        Insert: {
          id?: string
          paused?: boolean
        }
        Update: {
          id?: string
          paused?: boolean
        }
        Relationships: []
      }
      metadata_boxes: {
        Row: {
          box_image: string | null
          box_image_r2: string | null
          country: string | null
          create_date: string | null
          description: string | null
          encryption_file_cid: Json[] | null
          encryption_passwords: Json | null
          encryption_slices_metadata_cid: Json | null
          event_date: string | null
          file_list: string[] | null
          id: number
          label: string[] | null
          mint_method: string | null
          password: string | null
          public_key: string | null
          state: string | null
          timestamp: number | null
          title: string | null
          type_of_crime: string | null
        }
        Insert: {
          box_image?: string | null
          box_image_r2?: string | null
          country?: string | null
          create_date?: string | null
          description?: string | null
          encryption_file_cid?: Json[] | null
          encryption_passwords?: Json | null
          encryption_slices_metadata_cid?: Json | null
          event_date?: string | null
          file_list?: string[] | null
          id: number
          label?: string[] | null
          mint_method?: string | null
          password?: string | null
          public_key?: string | null
          state?: string | null
          timestamp?: number | null
          title?: string | null
          type_of_crime?: string | null
        }
        Update: {
          box_image?: string | null
          box_image_r2?: string | null
          country?: string | null
          create_date?: string | null
          description?: string | null
          encryption_file_cid?: Json[] | null
          encryption_passwords?: Json | null
          encryption_slices_metadata_cid?: Json | null
          event_date?: string | null
          file_list?: string[] | null
          id?: number
          label?: string[] | null
          mint_method?: string | null
          password?: string | null
          public_key?: string | null
          state?: string | null
          timestamp?: number | null
          title?: string | null
          type_of_crime?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "metadata_boxes_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "boxes"
            referencedColumns: ["id"]
          },
        ]
      }
      order_refund_withdraws: {
        Row: {
          amount: number
          box_id_list: number[]
          id: string
          timestamp: number
          token: string
          transaction_hash: string
          user_id: string
          withdraw_type: string
        }
        Insert: {
          amount: number
          box_id_list: number[]
          id: string
          timestamp: number
          token: string
          transaction_hash: string
          user_id: string
          withdraw_type: string
        }
        Update: {
          amount?: number
          box_id_list?: number[]
          id?: string
          timestamp?: number
          token?: string
          transaction_hash?: string
          user_id?: string
          withdraw_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_refund_withdraws_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          box_id: number
          id: string
          pay_type: string
          timestamp: number
          token: string
          transaction_hash: string
          user_id: string
        }
        Insert: {
          amount: number
          box_id: number
          id: string
          pay_type: string
          timestamp: number
          token: string
          transaction_hash: string
          user_id: string
        }
        Update: {
          amount?: number
          box_id?: number
          id?: string
          pay_type?: string
          timestamp?: number
          token?: string
          transaction_hash?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_box_id_fkey"
            columns: ["box_id"]
            isOneToOne: false
            referencedRelation: "boxes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      rewards_addeds: {
        Row: {
          amount: number
          box_id: number
          id: string
          timestamp: number
          token: string
          transaction_hash: string
          user_id: string
        }
        Insert: {
          amount: number
          box_id: number
          id: string
          timestamp: number
          token: string
          transaction_hash: string
          user_id: string
        }
        Update: {
          amount?: number
          box_id?: number
          id?: string
          timestamp?: number
          token?: string
          transaction_hash?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rewards_addeds_box_id_fkey"
            columns: ["box_id"]
            isOneToOne: false
            referencedRelation: "boxes"
            referencedColumns: ["id"]
          },
        ]
      }
      rewards_withdraws: {
        Row: {
          amount: number
          id: string
          timestamp: number
          token: string
          transaction_hash: string
          user_id: string
        }
        Insert: {
          amount?: number
          id: string
          timestamp: number
          token: string
          transaction_hash: string
          user_id: string
        }
        Update: {
          amount?: number
          id?: string
          timestamp?: number
          token?: string
          transaction_hash?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rewards_withdraws_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      sync_status: {
        Row: {
          contract_name: string
          last_synced_at: string
          last_synced_block: number
        }
        Insert: {
          contract_name: string
          last_synced_at?: string
          last_synced_block?: number
        }
        Update: {
          contract_name?: string
          last_synced_at?: string
          last_synced_block?: number
        }
        Relationships: []
      }
      token_total_amounts: {
        Row: {
          amount: number
          fund_manager_id: string
          fund_type: string
          id: string
          token: string
        }
        Insert: {
          amount?: number
          fund_manager_id?: string
          fund_type: string
          id: string
          token: string
        }
        Update: {
          amount?: number
          fund_manager_id?: string
          fund_type?: string
          id?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "token_total_amounts_fund_manager_id_fkey"
            columns: ["fund_manager_id"]
            isOneToOne: false
            referencedRelation: "fund_manager_state"
            referencedColumns: ["id"]
          },
        ]
      }
      user_addresses: {
        Row: {
          id: string
          is_blacklisted: boolean
        }
        Insert: {
          id: string
          is_blacklisted?: boolean
        }
        Update: {
          id?: string
          is_blacklisted?: boolean
        }
        Relationships: []
      }
      user_rewards: {
        Row: {
          currentamount: number
          id: string
          token: string
          totalamount: number
          user_id: string
        }
        Insert: {
          currentamount?: number
          id: string
          token: string
          totalamount?: number
          user_id: string
        }
        Update: {
          currentamount?: number
          id?: string
          token?: string
          totalamount?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_rewards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          id: string
        }
        Insert: {
          id: string
        }
        Update: {
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_boxes: {
        Args: {
          accepted_token_filter?: string[]
          country_filter?: string[]
          label_filter?: string[]
          limit_count?: number
          listed_mode_filter?: number[]
          max_deadline?: number
          max_price?: number
          max_timestamp?: number
          min_deadline?: number
          min_price?: number
          min_timestamp?: number
          offset_count?: number
          search_query?: string
          sort_by?: string
          sort_direction?: string
          state_filter?: string[]
          status_filter?: number[]
          type_of_crime_filter?: string[]
        }
        Returns: {
          accepted_token: string
          box_image: string
          box_image_r2: string
          buyer_id: string
          country: string
          create_timestamp: number
          deadline: number
          description: string
          event_date: string
          id: number
          label: string[]
          listed_mode: number
          minter_id: string
          price: number
          relevance: number
          state: string
          status: number
          title: string
          total_count: number
          type_of_crime: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
