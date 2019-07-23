const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')
const fs = require('fs')
const srcRoot = path.resolve(__dirname, 'src')
const devPath = path.resolve(__dirname, 'dev')
const pageDir = path.resolve(srcRoot, 'pages')
const mainFile = 'index.js'
const webpack = require('webpack')
function getHtmlArray(entryMap) {
    let htmlArray = []
    Object.keys(entryMap).forEach(key => {
        let fullPathName = path.resolve(pageDir,key)
        let fileName = path.resolve(fullPathName,key+'.html')
        if(fs.existsSync(fileName)){
            htmlArray.push(new HtmlWebpackplugin({
                filename:key+'.html',
                template:fileName,
                chunks:[key,]
            }))
        }
    });
    return htmlArray
}

// 多入口引入方法

function getEntry() {
    let entryMap = {}
    fs.readdirSync(pageDir).forEach((pathname) => {
        let fullPathName = path.resolve(pageDir, pathname)
        let stat = fs.statSync(fullPathName)
        let fileName = path.resolve(fullPathName, mainFile)

        if (stat.isDirectory() && fs.existsSync(fileName)) {
            entryMap[pathname] = fileName
        }
    })
    return entryMap
}

const entryMap = getEntry()
const htmlArray = getHtmlArray(entryMap)

module.exports = {
    mode: 'development',
    entry: entryMap,
    module: {
        rules: [
            {   test: /\.(js|jsx)$/, 
                use: [
                  {loader: 'babel-loader'},
                  {loader: 'eslint-loader'}
                ],
                include: srcRoot
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: srcRoot
            },
            { test: /\.scss$/ , use:['style-loader','css-loader','sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: `${srcRoot}/components/common.scss`
                }
            }], include: srcRoot},
            {
                test: /\.(png|jpg|jpeg)$/,
                use: 'url-loader?limit=8192', // 小于8k，base64加载
                include: srcRoot
            }
        ]
    },
    resolve:{
        alias:{
            component:path.resolve(srcRoot,'components'),
            static: path.resolve(srcRoot,'static'),
        },
        extensions:['.js','.jsx']
    },
    output: {
        path: devPath,
        filename: '[name].min.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ].concat(htmlArray)

}