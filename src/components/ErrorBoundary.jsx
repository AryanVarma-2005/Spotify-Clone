import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-red-900 text-white p-10 flex flex-col items-start gap-4">
                    <h1 className="text-3xl font-bold">Something went wrong.</h1>
                    <h2 className="text-xl">Error: {this.state.error && this.state.error.toString()}</h2>
                    <details className="whitespace-pre-wrap bg-black p-4 rounded w-full overflow-auto">
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                    <button
                        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
                        onClick={() => window.location.reload()}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
