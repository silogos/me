/* eslint-disable prettier/prettier */
import '../styles/normalize.css';
import { getAsset } from '../utils';

const FontFaces = () => (
  <style jsx global>{`
    .flex, .flex > * {
      display: flex;
    }

    @font-face {
      font-family: 'Jost';
      src: local('Jost* Book'),
        local('Jost-Book'),
        url('${getAsset('fonts/Jost-400-Book.woff2')}') format('woff2'),
        url('${getAsset('fonts/Jost-400-Book.woff')}') format('woff'),
        url('${getAsset('fonts/Jost-400-Book.ttf')}') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Jost';
      src: local('Jost* Medium'),
        local('Jost-Medium'),
        url('${getAsset('fonts/Jost-500-Medium.woff2')}') format('woff2'),
        url('${getAsset('fonts/Jost-500-Medium.woff')}') format('woff'),
        url('${getAsset('fonts/Jost-500-Medium.ttf')}') format('truetype');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Jost';
      src: local('Jost* Bold'),
        local('Jost-Bold'),
        url('${getAsset('fonts/Jost-700-Bold.woff2')}') format('woff2'),
        url('${getAsset('fonts/Jost-700-Bold.woff')}') format('woff'),
        url('${getAsset('fonts/Jost-700-Bold.ttf')}') format('truetype');
      font-weight: 700;
      font-style: bold;
    }
  `}</style>
)

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <FontFaces/>
      <Component {...pageProps} />
    </>
  )
}
