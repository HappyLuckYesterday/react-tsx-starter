export class LoggerService {

	logType = { log: 'log', info: 'info', warn: 'warn', debug: 'debug', error: 'error' };

	log(...args: Array<any>) {
		this._doLog(this.logType.log, args);
	}

	info(...args: Array<any>) {
		this._doLog(this.logType.info, args);
	}

	warn(...args: Array<any>) {
		this._doLog(this.logType.warn, args);
	}

	debug(...args: Array<any>) {
		this._doLog(this.logType.debug, args);
	}

	error(...args: Array<any>) {
		this._doLog(this.logType.error, args);
	}

	_doLog(logType, args) {
		switch (logType) {
			case this.logType.log:
				console.log.apply(console, args);
				break;
			case this.logType.info:
				console.info.apply(console, args);
				break;
			case this.logType.warn:
				console.warn.apply(console, args);
				break;
			case this.logType.debug:
				console.debug.apply(console, args);
				break;
			case this.logType.error:
				console.error.apply(console, args);
				break;
		}
	}
}
