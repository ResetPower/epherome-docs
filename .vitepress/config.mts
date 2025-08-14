import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Epherome",
  lastUpdated: true,
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "用户手册", link: "/usr/" },
      { text: "开发文档", link: "/dev/" },
      { text: "创世指南", link: "/mc/" },
    ],
    sidebar: {
      "/usr/": [
        { text: "欢迎", link: "/usr/" },
        { text: "简介", link: "/usr/intro" },
        { text: "快速开始", link: "/usr/quickstart" },
      ],
      "/dev/": [{ text: "欢迎", link: "/dev/" }],
      "/mc/": [{ text: "欢迎", link: "/mc/" }],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/ResetPower/Epherome" },
    ],
    editLink: {
      pattern:
        "https://github.com/ResetPower/epherome-docs/edit/main/src/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
});
