import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновляем состояние, чтобы показать, что произошла ошибка
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Вы можете добавить здесь логирование ошибки
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Возвращаем запасной интерфейс при возникновении ошибки
      return (
        <div>
          <h1>Что-то пошло не так.</h1>
          <p>Пожалуйста, обновите страницу или попробуйте позже.</p>
        </div>
      );
    }

    // Если ошибок нет, отображаем дочерние компоненты
    return this.props.children;
  }
}

export default ErrorBoundary;
