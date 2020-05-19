import { useResponsive, getAsset } from '../utils';
import workExperiences from '../datas/workExperiences';
import portfolio from '../datas/portfolio';

function WorkItem({ id, title }) {
  return (
    <div
      style={{
        width: '100%',
        flexDirection: 'column',
        padding: '20px 15px',
        marginBottom: '15px',
        borderRadius: '15px',
        backgroundColor: 'rgb(28, 44, 53);',
      }}
    >
      {/* <span>{workPeriod}</span> */}
      <p style={{ margin: '10px 0', fontSize: '1.8rem', fontWeight: 700 }}>{title}</p>
      {/* <span>Roles: {jobDesc.length > 0 ? jobDesc.join(', ') : '*Coming soon'}</span> */}
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

function WorkExperiences() {
  const RX = useResponsive({
    small: { min: 0, max: 489 },
    medium: { min: 490, max: 699 },
    large: { min: 700, max: Infinity },
  });

  return (
    <article>
      <div className="wrapper">
        <h5 style={{ margin: '15px 0' }}>My Portfolio: </h5>
        <div className="flex" style={{ width: '100%', flexDirection: 'column' }}>
          <div
            style={{
              position: 'relative',
              height: 481.5,
              maxHeight: '48vw',
              flexDirection: 'column',
              marginBottom: '15px',
              borderRadius: '15px',
              padding: '15px',
              backgroundColor: 'rgb(28, 44, 53);',
              overflow: 'hidden',
            }}
          >
            <div style={{ flex: 1, backgroundColor: 'red', overflow: 'hidden', borderRadius: '15px' }}>
              <img src={getAsset('images/portfolio/Mindtrex.png')} alt="" style={{ width: '100%' }} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.55)',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  margin: '0 10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >{`<`}</span>
              <span
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  margin: '0 10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >{`>`}</span>
              <div
                style={{
                  height: 109,
                  maxHeight: '10vw',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '10px 25px',
                }}
              >
                <div>
                  <span style={{ fontSize: '3vw' }}>
                    Mindtrex Course Online
                    <span style={{ fontSize: '1.8vw' }}> as React Native Developer</span>
                  </span>
                </div>
                <span style={{ fontSize: '1.3vw', opacity: 0.5 }}>Mobile Application</span>
              </div>
            </div>
          </div>
          {/* <div
            style={{
              display: 'inline-grid',
              gridTemplateColumns: RX.select({
                small: 'repeat(1, 1fr)',
                medium: 'repeat(2, 1fr)',
                other: 'repeat(3, 1fr)',
              }),
              gridGap: 20,
            }}
          >
            {portfolio[0].projets.map(item => (
              <WorkItem {...item} />
            ))}
          </div> */}
        </div>
      </div>
    </article>
  );
}

export default WorkExperiences;
