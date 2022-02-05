const Notify = (props) => {
    return(
        <div>
            <div className="flex flex-row">
                <h1>Notification</h1>
                <button onClick={props.Notification}>Cross</button>
            </div>
            <div>
                <div className="flex flex-row">
                    <div>
                        <img src="" alt="img" />
                    </div>
                    <div>
                        <h1>Subtitle 1</h1>
                        <p>Secondary text</p>
                    </div>
                    <div>
                        <button>Notification</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notify