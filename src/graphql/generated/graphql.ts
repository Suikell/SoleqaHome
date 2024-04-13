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
  readonly operator: TActuatorOperatorEnum;
  readonly operatorStr: Scalars['String']['output'];
  readonly thresholdGroup: TThresholdGroupType;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly value: Scalars['Boolean']['output'];
};

export type TActuatorNodeSubscriptionType = {
  readonly __typename?: 'ActuatorNodeSubscriptionType';
  readonly actuatorType: Maybe<TActuatorTypeEnum>;
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly currentState: Scalars['Boolean']['output'];
  readonly deviceId: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly id: Scalars['Int']['output'];
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly manualOverride: Scalars['Boolean']['output'];
  readonly manualOverrideUntil: Maybe<Scalars['DateTime']['output']>;
  readonly manualOverrideValue: Maybe<Scalars['Boolean']['output']>;
  readonly name: Scalars['String']['output'];
  readonly nodeType: Maybe<TNodeTypeEnum>;
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly type: Scalars['Int']['output'];
  readonly uid: Scalars['UUID']['output'];
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
  readonly manualOverrideValue: Maybe<Scalars['Boolean']['output']>;
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

export type TMarkAllAsRead = {
  readonly __typename?: 'MarkAllAsRead';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly unreadCount: Maybe<Scalars['Int']['output']>;
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
  readonly markAllAsRead: Maybe<TMarkAllAsRead>;
  readonly refreshToken: Maybe<TRefresh>;
  readonly removeActuatorCondition: Maybe<TRemoveActuatorConditionMutation>;
  readonly removeActuatorFromThresholdGroup: Maybe<TRemoveActuatorFromThresholdGroupMutation>;
  readonly removeSensorCondition: Maybe<TRemoveSensorConditionMutation>;
  readonly setActuatorChangeToStateThresholdGroup: Maybe<TSetActuatorChangeToStateThresholdGroupMutation>;
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


export type TMutationSetActuatorChangeToStateThresholdGroupArgs = {
  actuatorId: Scalars['Int']['input'];
  changeToState: Scalars['Boolean']['input'];
  thresholdGroupId: Scalars['Int']['input'];
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
  until?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['Boolean']['input']>;
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

export type TNotificationListType = {
  readonly __typename?: 'NotificationListType';
  readonly notifications: ReadonlyArray<Maybe<TNotificationType>>;
  readonly unreadCount: Scalars['Int']['output'];
};

export type TNotificationSeverityEnum =
  | 'CRITICAL'
  | 'INFO'
  | 'WARNING';

export type TNotificationType = {
  readonly __typename?: 'NotificationType';
  readonly body: Scalars['String']['output'];
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['Int']['output'];
  readonly read: Scalars['Boolean']['output'];
  readonly severity: Maybe<TNotificationSeverityEnum>;
  readonly title: Scalars['String']['output'];
  readonly type: Maybe<TNotificationTypeEnum>;
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TNotificationTypeEnum =
  | 'ACTUATOR_MANUAL_OVERRIDE_EXPIRED'
  | 'ACTUATOR_STATE_CHANGED'
  | 'GENERAL'
  | 'NODE_OFFLINE'
  | 'NODE_ONLINE'
  | 'SENSOR_CRITICAL'
  | 'SENSOR_NOT_CRITICAL';

export type TNotificationsUnreadCountType = {
  readonly __typename?: 'NotificationsUnreadCountType';
  readonly unreadCount: Scalars['Int']['output'];
};

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
  readonly getNotifications: Maybe<TNotificationListType>;
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
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
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
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
};

export type TSensorConditionType = {
  readonly __typename?: 'SensorConditionType';
  readonly active: Scalars['Boolean']['output'];
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['Int']['output'];
  readonly operator: TSensorOperatorEnum;
  readonly operatorStr: Scalars['String']['output'];
  readonly sensor: TSensorNodeType;
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
  readonly isCritical: Scalars['Boolean']['output'];
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly nodeType: Maybe<TNodeTypeEnum>;
  readonly sensorType: Scalars['Int']['output'];
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly type: Scalars['Int']['output'];
  readonly uid: Scalars['UUID']['output'];
  readonly unitType: Maybe<TUnitTypeEnum>;
  readonly unitTypeStr: Scalars['String']['output'];
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
  readonly isCritical: Scalars['Boolean']['output'];
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

export type TSensorValueType = {
  readonly __typename?: 'SensorValueType';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['Int']['output'];
  readonly sensor: TSensorNodeType;
  readonly value: Scalars['Float']['output'];
};

export type TSetActuatorChangeToStateThresholdGroupMutation = {
  readonly __typename?: 'SetActuatorChangeToStateThresholdGroupMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly thresholdGroupActuator: Maybe<TThresholdGroupActuatorType>;
};

export type TSetActuatorThresholdGroupPriorityMutation = {
  readonly __typename?: 'SetActuatorThresholdGroupPriorityMutation';
  readonly message: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly thresholdGroupActuator: Maybe<TThresholdGroupActuatorType>;
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
  readonly nodeValues: TSubscriptionType;
  readonly notificationUnreadCount: Scalars['Int']['output'];
};

export type TSubscriptionResultType =
  | 'ACTUATOR_MANUAL_OVERRIDE_EXPIRED'
  | 'ACTUATOR_ONLINE_STATUS_CHANGED'
  | 'ACTUATOR_STATE_CHANGED'
  | 'MAINFRAME_ONLINE_STATUS_CHANGED'
  | 'NOTIFICATIONS_UNREAD_COUNT'
  | 'SENSOR_IS_CRITICAL_CHANGED'
  | 'SENSOR_ONLINE_STATUS_CHANGED'
  | 'SENSOR_VALUE_LOGGED';

export type TSubscriptionType = {
  readonly __typename?: 'SubscriptionType';
  readonly data: TSubscriptionUnionType;
  readonly type: TSubscriptionResultType;
};

export type TSubscriptionUnionType = TActuatorNodeSubscriptionType | TNotificationsUnreadCountType | TSensorNodeSubscriptionType;

export type TThresholdGroupActuatorType = {
  readonly __typename?: 'ThresholdGroupActuatorType';
  readonly actuator: TActuatorNodeType;
  readonly changeToState: Scalars['Boolean']['output'];
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

export type TFActuatorBase = { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly isOnline: boolean, readonly favorite: boolean, readonly currentState: boolean | null, readonly manualOverride: boolean, readonly manualOverrideValue: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null };

export type TFActuatorCondition = { readonly __typename?: 'ActuatorConditionType', readonly value: boolean, readonly operator: TActuatorOperatorEnum, readonly id: number, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } };

export type TFActuatorConditionBase = { readonly __typename?: 'ActuatorConditionType', readonly id: number, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } };

export type TFCategoryBase = { readonly __typename?: 'MainframeType', readonly id: number, readonly name: string, readonly isOnline: boolean, readonly batteryLevel: number | null };

export type TFControlledActuator = { readonly __typename?: 'ThresholdGroupActuatorType', readonly priority: number, readonly changeToState: boolean, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } };

export type TFControlledActuatorBase = { readonly __typename?: 'ThresholdGroupActuatorType', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } };

export type TFGroup = { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string, readonly active: boolean, readonly controlledActuators: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupActuatorType', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }> };

export type TFGroupBase = { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string, readonly active: boolean };

export type TFSensorBase = { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly isCritical: boolean, readonly isOnline: boolean, readonly currentValue: number | null, readonly unitType: string | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly avgValue: number | null } | null> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null };

export type TFSensorCondition = { readonly __typename?: 'SensorConditionType', readonly operator: TSensorOperatorEnum, readonly value: number, readonly id: number, readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string } };

