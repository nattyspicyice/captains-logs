import React, {Component} from 'react'

class Edit extends Component {
    render(){
        const {logs} = this.props
        console.log(logs)
        return (
            <html>
                <div>
                    <nav>
                        <a href="/logs">Back</a>
                    </nav>
                    <h1>Edit Log</h1>
                    <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
                        Title: <input type="title" name="title" defaultValue={logs.title} /> <br />
                        Entry: <input type="textarea" name="entry" defaultValue={logs.entry} /><br />
                        Is The Ship Broken?: <input type="checkbox" name="shipIsBroken" defaultValue={logs.shipIsBroken} /><br />
                        <input type='submit' name='submit' value="Submit" />
                    </form>
                </div>
            </html>
        )
    }
}

export default Edit;