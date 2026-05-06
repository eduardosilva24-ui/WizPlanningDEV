// Runtime-safe configuration for non-module scripts.
(function setAppConfig() {
  const { protocol } = window.location;
  const openedAsFile = protocol === 'file:';
  const hostedOnGithubPages = window.location.hostname.endsWith('.github.io');
  // REST backend base, for example: 'https://wizplanning-api.onrender.com'
  // DISABLED: The app now uses ONLY Google Apps Script
  const deployedApiBase = '';
  // Google Apps Script backend base - REQUIRED for all functionality
  const deployedAppsScriptApiBase = 'https://script.google.com/macros/s/AKfycbyIIw0m25ZfrkLAaiowfQ4iovQmWGe_AVTvNzzo0cFsU67mNo56M-CPk9Q-TDdnI3ZA/exec';
  
  // Force Apps Script mode - ignore REST API and localStorage
  const configuredAppsScriptApiBase = deployedAppsScriptApiBase;

  window.APP_CONFIG = {
    API_BASE: '',
    APPS_SCRIPT_API_BASE: configuredAppsScriptApiBase.replace(/\/$/, ''),
    APPS_SCRIPT_MODE: true,
    STATIC_MODE: false
  };
})();
