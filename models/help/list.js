export const List = [
  {
    group: '[]内为必填项,{}内为可选项, #均为可选'
  },
  {
    group: 'enoji命令',
    list: [
      {
        icon: 161,
        title: '{#柠糖emoji合成}[emoji1]+[emmji2]',
        desc: 'emoji合成'
      }
    ]
  },
  {
    group: '管理命令，仅主人可用',
    auth: 'master',
    list: [
      {
        icon: 95,
        title: '#柠糖emoji(插件)更新',
        desc: '更新插件本体'
      },
      {
        icon: 35,
        title: '#柠糖emoji更新emoji数据',
        desc: '更新emoji数据'
      }
    ]
  }
]
