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

export type TActuatorNodeType = {
  readonly __typename?: 'ActuatorNodeType';
  readonly actuatorType: Maybe<TActuatorTypeEnum>;
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly currentState: Maybe<Scalars['Boolean']['output']>;
  readonly deviceId: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly mainframe: Maybe<TMainframeType>;
  readonly manualOverride: Scalars['Boolean']['output'];
  readonly manualOverrideUntil: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly nodeType: Maybe<TNodeTypeEnum>;
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly thresholdGroups: ReadonlyArray<TThresholdGroupType>;
  readonly type: Scalars['Int']['output'];
  readonly uid: Scalars['UUID']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TActuatorOperatorEnum =
  | 'EQUAL'
  | 'NOT_EQUAL';

export type TActuatorTypeEnum =
  | 'FAN'
  | 'HEATER'
  | 'LIGHT'
  | 'UNASSIGNED'
  | 'WATER_PUMP';

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

export type THouseholdType = {
  readonly __typename?: 'HouseholdType';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly mainframes: ReadonlyArray<TMainframeType>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly thresholdGroups: ReadonlyArray<TThresholdGroupType>;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly users: TUserTypeConnection;
};


export type THouseholdTypeUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TMainframeType = {
  readonly __typename?: 'MainframeType';
  readonly actuators: Maybe<ReadonlyArray<TActuatorNodeType>>;
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly deviceId: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly household: Maybe<THouseholdType>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
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
  readonly refreshToken: Maybe<TRefresh>;
  readonly setCriticalOverValue: Maybe<TSetCriticalOverMutation>;
  readonly setCriticalUnderValue: Maybe<TSetCriticalUnderMutation>;
  readonly setFavoriteActuator: Maybe<TSetFavoriteMutation>;
  readonly setFavoriteSensor: Maybe<TSetFavoriteMutation>;
  readonly tokenAuth: Maybe<TObtainJsonWebToken>;
  readonly userProfileImageUpload: Maybe<TUserProfileImageMutation>;
  readonly verifyToken: Maybe<TVerify>;
};


export type TMutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type TMutationSetCriticalOverValueArgs = {
  sensorId: Scalars['Int']['input'];
  value: Scalars['Float']['input'];
};


export type TMutationSetCriticalUnderValueArgs = {
  sensorId: Scalars['Int']['input'];
  value: Scalars['Float']['input'];
};


export type TMutationSetFavoriteActuatorArgs = {
  actuatorId: Scalars['Int']['input'];
  favorite: Scalars['Boolean']['input'];
};


export type TMutationSetFavoriteSensorArgs = {
  favorite: Scalars['Boolean']['input'];
  sensorId: Scalars['Int']['input'];
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
  readonly payload: Scalars['GenericScalar']['output'];
  readonly refreshExpiresIn: Scalars['Int']['output'];
  readonly token: Scalars['String']['output'];
  readonly user: Maybe<TUserType>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type TPageInfo = {
  readonly __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']['output']>;
};

export type TQuery = {
  readonly __typename?: 'Query';
  readonly actuatorNode: Maybe<TActuatorNodeType>;
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
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
  readonly user: Maybe<TUserType>;
};


export type TQueryActuatorNodeArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryAllActuatorNodesArgs = {
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  mainframeId: Scalars['Int']['input'];
};


export type TQueryAllSensorConditionsArgs = {
  groupId: Scalars['Int']['input'];
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

export type TSensorConditionType = {
  readonly __typename?: 'SensorConditionType';
  readonly active: Scalars['Boolean']['output'];
  readonly createdAt: Scalars['DateTime']['output'];
  readonly group: TThresholdGroupType;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly operator: Maybe<TSensorOperatorEnum>;
  readonly sensor: TSensorNodeType;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly value: Scalars['Float']['output'];
};

export type TSensorNodeType = {
  readonly __typename?: 'SensorNodeType';
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly criticalOver: Maybe<Scalars['Float']['output']>;
  readonly criticalUnder: Maybe<Scalars['Float']['output']>;
  readonly currentValue: Maybe<Scalars['Float']['output']>;
  readonly deviceId: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly mainframe: Maybe<TMainframeType>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly nodeType: Maybe<TNodeTypeEnum>;
  readonly sensorConditions: ReadonlyArray<TSensorConditionType>;
  readonly sensorType: Maybe<TSensorTypeEnum>;
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly type: Scalars['Int']['output'];
  readonly uid: Scalars['UUID']['output'];
  readonly unitType: Maybe<TUnitTypeEnum>;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly values: Maybe<ReadonlyArray<TSensorValueType>>;
};

export type TSensorOperatorEnum =
  | 'EQUAL'
  | 'GREATER_THAN'
  | 'GREATER_THAN_OR_EQUAL'
  | 'LESS_THAN'
  | 'LESS_THAN_OR_EQUAL'
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
  readonly dailyLog: TDailyLogValuesType;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly sensor: TSensorNodeType;
  readonly updatedAt: Scalars['DateTime']['output'];
  readonly value: Scalars['Float']['output'];
};

export type TSetCriticalOverMutation = {
  readonly __typename?: 'SetCriticalOverMutation';
  readonly success: Maybe<Scalars['Boolean']['output']>;
};

export type TSetCriticalUnderMutation = {
  readonly __typename?: 'SetCriticalUnderMutation';
  readonly success: Maybe<Scalars['Boolean']['output']>;
};

export type TSetFavoriteMutation = {
  readonly __typename?: 'SetFavoriteMutation';
  readonly success: Maybe<Scalars['Boolean']['output']>;
};

export type TSubscription = {
  readonly __typename?: 'Subscription';
  readonly countSeconds: Maybe<Scalars['Int']['output']>;
};


export type TSubscriptionCountSecondsArgs = {
  upTo?: InputMaybe<Scalars['Int']['input']>;
};

export type TThresholdGroupType = {
  readonly __typename?: 'ThresholdGroupType';
  readonly active: Scalars['Boolean']['output'];
  readonly actuators: ReadonlyArray<TActuatorNodeType>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly household: THouseholdType;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly name: Scalars['String']['output'];
  readonly operator: Maybe<TActuatorOperatorEnum>;
  readonly priority: Scalars['Int']['output'];
  readonly sensorConditions: ReadonlyArray<TSensorConditionType>;
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TUnitTypeEnum =
  | 'CO2'
  | 'HUMIDITY'
  | 'LIGHT'
  | 'SOIL_MOISTURE'
  | 'SOIL_PH'
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
  readonly id: Maybe<Scalars['Int']['output']>;
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

export type TUserTypeConnection = {
  readonly __typename?: 'UserTypeConnection';
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TUserTypeEdge>>;
  /** Pagination data for this connection. */
  readonly pageInfo: TPageInfo;
};

/** A Relay edge containing a `UserType` and its cursor. */
export type TUserTypeEdge = {
  readonly __typename?: 'UserTypeEdge';
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  readonly node: Maybe<TUserType>;
};

export type TVerify = {
  readonly __typename?: 'Verify';
  readonly payload: Scalars['GenericScalar']['output'];
};

export type TFActuatorBase = { readonly __typename?: 'ActuatorNodeType', readonly id: number | null, readonly name: string | null, readonly favorite: boolean, readonly currentState: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number | null } | null };

export type TFCategoryBase = { readonly __typename?: 'MainframeType', readonly id: number | null, readonly name: string | null, readonly isOnline: boolean, readonly batteryLevel: number | null };

export type TFSensorBase = { readonly __typename?: 'SensorNodeType', readonly id: number | null, readonly name: string | null, readonly favorite: boolean, readonly unitType: TUnitTypeEnum | null, readonly currentValue: number | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorValueType', readonly value: number }> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number | null } | null };

export type TFSensorValues = { readonly __typename?: 'SensorValueType', readonly value: number };

export type TFUser = { readonly __typename?: 'UserType', readonly id: number | null, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profileImage: string | null };

export type TMAuthUserVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type TMAuthUser = { readonly __typename?: 'Mutation', readonly login: { readonly __typename?: 'ObtainJSONWebToken', readonly token: string, readonly user: { readonly __typename?: 'UserType', readonly id: number | null, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profileImage: string | null } | null } | null };

export type TMSetFavoriteActuatorVariables = Exact<{
  actuatorId: Scalars['Int']['input'];
  favorite: Scalars['Boolean']['input'];
}>;


export type TMSetFavoriteActuator = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetFavoriteMutation', readonly success: boolean | null } | null };

export type TMSetFavoriteSensorVariables = Exact<{
  sensorId: Scalars['Int']['input'];
  favorite: Scalars['Boolean']['input'];
}>;


export type TMSetFavoriteSensor = { readonly __typename?: 'Mutation', readonly result: { readonly __typename?: 'SetFavoriteMutation', readonly success: boolean | null } | null };

export type TQCategoriesVariables = Exact<{ [key: string]: never; }>;


export type TQCategories = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'MainframeType', readonly id: number | null, readonly name: string | null, readonly isOnline: boolean, readonly batteryLevel: number | null, readonly favoriteSensors: ReadonlyArray<{ readonly __typename?: 'SensorNodeType', readonly id: number | null, readonly name: string | null, readonly favorite: boolean, readonly unitType: TUnitTypeEnum | null, readonly currentValue: number | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorValueType', readonly value: number }> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number | null } | null }> | null, readonly criticalSensors: ReadonlyArray<{ readonly __typename?: 'SensorNodeType', readonly id: number | null, readonly name: string | null, readonly favorite: boolean, readonly unitType: TUnitTypeEnum | null, readonly currentValue: number | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorValueType', readonly value: number }> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number | null } | null }> | null, readonly favoriteActuators: ReadonlyArray<{ readonly __typename?: 'ActuatorNodeType', readonly id: number | null, readonly name: string | null, readonly favorite: boolean, readonly currentState: boolean | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number | null } | null }> | null }> | null };

