import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Global from '../components/global';
import CursorState from '../context/Cursor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CursorState>
      <Global>
        <Component {...pageProps} />
      </Global>
    </CursorState>
  );
}
export default MyApp;
