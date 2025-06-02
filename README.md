# 柠糖emoji V2

## 介绍 📝
此仓库是[柠糖emoji(原清语表情)](https://github.com/CandriaJS/emojimix-plugin)的V2版本，Fork增强版本，表情包API采用Rust版本

>[!TIP]
>前往 https://github.com/settings/tokens/new 获取GitHub 个人访问令牌，勾选仓库访问权限（不知道要勾什么的话，全勾上吧）

有问题提交[issues](https://github.com/TaoriJS/emojimix-plugin/issues)

>[!TIP]
>自`V2`版本起，已内置服务端的下载，在`server.yaml`中配置`mode`为`1`重启等待插件下载完成即可使用
>但需手动下载表情资源, 在data/server目录下执行以下命令. windows用户需要加.exe后缀
>```bash
>meme download
>```

## 安装与更新 🔧

### <code>Yunzai-Bot</code> 🚀
   
<details>
<summary>使用 <code>Github</code> 🐙</summary>

```bash
git clone --depth=1 https://用户名:访问令牌@github.com/TaoriJS/emojimix-plugin ./plugins/emojimix-plugin/
```
</details>
<details>
<summary>使用 <code>Github</code> 镜像 🌐</summary>

```bash
git clone --depth=1 https://用户名:访问令牌@gh.wuliya.xin/https://github.com/TaoriJS/emojimix-plugin ./plugins/emojimix-plugin/
```
</details>


### 安装依赖 📦
```bash
pnpm install --filter=emojimix-plugin
```


## 更新计划 🛠

功能已完成，后续进入功能维护期


# 资源 📚

- [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) : 喵版 Yunzai [Gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai) / [Github](https://github.com/yoimiya-kokomi/Miao-Yunzai)
- [Yunzai-V3](https://github.com/yoimiya-kokomi/Yunzai-Bot) ：Yunzai V3 - 喵喵维护版（使用 icqq）
- [Yunzai-V3](https://gitee.com/Le-niao/Yunzai-Bot) ：Yunzai V3 - 乐神原版（使用 oicq）
- [meme-generator-rs](https://github.com/MeetWq/meme-generator-rs): 表情包生成器，用于制作各种沙雕表情包 ***本插件的来源***
