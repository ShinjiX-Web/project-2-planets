const UserProfile = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="row text-center">
                    <img src="https://i.ibb.co/2c362Xy/Untitled-design-4.png" className="w-50 img-fluid "></img>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Name</label>
                        <input type="text"></input>
                    </div>
                    <div className="col">
                        <label>LastName</label>
                        <input type="text"></input>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default UserProfile