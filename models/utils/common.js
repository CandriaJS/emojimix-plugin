import fs from 'node:fs/promises'
import path from 'node:path'

import { Config, Version } from '#components'
import { db } from '#models'

import Request from './request.js'
/**
 * 获取图片 Buffer
 * @param {string | Buffer} image - 图片地址或 Buffer
 * @returns {Promise<Buffer>} - 返回图片的 Buffer 数据
 * @throws {Error} - 如果图片地址为空或请求失败，则抛出异常
 */
export async function getImageBuffer (image) {
  try {
    if (!image) throw new Error('图片地址不能为空')

    if (Buffer.isBuffer(image)) {
      return image
    }

    if (typeof image === 'string' && await exists(image)) {
      return await fs.readFile(image)
    }

    const response = await Request.get(image, null, null, 'arraybuffer')
    if (!response.success) {
      throw new Error(response.msg)
    }
    return response.data
  } catch (error) {
    logger.error(`获取图片Buffer失败: ${error.message}`)
  }
}

/**
 * 获取图片 Base64 字符串
 * @param {string | Buffer} image - 图片的 URL、Buffer 或 Base64 字符串
 * @returns {Promise<string>} - 返回 Base64 编码的图片字符串，可能包含 `base64://` 前缀
 * @throws {Error} - 如果图片地址为空或处理失败，则抛出异常
 */
export async function getImageBase64 (image) {
  try {
    if (!image) {
      logger.error('图片地址不能为空')
    }

    if (typeof image === 'string' && image.startsWith('base64://')) {
      return image
    }

    if (Buffer.isBuffer(image)) {
      return image.toString('base64')
    }

    const buffer = await getImageBuffer(image)
    return buffer.toString('base64')
  } catch (error) {
    logger.error(`获取图片Base64失败: ${error.message}`)
  }
}

/**
 * 异步判断文件是否存在
 * @param {string} path
 * @returns {Promise<boolean>} 是否存在，true存在，false不存在
 */
export async function exists (path) {
  try {
    await fs.access(path)
    return true
  } catch (e) {
    return false
  }
}

/**
 * 异步判断是否在海外环境
 * @returns {Promise<boolean>} 如果在海外环境返回 true，否则返回 false
 */
export async function isAbroad () {
  const urls = [
    'https://blog.cloudflare.com/cdn-cgi/trace',
    'https://developers.cloudflare.com/cdn-cgi/trace',
    'https://hostinger.com/cdn-cgi/trace',
    'https://ahrefs.com/cdn-cgi/trace'
  ]

  try {
    const responses = await Promise.all(
      urls.map((url) => Request.get(url, null, null, 'text'))
    )
    const traceTexts = responses.map((res) => res.data).filter(Boolean)
    const traceLines = traceTexts
      .flatMap((text) =>
        text.split('\n').filter((line) => line)
      )
      .map((line) => line.split('='))

    const traceMap = Object.fromEntries(traceLines)
    return traceMap.loc !== 'CN'
  } catch (error) {
    throw new Error(`获取 IP 所在地区出错: ${error.message}`)
  }
}

export async function init () {
  try {
    const resources_url = 'https://raw.githubusercontent.com/CandriaJS/karin-plugin-emojimix/main/metadata.json'
    const base_url = await isAbroad() ? resources_url : `https://gh-proxy.com/${resources_url}`
    const url = Config.emoji.proxy_url?.trim()
      ? `${Config.emoji.proxy_url.replace(/\/+$/, '')}/${resources_url}`
      : base_url

    const res = await Request.get(url, null, null, 'json')

    const emojiDataArray = res.data.map(item => ({
      leftEmoji: item.leftEmojiCodepoint,
      rightEmoji: item.rightEmojiCodepoint,
      date: item.date
    }))

    await add_emoji(emojiDataArray, 'bulk')
  } catch (error) {
    logger.error(error)
    throw new Error(`初始化emoji失败: ${error.message}`)
  }
}

/**
 * 添加emoji信息，支持单个和批量添加。
 *
 * @param data 表情数据，可以是单个对象或对象数组
 * @param type 添加类型，'common'为单个添加，'bulk'为批量添加，默认为'common'
 * @returns 添加结果
 */
export async function add_emoji (
  data,
  type = 'common'
) {
  if (type === 'bulk' && Array.isArray(data)) {
    return await db.emoji.add_bulk(data)
  } else if (type === 'common' && !Array.isArray(data)) {
    return await db.emoji.add(data.leftEmoji, data.rightEmoji, data.date)
  } else {
    throw new Error('参数类型与操作类型不匹配')
  }
}

/**
 * 获取emoji信息。
 * @param leftEmoji 左边emoji
 * @param rightEmoji 右边emoji
 * @returns emoji信息
 */
export async function get_emoji (
  leftEmoji,
  rightEmoji
) {
  return await db.emoji.get(leftEmoji, rightEmoji)
}

/**
 * 生成emoji图片
 * @param leftEmoji 左边emoji
 * @param rightEmoji 右边emoji
 * @param date 时间戳
 * @returns 返回生成的emoji图片的Base64编码
 */
export async function make_emoji (leftEmoji, rightEmoji, date) {
  try {
    if (!leftEmoji || !rightEmoji || !date) {
      throw new Error('左边表情或右边表情或日期不能为空')
    }
    const cachePath = path.join(Version.Plugin_Path, 'data', 'emoji')
    const cacheFile = path.join(cachePath, `${leftEmoji}-${rightEmoji}-${date}.png`)
    if (Config.emoji.cache && await exists(cacheFile)) {
      return await getImageBase64(cacheFile)
    }
    const url = `https://www.gstatic.com/android/keyboard/emojikitchen/${date}/u${leftEmoji}/u${leftEmoji}_u${rightEmoji}.png`
    const res = await Request.get(url, null, null, 'arraybuffer')
    if (Config.emoji.cache) {
      await fs.mkdir(cachePath, { recursive: true })
      await fs.writeFile(cacheFile, res.data)
      return await getImageBase64(cacheFile)
    }
    return await getImageBase64(res.data)
  } catch (error) {
    logger.error(error)
    throw new Error(`生成emoji失败: ${error.message}`)
  }
}
