/**
 * PdfViewer — Campo Real AGM 2026
 * Opens a PDF inline in the browser via an iframe.
 * URL is passed as the `?file=` query parameter (base64-encoded).
 * This avoids the browser auto-downloading the PDF when linking directly to a CDN URL.
 */

import { useEffect, useState } from 'react';

export default function PdfViewer() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('file');
    if (encoded) {
      try {
        const decoded = atob(encoded);
        setPdfUrl(decoded);
      } catch {
        setError(true);
      }
    } else {
      setError(true);
    }
  }, []);

  if (error || !pdfUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
          {error ? 'Invalid PDF link.' : 'Loading…'}
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src={pdfUrl}
        title="Proxy Form"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}
