import React from "react"
export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }
    render() {
        if (this.state.hasError) {
            return <h1 style={{color: 'red'}}>Ошибка!!!</h1>
        } else {
            return this.props.children
        }

    }
}
