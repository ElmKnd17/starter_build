//webpack.dev.js
// Для того чтобы превратить относительный путь в абсолютный, мы будем использовать
// пакет path
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		// путь, куда "смотрит" режим разработчика
		static: path.resolve(__dirname, './dist'),
		// compress: true, // это ускорит загрузку в режиме разработки
		// порт, чтобы открывать сайт по адресу localhost:8080 (можно поменять порт)
		port: 8080,
		open: true, // сайт будет открываться сам при запуске npm run dev
		hot: true,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
}
