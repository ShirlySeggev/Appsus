const { NavLink, withRouter } = ReactRouterDOM
import { UserMsg } from './UserMsg.jsx';


function _AppHeader(props) {

    return (
        <nav className="header">
            <UserMsg />
            <h1>Appsus!</h1>
            <ul className="clean-list">
                <li><NavLink exact to="/"><i className="fa fa-home header-btn"></i></NavLink></li>
                <li><NavLink to="/about"><i className="fa fa-info-circle header-btn"></i></NavLink></li>
                <li onClick={() => {
                    props.history.goBack()
                }}><i className="fa fa-undo header-btn"></i></li>
            </ul>
        </nav>

    )
}

export const AppHeader = withRouter(_AppHeader);