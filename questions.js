const questions = [
  {
    image: "img/coala.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["코알라", "코끼리", "원숭이", "나무늘보"],
    answer: "코알라"
  },
  {
    image: "img/girin.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["재규어", "기린", "표범", "원숭이"],
    answer: "기린"
  },
  {
    image: "img/cat.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["기니피그", "표범", "고양이", "너구리"],
    answer: "고양이"
  },
  {
    image: "img/redbird.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["뱁새", "붉은새", "공작새", "붉은머리오목눈이"],
    answer: "붉은머리오목눈이"
  },
  {
    image: "img/gongjak.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["무늬새", "공작", "주작새", "부채새"],
    answer: "공작"
  },
  {
    image: "img/dog.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["똥개", "강아지", "멍뭉이", "고양이"],
    answer: "강아지"
  },
  {
    image: "img/dorong.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["도마뱀", "미꾸라지", "도롱뇽", "해파리"],
    answer: "도롱뇽"
  },
  {
    image: "img/damyo.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["파란문어", "담요문어", "볼록문어", "오목문어"],
    answer: "담요문어"
  },
  {
    image: "img/blobfish.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["아귀", "심해어", "블롭피쉬", "어글리피쉬"],
    answer: "블롭피쉬"
  },
  {
    image: "img/spider.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["탱커거미", "암살자거미", "브루저거미", "사마귀거"],
    answer: "암살자거미"
  },
  {
    image: "img/dokkifish.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["형광고기", "도끼고기", "아귀", "넙치"],
    answer: "도끼고기"
  },
  {
    image: "img/yeticrab.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["투구게", "예티게", "왕집게 게", "거미게"],
    answer: "예티게"
  },
  {
    image: "img/seadragon.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["나뭇잎 물고기", "해마", "나뭇잎해룡", "나뭇잎 뱀장어"],
    answer: "나뭇잎해룡"
  },
  {
    image: "img/hemeroplanes.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["살모사", "독사", "스핑크스나방에벌레", "스핑크스 뱀"],
    answer: "스핑크스나방에벌레"
  },
  {
    image: "img/fennec.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["쿼카", "사막여우", "북극여우", "남극여우"],
    answer: "사막여우"
  },
  {
    image: "img/quokka.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["쥐", "쿼카", "아기곰", "코카"],
    answer: "쿼카"
  },
  {
    image: "img/armadillo.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["철산갑", "아르마딜로", "생쥐", "민무늬쥐"],
    answer: "아르마딜로"
  },
  {
    image: "img/ori.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["너구리", "오리너구리", "펠리컨", "오리라쿤"],
    answer: "오리너구리"
  },
  {
    image: "img/devil.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["생쥐", "타스메니안 데빌", "박쥐", "데빌 생쥐"],
    answer: "타스메니안 데빌"
  },
  {
    image: "img/wombat.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["코알라", "나무늘보", "회색 원숭이", "웜뱃"],
    answer: "웜뱃"
  },
  {
    image: "img/toco.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["앵무새", "펠리컨", "열대 앵무새", "토코 투칸"],
    answer: "토코 투칸"
  },
  {
    image: "img/tree.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["원숭이", "나무원숭이", "침팬지", "나무늘보"],
    answer: "나무늘보"
  },
  {
    image: "img/capibara.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["커피바라", "코피바라", "케페바라", "카피바라"],
    answer: "카피바라"
  },
  {
    image: "img/black.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["검은원숭이", "검정원숭이", "사케 원숭이", "검은수염사키 원숭이"],
    answer: "검은수염사키 원숭이"
  },
  {
    image: "img/racun.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["너구리", "카피바라", "라쿤", "레서판다"],
    answer: "라쿤"
  },
  {
    image: "img/sugar.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["박쥐", "생쥐", "슈가글라이더", "친칠라"],
    answer: "슈가글라이더"
  },
  {
    image: "img/parret.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["미어캣", "라쿤", "패럿", "웜뱃"],
    answer: "패럿"
  },
  {
    image: "img/camelleon.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["도마뱀", "사마귀", "카멜레온", "애벌레"],
    answer: "카멜레온"
  },
  {
    image: "img/goblin.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["철갑상어", "고블린상어", "심해상어", "흑등고래"],
    answer: "고블린상어"
  },
  {
    image: "img/wolf.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["말늑대", "갈기늑대", "개늑대", "갈색늑대"],
    answer: "갈기늑대"
  },
  {
    image: "img/rusa.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["코뿔소", "바비루사", "개미핥기", "하마"],
    answer: "바비루사"
  },
  {
    image: "img/cheon.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["친친라", "천산갑", "아르마딜로", "개미핥기"],
    answer: "천산갑"
  },
  {
    image: "img/due.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["물범", "듀공", "물개", "수달"],
    answer: "듀공"
  },
  {
    image: "img/shark.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["빨판상어", "납작상어", "작은상어", "민물상어"],
    answer: "빨판상어"
  },
  {
    image: "img/panda.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["레서판다", "라쿤", "너구리", "갈색너구리"],
    answer: "레서판다"
  },
  {
    image: "img/pome.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["포메라니안", "폼피치", "스피치", "말티즈"],
    answer: "포메라니안"
  },
  {
    image: "img/chin.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["친친라", "쿼카", "웜뱃", "생쥐"],
    answer: "친친라"
  },
  {
    image: "img/gini.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["기니피그", "돼지", "토끼", "브라운피그"],
    answer: "기니피그"
  },
  {
    image: "img/bandal.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["반달가슴곰", "반달머리곰", "반달어깨곰", "반달발바닥곰"],
    answer: "반달가슴곰"
  },
  {
    image: "img/glasses.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["안경원숭이", "안경도마뱀", "안경나무늘보", "안경코알라"],
    answer: "안경원숭이"
  },
  {
    image: "img/ocapi.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["얼룩말", "말", "오카피", "오카말"],
    answer: "오카피"
  },
  {
    image: "img/sahang.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["스핑크스 고양이", "러시안고양이", "사향고양이", "샴 고양이"],
    answer: "사향고양이"
  },
  {
    image: "img/jaba.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["철갑코뿔소", "하마코뿔소", "자바코뿔소", "그레이코뿔소"],
    answer: "자바코뿔소"
  },
  {
    image: "img/galapagose.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["코끼리거북이", "장수거북이", "갈라파고스코끼리거북이", "얼룩거북이"],
    answer: "갈라파고스코끼리거북이"
  },
  {
    image: "img/hyang.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["흑등고래", "범고래", "향유고래", "돌고래"],
    answer: "향유고래"
  },
  {
    image: "img/oh.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["나무늘보", "침팬지", "오랑우탄", "원숭이"],
    answer: "오랑우탄"
  },
  {
    image: "img/polar.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["남극곰", "사막곰", "민무늬곰", "북극곰"],
    answer: "북극곰"
  },
  {
    image: "img/heok.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["향유고래", "범고래", "상어고래", "흑등고래"],
    answer: "흑등고래"
  },
  {
    image: "img/sand.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["유럽 고양이", "브라운캣", "삵", "샌드캣"],
    answer: "샌드캣"
  },
  {
    image: "img/bearded.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["붉은갈퀴앵무새", "붉은갈퀴수리", "독수리", "수염수리"],
    answer: "수염수리"
  },
  {
    image: "img/blackred.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["생쥐", "코긴 생쥐", "피노키오 쥐", "검붉은코끼리땃쥐"],
    answer: "검붉은코끼리땃쥐"
  },
  {
    image: "img/bin.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["나무늘보", "원숭이", "침팬지", "빈투롱"],
    answer: "빈투롱"
  },
  {
    image: "img/greater.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["친친라", "그레이터 빌비", "토끼", "회색 토끼"],
    answer: "그레이터 빌비"
  },
  {
    image: "img/mar.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["재규어", "마게이", "표범", "삵"],
    answer: "마게이"
  },
  {
    image: "img/indo.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["인도작은다람쥐", "인도큰다람쥐", "유럽다람쥐", "프랑스다람쥐"],
    answer: "인도큰다람쥐"
  },
  {
    image: "img/manul.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["얼룩고양이", "마눌", "유럽고양이", "러시안 고양이"],
    answer: "마눌"
  },
  {
    image: "img/fossa.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["재규어", "표범", "포사", "삵"],
    answer: "포사"
  },
  {
    image: "img/ground.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["개미핥기", "웜뱃", "땅돼지", "듀공"],
    answer: "땅돼지"
  },
  {
    image: "img/hooded.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["혹 물범", "검은 물범", "두건물범", "점박이 물범"],
    answer: "두건물범"
  },
  {
    image: "img/short.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["러시안 고양이", "렉돌 고양이", "브리티시 숏헤어", "스핑크스 고양이"],
    answer: "브리티시 숏헤어"
  },
  {
    image: "img/fersian.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["버먼 고양이", "렉돌 고양이", "페르시안 고양이", "러시안 블루"],
    answer: "페르시안 고양이"
  },
  {
    image: "img/lack.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["렉돌 고양이", "버먼 고양이", "시베리안 고양이", "러시안 고양이"],
    answer: "렉돌 고양이"
  },
  {
    image: "img/spin.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["스핑크스 고양이", "민무늬 고양이", "샴 고양이", "삵"],
    answer: "스핑크스 고양이"
  },
  {
    image: "img/vermen.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["버먼 고양이", "브리티시 숏헤어", "브라운 고양이", "렉돌 고양이"],
    answer: "버먼 고양이"
  },
  {
    image: "img/russian.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["러시안블루", "브리티시 숏헤어", "페르시안 고양이", "버먼 고양이"],
    answer: "러시안블루"
  },
  {
    image: "img/heski.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["시베리아허스키", "말라뮤트", "리트리버", "푸들"],
    answer: "시베리아허스키"
  },
  {
    image: "img/fodle.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["말티즈", "푸들", "슈나우저", "웰시코기"],
    answer: "푸들"
  },
  {
    image: "img/perd.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["닥스훈트", "셰퍼드", "레브라도", "스피츠"],
    answer: "셰퍼드"
  },
  {
    image: "img/rebrado.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["셰퍼드", "레브라도", "닥스훈트", "블랙독"],
    answer: "레브라도"
  },
  {
    image: "img/cogi.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["시바견", "웰시코기", "닥스훈트", "말티즈"],
    answer: "웰시코기"
  },
  {
    image: "img/ciba.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["시바견", "웰시코기", "닥스훈트", "말티즈"],
    answer: "시바견"
  },
  {
    image: "img/spiz.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["스피츠", "폼피츠", "포메라니안", "말티즈"],
    answer: "스피츠"
  },
  {
    image: "img/sichu.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["시추", "파피용", "말티즈", "불독"],
    answer: "시추"
  },
  {
    image: "img/papiyong.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["파피용", "슈나우저", "시추", "포메라니안"],
    answer: "파피용"
  },
  {
    image: "img/mal.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["말티즈", "포메라니안", "페르시안", "퍼그"],
    answer: "말티즈"
  },
  {
    image: "img/pug.jpg",
    question: "이 동물의 이름은 무엇인가요?",
    options: ["퍼그", "불독", "코기", "시바견"],
    answer: "퍼그"
  }
];