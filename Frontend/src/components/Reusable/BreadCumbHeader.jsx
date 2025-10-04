import React from 'react';

// Decorative SVG icon
const LeafIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`w-full h-full ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="15"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M410.7 201.2C339.6 201.2 314.9 83.1 256 83.1S172.4 201.2 101.3 201.2c-71.1 0-71.1 118.1 0 118.1 71.1 0 95.8 118.1 154.7 118.1S339.6 319.3 410.7 319.3c71.1 0 71.1-118.1 0-118.1Z"/>
    <path d="M256 512V0" />
  </svg>
);

const BreadcrumbHeader = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <header className="relative overflow-hidden bg-emerald-50 py-16 px-6 sm:px-10 lg:px-16">
      {/* Decorative leaf in background */}
      <div className="absolute right-0 bottom-0 opacity-30 text-emerald-400 w-72 h-72 sm:w-96 sm:h-96 transform translate-x-1/4 translate-y-1/4 rotate-[-20deg]">
        <LeafIcon className="stroke-2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm mb-4 text-green-700">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.path}>
              <a
                href={item.path}
                className={`hover:underline transition duration-150 ${
                  index === breadcrumbs.length - 1
                    ? 'font-semibold text-green-900'
                    : 'opacity-80'
                }`}
              >
                {item.label}
              </a>
              {index < breadcrumbs.length - 1 && <span>{'>'}</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Title & Subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-green-900 mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-green-800 opacity-80">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default BreadcrumbHeader;
