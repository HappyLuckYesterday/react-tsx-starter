import React from "react";
import { HttpService, LanguageService, LoggerService } from './shared';

// TODO - search if possible default value?

// const services = {
// 	httpService: new HttpService(),
// 	loggerService: new LoggerService(),
// }

export const AppContext = React.createContext<{
	httpService: HttpService,
	loggerService: LoggerService,
	languageService: LanguageService
}>(null);
