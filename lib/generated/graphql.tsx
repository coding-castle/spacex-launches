import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  upcomingLaunches: Array<Launch>;
  launches: Array<Launch>;
  cores: Array<Core>;
  launchpads: Array<Launchpad>;
  landpads: Array<Landpad>;
  payloads: Array<Payload>;
  rockets: Array<Rocket>;
};

export type Launch = {
  __typename?: 'Launch';
  id: Scalars['ID'];
  name: Scalars['String'];
  flightNumber: Scalars['Int'];
  dateUtc: Scalars['String'];
  dateUnix: Scalars['String'];
  dateLocal: Scalars['String'];
  datePrecision: Precision;
  staticFireDateUtc?: Maybe<Scalars['String']>;
  staticFireDateUnix?: Maybe<Scalars['String']>;
  tdb: Scalars['Boolean'];
  net: Scalars['Boolean'];
  window?: Maybe<Scalars['Int']>;
  rocket?: Maybe<Scalars['ID']>;
  success?: Maybe<Scalars['Boolean']>;
  failures: Array<Failure>;
  upcoming: Scalars['Boolean'];
  details?: Maybe<Scalars['String']>;
  fairings?: Maybe<Fairing>;
  crew?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ships?: Maybe<Array<Maybe<Scalars['ID']>>>;
  capsules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  payloads?: Maybe<Array<Maybe<Scalars['ID']>>>;
  launchpad?: Maybe<Scalars['ID']>;
  cores: Array<Core>;
  links: Links;
  autoUpdate: Scalars['Boolean'];
};

