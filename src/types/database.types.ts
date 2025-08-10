export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      contacts: {
        Row: {
          contact_email: string | null
          contact_name: string
          contact_phone: string | null
          contact_user_id: string | null
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          contact_email?: string | null
          contact_name: string
          contact_phone?: string | null
          contact_user_id?: string | null
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          contact_email?: string | null
          contact_name?: string
          contact_phone?: string | null
          contact_user_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contacts_contact_user_id_fkey"
            columns: ["contact_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          amount: number | null
          created_at: string | null
          description: string | null
          id: string
          invoice_id: string | null
          quantity: number | null
          rate: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          invoice_id?: string | null
          quantity?: number | null
          rate?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          invoice_id?: string | null
          quantity?: number | null
          rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices_with_users"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          client_id: string | null
          client_name: string | null
          created_at: string | null
          due_date: string | null
          id: string
          invoice_number: string
          issue_date: string | null
          notes: string | null
          payment_date: string | null
          payment_method: string | null
          service_fee: number | null
          service_fee_percentage: number | null
          status: string | null
          subtotal: number | null
          task_id: string | null
          task_title: string | null
          terms: string | null
          total: number | null
          updated_at: string | null
          vendor_amount: number | null
          vendor_id: string | null
          vendor_name: string | null
        }
        Insert: {
          client_id?: string | null
          client_name?: string | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          invoice_number: string
          issue_date?: string | null
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          service_fee?: number | null
          service_fee_percentage?: number | null
          status?: string | null
          subtotal?: number | null
          task_id?: string | null
          task_title?: string | null
          terms?: string | null
          total?: number | null
          updated_at?: string | null
          vendor_amount?: number | null
          vendor_id?: string | null
          vendor_name?: string | null
        }
        Update: {
          client_id?: string | null
          client_name?: string | null
          created_at?: string | null
          due_date?: string | null
          id?: string
          invoice_number?: string
          issue_date?: string | null
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          service_fee?: number | null
          service_fee_percentage?: number | null
          status?: string | null
          subtotal?: number | null
          task_id?: string | null
          task_title?: string | null
          terms?: string | null
          total?: number | null
          updated_at?: string | null
          vendor_amount?: number | null
          vendor_id?: string | null
          vendor_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_ai_usage: {
        Row: {
          cost: number | null
          created_at: string | null
          credits_used: number | null
          feature: string
          id: string
          metadata: Json | null
          tokens_used: number | null
          vendor_id: string | null
        }
        Insert: {
          cost?: number | null
          created_at?: string | null
          credits_used?: number | null
          feature: string
          id?: string
          metadata?: Json | null
          tokens_used?: number | null
          vendor_id?: string | null
        }
        Update: {
          cost?: number | null
          created_at?: string | null
          credits_used?: number | null
          feature?: string
          id?: string
          metadata?: Json | null
          tokens_used?: number | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_ai_usage_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "marketplace_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_categories: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          name: string
          parent_id: string | null
          slug: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          name: string
          parent_id?: string | null
          slug: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          name?: string
          parent_id?: string | null
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "marketplace_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_payment_transactions: {
        Row: {
          amount: number
          booking_id: string | null
          buyer_id: string | null
          created_at: string | null
          gateway_data: Json | null
          id: string
          payment_method: string
          platform_fee: number
          processed_at: string | null
          processing_fee: number | null
          status: string | null
          vendor_id: string | null
          vendor_payout: number
        }
        Insert: {
          amount: number
          booking_id?: string | null
          buyer_id?: string | null
          created_at?: string | null
          gateway_data?: Json | null
          id?: string
          payment_method: string
          platform_fee: number
          processed_at?: string | null
          processing_fee?: number | null
          status?: string | null
          vendor_id?: string | null
          vendor_payout: number
        }
        Update: {
          amount?: number
          booking_id?: string | null
          buyer_id?: string | null
          created_at?: string | null
          gateway_data?: Json | null
          id?: string
          payment_method?: string
          platform_fee?: number
          processed_at?: string | null
          processing_fee?: number | null
          status?: string | null
          vendor_id?: string | null
          vendor_payout?: number
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_payment_transactions_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "marketplace_service_bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_payment_transactions_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "marketplace_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_reviews: {
        Row: {
          booking_id: string | null
          buyer_id: string | null
          comment: string | null
          created_at: string | null
          helpful_count: number | null
          id: string
          media: Json | null
          rating: number
          service_id: string | null
          updated_at: string | null
          vendor_id: string | null
          vendor_response: string | null
        }
        Insert: {
          booking_id?: string | null
          buyer_id?: string | null
          comment?: string | null
          created_at?: string | null
          helpful_count?: number | null
          id?: string
          media?: Json | null
          rating: number
          service_id?: string | null
          updated_at?: string | null
          vendor_id?: string | null
          vendor_response?: string | null
        }
        Update: {
          booking_id?: string | null
          buyer_id?: string | null
          comment?: string | null
          created_at?: string | null
          helpful_count?: number | null
          id?: string
          media?: Json | null
          rating?: number
          service_id?: string | null
          updated_at?: string | null
          vendor_id?: string | null
          vendor_response?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: true
            referencedRelation: "marketplace_service_bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_reviews_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "marketplace_service_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_reviews_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "marketplace_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_service_bookings: {
        Row: {
          accepted_at: string | null
          buyer_id: string | null
          cancelled_at: string | null
          completed_at: string | null
          created_at: string | null
          custom_price: number | null
          delivered_at: string | null
          final_price: number
          id: string
          messages: Json | null
          payment_data: Json | null
          payment_method: string | null
          payment_status: string | null
          platform_fee: number
          requirements: Json | null
          selected_tier: Json | null
          service_id: string | null
          started_at: string | null
          status: string | null
          task_id: string | null
          updated_at: string | null
          vendor_id: string | null
        }
        Insert: {
          accepted_at?: string | null
          buyer_id?: string | null
          cancelled_at?: string | null
          completed_at?: string | null
          created_at?: string | null
          custom_price?: number | null
          delivered_at?: string | null
          final_price: number
          id?: string
          messages?: Json | null
          payment_data?: Json | null
          payment_method?: string | null
          payment_status?: string | null
          platform_fee: number
          requirements?: Json | null
          selected_tier?: Json | null
          service_id?: string | null
          started_at?: string | null
          status?: string | null
          task_id?: string | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Update: {
          accepted_at?: string | null
          buyer_id?: string | null
          cancelled_at?: string | null
          completed_at?: string | null
          created_at?: string | null
          custom_price?: number | null
          delivered_at?: string | null
          final_price?: number
          id?: string
          messages?: Json | null
          payment_data?: Json | null
          payment_method?: string | null
          payment_status?: string | null
          platform_fee?: number
          requirements?: Json | null
          selected_tier?: Json | null
          service_id?: string | null
          started_at?: string | null
          status?: string | null
          task_id?: string | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_service_bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "marketplace_service_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_service_bookings_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "marketplace_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_service_listings: {
        Row: {
          ai_metadata: Json | null
          avg_rating: number | null
          base_price: number
          booking_count: number | null
          category_id: string | null
          created_at: string | null
          description: string | null
          details: Json | null
          embedding: string | null
          id: string
          media: Json | null
          pricing_tiers: Json | null
          search_vector: unknown | null
          slug: string
          status: string | null
          title: string
          updated_at: string | null
          vendor_id: string | null
          view_count: number | null
        }
        Insert: {
          ai_metadata?: Json | null
          avg_rating?: number | null
          base_price: number
          booking_count?: number | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          details?: Json | null
          embedding?: string | null
          id?: string
          media?: Json | null
          pricing_tiers?: Json | null
          search_vector?: unknown | null
          slug: string
          status?: string | null
          title: string
          updated_at?: string | null
          vendor_id?: string | null
          view_count?: number | null
        }
        Update: {
          ai_metadata?: Json | null
          avg_rating?: number | null
          base_price?: number
          booking_count?: number | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          details?: Json | null
          embedding?: string | null
          id?: string
          media?: Json | null
          pricing_tiers?: Json | null
          search_vector?: unknown | null
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string | null
          vendor_id?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_service_listings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "marketplace_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_service_listings_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "marketplace_vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_vendors: {
        Row: {
          ai_credits: number | null
          business_name: string
          created_at: string | null
          description: string | null
          id: string
          profile: Json | null
          rating: number | null
          settings: Json | null
          slug: string
          stripe_account_id: string | null
          total_reviews: number | null
          updated_at: string | null
          user_id: string | null
          venmo_handle: string | null
          verified: boolean | null
          zelle_email: string | null
        }
        Insert: {
          ai_credits?: number | null
          business_name: string
          created_at?: string | null
          description?: string | null
          id?: string
          profile?: Json | null
          rating?: number | null
          settings?: Json | null
          slug: string
          stripe_account_id?: string | null
          total_reviews?: number | null
          updated_at?: string | null
          user_id?: string | null
          venmo_handle?: string | null
          verified?: boolean | null
          zelle_email?: string | null
        }
        Update: {
          ai_credits?: number | null
          business_name?: string
          created_at?: string | null
          description?: string | null
          id?: string
          profile?: Json | null
          rating?: number | null
          settings?: Json | null
          slug?: string
          stripe_account_id?: string | null
          total_reviews?: number | null
          updated_at?: string | null
          user_id?: string | null
          venmo_handle?: string | null
          verified?: boolean | null
          zelle_email?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          conversation_id: string | null
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          recipient_id: string | null
          sender_avatar: string | null
          sender_id: string | null
          sender_name: string | null
          task_id: string | null
          timestamp: string | null
        }
        Insert: {
          conversation_id?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          recipient_id?: string | null
          sender_avatar?: string | null
          sender_id?: string | null
          sender_name?: string | null
          task_id?: string | null
          timestamp?: string | null
        }
        Update: {
          conversation_id?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          recipient_id?: string | null
          sender_avatar?: string | null
          sender_id?: string | null
          sender_name?: string | null
          task_id?: string | null
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_users"
            referencedColumns: ["id"]
          },
        ]
      }
      network_rewards: {
        Row: {
          applied_at: string | null
          created_at: string | null
          expires_at: string | null
          id: string
          milestone_reached: string | null
          reward_type: string
          reward_value: Json
          user_id: string
        }
        Insert: {
          applied_at?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          milestone_reached?: string | null
          reward_type: string
          reward_value: Json
          user_id: string
        }
        Update: {
          applied_at?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          milestone_reached?: string | null
          reward_type?: string
          reward_value?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "network_rewards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          bio: string | null
          created_at: string | null
          hourly_rate: number | null
          id: string
          is_client: boolean | null
          is_vendor: boolean | null
          rating: number | null
          skills: string[] | null
          total_reviews: number | null
          updated_at: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          hourly_rate?: number | null
          id: string
          is_client?: boolean | null
          is_vendor?: boolean | null
          rating?: number | null
          skills?: string[] | null
          total_reviews?: number | null
          updated_at?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          hourly_rate?: number | null
          id?: string
          is_client?: boolean | null
          is_vendor?: boolean | null
          rating?: number | null
          skills?: string[] | null
          total_reviews?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      recurring_tasks: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          next_occurrence: string
          recurrence_config: Json | null
          recurrence_pattern: string
          template_task: Json
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          next_occurrence: string
          recurrence_config?: Json | null
          recurrence_pattern: string
          template_task: Json
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          next_occurrence?: string
          recurrence_config?: Json | null
          recurrence_pattern?: string
          template_task?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recurring_tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          billing_period: string | null
          created_at: string | null
          display_name: string
          features: Json
          has_ai_features: boolean | null
          has_analytics: boolean | null
          has_billing_features: boolean | null
          has_calendar_sync: boolean | null
          has_file_attachments: boolean | null
          has_recurring_tasks: boolean | null
          has_team_workspaces: boolean | null
          id: string
          max_collaborators: number | null
          max_file_size_mb: number | null
          max_tasks: number | null
          name: string
          price: number
          stripe_price_id: string | null
        }
        Insert: {
          billing_period?: string | null
          created_at?: string | null
          display_name: string
          features?: Json
          has_ai_features?: boolean | null
          has_analytics?: boolean | null
          has_billing_features?: boolean | null
          has_calendar_sync?: boolean | null
          has_file_attachments?: boolean | null
          has_recurring_tasks?: boolean | null
          has_team_workspaces?: boolean | null
          id?: string
          max_collaborators?: number | null
          max_file_size_mb?: number | null
          max_tasks?: number | null
          name: string
          price: number
          stripe_price_id?: string | null
        }
        Update: {
          billing_period?: string | null
          created_at?: string | null
          display_name?: string
          features?: Json
          has_ai_features?: boolean | null
          has_analytics?: boolean | null
          has_billing_features?: boolean | null
          has_calendar_sync?: boolean | null
          has_file_attachments?: boolean | null
          has_recurring_tasks?: boolean | null
          has_team_workspaces?: boolean | null
          id?: string
          max_collaborators?: number | null
          max_file_size_mb?: number | null
          max_tasks?: number | null
          name?: string
          price?: number
          stripe_price_id?: string | null
        }
        Relationships: []
      }
      task_actions: {
        Row: {
          action_data: Json | null
          action_type: string
          created_at: string | null
          id: string
          task_id: string
          user_id: string
        }
        Insert: {
          action_data?: Json | null
          action_type: string
          created_at?: string | null
          id?: string
          task_id: string
          user_id: string
        }
        Update: {
          action_data?: Json | null
          action_type?: string
          created_at?: string | null
          id?: string
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_actions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_actions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_actions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      task_attachments: {
        Row: {
          created_at: string | null
          file_name: string
          file_size_bytes: number
          file_type: string | null
          id: string
          storage_path: string
          task_id: string
          uploaded_by: string
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_size_bytes: number
          file_type?: string | null
          id?: string
          storage_path: string
          task_id: string
          uploaded_by: string
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_size_bytes?: number
          file_type?: string | null
          id?: string
          storage_path?: string
          task_id?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_attachments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_attachments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_attachments_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      task_invitations: {
        Row: {
          accepted_at: string | null
          accepted_by_user_id: string | null
          created_at: string | null
          id: string
          invite_code: string
          invited_email: string | null
          invited_phone: string | null
          status: string | null
          task_id: string
        }
        Insert: {
          accepted_at?: string | null
          accepted_by_user_id?: string | null
          created_at?: string | null
          id?: string
          invite_code: string
          invited_email?: string | null
          invited_phone?: string | null
          status?: string | null
          task_id: string
        }
        Update: {
          accepted_at?: string | null
          accepted_by_user_id?: string | null
          created_at?: string | null
          id?: string
          invite_code?: string
          invited_email?: string | null
          invited_phone?: string | null
          status?: string | null
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_invitations_accepted_by_user_id_fkey"
            columns: ["accepted_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_invitations_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_invitations_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_users"
            referencedColumns: ["id"]
          },
        ]
      }
      task_status_updates: {
        Row: {
          created_at: string | null
          date: string | null
          id: number
          note: string | null
          progress: number | null
          status: string | null
          task_id: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string | null
          id?: number
          note?: string | null
          progress?: number | null
          status?: string | null
          task_id?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string | null
          id?: number
          note?: string | null
          progress?: number | null
          status?: string | null
          task_id?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_status_updates_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_status_updates_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_status_updates_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      task_watchers: {
        Row: {
          task_id: string
          user_id: string
          watched_at: string | null
        }
        Insert: {
          task_id: string
          user_id: string
          watched_at?: string | null
        }
        Update: {
          task_id?: string
          user_id?: string
          watched_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_watchers_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_watchers_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_watchers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          color_state: string | null
          completed_at: string | null
          contact_info: Json | null
          created_at: string | null
          description: string | null
          expected_completion: string | null
          id: string
          invoice_amount: number | null
          invoice_id: string | null
          invoice_status: string | null
          location: Json | null
          owner_email: string | null
          owner_id: string | null
          owner_name: string | null
          owner_phone: string | null
          priority: string | null
          progress: number | null
          requestor_id: string
          requestor_name: string
          start_date: string | null
          status: string | null
          team_id: string | null
          team_name: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          color_state?: string | null
          completed_at?: string | null
          contact_info?: Json | null
          created_at?: string | null
          description?: string | null
          expected_completion?: string | null
          id?: string
          invoice_amount?: number | null
          invoice_id?: string | null
          invoice_status?: string | null
          location?: Json | null
          owner_email?: string | null
          owner_id?: string | null
          owner_name?: string | null
          owner_phone?: string | null
          priority?: string | null
          progress?: number | null
          requestor_id: string
          requestor_name: string
          start_date?: string | null
          status?: string | null
          team_id?: string | null
          team_name?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          color_state?: string | null
          completed_at?: string | null
          contact_info?: Json | null
          created_at?: string | null
          description?: string | null
          expected_completion?: string | null
          id?: string
          invoice_amount?: number | null
          invoice_id?: string | null
          invoice_status?: string | null
          location?: Json | null
          owner_email?: string | null
          owner_id?: string | null
          owner_name?: string | null
          owner_phone?: string | null
          priority?: string | null
          progress?: number | null
          requestor_id?: string
          requestor_name?: string
          start_date?: string | null
          status?: string | null
          team_id?: string | null
          team_name?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_requestor_id_fkey"
            columns: ["requestor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          joined_at: string | null
          role: string | null
          team_id: string
          user_id: string
        }
        Insert: {
          joined_at?: string | null
          role?: string | null
          team_id: string
          user_id: string
        }
        Update: {
          joined_at?: string | null
          role?: string | null
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "teams_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_limits: {
        Row: {
          active_tasks_count: number | null
          collaborators_count: number | null
          files_total_size_mb: number | null
          tasks_created_this_month: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          active_tasks_count?: number | null
          collaborators_count?: number | null
          files_total_size_mb?: number | null
          tasks_created_this_month?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          active_tasks_count?: number | null
          collaborators_count?: number | null
          files_total_size_mb?: number | null
          tasks_created_this_month?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_limits_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_network_growth: {
        Row: {
          converted_at: string | null
          converted_to_paid: boolean | null
          created_at: string | null
          id: string
          invitation_status: string | null
          invited_email: string | null
          invited_user_id: string | null
          user_id: string
        }
        Insert: {
          converted_at?: string | null
          converted_to_paid?: boolean | null
          created_at?: string | null
          id?: string
          invitation_status?: string | null
          invited_email?: string | null
          invited_user_id?: string | null
          user_id: string
        }
        Update: {
          converted_at?: string | null
          converted_to_paid?: boolean | null
          created_at?: string | null
          id?: string
          invitation_status?: string | null
          invited_email?: string | null
          invited_user_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_network_growth_invited_user_id_fkey"
            columns: ["invited_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_network_growth_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          canceled_at: string | null
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_id: string
          status: string | null
          stripe_subscription_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          canceled_at?: string | null
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id: string
          status?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          canceled_at?: string | null
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: string
          status?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          address: string | null
          auth_provider: string | null
          avatar_url: string | null
          cellphone: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          phone: string | null
          stripe_customer_id: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          auth_provider?: string | null
          avatar_url?: string | null
          cellphone?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          auth_provider?: string | null
          avatar_url?: string | null
          cellphone?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          stripe_customer_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      invoices_with_users: {
        Row: {
          client_email: string | null
          client_full_name: string | null
          client_id: string | null
          client_name: string | null
          created_at: string | null
          due_date: string | null
          id: string | null
          invoice_number: string | null
          issue_date: string | null
          notes: string | null
          payment_date: string | null
          payment_method: string | null
          service_fee: number | null
          service_fee_percentage: number | null
          status: string | null
          subtotal: number | null
          task_id: string | null
          task_title: string | null
          terms: string | null
          total: number | null
          updated_at: string | null
          vendor_amount: number | null
          vendor_email: string | null
          vendor_full_name: string | null
          vendor_id: string | null
          vendor_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks_with_users: {
        Row: {
          calculated_priority: string | null
          calculated_progress: number | null
          color_state: string | null
          completed_at: string | null
          contact_info: Json | null
          created_at: string | null
          description: string | null
          expected_completion: string | null
          id: string | null
          invoice_amount: number | null
          invoice_id: string | null
          invoice_status: string | null
          location: Json | null
          owner_avatar: string | null
          owner_email: string | null
          owner_email_full: string | null
          owner_full_name: string | null
          owner_id: string | null
          owner_name: string | null
          owner_phone: string | null
          priority: string | null
          progress: number | null
          requestor_avatar: string | null
          requestor_email: string | null
          requestor_full_name: string | null
          requestor_id: string | null
          requestor_name: string | null
          start_date: string | null
          status: string | null
          team_id: string | null
          team_name: string | null
          title: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_requestor_id_fkey"
            columns: ["requestor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      update_task_progress: {
        Args: { p_task_id: string; p_progress: number; p_note?: string }
        Returns: undefined
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
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