export type TFSensorConditionBase = { readonly __typename?: 'SensorConditionType', readonly id: number, readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string } };

export type TFTriggerGroup = { readonly __typename?: 'ThresholdGroupActuatorType', readonly priority: number, readonly changeToState: boolean, readonly group: { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string, readonly active: boolean, readonly actuatorConditions: ReadonlyArray<{ readonly __typename?: 'ActuatorConditionType', readonly id: number, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }>, readonly sensorConditions: ReadonlyArray<{ readonly __typename?: 'SensorConditionType', readonly id: number, readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string } }> } };

export type TFUser = { readonly __typename?: 'UserType', readonly id: number, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profileImage: string | null };

export type TMAddControlledActuatorVariables = Exact<{
  groupId: Scalars['Int']['input'];
  actuatorId: Scalars['Int']['input'];
}>;


export type TMAddControlledActuator = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'AddActuatorToThresholdGroupMutation', readonly success: boolean } | null };

export type TMAuthUserVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type TMAuthUser = { readonly __typename?: 'Mutation', readonly login: { readonly __typename?: 'ObtainJSONWebToken', readonly token: string, readonly user: { readonly __typename?: 'UserType', readonly id: number, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profileImage: string | null } | null } | null };

export type TMChangeGroupActuatorStateVariables = Exact<{
  groupId: Scalars['Int']['input'];
  actuatorId: Scalars['Int']['input'];
  changeToState: Scalars['Boolean']['input'];
}>;


export type TMChangeGroupActuatorState = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetActuatorChangeToStateThresholdGroupMutation', readonly actuator: { readonly __typename?: 'ThresholdGroupActuatorType', readonly priority: number, readonly changeToState: boolean, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } } | null } | null };

export type TMChangeUserPasswordVariables = Exact<{
  oldPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type TMChangeUserPassword = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'ChangeUserPasswordMutation', readonly success: boolean } | null };

export type TMChangeUserProfileVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
}>;


export type TMChangeUserProfile = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'ChangeUserProfileMutation', readonly user: { readonly __typename?: 'UserType', readonly id: number, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profileImage: string | null } | null } | null };

export type TMCreateActuatorConditionVariables = Exact<{
  actuatorId: Scalars['Int']['input'];
  groupId: Scalars['Int']['input'];
  operator: TActuatorOperatorEnum;
  state: Scalars['Boolean']['input'];
}>;


export type TMCreateActuatorCondition = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'AddActuatorConditionMutation', readonly success: boolean } | null };

export type TMCreateGroupVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type TMCreateGroup = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'CreateThresholdGroupMutation', readonly group: { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string } | null } | null };

export type TMCreateSensorConditionVariables = Exact<{
  sensorId: Scalars['Int']['input'];
  groupId: Scalars['Int']['input'];
  operator: TSensorOperatorEnum;
  value: Scalars['Float']['input'];
}>;


export type TMCreateSensorCondition = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'AddSensorConditionMutation', readonly success: boolean } | null };

export type TMDeleteGroupVariables = Exact<{
  groupId: Scalars['Int']['input'];
}>;


export type TMDeleteGroup = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'DeleteThresholdGroupMutation', readonly success: boolean } | null };

export type TMReadNotificationsVariables = Exact<{ [key: string]: never; }>;


export type TMReadNotifications = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'MarkAllAsRead', readonly success: boolean } | null };

export type TMRemoveActuatorConditionVariables = Exact<{
  actuatorConditionId: Scalars['Int']['input'];
}>;


export type TMRemoveActuatorCondition = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'RemoveActuatorConditionMutation', readonly group: { readonly __typename?: 'ThresholdGroupType', readonly actuatorConditions: ReadonlyArray<{ readonly __typename?: 'ActuatorConditionType', readonly value: boolean, readonly operator: TActuatorOperatorEnum, readonly id: number, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }> } | null } | null };

export type TMRemoveControlledActuatorVariables = Exact<{
  groupId: Scalars['Int']['input'];
  actuatorId: Scalars['Int']['input'];
}>;


export type TMRemoveControlledActuator = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'RemoveActuatorFromThresholdGroupMutation', readonly group: { readonly __typename?: 'ThresholdGroupType', readonly controlledActuators: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupActuatorType', readonly priority: number, readonly changeToState: boolean, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }> } | null } | null };

export type TMRemoveSensorConditionVariables = Exact<{
  sensorConditionId: Scalars['Int']['input'];
}>;


export type TMRemoveSensorCondition = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'RemoveSensorConditionMutation', readonly group: { readonly __typename?: 'ThresholdGroupType', readonly sensorConditions: ReadonlyArray<{ readonly __typename?: 'SensorConditionType', readonly operator: TSensorOperatorEnum, readonly value: number, readonly id: number, readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string } }> } | null } | null };

export type TMSetActuatorNameVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type TMSetActuatorName = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'ChangeActuatorNameMutation', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } | null } | null };

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


export type TMSetFavoriteActuator = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetFavoriteActuatorMutation', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly isOnline: boolean, readonly favorite: boolean, readonly currentState: boolean | null, readonly manualOverride: boolean, readonly manualOverrideValue: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null } | null } | null };

export type TMSetFavoriteSensorVariables = Exact<{
  sensorId: Scalars['Int']['input'];
  favorite: Scalars['Boolean']['input'];
}>;


