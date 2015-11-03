const LOCALS = {
  PAGE_TITLE: 'Beau Charman',
  SITE_DESCIPTION: 'Beau Charman\'s portfolio page',
  YEAR: new Date().getFullYear(),
}

const PATHS = {
  SRC: {
    SCRIPTS: '',
    STYLES: './src/lib/styles/index.styl',
    VIEWS: './src/lib/views/**/*.jade',
  },
  DIST: {
    SCRIPTS: '',
    STYLES: './dist/assets/styles/',
    VIEWS: './dist/',
  }
}

module.exports = {
  LOCALS,
  PATHS,
}
