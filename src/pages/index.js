import Head from 'next/head';
import Layout from '../templates/Layout';
import { getAsset } from '../utils';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import WorkExperiences from '../components/WorkExperiences';
import Portfolio from '../components/Portfolio';

function Home() {
  return (
    <div>
      <Head>
        <title>Ways To Geek</title>
        <link rel="icon" href={getAsset('favicon.ico')} />
      </Head>
      <Layout>
        <div className="container">
          <Navbar />

          <article>
            <div className="flex wrapper">
              <Card
                style={{
                  width: '100%',
                  flexDirection: 'column',
                  flex: 1,
                  padding: '50px 25px',
                  justifyContent: 'center',
                  marginBottom: 50,
                }}
              >
                <div
                  style={{
                    display: 'block !important',
                    position: 'relative',
                    width: '250px',
                    height: '250px',
                    overflow: 'hidden',
                    borderRadius: '125px',
                  }}
                >
                  <img src={getAsset('me.jpg')} alt="" style={{ position: 'absolute', top: -29, width: '100%' }} />
                </div>
                <span style={{ margin: '30px 0 0', textAlign: 'center', fontSize: '4rem', fontWeight: 500 }}>
                  Amin Yusuf
                </span>
                <span style={{ margin: '15px 0 30px', textAlign: 'center', fontSize: '1.8rem' }}>
                  Software Engineer
                </span>
                <div className="flex" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div
                    style={{ margin: '0 10px', backgroundColor: '#CCC', padding: 10, borderRadius: 3, color: '#000' }}
                  >
                    Facebook
                  </div>
                  <div
                    style={{ margin: '0 10px', backgroundColor: '#CCC', padding: 10, borderRadius: 3, color: '#000' }}
                  >
                    Twitter
                  </div>
                  <div
                    style={{ margin: '0 10px', backgroundColor: '#CCC', padding: 10, borderRadius: 3, color: '#000' }}
                  >
                    Linkedin
                  </div>
                </div>
              </Card>
            </div>
          </article>

          <WorkExperiences />
          <Portfolio />

          <div style={{ backgroundColor: 'rgb(28, 44, 53)' }}>
            <div className="wrapper" style={{ padding: '40px 0' }}>
              <span>Develop with Love</span>
              <p>@WaysToGeeks</p>
              <span>Thanks to NextJS, GhPages, and Jost*</span>
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          min-width: 100vw;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default Home;
