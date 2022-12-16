import React, {Component} from "react"

class Index extends Component {
    render() {
        const logs = this.props.logs
        return (
        <div>
            <nav>
                <a href="/logs/new">Add an Entry</a>
            </nav>
            <h1>Captain's Logs</h1>
            <ul>
                {logs.map((logs, i)=> {
                    return(
                        <li key={i}>
                            <a href={`/logs/${logs.id}`}>{logs.title}</a><br />
                            <a href = {`/logs/${logs._id}/edit`}>Edit Logs</a>
                            <form action ={`/logs/${logs._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="Delete Log" />
                            </form>
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
}

module.exports = Index