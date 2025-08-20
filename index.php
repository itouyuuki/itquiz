<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <title>目指せ！　ITリテラシーマスター！</title>
</head>
<body>

  <!-- 名前入力画面 -->
  <div id="start">
    <h1>目指せ！！ITリテラシーマスター！</h1>
    <h2>チャレンジャー名を入力</h2>
    <p>グループで挑戦の場合は、グループ名を入力してください。</p>
    <input type="text" id="playerName" placeholder="名前を入力" />
    <button onclick="startQuiz()">スタート！</button>
  </div>

  <!-- クイズ画面 -->
  <div id="quiz" style="display:none;">
    <div class="question-number" id="questionNumber"></div>
    <h2 id="question">問題文</h2>
    <div id="result" class="result" style="display:none;"></div>
    <div id="choices"></div>
    <h2 id="explanationTitle" style="display:none;">解説</h2>
    <div id="explanation" class="explanation" style="display:none;"></div>
    <button id="nextBtn">次の問題へ</button>
  </div>

  <!-- ランキング画面 -->
  <div id="ranking" style="display:none;">
    <h2>ランキング</h2>
    <p id="finalScore"></p>
    <ul id="rankingList"></ul>
    <button onclick="restart()">もう一度チャレンジ</button>
  </div>
  <script src="ctrl.js"></script>
</body>
</html>