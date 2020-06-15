import React from "react";

export default () => (
  <div className="h-screen w-screen flex flex-col justify-center items-center">
    <div className="text-center">
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
      </main>

      <footer className="mt-32">
        <p>
          Data sourced from{" "}
          <a className="underline" href="https://covid19api.com/" rel="noopener noreferrer" target="_blank">
            covid19api.com
          </a>
        </p>

        <p>
          <a className="underline" href="https://covid19api.com/" rel="noopener noreferrer" target="_blank">
            Source Code
          </a>
        </p>
      </footer>
    </div>
  </div>
);
