# u-Vinci Frontend 内 stub

u-Vinci Frontend を単体で動作させるための stub である。

## 起動時

特別な操作は必要ない。修正が必要な場合、下記の内容を理解し修正されたい。

## 構成

### [uVinciAPIStub.js](uVinciAPIStub.js)

u-Vinci API の動作を模擬する。\
次の 2 種類の JSON を読み取って動作する。

#### [restaurants.json](restaurants.json)

次を模擬
`GET /restaurants`

#### [restaurants/\*.json](restaurants)

次を模擬
`GET /restaurants/:id`

### [authStub.js](authStub.js)

認証情報・ユーザー情報を模擬
