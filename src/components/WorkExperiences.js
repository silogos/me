import { useResponsive } from '../utils';
import workExperiences from '../datas/workExperiences';

function WorkItem({ contract, workPeriod, name, jobDesc, role }) {
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
      <span>{`${workPeriod} (${contract})`}</span>
      <p style={{ margin: '10px 0', fontSize: '1.8rem', fontWeight: 700 }}>
        {name}
        <span style={{ fontSize: '1.4rem' }}>{` as ${role}`}</span>
      </p>
      <span>Roles: {jobDesc.length > 0 ? jobDesc.join(', ') : '*Coming soon'}</span>
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
        <h5 style={{ margin: '15px 0' }}>Work Experiences: </h5>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: RX.select({
              small: 'repeat(1, 1fr)',
              medium: 'repeat(2, 1fr)',
              other: 'repeat(3, 1fr)',
            }),
            gridGap: 20,
          }}
        >
          {workExperiences.map(item => (
            <WorkItem {...item} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default WorkExperiences;
