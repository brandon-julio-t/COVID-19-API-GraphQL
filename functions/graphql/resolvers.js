const resolvers = {
  Query: {
    Summary: (_, __, context, ___) => context.dataSources.covid19api.getSummary(),

    Countries: (_, __, context, ___) => context.dataSources.covid19api.getCountries(),

    DayOne: (_, args, context, ___) => context.dataSources.covid19api.dayOne(args.slug, args.status),

    DayOneAllStatus: (_, args, context, ___) => context.dataSources.covid19api.dayOneAllStatus(args.slug),

    DayOneLive: (_, args, context, ___) => context.dataSources.covid19api.dayOneLive(args.slug, args.status),

    DayOneTotal: (_, args, context, ___) => context.dataSources.covid19api.dayOneTotal(args.slug, args.status),

    DayOneTotalAllStatus: (_, args, context, ___) => context.dataSources.covid19api.dayOneTotalAllStatus(args.slug),

    ByCountry: (_, args, context, ___) => context.dataSources.covid19api.byCountry(args.slug, args.status),

    ByCountryAllStatus: (_, args, context, ___) => context.dataSources.covid19api.byCountryAllStatus(args.slug),

    ByCountryLive: (_, args, context, ___) => context.dataSources.covid19api.byCountryLive(args.slug, args.status),

    ByCountryTotal: (_, args, context, ___) => context.dataSources.covid19api.byCountryTotal(args.slug, args.status),

    ByCountryTotalAllStatus: (_, args, context, ___) =>
      context.dataSources.covid19api.byCountryTotalAllStatus(args.slug, args.status),

    LiveByCountryAndStatus: (_, args, context, ___) =>
      context.dataSources.covid19api.liveByCountryAndStatus(args.slug, args.status),

    LiveByCountryAllStatus: (_, args, context, ___) => context.dataSources.covid19api.liveByCountryAllStatus(args.slug),

    LiveByCountryAndStatusAfterDate: (_, args, context, ___) =>
      context.dataSources.covid19api.liveByCountryAndStatusAfterDate(args.slug, args.status, args.date),

    World: (_, __, context, ___) => context.dataSources.covid19api.world(),

    WorldTotal: (_, __, context, ___) => context.dataSources.covid19api.worldTotal(),
  },
};

module.exports = resolvers;
