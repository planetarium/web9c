/* eslint-disable */
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Address: { input: any; output: any };
  BencodexValue: { input: any; output: any };
  BigInt: { input: any; output: any };
  Byte: { input: any; output: any };
  ByteString: { input: any; output: any };
  /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC. `DateTimeOffset` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTimeOffset: { input: any; output: any };
  Decimal: { input: any; output: any };
  Guid: { input: any; output: any };
  Long: { input: any; output: any };
  PublicKey: { input: any; output: any };
  TxId: { input: any; output: any };
  VoteFlag: { input: any; output: any };
};

export type Action = {
  __typename?: "Action";
  /** A readable representation for debugging. */
  inspection: Scalars["String"]["output"];
  /** A JSON representaion of action data */
  json: Scalars["String"]["output"];
  /** Raw Action data ('hex' or 'base64' encoding available.) */
  raw: Scalars["String"]["output"];
};

export type ActionRawArgs = {
  encode?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActionMutation = {
  __typename?: "ActionMutation";
  /** Charge Action Points using Material. */
  chargeActionPoint: Scalars["TxId"]["output"];
  /** Get monster collection reward. */
  claimMonsterCollectionReward: Scalars["TxId"]["output"];
  /** Combine new Consumable. */
  combinationConsumable: Scalars["TxId"]["output"];
  /** Combine new equipment. */
  combinationEquipment: Scalars["TxId"]["output"];
  /** Create new avatar. */
  createAvatar: Scalars["TxId"]["output"];
  /** Get daily reward. */
  dailyReward: Scalars["TxId"]["output"];
  /** Start stage to get material. */
  hackAndSlash: Scalars["TxId"]["output"];
  /** Upgrade equipment. */
  itemEnhancement: Scalars["TxId"]["output"];
  /** Start monster collect. */
  monsterCollect: Scalars["TxId"]["output"];
};

export type ActionMutationChargeActionPointArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionMutationClaimMonsterCollectionRewardArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionMutationCombinationConsumableArgs = {
  avatarAddress: Scalars["Address"]["input"];
  recipeId: Scalars["Int"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ActionMutationCombinationEquipmentArgs = {
  avatarAddress: Scalars["Address"]["input"];
  recipeId: Scalars["Int"]["input"];
  slotIndex: Scalars["Int"]["input"];
  subRecipeId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActionMutationCreateAvatarArgs = {
  avatarIndex: Scalars["Int"]["input"];
  avatarName: Scalars["String"]["input"];
  earIndex: Scalars["Int"]["input"];
  hairIndex: Scalars["Int"]["input"];
  lensIndex: Scalars["Int"]["input"];
  tailIndex: Scalars["Int"]["input"];
};

export type ActionMutationDailyRewardArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionMutationHackAndSlashArgs = {
  avatarAddress: Scalars["Address"]["input"];
  consumableIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageId: Scalars["Int"]["input"];
  worldId: Scalars["Int"]["input"];
};

export type ActionMutationItemEnhancementArgs = {
  avatarAddress: Scalars["Address"]["input"];
  itemId: Scalars["Guid"]["input"];
  materialId: Scalars["Guid"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ActionMutationMonsterCollectArgs = {
  level: Scalars["Int"]["input"];
};

export type ActionQuery = {
  __typename?: "ActionQuery";
  activateAccount: Scalars["ByteString"]["output"];
  claimRaidReward: Scalars["ByteString"]["output"];
  claimStakeReward?: Maybe<Scalars["ByteString"]["output"]>;
  claimWorldBossKillReward: Scalars["ByteString"]["output"];
  combinationConsumable: Scalars["ByteString"]["output"];
  combinationEquipment: Scalars["ByteString"]["output"];
  /** Query to craft/enhance items/foods */
  craftQuery: CraftQuery;
  createAvatar: Scalars["ByteString"]["output"];
  dailyReward: Scalars["ByteString"]["output"];
  grinding?: Maybe<Scalars["ByteString"]["output"]>;
  hackAndSlash: Scalars["ByteString"]["output"];
  hackAndSlashSweep: Scalars["ByteString"]["output"];
  itemEnhancement: Scalars["ByteString"]["output"];
  migrateMonsterCollection: Scalars["ByteString"]["output"];
  patchTableSheet: Scalars["ByteString"]["output"];
  prepareRewardAssets: Scalars["ByteString"]["output"];
  raid: Scalars["ByteString"]["output"];
  rapidCombination: Scalars["ByteString"]["output"];
  runeEnhancement: Scalars["ByteString"]["output"];
  stake?: Maybe<Scalars["ByteString"]["output"]>;
  transferAsset?: Maybe<Scalars["ByteString"]["output"]>;
  transferAssets: Scalars["ByteString"]["output"];
  unlockEquipmentRecipe?: Maybe<Scalars["ByteString"]["output"]>;
  unlockWorld?: Maybe<Scalars["ByteString"]["output"]>;
};

export type ActionQueryActivateAccountArgs = {
  activationCode: Scalars["String"]["input"];
};

export type ActionQueryClaimRaidRewardArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionQueryClaimStakeRewardArgs = {
  avatarAddress?: InputMaybe<Scalars["Address"]["input"]>;
};

export type ActionQueryClaimWorldBossKillRewardArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionQueryCombinationConsumableArgs = {
  avatarAddress: Scalars["Address"]["input"];
  recipeId: Scalars["Int"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ActionQueryCombinationEquipmentArgs = {
  avatarAddress: Scalars["Address"]["input"];
  payByCrystal?: InputMaybe<Scalars["Boolean"]["input"]>;
  recipeId: Scalars["Int"]["input"];
  slotIndex: Scalars["Int"]["input"];
  subRecipeId?: InputMaybe<Scalars["Int"]["input"]>;
  useHammerPoint?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ActionQueryCreateAvatarArgs = {
  ear?: InputMaybe<Scalars["Int"]["input"]>;
  hair?: InputMaybe<Scalars["Int"]["input"]>;
  index: Scalars["Int"]["input"];
  lens?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  tail?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActionQueryDailyRewardArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionQueryGrindingArgs = {
  avatarAddress: Scalars["Address"]["input"];
  chargeAp?: InputMaybe<Scalars["Boolean"]["input"]>;
  equipmentIds: Array<InputMaybe<Scalars["Guid"]["input"]>>;
};

export type ActionQueryHackAndSlashArgs = {
  avatarAddress: Scalars["Address"]["input"];
  consumableIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageBuffId?: InputMaybe<Scalars["Int"]["input"]>;
  stageId: Scalars["Int"]["input"];
  worldId: Scalars["Int"]["input"];
};

export type ActionQueryHackAndSlashSweepArgs = {
  actionPoint: Scalars["Int"]["input"];
  apStoneCount?: InputMaybe<Scalars["Int"]["input"]>;
  avatarAddress: Scalars["Address"]["input"];
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageId: Scalars["Int"]["input"];
  worldId: Scalars["Int"]["input"];
};

export type ActionQueryItemEnhancementArgs = {
  avatarAddress: Scalars["Address"]["input"];
  itemId: Scalars["Guid"]["input"];
  materialId: Scalars["Guid"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ActionQueryMigrateMonsterCollectionArgs = {
  avatarAddress?: InputMaybe<Scalars["Address"]["input"]>;
};

export type ActionQueryPatchTableSheetArgs = {
  tableCsv: Scalars["String"]["input"];
  tableName: Scalars["String"]["input"];
};

export type ActionQueryPrepareRewardAssetsArgs = {
  assets: Array<FungibleAssetValueInputType>;
  rewardPoolAddress: Scalars["Address"]["input"];
};

export type ActionQueryRaidArgs = {
  avatarAddress: Scalars["Address"]["input"];
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  foodIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  payNcg?: InputMaybe<Scalars["Boolean"]["input"]>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
};

export type ActionQueryRapidCombinationArgs = {
  avatarAddress: Scalars["Address"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ActionQueryRuneEnhancementArgs = {
  avatarAddress: Scalars["Address"]["input"];
  runeId: Scalars["Int"]["input"];
  tryCount?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActionQueryStakeArgs = {
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type ActionQueryTransferAssetArgs = {
  amount: Scalars["String"]["input"];
  currency: CurrencyEnum;
  memo?: InputMaybe<Scalars["String"]["input"]>;
  recipient: Scalars["Address"]["input"];
  sender: Scalars["Address"]["input"];
};

export type ActionQueryTransferAssetsArgs = {
  memo?: InputMaybe<Scalars["String"]["input"]>;
  recipients: Array<RecipientsInputType>;
  sender: Scalars["Address"]["input"];
};

export type ActionQueryUnlockEquipmentRecipeArgs = {
  avatarAddress: Scalars["Address"]["input"];
  recipeIds: Array<InputMaybe<Scalars["Int"]["input"]>>;
};

export type ActionQueryUnlockWorldArgs = {
  avatarAddress: Scalars["Address"]["input"];
  worldIds: Array<InputMaybe<Scalars["Int"]["input"]>>;
};

export type ActionTxQuery = {
  __typename?: "ActionTxQuery";
  activateAccount: Scalars["ByteString"]["output"];
  claimRaidReward: Scalars["ByteString"]["output"];
  claimStakeReward?: Maybe<Scalars["ByteString"]["output"]>;
  claimWorldBossKillReward: Scalars["ByteString"]["output"];
  combinationConsumable: Scalars["ByteString"]["output"];
  combinationEquipment: Scalars["ByteString"]["output"];
  /** Query to craft/enhance items/foods */
  craftQuery: CraftQuery;
  createAvatar: Scalars["ByteString"]["output"];
  dailyReward: Scalars["ByteString"]["output"];
  grinding?: Maybe<Scalars["ByteString"]["output"]>;
  hackAndSlash: Scalars["ByteString"]["output"];
  hackAndSlashSweep: Scalars["ByteString"]["output"];
  itemEnhancement: Scalars["ByteString"]["output"];
  migrateMonsterCollection: Scalars["ByteString"]["output"];
  patchTableSheet: Scalars["ByteString"]["output"];
  prepareRewardAssets: Scalars["ByteString"]["output"];
  raid: Scalars["ByteString"]["output"];
  rapidCombination: Scalars["ByteString"]["output"];
  runeEnhancement: Scalars["ByteString"]["output"];
  stake?: Maybe<Scalars["ByteString"]["output"]>;
  transferAsset?: Maybe<Scalars["ByteString"]["output"]>;
  transferAssets: Scalars["ByteString"]["output"];
  unlockEquipmentRecipe?: Maybe<Scalars["ByteString"]["output"]>;
  unlockWorld?: Maybe<Scalars["ByteString"]["output"]>;
};

export type ActionTxQueryActivateAccountArgs = {
  activationCode: Scalars["String"]["input"];
};

export type ActionTxQueryClaimRaidRewardArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionTxQueryClaimStakeRewardArgs = {
  avatarAddress?: InputMaybe<Scalars["Address"]["input"]>;
};

export type ActionTxQueryClaimWorldBossKillRewardArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionTxQueryCombinationConsumableArgs = {
  avatarAddress: Scalars["Address"]["input"];
  recipeId: Scalars["Int"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ActionTxQueryCombinationEquipmentArgs = {
  avatarAddress: Scalars["Address"]["input"];
  payByCrystal?: InputMaybe<Scalars["Boolean"]["input"]>;
  recipeId: Scalars["Int"]["input"];
  slotIndex: Scalars["Int"]["input"];
  subRecipeId?: InputMaybe<Scalars["Int"]["input"]>;
  useHammerPoint?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ActionTxQueryCreateAvatarArgs = {
  ear?: InputMaybe<Scalars["Int"]["input"]>;
  hair?: InputMaybe<Scalars["Int"]["input"]>;
  index: Scalars["Int"]["input"];
  lens?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  tail?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActionTxQueryDailyRewardArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type ActionTxQueryGrindingArgs = {
  avatarAddress: Scalars["Address"]["input"];
  chargeAp?: InputMaybe<Scalars["Boolean"]["input"]>;
  equipmentIds: Array<InputMaybe<Scalars["Guid"]["input"]>>;
};

export type ActionTxQueryHackAndSlashArgs = {
  avatarAddress: Scalars["Address"]["input"];
  consumableIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageBuffId?: InputMaybe<Scalars["Int"]["input"]>;
  stageId: Scalars["Int"]["input"];
  worldId: Scalars["Int"]["input"];
};

export type ActionTxQueryHackAndSlashSweepArgs = {
  actionPoint: Scalars["Int"]["input"];
  apStoneCount?: InputMaybe<Scalars["Int"]["input"]>;
  avatarAddress: Scalars["Address"]["input"];
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
  stageId: Scalars["Int"]["input"];
  worldId: Scalars["Int"]["input"];
};

export type ActionTxQueryItemEnhancementArgs = {
  avatarAddress: Scalars["Address"]["input"];
  itemId: Scalars["Guid"]["input"];
  materialId: Scalars["Guid"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ActionTxQueryMigrateMonsterCollectionArgs = {
  avatarAddress?: InputMaybe<Scalars["Address"]["input"]>;
};

export type ActionTxQueryPatchTableSheetArgs = {
  tableCsv: Scalars["String"]["input"];
  tableName: Scalars["String"]["input"];
};

export type ActionTxQueryPrepareRewardAssetsArgs = {
  assets: Array<FungibleAssetValueInputType>;
  rewardPoolAddress: Scalars["Address"]["input"];
};

export type ActionTxQueryRaidArgs = {
  avatarAddress: Scalars["Address"]["input"];
  costumeIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  equipmentIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  foodIds?: InputMaybe<Array<InputMaybe<Scalars["Guid"]["input"]>>>;
  payNcg?: InputMaybe<Scalars["Boolean"]["input"]>;
  runeSlotInfos?: InputMaybe<Array<RuneSlotInfoInputType>>;
};

export type ActionTxQueryRapidCombinationArgs = {
  avatarAddress: Scalars["Address"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ActionTxQueryRuneEnhancementArgs = {
  avatarAddress: Scalars["Address"]["input"];
  runeId: Scalars["Int"]["input"];
  tryCount?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ActionTxQueryStakeArgs = {
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type ActionTxQueryTransferAssetArgs = {
  amount: Scalars["String"]["input"];
  currency: CurrencyEnum;
  memo?: InputMaybe<Scalars["String"]["input"]>;
  recipient: Scalars["Address"]["input"];
  sender: Scalars["Address"]["input"];
};

export type ActionTxQueryTransferAssetsArgs = {
  memo?: InputMaybe<Scalars["String"]["input"]>;
  recipients: Array<RecipientsInputType>;
  sender: Scalars["Address"]["input"];
};

export type ActionTxQueryUnlockEquipmentRecipeArgs = {
  avatarAddress: Scalars["Address"]["input"];
  recipeIds: Array<InputMaybe<Scalars["Int"]["input"]>>;
};

export type ActionTxQueryUnlockWorldArgs = {
  avatarAddress: Scalars["Address"]["input"];
  worldIds: Array<InputMaybe<Scalars["Int"]["input"]>>;
};

export type ActivationStatusMutation = {
  __typename?: "ActivationStatusMutation";
  activateAccount: Scalars["Boolean"]["output"];
};

export type ActivationStatusMutationActivateAccountArgs = {
  encodedActivationKey: Scalars["String"]["input"];
};

export type ActivationStatusQuery = {
  __typename?: "ActivationStatusQuery";
  activated: Scalars["Boolean"]["output"];
  addressActivated: Scalars["Boolean"]["output"];
};

export type ActivationStatusQueryAddressActivatedArgs = {
  address: Scalars["Address"]["input"];
};

export type AddressQuery = {
  __typename?: "AddressQuery";
  /** currency minters address. */
  currencyMintersAddress?: Maybe<Array<Scalars["Address"]["output"]>>;
  /** user information address by world boss season. */
  raiderAddress: Scalars["Address"]["output"];
  /** raider list address by world boss season. */
  raiderListAddress: Scalars["Address"]["output"];
  /** boss information address by world boss season. */
  worldBossAddress: Scalars["Address"]["output"];
  /** user boss kill reward record address by world boss season. */
  worldBossKillRewardRecordAddress: Scalars["Address"]["output"];
};

export type AddressQueryCurrencyMintersAddressArgs = {
  currency: CurrencyEnum;
};

export type AddressQueryRaiderAddressArgs = {
  avatarAddress: Scalars["Address"]["input"];
  raidId: Scalars["Int"]["input"];
};

export type AddressQueryRaiderListAddressArgs = {
  raidId: Scalars["Int"]["input"];
};

export type AddressQueryWorldBossAddressArgs = {
  raidId: Scalars["Int"]["input"];
};

export type AddressQueryWorldBossKillRewardRecordAddressArgs = {
  avatarAddress: Scalars["Address"]["input"];
  raidId: Scalars["Int"]["input"];
};

export type AgentStateType = {
  __typename?: "AgentStateType";
  /** Address of agent. */
  address: Scalars["Address"]["output"];
  /** List of avatar. */
  avatarStates?: Maybe<Array<AvatarStateType>>;
  /** Current CRYSTAL. */
  crystal: Scalars["String"]["output"];
  /** Current NCG. */
  gold: Scalars["String"]["output"];
  hasTradedItem: Scalars["Boolean"]["output"];
  /** Current monster collection level. */
  monsterCollectionLevel: Scalars["Long"]["output"];
  /** Monster collection round of agent. */
  monsterCollectionRound: Scalars["Long"]["output"];
};

export type AppProtocolVersionType = {
  __typename?: "AppProtocolVersionType";
  extra?: Maybe<Scalars["ByteString"]["output"]>;
  signature: Scalars["ByteString"]["output"];
  signer: Scalars["Address"]["output"];
  version: Scalars["Int"]["output"];
};

export type ArenaInfoType = {
  __typename?: "ArenaInfoType";
  active: Scalars["Boolean"]["output"];
  agentAddress: Scalars["Address"]["output"];
  arenaRecord: ArenaRecordType;
  avatarAddress: Scalars["Address"]["output"];
  avatarName: Scalars["String"]["output"];
  dailyChallengeCount: Scalars["Int"]["output"];
  score: Scalars["Int"]["output"];
};

export type ArenaRecordType = {
  __typename?: "ArenaRecordType";
  draw?: Maybe<Scalars["Int"]["output"]>;
  lose?: Maybe<Scalars["Int"]["output"]>;
  win?: Maybe<Scalars["Int"]["output"]>;
};

export type AvatarStateType = {
  __typename?: "AvatarStateType";
  /** Current ActionPoint. */
  actionPoint: Scalars["Int"]["output"];
  /** Address of avatar. */
  address: Scalars["Address"]["output"];
  /** Address of agent. */
  agentAddress: Scalars["Address"]["output"];
  /** Block index at the latest executed action. */
  blockIndex: Scalars["Int"]["output"];
  /** Character ID from CharacterSheet. */
  characterId: Scalars["Int"]["output"];
  /** Address list of combination slot. */
  combinationSlotAddresses: Array<Scalars["Address"]["output"]>;
  /** Block index at the DailyReward execution. */
  dailyRewardReceivedIndex: Scalars["Long"]["output"];
  /** Index of ear color. */
  ear: Scalars["Int"]["output"];
  /** List of quest event ID. */
  eventMap: CollectionMapType;
  /** Avatar total EXP. */
  exp: Scalars["Int"]["output"];
  /** Index of hair color. */
  hair: Scalars["Int"]["output"];
  /** The index of this avatar state among its agent's avatar addresses. */
  index: Scalars["Int"]["output"];
  /** Avatar inventory. */
  inventory: InventoryType;
  /** List of acquired item ID. */
  itemMap: CollectionMapType;
  /** Index of eye color. */
  lens: Scalars["Int"]["output"];
  /** Avatar Level. */
  level: Scalars["Int"]["output"];
  /** List of mail. */
  mailBox: MailBoxType;
  /** List of defeated monster ID. */
  monsterMap: CollectionMapType;
  /** Avatar name. */
  name: Scalars["String"]["output"];
  /** List of quest. */
  questList: QuestListType;
  /** List of cleared stage ID. */
  stageMap: CollectionMapType;
  /** Index of tail color. */
  tail: Scalars["Int"]["output"];
  /** Block index at the latest executed action. */
  updatedAt: Scalars["Long"]["output"];
  /** World & Stage information. */
  worldInformation: WorldInformationType;
};

export type Block = {
  __typename?: "Block";
  /**
   * The mining difficulty that the block's nonce has to satisfy.
   * @deprecated Block does not have Difficulty field in PBFT.
   */
  difficulty: Scalars["Long"]["output"];
  /** A block's hash. */
  hash: Scalars["ID"]["output"];
  /** The height of the block. */
  index: Scalars["Long"]["output"];
  /** The LastCommit of the block. */
  lastCommit?: Maybe<BlockCommit>;
  /** The address of the miner. */
  miner: Scalars["Address"]["output"];
  /**
   * The proof-of-work nonce which satisfies the required difficulty.
   * @deprecated Block does not have Nonce field in PBFT.
   */
  nonce: Scalars["ByteString"]["output"];
  /** The previous block.  If it's a genesis block (i.e., its index is 0) this must be null. */
  previousBlock?: Maybe<Block>;
  /** The public key of the Miner. */
  publicKey?: Maybe<Scalars["PublicKey"]["output"]>;
  /** The digital signature of the whole block content (except for hash, which is derived from the signature and other contents) */
  signature?: Maybe<Scalars["ByteString"]["output"]>;
  /** The hash of the resulting states after evaluating transactions and a block action (if exists) */
  stateRootHash: Scalars["ByteString"]["output"];
  timestamp: Scalars["DateTimeOffset"]["output"];
  /**
   * The total mining difficulty since the genesis including the block's difficulty.
   * @deprecated Block does not have TotalDifficulty field in PBFT.
   */
  totalDifficulty: Scalars["BigInt"]["output"];
  /** Transactions belonging to the block. */
  transactions: Array<Transaction>;
};

export type BlockCommit = {
  __typename?: "BlockCommit";
  /** The hash of the block which contains block commit. */
  blockHash: Scalars["ID"]["output"];
  /** The height of the block commit. */
  height: Scalars["Long"]["output"];
  /** The round of the block commit. */
  round: Scalars["Int"]["output"];
  /** Total votes of the block commit. */
  votes: Array<Vote>;
};

export type BlockHeader = {
  __typename?: "BlockHeader";
  hash: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  index: Scalars["Int"]["output"];
  miner?: Maybe<Scalars["Address"]["output"]>;
};

export type BlockQuery = {
  __typename?: "BlockQuery";
  block?: Maybe<Block>;
  blocks: Array<Block>;
};

export type BlockQueryBlockArgs = {
  hash?: InputMaybe<Scalars["ID"]["input"]>;
  index?: InputMaybe<Scalars["ID"]["input"]>;
};

export type BlockQueryBlocksArgs = {
  desc?: InputMaybe<Scalars["Boolean"]["input"]>;
  excludeEmptyTxs?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  miner?: InputMaybe<Scalars["Address"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BoundPeer = {
  __typename?: "BoundPeer";
  /** The endpoint of the peer. */
  endPoint: Scalars["String"]["output"];
  /** The address of the miner. */
  publicIpAddress?: Maybe<Scalars["String"]["output"]>;
  /** The public key of the peer. */
  publicKey: Scalars["PublicKey"]["output"];
};

export type CollectionMapType = {
  __typename?: "CollectionMapType";
  count: Scalars["Int"]["output"];
  pairs: Array<Array<Maybe<Scalars["Int"]["output"]>>>;
};

export type ConsumableType = {
  __typename?: "ConsumableType";
  /** Item elemental. */
  elementalType: ElementalType;
  /** Grade from ItemSheet. */
  grade: Scalars["Int"]["output"];
  /** ID from ItemSheet. */
  id: Scalars["Int"]["output"];
  itemId: Scalars["Guid"]["output"];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
  mainStat: StatType;
};

export type CostumeType = {
  __typename?: "CostumeType";
  /** Item elemental. */
  elementalType: ElementalType;
  /** Status of Avatar equipped. */
  equipped: Scalars["Boolean"]["output"];
  /** Grade from ItemSheet. */
  grade: Scalars["Int"]["output"];
  /** ID from ItemSheet. */
  id: Scalars["Int"]["output"];
  /** Guid of costume. */
  itemId: Scalars["Guid"]["output"];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
};

export type CraftQuery = {
  __typename?: "CraftQuery";
  eventConsumableItemCrafts: Scalars["ByteString"]["output"];
  eventMaterialItemCrafts: Scalars["ByteString"]["output"];
};

export type CraftQueryEventConsumableItemCraftsArgs = {
  avatarAddress: Scalars["Address"]["input"];
  eventConsumableItemRecipeId: Scalars["Int"]["input"];
  eventScheduleId: Scalars["Int"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type CraftQueryEventMaterialItemCraftsArgs = {
  avatarAddress: Scalars["Address"]["input"];
  eventMaterialItemRecipeId: Scalars["Int"]["input"];
  eventScheduleId: Scalars["Int"]["input"];
  materialsToUse: Array<MaterialsToUseInputType>;
};

export type CrystalMonsterCollectionMultiplierRowType = {
  __typename?: "CrystalMonsterCollectionMultiplierRowType";
  level: Scalars["Int"]["output"];
  multiplier: Scalars["Int"]["output"];
};

export type CrystalMonsterCollectionMultiplierSheetType = {
  __typename?: "CrystalMonsterCollectionMultiplierSheetType";
  orderedList: Array<CrystalMonsterCollectionMultiplierRowType>;
};

export type Currency = {
  __typename?: "Currency";
  /** The number of digits to treat as minor units (i.e., exponents). */
  decimalPlaces: Scalars["Byte"]["output"];
  /** The deterministic hash derived from other fields. */
  hash: Scalars["ByteString"]["output"];
  /** The uppermost quantity of currency allowed to exist.  null means unlimited supply. */
  maximumSupply?: Maybe<FungibleAssetValue>;
  /** The addresses who can mint this currency.  If this is null anyone can mint the currency.  On the other hand, unlike null, an empty set means no one can mint the currency. */
  minters?: Maybe<Array<Scalars["Address"]["output"]>>;
  /** The ticker symbol, e.g., USD. */
  ticker: Scalars["String"]["output"];
  /** Whether the total supply of this currency is trackable. */
  totalSupplyTrackable: Scalars["Boolean"]["output"];
};

/** The currency type. */
export enum CurrencyEnum {
  Crystal = "CRYSTAL",
  Ncg = "NCG",
}

export type CurrencyInput = {
  /** The number of digits to treat as minor units (i.e., exponents). */
  decimalPlaces: Scalars["Byte"]["input"];
  maximumSupplyMajorUnit?: InputMaybe<Scalars["BigInt"]["input"]>;
  maximumSupplyMinorUnit?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** The addresses who can mint this currency.  If this is null anyone can mint the currency.  On the other hand, unlike null, an empty set means no one can mint the currency. */
  minters?: InputMaybe<Array<Scalars["Address"]["input"]>>;
  /** The ticker symbol, e.g., USD. */
  ticker: Scalars["String"]["input"];
  /** Whether the total supply of this currency is trackable. */
  totalSupplyTrackable?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CurrencyInputType = {
  decimalPlaces: Scalars["Byte"]["input"];
  minters?: InputMaybe<Array<Scalars["Address"]["input"]>>;
  ticker: Scalars["String"]["input"];
};

export type CurrencyType = {
  __typename?: "CurrencyType";
  decimalPlaces: Scalars["Byte"]["output"];
  minters?: Maybe<Array<Maybe<Scalars["Address"]["output"]>>>;
  ticker: Scalars["String"]["output"];
};

export type DecimalStatType = {
  __typename?: "DecimalStatType";
  additionalValue: Scalars["Decimal"]["output"];
  baseValue: Scalars["Decimal"]["output"];
  statType: StatType;
  totalValue: Scalars["Decimal"]["output"];
};

export type DifferentAppProtocolVersionEncounterType = {
  __typename?: "DifferentAppProtocolVersionEncounterType";
  localVersion: AppProtocolVersionType;
  peer: Scalars["String"]["output"];
  peerVersion: AppProtocolVersionType;
};

export enum ElementalType {
  Fire = "FIRE",
  Land = "LAND",
  Normal = "NORMAL",
  Water = "WATER",
  Wind = "WIND",
}

export type EquipmentType = {
  __typename?: "EquipmentType";
  buffSkills?: Maybe<Array<Maybe<SkillType>>>;
  /** Item elemental. */
  elementalType: ElementalType;
  equipped: Scalars["Boolean"]["output"];
  /** Grade from ItemSheet. */
  grade: Scalars["Int"]["output"];
  /** ID from ItemSheet. */
  id: Scalars["Int"]["output"];
  itemId: Scalars["Guid"]["output"];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
  level: Scalars["Int"]["output"];
  setId: Scalars["Int"]["output"];
  skills?: Maybe<Array<Maybe<SkillType>>>;
  stat: DecimalStatType;
  statsMap: StatsMapType;
};

export type ExplorerQuery = {
  __typename?: "ExplorerQuery";
  blockQuery?: Maybe<BlockQuery>;
  nodeState: NodeState;
  stateQuery?: Maybe<LibplanetStateQuery>;
  transactionQuery?: Maybe<TransactionQuery>;
};

export type FungibleAssetBalancesType = {
  __typename?: "FungibleAssetBalancesType";
  address: Scalars["Address"]["output"];
  fungibleAssetValues: Array<FungibleAssetValue>;
};

/** Holds a fungible asset value which holds its currency together. */
export type FungibleAssetValue = {
  __typename?: "FungibleAssetValue";
  /** The currency of the fungible asset. */
  currency: Currency;
  majorUnit: Scalars["BigInt"]["output"];
  minorUnit: Scalars["BigInt"]["output"];
  /** The value quantity without its currency in string, e.g., "123.45". */
  quantity: Scalars["String"]["output"];
  /** Gets a number that indicates the sign (-1: negative, 1: positive, or 0: zero) of the value. */
  sign: Scalars["Int"]["output"];
  /** The value quantity with its currency in string, e.g., "123.45 ABC". */
  string: Scalars["String"]["output"];
};

export type FungibleAssetValueInputType = {
  decimalPlaces: Scalars["Byte"]["input"];
  minters?: InputMaybe<Array<Scalars["Address"]["input"]>>;
  quantity: Scalars["BigInt"]["input"];
  ticker: Scalars["String"]["input"];
};

export type FungibleAssetValueType = {
  __typename?: "FungibleAssetValueType";
  currency: Scalars["String"]["output"];
  quantity: Scalars["String"]["output"];
};

export type FungibleAssetValueWithCurrencyType = {
  __typename?: "FungibleAssetValueWithCurrencyType";
  currency: CurrencyType;
  quantity: Scalars["String"]["output"];
};

export type FungibleAssetValueWithCurrencyTypeQuantityArgs = {
  minerUnit?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type InventoryItemType = {
  __typename?: "InventoryItemType";
  /** A count of item */
  count: Scalars["Int"]["output"];
  /** An Id of item */
  id: Scalars["Int"]["output"];
  /** An ItemType of item */
  itemType: ItemType;
  lockId?: Maybe<Scalars["Guid"]["output"]>;
  locked: Scalars["Boolean"]["output"];
  tradableId?: Maybe<Scalars["Guid"]["output"]>;
};

export type InventoryType = {
  __typename?: "InventoryType";
  /** List of Consumables. */
  consumables: Array<ConsumableType>;
  /** List of Costumes. */
  costumes: Array<CostumeType>;
  /** List of Equipments. */
  equipments: Array<EquipmentType>;
  /** List of Inventory Item. */
  items: Array<InventoryItemType>;
  /** List of Materials. */
  materials: Array<MaterialType>;
};

export type InventoryTypeItemsArgs = {
  inventoryItemId?: InputMaybe<Scalars["Int"]["input"]>;
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ItemSubType {
  ApStone = "AP_STONE",
  Armor = "ARMOR",
  Belt = "BELT",
  /** @deprecated ItemSubType.Chest has never been used outside the MaterialItemSheet. And we won't use it in the future until we have a specific reason. */
  Chest = "CHEST",
  EarCostume = "EAR_COSTUME",
  EquipmentMaterial = "EQUIPMENT_MATERIAL",
  EyeCostume = "EYE_COSTUME",
  Food = "FOOD",
  FoodMaterial = "FOOD_MATERIAL",
  FullCostume = "FULL_COSTUME",
  HairCostume = "HAIR_COSTUME",
  Hourglass = "HOURGLASS",
  MonsterPart = "MONSTER_PART",
  Necklace = "NECKLACE",
  NormalMaterial = "NORMAL_MATERIAL",
  Ring = "RING",
  TailCostume = "TAIL_COSTUME",
  Title = "TITLE",
  Weapon = "WEAPON",
}

export enum ItemType {
  Consumable = "CONSUMABLE",
  Costume = "COSTUME",
  Equipment = "EQUIPMENT",
  Material = "MATERIAL",
}

export type ItemUsableType = {
  __typename?: "ItemUsableType";
  /** Item elemental. */
  elementalType: ElementalType;
  /** Grade from ItemSheet. */
  grade: Scalars["Int"]["output"];
  /** ID from ItemSheet. */
  id: Scalars["Int"]["output"];
  /** Guid of item. */
  itemId: Scalars["Guid"]["output"];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
};

export type KeyStoreMutation = {
  __typename?: "KeyStoreMutation";
  createPrivateKey: PrivateKeyType;
  revokePrivateKey: ProtectedPrivateKeyType;
};

export type KeyStoreMutationCreatePrivateKeyArgs = {
  passphrase: Scalars["String"]["input"];
  privateKey?: InputMaybe<Scalars["ByteString"]["input"]>;
};

export type KeyStoreMutationRevokePrivateKeyArgs = {
  address: Scalars["Address"]["input"];
};

export type KeyStoreType = {
  __typename?: "KeyStoreType";
  decryptedPrivateKey: Scalars["ByteString"]["output"];
  /** An API to provide conversion to public-key, address. */
  privateKey: PrivateKeyType;
  protectedPrivateKeys: Array<ProtectedPrivateKeyType>;
};

export type KeyStoreTypeDecryptedPrivateKeyArgs = {
  address: Scalars["Address"]["input"];
  passphrase: Scalars["String"]["input"];
};

export type KeyStoreTypePrivateKeyArgs = {
  hex: Scalars["ByteString"]["input"];
};

export type LibplanetStateQuery = {
  __typename?: "LibplanetStateQuery";
  balance: FungibleAssetValue;
  states: Array<Maybe<Scalars["BencodexValue"]["output"]>>;
  totalSupply?: Maybe<FungibleAssetValue>;
  validators?: Maybe<Array<Validator>>;
};

export type LibplanetStateQueryBalanceArgs = {
  currency: CurrencyInput;
  offsetBlockHash: Scalars["ID"]["input"];
  owner: Scalars["Address"]["input"];
};

export type LibplanetStateQueryStatesArgs = {
  addresses: Array<Scalars["Address"]["input"]>;
  offsetBlockHash: Scalars["ID"]["input"];
};

export type LibplanetStateQueryTotalSupplyArgs = {
  currency: CurrencyInput;
  offsetBlockHash: Scalars["ID"]["input"];
};

export type LibplanetStateQueryValidatorsArgs = {
  offsetBlockHash: Scalars["ID"]["input"];
};

export type MailBoxType = {
  __typename?: "MailBoxType";
  count: Scalars["Int"]["output"];
  mails: Array<MailType>;
};

export type MailType = {
  __typename?: "MailType";
  blockIndex: Scalars["Long"]["output"];
  id: Scalars["Guid"]["output"];
  requiredBlockIndex: Scalars["Long"]["output"];
};

export type MaterialType = {
  __typename?: "MaterialType";
  /** Item elemental. */
  elementalType: ElementalType;
  /** Grade from ItemSheet. */
  grade: Scalars["Int"]["output"];
  /** ID from ItemSheet. */
  id: Scalars["Int"]["output"];
  itemId: Scalars["ByteString"]["output"];
  /** Item subcategory. */
  itemSubType: ItemSubType;
  /** Item category. */
  itemType: ItemType;
};

export type MaterialsToUseInputType = {
  /** Material ID to be used. */
  materialId: Scalars["Int"]["input"];
  /** Item quantity to be used. */
  quantity: Scalars["Int"]["input"];
};

export type MonsterCollectionRewardInfoType = {
  __typename?: "MonsterCollectionRewardInfoType";
  itemId: Scalars["Int"]["output"];
  quantity: Scalars["Int"]["output"];
};

export type MonsterCollectionRowType = {
  __typename?: "MonsterCollectionRowType";
  level: Scalars["Int"]["output"];
  requiredGold: Scalars["Int"]["output"];
  rewards: Array<Maybe<MonsterCollectionRewardInfoType>>;
};

export type MonsterCollectionSheetType = {
  __typename?: "MonsterCollectionSheetType";
  orderedList?: Maybe<Array<Maybe<MonsterCollectionRowType>>>;
};

export type MonsterCollectionStateType = {
  __typename?: "MonsterCollectionStateType";
  address: Scalars["Address"]["output"];
  claimableBlockIndex: Scalars["Long"]["output"];
  expiredBlockIndex: Scalars["Long"]["output"];
  level: Scalars["Long"]["output"];
  receivedBlockIndex: Scalars["Long"]["output"];
  rewardLevel: Scalars["Long"]["output"];
  startedBlockIndex: Scalars["Long"]["output"];
};

export type MonsterCollectionStatusType = {
  __typename?: "MonsterCollectionStatusType";
  fungibleAssetValue: FungibleAssetValueType;
  lockup: Scalars["Boolean"]["output"];
  rewardInfos?: Maybe<Array<Maybe<MonsterCollectionRewardInfoType>>>;
  tipIndex: Scalars["Long"]["output"];
};

export type NodeExceptionType = {
  __typename?: "NodeExceptionType";
  /** The code of NodeException. */
  code: Scalars["Int"]["output"];
  /** The message of NodeException. */
  message: Scalars["String"]["output"];
};

export type NodeState = {
  __typename?: "NodeState";
  peers?: Maybe<Array<BoundPeer>>;
  preloaded: Scalars["Boolean"]["output"];
  validators?: Maybe<Array<BoundPeer>>;
};

export type NodeStatusType = {
  __typename?: "NodeStatusType";
  appProtocolVersion?: Maybe<AppProtocolVersionType>;
  /** Whether the current libplanet node has ended bootstrapping. */
  bootstrapEnded: Scalars["Boolean"]["output"];
  /** Block header of the genesis block from the current chain. */
  genesis: BlockHeader;
  /** A informational version (a.k.a. version suffix) of NineChronicles.Headless */
  informationalVersion?: Maybe<Scalars["String"]["output"]>;
  /** Whether the current node is mining. */
  isMining: Scalars["Boolean"]["output"];
  /** Whether the current libplanet node has ended preloading. */
  preloadEnded: Scalars["Boolean"]["output"];
  /** A version of NineChronicles.Headless */
  productVersion?: Maybe<Scalars["String"]["output"]>;
  /** Ids of staged transactions from the current node. */
  stagedTxIds?: Maybe<Array<Maybe<Scalars["TxId"]["output"]>>>;
  /** The number of ids of staged transactions from the current node. */
  stagedTxIdsCount?: Maybe<Scalars["Int"]["output"]>;
  /** A list of subscribers' address */
  subscriberAddresses?: Maybe<Array<Maybe<Scalars["Address"]["output"]>>>;
  /** The number of a list of subscribers' address */
  subscriberAddressesCount?: Maybe<Scalars["Int"]["output"]>;
  /** Block header of the tip block from the current canonical chain. */
  tip: BlockHeader;
  /** The topmost blocks from the current node. */
  topmostBlocks: Array<Maybe<BlockHeader>>;
};

export type NodeStatusTypeStagedTxIdsArgs = {
  address?: InputMaybe<Scalars["Address"]["input"]>;
};

export type NodeStatusTypeTopmostBlocksArgs = {
  limit: Scalars["Int"]["input"];
  miner?: InputMaybe<Scalars["Address"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum NotificationEnum {
  Buyer = "BUYER",
  CombinationConsumable = "COMBINATION_CONSUMABLE",
  CombinationEquipment = "COMBINATION_EQUIPMENT",
  Has = "HAS",
  Refill = "REFILL",
  Seller = "SELLER",
}

export type NotificationType = {
  __typename?: "NotificationType";
  /** The message of Notification. */
  message?: Maybe<Scalars["String"]["output"]>;
  /** The type of Notification. */
  type: NotificationEnum;
};

export type OrderDigestListStateType = {
  __typename?: "OrderDigestListStateType";
  address?: Maybe<Scalars["Address"]["output"]>;
  orderDigestList: Array<Maybe<OrderDigestType>>;
};

export type OrderDigestType = {
  __typename?: "OrderDigestType";
  combatPoint: Scalars["Int"]["output"];
  /** Block index order expired. */
  expiredBlockIndex: Scalars["Int"]["output"];
  /** Count of item. */
  itemCount: Scalars["Int"]["output"];
  /** Id of item. */
  itemId: Scalars["Int"]["output"];
  level: Scalars["Int"]["output"];
  /** Guid of order. */
  orderId: Scalars["Guid"]["output"];
  /** Order price. */
  price: Scalars["String"]["output"];
  /** Address of seller agent. */
  sellerAgentAddress: Scalars["Address"]["output"];
  /** Block index order started. */
  startedBlockIndex: Scalars["Int"]["output"];
  /** Tradable guid of order. */
  tradableId: Scalars["Guid"]["output"];
};

export type PeerChainStateQuery = {
  __typename?: "PeerChainStateQuery";
  /** Summary of other peers connected to this node. It consists of address, chain height, and total difficulty. */
  state: Array<Maybe<Scalars["String"]["output"]>>;
};

export type PreloadStateExtraType = {
  __typename?: "PreloadStateExtraType";
  currentCount: Scalars["Long"]["output"];
  totalCount: Scalars["Long"]["output"];
  type: Scalars["String"]["output"];
};

export type PreloadStateType = {
  __typename?: "PreloadStateType";
  currentPhase: Scalars["Long"]["output"];
  extra: PreloadStateExtraType;
  totalPhase: Scalars["Long"]["output"];
};

export type PrivateKeyType = {
  __typename?: "PrivateKeyType";
  /** A representation of private-key with hexadecimal format. */
  hex: Scalars["ByteString"]["output"];
  /** A public-key derived from the private-key. */
  publicKey: PublicKeyType;
};

export type ProtectedPrivateKeyType = {
  __typename?: "ProtectedPrivateKeyType";
  address: Scalars["Address"]["output"];
};

export type PublicKeyType = {
  __typename?: "PublicKeyType";
  /** An address derived from the public-key. */
  address: Scalars["Address"]["output"];
  /** A representation of public-key with hexadecimal format. */
  hex: Scalars["ByteString"]["output"];
};

export type PublicKeyTypeHexArgs = {
  compress?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuestListType = {
  __typename?: "QuestListType";
  completedQuestIds: Array<Scalars["Int"]["output"]>;
};

export type RaiderStateType = {
  __typename?: "RaiderStateType";
  /** address of avatar state. */
  avatarAddress: Scalars["Address"]["output"];
  /** name of avatar state. */
  avatarName: Scalars["String"]["output"];
  /** rank reward claimed block index. */
  claimedBlockIndex: Scalars["Long"]["output"];
  /** combat point of avatar state. */
  cp: Scalars["Int"]["output"];
  /** season high score. */
  highScore: Scalars["Int"]["output"];
  /** icon id for ranking portrait. */
  iconId: Scalars["Int"]["output"];
  /** latest challenge boss level. */
  latestBossLevel: Scalars["Int"]["output"];
  /** latest reward claimed season rank. */
  latestRewardRank: Scalars["Int"]["output"];
  /** level of avatar state. */
  level: Scalars["Int"]["output"];
  /** challenge ticket purchase count. */
  purchaseCount: Scalars["Int"]["output"];
  /** ticket refilled block index. */
  refillBlockIndex: Scalars["Long"]["output"];
  /** remain challenge count before refill. */
  remainChallengeCount: Scalars["Int"]["output"];
  /** season total challenge count. */
  totalChallengeCount: Scalars["Int"]["output"];
  /** season total score. */
  totalScore: Scalars["Int"]["output"];
};

export type RankingInfoType = {
  __typename?: "RankingInfoType";
  /** Address of agent. */
  agentAddress: Scalars["Address"]["output"];
  /** Equipped Armor ID from EquipmentItemSheet. */
  armorId: Scalars["Int"]["output"];
  /** Address of avatar. */
  avatarAddress: Scalars["Address"]["output"];
  /** Avatar name. */
  avatarName: Scalars["String"]["output"];
  /** Avatar total EXP. */
  exp: Scalars["Long"]["output"];
  /** Avatar Level. */
  level: Scalars["Int"]["output"];
  /** Block index at Latest stage cleared. */
  stageClearedBlockIndex: Scalars["Long"]["output"];
  /** Block index at RankingInfo update. */
  updatedAt: Scalars["Long"]["output"];
};

export type RankingMapStateType = {
  __typename?: "RankingMapStateType";
  /** Address of RankingMapState. */
  address: Scalars["Address"]["output"];
  /** RankingMapState Capacity. */
  capacity: Scalars["Int"]["output"];
  /** List of RankingInfo. */
  rankingInfos: Array<RankingInfoType>;
};

export type RecipientsInputType = {
  amount: FungibleAssetValueInputType;
  recipient: Scalars["Address"]["input"];
};

export type RpcInformationQuery = {
  __typename?: "RpcInformationQuery";
  /** List of address connected to this node. */
  clients: Array<Maybe<Scalars["Address"]["output"]>>;
  /** total count by connected to this node. */
  totalCount: Scalars["Int"]["output"];
};

export type RuneSlotInfoInputType = {
  runeId: Scalars["Int"]["input"];
  slotIndex: Scalars["Int"]["input"];
};

export type ShardedShopStateV2Type = {
  __typename?: "ShardedShopStateV2Type";
  /** Address of sharded shop. */
  address: Scalars["Address"]["output"];
  /** List of OrderDigest. */
  orderDigestList: Array<Maybe<OrderDigestType>>;
};

export type ShardedShopStateV2TypeOrderDigestListArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  maximumPrice?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ShopItemType = {
  __typename?: "ShopItemType";
  /** Costume information. */
  costume?: Maybe<CostumeType>;
  /** Equipment / Consumable information. */
  itemUsable?: Maybe<ItemUsableType>;
  /** Item price. */
  price: Scalars["String"]["output"];
  /** Guid of product registered. */
  productId: Scalars["Guid"]["output"];
  /** Address of seller agent. */
  sellerAgentAddress: Scalars["Address"]["output"];
  /** Address of seller avatar. */
  sellerAvatarAddress: Scalars["Address"]["output"];
};

export type ShopStateType = {
  __typename?: "ShopStateType";
  /** Address of shop. */
  address: Scalars["Address"]["output"];
  /** List of ShopItem. */
  products: Array<Maybe<ShopItemType>>;
};

export type ShopStateTypeProductsArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  itemSubType?: InputMaybe<ItemSubType>;
  maximumPrice?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SkillType = {
  __typename?: "SkillType";
  chance: Scalars["Int"]["output"];
  elementalType: ElementalType;
  id: Scalars["Int"]["output"];
  power: Scalars["Int"]["output"];
  referencedStatType: StatType;
  statPowerRatio: Scalars["Int"]["output"];
};

export type StakeAchievementsType = {
  __typename?: "StakeAchievementsType";
  /** The address of current state. */
  achievementsByLevel: Scalars["Int"]["output"];
};

export type StakeAchievementsTypeAchievementsByLevelArgs = {
  level: Scalars["Int"]["input"];
};

export type StakeRegularFixedRewardInfoType = {
  __typename?: "StakeRegularFixedRewardInfoType";
  count: Scalars["Int"]["output"];
  itemId: Scalars["Int"]["output"];
};

export type StakeRegularRewardInfoType = {
  __typename?: "StakeRegularRewardInfoType";
  itemId: Scalars["Int"]["output"];
  rate: Scalars["Int"]["output"];
  type: StakeRewardType;
};

export type StakeRegularRewardsType = {
  __typename?: "StakeRegularRewardsType";
  bonusRewards: Array<StakeRegularFixedRewardInfoType>;
  level: Scalars["Int"]["output"];
  requiredGold: Scalars["Long"]["output"];
  rewards: Array<StakeRegularRewardInfoType>;
};

export enum StakeRewardType {
  Item = "ITEM",
  Rune = "RUNE",
}

export type StakeRewardsType = {
  __typename?: "StakeRewardsType";
  orderedList: Array<StakeRegularRewardsType>;
};

export type StakeStateType = {
  __typename?: "StakeStateType";
  /** The staking achievements. */
  achievements: StakeAchievementsType;
  /** The address of current state. */
  address: Scalars["Address"]["output"];
  /** The block index the user can cancel the staking. */
  cancellableBlockIndex: Scalars["Long"]["output"];
  /** The block index the user can claim rewards. */
  claimableBlockIndex: Scalars["Long"]["output"];
  /** The staked amount. */
  deposit: Scalars["String"]["output"];
  /** The block index the user received rewards. */
  receivedBlockIndex: Scalars["Int"]["output"];
  /** The block index the user started to stake. */
  startedBlockIndex: Scalars["Int"]["output"];
};

export type StandaloneMutation = {
  __typename?: "StandaloneMutation";
  action?: Maybe<ActionMutation>;
  activationStatus?: Maybe<ActivationStatusMutation>;
  /** @deprecated Use `planet key` command instead.  https://www.npmjs.com/package/@planetarium/cli */
  keyStore?: Maybe<KeyStoreMutation>;
  /** Add a new transaction to staging and return TxId */
  stageTransaction: Scalars["TxId"]["output"];
  /** Add a new transaction to staging */
  stageTx: Scalars["Boolean"]["output"];
  /**
   * Add a new transaction to staging and return TxId
   * @deprecated API update with action query. use stageTransaction mutation
   */
  stageTxV2: Scalars["TxId"]["output"];
  transfer?: Maybe<Scalars["TxId"]["output"]>;
  /** @deprecated Incorrect remittance may occur when using transferGold() to the same address consecutively. Use transfer() instead. */
  transferGold?: Maybe<Scalars["TxId"]["output"]>;
};

export type StandaloneMutationStageTransactionArgs = {
  payload: Scalars["String"]["input"];
};

export type StandaloneMutationStageTxArgs = {
  payload: Scalars["String"]["input"];
};

export type StandaloneMutationStageTxV2Args = {
  payload: Scalars["String"]["input"];
};

export type StandaloneMutationTransferArgs = {
  amount: Scalars["String"]["input"];
  currencyAddress?: Scalars["String"]["input"];
  memo?: InputMaybe<Scalars["String"]["input"]>;
  recipient: Scalars["Address"]["input"];
  txNonce: Scalars["Long"]["input"];
};

export type StandaloneMutationTransferGoldArgs = {
  amount: Scalars["String"]["input"];
  recipient: Scalars["Address"]["input"];
};

export type StandaloneQuery = {
  __typename?: "StandaloneQuery";
  /** Query to create action transaction. */
  actionQuery: ActionQuery;
  actionTxQuery: ActionTxQuery;
  activated: Scalars["Boolean"]["output"];
  activationKeyNonce: Scalars["String"]["output"];
  /** Check if the provided address is activated. */
  activationStatus: ActivationStatusQuery;
  /** Query to get derived address. */
  addressQuery: AddressQuery;
  /** @deprecated Use /graphql/explorer */
  chainQuery: ExplorerQuery;
  /** @deprecated The root query is not the best place for getTx so it was moved. Use transaction.getTx() */
  getTx?: Maybe<TransactionType_1>;
  goldBalance: Scalars["String"]["output"];
  /** @deprecated Use `planet key` command instead.  https://www.npmjs.com/package/@planetarium/cli */
  keyStore?: Maybe<KeyStoreType>;
  /** Address of current node. */
  minerAddress?: Maybe<Scalars["Address"]["output"]>;
  /** Get monster collection status by address. */
  monsterCollectionStatus?: Maybe<MonsterCollectionStatusType>;
  /** @deprecated The root query is not the best place for nextTxNonce so it was moved. Use transaction.nextTxNonce() */
  nextTxNonce: Scalars["Long"]["output"];
  nodeStatus: NodeStatusType;
  /** Get the peer's block chain state */
  peerChainState: PeerChainStateQuery;
  /** Query for rpc mode information. */
  rpcInformation: RpcInformationQuery;
  state?: Maybe<Scalars["ByteString"]["output"]>;
  stateQuery: StateQuery;
  /** Query for transaction. */
  transaction: TransactionHeadlessQuery;
  transferNCGHistories: Array<TransferNcgHistoryType>;
  /** The validation method provider for Libplanet types. */
  validation: ValidationQuery;
};

export type StandaloneQueryActionTxQueryArgs = {
  nonce?: InputMaybe<Scalars["Long"]["input"]>;
  publicKey: Scalars["String"]["input"];
  timestamp?: InputMaybe<Scalars["DateTimeOffset"]["input"]>;
};

export type StandaloneQueryActivatedArgs = {
  invitationCode: Scalars["String"]["input"];
};

export type StandaloneQueryActivationKeyNonceArgs = {
  invitationCode: Scalars["String"]["input"];
};

export type StandaloneQueryGetTxArgs = {
  txId: Scalars["TxId"]["input"];
};

export type StandaloneQueryGoldBalanceArgs = {
  address: Scalars["Address"]["input"];
  hash?: InputMaybe<Scalars["ByteString"]["input"]>;
};

export type StandaloneQueryMonsterCollectionStatusArgs = {
  address?: InputMaybe<Scalars["Address"]["input"]>;
};

export type StandaloneQueryNextTxNonceArgs = {
  address: Scalars["Address"]["input"];
};

export type StandaloneQueryStateArgs = {
  address: Scalars["Address"]["input"];
  hash?: InputMaybe<Scalars["ByteString"]["input"]>;
};

export type StandaloneQueryStateQueryArgs = {
  hash?: InputMaybe<Scalars["ByteString"]["input"]>;
};

export type StandaloneQueryTransferNcgHistoriesArgs = {
  blockHash: Scalars["ByteString"]["input"];
  recipient?: InputMaybe<Scalars["Address"]["input"]>;
};

export type StandaloneSubscription = {
  __typename?: "StandaloneSubscription";
  balanceByAgent: Scalars["String"]["output"];
  differentAppProtocolVersionEncounter: DifferentAppProtocolVersionEncounterType;
  nodeException: NodeExceptionType;
  nodeStatus?: Maybe<NodeStatusType>;
  notification: NotificationType;
  preloadProgress?: Maybe<PreloadStateType>;
  tipChanged?: Maybe<TipChanged>;
};

export type StandaloneSubscriptionBalanceByAgentArgs = {
  address: Scalars["Address"]["input"];
};

export enum StatType {
  ArmorPenetration = "ARMOR_PENETRATION",
  Atk = "ATK",
  Cdmg = "CDMG",
  Cri = "CRI",
  Def = "DEF",
  Drr = "DRR",
  Drv = "DRV",
  Hit = "HIT",
  Hp = "HP",
  None = "NONE",
  Spd = "SPD",
  Thorn = "THORN",
}

export type StateQuery = {
  __typename?: "StateQuery";
  /** State for agent. */
  agent?: Maybe<AgentStateType>;
  /** State for avatar. */
  avatar?: Maybe<AvatarStateType>;
  /** asset balance by currency. */
  balance: FungibleAssetValueWithCurrencyType;
  crystalMonsterCollectionMultiplierSheet?: Maybe<CrystalMonsterCollectionMultiplierSheetType>;
  monsterCollectionSheet?: Maybe<MonsterCollectionSheetType>;
  /** State for monster collection. */
  monsterCollectionState?: Maybe<MonsterCollectionStateType>;
  orderDigestList?: Maybe<OrderDigestListStateType>;
  /** world boss season id by block index. */
  raidId: Scalars["Int"]["output"];
  /** raider address list by world boss season. */
  raiderList?: Maybe<Array<Scalars["Address"]["output"]>>;
  /** world boss season user information. */
  raiderState?: Maybe<RaiderStateType>;
  /** State for avatar EXP record. */
  rankingMap?: Maybe<RankingMapStateType>;
  /** State for sharded shop. */
  shardedShop?: Maybe<ShardedShopStateV2Type>;
  /**
   * State for shop.
   * @deprecated Shop is migrated to ShardedShop and not using now. Use shardedShop() instead.
   */
  shop?: Maybe<ShopStateType>;
  stakeRewards?: Maybe<StakeRewardsType>;
  /** State for staking. */
  stakeState?: Maybe<StakeStateType>;
  /** Staking states having same order as addresses */
  stakeStates: Array<Maybe<StakeStateType>>;
  /** List of unlocked equipment recipe sheet row ids. */
  unlockedRecipeIds?: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  /** List of unlocked world sheet row ids. */
  unlockedWorldIds?: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  /** State for weekly arena. */
  weeklyArena?: Maybe<WeeklyArenaStateType>;
  /** user boss kill reward record by world boss season. */
  worldBossKillRewardRecord?: Maybe<WorldBossKillRewardRecordType>;
  /** world boss season boss information. */
  worldBossState?: Maybe<WorldBossStateType>;
};

export type StateQueryAgentArgs = {
  address: Scalars["Address"]["input"];
};

export type StateQueryAvatarArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type StateQueryBalanceArgs = {
  address: Scalars["Address"]["input"];
  currency: CurrencyInputType;
};

export type StateQueryMonsterCollectionStateArgs = {
  agentAddress: Scalars["Address"]["input"];
};

export type StateQueryOrderDigestListArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type StateQueryRaidIdArgs = {
  blockIndex: Scalars["Long"]["input"];
  prev?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StateQueryRaiderListArgs = {
  raiderListAddress: Scalars["Address"]["input"];
};

export type StateQueryRaiderStateArgs = {
  raiderAddress: Scalars["Address"]["input"];
};

export type StateQueryRankingMapArgs = {
  index: Scalars["Int"]["input"];
};

export type StateQueryShardedShopArgs = {
  itemSubType: ItemSubType;
  nonce: Scalars["Int"]["input"];
};

export type StateQueryStakeStateArgs = {
  address: Scalars["Address"]["input"];
};

export type StateQueryStakeStatesArgs = {
  addresses: Array<InputMaybe<Scalars["Address"]["input"]>>;
};

export type StateQueryUnlockedRecipeIdsArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type StateQueryUnlockedWorldIdsArgs = {
  avatarAddress: Scalars["Address"]["input"];
};

export type StateQueryWeeklyArenaArgs = {
  index: Scalars["Int"]["input"];
};

export type StateQueryWorldBossKillRewardRecordArgs = {
  worldBossKillRewardRecordAddress: Scalars["Address"]["input"];
};

export type StateQueryWorldBossStateArgs = {
  bossAddress: Scalars["Address"]["input"];
};

export type StatsMapType = {
  __typename?: "StatsMapType";
  aTK: Scalars["Int"]["output"];
  cRI: Scalars["Int"]["output"];
  dEF: Scalars["Int"]["output"];
  hIT: Scalars["Int"]["output"];
  hP: Scalars["Int"]["output"];
  sPD: Scalars["Int"]["output"];
};

export type TipChanged = {
  __typename?: "TipChanged";
  hash?: Maybe<Scalars["ByteString"]["output"]>;
  index: Scalars["Long"]["output"];
};

export type Transaction = {
  __typename?: "Transaction";
  /** A list of actions in this transaction. */
  actions: Array<Action>;
  /** The block including the transaction. */
  blockRef: Block;
  /** A unique identifier derived from this transaction content. */
  id: Scalars["ID"]["output"];
  /** The number of previous transactions committed by the signer of this tx. */
  nonce: Scalars["Long"]["output"];
  /** A PublicKey of the account who signed this transaction. */
  publicKey: Scalars["ByteString"]["output"];
  /** A serialized tx payload in base64 string. */
  serializedPayload: Scalars["String"]["output"];
  /** A digital signature of the content of this transaction. */
  signature: Scalars["ByteString"]["output"];
  /** An address of the account who signed this transaction. */
  signer: Scalars["Address"]["output"];
  /** The time this transaction was created and signed. */
  timestamp: Scalars["DateTimeOffset"]["output"];
  /** Addresses whose states were affected by Actions. */
  updatedAddresses: Array<Scalars["Address"]["output"]>;
};

export type TransactionHeadlessQuery = {
  __typename?: "TransactionHeadlessQuery";
  /** @deprecated Use signTransaction */
  attachSignature: Scalars["String"]["output"];
  /** @deprecated API update with action query. use unsignedTransaction */
  createUnsignedTx: Scalars["String"]["output"];
  getTx?: Maybe<TransactionType_1>;
  nextTxNonce: Scalars["Long"]["output"];
  signTransaction: Scalars["ByteString"]["output"];
  transactionResult: TxResultType;
  unsignedTransaction: Scalars["ByteString"]["output"];
};

export type TransactionHeadlessQueryAttachSignatureArgs = {
  signature: Scalars["String"]["input"];
  unsignedTransaction: Scalars["String"]["input"];
};

export type TransactionHeadlessQueryCreateUnsignedTxArgs = {
  nonce?: InputMaybe<Scalars["Long"]["input"]>;
  plainValue: Scalars["String"]["input"];
  publicKey: Scalars["String"]["input"];
};

export type TransactionHeadlessQueryGetTxArgs = {
  txId: Scalars["TxId"]["input"];
};

export type TransactionHeadlessQueryNextTxNonceArgs = {
  address: Scalars["Address"]["input"];
};

export type TransactionHeadlessQuerySignTransactionArgs = {
  signature: Scalars["String"]["input"];
  unsignedTransaction: Scalars["String"]["input"];
};

export type TransactionHeadlessQueryTransactionResultArgs = {
  txId: Scalars["TxId"]["input"];
};

export type TransactionHeadlessQueryUnsignedTransactionArgs = {
  nonce?: InputMaybe<Scalars["Long"]["input"]>;
  plainValue: Scalars["String"]["input"];
  publicKey: Scalars["String"]["input"];
};

export type TransactionQuery = {
  __typename?: "TransactionQuery";
  /** Attach the given signature to the given transaction and return tx as hexadecimal */
  bindSignature: Scalars["String"]["output"];
  nextNonce: Scalars["Long"]["output"];
  stagedTransactions: Array<Transaction>;
  transaction?: Maybe<Transaction>;
  transactionResult: TxResultType;
  transactions: Array<Transaction>;
  unsignedTransaction: Scalars["ByteString"]["output"];
};

export type TransactionQueryBindSignatureArgs = {
  signature: Scalars["String"]["input"];
  unsignedTransaction: Scalars["String"]["input"];
};

export type TransactionQueryNextNonceArgs = {
  address: Scalars["Address"]["input"];
};

export type TransactionQueryStagedTransactionsArgs = {
  desc?: InputMaybe<Scalars["Boolean"]["input"]>;
  involvedAddress?: InputMaybe<Scalars["Address"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  signer?: InputMaybe<Scalars["Address"]["input"]>;
};

export type TransactionQueryTransactionArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TransactionQueryTransactionResultArgs = {
  txId: Scalars["ID"]["input"];
};

export type TransactionQueryTransactionsArgs = {
  desc?: InputMaybe<Scalars["Boolean"]["input"]>;
  involvedAddress?: InputMaybe<Scalars["Address"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  signer?: InputMaybe<Scalars["Address"]["input"]>;
};

export type TransactionQueryUnsignedTransactionArgs = {
  nonce?: InputMaybe<Scalars["Long"]["input"]>;
  plainValue: Scalars["String"]["input"];
  publicKey: Scalars["String"]["input"];
};

export type TransactionType_1 = {
  __typename?: "TransactionType_1";
  /** A list of actions in this transaction. */
  actions: Array<Maybe<Action>>;
  /** A unique identifier derived from this transaction content. */
  id: Scalars["TxId"]["output"];
  /** The number of previous transactions committed by the signer of this transaction. */
  nonce: Scalars["Long"]["output"];
  /** A PublicKey of the account who signed this transaction. */
  publicKey: PublicKeyType;
  /** A digital signature of the content of this transaction. */
  signature: Scalars["ByteString"]["output"];
  /** An address of the account who signed this transaction. */
  signer: Scalars["Address"]["output"];
  /** The time this transaction was created and signed. */
  timestamp: Scalars["String"]["output"];
  /** Addresses whose states were affected by Actions. */
  updatedAddresses: Array<Maybe<Scalars["Address"]["output"]>>;
};

export type TransferNcgHistoryType = {
  __typename?: "TransferNCGHistoryType";
  amount: Scalars["String"]["output"];
  blockHash: Scalars["ByteString"]["output"];
  memo?: Maybe<Scalars["String"]["output"]>;
  recipient: Scalars["Address"]["output"];
  sender: Scalars["Address"]["output"];
  txId: Scalars["ByteString"]["output"];
};

export type TxResultType = {
  __typename?: "TxResultType";
  actionsLogsList?: Maybe<Array<Array<Scalars["String"]["output"]>>>;
  /** The block hash which the target transaction executed. */
  blockHash?: Maybe<Scalars["String"]["output"]>;
  /** The block index which the target transaction executed. */
  blockIndex?: Maybe<Scalars["Long"]["output"]>;
  /** The hexadecimal string of the exception metadata. (when only failed) */
  exceptionMetadata?: Maybe<Scalars["BencodexValue"]["output"]>;
  /** The name of exception. (when only failed) */
  exceptionName?: Maybe<Scalars["String"]["output"]>;
  fungibleAssetsDelta?: Maybe<Array<FungibleAssetBalancesType>>;
  /** The transaction status. */
  txStatus: TxStatus;
  updatedFungibleAssets?: Maybe<Array<FungibleAssetBalancesType>>;
  updatedStates?: Maybe<Array<UpdatedStateType>>;
};

export enum TxStatus {
  Failure = "FAILURE",
  Invalid = "INVALID",
  Staging = "STAGING",
  Success = "SUCCESS",
}

export type UpdatedStateType = {
  __typename?: "UpdatedStateType";
  address: Scalars["Address"]["output"];
  state?: Maybe<Scalars["BencodexValue"]["output"]>;
};

export type ValidationQuery = {
  __typename?: "ValidationQuery";
  metadata: Scalars["Boolean"]["output"];
  privateKey: Scalars["Boolean"]["output"];
  publicKey: Scalars["Boolean"]["output"];
};

export type ValidationQueryMetadataArgs = {
  raw: Scalars["String"]["input"];
};

export type ValidationQueryPrivateKeyArgs = {
  hex: Scalars["ByteString"]["input"];
};

export type ValidationQueryPublicKeyArgs = {
  hex: Scalars["ByteString"]["input"];
};

/** A data type holds validator's public key and its voting power. */
export type Validator = {
  __typename?: "Validator";
  /** Gets the voting power of the validator. */
  power: Scalars["BigInt"]["output"];
  /** The public key of the validator. */
  publicKey: Scalars["PublicKey"]["output"];
};

export type Vote = {
  __typename?: "Vote";
  /** Hash of the block voted. */
  blockHash: Scalars["String"]["output"];
  /** Flag of the vote */
  flag: Scalars["VoteFlag"]["output"];
  /** Height of the consensus voted. */
  height: Scalars["Long"]["output"];
  /** Round of the consensus voted. */
  round: Scalars["Int"]["output"];
  /** A digital signature of the content of this vote. */
  signature: Scalars["ByteString"]["output"];
  /** The time this vote was created and signed. */
  timestamp: Scalars["DateTimeOffset"]["output"];
  /** Public key of the validator which is subject of the vote. */
  validatorPublicKey: Scalars["PublicKey"]["output"];
};

export type WeeklyArenaStateType = {
  __typename?: "WeeklyArenaStateType";
  address: Scalars["Address"]["output"];
  ended: Scalars["Boolean"]["output"];
  orderedArenaInfos: Array<Maybe<ArenaInfoType>>;
};

export type WorldBossKillRewardRecordMapType = {
  __typename?: "WorldBossKillRewardRecordMapType";
  bossLevel: Scalars["Int"]["output"];
  /** check reward already claimed. if already claimed return true. */
  claimed: Scalars["Boolean"]["output"];
};

export type WorldBossKillRewardRecordType = {
  __typename?: "WorldBossKillRewardRecordType";
  map: Array<WorldBossKillRewardRecordMapType>;
};

export type WorldBossStateType = {
  __typename?: "WorldBossStateType";
  /** world boss current hp. */
  currentHp: Scalars["BigInt"]["output"];
  /** world boss season ended block index. */
  endedBlockIndex: Scalars["Long"]["output"];
  /** world boss season id. */
  id: Scalars["Int"]["output"];
  /** world boss current level. */
  level: Scalars["Int"]["output"];
  /** world boss season started block index. */
  startedBlockIndex: Scalars["Long"]["output"];
};

export type WorldInformationType = {
  __typename?: "WorldInformationType";
  isStageCleared: Scalars["Boolean"]["output"];
  isWorldUnlocked: Scalars["Boolean"]["output"];
  world: WorldType;
};

export type WorldInformationTypeIsStageClearedArgs = {
  stageId: Scalars["Int"]["input"];
};

export type WorldInformationTypeIsWorldUnlockedArgs = {
  worldId: Scalars["Int"]["input"];
};

export type WorldInformationTypeWorldArgs = {
  worldId: Scalars["Int"]["input"];
};

export type WorldType = {
  __typename?: "WorldType";
  id: Scalars["Int"]["output"];
  isStageCleared: Scalars["Boolean"]["output"];
  isUnlocked: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  stageBegin: Scalars["Int"]["output"];
  stageClearedBlockIndex: Scalars["Long"]["output"];
  stageClearedId: Scalars["Int"]["output"];
  stageEnd: Scalars["Int"]["output"];
  unlockedBlockIndex: Scalars["Long"]["output"];
};

export type GetBalanceQueryVariables = Exact<{
  address: Scalars["Address"]["input"];
}>;

export type GetBalanceQuery = {
  __typename?: "StandaloneQuery";
  goldBalance: string;
};

export type GetLastBlockIndexQueryVariables = Exact<{
  offset: Scalars["Int"]["input"];
}>;

export type GetLastBlockIndexQuery = {
  __typename?: "StandaloneQuery";
  chainQuery: {
    __typename?: "ExplorerQuery";
    blockQuery?: {
      __typename?: "BlockQuery";
      blocks: Array<{ __typename?: "Block"; index: any }>;
    } | null;
  };
};

export type GetNextTxNonceQueryVariables = Exact<{
  address: Scalars["Address"]["input"];
}>;

export type GetNextTxNonceQuery = {
  __typename?: "StandaloneQuery";
  transaction: { __typename?: "TransactionHeadlessQuery"; nextTxNonce: any };
};

export type QueryQueryVariables = Exact<{
  txId: Scalars["TxId"]["input"];
}>;

export type QueryQuery = {
  __typename?: "StandaloneQuery";
  transaction: {
    __typename?: "TransactionHeadlessQuery";
    transactionResult: { __typename?: "TxResultType"; txStatus: TxStatus };
  };
};

export type TransferMutationVariables = Exact<{
  payload: Scalars["String"]["input"];
}>;

export type TransferMutation = {
  __typename?: "StandaloneMutation";
  stageTransaction: any;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetBalanceDocument = new TypedDocumentString(`
    query getBalance($address: Address!) {
  goldBalance(address: $address)
}
    `) as unknown as TypedDocumentString<
  GetBalanceQuery,
  GetBalanceQueryVariables
>;
export const GetLastBlockIndexDocument = new TypedDocumentString(`
    query getLastBlockIndex($offset: Int!) {
  chainQuery {
    blockQuery {
      blocks(offset: $offset, limit: 1, desc: true) {
        index
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
  GetLastBlockIndexQuery,
  GetLastBlockIndexQueryVariables
>;
export const GetNextTxNonceDocument = new TypedDocumentString(`
    query getNextTxNonce($address: Address!) {
  transaction {
    nextTxNonce(address: $address)
  }
}
    `) as unknown as TypedDocumentString<
  GetNextTxNonceQuery,
  GetNextTxNonceQueryVariables
>;
export const QueryDocument = new TypedDocumentString(`
    query query($txId: TxId!) {
  transaction {
    transactionResult(txId: $txId) {
      txStatus
    }
  }
}
    `) as unknown as TypedDocumentString<QueryQuery, QueryQueryVariables>;
export const TransferDocument = new TypedDocumentString(`
    mutation transfer($payload: String!) {
  stageTransaction(payload: $payload)
}
    `) as unknown as TypedDocumentString<
  TransferMutation,
  TransferMutationVariables
>;
