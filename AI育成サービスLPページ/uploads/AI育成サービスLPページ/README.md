# Foster — AI育成サービス LP

「あなたのAIを、育成します。」

AIを使いたいけれど時間がない人・社内にデジタル人材がいない会社に向けた、AI育成サービス **Foster** のランディングページです。Claude・Codex・Antigravity などを顧客の業務に合わせてセットアップ・チューニングし、すぐ使えるAIに育てるサービスを紹介します。

日本語メイン＋英語サブのバイリンガル構成で、先進的・テック感のあるトーンで設計しています。

## 特長

- **3つのテーマモード** — ライト（暖色ペーパー）／ダーク（暖かみのある漆黒）／ターミナル（緑のフォスファーCRT風）。ナビ右上のトグルで切り替え、選択は `localStorage` に保存されます。
- **レスポンシブ対応** — デスクトップ／タブレット／モバイルに最適化。980px以下ではハンバーガーメニューに切り替わります。
- **3種のヒーローレイアウト** — split / fullbleed / overlay をTweaksパネルで切り替え可能。
- **デザインシステム準拠** — Micro SaaS LP Design System のトークン・コンポーネントで統一。

## セクション構成

1. ヒーロー（キャッチコピー）
2. 実績バー
3. サービスの特長
4. 対応AIツール（Claude / Codex / Antigravity ほか）
5. 料金プラン（ライト／スタンダード／エンタープライズ）
6. 導入の流れ（4ステップ）
7. お問い合わせ・CTA（資料請求）
8. フッター

## ファイル構成

```
AI育成サービスLPページ/
├── Foster LP.dc.html   # LP本体（Design Component）
├── support.js          # ランタイム
└── _ds/                # デザインシステム一式（バンドル・トークン・CSS）
```

## 表示方法

`Foster LP.dc.html` をブラウザで直接開くと表示されます。`support.js` と `_ds/` フォルダが同じ階層にある必要があります。

## 技術

- Design Component（`.dc.html`）形式
- Micro SaaS LP Design System
- アイコン: [Lucide](https://lucide.dev)
- フォント: Schibsted Grotesk / Noto Sans JP / Space Mono
