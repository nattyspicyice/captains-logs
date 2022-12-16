const React = require('react')

class New extends React.Component {
    render(){
        return (
            <html>
                <div>
                    <form action = "/logs" method="POST">
                        Title: <input type="title" name="name"/> <br />
                        Entry: <input type="textarea" /><br />
                        Is The Ship Broken?: <input type="checkbox" /><br />
                        <input type='submit' name='submit' value="Submit" />
                    </form>
                </div>
            </html>
        )
    }
}

module.exports = New;