export type TMSetFavoriteSensor = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetFavoriteSensorMutation', readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly isCritical: boolean, readonly isOnline: boolean, readonly currentValue: number | null, readonly unitType: string | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly avgValue: number | null } | null> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null } | null } | null };

export type TMSetGroupActiveVariables = Exact<{
  groupId: Scalars['Int']['input'];
  active: Scalars['Boolean']['input'];
}>;


export type TMSetGroupActive = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'ChangeThresholdGroupActiveMutation', readonly group: { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string, readonly active: boolean, readonly controlledActuators: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupActuatorType', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }> } | null } | null };

export type TMSetGroupActuatorPriorityVariables = Exact<{
  actuatorId: Scalars['Int']['input'];
  priority: Scalars['Int']['input'];
  groupId: Scalars['Int']['input'];
}>;


export type TMSetGroupActuatorPriority = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetActuatorThresholdGroupPriorityMutation', readonly success: boolean } | null };

export type TMSetGroupNameVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type TMSetGroupName = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'ChangeThresholdGroupNameMutation', readonly group: { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string } | null } | null };

export type TMSetManualOverrideVariables = Exact<{
  actuatorId: Scalars['Int']['input'];
  until?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type TMSetManualOverride = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetManualOverrideUntilMutation', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly isOnline: boolean, readonly favorite: boolean, readonly currentState: boolean | null, readonly manualOverride: boolean, readonly manualOverrideValue: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null } | null } | null };

export type TMSetSensorNameVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type TMSetSensorName = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'ChangeSensorNameMutation', readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string } | null } | null };

export type TQActuatorDetailVariables = Exact<{
  actuatorId: Scalars['Int']['input'];
}>;


export type TQActuatorDetail = { readonly __typename?: 'Query', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly currentState: boolean | null, readonly batteryLevel: number | null, readonly isOnline: boolean, readonly manualOverride: boolean, readonly manualOverrideValue: boolean | null, readonly groups: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupActuatorType', readonly priority: number, readonly changeToState: boolean, readonly group: { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string, readonly active: boolean, readonly actuatorConditions: ReadonlyArray<{ readonly __typename?: 'ActuatorConditionType', readonly id: number, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }>, readonly sensorConditions: ReadonlyArray<{ readonly __typename?: 'SensorConditionType', readonly id: number, readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string } }> } }> } | null };

export type TQCategoriesVariables = Exact<{ [key: string]: never; }>;


export type TQCategories = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'MainframeType', readonly id: number, readonly name: string, readonly isOnline: boolean, readonly batteryLevel: number | null, readonly sensors: ReadonlyArray<{ readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly isCritical: boolean, readonly isOnline: boolean, readonly currentValue: number | null, readonly unitType: string | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly avgValue: number | null } | null> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null }> | null, readonly actuators: ReadonlyArray<{ readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string, readonly isOnline: boolean, readonly favorite: boolean, readonly currentState: boolean | null, readonly manualOverride: boolean, readonly manualOverrideValue: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null }> | null }> | null };

export type TQCriticalSensorsVariables = Exact<{ [key: string]: never; }>;


export type TQCriticalSensors = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'MainframeType', readonly sensors: ReadonlyArray<{ readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string, readonly favorite: boolean, readonly isCritical: boolean, readonly isOnline: boolean, readonly currentValue: number | null, readonly unitType: string | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorDateRangeValuesType', readonly avgValue: number | null } | null> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number } | null }> | null }> | null };

export type TQGroupDetailVariables = Exact<{
  groupId: Scalars['Int']['input'];
}>;


export type TQGroupDetail = { readonly __typename?: 'Query', readonly group: { readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string, readonly active: boolean, readonly controlledActuators: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupActuatorType', readonly priority: number, readonly changeToState: boolean, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }>, readonly sensorConditions: ReadonlyArray<{ readonly __typename?: 'SensorConditionType', readonly operator: TSensorOperatorEnum, readonly value: number, readonly id: number, readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number, readonly name: string } }>, readonly actuatorConditions: ReadonlyArray<{ readonly __typename?: 'ActuatorConditionType', readonly value: boolean, readonly operator: TActuatorOperatorEnum, readonly id: number, readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }> } | null };

export type TQGroupsVariables = Exact<{ [key: string]: never; }>;


export type TQGroups = { readonly __typename?: 'Query', readonly groups: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupType', readonly id: number, readonly name: string, readonly active: boolean, readonly controlledActuators: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupActuatorType', readonly actuator: { readonly __typename?: 'ActuatorNodeType', readonly id: number, readonly name: string } }> }> | null };

export type TQNotificationsVariables = Exact<{ [key: string]: never; }>;


export type TQNotifications = { readonly __typename?: 'Query', readonly result: { readonly __typename?: 'NotificationListType', readonly unreadCount: number, readonly notifications: ReadonlyArray<{ readonly __typename?: 'NotificationType', readonly id: number, readonly read: boolean, readonly createdAt: any, readonly title: string, readonly body: string } | null> } | null };

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

export type TSValuesVariables = Exact<{ [key: string]: never; }>;


export type TSValues = { readonly __typename?: 'Subscription', readonly change: { readonly __typename?: 'SubscriptionType', readonly type: TSubscriptionResultType, readonly data: { readonly __typename?: 'ActuatorNodeSubscriptionType', readonly id: number, readonly currentState: boolean, readonly isOnline: boolean } | { readonly __typename?: 'NotificationsUnreadCountType', readonly unreadCount: number } | { readonly __typename?: 'SensorNodeSubscriptionType', readonly id: number, readonly currentValue: number | null } } };

export const FActuatorBase = gql`
    fragment FActuatorBase on ActuatorNodeType {
  id
  name
  isOnline
  favorite
  currentState
  manualOverride
  manualOverrideValue
  category: mainframe {
    id
  }
}
    `;
export const FActuatorConditionBase = gql`
    fragment FActuatorConditionBase on ActuatorConditionType {
  id
  actuator {
    id
    name
  }
}
    `;
export const FActuatorCondition = gql`
    fragment FActuatorCondition on ActuatorConditionType {
  ...FActuatorConditionBase
  value
  operator
}
    ${FActuatorConditionBase}`;
export const FCategoryBase = gql`
    fragment FCategoryBase on MainframeType {
  id
  name
  isOnline
  batteryLevel
}
    `;
export const FControlledActuator = gql`
    fragment FControlledActuator on ThresholdGroupActuatorType {
  priority
  changeToState
  actuator {
    id
    name
  }
}
    `;
export const FGroupBase = gql`
    fragment FGroupBase on ThresholdGroupType {
  id
  name
  active
}
    `;
export const FControlledActuatorBase = gql`
    fragment FControlledActuatorBase on ThresholdGroupActuatorType {
  actuator {
    id
    name
  }
}
    `;
export const FGroup = gql`
    fragment FGroup on ThresholdGroupType {
  ...FGroupBase
  controlledActuators: thresholdGroupActuators {
    ...FControlledActuatorBase
  }
}
    ${FGroupBase}
${FControlledActuatorBase}`;
export const FSensorBase = gql`
    fragment FSensorBase on SensorNodeType {
  id
  name
  favorite
  isCritical
  isOnline
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
export const FSensorConditionBase = gql`
    fragment FSensorConditionBase on SensorConditionType {
  id
  sensor {
    id
    name
  }
}
    `;
export const FSensorCondition = gql`
    fragment FSensorCondition on SensorConditionType {
  ...FSensorConditionBase
  operator
  value
}
    ${FSensorConditionBase}`;
export const FTriggerGroup = gql`
    fragment FTriggerGroup on ThresholdGroupActuatorType {
  group: thresholdGroup {
    ...FGroupBase
    actuatorConditions {
      ...FActuatorConditionBase
    }
    sensorConditions {
      ...FSensorConditionBase
    }
  }
  priority
  changeToState
}
    ${FGroupBase}
${FActuatorConditionBase}
${FSensorConditionBase}`;
export const FUser = gql`
    fragment FUser on UserType {
  id
  email
  firstName
  lastName
  profileImage
}
    `;
export const MAddControlledActuatorDocument = gql`
    mutation MAddControlledActuator($groupId: Int!, $actuatorId: Int!) {
  result: addActuatorToThresholdGroup(
    thresholdGroupId: $groupId
    actuatorId: $actuatorId
  ) {
    success
  }
}
    `;
export type TMAddControlledActuatorMutationFn = ApolloReactCommon.MutationFunction<TMAddControlledActuator, TMAddControlledActuatorVariables>;

/**
 * __useMAddControlledActuator__
 *
 * To run a mutation, you first call `useMAddControlledActuator` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMAddControlledActuator` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mAddControlledActuator, { data, loading, error }] = useMAddControlledActuator({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      actuatorId: // value for 'actuatorId'
 *   },
 * });
 */
