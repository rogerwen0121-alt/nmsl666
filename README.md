# 計算機專案｜GitHub 實戰作業

這是一個使用 HTML、CSS、JavaScript 製作的網頁計算機。

## 功能
- 基本四則運算、清除（C）、刪除（←）
- 百分比（%）：將目前輸入的數值除以 100
- 記憶功能：M+ 累加、M- 扣除、MR 讀取、MC 清除
- 科學計算：sin、cos、tan（角度制）、log、平方根、平方
- 科學功能採用下拉選單介面（v2）

## 如何執行
直接以瀏覽器開啟 `index.html`。

## 測試案例
| 操作 | 預期結果 |
|---|---:|
| 8 + 2 = | 10 |
| 9 × 7 = | 63 |
| 200 % | 2 |
| 30 → sin | 0.5 |
| 60 → cos | 0.5 |
| 9 → √ | 3 |
| 5 → M+，再按 MR | 5 |
| 8 → M+，3 → M-，再按 MR | 5 |
| 按 MC，再按 MR | 0 |

## 分支與 Pull Request 練習
- `feature/percentage-button`：新增百分比功能，PR #1 已合併
- `feature/memory-function`：新增記憶功能，PR #2 已合併
- `feature/scientific-v1`：科學功能按鈕式介面，作為 A/B 比較版本
- `feature/scientific-v2`：科學功能下拉選單介面，PR #3 已合併並採用
- `practice/revert-demo`：示範建立錯誤提交，再以 revert 還原；此分支僅供練習，不影響 main

## 常用 Git 指令
```bash
git status
git diff
git add .
git commit -m "描述本次修改"
git log --oneline --graph
git push origin main
git switch -c feature/new-feature
git push -u origin feature/new-feature
```

## GitHub Pages 部署
1. 開啟本專案 GitHub 頁面，進入 **Settings → Pages**。
2. 在 **Build and deployment** 選擇 **Deploy from a branch**。
3. Branch 選擇 `main`，資料夾選 `/(root)`，按 Save。
4. 等待 GitHub Pages 完成部署，再由 Pages 頁面提供的網址開啟網站。
5. 修改後推送到 `main`，Pages 會自動更新。

> 部署網址需以 GitHub Pages 設定頁實際顯示的網址為準；目前尚未從 GitHub Pages 設定頁確認部署完成。
