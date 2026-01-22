import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import About from "../pages/About/About.vue";
import Certificates from "../pages/Certificates/Certificates.vue";
import Projects from "../pages/Projects/Projects.vue";
import Contact from "../pages/Contact/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/education", name: "Education", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/experience", name: "Experience", component: Home },
  { path: "/certificates", name: "Certificates", component: Certificates },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    { path: "/education", redirect: "/about#education" },
    { path: "/experience", redirect: "/about#experience" },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 100, // Offset for fixed navbar
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
