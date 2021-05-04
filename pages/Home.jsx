const { Link } = ReactRouterDOM

export function Home() {
    return <section className="home-container">
        <h1>Welcome!!!</h1>
        <h3> <Link to="/keep">MissKeep</Link></h3>
        <h3> <Link to="/mail">MissMail</Link></h3>
        <h3><Link to="/book">MissBooks</Link></h3>
        {/* <img src="/assets/img/hello.gif" /> */}
    </section>
}
