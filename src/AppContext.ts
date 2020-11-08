import React from "react";
import { HttpService } from './shared';

export const AppContext = React.createContext<{ httpService: HttpService }>(null);
