# HYDRO-BLOK 产品图册（模块化预览版）

本目录是从现有单文件网站拆分出的独立预览版本。原正式文件未被覆盖。

## 目录结构

```text
index.html                              产品系列首页
assets/
  css/site.css                         首页样式
  images/logo.png                      透明公司 Logo
  js/app.js                            首页交互、筛选、弹窗与语言切换
  js/i18n.js                           首页六语翻译
  js/products.js                       产品系列与详情数据
viewer/
  index.html                           原板材 3D 模型页面
  assets/viewer.css                    板材模型样式
  assets/viewer.js                     板材模型逻辑
  products/whole-house/
    index.html                         全屋系统 3D 模型页面
    assets/house.css                   全屋模型样式
    assets/house.js                    全屋模型逻辑
migration-manifest.json                迁移记录和外部运行依赖
上传GitHub与Vercel说明.md               上线操作说明
```

## 以后如何修改

- 增删产品或改产品参数：编辑 `assets/js/products.js`。
- 修改首页六种语言：编辑 `assets/js/i18n.js`。
- 修改首页排版和视觉：编辑 `index.html` 与 `assets/css/site.css`。
- 修改板材模型：编辑 `viewer/index.html`、`viewer/assets/viewer.css`、`viewer/assets/viewer.js`。
- 修改全屋模型：编辑 `viewer/products/whole-house/` 内对应文件。
- Logo 统一使用 `assets/images/logo.png`，不要再次嵌入 Base64 图片。

不要把这些文件重新合并进一个巨大的 `index.html`。入口仍然只有根目录的 `index.html`，GitHub 和 Vercel 的访问方式不变；拆分只是让内部代码更容易维护。

## 本地预览

不要直接双击 HTML 判断全部功能，因为浏览器对本地文件有安全限制。推荐在本目录启动静态服务器后访问：

```powershell
python -m http.server 4173
```

然后打开 `http://127.0.0.1:4173/`。

## 上线前最低检查

1. 首页能显示九个产品系列。
2. “板材 3D”与“全屋 3D”均能进入并正常旋转、拆分和复原。
3. 中文、英文、西班牙语、法语、阿拉伯语、俄语均可切换。
4. “联系我们”中的 WhatsApp、电话和邮箱链接正确。
5. 浏览器控制台没有红色错误。

具体上传步骤见 `上传GitHub与Vercel说明.md`。
