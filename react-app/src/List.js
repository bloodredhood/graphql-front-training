import React from 'react'

export class List extends React.Component {
    state = {
        data: [],
        isLoading: true,
    }

    componentDidMount() {
        fetch('http://universities.hipolabs.com/search?name=middle')
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
                        <div key={el.domains}>
                            {el.name}
                            {' - '}
                            {el.country}
                        </div>
                    ))
                )}
            </div>
        );
    }
}