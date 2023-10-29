import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { ResumePage } from "../resume/resume";
import { WorkPage } from "../work/work";
import { Root } from "../root/root";
import { Redirect } from "../redirect/redirect";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Redirect />} />
    </Route>
  )
);