export function useMAddControlledActuator(baseOptions?: ApolloReactHooks.MutationHookOptions<TMAddControlledActuator, TMAddControlledActuatorVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMAddControlledActuator, TMAddControlledActuatorVariables>(MAddControlledActuatorDocument, options);
      }
export type MAddControlledActuatorHookResult = ReturnType<typeof useMAddControlledActuator>;
export type MAddControlledActuatorMutationResult = ApolloReactCommon.MutationResult<TMAddControlledActuator>;
export type MAddControlledActuatorMutationOptions = ApolloReactCommon.BaseMutationOptions<TMAddControlledActuator, TMAddControlledActuatorVariables>;
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
export const MChangeGroupActuatorStateDocument = gql`
    mutation MChangeGroupActuatorState($groupId: Int!, $actuatorId: Int!, $changeToState: Boolean!) {
  result: setActuatorChangeToStateThresholdGroup(
    thresholdGroupId: $groupId
    actuatorId: $actuatorId
    changeToState: $changeToState
  ) {
    actuator: thresholdGroupActuator {
      ...FControlledActuator
    }
  }
}
    ${FControlledActuator}`;
export type TMChangeGroupActuatorStateMutationFn = ApolloReactCommon.MutationFunction<TMChangeGroupActuatorState, TMChangeGroupActuatorStateVariables>;

/**
 * __useMChangeGroupActuatorState__
 *
 * To run a mutation, you first call `useMChangeGroupActuatorState` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMChangeGroupActuatorState` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mChangeGroupActuatorState, { data, loading, error }] = useMChangeGroupActuatorState({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      actuatorId: // value for 'actuatorId'
 *      changeToState: // value for 'changeToState'
 *   },
 * });
 */
export function useMChangeGroupActuatorState(baseOptions?: ApolloReactHooks.MutationHookOptions<TMChangeGroupActuatorState, TMChangeGroupActuatorStateVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMChangeGroupActuatorState, TMChangeGroupActuatorStateVariables>(MChangeGroupActuatorStateDocument, options);
      }
export type MChangeGroupActuatorStateHookResult = ReturnType<typeof useMChangeGroupActuatorState>;
export type MChangeGroupActuatorStateMutationResult = ApolloReactCommon.MutationResult<TMChangeGroupActuatorState>;
export type MChangeGroupActuatorStateMutationOptions = ApolloReactCommon.BaseMutationOptions<TMChangeGroupActuatorState, TMChangeGroupActuatorStateVariables>;
export const MChangeUserPasswordDocument = gql`
    mutation MChangeUserPassword($oldPassword: String!, $newPassword: String!) {
  result: changeUserPassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    success
  }
}
    `;
export type TMChangeUserPasswordMutationFn = ApolloReactCommon.MutationFunction<TMChangeUserPassword, TMChangeUserPasswordVariables>;

