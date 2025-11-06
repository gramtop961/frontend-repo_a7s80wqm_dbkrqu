import React from 'react';

class SectionBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('[SectionBoundary] Caught error in section:', this.props.name || 'Section', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800">
              <p className="font-semibold">Something went wrong loading {this.props.name || 'this section'}.</p>
              <p className="text-sm opacity-80">Please refresh the page or try again later.</p>
            </div>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default SectionBoundary;
