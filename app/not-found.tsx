'use client';

import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-slate-900">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700">
            Page Not Found
          </h2>
          <p className="text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-[#FFB800] hover:bg-[#e6a600] text-slate-900 font-semibold"
        >
          <Home className="mr-2 h-4 w-4" />
          Go Home
        </Button>
      </div>
    </div>
  );
}

