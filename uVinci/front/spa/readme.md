# u-Vinci Frontend

u-Vinci Frontend と連携している機能一覧

- GoogleMap API
- u-Vinci API（Express）
- DB (JSON Server)

## ローカル起動

起動方法は u-vindi_draft ディレクトリにて「npm run startuVinci」で行う。
アプリケーションはポート 3001
Express はポート 4000
JsonServer はポート 3000
で、それぞれ起動します。
詳細は u-vinci_draft 内にある package.json を参照してください。
GoogleMapsKey の設定をしないとマップの表示ができませんので、
発行と入力をお願いいたします！

※ **API キーについては誤ってコミットしないようご注意ください。**

#### 設定方法

- 環境変数に REACT_APP_GOOGLE_MAPS_API_KEY を設定\
  .env.local ファイルを作成するか、シェルで設定する

### `npm install`

パッケージインストールを行う

## stub の取り扱い

[readme.md | stub](./src/stub/readme.md)
