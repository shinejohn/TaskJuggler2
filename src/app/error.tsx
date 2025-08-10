'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Application Error</h2>
        <p className="text-gray-700 mb-4">
          {error.message || 'Something went wrong!'}
        </p>
        {error.stack && (
          <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto mb-4">
            {error.stack}
          </pre>
        )}
        <button
          onClick={reset}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  )
}