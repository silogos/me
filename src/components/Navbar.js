import { getAsset, useResponsive, flattenStyle } from '../utils';

function Navbar() {
  const routes = [
    { key: 1, title: 'Articles', link: '' },
    { key: 2, title: 'Notes', link: '' },
    { key: 3, title: 'About', link: '' },
    { key: 4, title: 'Ebook', link: '' },
  ];
  const RX = useResponsive({
    xsmall: { min: 0, max: 699 },
    small: { min: 700, max: 1023 },
    medium: { min: 1024, max: 1439 },
    large: { min: 1440, max: 1919 },
    xlarge: { min: 1920, max: Infinity },
  });

  return (
    <header>
      <div
        className="flex wrapper"
        style={flattenStyle([
          RX.select({ xsmall: { flexDirection: 'column' }, other: { flexDirection: 'row' } }),
          { justifyContent: 'space-between', margin: '20px auto' },
        ])}
      >
        <div
          style={flattenStyle([
            {
              alignItems: 'center',
              backgroundColor: 'rgb(28, 44, 53);',
              padding: '15px',
              flexDirection: 'row',
              borderRadius: '15px',
            },
            RX.select({ xsmall: { margin: '20px 0' } }),
          ])}
        >
          {/* <div style={{ flexDirection: 'row', width: 50, height: 50, marginRight: 30 }}>
          </div> */}
          <img style={{ width: 50, height: 50, marginRight: 30 }} src={getAsset('logo.png')} alt="" />
          <span
            style={{
              color: 'rgb(236, 248, 255)',
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Ways to Geek
          </span>
        </div>
        <div className="nav">
          {routes.map(route => (
            <span
              key={route.key}
              style={{ margin: '0 15px', color: 'rgb(236, 248, 255)', fontSize: 16, fontWeight: 500 }}
            >
              {route.title}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