/**
 * __useMChangeUserPassword__
 *
 * To run a mutation, you first call `useMChangeUserPassword` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMChangeUserPassword` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mChangeUserPassword, { data, loading, error }] = useMChangeUserPassword({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useMChangeUserPassword(baseOptions?: ApolloReactHooks.MutationHookOptions<TMChangeUserPassword, TMChangeUserPasswordVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMChangeUserPassword, TMChangeUserPasswordVariables>(MChangeUserPasswordDocument, options);
      }
export type MChangeUserPasswordHookResult = ReturnType<typeof useMChangeUserPassword>;
export type MChangeUserPasswordMutationResult = ApolloReactCommon.MutationResult<TMChangeUserPassword>;
export type MChangeUserPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<TMChangeUserPassword, TMChangeUserPasswordVariables>;
export const MChangeUserProfileDocument = gql`
    mutation MChangeUserProfile($firstName: String!, $lastName: String!) {
  result: changeUserProfile(firstName: $firstName, lastName: $lastName) {
    user {
      ...FUser
    }
  }
}
    ${FUser}`;
export type TMChangeUserProfileMutationFn = ApolloReactCommon.MutationFunction<TMChangeUserProfile, TMChangeUserProfileVariables>;

/**
 * __useMChangeUserProfile__
 *
 * To run a mutation, you first call `useMChangeUserProfile` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMChangeUserProfile` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mChangeUserProfile, { data, loading, error }] = useMChangeUserProfile({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useMChangeUserProfile(baseOptions?: ApolloReactHooks.MutationHookOptions<TMChangeUserProfile, TMChangeUserProfileVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMChangeUserProfile, TMChangeUserProfileVariables>(MChangeUserProfileDocument, options);
      }
export type MChangeUserProfileHookResult = ReturnType<typeof useMChangeUserProfile>;
export type MChangeUserProfileMutationResult = ApolloReactCommon.MutationResult<TMChangeUserProfile>;
export type MChangeUserProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<TMChangeUserProfile, TMChangeUserProfileVariables>;
export const MCreateActuatorConditionDocument = gql`
    mutation MCreateActuatorCondition($actuatorId: Int!, $groupId: Int!, $operator: ActuatorOperatorEnum!, $state: Boolean!) {
  result: addActuatorCondition(
    operator: $operator
    actuatorId: $actuatorId
    thresholdGroupId: $groupId
    value: $state
  ) {
    success
  }
}
    `;
export type TMCreateActuatorConditionMutationFn = ApolloReactCommon.MutationFunction<TMCreateActuatorCondition, TMCreateActuatorConditionVariables>;

/**
 * __useMCreateActuatorCondition__
 *
 * To run a mutation, you first call `useMCreateActuatorCondition` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMCreateActuatorCondition` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mCreateActuatorCondition, { data, loading, error }] = useMCreateActuatorCondition({
 *   variables: {
 *      actuatorId: // value for 'actuatorId'
 *      groupId: // value for 'groupId'
 *      operator: // value for 'operator'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useMCreateActuatorCondition(baseOptions?: ApolloReactHooks.MutationHookOptions<TMCreateActuatorCondition, TMCreateActuatorConditionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMCreateActuatorCondition, TMCreateActuatorConditionVariables>(MCreateActuatorConditionDocument, options);
      }
export type MCreateActuatorConditionHookResult = ReturnType<typeof useMCreateActuatorCondition>;
export type MCreateActuatorConditionMutationResult = ApolloReactCommon.MutationResult<TMCreateActuatorCondition>;
export type MCreateActuatorConditionMutationOptions = ApolloReactCommon.BaseMutationOptions<TMCreateActuatorCondition, TMCreateActuatorConditionVariables>;
export const MCreateGroupDocument = gql`
    mutation MCreateGroup($name: String!) {
  result: createThresholdGroup(householdId: 1, name: $name) {
    group: thresholdGroup {
      id
      name
    }
  }
}
    `;
export type TMCreateGroupMutationFn = ApolloReactCommon.MutationFunction<TMCreateGroup, TMCreateGroupVariables>;

/**
 * __useMCreateGroup__
 *
 * To run a mutation, you first call `useMCreateGroup` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMCreateGroup` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mCreateGroup, { data, loading, error }] = useMCreateGroup({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useMCreateGroup(baseOptions?: ApolloReactHooks.MutationHookOptions<TMCreateGroup, TMCreateGroupVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMCreateGroup, TMCreateGroupVariables>(MCreateGroupDocument, options);
      }
export type MCreateGroupHookResult = ReturnType<typeof useMCreateGroup>;
export type MCreateGroupMutationResult = ApolloReactCommon.MutationResult<TMCreateGroup>;
export type MCreateGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<TMCreateGroup, TMCreateGroupVariables>;
export const MCreateSensorConditionDocument = gql`
    mutation MCreateSensorCondition($sensorId: Int!, $groupId: Int!, $operator: SensorOperatorEnum!, $value: Float!) {
  result: addSensorCondition(
    sensorId: $sensorId
    thresholdGroupId: $groupId
    operator: $operator
    value: $value
  ) {
    success
  }
}
    `;
export type TMCreateSensorConditionMutationFn = ApolloReactCommon.MutationFunction<TMCreateSensorCondition, TMCreateSensorConditionVariables>;

/**
 * __useMCreateSensorCondition__
 *
 * To run a mutation, you first call `useMCreateSensorCondition` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMCreateSensorCondition` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mCreateSensorCondition, { data, loading, error }] = useMCreateSensorCondition({
 *   variables: {
 *      sensorId: // value for 'sensorId'
 *      groupId: // value for 'groupId'
 *      operator: // value for 'operator'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useMCreateSensorCondition(baseOptions?: ApolloReactHooks.MutationHookOptions<TMCreateSensorCondition, TMCreateSensorConditionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMCreateSensorCondition, TMCreateSensorConditionVariables>(MCreateSensorConditionDocument, options);
      }
export type MCreateSensorConditionHookResult = ReturnType<typeof useMCreateSensorCondition>;
export type MCreateSensorConditionMutationResult = ApolloReactCommon.MutationResult<TMCreateSensorCondition>;
export type MCreateSensorConditionMutationOptions = ApolloReactCommon.BaseMutationOptions<TMCreateSensorCondition, TMCreateSensorConditionVariables>;
export const MDeleteGroupDocument = gql`
    mutation MDeleteGroup($groupId: Int!) {
  result: deleteThresholdGroup(thresholdGroupId: $groupId) {
    success
  }
}
    `;
export type TMDeleteGroupMutationFn = ApolloReactCommon.MutationFunction<TMDeleteGroup, TMDeleteGroupVariables>;

/**
 * __useMDeleteGroup__
 *
 * To run a mutation, you first call `useMDeleteGroup` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMDeleteGroup` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mDeleteGroup, { data, loading, error }] = useMDeleteGroup({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useMDeleteGroup(baseOptions?: ApolloReactHooks.MutationHookOptions<TMDeleteGroup, TMDeleteGroupVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMDeleteGroup, TMDeleteGroupVariables>(MDeleteGroupDocument, options);
      }
export type MDeleteGroupHookResult = ReturnType<typeof useMDeleteGroup>;
export type MDeleteGroupMutationResult = ApolloReactCommon.MutationResult<TMDeleteGroup>;
export type MDeleteGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<TMDeleteGroup, TMDeleteGroupVariables>;
export const MReadNotificationsDocument = gql`
    mutation MReadNotifications {
  result: markAllAsRead {
    success
  }
}
    `;
export type TMReadNotificationsMutationFn = ApolloReactCommon.MutationFunction<TMReadNotifications, TMReadNotificationsVariables>;

/**
 * __useMReadNotifications__
 *
 * To run a mutation, you first call `useMReadNotifications` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMReadNotifications` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mReadNotifications, { data, loading, error }] = useMReadNotifications({
 *   variables: {
 *   },
 * });
 */
export function useMReadNotifications(baseOptions?: ApolloReactHooks.MutationHookOptions<TMReadNotifications, TMReadNotificationsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMReadNotifications, TMReadNotificationsVariables>(MReadNotificationsDocument, options);
      }
