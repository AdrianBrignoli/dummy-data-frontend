'use client';
import { ErrorBoundary } from './ErrorBoundary';

export function GenericErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      fallback={
        <div className="flex flex-col items-center justify-center p-8">
          <h2 className="text-xl mb-4 text-gray-200">Something went wrong</h2>
          <p className="text-gray-400 mb-4">
            We apologize for the inconvenience. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
