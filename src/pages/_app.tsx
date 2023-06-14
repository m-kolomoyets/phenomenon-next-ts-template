import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from './page';
import '@/styles/globals.css';

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout =
        Component.getLayout ||
        ((page) => {
            return page;
        });

    return (
        <>
            <Head>
                <title>PunkPanda NFT Marketplace</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            </Head>
            {/* Add Providers here of needed */}
            {getLayout(<Component {...pageProps} />)}
        </>
    );
};

export default App;
