import React from 'react'

export class List extends React.Component {
    state = {
        data: [],
        isLoading: true,
    }

    componentDidMount() {
        fetch('http://localhost:3000/countries')
        .then(response => response.json())
        .then(response => {
            this.setState({
                isLoading: false,
                data: response,
            })
        })
        
        
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? 'Data is loading' : (
                    this.state.data.map(el => (
                        <div key={el.id}>
                            {el.name}
                            {' - '}
                            {el.intIdx}
                            {' - '}
                            {el.areaSqKm}
                            {' - '}
                            {el.mainlang}
                        </div>
                    ))
                )}
            </div>
        );
    }
}