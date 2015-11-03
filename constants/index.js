const PATHS = {
  SCRIPTS: {
    ENTRY: '',
    DIST: '',
  },
  STYLES: {
    ENTRY: './src/lib/styles/index.styl',
    DIST: './dist/assets/styles/',
  },
  VIEWS: {
    ENTRY: './src/lib/views/**/*.jade',
    DIST: './dist/',
    IGNORE: [
      '!./src/lib/views/_includes/**',
      '!./src/lib/views/_layout.jade',
    ],
  },
  IMAGES: {
    ENTRY: './src/lib/images/*',
    DIST: './dist/assets/images/',
  },
}

const LOCALS = {
  PAGE_TITLE: 'Beau Charman',
  SITE_DESCIPTION: 'Beau Charman\'s portfolio page',
  YEAR: new Date().getFullYear(),
  GOOGLE_ANALYTICS: 'UA-48096735-1',
  PATHS: {
    IMAGES: 'assets/images',
    STYLES: 'assets/styles',
    SCRIPTS: 'assets/scripts',
  }
}

module.exports = {
  LOCALS,
  PATHS,
}
