export default [
  {
    component: 'SOFT_GROUP_BEGIN',
    label: 'emoji设置'
  },
  {
    field: 'emoji.enable',
    label: 'emoji功能',
    component: 'Switch',
    bottomHelpMessage: '是否开启emoji功能'
  },
  {
    field: 'emoji.prefix',
    label: '前缀',
    component: 'Switch',
    bottomHelpMessage: '是否开启前缀前缀, 开启后强制使用[#柠糖表情emoji合成]触发'
  },
  {
    field: 'emoji.cache',
    label: '缓存',
    component: 'Switch',
    bottomHelpMessage: '是否开启缓存已生成的emoji图片'
  },
  {
    field: 'emoji.proxy_url',
    label: 'github代理地址',
    component: 'Input',
    bottomHelpMessage: 'github镜像代理下载地址, 用于第一次获取emoji数据, 如: https://gh-proxy.com'
  }
]