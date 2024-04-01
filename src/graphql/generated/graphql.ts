import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '../hooks';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type TActuatorConditionType = {
  readonly __typename?: 'ActuatorConditionType';
  readonly active: Scalars['Boolean']['output'];
  readonly actuator: TActuatorNodeType;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['Int']['output'];
  readonly operator: Maybe<TActuatorOperatorEnum>;
  readonly thresholdGroup: TThresholdGroupType;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly value: Scalars['Boolean']['output'];
};

export type TActuatorNodeType = {
  readonly __typename?: 'ActuatorNodeType';
  readonly actuatorConditions: ReadonlyArray<TActuatorConditionType>;
  readonly actuatorType: Maybe<TActuatorTypeEnum>;
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly currentState: Maybe<Scalars['Boolean']['output']>;
  readonly deviceId: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly id: Scalars['Int']['output'];
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly mainframe: Maybe<TMainframeType>;
  readonly manualOverride: Scalars['Boolean']['output'];
  readonly manualOverrideUntil: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly nodeType: Maybe<TNodeTypeEnum>;
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly thresholdGroupActuators: ReadonlyArray<TThresholdGroupActuatorType>;
  readonly type: Scalars['Int']['output'];
  readonly uid: Scalars['UUID']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TActuatorOperatorEnum =
  /** = */
  | 'EQUAL'
  /** != */
  | 'NOT_EQUAL';

export type TActuatorTypeEnum =
  | 'FAN'
  | 'HEATER'
  | 'LIGHT'
  | 'UNASSIGNED'
  | 'WATER_PUMP';

export type TAddActuatorConditionMutation = {
  readonly __typename?: 'AddActuatorConditionMutation';
  readonly actuatorCondition: Maybe<TActuatorConditionType>;
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TAddActuatorToThresholdGroupMutation = {
  readonly __typename?: 'AddActuatorToThresholdGroupMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
};

export type TAddSensorConditionMutation = {
  readonly __typename?: 'AddSensorConditionMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly sensorCondition: Maybe<TSensorConditionType>;
  readonly success: Scalars['Boolean']['output'];
};

export type TAddUserToHouseholdMigration = {
  readonly __typename?: 'AddUserToHouseholdMigration';
  readonly household: Maybe<THouseholdType>;
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TChangeActuatorNameMutation = {
  readonly __typename?: 'ChangeActuatorNameMutation';
  readonly actuator: Maybe<TActuatorNodeType>;
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TChangeMainframeNameMutation = {
  readonly __typename?: 'ChangeMainframeNameMutation';
  readonly mainframe: Maybe<TMainframeType>;
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TChangeSensorNameMutation = {
  readonly __typename?: 'ChangeSensorNameMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly sensor: Maybe<TSensorNodeType>;
  readonly success: Scalars['Boolean']['output'];
};

export type TChangeThresholdGroupActiveMutation = {
  readonly __typename?: 'ChangeThresholdGroupActiveMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
};

export type TChangeThresholdGroupNameMutation = {
  readonly __typename?: 'ChangeThresholdGroupNameMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
};

export type TChangeUserPasswordMutation = {
  readonly __typename?: 'ChangeUserPasswordMutation';
  readonly success: Scalars['Boolean']['output'];
};

export type TChangeUserProfileMutation = {
  readonly __typename?: 'ChangeUserProfileMutation';
  readonly success: Scalars['Boolean']['output'];
  readonly user: Maybe<TUserType>;
};

export type TCreateThresholdGroupMutation = {
  readonly __typename?: 'CreateThresholdGroupMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
};

export type TDailyLogValuesType = {
  readonly __typename?: 'DailyLogValuesType';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly date: Scalars['Date']['output'];
  readonly sensorValues: Maybe<ReadonlyArray<TSensorValueType>>;
  readonly updatedAt: Scalars['DateTime']['output'];
};


export type TDailyLogValuesTypeSensorValuesArgs = {
  householdId?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sensorType?: InputMaybe<Scalars['String']['input']>;
};

export type TDateRangeTypeEnum =
  /** DAY */
  | 'DAY'
  /** HOUR */
  | 'HOUR'
  /** MONTH */
  | 'MONTH'
  /** YEAR */
  | 'YEAR';

export type TDeleteThresholdGroupMutation = {
  readonly __typename?: 'DeleteThresholdGroupMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type THouseholdType = {
  readonly __typename?: 'HouseholdType';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly householdUsers: ReadonlyArray<THouseholdUserType>;
  readonly id: Scalars['Int']['output'];
  readonly mainframes: ReadonlyArray<TMainframeType>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly thresholdGroups: ReadonlyArray<TThresholdGroupType>;
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type THouseholdUserType = {
  readonly __typename?: 'HouseholdUserType';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly household: THouseholdType;
  readonly id: Scalars['Int']['output'];
  readonly isActivated: Maybe<Scalars['DateTime']['output']>;
  readonly isOwner: Scalars['Boolean']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly user: TUserType;
};

export type TMainframeType = {
  readonly __typename?: 'MainframeType';
  readonly actuators: Maybe<ReadonlyArray<TActuatorNodeType>>;
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly deviceId: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly household: Maybe<THouseholdType>;
  readonly id: Scalars['Int']['output'];
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly sensors: Maybe<ReadonlyArray<TSensorNodeType>>;
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<TNodeTypeEnum>;
  readonly uid: Scalars['UUID']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
};


export type TMainframeTypeActuatorsArgs = {
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TMainframeTypeSensorsArgs = {
  critical?: InputMaybe<Scalars['Boolean']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TMutation = {
  readonly __typename?: 'Mutation';
  readonly addActuatorCondition: Maybe<TAddActuatorConditionMutation>;
  readonly addActuatorToThresholdGroup: Maybe<TAddActuatorToThresholdGroupMutation>;
  readonly addSensorCondition: Maybe<TAddSensorConditionMutation>;
  readonly addUserToHousehold: Maybe<TAddUserToHouseholdMigration>;
  readonly changeActuatorName: Maybe<TChangeActuatorNameMutation>;
  readonly changeMainframeName: Maybe<TChangeMainframeNameMutation>;
  readonly changeSensorName: Maybe<TChangeSensorNameMutation>;
  readonly changeThresholdGroupActive: Maybe<TChangeThresholdGroupActiveMutation>;
  readonly changeThresholdGroupName: Maybe<TChangeThresholdGroupNameMutation>;
  readonly changeUserPassword: Maybe<TChangeUserPasswordMutation>;
  readonly changeUserProfile: Maybe<TChangeUserProfileMutation>;
  readonly createThresholdGroup: Maybe<TCreateThresholdGroupMutation>;
  readonly deleteThresholdGroup: Maybe<TDeleteThresholdGroupMutation>;
  readonly refreshToken: Maybe<TRefresh>;
  readonly removeActuatorCondition: Maybe<TRemoveActuatorConditionMutation>;
  readonly removeActuatorFromThresholdGroup: Maybe<TRemoveActuatorFromThresholdGroupMutation>;
  readonly removeSensorCondition: Maybe<TRemoveSensorConditionMutation>;
  readonly setActuatorThresholdGroupPriority: Maybe<TSetActuatorThresholdGroupPriorityMutation>;
  readonly setCriticalOverDisplay: Maybe<TSetCriticalOverDisplayMutation>;
  readonly setCriticalOverValue: Maybe<TSetCriticalOverMutation>;
  readonly setCriticalUnderDisplay: Maybe<TSetCriticalUnderDisplayMutation>;
  readonly setCriticalUnderValue: Maybe<TSetCriticalUnderMutation>;
  readonly setFavoriteActuator: Maybe<TSetFavoriteActuatorMutation>;
  readonly setFavoriteSensor: Maybe<TSetFavoriteSensorMutation>;
  readonly setManualOverrideUntil: Maybe<TSetManualOverrideUntilMutation>;
  readonly tokenAuth: Maybe<TObtainJsonWebToken>;
  readonly userProfileImageUpload: Maybe<TUserProfileImageMutation>;
  readonly verifyToken: Maybe<TVerify>;
};


export type TMutationAddActuatorConditionArgs = {
  actuatorId: Scalars['Int']['input'];
  operator: TActuatorOperatorEnum;
  thresholdGroupId: Scalars['Int']['input'];
  value: Scalars['Boolean']['input'];
};


export type TMutationAddActuatorToThresholdGroupArgs = {
  actuatorId: Scalars['Int']['input'];
  thresholdGroupId: Scalars['Int']['input'];
};


export type TMutationAddSensorConditionArgs = {
  operator: TSensorOperatorEnum;
  sensorId: Scalars['Int']['input'];
  thresholdGroupId: Scalars['Int']['input'];
  value: Scalars['Float']['input'];
};


export type TMutationAddUserToHouseholdArgs = {
  householdId: Scalars['Int']['input'];
  userEmail: Scalars['String']['input'];
};


export type TMutationChangeActuatorNameArgs = {
  actuatorId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type TMutationChangeMainframeNameArgs = {
  mainframeId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type TMutationChangeSensorNameArgs = {
  name: Scalars['String']['input'];
  sensorId: Scalars['Int']['input'];
};


export type TMutationChangeThresholdGroupActiveArgs = {
  active: Scalars['Boolean']['input'];
  thresholdGroupId: Scalars['Int']['input'];
};


export type TMutationChangeThresholdGroupNameArgs = {
  name: Scalars['String']['input'];
  thresholdGroupId: Scalars['Int']['input'];
};


export type TMutationChangeUserPasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type TMutationChangeUserProfileArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type TMutationCreateThresholdGroupArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  householdId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type TMutationDeleteThresholdGroupArgs = {
  thresholdGroupId: Scalars['Int']['input'];
};


export type TMutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type TMutationRemoveActuatorConditionArgs = {
  actuatorConditionId: Scalars['Int']['input'];
};


export type TMutationRemoveActuatorFromThresholdGroupArgs = {
  actuatorId: Scalars['Int']['input'];
  thresholdGroupId: Scalars['Int']['input'];
};


export type TMutationRemoveSensorConditionArgs = {
  sensorConditionId: Scalars['Int']['input'];
};


export type TMutationSetActuatorThresholdGroupPriorityArgs = {
  actuatorId: Scalars['Int']['input'];
  priority: Scalars['Int']['input'];
  thresholdGroupId: Scalars['Int']['input'];
};


export type TMutationSetCriticalOverDisplayArgs = {
  sensorId: Scalars['Int']['input'];
  value: Scalars['Boolean']['input'];
};


export type TMutationSetCriticalOverValueArgs = {
  sensorId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Float']['input']>;
};


export type TMutationSetCriticalUnderDisplayArgs = {
  sensorId: Scalars['Int']['input'];
  value: Scalars['Boolean']['input'];
};


export type TMutationSetCriticalUnderValueArgs = {
  sensorId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Float']['input']>;
};


export type TMutationSetFavoriteActuatorArgs = {
  actuatorId: Scalars['Int']['input'];
  favorite: Scalars['Boolean']['input'];
};


export type TMutationSetFavoriteSensorArgs = {
  favorite: Scalars['Boolean']['input'];
  sensorId: Scalars['Int']['input'];
};


export type TMutationSetManualOverrideUntilArgs = {
  actuatorId: Scalars['Int']['input'];
  until: Scalars['DateTime']['input'];
};


export type TMutationTokenAuthArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type TMutationUserProfileImageUploadArgs = {
  profileImage: Scalars['Upload']['input'];
};


export type TMutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type TNodeTypeEnum =
  | 'ACTUATOR'
  | 'COMBINED'
  | 'MAINFRAME'
  | 'SENSOR'
  | 'UNASSIGNED';

export type TObtainJsonWebToken = {
  readonly __typename?: 'ObtainJSONWebToken';
  readonly households: Maybe<ReadonlyArray<THouseholdType>>;
  readonly payload: Scalars['GenericScalar']['output'];
  readonly refreshExpiresIn: Scalars['Int']['output'];
  readonly token: Scalars['String']['output'];
  readonly user: Maybe<TUserType>;
};

export type TQuery = {
  readonly __typename?: 'Query';
  readonly actuatorCondition: Maybe<TActuatorConditionType>;
  readonly actuatorNode: Maybe<TActuatorNodeType>;
  readonly allActuatorConditions: Maybe<ReadonlyArray<TActuatorConditionType>>;
  readonly allActuatorNodes: Maybe<ReadonlyArray<TActuatorNodeType>>;
  readonly allHouseholds: Maybe<ReadonlyArray<THouseholdType>>;
  readonly allMainframes: Maybe<ReadonlyArray<TMainframeType>>;
  readonly allSensorConditions: Maybe<ReadonlyArray<TSensorConditionType>>;
  readonly allSensorNodes: Maybe<ReadonlyArray<TSensorNodeType>>;
  readonly allThresholdGroups: Maybe<ReadonlyArray<TThresholdGroupType>>;
  readonly allUsers: Maybe<ReadonlyArray<TUserType>>;
  readonly dailyLogValues: Maybe<TDailyLogValuesType>;
  readonly household: Maybe<THouseholdType>;
  readonly mainframe: Maybe<TMainframeType>;
  readonly sensorCondition: Maybe<TSensorConditionType>;
  readonly sensorNode: Maybe<TSensorNodeType>;
  readonly sensorValuesForDateRange: Maybe<TSensorDateRangeValuesWithMinMaxType>;
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
  readonly user: Maybe<TUserType>;
};


export type TQueryActuatorConditionArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryActuatorNodeArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryAllActuatorConditionsArgs = {
  thresholdGroupId: Scalars['Int']['input'];
};


export type TQueryAllActuatorNodesArgs = {
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  mainframeId: Scalars['Int']['input'];
};


export type TQueryAllSensorConditionsArgs = {
  thresholdGroupId: Scalars['Int']['input'];
};


export type TQueryAllSensorNodesArgs = {
  critical?: InputMaybe<Scalars['Boolean']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  mainframeId: Scalars['Int']['input'];
};


export type TQueryAllThresholdGroupsArgs = {
  householdId: Scalars['Int']['input'];
};


export type TQueryDailyLogValuesArgs = {
  date: Scalars['Date']['input'];
};


export type TQueryHouseholdArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryMainframeArgs = {
  id: Scalars['Int']['input'];
};


export type TQuerySensorConditionArgs = {
  id: Scalars['ID']['input'];
};


export type TQuerySensorNodeArgs = {
  id: Scalars['Int']['input'];
};


export type TQuerySensorValuesForDateRangeArgs = {
  dateRangeType?: InputMaybe<TDateRangeTypeEnum>;
  endDatetime?: InputMaybe<Scalars['DateTime']['input']>;
  sensorId: Scalars['Int']['input'];
};


export type TQueryThresholdGroupArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type TRefresh = {
  readonly __typename?: 'Refresh';
  readonly payload: Scalars['GenericScalar']['output'];
  readonly refreshExpiresIn: Scalars['Int']['output'];
  readonly token: Scalars['String']['output'];
};

export type TRemoveActuatorConditionMutation = {
  readonly __typename?: 'RemoveActuatorConditionMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TRemoveActuatorFromThresholdGroupMutation = {
  readonly __typename?: 'RemoveActuatorFromThresholdGroupMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
};

export type TRemoveSensorConditionMutation = {
  readonly __typename?: 'RemoveSensorConditionMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSensorConditionType = {
  readonly __typename?: 'SensorConditionType';
  readonly active: Scalars['Boolean']['output'];
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['Int']['output'];
  readonly operator: Maybe<TSensorOperatorEnum>;
  readonly sensor: TSensorNodeSubscriptionType;
  readonly thresholdGroup: TThresholdGroupType;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly value: Scalars['Float']['output'];
};

export type TSensorDateRangeValuesType = {
  readonly __typename?: 'SensorDateRangeValuesType';
  readonly avgValue: Maybe<Scalars['Float']['output']>;
  readonly endDate: Scalars['DateTime']['output'];
  readonly maxValue: Scalars['Float']['output'];
  readonly minValue: Scalars['Float']['output'];
  readonly startDate: Scalars['DateTime']['output'];
};

export type TSensorDateRangeValuesWithMinMaxType = {
  readonly __typename?: 'SensorDateRangeValuesWithMinMaxType';
  readonly maxValue: Maybe<Scalars['Float']['output']>;
  readonly minValue: Maybe<Scalars['Float']['output']>;
  readonly values: Maybe<ReadonlyArray<Maybe<TSensorDateRangeValuesType>>>;
};

export type TSensorNodeSubscriptionType = {
  readonly __typename?: 'SensorNodeSubscriptionType';
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly criticalOver: Maybe<Scalars['Float']['output']>;
  readonly criticalUnder: Maybe<Scalars['Float']['output']>;
  readonly currentValue: Maybe<Scalars['Float']['output']>;
  readonly deviceId: Scalars['String']['output'];
  readonly displayCriticalOver: Scalars['Boolean']['output'];
  readonly displayCriticalUnder: Scalars['Boolean']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly id: Scalars['Int']['output'];
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly nodeType: Maybe<TNodeTypeEnum>;
  readonly sensorType: Scalars['Int']['output'];
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly type: Scalars['Int']['output'];
  readonly uid: Scalars['UUID']['output'];
  readonly unitType: Maybe<TUnitTypeEnum>;
};

export type TSensorNodeType = {
  readonly __typename?: 'SensorNodeType';
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly criticalOver: Maybe<Scalars['Float']['output']>;
  readonly criticalUnder: Maybe<Scalars['Float']['output']>;
  readonly currentValue: Maybe<Scalars['Float']['output']>;
  readonly deviceId: Scalars['String']['output'];
  readonly displayCriticalOver: Scalars['Boolean']['output'];
  readonly displayCriticalUnder: Scalars['Boolean']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly id: Scalars['Int']['output'];
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly mainframe: Maybe<TMainframeType>;
  readonly name: Scalars['String']['output'];
  readonly nodeType: Maybe<TNodeTypeEnum>;
  readonly sensorConditions: ReadonlyArray<TSensorConditionType>;
  readonly sensorType: Maybe<TSensorTypeEnum>;
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly type: Scalars['Int']['output'];
  readonly uid: Scalars['UUID']['output'];
  readonly unitType: Maybe<TUnitTypeEnum>;
  readonly unitTypeStr: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly values: Maybe<ReadonlyArray<Maybe<TSensorDateRangeValuesType>>>;
};

export type TSensorOperatorEnum =
  /** = */
  | 'EQUAL'
  /** > */
  | 'GREATER_THAN'
  /** >= */
  | 'GREATER_THAN_OR_EQUAL'
  /** < */
  | 'LESS_THAN'
  /** <= */
  | 'LESS_THAN_OR_EQUAL'
  /** != */
  | 'NOT_EQUAL';

export type TSensorTypeEnum =
  | 'CO2'
  | 'HUMIDITY'
  | 'LIGHT'
  | 'SOIL_MOISTURE'
  | 'SOIL_PH'
  | 'TEMPERATURE'
  | 'UNASSIGNED';

/**
 * Subscriptions for sensor values. This is used to notify the user when a new sensor value is logged.
 * To successfully authenticate user, pass token in the query string. For example:
 * /graphql/?token=<your_token_here>
 */
export type TSensorValueSubscriptionType = {
  readonly __typename?: 'SensorValueSubscriptionType';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['Int']['output'];
  readonly sensor: Maybe<TSensorNodeSubscriptionType>;
  readonly value: Scalars['Float']['output'];
};

export type TSensorValueType = {
  readonly __typename?: 'SensorValueType';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['Int']['output'];
  readonly sensor: TSensorNodeSubscriptionType;
  readonly value: Scalars['Float']['output'];
};

export type TSetActuatorThresholdGroupPriorityMutation = {
  readonly __typename?: 'SetActuatorThresholdGroupPriorityMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSetCriticalOverDisplayMutation = {
  readonly __typename?: 'SetCriticalOverDisplayMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly sensor: Maybe<TSensorNodeType>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSetCriticalOverMutation = {
  readonly __typename?: 'SetCriticalOverMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly sensor: Maybe<TSensorNodeType>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSetCriticalUnderDisplayMutation = {
  readonly __typename?: 'SetCriticalUnderDisplayMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly sensor: Maybe<TSensorNodeType>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSetCriticalUnderMutation = {
  readonly __typename?: 'SetCriticalUnderMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly sensor: Maybe<TSensorNodeType>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSetFavoriteActuatorMutation = {
  readonly __typename?: 'SetFavoriteActuatorMutation';
  readonly actuator: Maybe<TActuatorNodeType>;
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSetFavoriteSensorMutation = {
  readonly __typename?: 'SetFavoriteSensorMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly sensor: Maybe<TSensorNodeType>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSetManualOverrideUntilMutation = {
  readonly __typename?: 'SetManualOverrideUntilMutation';
  readonly actuator: Maybe<TActuatorNodeType>;
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type TSubscription = {
  readonly __typename?: 'Subscription';
  readonly sensorValueLogged: Maybe<TSensorValueSubscriptionType>;
};

export type TThresholdGroupActuatorType = {
  readonly __typename?: 'ThresholdGroupActuatorType';
  readonly actuator: TActuatorNodeType;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['Int']['output'];
  readonly priority: Scalars['Int']['output'];
  readonly thresholdGroup: TThresholdGroupType;
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TThresholdGroupType = {
  readonly __typename?: 'ThresholdGroupType';
  readonly active: Scalars['Boolean']['output'];
  readonly actuatorConditions: ReadonlyArray<TActuatorConditionType>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly household: THouseholdType;
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['String']['output'];
  readonly sensorConditions: ReadonlyArray<TSensorConditionType>;
  readonly thresholdGroupActuators: ReadonlyArray<TThresholdGroupActuatorType>;
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TUnitTypeEnum =
  /** ppm */
  | 'CO2'
  /** % */
  | 'HUMIDITY'
  /** Lux */
  | 'LIGHT'
  /** % */
  | 'SOIL_MOISTURE'
  /** pH */
  | 'SOIL_PH'
  /** °C */
  | 'TEMPERATURE';

export type TUserProfileImageMutation = {
  readonly __typename?: 'UserProfileImageMutation';
  readonly profileImage: Maybe<Scalars['String']['output']>;
  readonly success: Maybe<Scalars['Boolean']['output']>;
};

export type TUserType = {
  readonly __typename?: 'UserType';
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['Int']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  readonly isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  readonly isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  readonly isSuperuser: Scalars['Boolean']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly profileImage: Maybe<Scalars['String']['output']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  readonly username: Scalars['String']['output'];
};

export type TVerify = {
  readonly __typename?: 'Verify';
  readonly payload: Scalars['GenericScalar']['output'];
};

export type TFActuatorBase = { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly currentState: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null };

export type TFCategoryBase = { readonly __typename?: 'MainframeType', readonly id: number, readonly name: string, readonly isOnline: boolean, readonly batteryLevel: number | null };

export type TFGroup = { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string, readonly active: boolean, readonly sensorConditions: ReadonlyArray<{ readonly __typename?: 'SensorConditionType', readonly id: number, readonly active: boolean, readonly sensor: { readonly __typename?: 'SensorNodeSubscriptionType', readonly id: number, readonly name: string | null } }> };

export type TFSensorBase = { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly currentValue: number | null, readonly unitType: string | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly avgValue: number | null } | null> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null };

export type TFUser = { readonly __typename?: 'UserType', readonly id: number, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profileImage: string | null };

export type TMAuthUserVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type TMAuthUser = { readonly __typename?: 'Mutation', readonly login: { readonly __typename?: 'ObtainJSONWebToken', readonly token: string, readonly user: { readonly __typename?: 'UserType', readonly id: number, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profileImage: string | null } | null } | null };

export type TMSetCriticalOverVariables = Exact<{
  sensorId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Float']['input']>;
}>;


export type TMSetCriticalOver = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetCriticalOverMutation', readonly success: boolean } | null };

export type TMSetCriticalUnderVariables = Exact<{
  sensorId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['Float']['input']>;
}>;


export type TMSetCriticalUnder = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetCriticalUnderMutation', readonly success: boolean } | null };

export type TMSetFavoriteActuatorVariables = Exact<{
  actuatorId: Scalars['Int']['input'];
  favorite: Scalars['Boolean']['input'];
}>;


export type TMSetFavoriteActuator = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetFavoriteActuatorMutation', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly currentState: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null } | null } | null };

export type TMSetFavoriteSensorVariables = Exact<{
  sensorId: Scalars['Int']['input'];
  favorite: Scalars['Boolean']['input'];
}>;


export type TMSetFavoriteSensor = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetFavoriteSensorMutation', readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly currentValue: number | null, readonly unitType: string | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly avgValue: number | null } | null> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null } | null } | null };

export type TQActuatorDetailVariables = Exact<{
  actuatorId: Scalars['Int']['input'];
}>;


export type TQActuatorDetail = { readonly __typename?: 'Query', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly currentState: boolean | null, readonly batteryLevel: number | null, readonly isOnline: boolean, readonly manualOverride: boolean, readonly thresholdGroupActuators: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupActuatorType', readonly id: number, readonly priority: number, readonly thresholdGroup: { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string } }> } | null };

export type TQActuatorsVariables = Exact<{ [key: string]: never; }>;


export type TQActuators = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'MainframeType', readonly id: number, readonly name: string, readonly actuators: ReadonlyArray<{ readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly currentState: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null }> | null }> | null };

export type TQCategoriesVariables = Exact<{ [key: string]: never; }>;


export type TQCategories = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'MainframeType', readonly id: number, readonly name: string, readonly isOnline: boolean, readonly batteryLevel: number | null, readonly sensors: ReadonlyArray<{ readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly currentValue: number | null, readonly unitType: string | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly avgValue: number | null } | null> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null }> | null, readonly actuators: ReadonlyArray<{ readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly currentState: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null }> | null }> | null };

export type TQSensorDetailVariables = Exact<{
  sensorId: Scalars['Int']['input'];
}>;


export type TQSensorDetail = { readonly __typename?: 'Query', readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly currentValue: number | null, readonly batteryLevel: number | null, readonly isOnline: boolean, readonly unitType: string | null } | null };

export type TQSensorGraphValuesVariables = Exact<{
  sensorId: Scalars['Int']['input'];
}>;


export type TQSensorGraphValues = { readonly __typename?: 'Query', readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly criticalOver: number | null, readonly criticalUnder: number | null } | null };

export type TQSensorHistoricalValuesVariables = Exact<{
  sensorId: Scalars['Int']['input'];
  dateRangeType?: InputMaybe<TDateRangeTypeEnum>;
}>;


export type TQSensorHistoricalValues = { readonly __typename?: 'Query', readonly data: { readonly __typename?: 'SensorDateRangeValuesWithMinMaxType', readonly minValue: number | null, readonly maxValue: number | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly startDate: any, readonly max: number, readonly min: number, readonly average: number | null } | null> | null } | null };

export type TQSensorHistoricalValuesByDateVariables = Exact<{
  sensorId: Scalars['Int']['input'];
  dateRangeType?: InputMaybe<TDateRangeTypeEnum>;
  endDatetime?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type TQSensorHistoricalValuesByDate = { readonly __typename?: 'Query', readonly data: { readonly __typename?: 'SensorDateRangeValuesWithMinMaxType', readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly startDate: any, readonly average: number | null } | null> | null } | null };

export type TQSensorsVariables = Exact<{ [key: string]: never; }>;


export type TQSensors = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'MainframeType', readonly id: number, readonly name: string, readonly sensors: ReadonlyArray<{ readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly currentValue: number | null, readonly unitType: string | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly avgValue: number | null } | null> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null }> | null }> | null };

export type TSSensorValuesVariables = Exact<{ [key: string]: never; }>;


export type TSSensorValues = { readonly __typename?: 'Subscription', readonly sensorValueLogged: { readonly __typename?: 'SensorValueSubscriptionType', readonly id: number, readonly value: number, readonly sensor: { readonly __typename?: 'SensorNodeSubscriptionType', readonly id: number } | null } | null };

export const FActuatorBase = gql`
    fragment FActuatorBase on ActuatorNodeType {
  id
  name
  favorite
  currentState
  category: mainframe {
    id
  }
}
    `;
export const FCategoryBase = gql`
    fragment FCategoryBase on MainframeType {
  id
  name
  isOnline
  batteryLevel
}
    `;
export const FGroup = gql`
    fragment FGroup on ThresholdGroupType {
  id
  name
  active
  sensorConditions {
    id
    active
    sensor {
      id
      name
    }
  }
}
    `;
export const FSensorBase = gql`
    fragment FSensorBase on SensorNodeType {
  id
  name
  favorite
  unitType: unitTypeStr
  currentValue
  values {
    avgValue
  }
  category: mainframe {
    id
  }
}
    `;
export const FUser = gql`
    fragment FUser on UserType {
  id
  email
  firstName
  lastName
  profileImage
}
    `;
export const MAuthUserDocument = gql`
    mutation MAuthUser($email: String!, $password: String!) {
  login: tokenAuth(email: $email, password: $password) {
    token
    user {
      ...FUser
    }
  }
}
    ${FUser}`;
export type TMAuthUserMutationFn = ApolloReactCommon.MutationFunction<TMAuthUser, TMAuthUserVariables>;

/**
 * __useMAuthUser__
 *
 * To run a mutation, you first call `useMAuthUser` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMAuthUser` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mAuthUser, { data, loading, error }] = useMAuthUser({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useMAuthUser(baseOptions?: ApolloReactHooks.MutationHookOptions<TMAuthUser, TMAuthUserVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMAuthUser, TMAuthUserVariables>(MAuthUserDocument, options);
      }
export type MAuthUserHookResult = ReturnType<typeof useMAuthUser>;
export type MAuthUserMutationResult = ApolloReactCommon.MutationResult<TMAuthUser>;
export type MAuthUserMutationOptions = ApolloReactCommon.BaseMutationOptions<TMAuthUser, TMAuthUserVariables>;
export const MSetCriticalOverDocument = gql`
    mutation MSetCriticalOver($sensorId: Int!, $value: Float) {
  result: setCriticalOverValue(sensorId: $sensorId, value: $value) {
    success
  }
}
    `;
export type TMSetCriticalOverMutationFn = ApolloReactCommon.MutationFunction<TMSetCriticalOver, TMSetCriticalOverVariables>;

/**
 * __useMSetCriticalOver__
 *
 * To run a mutation, you first call `useMSetCriticalOver` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetCriticalOver` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetCriticalOver, { data, loading, error }] = useMSetCriticalOver({
 *   variables: {
 *      sensorId: // value for 'sensorId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useMSetCriticalOver(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetCriticalOver, TMSetCriticalOverVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetCriticalOver, TMSetCriticalOverVariables>(MSetCriticalOverDocument, options);
      }
export type MSetCriticalOverHookResult = ReturnType<typeof useMSetCriticalOver>;
export type MSetCriticalOverMutationResult = ApolloReactCommon.MutationResult<TMSetCriticalOver>;
export type MSetCriticalOverMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetCriticalOver, TMSetCriticalOverVariables>;
export const MSetCriticalUnderDocument = gql`
    mutation MSetCriticalUnder($sensorId: Int!, $value: Float) {
  result: setCriticalUnderValue(sensorId: $sensorId, value: $value) {
    success
  }
}
    `;
export type TMSetCriticalUnderMutationFn = ApolloReactCommon.MutationFunction<TMSetCriticalUnder, TMSetCriticalUnderVariables>;

/**
 * __useMSetCriticalUnder__
 *
 * To run a mutation, you first call `useMSetCriticalUnder` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetCriticalUnder` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetCriticalUnder, { data, loading, error }] = useMSetCriticalUnder({
 *   variables: {
 *      sensorId: // value for 'sensorId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useMSetCriticalUnder(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetCriticalUnder, TMSetCriticalUnderVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetCriticalUnder, TMSetCriticalUnderVariables>(MSetCriticalUnderDocument, options);
      }
export type MSetCriticalUnderHookResult = ReturnType<typeof useMSetCriticalUnder>;
export type MSetCriticalUnderMutationResult = ApolloReactCommon.MutationResult<TMSetCriticalUnder>;
export type MSetCriticalUnderMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetCriticalUnder, TMSetCriticalUnderVariables>;
export const MSetFavoriteActuatorDocument = gql`
    mutation MSetFavoriteActuator($actuatorId: Int!, $favorite: Boolean!) {
  result: setFavoriteActuator(actuatorId: $actuatorId, favorite: $favorite) {
    actuator {
      ...FActuatorBase
    }
  }
}
    ${FActuatorBase}`;
export type TMSetFavoriteActuatorMutationFn = ApolloReactCommon.MutationFunction<TMSetFavoriteActuator, TMSetFavoriteActuatorVariables>;

/**
 * __useMSetFavoriteActuator__
 *
 * To run a mutation, you first call `useMSetFavoriteActuator` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetFavoriteActuator` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetFavoriteActuator, { data, loading, error }] = useMSetFavoriteActuator({
 *   variables: {
 *      actuatorId: // value for 'actuatorId'
 *      favorite: // value for 'favorite'
 *   },
 * });
 */
export function useMSetFavoriteActuator(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetFavoriteActuator, TMSetFavoriteActuatorVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetFavoriteActuator, TMSetFavoriteActuatorVariables>(MSetFavoriteActuatorDocument, options);
      }
export type MSetFavoriteActuatorHookResult = ReturnType<typeof useMSetFavoriteActuator>;
export type MSetFavoriteActuatorMutationResult = ApolloReactCommon.MutationResult<TMSetFavoriteActuator>;
export type MSetFavoriteActuatorMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetFavoriteActuator, TMSetFavoriteActuatorVariables>;
export const MSetFavoriteSensorDocument = gql`
    mutation MSetFavoriteSensor($sensorId: Int!, $favorite: Boolean!) {
  result: setFavoriteSensor(sensorId: $sensorId, favorite: $favorite) {
    sensor {
      ...FSensorBase
    }
  }
}
    ${FSensorBase}`;
export type TMSetFavoriteSensorMutationFn = ApolloReactCommon.MutationFunction<TMSetFavoriteSensor, TMSetFavoriteSensorVariables>;

/**
 * __useMSetFavoriteSensor__
 *
 * To run a mutation, you first call `useMSetFavoriteSensor` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetFavoriteSensor` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetFavoriteSensor, { data, loading, error }] = useMSetFavoriteSensor({
 *   variables: {
 *      sensorId: // value for 'sensorId'
 *      favorite: // value for 'favorite'
 *   },
 * });
 */
export function useMSetFavoriteSensor(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetFavoriteSensor, TMSetFavoriteSensorVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetFavoriteSensor, TMSetFavoriteSensorVariables>(MSetFavoriteSensorDocument, options);
      }
export type MSetFavoriteSensorHookResult = ReturnType<typeof useMSetFavoriteSensor>;
export type MSetFavoriteSensorMutationResult = ApolloReactCommon.MutationResult<TMSetFavoriteSensor>;
export type MSetFavoriteSensorMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetFavoriteSensor, TMSetFavoriteSensorVariables>;
export const QActuatorDetailDocument = gql`
    query QActuatorDetail($actuatorId: Int!) {
  actuator: actuatorNode(id: $actuatorId) {
    id
    currentState
    batteryLevel
    isOnline
    manualOverride
    thresholdGroupActuators {
      id
      priority
      thresholdGroup {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useQActuatorDetail__
 *
 * To run a query within a React component, call `useQActuatorDetail` and pass it any options that fit your needs.
 * When your component renders, `useQActuatorDetail` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQActuatorDetail({
 *   variables: {
 *      actuatorId: // value for 'actuatorId'
 *   },
 * });
 */
export function useQActuatorDetail(baseOptions: ApolloReactHooks.QueryHookOptions<TQActuatorDetail, TQActuatorDetailVariables> & ({ variables: TQActuatorDetailVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQActuatorDetail, TQActuatorDetailVariables>(QActuatorDetailDocument, options);
      }
export function useQActuatorDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQActuatorDetail, TQActuatorDetailVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQActuatorDetail, TQActuatorDetailVariables>(QActuatorDetailDocument, options);
        }
export function useQActuatorDetailSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQActuatorDetail, TQActuatorDetailVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQActuatorDetail, TQActuatorDetailVariables>(QActuatorDetailDocument, options);
        }
export type QActuatorDetailHookResult = ReturnType<typeof useQActuatorDetail>;
export type QActuatorDetailLazyQueryHookResult = ReturnType<typeof useQActuatorDetailLazyQuery>;
export type QActuatorDetailSuspenseQueryHookResult = ReturnType<typeof useQActuatorDetailSuspenseQuery>;
export type QActuatorDetailQueryResult = ApolloReactCommon.QueryResult<TQActuatorDetail, TQActuatorDetailVariables>;
export const QActuatorsDocument = gql`
    query QActuators {
  categories: allMainframes {
    id
    name
    actuators {
      ...FActuatorBase
    }
  }
}
    ${FActuatorBase}`;

/**
 * __useQActuators__
 *
 * To run a query within a React component, call `useQActuators` and pass it any options that fit your needs.
 * When your component renders, `useQActuators` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQActuators({
 *   variables: {
 *   },
 * });
 */
export function useQActuators(baseOptions?: ApolloReactHooks.QueryHookOptions<TQActuators, TQActuatorsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQActuators, TQActuatorsVariables>(QActuatorsDocument, options);
      }
export function useQActuatorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQActuators, TQActuatorsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQActuators, TQActuatorsVariables>(QActuatorsDocument, options);
        }
export function useQActuatorsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQActuators, TQActuatorsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQActuators, TQActuatorsVariables>(QActuatorsDocument, options);
        }
export type QActuatorsHookResult = ReturnType<typeof useQActuators>;
export type QActuatorsLazyQueryHookResult = ReturnType<typeof useQActuatorsLazyQuery>;
export type QActuatorsSuspenseQueryHookResult = ReturnType<typeof useQActuatorsSuspenseQuery>;
export type QActuatorsQueryResult = ApolloReactCommon.QueryResult<TQActuators, TQActuatorsVariables>;
export const QCategoriesDocument = gql`
    query QCategories {
  categories: allMainframes {
    ...FCategoryBase
    sensors {
      ...FSensorBase
    }
    actuators {
      ...FActuatorBase
    }
  }
}
    ${FCategoryBase}
${FSensorBase}
${FActuatorBase}`;

/**
 * __useQCategories__
 *
 * To run a query within a React component, call `useQCategories` and pass it any options that fit your needs.
 * When your component renders, `useQCategories` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQCategories({
 *   variables: {
 *   },
 * });
 */
export function useQCategories(baseOptions?: ApolloReactHooks.QueryHookOptions<TQCategories, TQCategoriesVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQCategories, TQCategoriesVariables>(QCategoriesDocument, options);
      }
export function useQCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQCategories, TQCategoriesVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQCategories, TQCategoriesVariables>(QCategoriesDocument, options);
        }
export function useQCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQCategories, TQCategoriesVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQCategories, TQCategoriesVariables>(QCategoriesDocument, options);
        }
export type QCategoriesHookResult = ReturnType<typeof useQCategories>;
export type QCategoriesLazyQueryHookResult = ReturnType<typeof useQCategoriesLazyQuery>;
export type QCategoriesSuspenseQueryHookResult = ReturnType<typeof useQCategoriesSuspenseQuery>;
export type QCategoriesQueryResult = ApolloReactCommon.QueryResult<TQCategories, TQCategoriesVariables>;
export const QSensorDetailDocument = gql`
    query QSensorDetail($sensorId: Int!) {
  sensor: sensorNode(id: $sensorId) {
    id
    currentValue
    batteryLevel
    isOnline
    unitType: unitTypeStr
  }
}
    `;

/**
 * __useQSensorDetail__
 *
 * To run a query within a React component, call `useQSensorDetail` and pass it any options that fit your needs.
 * When your component renders, `useQSensorDetail` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQSensorDetail({
 *   variables: {
 *      sensorId: // value for 'sensorId'
 *   },
 * });
 */
export function useQSensorDetail(baseOptions: ApolloReactHooks.QueryHookOptions<TQSensorDetail, TQSensorDetailVariables> & ({ variables: TQSensorDetailVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQSensorDetail, TQSensorDetailVariables>(QSensorDetailDocument, options);
      }
export function useQSensorDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQSensorDetail, TQSensorDetailVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQSensorDetail, TQSensorDetailVariables>(QSensorDetailDocument, options);
        }
export function useQSensorDetailSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQSensorDetail, TQSensorDetailVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQSensorDetail, TQSensorDetailVariables>(QSensorDetailDocument, options);
        }
export type QSensorDetailHookResult = ReturnType<typeof useQSensorDetail>;
export type QSensorDetailLazyQueryHookResult = ReturnType<typeof useQSensorDetailLazyQuery>;
export type QSensorDetailSuspenseQueryHookResult = ReturnType<typeof useQSensorDetailSuspenseQuery>;
export type QSensorDetailQueryResult = ApolloReactCommon.QueryResult<TQSensorDetail, TQSensorDetailVariables>;
export const QSensorGraphValuesDocument = gql`
    query QSensorGraphValues($sensorId: Int!) {
  sensor: sensorNode(id: $sensorId) {
    id
    criticalOver
    criticalUnder
  }
}
    `;

/**
 * __useQSensorGraphValues__
 *
 * To run a query within a React component, call `useQSensorGraphValues` and pass it any options that fit your needs.
 * When your component renders, `useQSensorGraphValues` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQSensorGraphValues({
 *   variables: {
 *      sensorId: // value for 'sensorId'
 *   },
 * });
 */
export function useQSensorGraphValues(baseOptions: ApolloReactHooks.QueryHookOptions<TQSensorGraphValues, TQSensorGraphValuesVariables> & ({ variables: TQSensorGraphValuesVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQSensorGraphValues, TQSensorGraphValuesVariables>(QSensorGraphValuesDocument, options);
      }
export function useQSensorGraphValuesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQSensorGraphValues, TQSensorGraphValuesVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQSensorGraphValues, TQSensorGraphValuesVariables>(QSensorGraphValuesDocument, options);
        }
export function useQSensorGraphValuesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQSensorGraphValues, TQSensorGraphValuesVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQSensorGraphValues, TQSensorGraphValuesVariables>(QSensorGraphValuesDocument, options);
        }
export type QSensorGraphValuesHookResult = ReturnType<typeof useQSensorGraphValues>;
export type QSensorGraphValuesLazyQueryHookResult = ReturnType<typeof useQSensorGraphValuesLazyQuery>;
export type QSensorGraphValuesSuspenseQueryHookResult = ReturnType<typeof useQSensorGraphValuesSuspenseQuery>;
export type QSensorGraphValuesQueryResult = ApolloReactCommon.QueryResult<TQSensorGraphValues, TQSensorGraphValuesVariables>;
export const QSensorHistoricalValuesDocument = gql`
    query QSensorHistoricalValues($sensorId: Int!, $dateRangeType: DateRangeTypeEnum) {
  data: sensorValuesForDateRange(
    sensorId: $sensorId
    dateRangeType: $dateRangeType
  ) {
    minValue
    maxValue
    values {
      startDate
      max: maxValue
      min: minValue
      average: avgValue
    }
  }
}
    `;

/**
 * __useQSensorHistoricalValues__
 *
 * To run a query within a React component, call `useQSensorHistoricalValues` and pass it any options that fit your needs.
 * When your component renders, `useQSensorHistoricalValues` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQSensorHistoricalValues({
 *   variables: {
 *      sensorId: // value for 'sensorId'
 *      dateRangeType: // value for 'dateRangeType'
 *   },
 * });
 */
export function useQSensorHistoricalValues(baseOptions: ApolloReactHooks.QueryHookOptions<TQSensorHistoricalValues, TQSensorHistoricalValuesVariables> & ({ variables: TQSensorHistoricalValuesVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQSensorHistoricalValues, TQSensorHistoricalValuesVariables>(QSensorHistoricalValuesDocument, options);
      }
export function useQSensorHistoricalValuesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQSensorHistoricalValues, TQSensorHistoricalValuesVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQSensorHistoricalValues, TQSensorHistoricalValuesVariables>(QSensorHistoricalValuesDocument, options);
        }
export function useQSensorHistoricalValuesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQSensorHistoricalValues, TQSensorHistoricalValuesVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQSensorHistoricalValues, TQSensorHistoricalValuesVariables>(QSensorHistoricalValuesDocument, options);
        }
export type QSensorHistoricalValuesHookResult = ReturnType<typeof useQSensorHistoricalValues>;
export type QSensorHistoricalValuesLazyQueryHookResult = ReturnType<typeof useQSensorHistoricalValuesLazyQuery>;
export type QSensorHistoricalValuesSuspenseQueryHookResult = ReturnType<typeof useQSensorHistoricalValuesSuspenseQuery>;
export type QSensorHistoricalValuesQueryResult = ApolloReactCommon.QueryResult<TQSensorHistoricalValues, TQSensorHistoricalValuesVariables>;
export const QSensorHistoricalValuesByDateDocument = gql`
    query QSensorHistoricalValuesByDate($sensorId: Int!, $dateRangeType: DateRangeTypeEnum, $endDatetime: DateTime) {
  data: sensorValuesForDateRange(
    sensorId: $sensorId
    dateRangeType: $dateRangeType
    endDatetime: $endDatetime
  ) {
    values {
      startDate
      average: avgValue
    }
  }
}
    `;

/**
 * __useQSensorHistoricalValuesByDate__
 *
 * To run a query within a React component, call `useQSensorHistoricalValuesByDate` and pass it any options that fit your needs.
 * When your component renders, `useQSensorHistoricalValuesByDate` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQSensorHistoricalValuesByDate({
 *   variables: {
 *      sensorId: // value for 'sensorId'
 *      dateRangeType: // value for 'dateRangeType'
 *      endDatetime: // value for 'endDatetime'
 *   },
 * });
 */
export function useQSensorHistoricalValuesByDate(baseOptions: ApolloReactHooks.QueryHookOptions<TQSensorHistoricalValuesByDate, TQSensorHistoricalValuesByDateVariables> & ({ variables: TQSensorHistoricalValuesByDateVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQSensorHistoricalValuesByDate, TQSensorHistoricalValuesByDateVariables>(QSensorHistoricalValuesByDateDocument, options);
      }
export function useQSensorHistoricalValuesByDateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQSensorHistoricalValuesByDate, TQSensorHistoricalValuesByDateVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQSensorHistoricalValuesByDate, TQSensorHistoricalValuesByDateVariables>(QSensorHistoricalValuesByDateDocument, options);
        }
export function useQSensorHistoricalValuesByDateSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQSensorHistoricalValuesByDate, TQSensorHistoricalValuesByDateVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQSensorHistoricalValuesByDate, TQSensorHistoricalValuesByDateVariables>(QSensorHistoricalValuesByDateDocument, options);
        }
export type QSensorHistoricalValuesByDateHookResult = ReturnType<typeof useQSensorHistoricalValuesByDate>;
export type QSensorHistoricalValuesByDateLazyQueryHookResult = ReturnType<typeof useQSensorHistoricalValuesByDateLazyQuery>;
export type QSensorHistoricalValuesByDateSuspenseQueryHookResult = ReturnType<typeof useQSensorHistoricalValuesByDateSuspenseQuery>;
export type QSensorHistoricalValuesByDateQueryResult = ApolloReactCommon.QueryResult<TQSensorHistoricalValuesByDate, TQSensorHistoricalValuesByDateVariables>;
export const QSensorsDocument = gql`
    query QSensors {
  categories: allMainframes {
    id
    name
    sensors {
      ...FSensorBase
    }
  }
}
    ${FSensorBase}`;

/**
 * __useQSensors__
 *
 * To run a query within a React component, call `useQSensors` and pass it any options that fit your needs.
 * When your component renders, `useQSensors` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQSensors({
 *   variables: {
 *   },
 * });
 */
export function useQSensors(baseOptions?: ApolloReactHooks.QueryHookOptions<TQSensors, TQSensorsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQSensors, TQSensorsVariables>(QSensorsDocument, options);
      }
export function useQSensorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQSensors, TQSensorsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQSensors, TQSensorsVariables>(QSensorsDocument, options);
        }
export function useQSensorsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQSensors, TQSensorsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQSensors, TQSensorsVariables>(QSensorsDocument, options);
        }
export type QSensorsHookResult = ReturnType<typeof useQSensors>;
export type QSensorsLazyQueryHookResult = ReturnType<typeof useQSensorsLazyQuery>;
export type QSensorsSuspenseQueryHookResult = ReturnType<typeof useQSensorsSuspenseQuery>;
export type QSensorsQueryResult = ApolloReactCommon.QueryResult<TQSensors, TQSensorsVariables>;
export const SSensorValuesDocument = gql`
    subscription SSensorValues {
  sensorValueLogged {
    id
    sensor {
      id
    }
    value
  }
}
    `;

/**
 * __useSSensorValues__
 *
 * To run a query within a React component, call `useSSensorValues` and pass it any options that fit your needs.
 * When your component renders, `useSSensorValues` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSSensorValues({
 *   variables: {
 *   },
 * });
 */
export function useSSensorValues(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TSSensorValues, TSSensorValuesVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<TSSensorValues, TSSensorValuesVariables>(SSensorValuesDocument, options);
      }
export type SSensorValuesHookResult = ReturnType<typeof useSSensorValues>;
export type SSensorValuesSubscriptionResult = ApolloReactCommon.SubscriptionResult<TSSensorValues>;