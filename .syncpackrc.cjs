/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ['dev', 'prod'],
  source: ['package.json', 'src/*/package.json', 'docs/package.json'],
  sortFirst: [
    'name',
    'version',
    'description',
    'homepage',
    'packageManager',
    'license',
    'private',
    'author',
    'keywords',
    'sideEffects',
    'main',
    'module',
    'types',
    'exports',
    'repository',
    'engines',
    'workspaces',
    'scripts',
    'peerDependencies',
    'dependencies',
    'devDependencies',
  ],
  sortAz: [
    'contributors',
    'dependencies',
    'devDependencies',
    'keywords',
    'peerDependencies',
    'resolutions',
  ],
  versionGroups: [
    {
      packages: ['docs'],
      dependencies: [
        '@mantine/store',
        '@mantine/styles-api',
        '@mantine/code-highlight',
        '@mantine/core',
        '@mantine/ds',
        '@mantine/hooks',
        '@mantine/notifications',
        '@mantine/spotlight',
        '@mantine/carousel',
        '@mantine/dropzone',
        '@mantine/form',
        '@mantine/nprogress',
        '@mantine/dates',
        '@mantine/modals',
        '@mantine/tiptap',
      ],
      isIgnored: true,
    },
  ],
};

module.exports = config;
