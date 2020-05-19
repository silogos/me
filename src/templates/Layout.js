export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 !important;
          font-family: 'Jost', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif';
          font-size: 10px;
          color: rgb(236, 248, 255);
        }

        body {
          background: linear-gradient(145.87deg, rgb(28, 42, 52) 10.36%, rgb(17, 26, 32) 100%);
        }

        * {
          box-sizing: border-box;
        }

        // .wrapper {
        //   display: flex;
        //   position: relative;
        //   margin: auto;
        //   width: 100%;
        //   max-width: 856px;
        //   box-sizing: border-box;
        //   padding: 0px 50px;
        // }

        .wrapper {
          display: flex;
          align-items: center;
          width: calc(100% - 50px);
          max-width: 856px;
          margin: 0 auto;
          flex-direction: column;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          font-style: normal;
          letter-spacing: 0em;
        }

        h1 {
          line-height: 9rem;
          font-size: 6.10352rem;
        }
        h2 {
          line-height: 6rem;
          font-size: 4.88281rem;
        }

        h3 {
          line-height: 6rem;
          font-size: 3.90625rem;
        }

        h4 {
          line-height: 6rem;
          font-size: 3.125rem;
        }

        h5 {
          line-height: 3rem;
          font-size: 2.5rem;
        }

        h6 {
          line-height: 3rem;
          font-size: 2rem;
        }

        p {
          line-height: 3rem;
          font-size: 1.6rem;
          font-weight: 400;
          font-style: normal;
          letter-spacing: 0em;
        }
      `}</style>
    </>
  );
}
