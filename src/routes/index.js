import loadable from "loadable-components";
import Loading from "./loader";

export const Home = loadable(() => import("../pages/home"),{
    LoadingComponent: Loading
});

export const About = loadable(() => import("../pages/about"),{
    LoadingComponent: Loading
});

export const Connect = loadable(() => import("../pages/connect"),{
    LoadingComponent: Loading
});

export const Portfolio = loadable(() => import("../pages/portfolio"),{
    LoadingComponent: Loading
});

export const Fashion = loadable(() => import("../pages/fashion"),{
    LoadingComponent: Loading
});

export const FashionDesign = loadable(() => import("../pages/fashion/design/index"),{
    LoadingComponent: Loading
});

export const FashionDesignContent= loadable(() => import("../pages/fashion/design/content"),{
    LoadingComponent: Loading
});

export const FashionIllustrations = loadable(() => import("../pages/fashion/illustrations"),{
    LoadingComponent: Loading
});

export const Arts = loadable(() => import("../pages/art"),{
    LoadingComponent: Loading
});

export const DigitalArts = loadable(() => import("../pages/art/digitalarts/index"),{
    LoadingComponent: Loading
});

export const DigitalArtsContent= loadable(() => import("../pages/art/digitalarts/content"),{
    LoadingComponent: Loading
});

export const Others = loadable(() => import("../pages/others"),{
    LoadingComponent: Loading
});

export const Archive = loadable(() => import("../pages/archive"),{
    LoadingComponent: Loading
});

export const ArchiveFashionCollections = loadable(() => import("../pages/archive/fashion"),{
    LoadingComponent: Loading
});

export const ArchiveFashionCollectionsContent = loadable(() => import("../pages/archive/fashion/content"),{
    LoadingComponent: Loading
});

export const Photography = loadable(() => import("../pages/photography"),{
    LoadingComponent: Loading
});

export const PhotographyContent2018 = loadable(() => import("../pages/photography/content2018"),{
    LoadingComponent: Loading
});

export const PhotographyContent2017 = loadable(() => import("../pages/photography/content2017"),{
    LoadingComponent: Loading
});
