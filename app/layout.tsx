import React from 'react';
import type { Metadata } from 'next';
import { baseUrl } from './sitemap';
import dynamic from 'next/dynamic';
import './styles/index.scss';
import '@teamimpact/veda-ui/lib/main.css';

// @NOTE: Dynamically load to ensure only CSR since these depends on VedaUI ContextProvider for routing...
const Header = dynamic(() => import('./components/header'), {
  ssr: false,
  loading: () => <p>Loading...</p>, // @NOTE @TODO: We need a loading state!!!
});

const Footer = dynamic(() => import('./components/footer'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl ?? 'http://localhost:3000'),
  title: {
    default: 'eoViz Storytelling Workshop - ESIP July 2025',
    template: '%s | eoViz Workshop',
  },
  description: 'Hands-on workshop for Earth scientists to create engaging data stories using eoViz/VEDA tools.',
  openGraph: {
    title: 'eoViz Storytelling Workshop - ESIP July 2025',
    description: 'Learn to transform your Earth science research into compelling interactive stories.',
    url: baseUrl,
    siteName: 'eoViz Workshop',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='minh-viewport display-flex flex-column'>
          {/* Simple eoViz banner */}
          <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '8px 0' }}>
            <div className='grid-container'>
              <div className='grid-row flex-justify-center'>
                <div className='text-center'>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>
                    Part of the eoViz platform • 
                    <a 
                      href='https://eoviz.com' 
                      style={{ color: '#2563eb', textDecoration: 'underline', marginLeft: '4px' }}
                      target='_blank' 
                      rel='noopener noreferrer'
                    >
                      View all tools
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Header />
          <main id='pagebody' className='flex-fill' tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
