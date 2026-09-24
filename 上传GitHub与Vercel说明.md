# 上传 GitHub 并同步到 Vercel

推荐先通过 GitHub 分支生成 Vercel 预览，确认后再合并到正式分支。这样即使上传错文件，当前线上网站也不会立刻受到影响。

## 一、上传前准备

1. 打开桌面的 `hydroblok-3d-modular-preview` 文件夹。
2. 确认文件夹最外层能直接看到 `index.html`、`assets`、`viewer` 等内容。
3. 在 GitHub 仓库页面点击 **Code → Download ZIP**，先下载一份现有仓库备份。
4. 不要把整个 `hydroblok-3d-modular-preview` 外层文件夹套进仓库。仓库根目录必须直接看到 `index.html`。

## 二、创建安全预览分支

1. 进入目前连接 Vercel 的 GitHub 仓库。
2. 点击左上方当前分支名称（通常是 `main`）。
3. 新建分支，名称填写 `modular-catalog-preview`。
4. 切换到这个新分支，确认页面左上方显示的不是 `main`。

## 三、上传文件

1. 在新分支的仓库根目录点击 **Add file → Upload files**。
2. 打开桌面预览文件夹，选中里面的全部内容并拖入 GitHub 上传区，包括：
   - `index.html`
   - `assets` 文件夹
   - `viewer` 文件夹
   - `migration-manifest.json`
   - `README.md`
   - `上传GitHub与Vercel说明.md`
3. 等待全部文件上传完成，确认 `assets` 和 `viewer` 的子目录没有丢失。
4. Commit message 填写：`Migrate site to modular product catalog`
5. 点击 **Commit changes**。

提示：GitHub 上传同名路径时会更新文件，但不会自动删除仓库里已经存在、这次没有上传的旧文件。如果仓库当前只有一个旧版 `index.html`，不影响这次迁移；不要在未确认用途前批量删除其他文件。

## 四、在 Vercel 检查预览版

1. 打开 Vercel，进入对应项目的 **Deployments** 页面。
2. 找到分支 `modular-catalog-preview` 触发的 Preview Deployment。
3. 等待状态变成 **Ready**，打开预览网址。
4. 依次检查：
   - 首页产品系列与详情弹窗
   - 板材 3D 模型
   - 全屋 3D 模型
   - 六种语言切换
   - 阿拉伯语从右到左排版
   - “联系我们”的 WhatsApp、电话和邮箱
5. 如果没有出现预览部署，检查 Vercel 项目是否仍连接这个 GitHub 仓库，以及项目的 Root Directory 是否为仓库根目录。

## 五、同步到正式网站

1. 回到 GitHub，点击 **Compare & pull request**。
2. 确认合并方向是：`modular-catalog-preview` → `main`。
3. 创建 Pull Request，再点击 **Merge pull request**。
4. 合并后 Vercel 会自动生成 Production Deployment，不需要再手动上传到 Vercel。
5. 等待 Vercel 的正式部署状态变成 **Ready**。
6. 打开正式域名，按 `Ctrl + F5` 强制刷新，再执行一次第四部分的检查。

## 出现问题时如何回退

- 预览分支有问题：不要合并，线上网站不会变化。
- 已经合并但线上有问题：在 GitHub 的 Pull Request 页面使用 **Revert** 撤销本次合并，或用上传前下载的 ZIP 恢复；Vercel 会随新的 GitHub 提交再次部署。
- 不建议只在 Vercel 后台覆盖文件。以后仍以 GitHub 仓库为唯一版本来源，便于回退和追踪修改。
