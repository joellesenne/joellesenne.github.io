/* eslint-disable no-undef */
;(() => {
  // Directory
  const dir = {
    src: 'src/',
    build: 'dist/',
  }

  // Load Modules
  const { src, dest, series, watch } = require('gulp')
  const del = require('del')

  // Clean task
  function clean() {
    return del(dir.build)
  }

  // Copy task
  function copy() {
    return src(`${dir.src}**/*`).pipe(dest(dir.build))
  }

  // Watch for changes
  function watchTask() {
    watch(series(copy))
  }

  // Exports modules
  module.exports = {
    default: series(clean, copy),
    watch: watchTask,
  }
})()
