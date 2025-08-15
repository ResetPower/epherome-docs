import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitepressConfig = defineConfig({
  title: "Epherome",
  lastUpdated: true,
  srcDir: "./src",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "用户手册", link: "/usr/" },
      { text: "开发文档", link: "/dev/" },
      { text: "创世指南", link: "/mc/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/ResetPower/Epherome" },
    ],
    editLink: {
      pattern:
        "https://github.com/ResetPower/epherome-docs/edit/main/src/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最近更新于",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(vitepressConfig, [
    {
      scanStartPath: "src/usr",
      resolvePath: "/usr/",
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      collapsed: false,
    },
    {
      scanStartPath: "src/dev",
      resolvePath: "/dev/",
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      collapsed: false,
    },
    {
      scanStartPath: "src/mc",
      resolvePath: "/mc/",
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      collapsed: false,
    },
  ]),
);