export type MReadNotificationsHookResult = ReturnType<typeof useMReadNotifications>;
export type MReadNotificationsMutationResult = ApolloReactCommon.MutationResult<TMReadNotifications>;
export type MReadNotificationsMutationOptions = ApolloReactCommon.BaseMutationOptions<TMReadNotifications, TMReadNotificationsVariables>;
export const MRemoveActuatorConditionDocument = gql`
    mutation MRemoveActuatorCondition($actuatorConditionId: Int!) {
  result: removeActuatorCondition(actuatorConditionId: $actuatorConditionId) {
    group: thresholdGroup {
      actuatorConditions {
        ...FActuatorCondition
      }
    }
  }
}
    ${FActuatorCondition}`;
export type TMRemoveActuatorConditionMutationFn = ApolloReactCommon.MutationFunction<TMRemoveActuatorCondition, TMRemoveActuatorConditionVariables>;

/**
 * __useMRemoveActuatorCondition__
 *
 * To run a mutation, you first call `useMRemoveActuatorCondition` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMRemoveActuatorCondition` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mRemoveActuatorCondition, { data, loading, error }] = useMRemoveActuatorCondition({
 *   variables: {
 *      actuatorConditionId: // value for 'actuatorConditionId'
 *   },
 * });
 */
export function useMRemoveActuatorCondition(baseOptions?: ApolloReactHooks.MutationHookOptions<TMRemoveActuatorCondition, TMRemoveActuatorConditionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMRemoveActuatorCondition, TMRemoveActuatorConditionVariables>(MRemoveActuatorConditionDocument, options);
      }
export type MRemoveActuatorConditionHookResult = ReturnType<typeof useMRemoveActuatorCondition>;
export type MRemoveActuatorConditionMutationResult = ApolloReactCommon.MutationResult<TMRemoveActuatorCondition>;
export type MRemoveActuatorConditionMutationOptions = ApolloReactCommon.BaseMutationOptions<TMRemoveActuatorCondition, TMRemoveActuatorConditionVariables>;
export const MRemoveControlledActuatorDocument = gql`
    mutation MRemoveControlledActuator($groupId: Int!, $actuatorId: Int!) {
  result: removeActuatorFromThresholdGroup(
    thresholdGroupId: $groupId
    actuatorId: $actuatorId
  ) {
    group: thresholdGroup {
      controlledActuators: thresholdGroupActuators {
        ...FControlledActuator
      }
    }
  }
}
    ${FControlledActuator}`;
export type TMRemoveControlledActuatorMutationFn = ApolloReactCommon.MutationFunction<TMRemoveControlledActuator, TMRemoveControlledActuatorVariables>;

/**
 * __useMRemoveControlledActuator__
 *
 * To run a mutation, you first call `useMRemoveControlledActuator` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMRemoveControlledActuator` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mRemoveControlledActuator, { data, loading, error }] = useMRemoveControlledActuator({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      actuatorId: // value for 'actuatorId'
 *   },
 * });
 */
export function useMRemoveControlledActuator(baseOptions?: ApolloReactHooks.MutationHookOptions<TMRemoveControlledActuator, TMRemoveControlledActuatorVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMRemoveControlledActuator, TMRemoveControlledActuatorVariables>(MRemoveControlledActuatorDocument, options);
      }
export type MRemoveControlledActuatorHookResult = ReturnType<typeof useMRemoveControlledActuator>;
export type MRemoveControlledActuatorMutationResult = ApolloReactCommon.MutationResult<TMRemoveControlledActuator>;
export type MRemoveControlledActuatorMutationOptions = ApolloReactCommon.BaseMutationOptions<TMRemoveControlledActuator, TMRemoveControlledActuatorVariables>;
export const MRemoveSensorConditionDocument = gql`
    mutation MRemoveSensorCondition($sensorConditionId: Int!) {
  result: removeSensorCondition(sensorConditionId: $sensorConditionId) {
    group: thresholdGroup {
      sensorConditions {
        ...FSensorCondition
      }
    }
  }
}
    ${FSensorCondition}`;
export type TMRemoveSensorConditionMutationFn = ApolloReactCommon.MutationFunction<TMRemoveSensorCondition, TMRemoveSensorConditionVariables>;

/**
 * __useMRemoveSensorCondition__
 *
 * To run a mutation, you first call `useMRemoveSensorCondition` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMRemoveSensorCondition` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mRemoveSensorCondition, { data, loading, error }] = useMRemoveSensorCondition({
 *   variables: {
 *      sensorConditionId: // value for 'sensorConditionId'
 *   },
 * });
 */
export function useMRemoveSensorCondition(baseOptions?: ApolloReactHooks.MutationHookOptions<TMRemoveSensorCondition, TMRemoveSensorConditionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMRemoveSensorCondition, TMRemoveSensorConditionVariables>(MRemoveSensorConditionDocument, options);
      }
export type MRemoveSensorConditionHookResult = ReturnType<typeof useMRemoveSensorCondition>;
export type MRemoveSensorConditionMutationResult = ApolloReactCommon.MutationResult<TMRemoveSensorCondition>;
export type MRemoveSensorConditionMutationOptions = ApolloReactCommon.BaseMutationOptions<TMRemoveSensorCondition, TMRemoveSensorConditionVariables>;
export const MSetActuatorNameDocument = gql`
    mutation MSetActuatorName($id: Int!, $name: String!) {
  result: changeActuatorName(actuatorId: $id, name: $name) {
    actuator {
      id
      name
    }
  }
}
    `;
export type TMSetActuatorNameMutationFn = ApolloReactCommon.MutationFunction<TMSetActuatorName, TMSetActuatorNameVariables>;

