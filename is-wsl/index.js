const os = require('os')
const fs = require('fs')
const assert = require('assert')

/**
 * 平台检测
 * process.platform属性返回字符串，标识Node.js进程运行其上的操作系统平台。 例如'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
 */
console.log(process.platform)

/**
 * os.release()方法返回一个字符串, 指定操作系统的发行版.
 * 6.1.7601
 */
console.log(os.release());

// cat /proc/version
`Linux version 2.6.32-279.el6.x86_64 (mockbuild@c6b9.bsys.dev.centos.org) (gcc version 4.4.6 20120305 (Red Hat 4.4.6-4) (GCC) ) #1 SMP Fri Jun 22 12:19:21 UTC 2012`

const isWsl = () => {
  if (process.platform !== 'linux') {
    return false;
  }
  if (os.release().includes('Microsoft')) {
		return true;
	}
  try {
    // 没有 /proc/version 文件时会引发错误
		return fs.readFileSync('/proc/version', 'utf8').includes('Microsoft');
	} catch (err) {
		return false;
	}
}

// 随便复习 os模块 和 process.platform 区别

// os 模块提供了一些操作系统相关的实用方法 主要定义了一些关系特定系统的标识 用于区分环境
// process.platform 和 os.platform() 方法得到相同的结果
assert.strictEqual(process.platform, os.platform());

module.exports = isWsl();
