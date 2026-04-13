import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error capturado por ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-600 bg-red-50 dark:bg-red-900 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">¡Algo salió mal!</h2>
          <p>Por favor recarga la página o vuelve más tarde.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary