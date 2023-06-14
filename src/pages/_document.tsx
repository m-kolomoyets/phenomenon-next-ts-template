import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta name="format-detection" content="telephone=no" />
                <meta name="color-scheme" content="light dark" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                {/* NOTE: Add fonts here if needed */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
