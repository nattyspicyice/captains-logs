const React = require('react')

class New extends React.Component {
    render(){
        return (
            <html>
                <h1>Adding a New Entry...</h1>
                <div>
                    <form action = "/logs" method="POST">
                        Title: <input type="title" name="title" /> <br />
                        Entry: <input type="textarea" name="entry" /><br />
                        Is The Ship Broken?: <input type="checkbox" name="shipIsBroken" /><br />
                        <input type='submit' name='submit' value="Submit" />
                    </form>
                    <a href="/logs">Back</a>
                </div>
            </html>
        )
    }
}

module.exports = New;