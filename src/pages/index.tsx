import React from "react";

export default () => (
  <div className="container mx-auto text-center my-16">
    <main>
      <header>
        <h1 className="text-6xl font-hairline">COVID-19 API GraphQL</h1>
        <p className="text-3xl">
          <cite>A free API for data on the Coronavirus</cite> with GraphQL.
        </p>

        <a className="underline text-xl" href="/.netlify/functions/graphql">
          Visit the Playground
        </a>
      </header>

      <section className="my-8">
        <h2 className="text-3xl font-hairline">GraphQL Query Sample</h2>

        <code className="text-left flex flex-row justify-center border rounded my-5 p-5 select-all">
          <pre>{querySample}</pre>
        </code>

        <p>
          Make a POST request to{" "}
          <span className="select-all underline">
            https://covid19api-graphql.netlify.app/.netlify/functions/graphql
          </span>{" "}
          with the query sample as the body
        </p>
      </section>
    </main>

    <footer>
      <p>
        Data sourced from{" "}
        <a className="underline" href="https://covid19api.com/" rel="noopener noreferrer" target="_blank">
          covid19api.com
        </a>
      </p>

      <p>
        <a
          className="underline"
          href="https://github.com/brandon-julio-t/COVID-19-API-GraphQL"
          rel="noopener noreferrer"
          target="_blank"
        >
          Source Code
        </a>
      </p>
    </footer>
  </div>
);

const querySample = `
query {
  Summary {
    Global {
      NewConfirmed
      TotalConfirmed
      NewDeaths
      TotalDeaths
      NewRecovered
      TotalRecovered
    }
    Countries {
      Country
      CountryCode
      Slug
      NewConfirmed
      TotalConfirmed
      NewDeaths
      TotalDeaths
      NewRecovered
      TotalRecovered
      Date
    }
  }
}
`.trim();
