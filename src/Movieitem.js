import React, { Component } from 'react'

export default class Movieitem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { id, title, overview, vote_average, poster_src } = this.props.movie
        return (
            <table key={id} style={{ textAlign: 'left' }}>
                <tbody>
                    <tr>
                        <td>
                            <img src={poster_src} />
                        </td>

                        <td>
                            <strong>{title}</strong>
                            <p> {overview} </p>
                            <p> <b>IMDb Rating</b> : {vote_average} </p>

                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
