'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4cc044e253d13ba7d39c7913c0c13ef3",
".git/config": "360a1f2a5cb5dc7e3a3141c6058a768e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a5bbe0531aa26e923bcae5b353a57a8c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5c426b7fd6357f08816f79d1c8f9e8a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93bea78127f5d853b6aa46283484e68c",
".git/logs/refs/heads/main": "93bea78127f5d853b6aa46283484e68c",
".git/logs/refs/heads/master": "badf162b51cf7a6ea85e28b881687a10",
".git/logs/refs/remotes/origin/HEAD": "b68b6e18db2d7ac2dc3c6e8dc01158a6",
".git/logs/refs/remotes/origin/main": "b5bdd047a726ae42e9fbae35c19c71b0",
".git/objects/0a/be162dc2c30f6d98a0c2b963a233919e7738b1": "db0e270ae764ad7a82386903fb2d70b9",
".git/objects/13/84a69ea75cb2ff9d6bc3318b743ddc9b919594": "f4bf9d8fbcb779626456287f33454cc7",
".git/objects/14/8c968ac9855fcfa04dc470cce30401c8a41f0d": "2a41b23ad0ce1df220751b219e1dedf6",
".git/objects/14/a216c5302fe5c629957f0e2d9f1d3fab07b9d6": "22996d911cfe137027c6a3217c9f1bf0",
".git/objects/1a/9c7bcb5459fb7b9b40c1440913483430dbb0e5": "cdddbe17a4dfea5b52772b2490481980",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/aa82fcd9ffc20907e4bbae8d80d7b8a904a0c5": "ef71a49d2952b7414ad3d54f00365b4d",
".git/objects/20/bbc934d1291856ab25ef576daebd8ec4a696bb": "f7de78cb2e50e85cddfe3d059487b7b0",
".git/objects/20/e45a837d875b45c9f51f8e5930f77704c12520": "3b335dec8486a8560581a0c4fbbe4257",
".git/objects/23/a98bd17553e2ff3ff626d862741c14d4ff4206": "c078a08a29736142a9800eba825a444e",
".git/objects/24/3644bb37b589bdb434587c8dd6b4e3500f1982": "365927cc0348812aeb60f1a45d8fb504",
".git/objects/25/5b3aaaddd8318825fbfc415130b81db6529f5a": "5e2e95ec29f6829dc3e53c97e6e97cee",
".git/objects/25/7d829592e4e497fa283bb9039e084e6259af36": "83d5aff23e83d11c998a469bbe7e1fe1",
".git/objects/25/b146b42e28d976881dc8389fdecddc6b8edd4a": "cdbc58afc0f379ea07fe9dd8a5cb5cff",
".git/objects/25/b72c4a1f625e137b2a03846c8b29cc54d40557": "0f4e002a77aa0acf8640d7dad2747296",
".git/objects/25/f4447b00d2b94718c3a379137b0d5529ef7b51": "adf49eef84ea2df0d44c8578fe259891",
".git/objects/28/4e3c0cd6a323ea1627a7e135853a90b9dbd64d": "67166d094f3dae1b58b3796b5af938ad",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/10301a9f57bbda580bd97daad814626781d93b": "ff0ad2304c79beea245e220a4e07fcf7",
".git/objects/2f/3b3991c5cead9af5481e3ed33a681729da6c40": "db595af4b5c98465e8ee201df35acccb",
".git/objects/30/142a0e485c38512b746b113394ecc778d99692": "0202461f9cceda189ca630917b6d948b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/1e8933ac5007043f7493e88b1338194bbfd3d7": "18100f815ae8f47ab11cd1654d30587b",
".git/objects/43/d88a1e78a6c1e5628dc63363ff80e83097915d": "378a37cc3dc64ce661b38b867ed4ef54",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7c73ae24ffe50c04951fa459898ca3525f86b7": "c36387e76138059408bfd046213e8012",
".git/objects/4b/2989655eda645b1b42b569aab42799f05c76ea": "28cb37534d324553629498bca52ec975",
".git/objects/4b/e2c751bd7d6e1be76e56e540388364a1cffbe6": "8e0f652a2ee0207a3b93e02fa8239d14",
".git/objects/4c/3e83ead8ba1223973357b7c288270cd039faeb": "b356b1a9e769bf5c865071e89160927c",
".git/objects/51/e3c4235fc66fdc65b2216a8a02553415919ed6": "de7d37b7c408566516d00e8e1bd6e6e0",
".git/objects/52/5561c7c7aa73243ffb5a14bacd19737a0a00d3": "82f0488f63a07909d0255d4f32f6523a",
".git/objects/53/e2d47578abdc1eb65edcf96691173f462f5d54": "61de207dc83c8542ce9d01ad9c112377",
".git/objects/57/ce5c068fe21d49fcea04e7c594192f0a6345e8": "b7bdb9be9b89458ed02f5b5b9782d2b1",
".git/objects/57/e352bd55078ac8dad364d8e65f4fb028dae8a1": "36f85985db4104c0b4902f531f7cb736",
".git/objects/58/503d98a113f548747597f4f1e27baed133ceb1": "a2be9810e412c5a20064350b06f89bda",
".git/objects/5f/d1f53d233b82fe9b87bf8354ca0d72e088563e": "4522025583221294d978c10b26a9e54a",
".git/objects/62/bac8e99557f5538f0ab81d1502b320137d9cef": "0c244a31f55b53153bf42bcabe1ea017",
".git/objects/62/bd0bab8a8c340a5b54fd73abdb2dbab47197b9": "6592ca228d77e74388f73aef3fe94591",
".git/objects/63/a992d0b0744a5085a13b6c5e6c44f1235b231f": "bfd27845810d78705e7ecb7667d9d435",
".git/objects/69/35bccb38ac6551ebd04b70456cbf011fd4acd2": "facf8067461f36a801db4f39eb7e4f04",
".git/objects/6e/a4d97ccda7930e12e0767df156b3f8a9c458ea": "7630a0475671e6a077f0957c1fa03a2e",
".git/objects/70/b6d0c8aaf43e1c5a436148ef760d4ea7635983": "3fb3b14a417dd41fb11910ff4e75165a",
".git/objects/72/cbd141d9d5a457763dac2c4e74c26baf073720": "042aa78a7ad6030387b2ca217c9851ab",
".git/objects/73/fd11246a1704fd7fd05715a44eeb2b5dee3f45": "e0f94d7483ce521b4b51ce2c4a389886",
".git/objects/76/50fd29f4da6611f932aea3792e01d275f6afca": "d3237437b7e5f437ec87847cd18e426f",
".git/objects/77/ebc7538375c83bf09f70be7a3b30f0dfbe25fc": "1982f80c6b6ce0a95aef82461602f3ea",
".git/objects/78/8df0828a30c7202e351dab19d345dddf417e95": "1bc1edd8a24c7dd89f93eadb229d0726",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/75ca293df1db659fd8d1143fb852e13fe2d8e1": "82a15b839cb729ead63a6898f8f823c2",
".git/objects/7e/24eb82ca4b7a93baf2a754cda82c156d45c263": "5ad51a470b65165bb252fe59547870f3",
".git/objects/7e/48dff0344e5f52eb2dacf4fe0c9347e71bd94f": "c12a15c8127ef0e27de4b2fff2c29099",
".git/objects/84/3c7eca49b6d51816f9c252439d3d6e0edb1a7a": "ee8048d80322b5348265fa289b5ea14a",
".git/objects/84/e2aa24d755738979c45ae76a11d2779a3fbb95": "8cec36ef75edf6041eb63753efb82979",
".git/objects/85/b41c1953b30b39998d195f8878846d0516d8d8": "c961a10fe7a4da815ab8480a35999177",
".git/objects/85/deedd19ddc13087353ad584f96db49a7418c69": "d9d43d410039c2c43b2c77ed507586e6",
".git/objects/87/46d4e7d9858fdfaecf3bbc4736417e7b118227": "27cfc5f044ae21c03db7a3b1f65b0365",
".git/objects/88/3c93ad8bce2ba7e48fa01e2c407f2ecb41e2dd": "a3e22dae9dcfc305f2f6fd9170f3e29d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b379c9a084dbfa48548a6e2e0b00e316ed315c": "942e64cb3c1c40b4b189615d730dc73e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/737af39f39ac10478e0b796d8b0e765352dc22": "a40954f1fee3cd5f5d88f017f43a2acf",
".git/objects/91/4e51595b8cdc8a1ee0f91c2834ef22b48a0651": "930eb906c46b09ce0fc63a7cde9b2f1e",
".git/objects/93/8261551b668854ae2803a6f2fcedff64d92ebb": "fbc23dd7c4fd46821d50d7798777207b",
".git/objects/95/bc73147ebe7c9772ea76527bb81f7ed085030d": "8638dc8004bca627631832a98466fb17",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/1ae5fa7f653ac7d3519ead60d96a2ece493b0c": "52911582ce35b8a5ce050fa9ff4d45c6",
".git/objects/9a/813da28b3af9dd0d230045a5e214b6baddb190": "b4bd84a81026475eb61f5a9083607d3c",
".git/objects/9d/d4831dc7bffdd2c0902098a07c3c9d0eb6a636": "df0fc44d7d23bc3e0b584ec57f0964de",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/6252b0db7c47d2fc9ab6a6e8d3bc587cbd0581": "1ad869a50dc9efd80ae28aec7e5d861d",
".git/objects/a9/cbafcb3e68f88ea0d556540483b48d9bf67a6b": "77fe8062740e0d7c5732184b3f231ba6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/a2c17b504f29d9a0240df3287377f9245e9053": "cb358113effb2944947da0584dc6d954",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b1/0da3dbc16c7500aab3bb046a9d9dc65a8e0325": "05e9e9888c97ca054d83c4b188c2ab4e",
".git/objects/b1/b61e055516f9fcb17c3f92d3e3d7894d79a8c6": "a22c2fd1634231bcd980a68320392446",
".git/objects/b1/baa53e7f39e4ece7f7c42fcda28212ab59e88f": "6fd7a292c4000908e3f0eb16234493ea",
".git/objects/b3/d78f6db34d698ba2e09714a53929756b045ff5": "861085bcf62d1db55d1ce560a8930e90",
".git/objects/b4/2cbb2aacd00c14a705f5b5f36742f9f81e4a77": "0c7f337d76202afa4378fb3d215907ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9df6876514da9305cfaa0b82a74d34b71174f1": "671ba856e5bda4f69723d2819237395c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/a4e317e44128580dd556dac7c3b0526ef6a4cd": "3602fb0d8ca1ec0f297c5ac51858efa1",
".git/objects/bc/ad6fc2548cb3c4795abee2f78e7dd6c588981a": "55f284a61903b4b78d1c2cdfc2ab513b",
".git/objects/bf/2ec3dd9e6d073ad4b2113c420a8e0d4329a627": "259ac63d06a69d13071a724fcefc1c6b",
".git/objects/bf/c73491e6004c8492da1a7f54f205aaba25e987": "f60cb8c8c2ac29879ac92b973a37168b",
".git/objects/c1/6ec6aa19d4c0d4db3e8fb8a6174455e75d8561": "811482f59308f1b5a5a5288c80d9234a",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/588327d8f1e46cfabb3b7b50b201dcb93ebc7a": "3c724b8758669be314df5cbff0698001",
".git/objects/d1/b4dc23d67c5581c18a11b162956873e0c2efd9": "0e626657b48e552ba23a6644897cc6d0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1e5f0e620ae7af4f719bde7a4d796f013b2995": "2a22ab2f6a7af3f95a85f66b1f73c3da",
".git/objects/d7/b85bb547a917cbce08316d54977f96e38a71d3": "056a5ed5c78fd30bbb6f855f7a2d9c82",
".git/objects/d8/4a9b47a785bbbe139b1b194eb4c9317878e47c": "37fff52915d05546b94c23f7212d524a",
".git/objects/da/214e33a63c9077c7fc6bdb42ff04f18d7df42a": "ee0b8a17af6a3b0ed23911dbf041938f",
".git/objects/dc/1ecf410a49493d83dd9cf754d4f89c08ddef23": "67108e40d9407fcac9a6e48900a956a4",
".git/objects/de/1d703345c8cfd638e02efca5b8facd34dc945d": "b11fa880245ce0129a28e46349f15323",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/19e8fef082a5f6eb277a5d5e4d68f9cf8ebffc": "71f2c73ee58333e79d801f07ab763ead",
".git/objects/e5/635b511cf6999cff563e94cf17a0ab7ea697ff": "9dbfd5dc54f87fcffd908b690289a1b0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/337baf7939933bc0b4e6822170160c630bd717": "16aa6ff5cc624e13a9bcf2b694baf01c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/966cffcee4e79231f3b315e86ab5a6068a48e9": "7b8a097e16f26a05ad3ee5f52d747134",
".git/objects/ef/e6268148a140cf05d57c6c4eb1acb170580477": "a38674d90a61f39a1c80e22a9275519a",
".git/objects/f0/0e539f556621129a41e66d05057fee1021535b": "3ef705482ff4db54c7c7b93fd1f5a81d",
".git/objects/f0/cdc58009cee2e76d2151bd7a78864974a041d2": "982bbc0be191161e30cf27393d35d18c",
".git/objects/f2/90fc98dded1c14f0b3cde076a60793524d1027": "b077ae1c61e864d617c22dee624239bb",
".git/objects/f4/f5c9f7433cc5ef2e50d280b5eb667e35a81d38": "e5b1136737a19e4abc3cb6f80f661956",
".git/objects/f6/174fa2123b2998ec0fc6faff5056af220b9615": "e3010630f1e2f236aa1fe74e04bf85ed",
".git/objects/f6/eb601899cfc4b9351b3b07cfa85a1e3f04a39f": "63caac3b51d8d73b635a7adef516083d",
".git/objects/f9/14cd8cf04fc1409e2d7fcc5afd517d35afa5ad": "66bc2b7d6b3b3d4a5768948fd853094d",
".git/objects/f9/b3baa90fa1fc311b7498846385490afa8089ca": "2b406cb75abec4bdf39753816425f20d",
".git/objects/f9/eeb45a16eb3a8d0687caa4b523adc4e5d7c4df": "ec1d5d6b277ab8071c0f849b1cbbfb85",
".git/objects/fc/9befeba11ae6090042ba32974df6eab62f2568": "543822fd22c04aa7619c617557ffac8b",
".git/objects/fc/d5c900974a18358d866536f860cc8dae18cdbf": "98befa3fa35cd82718c601ee28dddfa0",
".git/objects/pack/pack-89cd636f0d134cb3904926880016044bff819f95.idx": "e8457d88167548010b43bc725f140ea9",
".git/objects/pack/pack-89cd636f0d134cb3904926880016044bff819f95.pack": "7f82cc2a6d692e987d9548325b76a81f",
".git/ORIG_HEAD": "d996211df29fffc96643219d55bc1d05",
".git/packed-refs": "a97110c3333e6b758af52358f9863916",
".git/refs/heads/main": "8d6909e6df8cffdb9f8e94a55ef3aed7",
".git/refs/heads/master": "6a97add954d9b581cac41d640371733f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8d6909e6df8cffdb9f8e94a55ef3aed7",
"assets/AssetManifest.json": "74dff7208aa4e9de684e2da69ec6b7eb",
"assets/assets/background4.jpg": "f0badd8e104cb3051a96197f93d738c4",
"assets/assets/no_image.jpg": "ae6dd4fa8eb7c9ddb11f686075038ec4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9aa263b5b485ee08e368c02265572397",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ba69ce025f56e6bc28611af3e3d2c593",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a079f5bf61609e6ffa60cda30bc7ef6c",
"/": "a079f5bf61609e6ffa60cda30bc7ef6c",
"main.dart.js": "5b593e757c8e995d10443a81eb5a7f06",
"manifest.json": "6b6a6adb3e0ebf4135bcabd75f16d2f5",
"README.md": "ec95ce01f60267956d947010534bbd96",
"version.json": "166687ee6090eb36e1c545909f9fbbad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
