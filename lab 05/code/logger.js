const debug = require('debug');

/**
 * Module logger
 */
module.exports = class Logger {

  constructor(prefix) {
    this._debug = debug(`${prefix}:DEBUG`);
    this._info = debug(`${prefix}:INFO`);
    this._warn = debug(`${prefix}:WARN`);
    this._error = debug(`${prefix}:ERROR`);
  }

  get debug() {
    return this._debug;
  }

  get info() {
    return this._info;
  }

  get warn() {
    return this._warn;
  }

  get error() {
    return this._error;
  }
}
