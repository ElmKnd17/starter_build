const HTMLWebpackPlugins = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
// подключаем webpack для использования встроенного плагина EnvironmentPlugin
const webpack = require('webpack')
//в зависимости от того, какой скрипт мы запустили
// переменная production получит либо false, либо true
const production = process.env.NODE_ENV === 'production'
module.exports = {
	// путь до папки src изменился
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	output: {
		// путь до папки dist изменился
		path: path.resolve(__dirname, '..', './dist'),
		filename: production
			? // добавляем хеш к имени файла, если запускаем в режиме production
				'static/scripts/[name].[contenthash].js'
			: 'static/scripts/[name].js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/images/[hash][ext][query]',
				},
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/fonts/[hash][ext][query]',
				},
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					// В режиме production создаём физический файл в папке dist, в
					// dev режиме добавляем стили в тег style в html-файле
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]__[hash:base64:5]',
								auto: /\.module\.\w+$/i,
							},
							importLoaders: 2,
						},
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
	},
	plugins: [
		new HTMLWebpackPlugins({
			// путь до папки public изменился
			template: path.resolve(__dirname, '..', './public/index.html'),
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'static/styles/[name].[contenthash].css',
		}),
		// Плагин позволяет установить переменные окружения, можно переопределить
		// переменную из блока script файла package.json
		new webpack.EnvironmentPlugin({
			// Значение по умолчанию 'development', если переменная
			// process.env.NODE_ENV не передана при вызове сборки
			NODE_ENV: 'development',
		}),
	],
}
