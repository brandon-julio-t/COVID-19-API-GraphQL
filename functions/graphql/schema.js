const { gql } = require(`apollo-server-lambda`);

const typeDefs = gql`
  type Query {
    Summary: Summary!
    Countries: [Country!]!
    DayOne(slug: String!, status: Status!): [DayOne!]!
    DayOneAllStatus(slug: String!): [DayOne!]!
    DayOneLive(slug: String!, status: Status!): [DayOne!]!
    DayOneTotal(slug: String!, status: Status!): [DayOne!]!
    DayOneTotalAllStatus(slug: String!): [DayOne!]!
    ByCountry(slug: String!, status: Status!): [DayOne!]!
    ByCountryAllStatus(slug: String!): [DayOne!]!
    ByCountryLive(slug: String!, status: Status!): [DayOne!]!
    ByCountryTotal(slug: String!, status: Status!): [DayOne!]!
    ByCountryTotalAllStatus(slug: String!): [DayOne!]!
    LiveByCountryAndStatus(slug: String!, status: Status!): [LiveByCountry!]!
    LiveByCountryAllStatus(slug: String!): [LiveByCountry!]!
    LiveByCountryAndStatusAfterDate(slug: String!, status: Status!, date: String!): [LiveByCountry!]!
    World: [Global!]!
    WorldTotal: WorldTotal!
  }

  type Summary {
    Global: Global!
    Countries: [CountrySummary!]!
  }

  type Global {
    NewConfirmed: Int!
    TotalConfirmed: Int!
    NewDeaths: Int!
    TotalDeaths: Int!
    NewRecovered: Int!
    TotalRecovered: Int!
  }

  type CountrySummary {
    Country: String!
    CountryCode: String!
    Slug: String!
    NewConfirmed: Int!
    TotalConfirmed: Int!
    NewDeaths: Int!
    TotalDeaths: Int!
    NewRecovered: Int!
    TotalRecovered: Int!
    Date: String!
  }

  type Country {
    Country: String!
    Slug: String!
    ISO2: String!
  }

  type DayOne {
    Country: String!
    CountryCode: String!
    Lat: Float!
    Lon: Float!
    Cases: Int
    Status: String
    Date: String!
  }

  type LiveByCountry {
    Country: String!
    CountryCode: String!
    Lat: Float!
    Lon: Float!
    Confirmed: Int!
    Deaths: Int!
    Recovered: Int!
    Active: Int!
    Date: String!
    LocationID: ID
  }

  type WorldTotal {
    TotalConfirmed: Int!
    TotalDeaths: Int!
    TotalRecovered: Int!
  }

  enum Status {
    CONFIRMED
    RECOVERED
    DEATHS
  }
`;

module.exports = typeDefs;
