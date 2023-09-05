import {Inter} from 'next/font/google'
import {ServerThemeProvider} from 'next-themes'
import TopNavigation from '@/components/organisms/top-navigation'
import ThemerProvider from '@/components/providers'
import FooterSection from '@/components/organisms/footer-section'
import './globals.css'
// import '@radix-ui/themes/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Cross Conference | The Kings Men',
  description:
    'A call to repentance and faith in Jesus -\n' +
    '\n' +
    '“The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.” - Mark 1:15',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider enableSystem={true} defaultTheme="light">
      <html lang="en">
        <head>
          <title>The Cross Conference | The Kings Men</title>
          <meta name="title" content="The Cross Conference | The Kings Men" />
          <meta
            name="description"
            content="A call to repentance and faith in Jesus -

“The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.” - Mark 1:15"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thecrosscon.com/" />
          <meta
            property="og:title"
            content="The Cross Conference | The Kings Men"
          />
          <meta
            property="og:description"
            content="A call to repentance and faith in Jesus -

“The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.” - Mark 1:15"
          />
          <meta
            property="og:image"
            content="https://thecrosscon.com/images/logo.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://thecrosscon.com/" />
          <meta
            property="twitter:title"
            content="The Cross Conference | The Kings Men"
          />
          <meta
            property="twitter:description"
            content="A call to repentance and faith in Jesus -

“The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.” - Mark 1:15"
          />
          <meta
            property="twitter:image"
            content="https://thecrosscon.com/images/logo.png"
          />
        </head>
        <body suppressHydrationWarning={true} className={`${inter.className}`}>
          <ThemerProvider>
            <div id="app-root" className="app-default-layout overflow-x-hidden">
              <TopNavigation />
              {children}
              <FooterSection />
            </div>
          </ThemerProvider>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
