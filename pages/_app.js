import '../styles/globals.css'
import '../styles/fonts.css'
import Layout from '../components/Layout'
import ProfileLayout from '../components/ProfileLayout'
import SingleCollectionLayout from '../components/SingleCollectionLayout'




function MyApp({ Component, pageProps,router }) {

  if (router.pathname.startsWith('/profile')) {
    return (
      <ProfileLayout>
        <Component {...pageProps} />
      </ProfileLayout>
             
      
    )
  }


return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
 
}

export default MyApp
