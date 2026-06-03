# AI 工程化与安全探索 · Slidev 演示

本目录是一个基于 [Slidev](https://sli.dev) 的技术分享 PPT 项目，涵盖 4 个主题：

1. **Claude `-p` 与 Claude 原生功能讲解**
2. **代码 MCP 开源框架对比 + 公司实践**
3. **AI 工程化探索**（内部中转站 / SkillHub / MCP 广场）
4. **AI 安全**（含 AI 幻觉攻击视频播放）

> 🔗 在线浏览：<https://dxsdyhm.github.io/aippt/>

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
# 或指定端口
npm run dev:3030
```

浏览器自动打开 <http://localhost:3030> 查看幻灯片。

### 构建静态站点

```bash
# 用于部署到 https://<user>.github.io/aippt/
npm run build

# 本地直接打开 dist/index.html（base=/）
npm run build:local
```

构建产物输出到 `dist/` 目录。

### 导出 PDF（可选）

```bash
npm install -D playwright-chromium
npm run export
```

## 📁 目录结构

```
.
├── slides.md                # 主幻灯片源文件（Markdown）
├── package.json             # 项目配置与依赖
├── vite.config.ts           # Vite 构建配置（public 资源 external）
├── index.html               # dev 入口
├── .github/workflows/       # GitHub Actions（自动部署 Pages）
├── public/
│   ├── files/               # 静态图片资源
│   │   ├── http.png
│   │   └── remote_claude_code.svg
│   └── videos/              # 视频资源
│       ├── ai-hallucination.mp4
│       └── ai_zhongzhuan.mp4
└── README.md                # 本文件
```

## 🌐 GitHub Pages 部署

仓库已配置 GitHub Actions：push 到 `main` 分支后自动构建并部署到 GitHub Pages。

- Workflow：`.github/workflows/deploy.yml`
- 访问地址：<https://dxsdyhm.github.io/aippt/>
- 启用方式：仓库 **Settings → Pages → Source** 选 `GitHub Actions`

## ⌨️ 操作快捷键

| 键 | 作用 |
|----|------|
| `→` / `Space` | 下一页 |
| `←` | 上一页 |
| `f` | 全屏 |
| `o` | 大纲 / 演讲者预览 |
| `g` | 跳转（输入页码） |
| `d` | 切换深色 / 浅色模式 |
| `?` | 查看所有快捷键 |

## 🛠️ 二次定制

- 修改主题：编辑 `slides.md` 顶部的 `theme: default`
- 添加图标：使用 `<mdi-icon-name />`（需 `@iconify-json/mdi`）
- 调整动画：使用 `v-click` / `<v-clicks>` 指令
- 添加新页：复制 `---` 分隔符的页模板
- 部署路径变更：修改 `package.json` 里 `build` 脚本的 `--base` 参数

## 📚 相关资源

- Slidev 官方文档：<https://sli.dev>
- Claude Code 文档：<https://docs.claude.com/claude-code>
- MCP 协议：<https://modelcontextprotocol.io>
