import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = (props) => (
    <div className='layout'>
    <Header user={props.user} />
    <Nav user={props.user}/>
        <div className="layout-children">
            {props.children}
        </div>
        <Footer user={props.user}/>
    </div>
)

export default Layout
