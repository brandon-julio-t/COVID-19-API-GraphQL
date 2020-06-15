const { RESTDataSource } = require(`apollo-datasource-rest`);

class COVID19API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.covid19api.com/`;
  }

  getSummary = async () => await this.get(`summary`);

  getCountries = async () => await this.get(`countries`);

  dayOne = async (slug, status) => await this.get(`dayone/country/${slug}/status/${status.toLowerCase()}`);

  dayOneAllStatus = async (slug) => await this.get(`dayone/country/${slug}`);

  dayOneLive = async (slug, status) => await this.get(`dayone/country/${slug}/status/${status.toLowerCase()}/live`);

  dayOneTotal = async (slug, status) => await this.get(`total/dayone/country/${slug}/status/${status.toLowerCase()}`);

  dayOneTotalAllStatus = async (slug) => await this.get(`total/dayone/country/${slug}`);

  byCountry = async (slug, status) => await this.get(`country/${slug}/status/${status.toLowerCase()}`);

  byCountryAllStatus = async (slug) => await this.get(`country/${slug}`);

  byCountryLive = async (slug, status) => await this.get(`country/${slug}/status/${status.toLowerCase()}/live`);

  byCountryTotal = async (slug, status) => await this.get(`total/country/${slug}/status/${status.toLowerCase()}`);

  byCountryTotalAllStatus = async (slug) => await this.get(`total/country/${slug}`);

  liveByCountryAndStatus = async (slug, status) => await this.get(`live/country/${slug}/status/${status}`);

  liveByCountryAllStatus = async (slug) => await this.get(`live/country/${slug}`);

  liveByCountryAndStatusAfterDate = async (slug, status, date) =>
    await this.get(`live/country/${slug}/status/${status}/date/${date}`);

  world = async () => await this.get(`world`);

  worldTotal = async () => await this.get(`world/total`);
}

module.exports = COVID19API;
