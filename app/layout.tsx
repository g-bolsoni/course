import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Curso',
  description: 'Curso de Português',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
                  page_path: window.location.pathname,
                });
              `
            }}
          />
          {/* <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5JNVG6PP97');
          </script> */}
        </Head>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
