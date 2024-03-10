// It helps to set types with autocomplete for NODE_ENV environment variable.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Environment.
      NODE_ENV: 'development' | 'production' | 'test';
      APP_ENV: 'dev' | 'staging' | 'qa' | 'production';
      DEBUG: string;

      // API.
      API_BASE_URL: string;
    }
  }
}

export {};