export type TQSensorDetailVariables = Exact<{
  sensorId: Scalars['Int']['input'];
}>;


export type TQSensorDetail = { readonly __typename?: 'Query', readonly sensor: { readonly __typename?: 'SensorNodeType', readonly id: number | null, readonly currentValue: number | null, readonly batteryLevel: number | null, readonly isOnline: boolean, readonly unitType: TUnitTypeEnum | null } | null };

export type TQSensorsVariables = Exact<{ [key: string]: never; }>;


export type TQSensors = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'MainframeType', readonly id: number | null, readonly name: string | null, readonly sensors: ReadonlyArray<{ readonly __typename?: 'SensorNodeType', readonly id: number | null, readonly name: string | null, readonly favorite: boolean, readonly unitType: TUnitTypeEnum | null, readonly currentValue: number | null, readonly values: ReadonlyArray<{ readonly __typename?: 'SensorValueType', readonly value: number }> | null, readonly category: { readonly __typename?: 'MainframeType', readonly id: number | null } | null }> | null }> | null };

export type TQTestVariables = Exact<{ [key: string]: never; }>;


export type TQTest = { readonly __typename?: 'Query', readonly allThresholdGroups: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupType', readonly id: number | null, readonly name: string }> | null };

export type TSTestVariables = Exact<{ [key: string]: never; }>;


export type TSTest = { readonly __typename?: 'Subscription', readonly countSeconds: number | null };

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
export const FSensorValues = gql`
    fragment FSensorValues on SensorValueType {
  value
}
    `;
export const FSensorBase = gql`
    fragment FSensorBase on SensorNodeType {
  id
  name
  favorite
  unitType
  currentValue
  values {
    ...FSensorValues
  }
  category: mainframe {
    id
  }
}
    ${FSensorValues}`;
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
export const MSetFavoriteActuatorDocument = gql`
    mutation MSetFavoriteActuator($actuatorId: Int!, $favorite: Boolean!) {
  result: setFavoriteActuator(actuatorId: $actuatorId, favorite: $favorite) {
    success
  }
}
    `;
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
    success
  }
}
    `;
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
export const QCategoriesDocument = gql`
    query QCategories {
  categories: allMainframes {
    ...FCategoryBase
    favoriteSensors: sensors(favorite: true) {
      ...FSensorBase
    }
    criticalSensors: sensors(critical: true) {
      ...FSensorBase
    }
    favoriteActuators: actuators(favorite: true) {
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
    unitType
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
export const QTestDocument = gql`
    query QTest {
  allThresholdGroups(householdId: 1) {
    id
    name
  }
}
    `;

/**
 * __useQTest__
 *
 * To run a query within a React component, call `useQTest` and pass it any options that fit your needs.
 * When your component renders, `useQTest` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQTest({
 *   variables: {
 *   },
 * });
 */
export function useQTest(baseOptions?: ApolloReactHooks.QueryHookOptions<TQTest, TQTestVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TQTest, TQTestVariables>(QTestDocument, options);
      }
export function useQTestLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TQTest, TQTestVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TQTest, TQTestVariables>(QTestDocument, options);
        }
export function useQTestSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<TQTest, TQTestVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<TQTest, TQTestVariables>(QTestDocument, options);
        }
export type QTestHookResult = ReturnType<typeof useQTest>;
export type QTestLazyQueryHookResult = ReturnType<typeof useQTestLazyQuery>;
export type QTestSuspenseQueryHookResult = ReturnType<typeof useQTestSuspenseQuery>;
export type QTestQueryResult = ApolloReactCommon.QueryResult<TQTest, TQTestVariables>;
export const STestDocument = gql`
    subscription STest {
  countSeconds(upTo: 10)
}
    `;

/**
 * __useSTest__
 *
 * To run a query within a React component, call `useSTest` and pass it any options that fit your needs.
 * When your component renders, `useSTest` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSTest({
 *   variables: {
 *   },
 * });
 */
export function useSTest(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TSTest, TSTestVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<TSTest, TSTestVariables>(STestDocument, options);
      }
export type STestHookResult = ReturnType<typeof useSTest>;
export type STestSubscriptionResult = ApolloReactCommon.SubscriptionResult<TSTest>;