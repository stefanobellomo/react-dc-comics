import dc_logo from '../assets/img/dc-logo.png'
import Nav from "./Nav";

export default function Header({ menu }) {

    return (<header>
        <div className='container-page d-flex align-items-center justify-content-between'>
            <img src={dc_logo} className='head-logo' alt="logo" />
            <Nav menu={menu} />
        </div>
    </header>)
}