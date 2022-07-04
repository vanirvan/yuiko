import '../styles/globals.css'
import 'styles/fonts.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='background'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
