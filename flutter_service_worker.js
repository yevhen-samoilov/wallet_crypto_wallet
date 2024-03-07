'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f08230efa56299d54198213f0ec65a7c",
"splash/img/light-2x.png": "4257b688cedc3dc2ea95b78fb858e4d2",
"splash/img/dark-4x.png": "f31953be3a3e4bbb1b2e3de9cce17e27",
"splash/img/light-3x.png": "0eb5d226cb7b5291f37818578bd7d31e",
"splash/img/dark-3x.png": "0eb5d226cb7b5291f37818578bd7d31e",
"splash/img/light-4x.png": "f31953be3a3e4bbb1b2e3de9cce17e27",
"splash/img/dark-2x.png": "4257b688cedc3dc2ea95b78fb858e4d2",
"splash/img/dark-1x.png": "568d9dc7a5ad2c10b3f4df746049d44c",
"splash/img/light-1x.png": "568d9dc7a5ad2c10b3f4df746049d44c",
"index.html": "cf85e2aecfde80925dfc71aa6d21f3ce",
"/": "cf85e2aecfde80925dfc71aa6d21f3ce",
"main.dart.js": "46cf560c76c6361299478116b2768bf9",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"wallet_crypto_wallet/version.json": "f08230efa56299d54198213f0ec65a7c",
"wallet_crypto_wallet/splash/img/light-2x.png": "4257b688cedc3dc2ea95b78fb858e4d2",
"wallet_crypto_wallet/splash/img/dark-4x.png": "f31953be3a3e4bbb1b2e3de9cce17e27",
"wallet_crypto_wallet/splash/img/light-3x.png": "0eb5d226cb7b5291f37818578bd7d31e",
"wallet_crypto_wallet/splash/img/dark-3x.png": "0eb5d226cb7b5291f37818578bd7d31e",
"wallet_crypto_wallet/splash/img/light-4x.png": "f31953be3a3e4bbb1b2e3de9cce17e27",
"wallet_crypto_wallet/splash/img/dark-2x.png": "4257b688cedc3dc2ea95b78fb858e4d2",
"wallet_crypto_wallet/splash/img/dark-1x.png": "568d9dc7a5ad2c10b3f4df746049d44c",
"wallet_crypto_wallet/splash/img/light-1x.png": "568d9dc7a5ad2c10b3f4df746049d44c",
"wallet_crypto_wallet/index.html": "582009721f38e83b52433310e9a99c43",
"wallet_crypto_wallet/main.dart.js": "46cf560c76c6361299478116b2768bf9",
"wallet_crypto_wallet/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"wallet_crypto_wallet/favicon.png": "ff6f55ca16d01a182f54d2e834d6d52a",
"wallet_crypto_wallet/icons/Icon-192.png": "590b449531fcbdcd39615119fb7e6285",
"wallet_crypto_wallet/icons/Icon-maskable-192.png": "590b449531fcbdcd39615119fb7e6285",
"wallet_crypto_wallet/icons/Icon-maskable-512.png": "f31953be3a3e4bbb1b2e3de9cce17e27",
"wallet_crypto_wallet/icons/Icon-512.png": "f31953be3a3e4bbb1b2e3de9cce17e27",
"wallet_crypto_wallet/manifest.json": "05a7d5108c10566fffdb26f4e035b18a",
"wallet_crypto_wallet/.git/config": "ba05866f4d4bb8792ddc24ffa532ec62",
"wallet_crypto_wallet/.git/objects/66/89dd5bc4df97b1aa5ce55f8fbe96e76f5933d4": "4ab464c1d0930332a25e41bf8d1fe9a0",
"wallet_crypto_wallet/.git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
"wallet_crypto_wallet/.git/objects/3d/bc789aada8da11ded9fc15e80089d5f117e728": "111cfaed106845854d68b2f1d7cbfc2b",
"wallet_crypto_wallet/.git/objects/93/6c2867b9319cb85f863cf7e34e0531254b255f": "02fd0b06d8fd4ccfbd25cd77a573abb6",
"wallet_crypto_wallet/.git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
"wallet_crypto_wallet/.git/objects/94/0cb0bdcfb24e469fa5b3055bbd8e874bba9fd6": "e6650f83245dc260f0a760f9edbc148d",
"wallet_crypto_wallet/.git/objects/05/f2416b765e2865abf310af6fc47d01a99fefe5": "eb546fd7825f8d92028f7b73ae0c4386",
"wallet_crypto_wallet/.git/objects/02/d49941dd998738f76fd049e90288e0e91dafc5": "f77e4660702e47b3754c5cc8d3d9fb6b",
"wallet_crypto_wallet/.git/objects/a3/83b9a7d3b93eb3257535dd0e0011db1725c5ec": "42ed9ec545f2d1e88c4037f16c329d30",
"wallet_crypto_wallet/.git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
"wallet_crypto_wallet/.git/objects/d0/26de949607ff1d0caaad49c8d9b9d86e52ff99": "d1e60892aeb629ef1aca4adb08446396",
"wallet_crypto_wallet/.git/objects/b3/6987ab2f8fe5d277f54487f5e13df28e28e4a5": "cdbe390cdbf2e6ddf722d65b5cac586b",
"wallet_crypto_wallet/.git/objects/ae/33d58255bb7c0d81d09a2f8d022305be3e58af": "439018d28cd85b9b4299ec1871d9dbd7",
"wallet_crypto_wallet/.git/objects/f4/433732a93536c6067194cfc9f4271dd31a29c7": "82790e2e95f7d7240a975beaf45fda42",
"wallet_crypto_wallet/.git/objects/c0/e612898a0d9fe03031f084cfb4ebcfd4b4f897": "058165fffd541420258f30516e84f1ea",
"wallet_crypto_wallet/.git/objects/ee/e1931b1e00e8549165aa6e6825365d93ff2e33": "aa350e2de0123991c5ffff3120b79975",
"wallet_crypto_wallet/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"wallet_crypto_wallet/.git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
"wallet_crypto_wallet/.git/objects/fe/d960851ee641c029c7d834e2c1b4ad8e9cf0e5": "f75f7a29879f7cf9abeb6ade2e05440c",
"wallet_crypto_wallet/.git/objects/fb/a7e10dbfc60afb2473ffd7cb2ac61097667f97": "59a79dbebb66d8b2e6375d53c5289524",
"wallet_crypto_wallet/.git/objects/ed/8ac51e8573ce7b29753b221562accb383867fd": "81e4287198f651d9ab9306376fd591ff",
"wallet_crypto_wallet/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"wallet_crypto_wallet/.git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
"wallet_crypto_wallet/.git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
"wallet_crypto_wallet/.git/objects/87/a61b3387a4a61c364a241449ce4c7089156370": "8e55ffa267601159a0d624d55d8ccd85",
"wallet_crypto_wallet/.git/objects/80/44298043b8b167f4f989c38810f25f87b95cbb": "81ee524079b1e5a2be73e16a8a6ffd5d",
"wallet_crypto_wallet/.git/objects/10/ed736a9330a9a53d1812b78186f727c8d39324": "15e05fc600f17700107d706d72d5042c",
"wallet_crypto_wallet/.git/objects/26/33f11359c2da45b21d313ed93d8473bc806286": "6eee422b8ae3c7bc2a1027730d45dbe5",
"wallet_crypto_wallet/.git/objects/4d/685c76fd0dbd345024c8afc9a5fbd57ee806fd": "2758f967e316463c66d5b2fad0fbd764",
"wallet_crypto_wallet/.git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
"wallet_crypto_wallet/.git/objects/36/078286118dfcf827f00cda2d31bf5308d32c56": "b080ed33d1987ea2915fc82ee4c9842a",
"wallet_crypto_wallet/.git/objects/09/a5a65e2f992472b9fe2f297a11914283f08f10": "a235f0aa1e706aa0bddf21d6003977b3",
"wallet_crypto_wallet/.git/objects/62/20f0e08af2816e006cc0ef541e4595f6cd2c02": "f1428644be4dac15cbdd07276960dccd",
"wallet_crypto_wallet/.git/objects/96/e818abbde8019a60eb45e26230eafe851627a3": "7aaf11fe9e3ef1cc3a2a15258dde6258",
"wallet_crypto_wallet/.git/objects/54/2d896e128a3cabe4338a563818c3000683d6fa": "df3dc1f75d833716a10077cb1a55c297",
"wallet_crypto_wallet/.git/objects/5b/409f9ebf9a05bbb8e61551f1fc98c37f56b8fa": "0786aac2e554b4c9a262067cc18c4075",
"wallet_crypto_wallet/.git/objects/d3/c67dea43f817070ebe3c9f54c31357cba72e92": "ee0a06bb2b1012194dd31547c6f73c4e",
"wallet_crypto_wallet/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"wallet_crypto_wallet/.git/objects/a7/0869c2e2b7b45af5bc848416fafd46d8520d68": "6c48b84db9d028457f16206f0a3300eb",
"wallet_crypto_wallet/.git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
"wallet_crypto_wallet/.git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
"wallet_crypto_wallet/.git/objects/cc/64b3293dfbb785439cd79101417f64bb2f5a87": "133b80b4ed84e6645ce22d454d4813b4",
"wallet_crypto_wallet/.git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
"wallet_crypto_wallet/.git/objects/ff/beab4ab23defe782f68818747b1556eb4e7bb0": "c180ffbd7bae6bd54e7e0a94e27bd3bf",
"wallet_crypto_wallet/.git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
"wallet_crypto_wallet/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"wallet_crypto_wallet/.git/objects/2c/8339949473d7890c3e55e477ca3399b1f85c1c": "63069cb02efbc985b3d36295a7eec6a5",
"wallet_crypto_wallet/.git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
"wallet_crypto_wallet/.git/objects/24/3930c1e2c56b3c77786a78ba8713a3e087b464": "f890bea4b2a7f24698f12f9c589ed711",
"wallet_crypto_wallet/.git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
"wallet_crypto_wallet/.git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
"wallet_crypto_wallet/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"wallet_crypto_wallet/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"wallet_crypto_wallet/.git/logs/HEAD": "818c4d6d72c8de48f908a48fa8833f1f",
"wallet_crypto_wallet/.git/logs/refs/heads/main": "818c4d6d72c8de48f908a48fa8833f1f",
"wallet_crypto_wallet/.git/logs/refs/remotes/origin/HEAD": "dc750888b127e0bf481811608b7cb3e4",
"wallet_crypto_wallet/.git/logs/refs/remotes/origin/main": "ee96817acb11630ea3e6d70e3c613966",
"wallet_crypto_wallet/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"wallet_crypto_wallet/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"wallet_crypto_wallet/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"wallet_crypto_wallet/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"wallet_crypto_wallet/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"wallet_crypto_wallet/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"wallet_crypto_wallet/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"wallet_crypto_wallet/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"wallet_crypto_wallet/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"wallet_crypto_wallet/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"wallet_crypto_wallet/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"wallet_crypto_wallet/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"wallet_crypto_wallet/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"wallet_crypto_wallet/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"wallet_crypto_wallet/.git/refs/heads/main": "59f45777fe65db0b9f43ee58acee4662",
"wallet_crypto_wallet/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"wallet_crypto_wallet/.git/refs/remotes/origin/main": "59f45777fe65db0b9f43ee58acee4662",
"wallet_crypto_wallet/.git/index": "1ae66489ee008b77821f24f4dc45ec3e",
"wallet_crypto_wallet/.git/COMMIT_EDITMSG": "7c897c2167f77748644493434066ae04",
"wallet_crypto_wallet/.git/FETCH_HEAD": "648d833b084036e9e1d8394c96b1948a",
"wallet_crypto_wallet/assets/AssetManifest.json": "d4169cc926d42eab843cbe8c25375342",
"wallet_crypto_wallet/assets/NOTICES": "74ca2e2878f3cabf3e92ac31d12e11bf",
"wallet_crypto_wallet/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"wallet_crypto_wallet/assets/AssetManifest.bin.json": "31c49de1fb17ddd13d2b0767efd3520e",
"wallet_crypto_wallet/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dfc948893091e36cfae2e0280d7a5484",
"wallet_crypto_wallet/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"wallet_crypto_wallet/assets/AssetManifest.bin": "d4537e22ab19ea1c5aec60feb6a3b979",
"wallet_crypto_wallet/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"wallet_crypto_wallet/assets/assets/images/full_logo.png": "f8454ff85672fc295b101fa5dc4645d9",
"wallet_crypto_wallet/assets/assets/images/logo.png": "f31b53e04bb6c0e9be371bd7e0af1868",
"wallet_crypto_wallet/assets/assets/images/2.png": "fa1c36383b63a3040a4098aa0dbbb758",
"wallet_crypto_wallet/assets/assets/images/3.png": "8ac12cc1a78b69f73613400b26b6d350",
"wallet_crypto_wallet/assets/assets/images/1.png": "a2830bf4fef72ff270ba6bd62af89f31",
"wallet_crypto_wallet/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"wallet_crypto_wallet/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"wallet_crypto_wallet/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"wallet_crypto_wallet/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"wallet_crypto_wallet/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"wallet_crypto_wallet/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"wallet_crypto_wallet/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"wallet_crypto_wallet/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"wallet_crypto_wallet/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"wallet_crypto_wallet/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ff6f55ca16d01a182f54d2e834d6d52a",
"icons/Icon-192.png": "590b449531fcbdcd39615119fb7e6285",
"icons/Icon-maskable-192.png": "590b449531fcbdcd39615119fb7e6285",
"icons/Icon-maskable-512.png": "f31953be3a3e4bbb1b2e3de9cce17e27",
"icons/Icon-512.png": "f31953be3a3e4bbb1b2e3de9cce17e27",
"manifest.json": "05a7d5108c10566fffdb26f4e035b18a",
".git/config": "e523912223c468943c06659e09e0bf1c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/a5/e7f2b6b363ab4e8f95385fe5e7ceca2ff32eb7": "e0c01dc75f01f1c005e5e7c2c257d69e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/54/256f7645a9adc6e246b20162a0b97062c32596": "d7b1554cce71c1ccf3cad486137b3175",
".git/objects/a9/e0966d19b8639a69a533a92aca8da2643304ed": "31d6c832c9d4fe96fa2f4ec10b2d9c9c",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5339c69b871cd2eec4f173476f248d94",
".git/logs/refs/heads/main": "5339c69b871cd2eec4f173476f248d94",
".git/description": "117aa7720e09e723ea8dce141e8bafc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9d99288bd78dc25f037d1a3c3e1cefde",
".git/index": "28e8ea507f45d9ebabdc49106a882e3d",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/AssetManifest.json": "d4169cc926d42eab843cbe8c25375342",
"assets/NOTICES": "74ca2e2878f3cabf3e92ac31d12e11bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "31c49de1fb17ddd13d2b0767efd3520e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dfc948893091e36cfae2e0280d7a5484",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d4537e22ab19ea1c5aec60feb6a3b979",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/full_logo.png": "f8454ff85672fc295b101fa5dc4645d9",
"assets/assets/images/logo.png": "f31b53e04bb6c0e9be371bd7e0af1868",
"assets/assets/images/2.png": "fa1c36383b63a3040a4098aa0dbbb758",
"assets/assets/images/3.png": "8ac12cc1a78b69f73613400b26b6d350",
"assets/assets/images/1.png": "a2830bf4fef72ff270ba6bd62af89f31",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
