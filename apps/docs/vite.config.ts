import { defineConfig, mergeConfig } from 'vite';
import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ~~ Generated by projen. To modify, edit .projenrc.js and run "projen".
const defaults: UserConfig = {
  plugins: [
    react({
      "include": [
        "*.ts",
        "*.tsx",
        "*.mdx"
      ],
      "exclude": []
    }),
  ]
};

export default defineConfig(mergeConfig(defaults, {}, true));
