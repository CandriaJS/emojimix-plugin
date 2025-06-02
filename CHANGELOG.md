# 变更日志

## 1.0.0 (2025-06-02)


### ✨ 新功能

* 增加柠糖emoji插件 ([bd99065](https://github.com/CandriaJS/emojimix-plugin/commit/bd99065eb4530abfcce00987f1c26ea6a958eb78))

## [2.5.2](https://github.com/TaoriJS/emojimix-plugin/compare/v2.5.1...v2.5.2) (2025-05-27)


### 🐛 错误修复

* **imageTool:** 优化 GIF 分拆功能的文件处理 ([475b5c2](https://github.com/TaoriJS/emojimix-plugin/commit/475b5c2ef5262d79bd025c764eb11887b068d6d1))


### 🎡 持续集成

* 移除设置用户信息步骤 ([baa0a34](https://github.com/TaoriJS/emojimix-plugin/commit/baa0a34726b8ea8f8917736bf58e815681ee9238))

## [2.5.0](https://github.com/TaoriJS/emojimix-plugin/compare/v2.4.0...v2.5.0) (2025-05-24)


### ✨ 新功能

* 增加gif分解发送合并消息同时发送压缩文件 ([#25](https://github.com/TaoriJS/emojimix-plugin/issues/25)) ([d2bc414](https://github.com/TaoriJS/emojimix-plugin/commit/d2bc414bfd1db1f267dd5bf75adf95a1cc38d956))


### 🐛 错误修复

* 上传文件失败 ([be070b2](https://github.com/TaoriJS/emojimix-plugin/commit/be070b25cea2f2d6d7106d8f532e9883ad419cd2))
* 修复用户保护失效 ([5ee3d92](https://github.com/TaoriJS/emojimix-plugin/commit/5ee3d92f746bb169e7354d38a9c4471d08fe875a))
* 初始化表情正则萝莉 ([a78300d](https://github.com/TaoriJS/emojimix-plugin/commit/a78300de32f1246db1f324c233be7c901814a6ad))
* 缺少的函数 ([27596de](https://github.com/TaoriJS/emojimix-plugin/commit/27596de4a3f1db206450a8fed73c464866e06c80))
* 预设表情参数传递错误 ([8040698](https://github.com/TaoriJS/emojimix-plugin/commit/80406988ea928a2adf474e1407feacce3a877dd3))


### ⚡️ 性能优化

* 优化表情搜索，支持预设表情返回原始表情的关键词 ([a250f82](https://github.com/TaoriJS/emojimix-plugin/commit/a250f82ac0d0a7299f8b5e415885e58825319496))
* 优化部分回复提示 ([c67cbde](https://github.com/TaoriJS/emojimix-plugin/commit/c67cbde271db122bf21e337d529a3072b472c481))


### ♻️ 代码重构

* **models:** 优化 meme 制作逻辑 ([db7fac8](https://github.com/TaoriJS/emojimix-plugin/commit/db7fac80d2f257b3ff4d1a48b4620a59f7cbb619))


### 🎡 持续集成

* 优化部分ci流程 ([52c3294](https://github.com/TaoriJS/emojimix-plugin/commit/52c3294ff27e8201c1f7d5b9c663c2a927085d10))

## [2.4.0](https://github.com/TaoriJS/emojimix-plugin/compare/v2.3.1...v2.4.0) (2025-05-18)


### ✨ 新功能

* **apps:** 整合预设表情和关键词搜索 ([#20](https://github.com/TaoriJS/emojimix-plugin/issues/20)) ([b4cd0d8](https://github.com/TaoriJS/emojimix-plugin/commit/b4cd0d80badf89239090a200f84bd316fb564ec4))
* **models:** 添加表情统计功能并更新萝莉背景图 ([#22](https://github.com/TaoriJS/emojimix-plugin/issues/22)) ([f63fe1f](https://github.com/TaoriJS/emojimix-plugin/commit/f63fe1fee0e5d35608ff00f531497103a39e7f05))


### 🐛 错误修复

* **meme:** 优化初始化正则失败导致误触发 ([b68c6b2](https://github.com/TaoriJS/emojimix-plugin/commit/b68c6b2eb92ac283f76708c79f882af2b0008603))
* **models:** 优化预设表情更新逻辑 ([4f0869a](https://github.com/TaoriJS/emojimix-plugin/commit/4f0869a036c34d9ef1e0d7dc75fea154d9c5053d))
* 修复gif分解发送转发消息 ([41fe8bd](https://github.com/TaoriJS/emojimix-plugin/commit/41fe8bd4636fc0c0dec3a0ca8c337be168299c0f))
* 修复分页截图 ([4e4b386](https://github.com/TaoriJS/emojimix-plugin/commit/4e4b386bfa5de44cf96c08170800c4b978830258))


### ♻️ 代码重构

* **imageTool:** 重构图片处理逻辑 ([#19](https://github.com/TaoriJS/emojimix-plugin/issues/19)) ([620124e](https://github.com/TaoriJS/emojimix-plugin/commit/620124ec637e6da5b05aa48034eeae1778f6d1c3))
* **models:** 添加狠撅和狠骑两个新预设 ([ed65d54](https://github.com/TaoriJS/emojimix-plugin/commit/ed65d54894168ddc1ca6ac3f3dc33cd4eeb6f1a8))
* 统一日志输出格式 ([1ad4f36](https://github.com/TaoriJS/emojimix-plugin/commit/1ad4f36fc6e97f3ede67c1b98a2511ea37c53ff7))

## [2.3.1](https://github.com/TaoriJS/emojimix-plugin/compare/v2.3.0...v2.3.1) (2025-05-14)


### 🐛 错误修复

* **imageTool:** 优化图片获取逻辑 ([61f639a](https://github.com/TaoriJS/emojimix-plugin/commit/61f639acba44ea720677f092b9fff30e96bf6599))
* **models:** 修复 API 地址未配置时的错误提示 ([f33c2ae](https://github.com/TaoriJS/emojimix-plugin/commit/f33c2ae74adfcdbfacfee0d2c06fd1d032d44553))
* **server:** 优化 Linux 系统下进程运行时间解析 ([1d3c574](https://github.com/TaoriJS/emojimix-plugin/commit/1d3c574fec473b9ab548885f49932a874f6ccd17))
* **server:** 修复 Linux 进程运行时间获取 ([38ea6b0](https://github.com/TaoriJS/emojimix-plugin/commit/38ea6b01765620d527adc9ac7e4e983312a1fe89))
* **server:** 修复 linux下的时间计算与内存计算 ([b495aa2](https://github.com/TaoriJS/emojimix-plugin/commit/b495aa2e9192dc934b724ed97eb25d6fb455cb83))
* 修复图片信息查看 ([2c24a6b](https://github.com/TaoriJS/emojimix-plugin/commit/2c24a6b850e7bf579596d5900c4abb15adef2365))


### ⚡️ 性能优化

* **ImageTools:** 优化图片操作，部分图片操作支持艾特获取头像 ([ca2873a](https://github.com/TaoriJS/emojimix-plugin/commit/ca2873a6f632955915b29f87a52902c913dc697c))


### 📝 文档更新

* **README:** 更新项目计划状态 ([db3ea41](https://github.com/TaoriJS/emojimix-plugin/commit/db3ea4187eda3fafc02fc117ade24c1341d14730))
* 修正描述 ([452e769](https://github.com/TaoriJS/emojimix-plugin/commit/452e769dee66facd13b3443dd656591263277af1))

## [2.3.0](https://github.com/TaoriJS/emojimix-plugin/compare/v2.2.0...v2.3.0) (2025-05-13)


### ✨ 新功能

* **models:** 新增 imageTool 模块并实现相关功能 ([#14](https://github.com/TaoriJS/emojimix-plugin/issues/14)) ([36f1223](https://github.com/TaoriJS/emojimix-plugin/commit/36f1223e63eba12218b34f354883437aac74c7f3))
* **search:** 增加基于标签的搜索功能 ([#11](https://github.com/TaoriJS/emojimix-plugin/issues/11)) ([201671f](https://github.com/TaoriJS/emojimix-plugin/commit/201671fb7025c4fd1b80333bf3aa59e65c934418))


### 🎡 持续集成

* 更新 issue 问候流程中的应用 ID 引用 ([f8d00e9](https://github.com/TaoriJS/emojimix-plugin/commit/f8d00e91ecdc0438129826b481ff9bda3c94d559))

## [2.2.0](https://github.com/TaoriJS/emojimix-plugin/compare/v2.1.0...v2.2.0) (2025-05-12)


### ✨ 新功能

* **server:** 增加服务端配置选项 ([a6f4a3c](https://github.com/TaoriJS/emojimix-plugin/commit/a6f4a3c1f40515ab31593d9b247349ca3a8d9cdf))


### 🐛 错误修复

* **server:** 为 Linux 系统添加服务器路径的执行权限 ([6b01439](https://github.com/TaoriJS/emojimix-plugin/commit/6b014397fd92a8ed566cee8890aa94e5bf70db5b))
* **server:** 修复配置文件目录创建逻辑 ([3f4fca1](https://github.com/TaoriJS/emojimix-plugin/commit/3f4fca1f9f645e5a0e74aa306e9d9f7247ddd859))
* 优化背景图大小 ([56a81d4](https://github.com/TaoriJS/emojimix-plugin/commit/56a81d4a47b210cfeffa13e69ec955c28a3fd4a7))
* 修复 NotoColorEmoji 字体的 MIME 类型 ([a1e6678](https://github.com/TaoriJS/emojimix-plugin/commit/a1e667842e957fe9f54850daab56daf7b7f66680))
* 修复Linux下加载插件失败 ([b493854](https://github.com/TaoriJS/emojimix-plugin/commit/b49385443f63eb50012bf90c1ec366cfc8555a8c))
* 修改字体加载 ([5e2112f](https://github.com/TaoriJS/emojimix-plugin/commit/5e2112fb4b11f94d552a4b7ee79a10d5b74b4199))


### ♻️ 代码重构

* **models:** 修改表情服务端资源下载提示信息 ([e56af07](https://github.com/TaoriJS/emojimix-plugin/commit/e56af077e69e8c13e81432dc8f47c298409a1047))
* **models:** 更新服务端配置和样式 ([8518338](https://github.com/TaoriJS/emojimix-plugin/commit/8518338f4770c667c6c3f622d5120a83dcad72c5))
* 移除废弃配置项 ([f760a12](https://github.com/TaoriJS/emojimix-plugin/commit/f760a123f4556555d1e08153e173f83c1be01746))

## [2.1.0](https://github.com/TaoriJS/emojimix-plugin/compare/v2.0.0...v2.1.0) (2025-05-11)


### ✨ 新功能

* **models:** 为 admin 模型添加服务模式、自定义端口和代理地址配置 ([f7b959a](https://github.com/TaoriJS/emojimix-plugin/commit/f7b959a1f15e134356a765bb376dfb666ce3c2ef))
* **server:** 添加表情服务端管理功能 ([#6](https://github.com/TaoriJS/emojimix-plugin/issues/6)) ([8ce20e1](https://github.com/TaoriJS/emojimix-plugin/commit/8ce20e10fa869c731d25ef97c43a5df7b33405d5))

## [2.0.0](https://github.com/TaoriJS/emojimix-plugin/compare/v1.9.0...v2.0.0) (2025-05-10)


### ⚠ BREAKING CHANGES

* 迁移并适配Rust版API

### ✨ 新功能

* 迁移并适配Rust版API ([fec1b53](https://github.com/TaoriJS/emojimix-plugin/commit/fec1b5373e44509abd6be4e986d843fd53e95e66))


### 🎡 持续集成

* 为 issue 相关的 GitHub Actions 添加 contents 权限 ([f4bb7b3](https://github.com/TaoriJS/emojimix-plugin/commit/f4bb7b337d8659117c749ab8250e7254c7b5db2e))

## [1.17.0](https://github.com/ClarityJS/emojimix-plugin/compare/v1.16.1...v1.17.0) (2025-04-24)


### ✨ 新功能

* **config:** 添加表情保护设置功能 ([eda6546](https://github.com/ClarityJS/emojimix-plugin/commit/eda654662825c5a649ddf862451efb412b2662c4))
* **models:** 添加表情保护功能 ([25fa86e](https://github.com/ClarityJS/emojimix-plugin/commit/25fa86ed64c02b8fad6747364a8d4de462ec4600))


### 🐛 错误修复

* **apps:** 修复优化统计模块数据处理逻辑 ([b9fe4a6](https://github.com/ClarityJS/emojimix-plugin/commit/b9fe4a60816c9d81644b34527776ad6b8a56d95e))
* **config:** 修复指令无法添加黑名单表情列表 ([12d5c95](https://github.com/ClarityJS/emojimix-plugin/commit/12d5c95ab5f8e339d29903494c1d986ae2cdec5e))
* **models:** 修复生成昵称和性别时的用户 ID 引用错误 ([804d6d1](https://github.com/ClarityJS/emojimix-plugin/commit/804d6d11d97f53f540efb4c9216522b7d5d03be5))


### ⚡️ 性能优化

* 重构静态站并使用新的静态站资源 ([411371b](https://github.com/ClarityJS/emojimix-plugin/commit/411371b76ad8d00cab761c1ffe85ae2ef85ecc94))


### 🎨 代码样式

* **common:** 更新 YS 字体资源链接 ([6337e2f](https://github.com/ClarityJS/emojimix-plugin/commit/6337e2f2f18c269e8dcf129f92681079b0e389c7))


### ♻️ 代码重构

* **apps:** 优化 stat.js 文件 ([b8c23b5](https://github.com/ClarityJS/emojimix-plugin/commit/b8c23b56d1262e007b0c3c2b052f0295c5ed681e))
* **apps:** 重构表情列表和统计页面 ([73ac96f](https://github.com/ClarityJS/emojimix-plugin/commit/73ac96f17ef10cd1b2f3f66225370901e7c4faa0))
* **db:** 优化数据库操作逻辑 ([ee27e15](https://github.com/ClarityJS/emojimix-plugin/commit/ee27e15f37b039b4278e845825eca34bd4d16634))
* **models:** 优化 add 函数并移除冗余代码 ([bec299c](https://github.com/ClarityJS/emojimix-plugin/commit/bec299c2000255e9aef608153df8bee46e6a0f67))
* **models:** 优化 Meme 模型中处理图片的逻辑 ([e58e85b](https://github.com/ClarityJS/emojimix-plugin/commit/e58e85b7b04319544e9f236303cf2963d29c7712))
* **models:** 移除 GIF 相关功能 ([c96ae46](https://github.com/ClarityJS/emojimix-plugin/commit/c96ae468969df148bd3d5514c759e0f126ed0504))
* **models:** 移除表情包快捷方式相关代码 ([20f8f20](https://github.com/ClarityJS/emojimix-plugin/commit/20f8f20f332e31270c7f2c13757833e61cd997ea))
* **update:** 移除更新检查相关代码 ([db62463](https://github.com/ClarityJS/emojimix-plugin/commit/db62463e7f7b74ebfbd59d7814e5689550d0adef))
* **update:** 移除更新检查相关功能 ([d299e19](https://github.com/ClarityJS/emojimix-plugin/commit/d299e1927a6874e1a66d82dde79e551a7f722d2c))


### 🎡 持续集成

* **release:** 更新获取最新标签的命令 ([71afafa](https://github.com/ClarityJS/emojimix-plugin/commit/71afafaec53a402a2f471fa2653e5eab2e3e18e9))
