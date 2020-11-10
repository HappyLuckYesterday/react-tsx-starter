const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {

	return {
		context: path.resolve(__dirname, './src'),

		entry: { app: './index.tsx' },

		output: {
			filename: '[name].[hash].bundle.js',
			chunkFilename: '[name].[hash].bundle.js',
			path: path.resolve(__dirname, 'dist')
		},

		devServer: {
			open: true,
			hot: true
		},

		resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },

		module: {
			rules: [
				{ test: /\.tsx?$/, loader: 'ts-loader' }, // , options: { transpileOnly: true }
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				},
				{
					test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
					loader: 'file-loader',
					options: {
						name: 'assets/[name].[ext]'
					}
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'assets/img',
								publicPath: 'assets/img'
							}
						}
					]
				}
			],
		},

		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './index.html',
				title: 'React Tsx Template',
				filename: 'index.html',
				chunksSortMode: 'manual',
				chunks: ['vendors', 'app'],
				favicon: 'favicon.ico'
			}),
			new MiniCssExtractPlugin({
				filename: 'style.css',
				chunkFilename: 'style.css'
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'public'),
						to: 'public'
					},
				]
			}),
			new webpack.DefinePlugin({
				// define environment vars here
			})
		],

		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin()],
			splitChunks: {
				cacheGroups: {
					commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' }
				}
			}
		}
	};
};