/**
 * __useMSetActuatorName__
 *
 * To run a mutation, you first call `useMSetActuatorName` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetActuatorName` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetActuatorName, { data, loading, error }] = useMSetActuatorName({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useMSetActuatorName(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetActuatorName, TMSetActuatorNameVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetActuatorName, TMSetActuatorNameVariables>(MSetActuatorNameDocument, options);
      }
export type MSetActuatorNameHookResult = ReturnType<typeof useMSetActuatorName>;
export type MSetActuatorNameMutationResult = ApolloReactCommon.MutationResult<TMSetActuatorName>;
export type MSetActuatorNameMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetActuatorName, TMSetActuatorNameVariables>;
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
export const MSetGroupActiveDocument = gql`
    mutation MSetGroupActive($groupId: Int!, $active: Boolean!) {
  result: changeThresholdGroupActive(thresholdGroupId: $groupId, active: $active) {
    group: thresholdGroup {
      ...FGroup
    }
  }
}
    ${FGroup}`;
export type TMSetGroupActiveMutationFn = ApolloReactCommon.MutationFunction<TMSetGroupActive, TMSetGroupActiveVariables>;

/**
 * __useMSetGroupActive__
 *
 * To run a mutation, you first call `useMSetGroupActive` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetGroupActive` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetGroupActive, { data, loading, error }] = useMSetGroupActive({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useMSetGroupActive(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetGroupActive, TMSetGroupActiveVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetGroupActive, TMSetGroupActiveVariables>(MSetGroupActiveDocument, options);
      }
export type MSetGroupActiveHookResult = ReturnType<typeof useMSetGroupActive>;
export type MSetGroupActiveMutationResult = ApolloReactCommon.MutationResult<TMSetGroupActive>;
export type MSetGroupActiveMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetGroupActive, TMSetGroupActiveVariables>;
export const MSetGroupActuatorPriorityDocument = gql`
    mutation MSetGroupActuatorPriority($actuatorId: Int!, $priority: Int!, $groupId: Int!) {
  result: setActuatorThresholdGroupPriority(
    actuatorId: $actuatorId
    priority: $priority
    thresholdGroupId: $groupId
  ) {
    success
  }
}
    `;
export type TMSetGroupActuatorPriorityMutationFn = ApolloReactCommon.MutationFunction<TMSetGroupActuatorPriority, TMSetGroupActuatorPriorityVariables>;

/**
 * __useMSetGroupActuatorPriority__
 *
 * To run a mutation, you first call `useMSetGroupActuatorPriority` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetGroupActuatorPriority` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetGroupActuatorPriority, { data, loading, error }] = useMSetGroupActuatorPriority({
 *   variables: {
 *      actuatorId: // value for 'actuatorId'
 *      priority: // value for 'priority'
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useMSetGroupActuatorPriority(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetGroupActuatorPriority, TMSetGroupActuatorPriorityVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetGroupActuatorPriority, TMSetGroupActuatorPriorityVariables>(MSetGroupActuatorPriorityDocument, options);
      }
export type MSetGroupActuatorPriorityHookResult = ReturnType<typeof useMSetGroupActuatorPriority>;
export type MSetGroupActuatorPriorityMutationResult = ApolloReactCommon.MutationResult<TMSetGroupActuatorPriority>;
export type MSetGroupActuatorPriorityMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetGroupActuatorPriority, TMSetGroupActuatorPriorityVariables>;
export const MSetGroupNameDocument = gql`
    mutation MSetGroupName($id: Int!, $name: String!) {
  result: changeThresholdGroupName(thresholdGroupId: $id, name: $name) {
    group: thresholdGroup {
      id
      name
    }
  }
}
    `;
export type TMSetGroupNameMutationFn = ApolloReactCommon.MutationFunction<TMSetGroupName, TMSetGroupNameVariables>;

/**
 * __useMSetGroupName__
 *
 * To run a mutation, you first call `useMSetGroupName` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetGroupName` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetGroupName, { data, loading, error }] = useMSetGroupName({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useMSetGroupName(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetGroupName, TMSetGroupNameVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetGroupName, TMSetGroupNameVariables>(MSetGroupNameDocument, options);
      }
export type MSetGroupNameHookResult = ReturnType<typeof useMSetGroupName>;
export type MSetGroupNameMutationResult = ApolloReactCommon.MutationResult<TMSetGroupName>;
export type MSetGroupNameMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetGroupName, TMSetGroupNameVariables>;
export const MSetManualOverrideDocument = gql`
    mutation MSetManualOverride($actuatorId: Int!, $until: DateTime, $value: Boolean) {
  result: setManualOverrideUntil(
    actuatorId: $actuatorId
    until: $until
    value: $value
  ) {
    actuator {
      ...FActuatorBase
    }
  }
}
    ${FActuatorBase}`;
export type TMSetManualOverrideMutationFn = ApolloReactCommon.MutationFunction<TMSetManualOverride, TMSetManualOverrideVariables>;

/**
 * __useMSetManualOverride__
 *
 * To run a mutation, you first call `useMSetManualOverride` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetManualOverride` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetManualOverride, { data, loading, error }] = useMSetManualOverride({
 *   variables: {
 *      actuatorId: // value for 'actuatorId'
 *      until: // value for 'until'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useMSetManualOverride(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetManualOverride, TMSetManualOverrideVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetManualOverride, TMSetManualOverrideVariables>(MSetManualOverrideDocument, options);
      }
export type MSetManualOverrideHookResult = ReturnType<typeof useMSetManualOverride>;
export type MSetManualOverrideMutationResult = ApolloReactCommon.MutationResult<TMSetManualOverride>;
export type MSetManualOverrideMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetManualOverride, TMSetManualOverrideVariables>;
export const MSetSensorNameDocument = gql`
    mutation MSetSensorName($id: Int!, $name: String!) {
  result: changeSensorName(sensorId: $id, name: $name) {
    sensor {
      id
      name
    }
  }
}
    `;
export type TMSetSensorNameMutationFn = ApolloReactCommon.MutationFunction<TMSetSensorName, TMSetSensorNameVariables>;

/**
 * __useMSetSensorName__
 *
 * To run a mutation, you first call `useMSetSensorName` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMSetSensorName` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mSetSensorName, { data, loading, error }] = useMSetSensorName({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useMSetSensorName(baseOptions?: ApolloReactHooks.MutationHookOptions<TMSetSensorName, TMSetSensorNameVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TMSetSensorName, TMSetSensorNameVariables>(MSetSensorNameDocument, options);
      }
export type MSetSensorNameHookResult = ReturnType<typeof useMSetSensorName>;
export type MSetSensorNameMutationResult = ApolloReactCommon.MutationResult<TMSetSensorName>;
export type MSetSensorNameMutationOptions = ApolloReactCommon.BaseMutationOptions<TMSetSensorName, TMSetSensorNameVariables>;
export const QActuatorDetailDocument = gql`
    query QActuatorDetail($actuatorId: Int!) {
  actuator: actuatorNode(id: $actuatorId) {
    id
    name
    currentState
    batteryLevel
    isOnline
    manualOverride
    manualOverrideValue
    groups: thresholdGroupActuators {
      ...FTriggerGroup
    }
  }
}
    ${FTriggerGroup}`;

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
export const QCriticalSensorsDocument = gql`
    query QCriticalSensors {
  categories: allMainframes {
    sensors(critical: true) {
      ...FSensorBase
    }
  }
}
    ${FSensorBase}`;

/**
 * __useQCriticalSensors__
 *
 * To run a query within a React component, call `useQCriticalSensors` and pass it any options that fit your needs.
 * When your component renders, `useQCriticalSensors` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQCriticalSensors({
 *   variables: {
 *   },
 * });
 */
