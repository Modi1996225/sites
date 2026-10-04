# sites

一个托管在 GitHub Pages 上的静态站点骨架，纯 HTML / CSS / JS，无需构建步骤。

## 本地预览

直接双击 `index.html`，或在目录里起一个静态服务器：

```powershell
python -m http.server 8000   # 然后打开 http://localhost:8000
```

## 部署

仓库已开启 GitHub Pages，来源为 `main` 分支根目录。

- 修改文件
- 提交并推送到 `main`
- 约 1 分钟后线上自动更新

线上地址：https://modi1996225.github.io/sites/

## 目录结构

```
.
├─ index.html            # 首页
├─ assets/
│  ├─ css/styles.css     # 样式
│  └─ js/main.js         # 脚本
└─ README.md
```

## 换成自己的内容

1. 改 `index.html` 里的文案和版块
2. 改 `assets/css/styles.css` 顶部的配色变量（`--accent` 等）
3. 需要新页面就加 `about.html` 之类的文件，并链接过去
