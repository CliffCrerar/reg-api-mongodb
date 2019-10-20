export default ({ state, cookies }) => {
    
    return (
        <React.Fragment>
            <div className="container">
                <hr />
                <div>
                    <h5>Authentication state</h5>
                    <div className="ml-3">
                        LoggedIn: {state.loggedIn}
                    </div>
                </div>
                <hr />
                <div className="mt-3">
                    <h5>Cookies</h5>
                    <div>
                        {cookies}
                    </div>
                </div>
                <hr />
                <div>
                    <h5>Request Return</h5>
                    <div>{state.results}</div>
                </div>
                <hr />
            </div>
        </React.Fragment>
    )
}