let fileName = process.env.fileName
if (!fileName) {
  console.warn('请输入名为 fileName 的变量，如 fileName=xxx ');
  return
}
let basePath = './src/components'

let fs = require("fs")

let filePath = [{
    path: basePath + '/html',
    postfix: 'html',
    content: function(content) {
      return `<div></div>`
    }
  },
  {
    path: basePath + '/vue',
    postfix: 'vue',
    content: function(content) {
      return `<template src="../html/${content}.html"></template>\n<style scoped src="../css/${content}.css"></style>\n<script src="../js/${content}.js"></script>\n<i18n src="../lang/${content}.json"></i18n>\n`
    }
  },
  {
    path: basePath + '/js',
    postfix: 'js',
    content: function(content) {
      return `const root = {}\nroot.name = ${content}\nexport default root`
    }
  },
  {
    path: basePath + '/css',
    postfix: 'css',
    content: function(content) {
      return ``
    }
  },
  {
    path: basePath + '/lang',
    postfix: 'json',
    content: function(content) {
      return `{\n"CH": {},\n"EN": {},\n"CA": {}\n}`
    }
  }
]

async function go() {
  for (let i = 0; i < filePath.length; i++) {
    let v = filePath[i];
    !fs.existsSync(v.path) && fs.mkdirSync(v.path)
    if (fs.existsSync(`${v.path}/${fileName}.${v.postfix}`)) {
      let ans = await waitToAns(`${fileName}.${v.postfix}`)
      if (!ans) continue
    }
    console.warn(`开始创建文件${fileName}.${v.postfix}！`);
    fs.writeFile(`${v.path}/${fileName}.${v.postfix}`, v.content(fileName), function(err) {
      if (err) {
        return console.error(err);
      }
    })
  }

  console.warn(`
               ,----------------,              ,---------,
          ,-----------------------,          ,"        ,"|
        ,"                      ,"|        ,"        ,"  |
       +-----------------------+  |      ,"        ,"    |
       |  .-----------------.  |  |     +---------+      |
       |  |                 |  |  |     | -==----'|      |
       |  |    complete!    |  |  |     |         |      |
       |  |    good luck!   |  |  |/----| ---=    |      |
       |  |                 |  |  |   ,/|==== ooo |      ;
       |  |                 |  |  |  // |(((( [33]|    ,"
       |  '-----------------'  |," .;'| |((((     |  ,"
       +-----------------------+  ;;  | |         |,"
          /_)______________(_/  //'   | +---------+
     ___________________________/___  ',
    /  oooooooooooooooo  .o.  oooo /,   \,"-----------
   / ==ooooooooooooooo==.o.  ooo= //   , \--{)B     ,"
  /_==__==========__==_ooo__ooo=_/'   /___________," `)

}



function waitToAns(fileName) {
  // 引入readline模块
  let readline = require('readline');
  //创建readline接口实例
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    let ans = ''
    let time = 0

    function rlQuestion() {
      let question = `${fileName}文件已经存在，是否替换？Y/N  : `
      if (time !== 0) {
        question = `再问${time}次，${fileName}文件已经存在，是否替换？Y/N  : `
      }
      rl.question(question, function(answer) {
        time++
        ans = answer
        if (answer !== 'Y' && answer !== 'y' && answer !== 'N' && answer !== 'n') {
          rlQuestion()
          return
        }
        rl.close()
      })
    }
    rlQuestion()
    // close事件监听
    rl.on("close", function() {
      // 结束程序
      if (ans === 'Y' || ans === 'y') resolve(true)
      if (ans === 'N' || ans === 'n') resolve(false)
    })
  })
}

async function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

go()
