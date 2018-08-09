let fileTypeArr = ['vue', 'lang', 'js', 'html', 'css'];
let assetFileName = 'assets'



let basePath = './src/components';
let fs = require("fs");

// 重写 vue
let rewriteType = 'vue'
let vueFile = {
  path: basePath + '/vue',
  postfix: 'vue',
  content: function(content) {
    return `<template src="./${content}.html"></template>\n<style scoped src="./${content}.css"></style>\n<script src="./${content}.js"></script>\n<i18n src="./${content}.json"></i18n>\n`
  }
};

fileTypeArr.forEach(fileType => {
  let fileArr = fs.readdirSync(`${basePath}/${fileType}`)
  fileArr.forEach(originalFileName => {
    let fileName = originalFileName.split('.')[0];
    let originalFileType = originalFileName.split('.')[1]

    let path = `${basePath}/${fileName}`;
    !fs.existsSync(path) && fs.mkdirSync(path);

    let assetFilePath = `${path}/${assetFileName}`;
    !fs.existsSync(assetFilePath) && fs.mkdirSync(assetFilePath);

    let oldPath = `${basePath}/${fileType}/${originalFileName}`;
    let newPath = `${path}/${originalFileName}`



    if (fs.existsSync(newPath)) {
      console.warn(`${newPath}文件重复，请手动操作!`);
      return
    }
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.warn('this is err', err);
        return
      }
      // 如果是vue,重写
      if (originalFileType === rewriteType) {
        fs.writeFile(newPath, vueFile.content(fileName), function(err) {
          if (err) {
            return console.error(err);
          }
        })
      }
    })
  })
})


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
