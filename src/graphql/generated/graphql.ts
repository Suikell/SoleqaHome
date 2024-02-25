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
  readonly actuators: ReadonlyArray<TActuatorNodeType>;
  readonly batteryLevel: Maybe<Scalars['Float']['output']>;
  readonly createdAt: Scalars['DateTime']['output'];
  readonly deviceId: Scalars['String']['output'];
  readonly favorite: Scalars['Boolean']['output'];
  readonly household: Maybe<THouseholdType>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly isOnline: Scalars['Boolean']['output'];
  readonly lastOnline: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly sensors: ReadonlyArray<TSensorNodeType>;
  readonly systemVersion: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<TNodeTypeEnum>;
  readonly uid: Scalars['UUID']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TMutation = {
  readonly __typename?: 'Mutation';
  readonly refreshToken: Maybe<TRefresh>;
  readonly tokenAuth: Maybe<TObtainJsonWebToken>;
  readonly userProfileImageUpload: Maybe<TUserProfileImageMutation>;
  readonly verifyToken: Maybe<TVerify>;
};


export type TMutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
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
  readonly household: Maybe<THouseholdType>;
  readonly mainframe: Maybe<TMainframeType>;
  readonly sensorCondition: Maybe<TSensorConditionType>;
  readonly sensorNode: Maybe<TSensorNodeType>;
  readonly thresholdGroup: Maybe<TThresholdGroupType>;
  readonly user: Maybe<TUserType>;
};


export type TQueryActuatorNodeArgs = {
  id: Scalars['ID']['input'];
};


export type TQueryAllActuatorNodesArgs = {
  mainframeId: Scalars['Int']['input'];
};


export type TQueryAllSensorConditionsArgs = {
  groupId: Scalars['Int']['input'];
};


export type TQueryAllSensorNodesArgs = {
  mainframeId: Scalars['Int']['input'];
};


export type TQueryAllThresholdGroupsArgs = {
  householdId: Scalars['Int']['input'];
};


export type TQueryHouseholdArgs = {
  id: Scalars['ID']['input'];
};


export type TQueryMainframeArgs = {
  id: Scalars['ID']['input'];
};


export type TQuerySensorConditionArgs = {
  id: Scalars['ID']['input'];
};


export type TQuerySensorNodeArgs = {
  id: Scalars['ID']['input'];
};


export type TQueryThresholdGroupArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryUserArgs = {
  id: Scalars['ID']['input'];
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

export type TFCategory = { readonly __typename?: 'MainframeType', readonly id: number | null, readonly name: string | null, readonly isOnline: boolean, readonly batteryLevel: number | null };

export type TFUser = { readonly __typename?: 'UserType', readonly id: number | null, readonly email: string, readonly firstName: string, readonly lastName: string };

export type TMAuthUserVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type TMAuthUser = { readonly __typename?: 'Mutation', readonly login: { readonly __typename?: 'ObtainJSONWebToken', readonly token: string, readonly user: { readonly __typename?: 'UserType', readonly id: number | null, readonly email: string, readonly firstName: string, readonly lastName: string } | null } | null };

export type TQCategoriesVariables = Exact<{ [key: string]: never; }>;


export type TQCategories = { readonly __typename?: 'Query', readonly allMainframes: ReadonlyArray<{ readonly __typename?: 'MainframeType', readonly id: number | null, readonly name: string | null, readonly isOnline: boolean, readonly batteryLevel: number | null }> | null };

export type TQTestVariables = Exact<{ [key: string]: never; }>;


export type TQTest = { readonly __typename?: 'Query', readonly allThresholdGroups: ReadonlyArray<{ readonly __typename?: 'ThresholdGroupType', readonly id: number | null, readonly name: string }> | null };

export type TSTestVariables = Exact<{ [key: string]: never; }>;


export type TSTest = { readonly __typename?: 'Subscription', readonly countSeconds: number | null };

export const FCategory = gql`
    fragment FCategory on MainframeType {
  id
  name
  isOnline
  batteryLevel
}
    `;
export const FUser = gql`
    fragment FUser on UserType {
  id
  email
  firstName
  lastName
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
export const QCategoriesDocument = gql`
    query QCategories {
  allMainframes {
    ...FCategory
  }
}
    ${FCategory}`;

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