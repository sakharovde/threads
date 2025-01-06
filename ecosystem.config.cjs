module.exports = {
  apps: [
    {
      name: 'Vite',
      script: 'yarn vite',
    },
    {
      name: 'TypesScript',
      script:
        'yarn tsc --noEmit --watch --preserveWatchOutput --skipLibCheck --project tsconfig.app.json',
    },
  ],
};
