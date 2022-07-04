import '../styles/globals.css'
import 'styles/style.css'

// import font from fontsource.org
import "@fontsource/carter-one"

function MyApp({ Component, pageProps }) {
  return (
    <div className='background'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
