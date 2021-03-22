import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Clark Eidt: The Donut King</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Meet Huron County's<br/>
          "Donut King":
        </h1>
        <div class="king-img-container">
          <img class="king-img" src="the_king.png" alt="Clark Eidt sitting in chair while smiling"/>
        </div>
        <h2>Clark Eidt.</h2>
        <p className="description">
          I am Clark Eidt. I have been making donut holes as a hobby since my retirement of 57 years in the auto repair business. This hobby began in 2010. After moving from Sebewaing to Pigeon in 2016, they named me the "Donut King" here in Pigeon, MI. I usually make 2 to 4 batches per month. This is all done sitting down from the seat of my mobility scooter due to neuropathy. My dear wife, Barb, is my aid in washing the dishes as I cannot stand.
        </p>

        <div className="grid">
          <a href="pages/recipe.js" className="card">
            <h3>Donut Hole Ingredients &rarr;</h3>
            <p>Find out what's inside these delectable dough balls.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn How to Make Them &rarr;</h3>
            <p>Check out the process I use to make these irresistable treats!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>See Testimonials &rarr;</h3>
            <p>Discover what others are saying about these amazing donut holes.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Order a Dozen! :) &rarr;</h3>
            <p>
              Purchase some donut holes to support my hobby!
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0 0 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin-bottom: 50px;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          margin-bottom: 40px;
          padding: 0 5.0rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .king-img {
          width: 100%;
        }

        .king-img-container {
          padding: 100px;
          max-width: 100%;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        h2 {
          font-size: 4.0rem;
        }
      `}</style>
    </div>
  )
}