export type Links = {
  __typename?: 'Links';
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit?: Maybe<Scalars['String']>;
  webcast?: Maybe<Scalars['String']>;
  youtubeId?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Flickr = {
  __typename?: 'Flickr';
  small: Array<Scalars['String']>;
  original: Array<Scalars['String']>;
};

export type Reddit = {
  __typename?: 'Reddit';
  campaign?: Maybe<Scalars['String']>;
  launch?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  recovery?: Maybe<Scalars['String']>;
};

export type Patch = {
  __typename?: 'Patch';
  small?: Maybe<Scalars['String']>;
  large?: Maybe<Scalars['String']>;
};

export type Core = {
  __typename?: 'Core';
  asdsAttempts?: Maybe<Scalars['Int']>;
  asdsLandings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  core?: Maybe<Scalars['ID']>;
  flight?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  landingAttempt?: Maybe<Scalars['Boolean']>;
  landingSuccess?: Maybe<Scalars['Boolean']>;
  landingType?: Maybe<Scalars['String']>;
  landpad?: Maybe<Scalars['ID']>;
  lastUpdate?: Maybe<Scalars['String']>;
  launches: Array<Maybe<Scalars['String']>>;
  legs?: Maybe<Scalars['Boolean']>;
  reuseCount?: Maybe<Scalars['Int']>;
  reused?: Maybe<Scalars['Boolean']>;
  rtlsAttempts?: Maybe<Scalars['Int']>;
  rtlsLandings?: Maybe<Scalars['Int']>;
  serial?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Fairing = {
  __typename?: 'Fairing';
  reused?: Maybe<Scalars['Boolean']>;
  recoveryAttempt?: Maybe<Scalars['Boolean']>;
  recovered?: Maybe<Scalars['Boolean']>;
  ships?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Failure = {
  __typename?: 'Failure';
  time: Scalars['Float'];
  altitude: Scalars['Float'];
  reason: Scalars['String'];
};

export enum Precision {
  Half = 'half',
  Quarter = 'quarter',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour'
}

export type PayloadWeights = {
  __typename?: 'PayloadWeights';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type LandingLegs = {
  __typename?: 'LandingLegs';
  number?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
};

export type ThrustVacuum = {
  __typename?: 'ThrustVacuum';
  kN?: Maybe<Scalars['Int']>;
  lbf?: Maybe<Scalars['Int']>;
};

export type ThrustSeaLevel = {
  __typename?: 'ThrustSeaLevel';
  kN?: Maybe<Scalars['Int']>;
  lbf?: Maybe<Scalars['Int']>;
};

export type Isp = {
  __typename?: 'Isp';
  seaLevel?: Maybe<Scalars['Int']>;
  vacuum?: Maybe<Scalars['Int']>;
};

export type Engines = {
  __typename?: 'Engines';
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  engineLossMax?: Maybe<Scalars['Int']>;
  propellant1?: Maybe<Scalars['String']>;
  propellant2?: Maybe<Scalars['String']>;
  thrustToWeight?: Maybe<Scalars['Float']>;
  thrustVacuum?: Maybe<ThrustVacuum>;
  thrustSeaLevel?: Maybe<ThrustSeaLevel>;
  isp?: Maybe<Isp>;
};

export type Diameter = {
  __typename?: 'Diameter';
  meters?: Maybe<Scalars['Float']>;
  feet?: Maybe<Scalars['Float']>;
};

export type Height = {
  __typename?: 'Height';
  meters?: Maybe<Scalars['Float']>;
  feet?: Maybe<Scalars['Int']>;
};

export type CompositeFairing = {
  __typename?: 'CompositeFairing';
  diameter?: Maybe<Diameter>;
  height?: Maybe<Height>;
};

export type Payloads = {
  __typename?: 'Payloads';
  option1?: Maybe<Scalars['String']>;
  compositeFairing?: Maybe<CompositeFairing>;
};

export type Thrust = {
  __typename?: 'Thrust';
  kN?: Maybe<Scalars['Int']>;
  lbf?: Maybe<Scalars['Int']>;
};

export type SecondStage = {
  __typename?: 'SecondStage';
  reusable?: Maybe<Scalars['Boolean']>;
  engines?: Maybe<Scalars['Int']>;
  fuelAmountTons?: Maybe<Scalars['Int']>;
  burnTimeSec?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Payloads>;
  thrust?: Maybe<Thrust>;
};

export type FirstStage = {
  __typename?: 'FirstStage';
  reusable?: Maybe<Scalars['Boolean']>;
  engines?: Maybe<Scalars['Int']>;
  fuelAmountTons?: Maybe<Scalars['Int']>;
  burnTimeSec?: Maybe<Scalars['Int']>;
  thrustVacuum?: Maybe<ThrustVacuum>;
  thrustSeaLevel?: Maybe<ThrustSeaLevel>;
};

export type Mass = {
  __typename?: 'Mass';
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  stages?: Maybe<Scalars['Int']>;
  boosters?: Maybe<Scalars['Int']>;
  costPerLaunch?: Maybe<Scalars['Int']>;
  successRatePct?: Maybe<Scalars['Int']>;
  firstFlight?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  flickrImages: Array<Maybe<Scalars['String']>>;
  payloadWeights: Array<Maybe<PayloadWeights>>;
  landingLegs?: Maybe<LandingLegs>;
  engines?: Maybe<Engines>;
  secondStage?: Maybe<SecondStage>;
  firstStage?: Maybe<FirstStage>;
  mass?: Maybe<Mass>;
  diameter?: Maybe<Diameter>;
  height?: Maybe<Height>;
};

export type Dragon = {
  __typename?: 'Dragon';
  capsule?: Maybe<Scalars['String']>;
  massReturnedKg?: Maybe<Scalars['String']>;
  massReturnedLbs?: Maybe<Scalars['String']>;
  flightTimeSec?: Maybe<Scalars['String']>;
  manifest?: Maybe<Scalars['String']>;
  waterLanding?: Maybe<Scalars['String']>;
  landLanding?: Maybe<Scalars['String']>;
};

export type Payload = {
  __typename?: 'Payload';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
  launch?: Maybe<Scalars['String']>;
  massKg?: Maybe<Scalars['Int']>;
  massLbs?: Maybe<Scalars['Int']>;
  orbit?: Maybe<Scalars['String']>;
  referenceSystem?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  semiMajorAxisKm?: Maybe<Scalars['String']>;
  eccentricity?: Maybe<Scalars['String']>;
  periapsisKm?: Maybe<Scalars['Int']>;
  apoapsisKm?: Maybe<Scalars['Int']>;
  inclinationDeg?: Maybe<Scalars['Int']>;
  periodMin?: Maybe<Scalars['String']>;
  lifespanYears?: Maybe<Scalars['String']>;
  epoch?: Maybe<Scalars['String']>;
  meanMotion?: Maybe<Scalars['String']>;
  raan?: Maybe<Scalars['String']>;
  argOfPericenter?: Maybe<Scalars['String']>;
  meanAnomaly?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  manufacturers: Array<Maybe<Scalars['String']>>;
  nationalities: Array<Maybe<Scalars['String']>>;
  noradIds: Array<Maybe<Scalars['String']>>;
  customers: Array<Maybe<Scalars['String']>>;
  dragon?: Maybe<Dragon>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  launchAttempts?: Maybe<Scalars['Int']>;
  launchSuccesses?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  launches: Array<Maybe<Scalars['String']>>;
  rockets: Array<Maybe<Scalars['String']>>;
};

export type Landpad = {
  __typename?: 'Landpad';
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  landingAttempts?: Maybe<Scalars['Int']>;
  landingSuccesses?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  launches: Array<Maybe<Scalars['String']>>;
};

export type UpcomingLaunchesQueryVariables = Exact<{ [key: string]: never; }>;


export type UpcomingLaunchesQuery = (
  { __typename?: 'Query' }
  & { upcomingLaunches: Array<(
    { __typename?: 'Launch' }
    & Pick<Launch, 'id' | 'name' | 'flightNumber' | 'datePrecision' | 'rocket' | 'dateUtc' | 'dateUnix' | 'dateLocal' | 'details'>
  )>, rockets: Array<(
    { __typename?: 'Rocket' }
    & Pick<Rocket, 'id' | 'name' | 'type'>
  )> }
);


export const UpcomingLaunchesDocument = gql`
    query UpcomingLaunches {
  upcomingLaunches @rest(type: "Launch", path: "launches/upcoming") {
    id
    name
    flightNumber
    datePrecision
    rocket
    dateUtc
    dateUnix
    dateLocal
    details
  }
  rockets @rest(type: "Rocket", path: "rockets") {
    id
    name
    type
  }
}
    `;

/**
 * __useUpcomingLaunchesQuery__
 *
 * To run a query within a React component, call `useUpcomingLaunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingLaunchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingLaunchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUpcomingLaunchesQuery(baseOptions?: Apollo.QueryHookOptions<UpcomingLaunchesQuery, UpcomingLaunchesQueryVariables>) {
        return Apollo.useQuery<UpcomingLaunchesQuery, UpcomingLaunchesQueryVariables>(UpcomingLaunchesDocument, baseOptions);
      }
export function useUpcomingLaunchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpcomingLaunchesQuery, UpcomingLaunchesQueryVariables>) {
          return Apollo.useLazyQuery<UpcomingLaunchesQuery, UpcomingLaunchesQueryVariables>(UpcomingLaunchesDocument, baseOptions);
        }
export type UpcomingLaunchesQueryHookResult = ReturnType<typeof useUpcomingLaunchesQuery>;
export type UpcomingLaunchesLazyQueryHookResult = ReturnType<typeof useUpcomingLaunchesLazyQuery>;
export type UpcomingLaunchesQueryResult = Apollo.QueryResult<UpcomingLaunchesQuery, UpcomingLaunchesQueryVariables>;