import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => (
    <div className='layout'>
    <Header user={props.user} />
        <div className="layout-children">
            {props.children}
        </div>
        <Footer user={props.user}/>
    </div>
)

export default Layout
