// config/dataBase.ts（不再手写，改为从生成文件提取）
import type { Database } from './database.types';

type Tables = Database['public']['Tables'];
type TableName = keyof Tables;

export type TableRow<T extends TableName> = Tables[T]['Row'];
export type TableInsert<T extends TableName> = Tables[T]['Insert'];
export type TableUpdate<T extends TableName> = Tables[T]['Update'];

// 提取各表 Row 类型 — 这就是 SELECT * 的返回类型
export type Box                  = Database['public']['Tables']['boxes']['Row'];
export type MetadataBox          = Database['public']['Tables']['metadata_boxes']['Row'];
export type BoxBidder            = Database['public']['Tables']['box_bidders']['Row'];
export type BoxStatusStatistical = Database['public']['Tables']['box_status_statistical']['Row'];
export type BoxReward            = Database['public']['Tables']['box_rewards']['Row'];
export type BoxUserOrderAmount   = Database['public']['Tables']['box_user_order_amounts']['Row'];
export type UserReward           = Database['public']['Tables']['user_rewards']['Row'];
export type RewardsWithdraw      = Database['public']['Tables']['rewards_withdraws']['Row'];
export type Payment              = Database['public']['Tables']['payments']['Row'];
export type OrderRefundWithdraw  = Database['public']['Tables']['order_refund_withdraws']['Row'];
export type RewardsAdded         = Database['public']['Tables']['rewards_addeds']['Row'];
export type TokenTotalAmount     = Database['public']['Tables']['token_total_amounts']['Row'];
export type SyncStatus           = Database['public']['Tables']['sync_status']['Row'];
export type FundManagerState     = Database['public']['Tables']['fund_manager_state']['Row'];
export type ForwarderState       = Database['public']['Tables']['forwarder_state']['Row'];
export type User                 = Database['public']['Tables']['users']['Row'];
export type UserAddress          = Database['public']['Tables']['user_addresses']['Row'];

// 写入类型 — 必须与 Supabase 生成类型保持同步
export type BoxInsert                  = TableInsert<'boxes'>;
export type BoxUpdate                  = TableUpdate<'boxes'>;
export type MetadataBoxInsert          = TableInsert<'metadata_boxes'>;
export type UserInsert                 = TableInsert<'users'>;
export type UserAddressInsert          = TableInsert<'user_addresses'>;
export type BoxBidderInsert            = TableInsert<'box_bidders'>;
export type PaymentInsert              = TableInsert<'payments'>;
export type OrderRefundWithdrawInsert  = TableInsert<'order_refund_withdraws'>;
export type RewardsAddedInsert          = TableInsert<'rewards_addeds'>;
export type RewardsWithdrawInsert       = TableInsert<'rewards_withdraws'>;
export type FundManagerStateInsert     = TableInsert<'fund_manager_state'>;
export type ForwarderStateInsert       = TableInsert<'forwarder_state'>;
export type SyncStatusInsert           = TableInsert<'sync_status'>;
export type SyncStatusUpdate           = TableUpdate<'sync_status'>;

// RPC 函数类型
export type SearchBoxResult = Database['public']['Functions']['search_boxes']['Returns'][number];
export type SearchBoxArgs   = Database['public']['Functions']['search_boxes']['Args'];
