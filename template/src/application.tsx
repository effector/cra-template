import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import { GenericTemplate } from "./ui";
import { Pages } from "./pages";

export const Application: React.FC = () => (
  <BrowserRouter>
    <GenericTemplate>
      <Pages />
    </GenericTemplate>
  </BrowserRouter>
);
