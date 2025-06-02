import { DataTypes, sequelize } from './base.js'

export const table = sequelize.define('emoji', {
  leftEmoji: {
    type: DataTypes.STRING(8),
    allowNull: false,
    primaryKey: true,
    comment: '左边的表情'
  },
  rightEmoji: {
    type: DataTypes.STRING(8),
    allowNull: false,
    primaryKey: true,
    comment: '右边的表情'
  },
  date: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '时间戳'
  }
}, {
  freezeTableName: true,
  defaultScope: {
    raw: true
  },
  indexes: [ {
    unique: true,
    fields: [ 'leftEmoji', 'rightEmoji' ]
  } ]
})

await table.sync()

/**
 * 添加emoji信息。
 *
 * @param leftEmoji 左边表情
 * @param rightEmoji 右边表情
 * @param date 时间戳
 * @returns 添加结果
 */

export async function add (
  leftEmoji,
  rightEmoji,
  date
) {
  const data = {
    leftEmoji,
    rightEmoji,
    date
  }
  return await table.upsert(data)
}

/**
 * 批量添加emoji信息。
 *
 * @param emojis 表情信息数组
 * @returns 添加结果
 */
export async function add_bulk (
  emojis
) {
  await clear()
  await table.bulkCreate(emojis)
}

/**
 * 获取emoji信息
 * @param leftEmoji 左边emoji
 * @param rightEmoji 右边emoji
 * @returns 表情的信息
 */
export async function get (
  leftEmoji,
  rightEmoji
) {
  return await table.findOne({
    where: {
      leftEmoji,
      rightEmoji
    }
  })
}

/**
 * 获取表情信息列表
 * @returns 表情信息列表
 */
export async function getAll () {
  return await table.findAll()
}

/**
 * 清空所有表情信息
 */
export async function clear () {
  await table.destroy({
    truncate: true
  })
}
