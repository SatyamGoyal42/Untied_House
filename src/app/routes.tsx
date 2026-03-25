import { createBrowserRouter } from "react-router";
import Root from "./Root";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BrandIdentityPage from "./pages/BrandIdentityPage";
import PhotographyContentPage from "./pages/PhotographyContentPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import WebDesignPage from "./pages/WebDesignPage";
import SelectedWorkPage from "./pages/SelectedWorkPage";
import AuraLifestylePage from "./pages/projects/AuraLifestylePage";
import MinimalistJournalPage from "./pages/projects/MinimalistJournalPage";
import UrbanRhythmPage from "./pages/projects/UrbanRhythmPage";
import ModernAestheticPage from "./pages/projects/ModernAestheticPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "services",
        Component: ServicesPage,
      },
      {
        path: "services/brand-identity",
        Component: BrandIdentityPage,
      },
      {
        path: "services/photography-content",
        Component: PhotographyContentPage,
      },
      {
        path: "services/social-media",
        Component: SocialMediaPage,
      },
      {
        path: "services/web-design",
        Component: WebDesignPage,
      },
      {
        path: "selected-work",
        Component: SelectedWorkPage,
      },
      {
        path: "selected-work/aura-lifestyle",
        Component: AuraLifestylePage,
      },
      {
        path: "selected-work/minimalist-journal",
        Component: MinimalistJournalPage,
      },
      {
        path: "selected-work/urban-rhythm",
        Component: UrbanRhythmPage,
      },
      {
        path: "selected-work/modern-aesthetic",
        Component: ModernAestheticPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
    ],
  },
]);