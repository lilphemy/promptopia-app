import '@/styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: "newpromptopia",
  description: "Discover & share new AI prompt!"
}

const RootLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout