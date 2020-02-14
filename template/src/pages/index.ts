import * as React from "react";
import { renderRoutes } from "react-router-config";
import { ROUTES } from "./routes";

export const Pages: React.FC = () => renderRoutes(ROUTES);
