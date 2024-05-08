# この資料について

この資料は、株式会社 i-Vinci において研修課題として作成されたものを
MIT ライセンスの元に公開するものです。

課題中に登場する人物・団体名・店名等は全て架空のものであり、
実在のものとは関係ありません。

---

---

# 状況

課題着手者は、自社内で開発されている u-Vinci の開発に参画したという状況です。\
u-Vinci は、「日本の豊かな田から取れた栄養のある米を」をコンセプトととした、飲食店情報をユーザーが共有できる Web アプリケーションです。\
u-Vinci はすでにエンドユーザーが使用を開始していて、機能追加・不具合修正等が求められています。

# 課題

## 課題 1：Front x 不具合修正

[./01/readme.md](01/readme.md) の指示に従って、課題を着手してみてください。

## 課題 2：Front x 改善

[./02/readme.md](02/readme.md) の指示に従って、課題を着手してみてください。

## 課題 3：Front x 機能追加

[./03/readme.md](03/readme.md) の指示に従って、課題を着手してみてください。

<= to be continued ===


## スタブデータについて

「米ん人になる」操作の結果は永続化されているため、ボタンを押すとユーザーがDBのComentoesに追加されます。
削除方法はcurlコマンドを使用するか、直接、db.json内の該当ユーザーのデータを消す等行ってください。 \
<br>
削除例：curl -D - -X PUT -H 'token:775167ec-e803-4664-bc9e-229bfd7909ab' -H 'Content-Type:application/json' -d '{"user":{"id":"U88888","name":"シンニュー・シャイン"}}' http://localhost:4000/restaurants/SHOP03/unlike

# ご担当の方へ

## 流れについて

- 最初に課題着手者要のブランチを一緒に作ってあげてください
- "ユニークな番号_苗字"のような branch を作り、それを親 branch として、課題ごとに checkout & Pull Request という流れでお願いします
- この親 branch を、課題中では課題着手者の名前を記載します
- 研修担当者は PR に対してレビューを行い、指摘対応後に Merge してあげてください

## お願い

課題着手者には、本課題の対応に専念していただきたく思っており、コーディングのルールについては気にせず対応できるようにlint-stagedを導入しています。
コミット時に自動で整形されるので、その旨を課題着手者に共有してあげてください。

## Front 課題

[./uVinci](uVinci)配下の01,02,03ディレクトリ\
[readme](uVinci/front/spa/readme.md)

---

---

# 作った人

UKさん

# モックサーバーへの移行をした人
YA

新人研修にて、本課題を着手した後に、UKさんやFさんをはじめとする\
チームメンバーの方々の指示の元、モックサーバーへの移行を\
この度、担当させていただきました！