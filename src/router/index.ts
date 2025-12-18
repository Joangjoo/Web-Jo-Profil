import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import About from "../pages/About/About.vue";
import Lab from "../pages/Lab/Lab.vue";
import Projects from "../pages/Projects/Projects.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/education", name: "Education", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/experience", name: "Experience", component: Home },
  { path: "/lab", name: "Lab", component: Lab },
  { path: "/contact", name: "Contact", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
