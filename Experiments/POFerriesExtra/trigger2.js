module.exports = function activation (options, cb) { // eslint-disable-line no-unused-vars
  require("@qubit/remember-preview")();
  if (/\?qubit_liveFareFinderPreview/i.test(window.location.href) && window.location.href.indexOf('qa1') > -1) {
    cb();
  }
}
 