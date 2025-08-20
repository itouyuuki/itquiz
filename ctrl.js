// グローバル変数
//後にjsonへ移行
let quizData = [
  {
    "number": "問題1/20",
    "question": "パスワードで強固なのはどっち？",
    "choices": [
      "英語、数字、記号など様々な種類を含めた8文字のパスワード",
      "英語の小文字のみの16文字のパスワード",
    ],
    "answer": 1,
    "explanation": `16文字の小文字パスワードの方が約7,200万倍も多い組み合わせになります。
    <ul>
      <li><strong>英語（大小）+ 数字 + 記号を含む8文字</strong><br>
        使用可能な文字数が記号含めて約90文字とすると、<br>
          → 90<sup>8</sup> = 6.1京通り（6.1×10<sup>15</sup>）</li>
      <li><strong>英語小文字のみ16文字</strong><br>
        使用可能な文字数は26種類のみなので、<br>
        → 26<sup>16</sup> = 4.4穰通り（4.4×10<sup>22</sup>）</li>
    </ul>
    このように、16文字の小文字パスワードの方が約7,200万倍も多い組み合わせになります。<br>
    したがって、文字の種類が多いことも大切ですが、より長いパスワードの方が総当たり攻撃に強いと言えます。`
  },
  {
    "number": "問題2/20",
    "question": "パスワードはどのくらいの頻度で変えるべき？",
    "choices": [
      "1か月",
      "半年",
      "一年",
      "定期的に変えなくてよい"
    ],
    "answer": 3,
    "explanation": `昔は「パスワードは定期的に変更するべき」と言われていましたが、現在は必ずしもそうではありません。
  <ul>
    <li><strong>頻繁に変えると</strong>、「1234Jan」「1234Feb」のようにパターン化してしまい、逆に攻撃者に予測されやすくなってしまう</li>
    <li><strong>無理に変更すると</strong>、本人が忘れてしまい、セキュリティより利便性が下がる</li>
  </ul>
  そのため正解は「<strong>定期的に変えなくてよい</strong>」です。<br>
  ただし、<strong>不正アクセスが疑われるときやサービスから漏洩の通知があったときには、すぐに変更することが大切</strong>です。`
  },
  {
    "number": "問題3/20",
    "question": "パスワードを複数のサービスで使い回す行為が、セキュリティリスクとなるのはなぜ？",
    "choices": [
      "パスワードマネージャーアプリが利用できなくなるから",
      "一つのサービスからパスワードが漏洩した場合、他のすべてのサービスも芋づる式に不正アクセスされる可能性があるから",
      "サービスごとにパスワードの文字数や種類が異なるため、記憶が混乱してログインできなくなるから",
      "パスワードを使い回すと、定期的なパスワードの変更が難しくなるから"
    ],
    "answer": 1,
    "explanation": "一つのサービスからパスワードが漏洩すると、同じパスワードを使っている他のサービスにも不正ログインされる可能性が高いからです。これを「クレデンシャル・スタッフィング攻撃」と呼びます。"
  },
  {
    "number": "問題4/20",
    "question": "スマートフォンやPCで指紋認証を利用する際、指紋データはどのように扱われますか？",
    "choices": [
      "指紋データは、スマートフォンやPCのハードウェアに暗号化された状態で安全に保存される",
      "指紋データは、個人情報としてインターネットに公開される",
      "指紋データは、PCやスマートフォンに保存されず、認証のたびに再スキャンされる",
      "指紋データは、インターネットを通じてサーバーに送信され、クラウド上で保存・管理される"
    ],
    "answer": 0,
    "explanation": "指紋データは、スマートフォンやPCのハードウェア（セキュアエレメントやTPMチップなど）に暗号化された状態で安全に保存されます。通常、指紋データはデバイス外部に送信されることはなく、ローカルで認証処理が行われます。"
  },
  {
    "number": "問題5/20",
    "question": "ネットワークカメラやルーターなどのIoT機器の初期設定パスワードをそのまま使用し続けると、どのようなリスクが最も高まりますか？",
    "choices": [
      "機器が外部からの不正アクセスを受け、遠隔操作されたり、踏み台として悪用されたりする危険性が高まる",
      "機器の保証期間が短くなり、故障した場合に修理費用が高くなる",
      "機器のファームウェアが自動的に更新されなくなる",
      "機器の性能が低下し、通信速度が遅くなる"
    ],
    "answer": 0,
    "explanation": `ネットワークカメラやルーターなどのIoT機器には、購入時点で「初期設定パスワード」が設定されています。<br><br>
  もしこれを変更せずに使い続けると、<strong>攻撃者に簡単に推測されて不正アクセスされるリスクが非常に高くなります。</strong><br><br>
  実際に、世界中のIoT機器を狙った攻撃では、初期パスワードのまま放置されている機器が多数悪用されています。<br><br>
  その結果：
  <ul>
    <li><strong>遠隔操作される</strong>（カメラ映像を覗かれる、勝手に設定を変更されるなど）</li>
    <li><strong>踏み台として利用される</strong>（大規模なDDoS攻撃に加担させられるなど）</li>
  </ul>
  といった深刻な被害につながります。`
  },
  {
    "number": "問題6/20",
    "question": "メールでAmazonから「緊急でログインしてください」と来たとき、最初にするべきことは？",
    "choices": [
      "メールに記載されたURLをクリックし、ログインページでパスワードを変更する",
      "メールを削除し、アカウントのパスワードは変更しない",
      "メールに記載されたURLにマウスカーソルを合わせ、表示されるリンク先がAmazonの正規ドメインであることを確認する",
      "無視する"
    ],
    "answer": 2,
    "explanation": `Amazonをかたる「緊急でログインしてください」といったメールの多くは、<strong>フィッシング詐欺の可能性があります。</strong>攻撃者は、偽のログインページに誘導し、入力したIDやパスワードを盗もうとします。<br><br>
  <strong>まずやるべきことは、メールに記載されたリンク先をそのままクリックしないことです。</strong><br><br>
  代わりに、リンクにマウスカーソルを合わせて、本当にAmazonの正規ドメイン（例：<code>amazon.co.jp</code> や <code>amazon.com</code>）かどうかを確認することが重要です。<br><br>
  もし怪しいと感じたら、メールのリンクではなく、<strong>自分でブラウザからAmazon公式サイトを直接開いてログインするのが安全</strong>です。<br><br>
  （さらに、自分であらかじめブックマークしておいた公式サイトにアクセスすることも大切です。検索エンジン経由では偽サイトが混ざる可能性があるため、<strong>ブックマークを利用することでセキュリティリスクを大幅に減らせます。</strong>）`
  },
  {
    "number": "問題7/20",
    "question": "普段連絡を送ってこない相手から添付ファイルが送られてきました。開くとどうなる可能性が高い？",
    "choices": [
      "知人との関係が悪化する",
      "知人とのメールのやり取りが全て削除される",
      "ファイルを開いた後、PCに『警告』が表示されるだけで、特に影響はない",
      "開いただけで、PCにウイルスが感染し、情報が盗まれたり、データが破壊されたりする危険性がある"
    ],
    "answer": 3,
    "explanation": `普段やり取りをしない相手から、不審な添付ファイルが届いた場合、<strong>それを安易に開くのは非常に危険です。</strong><br><br>
  添付ファイルを開くだけで、以下のような被害に遭う可能性があります：
  <ul>
    <li><strong>ウイルスやマルウェアに感染する</strong></li>
    <li><strong>PCやスマートフォンの内部情報（ID・パスワード・クレジットカード情報など）が盗まれる</strong></li>
    <li><strong>データが暗号化され、身代金を要求される（ランサムウェア）</strong></li>
    <li><strong>外部に勝手にメールが送信され、さらに被害が拡大する</strong></li>
  </ul>`
  },
  {
    "number": "問題8/20",
    "question": "LINEで知人から『急ぎでプリペイドカードを買って、ギフト番号の写真を送ってほしい』というメッセージが届きました。最も適切な行動は？",
    "choices": [
      "無視して、LINEをブロックする",
      "LINEとは別の連絡手段（電話やSMSなど）で、直接本人に事実を確認する",
      "すぐに近くのコンビニでプリペイドカードを購入し、メッセージを送る",
      "送られてきたメッセージに『本当にあなた？』と返信して確認する"
    ],
    "answer": 1,
    "explanation": `LINEで知人を名乗る相手から「急ぎでプリペイドカードを買って送ってほしい」と頼まれるケースは、「LINE乗っ取り詐欺」の典型的な手口です。<br><br>
攻撃者がアカウントを不正に乗っ取り、知人を装って金銭や電子マネーをだまし取ろうとします。<br><br>
このような状況では、LINE上でやり取りを続けるのは危険です。
まず最初にやるべきことは、LINE以外の連絡手段（電話やSMSなど）で本人に直接確認することです。<br><br>
LINE上で「本当にあなた？」と聞いても、相手が詐欺師なら当然「はい」と答えます。
`
  },
  {
    "number": "問題9/20",
    "question": "オンラインサービスで不正ログインの通知を受けました。最も優先すべき行動は？",
    "choices": [
      "不正ログインが起こった原因を特定するために、PCを調査する",
      "サービスのカスタマーサポートに電話して、状況を報告する",
      "不正ログインの通知を無視し、しばらく様子を見る",
      "パスワードをすぐに変更し、二段階認証を設定する"
    ],
    "answer": 3,
    "explanation": `オンラインサービスから不正ログインの通知を受け取った場合、<strong>最も重要なのは、アカウントの安全を確保することです。</strong><br><br>
  <ol>
    <li><strong>パスワードをすぐに変更する</strong><br>
      （ア）不正ログインにより、アカウントが他人に操作されるリスクを最小化できます。</li><br>
    <li><strong>二段階認証（2FA）を設定する</strong><br>
      （ア）パスワードだけでは不十分な場合でも、スマホ認証アプリによる追加認証で不正アクセスを防ぎやすくなります。</li>
  </ol><br>
  他の選択肢は次の理由で優先度が低い：
  <ul>
    <li><strong>PCを調査：</strong>原因調査も重要ですが、まずはアカウントを守る方が先です</li>
    <li><strong>サポートに連絡：</strong>報告は後回しでもよい、まずは自分でアカウント防御</li>
    <li><strong>無視：</strong>絶対に危険です。被害が拡大します</li>
  </ul>`
  },
  {
    "number": "問題10/20",
    "question": "2025年10月にサポートが終了するものは？",
    "choices": [
      "Iphone14",
      "Windows10",
      "Android12",
      "ETCカード"
    ],
    "answer": 1,
    "explanation": `Windows 10のサポートが終了すると、以下のようなリスクがあります：<br><br>
  <ol>
    <li><strong>セキュリティ更新プログラムが提供されなくなる</strong><br>
      （ア）新たに発見されたウイルスやマルウェアからPCを守る更新が行われなくなり、ウイルス感染や不正アクセスのリスクが高まります。</li><br>
    <li><strong>不具合やバグが修正されなくなる</strong>
      <ul>
        <li>OSの不具合やアプリの互換性問題が解消されず、正常に動作しなくなる可能性があります。</li>
      </ul>
    </li><br>
    <li><strong>サポートやトラブル対応が受けられなくなる</strong>
      <ul>
        <li>Microsoftによる公式サポートが終了するため、問題が発生しても解決策を提供してもらえません。</li>
      </ul>
    </li>
  </ol><br>
  <strong>Win11へのアップデートの準備をしましょう。</strong>`
  },
  {
    "number": "問題11/20",
    "question": "「ランサムウェア」とは、どのようなマルウェアを指すか？",
    "choices": [
      "PCを操作し不正な操作を行われ、PCの所有者に不利益をもたらすもの",
      "PC内のデータを暗号化し、元に戻すことと引き換えに金銭（身代金）を要求するもの",
      "PCに侵入して個人情報を盗み出し、第三者に送信するもの",
      "PC内のデータを勝手に削除し、システムを破壊するもの"
    ],
    "answer": 1,
    "explanation": `「ランサムウェア」とは、<strong>PCやサーバー内のデータを暗号化し、元に戻すことと引き換えに金銭（身代金）を要求するマルウェア（悪意のあるソフトウェア）</strong>のことです。<br><br>
  ランサムウェアの特徴：
  <ul>
    <li><strong>感染すると、重要なファイルやドキュメントにアクセスできなくなります。</strong></li>
    <li><strong>金銭を支払っても必ずしもデータが復元される保証はありません。</strong></li>
    <li><strong>感染経路は、不正なメールの添付ファイル、偽のWebサイト、脆弱性を突いた攻撃などが一般的です。</strong></li>
  </ul>`
  },
  {
    "number": "問題12/20",
    "question": "Webサイトで「Cookieを許可しますか？」と出た場合、許可するとどうなる？",
    "choices": [
      "個人情報を全てウェブサイト側に提供する",
      "Webサイトの運営者が、あなたのブラウザのすべての閲覧履歴を把握できるようになる",
      "あなたのWebサイト上での行動履歴やログイン情報が一時的に保存される",
      "PCがお菓子のクッキーになる"
    ],
    "answer": 2,
    "explanation": `Webサイトで「Cookieを許可しますか？」と表示された場合、許可すると以下のことが起こります：<br><br>
  <ul>
    <li><strong>ブラウザに一時的に情報が保存される</strong>
      <ul>
        <li>あなたのWebサイト上での行動履歴（訪問ページや操作履歴）やログイン情報が一時的に保存されます。</li>
        <li>これにより、次回訪問時にログイン状態を保持したり、サイトの表示や設定を個別に最適化することが可能になります。</li>
      </ul>
    </li>
  </ul>`
  },
  {
    "number": "問題13/20",
    "question": "WEBサイト上で、IDやパスワードなどの個人情報を盗み取ろうとする詐欺行為を何と呼びますか？",
    "choices": [
      "フィッシング",
      "クラッキング",
      "マルウェア",
      "サイバーテロ"
    ],
    "answer": 0,
    "explanation": "フィッシングとは、偽のWebサイトやメールを使って、ユーザーのIDやパスワードなどの個人情報を盗み取ろうとする詐欺行為です。"
  },
  {
    "number": "問題14/20",
    "question": "Webサイトの『ダークパターン』とは、どのような手法を指しますか？",
    "choices": [
      "サイバー攻撃からWebサイトを保護するための、高度なセキュリティ対策",
      "Webサイトの訪問者を追跡し、行動履歴を分析するためのツール",
      "ユーザーのプライバシーを保護するために、意図的にサイトの背景色を暗くするデザイン",
      "ユーザーが誤って個人情報を提供してしまうように誘導する、悪意のあるWebデザインやUI"
    ],
    "answer": 3,
    "explanation": "ダークパターンとは、ユーザーが意図しない行動を取らせたり、誤って個人情報を提供してしまうように誘導する、悪意のあるWebデザインやUIのことを指します。"
  },
  {
    "number": "問題15/20",
    "question": "スマホアプリで「連絡先へのアクセスを許可しますか？」と出た場合、許可するとどうなる？",
    "choices": [
      "アプリがあなたの代わりに連絡先情報を使用し、友人にメッセージを送ることができるようになる",
      "アプリが連絡先情報を読み取り、外部サーバーにアップロードできるようになる",
      "アプリが電話帳に登録されている全ての電話番号とメールアドレスを読みとることができるようになる",
      "連絡先の情報が自動的に削除される"
    ],
    "answer": 2,
    "explanation": "連絡先へのアクセスを許可すると、アプリが電話帳に登録されている名前、電話番号、メールアドレスなどにアクセスできるようになります。一部のアプリでは、この情報を外部サーバーにアップロードする場合があるため注意が必要です。"
  },
  {
    "number": "問題16/20",
    "question": "スマートフォンに不正なアプリがインストールされていることに気づいた時、まず最初に取るべき行動は？",
    "choices": [
      "スマートフォンの電源を切り、しばらく放置する",
      "クレジットカード会社や銀行に連絡し、不正利用がないか確認する",
      "スマートフォンの初期化を行う",
      "アプリをすぐにアンインストールする"
    ],
    "answer": 1,
    "explanation": "不正なアプリが、クレジットカード情報や銀行口座情報を盗み取っている可能性があるため、すぐにカード会社や銀行に連絡し、不正利用がないか確認することが最も重要です。"
  },
  {
    "number": "問題17/20",
    "question": "スマートフォンとPCを比較した場合、ウイルスやマルウェアの感染リスクについて、最も適切な説明は？",
    "choices": [
      "どちらも感染リスクは変わらない",
      "スマートフォンは、PCに比べてセキュリティ機能が弱いため、感染リスクが高い",
      "PCはウイルス対策ソフトをインストールできるため、スマートフォンよりも安全である",
      "スマートフォンはアプリストアの審査が厳しいため、PCよりもウイルスに感染しにくい"
    ],
    "answer": 0,
    "explanation": "どちらが感染しにくいという科学的な根拠はありません、ただしスマートフォンにはアプリストアがあるため、ある程度のチェックが行われています。"
  },
  {
    "number": "問題18/20",
    "question": "WindowsとMacを比較した場合、ウイルスやマルウェアの感染リスクについて、最も適切な説明は？",
    "choices": [
      "MacはWindowsに比べてユーザー数が少ないため、攻撃対象になりにくく、感染リスクが低い",
      "Macは、WindowsよりもOSの構造が堅牢なため、感染しにくい",
      "どちらも感染リスクは変わらない",
      "MacはAppleが提供するApp Storeからのアプリしかインストールできないため、Windowsよりも安全である"
    ],
    "answer": 2,
    "explanation": "WindowsとMacについて、どちらが感染しにくいという科学的な根拠はありません。どちらも適切なセキュリティ対策を行うことが重要です。"
  },
  {
    "number": "問題19/20",
    "question": "AIが制作したコンテンツを無許可で利用する際に、最も注意すべきリスクは？",
    "choices": [
      "AIが生成したコンテンツは、AIの開発者に著作権が帰属するため、利用できない",
      "AIが生成したコンテンツが、元の学習データと酷似している場合、著作権侵害となる可能性がある",
      "AIが生成したコンテンツの品質が低く、利用者の信用を損なう可能性がある",
      "AIが生成したコンテンツに、悪意のあるソフトウェアが含まれている可能性がある"
    ],
    "answer": 1,
    "explanation": `AIが生成したコンテンツでも、<strong>元の著作物と似ている場合は著作権侵害のリスクがあります。</strong><br><br>
  <ul>
    <li><strong>理由</strong>
      <ul>
        <li>AIは既存の著作物を学習してコンテンツを生成するため、偶然似た表現が生まれることがあります。</li>
        <li>この場合、無断で利用すると著作権者の権利を侵害する可能性があります。</li>
      </ul>
    </li><br>
    <li><strong>著作権の帰属</strong>
      <ul>
        <li>多くのAIサービスでは、生成されたコンテンツの著作権は利用者に帰属するとされています。</li>
        <li>しかし、<strong>著作権侵害リスクを避けるためには、元の作品に酷似していないか確認してから利用することが重要</strong>です。</li>
      </ul>
    </li>
  </ul>`
  },
  {
    "number": "問題20/20",
    "question": "ハルシネーションとはAIのどのような状態を指すか？",
    "choices": [
      "AIが、学習データにない新しい情報やアイデアを生み出す現象",
      "AIが現実には存在しない、幻覚のような画像を生成する現象",
      "AIが誤った情報や事実に基づかない情報を、あたかも事実であるかのように生成する現象",
      "AIがユーザーの指示を理解できず、意図しない応答をする現象"
    ],
    "answer": 2,
    "explanation": "ハルシネーション（AIハルシネーション）とは、AIが誤った情報や事実に基づかない情報を、あたかも正しいかのように生成する現象のことです。AIが提供する情報は正しいとは限らないため、特に重要な判断や意思決定に使う際は、必ず人間が確認することが必要です。"
  }
];
let current = 0;
let score = 0;
let player = "";

