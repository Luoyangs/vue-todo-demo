## 写在前面
### create a new repository on the command line
```
echo "# vue-todo-demo" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/Luoyangs/vue-todo-demo.git
git push -u origin master
```

### 1.1 jsx配置 
依赖于babel-plugin-transform-vue-jsx和babel-loader,只需要对.js的文件执行babel转义就可了（不需要.jsx)

### 1.2 支持import导入
使用插件babel-plugin-syntax-dynamic-import并且在.babelrc里面配置plugins