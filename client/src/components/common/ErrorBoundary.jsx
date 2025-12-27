import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
        this.setState({
            error,
            errorInfo,
        })
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center px-4 bg-bg-primary">
                    <div className="max-w-lg w-full bg-bg-secondary rounded-xl p-8 border border-white/10">
                        <div className="text-center">
                            <div className="mb-4">
                                <svg
                                    className="mx-auto h-16 w-16 text-red-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>

                            <h1 className="text-3xl font-bold text-text-primary mb-2">
                                Oops! Something went wrong
                            </h1>

                            <p className="text-text-secondary mb-6">
                                We're sorry, but something unexpected happened. Please try refreshing the page.
                            </p>

                            {import.meta.env.DEV && this.state.error && (
                                <div className="text-left mb-6 p-4 bg-bg-tertiary rounded-lg">
                                    <p className="text-sm font-mono text-red-400 mb-2">
                                        {this.state.error.toString()}
                                    </p>
                                    {this.state.errorInfo && (
                                        <pre className="text-xs text-text-muted overflow-auto max-h-40">
                                            {this.state.errorInfo.componentStack}
                                        </pre>
                                    )}
                                </div>
                            )}

                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={this.handleReset}
                                    className="btn-primary"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="btn-secondary"
                                >
                                    Go Home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export { ErrorBoundary }
