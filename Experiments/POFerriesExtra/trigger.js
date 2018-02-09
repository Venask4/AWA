function activation (options, cb) { // eslint-disable-line no-unused-vars
  require("@qubit/remember-preview")();
  if (window.location.href.indexOf('http://www.poferries.com/en/dover-calais') > -1 || window.location.href.indexOf('http://www.poferries.com/en/hull-rotterdam') > -1 || window.location.href.indexOf('http://www.poferries.com/en/hull-zeebrugge') > -1 || window.location.href.indexOf('http://www.poferries.com/en/cairnryan-larne') > -1 || window.location.href.indexOf('http://www.poferries.com/en/liverpool-dublin') > -1) {
    cb();
  }
  else if (window.location.href == 'http://www.poferries.com/quote') {
    cb();
  }
  else if (/\?qubit_livePreview/i.test(window.location.href)) {
    cb();
  }
}
 