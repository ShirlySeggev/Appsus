const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AboutUs } from './pages/AboutUs.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import {Home} from './pages/Home.jsx'


export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>

            <main>
                <Switch>
                    {/* <Route component={BookDetails} path="/book/:bookId" /> */}
                    {/* <Route component={BookAdd} path="/add" /> */}
                    {/* <Route component={BookApp} path="/book" /> */}
                    <Route component={AboutUs} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>

            <footer>
                coffeerights &copy;
            </footer>
        </Router>

    )
}


