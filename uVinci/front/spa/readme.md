# u-Vinci Frontend

u-Vinci Frontend である。React を用いた SPA で、次のものと連携している。

- GoogleMap API
- u-Vinci API（現在は Express）
- DB (JSON Server)

## ローカル起動

起動方法はu-vindi_draftディレクトリにて「npm run startuVinci」で行う。
アプリケーションはポート3001
Expressはポート4000
JsonServerはポート3000
で、それぞれ起動します。
詳細はu-vinci_draft内にあるpackage.jsonを参照してください。
GoogleMapsKeyの設定は必須です！
発行と入力をお願いいたします！

### API Key を設定

- 環境変数に REACT_APP_GOOGLE_MAPS_API_KEY を設定\
  .env.local ファイルを作成するか、シェルで設定する

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.\
ですって。

## stub の取り扱い

[readme.md | stub](./src/stub/readme.md)

---

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