const questionEl = document.getElementById("question");
const questionNumberEl = document.getElementById("questionNumber");
const choicesEl = document.getElementById("choices");
const explanationEl = document.getElementById("explanation");
const explanationTitleEl = document.getElementById("explanationTitle");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

async function startQuiz() {
  player = document.getElementById("playerName").value.trim();
  if(!player) { 
    alert("名前を入力してください！"); 
    return; 
  }
  //クイズを開始
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  current = 0; //初期化
  score = 0; //初期化
  loadQuiz();
}

function loadQuiz() {
  const q = quizData[current];
  questionNumberEl.textContent = q.number || `${current + 1}/${quizData.length}`;
  questionEl.textContent = q.question;
  explanationEl.style.display = "none";
  resultEl.style.display = "none";
  
  // explanationTitleElが存在する場合のみ非表示にする
  if (explanationTitleEl) {
    explanationTitleEl.style.display = "none";
  }
  
  choicesEl.innerHTML = "";
  
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function selectAnswer(i) {
  const q = quizData[current];
  const choiceEls = document.querySelectorAll(".choice");
  
  // 全ての選択肢のクリックを無効化し、正誤を表示
  choiceEls.forEach((el, index) => {
    el.onclick = null;
    if(index === q.answer) {
      el.classList.add("correct");
    }
    if(index === i && i !== q.answer) {
      el.classList.add("incorrect");
    }
  });
  
  // 正誤判定の○×を表示
  if(i === q.answer) {
    score++;
    resultEl.textContent = "○";
    resultEl.className = "result correct";
  } else {
    resultEl.textContent = "×";
    resultEl.className = "result incorrect";
  }
  resultEl.style.display = "block";
  
  // 解説を表示（重要：innerHTMLを使用）
  if (q.explanation) {
    // explanationTitleElが存在する場合のみ表示
    if (explanationTitleEl) {
      explanationTitleEl.style.display = "block";
    }
    // textContentではなくinnerHTMLを使用してHTMLタグを解釈
    explanationEl.innerHTML = q.explanation;
    explanationEl.style.display = "block";
  }
  
  // 次へボタンを表示
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  current++;
  if(current < quizData.length){
    loadQuiz();
  } else {
    saveResult();
    showRanking();
  }
};

function saveResult(){
  let results = JSON.parse(localStorage.getItem("quizRanking") || "[]");
  results.push({ name: player, score: score });
  results.sort((a,b) => b.score - a.score);
  localStorage.setItem("quizRanking", JSON.stringify(results));
}

function showRanking(){
  document.getElementById("quiz").style.display = "none";
  document.getElementById("ranking").style.display = "block";
  
  // 最終スコアを表示
  document.getElementById("finalScore").textContent = 
    `${player}さんの結果: ${score}/${quizData.length}問正解！`;
  
  const list = document.getElementById("rankingList");
  list.innerHTML = "";
  const results = JSON.parse(localStorage.getItem("quizRanking") || "[]");
  results.forEach((r, i) => {
    const li = document.createElement("li");
    li.textContent = `${i+1}位: ${r.name} - ${r.score}点`;
    list.appendChild(li);
  });
}

function restart(){
  document.getElementById("ranking").style.display = "none";
  document.getElementById("start").style.display = "block";
}