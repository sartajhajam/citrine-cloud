'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertCircle className="h-12 w-12 text-red-600" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">
            Something went wrong!
          </h2>
          <p className="text-slate-600">
            An unexpected error occurred. Please try again.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-[#FFB800] hover:bg-[#e6a600] text-slate-900 font-semibold"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
            className="border-slate-300"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}


