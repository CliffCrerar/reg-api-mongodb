import InfoIcon from './info-icon';
export default (props) => {
    return(
    <div className="card w-30 m-auto">
        <form method="POST" className="card-body" action={props.callResource}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input required type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
            </div>
            <hr />
            <div className="d-flex align-items-center">
                <div>
                    <InfoIcon height={'50'} width={'50'} />
                </div>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <hr />
            <div className="text-center">
                <button id="logInBtn" type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
)}