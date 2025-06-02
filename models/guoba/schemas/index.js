import { Config } from '#components'

import emoji from './emoji.js'
import other from './other.js'

export const schemas = [
  emoji,
  other
].flat()

export function getConfigData () {
  return {
    emoji: Config.emoji,
    other: Config.other
  }
}

export function setConfigData (data, { Result }) {
  for (let key in data) {
    Config.modify(...key.split('.'), data[key])
  }
  return Result.ok({}, '保存成功辣ε(*´･ω･)з')
}
