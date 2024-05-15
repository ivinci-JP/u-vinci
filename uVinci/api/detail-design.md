# u-Vinci API (localhost: 4000)

# 役割

- 外部 API や DB から情報を取得する
- ログイン機能
- 整形し React に情報を提供する
- REST API

# 使用技術

- express

# 飲食店の紐付け

飲食店ごとのユニーク ID で識別する

---

---

# エンドポイント

# ログイン

POST /login

---

# ログアウト

DELETE /login

---

# 飲食店一覧

GET /restaurants

## params

- lat（予定）
- lng（予定）
- range（予定）

## レスポンス例

```json
{
  "result": [
    { "id": "SHOP01", "lat": 35.693716, "lng": 139.7620739 },
    { "id": "SHOP02", "lat": 35.693769, "lng": 139.7615539 }
  ],
  "message": "",
  "status": 200
}
```

---

# 飲食店詳細

GET /restaurants/:id

## レスポンス例

```json
{
  "result": {
    "id": "SHOP01",
    "name": "牛島食堂",
    "access": "パレスサイドオフィス神保町から徒歩2ふん",
    "catch": "うまい、うまい",
    "url": "https://www.i-vinci.co.jp/",
    "comentoes": [
      { "id": "U88001", "name": "星野菜々津" },
      { "id": "U88002", "name": "秋田子町" }
    ]
  },
  "message": "",
  "status": 200
}
```

### 米ん人リスト

- 「米ん人」の配列

---

# 米ん人になる

POST /restaurants/:detailedShopId/like

# 米ん人をやめる

DELETE /restaurants/:detailedShopId/unlike

## リクエスト内容

### route params

#### :id

飲食店ごとのユニーク ID

### header

- token

### body

```json
{
  "user": {
    "id": "U88888",
    "name": "シンニュー・シャイン"
  },
  "like": true
}
```

"like": true => 米ん人になる\
"like": false => 米ん人をやめる\
undefined => 米ん人になる

## レスポンス例

```json
{
  "result": {
    "id": "SHOP01",
    "name": "牛島食堂",
    "access": "パレスサイドオフィス神保町から徒歩2ふん",
    "catch": "うまい、うまい",
    "url": "https://www.i-vinci.co.jp/",
    "comentoes": [
      { "id": "U88001", "name": "星野菜々津" },
      { "id": "U88002", "name": "秋田子町" },
      { "id": "U88888", "name": "シンニュー・シャイン" }
    ]
  },
  "message": "",
  "status": 200
}
```

---

---
