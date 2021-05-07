const { Link } = ReactRouterDOM

export function Home() {
    return <section className="home-container">
        <div className="btns-container">
            <div className="home-keep-container">
                <button className="home-btn"><Link to="/keep"><i className="fa fa-sticky-note-o fa-home"></i></Link></button>
                <h1 className="home-h1">Miss Keep</h1>
            </div>
            <div className="home-mail-container">
                <button className="home-btn"><Link to="/mail"><i className="fa fa-envelope fa-home"></i></Link></button>
                <h1 className="home-h1">Mister Email</h1>
            </div>
            <div className="home-book-container">
                <button className="home-btn"><Link to="/book"><i className="fa fa-book fa-home"></i></Link></button>
                <h1 className="home-h1">Miss Book</h1>
            </div>

        </div>
        <img className="home-img" src="./assets/img/welcome.gif" />

    </section>
}

