import Head from 'next/head';
import Layout from '../templates/Layout';
import { getAsset } from '../utils';

function ArticleItem({ workPeriod, name, jobDesc }) {
  return (
    <div
      style={{
        padding: '20px 15px',
        marginTop: '15px',
        borderRadius: '15px',
        backgroundColor: 'rgb(28, 44, 53);',
      }}
    >
      <span>{workPeriod}</span>
      <p style={{ margin: '10px 0', fontSize: '1.8rem', fontWeight: 700 }}>{name}</p>
      <span>Roles: {jobDesc.join(', ')}</span>
      {/* <p style={{ margin: 0 }}>Projets:</p> */}
      {/* <ul>
				<li>Website Pendidikan SECAPA AD (Website CodeIgniter)</li>
				<li>Inventory Management Apps (React Native)</li>
				<li>Quran Kareem (React Native)</li>
				<li>Islamic Mind (React Native)</li>
				<li>My Samator (React Native)</li>
				<li>Bonian e-commerce (React Native)</li>
			</ul> */}
    </div>
  );
}

function Home() {
  const workExperiences = [
    {
      workPeriod: 'Sep 2016 - Jul 2019',
      name: 'PT Aegis Ultima Teknologi, Software Engineer',
      role: 'Junior Programmer',
      jobDesc: [
        'Development Application',
        'Testing',
        'Maintenance',
        'User Interface Design',
        'Preparation of Technical Documentation and User Guides',
        'Training and Customer Support',
      ],
      projets: [
        'Website Pendidikan SECAPA AD (Website CodeIgniter)',
        'Inventory Management Apps (React Native)',
        'Quran Kareem (React Native)',
        'Islamic Mind (React Native)',
        'My Samator (React Native)',
        'Bonian e-commerce (React Native)',
      ],
    },
    {
      workPeriod: 'Aug 2019 - Now',
      name: 'PT Asuransi Jiwa Generali Indonesia',
      role: 'React Native Consultant',
      jobDesc: [
        'Development Application',
        'Testing',
        'Maintenance',
        'User Interface Design',
        'Preparation of Technical Documentation and User Guides',
      ],
      projets: [
        'Website Pendidikan SECAPA AD (Website CodeIgniter)',
        'Inventory Management Apps (React Native)',
        'Quran Kareem (React Native)',
        'Islamic Mind (React Native)',
        'My Samator (React Native)',
        'Bonian e-commerce (React Native)',
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Ways To Geek</title>
        <link rel="icon" href={getAsset('favicon.ico')} />
      </Head>
      <Layout>
        <div className="container">
          <header>
            <div className="wrapper">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgb(28, 44, 53);',
                  padding: '15px',
                  flexDirection: 'row',
                  borderRadius: '15px',
                }}
              >
                <div className="header-logo" style={{ flexDirection: 'row' }}>
                  <img src={getAsset('logo.png')} alt="" />
                </div>
                <div className="title">
                  <span>Ways to Geek</span>
                </div>
              </div>
              <nav className="nav">
                <ul>
                  <li>Articles</li>
                  <li>Notes</li>
                  <li>About</li>
                  <li>Ebook</li>
                </ul>
              </nav>
            </div>
          </header>

          <article>
            <div className="wrapper" style={{ flexDirection: 'row' }}>
              <div
                style={{
                  flex: 1,
                  borderRadius: 15,
                  background: '#1c2c35',
                  marginRight: 15,
                }}
              >
                <p>
                  {/* <h2>Hello, I'm Amin Yusuf</h2> */}
                  {/* <h2>Hi..!</h2> */}
                  {/* <h2>My name is Amin Yusuf, I'm Software engineer, work at  startup by name Lemonilo</h2> */}
                </p>
              </div>
              <div style={{ width: 290 }}>
                <h5 style={{ margin: 0 }}>Work Experiences: </h5>
                {workExperiences.map(item => (
                  <ArticleItem {...item} />
                ))}
              </div>
            </div>
          </article>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        header {
          // position: fixed;
          padding: 45px 0;
          // left: 0;
          // right: 0;
          // z-index: 100;
        }

        header .wrapper {
          justify-content: space-between;
          align-items: center;
        }

        header .header-logo {
          width: 50px;
          height: 50px;
          margin-right: 30px;
        }
        header .header-logo > img {
          max-width: 100%;
        }

        header .title {
          // flex: 1;
        }

        header .title span {
          color: rgb(236, 248, 255);
          font-size: 18px;
          font-weight: 700;
        }

        header .nav ul {
          flex: 1;
          margin: 0;
          list-style: none;
        }

        header .nav ul li {
          float: left;
          margin-left: 15px;
          padding: 10px;
          background-color: transparent;
          border-radius: 4px;
          color: rgb(236, 248, 255);
          font-size: 16px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export default Home;
