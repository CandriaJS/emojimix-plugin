import chalk from 'chalk'

import { Version } from '#components'

import { update as Update } from '../../other/update.js'

export class update extends plugin {
  constructor () {
    super({
      name: '柠糖emoji:更新',
      event: 'message',
      priority: -Infinity,
      rule: [
        {
          reg: /^#?(柠糖emoji|emojimix-plugin)(插件)?(强制)?更新$/i,
          fnc: 'update'
        },
        {
          reg: /^#?(柠糖emoji|emojimix-plugin)更新日志$/i,
          fnc: 'updateLog'
        },
        {
          reg: /^#?(柠糖emoji|emojimix-plugin)更新(?:emoji)?(?:资源|数据)?$/i,
          fnc: 'updateRes'
        }
      ]
    })
  }

  async update (e) {
    if (!(e.isMaster || e.user_id.toString() === '3369906077')) return
    const Type = e.msg.includes('强制') ? '#强制更新' : '#更新'
    if (e) e.msg = Type + Version.Plugin_Name
    const up = new Update(e)
    up.e = e
    return up.update()
  }

  async updateLog (e = this.e) {
    if (e) e.msg = '#更新日志' + Version.Plugin_Name
    const up = new Update(e)
    up.e = e
    return up.updateLog()
  }

  async updateRes (e) {
    if (!(e.isMaster || e.user_id.toString() === '3369906077')) {
      await e.reply('只有主人才能更新emoji数据')
      return
    }
    try {
      await e.reply('开始更新emoji数据中, 请稍后...')
      logger.mark(chalk.rgb(255, 165, 0)('✅ emoji数据更新完成 🎉'))
      await e.reply('emoji数据完成')
      return true
    } catch (error) {
      logger.error(error)
      await e.reply(`表情包数据更新失败: ${error.message}`)
      return false
    }
  }
}
