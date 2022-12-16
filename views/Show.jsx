import React, {Component} from "react"

class Show extends Component {
    render(){
        const logs = this.props.logs
        return (
            <div>
                <h1>Captain's Logs</h1>
                <h2>{logs.title}</h2>
                <p>{logs.entry}</p>
                <p>{logs.shipIsBroken?'Ship is broken': "Ship is not broken"}</p><br />
                <a href="/logs">Back</a>
            </div>
        )
    }
}

module.exports = Show