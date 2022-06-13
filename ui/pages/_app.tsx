// import App from 'next/app'
import { Layout } from 'antd'
import CERN_FOOTER from '../src/components/CERN_FOOTER'
import CERN_TOOLBAR from '../src/components/CERN_TOOLBAR'
import '../styles/index.css'
import 'antd/dist/antd.css';


function MyApp({ Component, pageProps }) {
  return <Layout className='layout'>
          <CERN_TOOLBAR/>
          <Layout.Content style={{marginTop:"45px"}}>
            <Component {...pageProps} />
          </Layout.Content>
          <CERN_FOOTER/>
          </Layout>

}

export default MyApp