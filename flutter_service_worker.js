'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b358c4fbc97a0026db5648ad755ed831",
".git/config": "36f17b0ebe801996f8ace7f471931ca3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "795baeb0e1165699b0d5394915cf0a38",
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
".git/index": "b032a690acdc89f5fe2cf7f8726dac45",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1e454fd8e8b67aaf8fe38ccbdc93969",
".git/logs/refs/heads/main": "a1e454fd8e8b67aaf8fe38ccbdc93969",
".git/logs/refs/remotes/origin/main": "58799075a109f1f016c2aa00a124bfa2",
".git/objects/00/6e31da01d4b7645164c283f879acdc7d950639": "ed0c04c53011f942dc22afe16cae4333",
".git/objects/01/693d9de91c3f9393f0338aee15149bf5b6b68e": "148d59080c34df688477bf03d76b372c",
".git/objects/02/794a7a80b4d7e87b286525946ea89a7a30d80b": "0d4f25d989f0477b5fb7ad475cf1a6e1",
".git/objects/02/8565d787cd55e1c516025bcecf243b28fe6302": "44daf1abc4c1cfd5b951a7cb95050110",
".git/objects/0a/10b728ce3c98777e65ed90030386709c2fb623": "2318dbc52e5859cef0ca1304439f49fe",
".git/objects/0b/15733473d9c64b67b40ffbf89e47bd8930dd38": "1c2ff40d772f103079437afa8cb0e963",
".git/objects/0e/f95d3ee8af1c3d52b3ad409e9a779a8e4f9a40": "e4b86ec2d966d16b06602fe5ce396519",
".git/objects/0f/845d96534ace277aaefd9744080a8057713ced": "db0a3e2f40a7a9cd990d948d4be32296",
".git/objects/0f/f67d5c80d4a1ab0536a6890ed6cc7c5ee80aa0": "f3ae93438c74af78889daecb9c41475b",
".git/objects/11/6130e1d66bb8c5b37a5a696090bbffb74680e6": "366d335d485d999fe3e27088a0d55ed7",
".git/objects/11/c61d11753861bbfd57de258b8219f865a6b523": "6f12a75945b69e365903b1f53ef346da",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/16f585dbcf0a29232ec43fd79794a5f62a79d0": "ac242c216276838cb9a56fc2bdc5124f",
".git/objects/16/4cf7697dcde37105935619d3b2b2df7861ccad": "de8c97076719ae07971a89522c8642f1",
".git/objects/18/23d57a751e56612ab47cae0b9f5015d6284b4e": "e32a6c7416edaad15e0ff33412dc7c72",
".git/objects/19/df14f9b50506197d5160ced265676016b2c7b2": "abe23ba12408f66f7aec24cd5f448223",
".git/objects/1a/3a38ae895007307d06287abc9c971483935033": "47db3bb21b570914359002b9e8bc2e74",
".git/objects/1d/51f14a709b3a3256cac4cc88827cc5b5f3e84b": "9915d010497d4d081292ad1f4955725c",
".git/objects/1d/e7a643fa901858051526572eb5e3df0b6b8f5b": "fee39fe896b7f7d9437b774827227199",
".git/objects/2a/c3bdd8a4c6e204f897f1826a4370dbc15e438d": "07aae9a3a4a1e1e233bc6219241cb5de",
".git/objects/2c/4edee9cf58e4fccde43bbf6d03b17f0df0e632": "39e1c90bda4f35288b53b97c505feee1",
".git/objects/2c/5ae6326440b75776460e2b0f3502160cd0113d": "7a82d7f81e151f5d8402a96eac197321",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/2b3f164d1f5cbbfb1d16db4d366c04d1f174bd": "44a03eb8426f3fc8c887f54750949f20",
".git/objects/2e/c0fc779e94c8a97d6a9fc472c89d6c868ffa72": "81b2436a18b8e7d30a3bf74e634093ab",
".git/objects/2f/8862aaa90062d77edbc191aec09d3274567ddc": "81b981f4b3b2d14e43f01127b5e01207",
".git/objects/31/50643a7b9c11587378aa6411f083bcceb611c9": "c465e592656700bf9ae5e0f10a0c0119",
".git/objects/31/72badb83e57081f079c6898658b416d1a5ff73": "672587e8edd41ebcfdbf35721e1e4748",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/c2c1d919280410cae4ac528820431564567b33": "07a44f2393a76637be71e9bf3f9b0305",
".git/objects/33/5fda2f701695565a68fe7eacf10e9abac8b908": "7117ed75ef28d0036560160641c4e2c4",
".git/objects/34/500c48e22d3e853ddbe7967a65497f628f0bb5": "b0d45374b2ff83f17f46c619a002c0a1",
".git/objects/34/863e74f8a50a7f60ddc7ab771dfde38f7bc66e": "ea6ea7d527f6d4e9a92d9d5f4a140ef2",
".git/objects/37/0e48eed7045434f77478065fddd3d51ecf8ef3": "8d03471db4b9ef3933c750f0242ee7d5",
".git/objects/38/2fc2524e4808c96298d786e0cb6a458ed852d7": "a0a12b280e9b71b1f16253d263d96a44",
".git/objects/38/c4fdd5777281ab040610e64869a2c36681b1ce": "314834353837df29c42b2aae03c1ad1f",
".git/objects/3a/2ec6aa659745b6a6214a7b004aeb94d8a81497": "22cfefddcb63e33f38591dc44f804e73",
".git/objects/3a/a07945ef0f6afc06b5e11212add6e08f3edb7d": "897bbd750e28593b5bbf2713519c063e",
".git/objects/3b/261f85eac8ab5ae274d1c6945d59fbb4952722": "d0228203a8eabfb9aede104cfad15d76",
".git/objects/3b/798dfae2e57fbe4456264d06692bf98103ab16": "fb6258e38a6dea7b0a0abb04f669b772",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/fb6ab310fb97338312a6f63d6ae3376a82b691": "893b94081596505b8a9ad4da2712ae1b",
".git/objects/3e/f3d8ccd1dd42434468fd24ce86bbbb16ff8747": "caa37676084d67377bc298f7fedefade",
".git/objects/41/ce54fbbfeadcd1e46483be869b9e676839afac": "6ae5b8b775c5cab83259fdb184afa7f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/66446514796a814abfad92a1a28e154286c8c3": "cc52bb543f32fbe63472781b2dd307e1",
".git/objects/4d/65bbf6c4ce3a0f5090408b25923e8b68a8a803": "02e6b664b16be26fb38468ac8958dca1",
".git/objects/4e/e03be9fba6e18f09c7a832348559b6237edcee": "99a0b6ad9415b8df7d3b881aced30a77",
".git/objects/4f/44e1d432d5755f5cd2f952532505a5c573193f": "3ea64ede9880618f94420d317994e8ef",
".git/objects/4f/4c9487cd4be0ddeb907b2963b2138962e5b7a9": "c2d25f3a1a79b2072c974243d39209c7",
".git/objects/50/192dcb5ec19d9b480d2b0c8261befc225870c3": "5c93a189da1981703c62620327dc9016",
".git/objects/51/7c2571cae97bdedcc7f5c0a37bb5a114488cab": "86ac0e17955f49755f4b6653dc83e38a",
".git/objects/52/ce6990837475deee56b221564a730472b938f1": "bf8309e2993929432cddf8ee9b8ae0be",
".git/objects/53/659228e876d91e581d1819723ce3525713793f": "4005ddbd3cf231071fcf07b8fff9dfc4",
".git/objects/56/dddb3efcd3bcfe46d5b5eab7df514d0e3d0f40": "b6bb9c39173c24283a729e55f28105fc",
".git/objects/57/4cc5a74517a366f7408a08e5569038ec4df99d": "fd8e591bd03d068789e1d265adf74527",
".git/objects/57/b25ae4420c9406afc56cf3f178bfe71f7f4568": "59e2e3b3c22d6960ff85b32508d98ae2",
".git/objects/5c/48d5d6dc87fea3399992dc11dca49c3ea0e7ec": "477f0deba2b410b6bc58bdb9768aa90f",
".git/objects/5f/bfd35fa96e0cddf644f54a732e53bd8861adb9": "b15db85054374415d366cc887d3786eb",
".git/objects/60/410a663e167068552b56b4d1538c189381a01e": "f471124917d5662562c551ba4d9c23c1",
".git/objects/60/726ab165750e6f1086aa575f012ecc75fd708a": "0e05fb8f8931d852f9956282c70c9c38",
".git/objects/61/e0b8cf11266061aac7f1fdc25c9d7c5172aff8": "fd4df23d66a76fa4087e089777a251d5",
".git/objects/62/1a90611a60a087960c68aa01a5e7efd2bccb62": "3a482a960c164fd06aabc3d80d65328b",
".git/objects/62/90e188fffc89b76a997562521a3b75fe598f2b": "5aa0e7a79d0cbaab76c79ffc5813edf2",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/66/aafd57fc8b867f4b721fafc5128d6a24a8ee5a": "e1356b7b39f420068bb4105e8375087c",
".git/objects/69/1e7a651f23e4730940aa67038cba6ef49c8aa7": "a1e4cbbaf444938fe2c6183eb0b3daaf",
".git/objects/69/92265297ae854ee5deebd7438e247e0134b6c0": "55543e61c6893e002d7ae3c9deeaa49e",
".git/objects/6e/aabcc27f374ade45f2d811e34e41db8937a2c9": "3261f2947d0cbf15ca2caeca36ad87be",
".git/objects/70/a76d67ac56c63e09dec2a6098de73840fbc5ed": "3502fad93580e033a96736cf4d540403",
".git/objects/71/6f21209ec39ec6ec2685cc4e1e40e859b20ecb": "911ac11329bc86e569ac4989cd84cd19",
".git/objects/71/d6e49df5248bc8a2aa18b2fac5c67e7590cfd2": "c20603ab9750ef47b49194292d533269",
".git/objects/72/0645368e850fbcf0121db4461b1d50f9f91fd5": "a50061c7bbd98cbc779f1b74690bd4b4",
".git/objects/72/d88f82de90d9f83f748ba882f404da4dff7d98": "a6d188426886fc3436b765bb20663877",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/cb493c759eeedb56a3df1af53918b6316218c2": "065daed1ec634d5782632ca725662582",
".git/objects/7c/26e6674914169bf646e8544feb5797a9318566": "a97bce285533969c1b49fb9682e73d49",
".git/objects/7e/4f362e93f47ab848dd66d5beb6d20615236e53": "3e12e91cb369befc5d4cefd1992e3bc9",
".git/objects/82/8f62dc1cc3dd0de70406275baac060fc453be1": "0205173a04ed990b8987bd888288ddb9",
".git/objects/82/d34065c454cda3fcfdb58404bedd75622b3ec4": "bcf0e1b41005c087ca5aef266842d80d",
".git/objects/83/a112245f992f4dcf2f051f90c08b1bc428d884": "2adc270e2c59e7e0044d4d58dfd1211c",
".git/objects/83/d103bbc675b6d56c01d69d2fb933b8af821fb9": "39853392a65fa51ffbea54a3e1b21de1",
".git/objects/85/be8a2cdce9594050e7e4befea23e3b1deb4918": "69d63c9afa6b84f18b0d8c22a90c54f7",
".git/objects/86/45cc773ea5fb3c489312f7d3b83577d03ae193": "00d4dc44173d1d32dd1c74689a911a1f",
".git/objects/87/8895638b0193d2557bfa403fc4a34a2c7c16bb": "e4b06d8a960e6de3aeafb2f5e7896f4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/df014c3a849e078584350ad19b1ffc8000e3cf": "1f739708917b247ff3b59349381c9fad",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e80b01f3d44f32f3a8e307d3f293f367d5643b": "119f67880cb8d196e767c6dc61e95f9a",
".git/objects/8e/12539dde1f71c35d6599b07fe44e670feb6e36": "075f42c919f7fed9ecdf23068580b83e",
".git/objects/8e/c769a5900dca8516f4ac85352f073540de035c": "e7dbe2d8629f6b32d8beecd1386f7ceb",
".git/objects/8f/7d0eee53b5f03d707b11517b612e333eadb0b4": "c2945f22499a1943d7e7f0f969ef9aff",
".git/objects/94/0efc140d266145e417450106ad526e3f4f7ed8": "cb7f7c049cc8ca4cf32708e86edda133",
".git/objects/97/86d276f95e18ef6410b4a706cdec9a90373878": "08ec80d92d95bde65feba8b1120fb733",
".git/objects/97/ec39af86baef65b26cee2d3d78ae34d5635c44": "0407a944c6e1576aa375084d8c3a6eae",
".git/objects/9a/cb93d11364ece773eba2e28d10a4dc3d0a296b": "9a86654ab5a21460751e4b61089a135c",
".git/objects/9b/acf0a24dc3f21c331e60bd5a98f28906f0ab1d": "8b710465a5a62cc761f63fa5f6e337e8",
".git/objects/9d/830d90d524afd3c801d3cc334238f3edc046f4": "7e223c0807d3932fdb033ed548be258a",
".git/objects/9f/0a91d708ba9f18145c47009769553b1c91af1d": "a921637aaa211a9633fa9a5f3462e1b0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/15eacab455c1ebdbe764e8f39ada35a041a491": "2d4d2b884c1e70441153f4cc5c0a414a",
".git/objects/a2/52b8065f4a4e497025ef9a1e16b2d94ec83110": "5a213efde2c94f58b1112ab73b1f2803",
".git/objects/a2/c524485afef9b534ed6514b86467d58ae2bcaa": "d82bb3983df8ffc06263da40c4b37345",
".git/objects/a3/1f91b8765624d35cadc1aaea7404bffd7a9a19": "8f74e4e106c46364c384fd344945bf3d",
".git/objects/a3/572db372a11d296cff763f27be2d57f1594ac0": "0b1a12c6483b6fa08a3044ad2a41eb25",
".git/objects/a5/1beb921cb92ca9980544e56ae7562b8a73b752": "f7a6cd07838b5cb3772dc45a670bdc8d",
".git/objects/a7/08ad787e9f778079d5295ae506046df7c1592e": "98fbb24efdcfde3b42dcc9f9b02b3e11",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/319d80226c1bc86873474d1630c4a156e473e4": "b613e82b5d86f53215d9fbf05f98f11d",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b4/39621ec8d9e90cb441b6962959946b8069c36a": "160e1a452fcc5338dde2823ffe0eb5a3",
".git/objects/b4/b0bd88dc7c596c91d458415e5c5b9c756b3a40": "5bf28589dfc99edcbf3a7d93f00d0aaa",
".git/objects/b7/4324064374d2aef70eb282457c832b2d735e09": "e20c368f87914f4e95fc3493c58a6218",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ac3e924cde96ef38368cb078b782f84748560f": "18f3c2a0bbcea2ed5b582280c0ea0af5",
".git/objects/b9/ea337c9b4517137d5dd2895b781f5f8d43f922": "430f48e198cc73f3fb5ae82c70ae8488",
".git/objects/bb/39b9919a6f464fc72930d02b2319f6ffbb4298": "82c071a5daf9c6b3c5edad4b76920ed3",
".git/objects/bc/02875429875537982420f349b14dc016c08466": "3eb743b7435e6292f447761f2e1509f3",
".git/objects/bf/8c783cac34846c1bcca1d7bef95833c9fa8570": "e21e705946f104768238ab55ad48ef6b",
".git/objects/bf/90b79b9f81b08c6ac632fda330472bf5ee90b1": "325a8f3aab9525df758214f7da6f63d5",
".git/objects/c0/5e64670e744b20466be495653f2d8beaa5970d": "ad888a211c5de357792d352e31acc988",
".git/objects/c3/bba063b2807e6d78fb5be7cdf9966ddd8b0512": "76be0a0224f38b5396bf981b02d122c8",
".git/objects/c7/c7071ffa5bc56455fef5609a35f355d785dfc4": "f92b608dc3efe5bb109f606ed837e04b",
".git/objects/c9/2a629071e82f28cab224556b726f2689399609": "6007db89da54bb0378c7807fb480d10f",
".git/objects/c9/4c0576afac2ac7b528cff52124c332584bfe86": "78027c67e17721a57c18c664c80acf6f",
".git/objects/cb/e675c1db4daec33bcc20b2a8bbe560b6e052da": "71b8925f96bd6d67c0b4132a7bd9d250",
".git/objects/cb/f843fd9c97a7240f033d74827333bae681e7ac": "55ad45f318900c36aa3dfacdce3cf5bf",
".git/objects/d1/c66b644b183ccfc78c0b3c2d3c3b74c0e7f76f": "8a3ddf42506527ab92b2345e5ed20014",
".git/objects/d2/90436d6658a010b7d1a07f6bd3af7859c699b5": "b27810a03cad07c3ab1f1ed9cd59c3ed",
".git/objects/d3/4d6af9893d5939e49e4956395380c503bfc8a7": "69d95878a851ccdb4ebab1472c09234b",
".git/objects/d4/c54dda584f053dab87741b57dfa667b2049990": "51dfd402379fb3cbae0bdd9c76a19506",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a771257fcbc93f0ab57839a654f69b166cf09d": "fa2adfabedad64df79b6d30bc170d5b3",
".git/objects/db/8609bcdbff16f7879dd8003aa76381a10a5cf9": "b1d9efd18d0ae65cd895a6a0905cdfa4",
".git/objects/e3/16e0a42952b108863d861b9b7263ee0f715146": "9ca7b4a3cf3d4079b2949dc8322c0d98",
".git/objects/e4/9768781d37347db991abc8b6f43a2cf2375bb3": "b78e87cf30dab48e7cce46b62355fb71",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9425e72e537845c7aa757c97ddb5d02f465646": "a7acccdfc53be9f922aa2f79fc2916ae",
".git/objects/e8/61957627970020e50039ab7bb74c4bcf5bed6d": "e7ecc6fe5bd65617dbe1cfa489ce9a08",
".git/objects/e9/0e847dc6160070cb306823e57376465788b483": "02e414cd8dc1477e8747e7ae9cb8ad52",
".git/objects/e9/36f4c32ec663f2ab0c23d8d54796ce4eff3b90": "604a6cb2e70bd89cb35da117d79cc86a",
".git/objects/e9/43348b8ad98d37f96e82948c001c2dc67c895c": "3a917b7eba4941ac305f4bacb6ca5609",
".git/objects/e9/8171cc46aefbbfe00ff3d21ac32f3a793733b1": "75367b75cd360933446fd88f224c6218",
".git/objects/eb/45d98b67f8d0740688b5503a4e1fab401d4c45": "64bbb7d589c36f527568132c091d57d6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d8bb62c285a70be3c0a17eb82e90efe4cb6493": "bd6d16d43e1d7350cba9e9d704394b00",
".git/objects/ee/1a299a0159dc38157a6678cfb2c8a187a0647c": "f50c3411f097cb0531f71d6ddac42450",
".git/objects/ee/6cd2fea4194993fbcab09fa245927f96dbbed9": "14932f8573722c56e52a277721eb3af7",
".git/objects/f0/8d8f2b44ae05e336289156009eed3acdb58f7b": "35dda0997e54aaff09d4d061748d0139",
".git/objects/f2/276b5e567e40559856359479074d307001b59f": "e84d2bc6b00291a7752f687db0ca97a3",
".git/objects/f2/4261ab6e99206909c85d8c60d5a72e33d82000": "a7c7f4a4f4a322878d31452916a8d0f0",
".git/objects/f2/821b89479df1408ee7502e9cf4ded9e8aa8079": "ccae5671321e262f935992f95d77a0c7",
".git/objects/f2/a2cb3ac99bd2abdcffa6c2788941870d39bb83": "0eea6ace8f6d8e17e02771b17e793364",
".git/objects/f7/fcf467b7f3ee7de652272e828f35dd87c8a392": "35ed6fd241362da71aa43b43e04458d3",
".git/objects/f9/1dfa27482e298a14747d933ecd03fbe356110d": "8b2f5da7e6718f34b52853002be075dd",
".git/objects/f9/4479c006c872c4e401be685c062bbcc3ceb6b2": "1196fb7ec963cf19eee7fa5ce786cb72",
".git/objects/fa/ad77fb860095ef01284ab310bbc729daa6f81a": "c70b84a154d7a130f0e612be0dc34a36",
".git/refs/heads/main": "e367d94b9748ff56a2e6894641e080a7",
".git/refs/remotes/origin/main": "e367d94b9748ff56a2e6894641e080a7",
"assets/AssetManifest.json": "f8426a04f7c472e4d43d25f140c180da",
"assets/assets/images/iFutureLogo.png": "3271e2271463ff8c21bd049d5c9af454",
"assets/assets/images/iFuture_Workforce.jpg": "4d88b484723f6bc4bed09fbfbbf8c282",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "171b0a34c7067237bc576b8fde492e25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "37b6a72522185223add01276ada7dd68",
"/": "37b6a72522185223add01276ada7dd68",
"main.dart.js": "c1e3999917c101b49b2a7a61aa665166",
"manifest.json": "2e38ca5e21a45820e64c52f9aad38de9",
"version.json": "e4476eab9a8b3cf9018fcc6a684c2d2e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