export function useQCriticalSensors(baseOptions?: ApolloReactHooks.QueryHookOptions<TQCriticalSensors, TQCriticalSensorsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQCriticalSensors, TQCriticalSensorsVariables>(QCriticalSensorsDocument, options);
      }
export function useQCriticalSensorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQCriticalSensors, TQCriticalSensorsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQCriticalSensors, TQCriticalSensorsVariables>(QCriticalSensorsDocument, options);
        }
export function useQCriticalSensorsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQCriticalSensors, TQCriticalSensorsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQCriticalSensors, TQCriticalSensorsVariables>(QCriticalSensorsDocument, options);
        }
export type QCriticalSensorsHookResult = ReturnType<typeof useQCriticalSensors>;
export type QCriticalSensorsLazyQueryHookResult = ReturnType<typeof useQCriticalSensorsLazyQuery>;
export type QCriticalSensorsSuspenseQueryHookResult = ReturnType<typeof useQCriticalSensorsSuspenseQuery>;
export type QCriticalSensorsQueryResult = ApolloReactCommon.QueryResult<TQCriticalSensors, TQCriticalSensorsVariables>;
export const QGroupDetailDocument = gql`
    query QGroupDetail($groupId: Int!) {
  group: thresholdGroup(id: $groupId) {
    ...FGroupBase
    controlledActuators: thresholdGroupActuators {
      ...FControlledActuator
    }
    sensorConditions {
      ...FSensorCondition
    }
    actuatorConditions {
      ...FActuatorCondition
    }
  }
}
    ${FGroupBase}
${FControlledActuator}
${FSensorCondition}
${FActuatorCondition}`;

/**
 * __useQGroupDetail__
 *
 * To run a query within a React component, call `useQGroupDetail` and pass it any options that fit your needs.
 * When your component renders, `useQGroupDetail` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQGroupDetail({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useQGroupDetail(baseOptions: ApolloReactHooks.QueryHookOptions<TQGroupDetail, TQGroupDetailVariables> & ({ variables: TQGroupDetailVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQGroupDetail, TQGroupDetailVariables>(QGroupDetailDocument, options);
      }
export function useQGroupDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQGroupDetail, TQGroupDetailVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQGroupDetail, TQGroupDetailVariables>(QGroupDetailDocument, options);
        }
export function useQGroupDetailSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQGroupDetail, TQGroupDetailVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQGroupDetail, TQGroupDetailVariables>(QGroupDetailDocument, options);
        }
export type QGroupDetailHookResult = ReturnType<typeof useQGroupDetail>;
export type QGroupDetailLazyQueryHookResult = ReturnType<typeof useQGroupDetailLazyQuery>;
export type QGroupDetailSuspenseQueryHookResult = ReturnType<typeof useQGroupDetailSuspenseQuery>;
export type QGroupDetailQueryResult = ApolloReactCommon.QueryResult<TQGroupDetail, TQGroupDetailVariables>;
export const QGroupsDocument = gql`
    query QGroups {
  groups: allThresholdGroups(householdId: 1) {
    ...FGroup
  }
}
    ${FGroup}`;

/**
 * __useQGroups__
 *
 * To run a query within a React component, call `useQGroups` and pass it any options that fit your needs.
 * When your component renders, `useQGroups` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQGroups({
 *   variables: {
 *   },
 * });
 */
export function useQGroups(baseOptions?: ApolloReactHooks.QueryHookOptions<TQGroups, TQGroupsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQGroups, TQGroupsVariables>(QGroupsDocument, options);
      }
export function useQGroupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQGroups, TQGroupsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQGroups, TQGroupsVariables>(QGroupsDocument, options);
        }
export function useQGroupsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQGroups, TQGroupsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQGroups, TQGroupsVariables>(QGroupsDocument, options);
        }
export type QGroupsHookResult = ReturnType<typeof useQGroups>;
export type QGroupsLazyQueryHookResult = ReturnType<typeof useQGroupsLazyQuery>;
export type QGroupsSuspenseQueryHookResult = ReturnType<typeof useQGroupsSuspenseQuery>;
export type QGroupsQueryResult = ApolloReactCommon.QueryResult<TQGroups, TQGroupsVariables>;
export const QNotificationsDocument = gql`
    query QNotifications {
  result: getNotifications {
    unreadCount
    notifications {
      id
      read
      createdAt
      title
      body
    }
  }
}
    `;

/**
 * __useQNotifications__
 *
 * To run a query within a React component, call `useQNotifications` and pass it any options that fit your needs.
 * When your component renders, `useQNotifications` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQNotifications({
 *   variables: {
 *   },
 * });
 */
export function useQNotifications(baseOptions?: ApolloReactHooks.QueryHookOptions<TQNotifications, TQNotificationsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQNotifications, TQNotificationsVariables>(QNotificationsDocument, options);
      }
export function useQNotificationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQNotifications, TQNotificationsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQNotifications, TQNotificationsVariables>(QNotificationsDocument, options);
        }
export function useQNotificationsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQNotifications, TQNotificationsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQNotifications, TQNotificationsVariables>(QNotificationsDocument, options);
        }
export type QNotificationsHookResult = ReturnType<typeof useQNotifications>;
export type QNotificationsLazyQueryHookResult = ReturnType<typeof useQNotificationsLazyQuery>;
export type QNotificationsSuspenseQueryHookResult = ReturnType<typeof useQNotificationsSuspenseQuery>;
export type QNotificationsQueryResult = ApolloReactCommon.QueryResult<TQNotifications, TQNotificationsVariables>;
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
export const SValuesDocument = gql`
    subscription SValues {
  change: nodeValues {
    type
    data {
      ... on SensorNodeSubscriptionType {
        id
        currentValue
      }
      ... on ActuatorNodeSubscriptionType {
        id
        currentState
        isOnline
      }
      ... on NotificationsUnreadCountType {
        unreadCount
      }
    }
  }
}
    `;

/**
 * __useSValues__
 *
 * To run a query within a React component, call `useSValues` and pass it any options that fit your needs.
 * When your component renders, `useSValues` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSValues({
 *   variables: {
 *   },
 * });
 */
export function useSValues(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TSValues, TSValuesVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<TSValues, TSValuesVariables>(SValuesDocument, options);
      }
export type SValuesHookResult = ReturnType<typeof useSValues>;
export type SValuesSubscriptionResult = ApolloReactCommon.SubscriptionResult<TSValues>;