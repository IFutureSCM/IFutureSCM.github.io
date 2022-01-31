'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "88ddd30dad2c5427ddccc5e21a196c89",
".git/config": "36f17b0ebe801996f8ace7f471931ca3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "824ec64879c6b296628e9869c04bfd1b",
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
".git/index": "a7663c71ad3cb34ef70834c99388cf65",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83e29114dec9cbdb02dc6c3deaec0bbf",
".git/logs/refs/heads/main": "83e29114dec9cbdb02dc6c3deaec0bbf",
".git/logs/refs/remotes/origin/main": "03ecf4871fa71081066440d929f6a92f",
".git/objects/00/6e31da01d4b7645164c283f879acdc7d950639": "ed0c04c53011f942dc22afe16cae4333",
".git/objects/00/a70e8a0aa3602555e46b241120d9c459ab6031": "9ac49f0627e0d544b5cd3b26d8132f27",
".git/objects/01/693d9de91c3f9393f0338aee15149bf5b6b68e": "148d59080c34df688477bf03d76b372c",
".git/objects/02/794a7a80b4d7e87b286525946ea89a7a30d80b": "0d4f25d989f0477b5fb7ad475cf1a6e1",
".git/objects/02/8565d787cd55e1c516025bcecf243b28fe6302": "44daf1abc4c1cfd5b951a7cb95050110",
".git/objects/05/ed6a9a3ed0a4ca5815b3a61300dc214dd310f5": "4c4b34b1cc6de601428eecbc0d786590",
".git/objects/07/0602c1ba4e5303eb467743224bf7ca986d0460": "400020adfbfb31f7ea5293288bb819b9",
".git/objects/0a/10b728ce3c98777e65ed90030386709c2fb623": "2318dbc52e5859cef0ca1304439f49fe",
".git/objects/0a/17bc2e59472f7ca105c3f19924f61690d5aaf9": "cd091062aabcb5c94fa92d60ffbbfd83",
".git/objects/0b/15733473d9c64b67b40ffbf89e47bd8930dd38": "1c2ff40d772f103079437afa8cb0e963",
".git/objects/0c/a04576149fa146a44f9cdeddc1e70a2505bff0": "2b88524843375151c2b01a78266d06fa",
".git/objects/0d/8c70fa070784c9a51ade8c923d462d7e899a23": "396d3297fa1003bfa0b6070c28e6e063",
".git/objects/0e/5c1b82ce1dad3be5dc500e13c3c6e47af072c8": "a81054ba86d2056b5313109a5e424c4e",
".git/objects/0e/f95d3ee8af1c3d52b3ad409e9a779a8e4f9a40": "e4b86ec2d966d16b06602fe5ce396519",
".git/objects/0f/845d96534ace277aaefd9744080a8057713ced": "db0a3e2f40a7a9cd990d948d4be32296",
".git/objects/0f/89507813aa421aeff8ea00af690a780449290a": "e1c66f70db5be7db7fd70ecc2f2b9a46",
".git/objects/0f/f67d5c80d4a1ab0536a6890ed6cc7c5ee80aa0": "f3ae93438c74af78889daecb9c41475b",
".git/objects/11/6037ad7ee77d8fde3ff76b2b8118f8ca9fff2c": "b425faf52c208cdc8b5ac56a17408b7f",
".git/objects/11/6130e1d66bb8c5b37a5a696090bbffb74680e6": "366d335d485d999fe3e27088a0d55ed7",
".git/objects/11/c61d11753861bbfd57de258b8219f865a6b523": "6f12a75945b69e365903b1f53ef346da",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/a379b3e013d07822a4bb2446683f0cd458a1a6": "6c5bbc50bf8e3035116f036c1d194c6a",
".git/objects/13/ceb0f7306827ffcba3b50d55de293bdf175bfc": "72eb082d4373cd244462a71f430280fc",
".git/objects/14/16f585dbcf0a29232ec43fd79794a5f62a79d0": "ac242c216276838cb9a56fc2bdc5124f",
".git/objects/15/fda6f1319842497ab6407cfb28fd9492e52328": "a3c74868eecdd1412cf7a568958fe2c2",
".git/objects/16/4cf7697dcde37105935619d3b2b2df7861ccad": "de8c97076719ae07971a89522c8642f1",
".git/objects/17/8441af236584f8bd505851cf72faa69742baae": "da2b1b440f2398210cca170f32aa4450",
".git/objects/18/23d57a751e56612ab47cae0b9f5015d6284b4e": "e32a6c7416edaad15e0ff33412dc7c72",
".git/objects/18/cfcef776af2a749396b81979bec4371880d3e7": "931d3a51f7386156f6408768fb4aa717",
".git/objects/19/24e57c3b466d3d74809436e49d0848834642c4": "cd0d6445b454751a5e5c340be5536986",
".git/objects/19/df14f9b50506197d5160ced265676016b2c7b2": "abe23ba12408f66f7aec24cd5f448223",
".git/objects/1a/3a38ae895007307d06287abc9c971483935033": "47db3bb21b570914359002b9e8bc2e74",
".git/objects/1c/d789df7cfcab43f8b34df8e08ad5f812727279": "2f90b131e2c0dd50e2c788e0b5709c66",
".git/objects/1d/1e064e6214411bad7fd81302431f7a5315d8c3": "54cfa9b794a5554aab4e2ab7d40aa145",
".git/objects/1d/51f14a709b3a3256cac4cc88827cc5b5f3e84b": "9915d010497d4d081292ad1f4955725c",
".git/objects/1d/e7a643fa901858051526572eb5e3df0b6b8f5b": "fee39fe896b7f7d9437b774827227199",
".git/objects/20/b464c213bc9fe50322338ada440aff556a547b": "4b33c43826d36964ee6d7f3e7a12a966",
".git/objects/21/d39907a4426183d400e6fcbe34d3841da75225": "a2ec5894819b9d38c70b6b2a862a975a",
".git/objects/22/75b954febe28af73abc7246552048040efed35": "b11d22569eb17a58a6b269cd7d668cde",
".git/objects/22/7d728bc303ca3352121581339f2f003a16899b": "1de0313f21f1ad809b253606c50b9da0",
".git/objects/28/99c8dfb268ce608b4a92bfb3222a6d8a03b67f": "dea9968f3e3348ec39683307089838f2",
".git/objects/29/aa96488ad9b5f5a8d1fc2532f194891bc7862f": "38b603e081e3b96545438357c71a140e",
".git/objects/2a/733beed21a8a3ee4d492df28c0c4bfcb73b014": "cfda754876bcfca4384021f8331c39c8",
".git/objects/2a/9c8cc4fd09c4a980bd77c85f82b498c37d6e8e": "27c511305972aa804b53e9793697d62f",
".git/objects/2a/c3bdd8a4c6e204f897f1826a4370dbc15e438d": "07aae9a3a4a1e1e233bc6219241cb5de",
".git/objects/2c/4edee9cf58e4fccde43bbf6d03b17f0df0e632": "39e1c90bda4f35288b53b97c505feee1",
".git/objects/2c/55d41867cc69f3541ae2a86c04f3acceaed78b": "774a420cde4eee000efb2d469e5695cd",
".git/objects/2c/5ae6326440b75776460e2b0f3502160cd0113d": "7a82d7f81e151f5d8402a96eac197321",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/b354a00c5542cb78135042ba5d7c1a4efdee49": "66b60ab4d23efb84355fa4e2f00506b4",
".git/objects/2d/c0830593fff6f61ee4d75932c7560062ad2eb9": "ba2bfc67f8b768a29c6079ca41bb220e",
".git/objects/2e/2b3f164d1f5cbbfb1d16db4d366c04d1f174bd": "44a03eb8426f3fc8c887f54750949f20",
".git/objects/2e/c0fc779e94c8a97d6a9fc472c89d6c868ffa72": "81b2436a18b8e7d30a3bf74e634093ab",
".git/objects/2f/8862aaa90062d77edbc191aec09d3274567ddc": "81b981f4b3b2d14e43f01127b5e01207",
".git/objects/31/2d76a68d4ba03791889c8e182ffb1756d46630": "9280e0a019ec5e68da212e68258f77a0",
".git/objects/31/50643a7b9c11587378aa6411f083bcceb611c9": "c465e592656700bf9ae5e0f10a0c0119",
".git/objects/31/72badb83e57081f079c6898658b416d1a5ff73": "672587e8edd41ebcfdbf35721e1e4748",
".git/objects/32/411018955e10541d9182c60221d743d32475f3": "31ea36ec79ebfda613ceab453198b754",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/c2c1d919280410cae4ac528820431564567b33": "07a44f2393a76637be71e9bf3f9b0305",
".git/objects/33/5fda2f701695565a68fe7eacf10e9abac8b908": "7117ed75ef28d0036560160641c4e2c4",
".git/objects/33/9cc69bacf5fd73dcb75962e86958a84261d534": "0e5346145550afad1dc5840e93a06fe6",
".git/objects/34/500c48e22d3e853ddbe7967a65497f628f0bb5": "b0d45374b2ff83f17f46c619a002c0a1",
".git/objects/34/863e74f8a50a7f60ddc7ab771dfde38f7bc66e": "ea6ea7d527f6d4e9a92d9d5f4a140ef2",
".git/objects/34/960f0800a8311789963b00c5efa62fd6451464": "434088af9a64c63bb2cdacbbb7dcecad",
".git/objects/36/dad61ebce8c8df8577301b539848c6d6cfc5a5": "c0a90709cdeebe104fbc1e96041afa2f",
".git/objects/37/0e48eed7045434f77478065fddd3d51ecf8ef3": "8d03471db4b9ef3933c750f0242ee7d5",
".git/objects/38/2fc2524e4808c96298d786e0cb6a458ed852d7": "a0a12b280e9b71b1f16253d263d96a44",
".git/objects/38/c38252b733c6564357540f0802071c19bbd441": "f20f7860148321ec1b1832a41290b95b",
".git/objects/38/c4fdd5777281ab040610e64869a2c36681b1ce": "314834353837df29c42b2aae03c1ad1f",
".git/objects/3a/2ec6aa659745b6a6214a7b004aeb94d8a81497": "22cfefddcb63e33f38591dc44f804e73",
".git/objects/3a/a07945ef0f6afc06b5e11212add6e08f3edb7d": "897bbd750e28593b5bbf2713519c063e",
".git/objects/3b/261f85eac8ab5ae274d1c6945d59fbb4952722": "d0228203a8eabfb9aede104cfad15d76",
".git/objects/3b/798dfae2e57fbe4456264d06692bf98103ab16": "fb6258e38a6dea7b0a0abb04f669b772",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/fb6ab310fb97338312a6f63d6ae3376a82b691": "893b94081596505b8a9ad4da2712ae1b",
".git/objects/3e/f3d8ccd1dd42434468fd24ce86bbbb16ff8747": "caa37676084d67377bc298f7fedefade",
".git/objects/3f/45be3f155f7eeb7a27953037dc6f8ff0cc112c": "e3d42184e760242104df9ede021252a4",
".git/objects/40/d4515b49752ba271d858a1735e7b12787abb5c": "1babbaa62327ac2611a68acfb31d7af4",
".git/objects/41/ce54fbbfeadcd1e46483be869b9e676839afac": "6ae5b8b775c5cab83259fdb184afa7f7",
".git/objects/44/91ded7b57fc46dd670c4c97527ec0c29cfe043": "6c7b495034025a5baa38a32a7b4e7117",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/66446514796a814abfad92a1a28e154286c8c3": "cc52bb543f32fbe63472781b2dd307e1",
".git/objects/47/934498fff5b857373f9712b1f534a5daebd390": "38700250e4842865b9febc3b67770adb",
".git/objects/48/24d30856120d268aa4dfc9ad26e4cab9e3e974": "ba6620206006ac0e7af7078cb52b0c7d",
".git/objects/49/1715c09872b565bf50a40ff1e7e5e8f6f2df5c": "e926eeebc578158d94e883db32dffe8f",
".git/objects/49/24c47f67b4cfc882a8d93351487967cb730fea": "aac3062635872476e63565d5e3fbca23",
".git/objects/4d/65bbf6c4ce3a0f5090408b25923e8b68a8a803": "02e6b664b16be26fb38468ac8958dca1",
".git/objects/4e/e03be9fba6e18f09c7a832348559b6237edcee": "99a0b6ad9415b8df7d3b881aced30a77",
".git/objects/4f/44e1d432d5755f5cd2f952532505a5c573193f": "3ea64ede9880618f94420d317994e8ef",
".git/objects/4f/4c9487cd4be0ddeb907b2963b2138962e5b7a9": "c2d25f3a1a79b2072c974243d39209c7",
".git/objects/50/192dcb5ec19d9b480d2b0c8261befc225870c3": "5c93a189da1981703c62620327dc9016",
".git/objects/51/7c2571cae97bdedcc7f5c0a37bb5a114488cab": "86ac0e17955f49755f4b6653dc83e38a",
".git/objects/52/8e27659203d5064300b130da238985f79f9bb9": "bbfb242ccfb5321d64c10af12b96b7ef",
".git/objects/52/ce6990837475deee56b221564a730472b938f1": "bf8309e2993929432cddf8ee9b8ae0be",
".git/objects/53/659228e876d91e581d1819723ce3525713793f": "4005ddbd3cf231071fcf07b8fff9dfc4",
".git/objects/53/b6d3868fcbfc20a3b0b6a345425ab295a205ff": "b021e1b97fa53ccf7cd553260531b448",
".git/objects/56/dddb3efcd3bcfe46d5b5eab7df514d0e3d0f40": "b6bb9c39173c24283a729e55f28105fc",
".git/objects/57/03a64bdd579d21a33f44e291aa45a3ad33d43e": "363b117682c1571845203229b6173659",
".git/objects/57/4cc5a74517a366f7408a08e5569038ec4df99d": "fd8e591bd03d068789e1d265adf74527",
".git/objects/57/b25ae4420c9406afc56cf3f178bfe71f7f4568": "59e2e3b3c22d6960ff85b32508d98ae2",
".git/objects/58/04a1b1df75085ca570009be04d6a9ba0648d11": "78124e6dfada3642945d6d3538b2df97",
".git/objects/5b/91c03fad9f77a3f79376b2ca0479cfcb21eaba": "b60a77d687d35dc1007bd75087de95fc",
".git/objects/5c/48d5d6dc87fea3399992dc11dca49c3ea0e7ec": "477f0deba2b410b6bc58bdb9768aa90f",
".git/objects/5f/bfd35fa96e0cddf644f54a732e53bd8861adb9": "b15db85054374415d366cc887d3786eb",
".git/objects/60/410a663e167068552b56b4d1538c189381a01e": "f471124917d5662562c551ba4d9c23c1",
".git/objects/60/726ab165750e6f1086aa575f012ecc75fd708a": "0e05fb8f8931d852f9956282c70c9c38",
".git/objects/61/b9a56d08b959b4d07d1ac2d809211496b026b7": "eb0efee2ae48c15c54bc2e508f5df701",
".git/objects/61/e0b8cf11266061aac7f1fdc25c9d7c5172aff8": "fd4df23d66a76fa4087e089777a251d5",
".git/objects/62/1a90611a60a087960c68aa01a5e7efd2bccb62": "3a482a960c164fd06aabc3d80d65328b",
".git/objects/62/8e7cb6c7dda0529312df819b83a1d7a0ab755d": "df58d43d4a60cec9292e1672c07c6a64",
".git/objects/62/90e188fffc89b76a997562521a3b75fe598f2b": "5aa0e7a79d0cbaab76c79ffc5813edf2",
".git/objects/65/0352dd6674dd308d2d3a1a4a78611da88bf4f7": "6e15025fc767fe6a52d3cc5a6abcda4d",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/66/aafd57fc8b867f4b721fafc5128d6a24a8ee5a": "e1356b7b39f420068bb4105e8375087c",
".git/objects/67/cb137b1d504cd218f77825f50219a73c173fa3": "fb6e43601b3b85d513e1ef1849f0cb88",
".git/objects/68/45f4cdf49012d728c4fc337e24954d3a3fd8e3": "060fd991635cc8f5733a06e9425664c6",
".git/objects/68/4c83c9cafaf66a5a4f5a9c2534adf8c28697cf": "f3c2feff7d0b9a409f6b7cf24205aa5b",
".git/objects/69/1e7a651f23e4730940aa67038cba6ef49c8aa7": "a1e4cbbaf444938fe2c6183eb0b3daaf",
".git/objects/69/92265297ae854ee5deebd7438e247e0134b6c0": "55543e61c6893e002d7ae3c9deeaa49e",
".git/objects/6a/4372285e6e73def8610baef104c4d43d1bd582": "ff8069876659ef18fc0397718ca9e24a",
".git/objects/6a/73a37d9abf47b3c840d6b0af0ef6e149f33a6d": "f44274759d20d9a9aad72c609f8d52cf",
".git/objects/6a/93e620db4eda6ad77daeef10c54a3973a24ffd": "b9fc0bd367886581f5313ee0fdcbe362",
".git/objects/6c/82a231ebdcdddecdc5a664e99950f6d002aa16": "f67f5f4c392053296ddcc8f4e7d7911c",
".git/objects/6e/aabcc27f374ade45f2d811e34e41db8937a2c9": "3261f2947d0cbf15ca2caeca36ad87be",
".git/objects/6f/c982e9e42fbdca86da91166906bdcd4eaf346b": "b33804b6424591cbc8c8c289342a6ffe",
".git/objects/70/a76d67ac56c63e09dec2a6098de73840fbc5ed": "3502fad93580e033a96736cf4d540403",
".git/objects/71/6f21209ec39ec6ec2685cc4e1e40e859b20ecb": "911ac11329bc86e569ac4989cd84cd19",
".git/objects/71/d6e49df5248bc8a2aa18b2fac5c67e7590cfd2": "c20603ab9750ef47b49194292d533269",
".git/objects/72/0645368e850fbcf0121db4461b1d50f9f91fd5": "a50061c7bbd98cbc779f1b74690bd4b4",
".git/objects/72/d88f82de90d9f83f748ba882f404da4dff7d98": "a6d188426886fc3436b765bb20663877",
".git/objects/73/67a6c4e05ada4135d505fca6f0afe9b6788b98": "2eae1864de7f80edad4a06eb4a8d7a6d",
".git/objects/75/216fc6efee394b9d0a94103a2c1aae6d8c6c85": "120a9724925b31dd96b8d87c37d3964b",
".git/objects/75/7c9208c5636429a2ce448f0aac1ac80f9831c4": "d22732cf3f654034c97d846d9659c068",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f2898aab5a316a4cf2525bc9b2f9e032b3d70f": "25caa37177adf79d2bc521d772f7caa3",
".git/objects/7a/05fae83dcf0f58fe45865ae343704a63c38101": "204ccc0c108ac706812488800543c35c",
".git/objects/7a/cb493c759eeedb56a3df1af53918b6316218c2": "065daed1ec634d5782632ca725662582",
".git/objects/7b/00153947236f8119ddcd373c4e49f5b95df2d1": "d6a18dc3bf7aac007a1387abad34c0d3",
".git/objects/7c/26e6674914169bf646e8544feb5797a9318566": "a97bce285533969c1b49fb9682e73d49",
".git/objects/7e/4f362e93f47ab848dd66d5beb6d20615236e53": "3e12e91cb369befc5d4cefd1992e3bc9",
".git/objects/7e/b727c71199d82fd4a1b74921ec3939b9aec0c8": "0a554eff6c99ad4967df0df95909c9de",
".git/objects/80/9cd5d9b5951d2d2ee7c614630f0f5df90c6609": "1f991f93fa2eaa27a16fa4653ace2d9d",
".git/objects/81/157ca70dd06f05804787e240a47788ef38b02a": "28ee82d6b3c09151f6532b116946a0a0",
".git/objects/81/695377e550bc1ec2a6a67c800b3d58dc212567": "7a2eec2207894ba23ff3b6add25db40f",
".git/objects/82/3b0b753a855f01d5bdb61fc1dc959ecbd8bc51": "59854c0c89c4457a3174d44101858317",
".git/objects/82/4c7fd910f35ac28556261b52c918f620ce6bb3": "b27b8a04e46f24e1d570183d3522db29",
".git/objects/82/8f62dc1cc3dd0de70406275baac060fc453be1": "0205173a04ed990b8987bd888288ddb9",
".git/objects/82/d34065c454cda3fcfdb58404bedd75622b3ec4": "bcf0e1b41005c087ca5aef266842d80d",
".git/objects/83/a112245f992f4dcf2f051f90c08b1bc428d884": "2adc270e2c59e7e0044d4d58dfd1211c",
".git/objects/83/d103bbc675b6d56c01d69d2fb933b8af821fb9": "39853392a65fa51ffbea54a3e1b21de1",
".git/objects/85/79741ebbc53a141e8f7fa4fe88e5ad6d416515": "b890bee82ef4589a44ae1c94faa04fa1",
".git/objects/85/be8a2cdce9594050e7e4befea23e3b1deb4918": "69d63c9afa6b84f18b0d8c22a90c54f7",
".git/objects/86/45cc773ea5fb3c489312f7d3b83577d03ae193": "00d4dc44173d1d32dd1c74689a911a1f",
".git/objects/86/e2ad59f76c554a9c8fac31998a4dd1b703a808": "e220ede1cbf69e7e06c046d008a5c2ac",
".git/objects/86/e429f12d5096a95d228e78ba293c1e02aff778": "f38e088f59b73610f7740385369e84b3",
".git/objects/87/0a811032bb230e63120185ddc5e6aaedd7aaac": "8feaa80a6f606505344f903e94f59bb9",
".git/objects/87/58eeb32d7cca35b562be5ed5f4a817cb2ea2ac": "e9e11cdb810e0765f03666e251d4c2e6",
".git/objects/87/8895638b0193d2557bfa403fc4a34a2c7c16bb": "e4b06d8a960e6de3aeafb2f5e7896f4d",
".git/objects/87/d7d855427397eeb280a88cd4a5ff6f9efe6446": "4820589fcda6b7c9132a7ec49ca771ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/df014c3a849e078584350ad19b1ffc8000e3cf": "1f739708917b247ff3b59349381c9fad",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e80b01f3d44f32f3a8e307d3f293f367d5643b": "119f67880cb8d196e767c6dc61e95f9a",
".git/objects/8e/12539dde1f71c35d6599b07fe44e670feb6e36": "075f42c919f7fed9ecdf23068580b83e",
".git/objects/8e/66592d7f4c6b6145d058547c2c707807f5b57b": "c0aa5a85b963ede415ce51c05db2a681",
".git/objects/8e/c769a5900dca8516f4ac85352f073540de035c": "e7dbe2d8629f6b32d8beecd1386f7ceb",
".git/objects/8f/7d0eee53b5f03d707b11517b612e333eadb0b4": "c2945f22499a1943d7e7f0f969ef9aff",
".git/objects/91/29d82041713adecea98a8fcb7798d6710e0a69": "b2eb1a7eecb8a2c80f9a5e0f65ca8e5d",
".git/objects/94/01a878c9785b6b33aaf41c223910044d87c10f": "7c0eca655d7409a495fd656f6cdf1a2e",
".git/objects/94/0efc140d266145e417450106ad526e3f4f7ed8": "cb7f7c049cc8ca4cf32708e86edda133",
".git/objects/94/704bcc3fd4f43fe3a2c1a4631065a8c98b8475": "953c271038b8071aad78d9281f1af10b",
".git/objects/97/7e8a21619e1e0da309483f4aa6511607533482": "9f6a800f6615cb28400638d896261a63",
".git/objects/97/86d276f95e18ef6410b4a706cdec9a90373878": "08ec80d92d95bde65feba8b1120fb733",
".git/objects/97/ec39af86baef65b26cee2d3d78ae34d5635c44": "0407a944c6e1576aa375084d8c3a6eae",
".git/objects/99/1feee7fa6e9621c500c0fa81efc11d7f69a007": "f46105814d239c2e89edca3d9f3eb1cb",
".git/objects/99/d869b720d79b4a08ff04a1a561c9870ec7a6b5": "08506e7b2131ab1eeedcae9dc5d4f256",
".git/objects/9a/cb93d11364ece773eba2e28d10a4dc3d0a296b": "9a86654ab5a21460751e4b61089a135c",
".git/objects/9b/acf0a24dc3f21c331e60bd5a98f28906f0ab1d": "8b710465a5a62cc761f63fa5f6e337e8",
".git/objects/9d/5e9e9235160e1e30762ac16032546dfab70253": "77035927fd8b56e599ed901f516c08dd",
".git/objects/9d/830d90d524afd3c801d3cc334238f3edc046f4": "7e223c0807d3932fdb033ed548be258a",
".git/objects/9f/0a91d708ba9f18145c47009769553b1c91af1d": "a921637aaa211a9633fa9a5f3462e1b0",
".git/objects/9f/39a75a8692ea4502cae74c346ac0dff5423d54": "eaaaf0e090dcf7704658481faf676460",
".git/objects/a0/ac6c5ec981b7b73ba964708ae00716c9cb07cd": "ebb73419a6da4872ef4bd205f26e1c84",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/15eacab455c1ebdbe764e8f39ada35a041a491": "2d4d2b884c1e70441153f4cc5c0a414a",
".git/objects/a2/52b8065f4a4e497025ef9a1e16b2d94ec83110": "5a213efde2c94f58b1112ab73b1f2803",
".git/objects/a2/c524485afef9b534ed6514b86467d58ae2bcaa": "d82bb3983df8ffc06263da40c4b37345",
".git/objects/a3/1f91b8765624d35cadc1aaea7404bffd7a9a19": "8f74e4e106c46364c384fd344945bf3d",
".git/objects/a3/572db372a11d296cff763f27be2d57f1594ac0": "0b1a12c6483b6fa08a3044ad2a41eb25",
".git/objects/a4/6777fc3a9ba2e9d969c49a03c4fc70c08331f6": "7b8320fceb7048048a3848600f603dbf",
".git/objects/a5/1beb921cb92ca9980544e56ae7562b8a73b752": "f7a6cd07838b5cb3772dc45a670bdc8d",
".git/objects/a7/08ad787e9f778079d5295ae506046df7c1592e": "98fbb24efdcfde3b42dcc9f9b02b3e11",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/319d80226c1bc86873474d1630c4a156e473e4": "b613e82b5d86f53215d9fbf05f98f11d",
".git/objects/a9/cb55037ff7df91c76f34119481c4d4d2995e47": "c6a7b3255bb558cd6df02f9ffe9c7f10",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/5f854de6024265225dd06e695628f97f3aa3b0": "2d0b9a3039b705b4f50710a1a9a4de4c",
".git/objects/b0/47aa25693ae96ea00204821c7a27fb26b302f1": "2e27424939b834e7ca6aaa48b1d3becd",
".git/objects/b2/b24b33e995d4dffe92c511987f1e16b1f94b03": "e8fe9cc3b316e407efb0c9c387eba61b",
".git/objects/b3/33640a9f782def7995123907606cdb7660bcc5": "04bb93b2110a473b9d4f7021e54e0146",
".git/objects/b3/af7f5d4cdc43c4965e52e27a60366780773f0c": "7a2598732281975b6fa5b3ac8db6ab5e",
".git/objects/b4/39621ec8d9e90cb441b6962959946b8069c36a": "160e1a452fcc5338dde2823ffe0eb5a3",
".git/objects/b4/b0bd88dc7c596c91d458415e5c5b9c756b3a40": "5bf28589dfc99edcbf3a7d93f00d0aaa",
".git/objects/b7/1d642a8400c5672449e76234c74327935566dd": "bf555d4ac45a62e8f83c067daef21ffe",
".git/objects/b7/4324064374d2aef70eb282457c832b2d735e09": "e20c368f87914f4e95fc3493c58a6218",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ac3e924cde96ef38368cb078b782f84748560f": "18f3c2a0bbcea2ed5b582280c0ea0af5",
".git/objects/b9/ea337c9b4517137d5dd2895b781f5f8d43f922": "430f48e198cc73f3fb5ae82c70ae8488",
".git/objects/bb/39b9919a6f464fc72930d02b2319f6ffbb4298": "82c071a5daf9c6b3c5edad4b76920ed3",
".git/objects/bc/02875429875537982420f349b14dc016c08466": "3eb743b7435e6292f447761f2e1509f3",
".git/objects/bc/2d810a8aa810b07739b5e9cf94229b8b2e4eab": "9af04f0a6dc6951dc927b81f18f18ea2",
".git/objects/bf/8c783cac34846c1bcca1d7bef95833c9fa8570": "e21e705946f104768238ab55ad48ef6b",
".git/objects/bf/90b79b9f81b08c6ac632fda330472bf5ee90b1": "325a8f3aab9525df758214f7da6f63d5",
".git/objects/c0/3644c2f7ee9d4c6e2a38aee582a093fa7093d0": "dc2517d560bdc0548585b6ab159ef363",
".git/objects/c0/5e64670e744b20466be495653f2d8beaa5970d": "ad888a211c5de357792d352e31acc988",
".git/objects/c0/9e5d6ea60f0d3b15abf43438eee38329bb4394": "112928012a094f1adf479c3eb13bcadc",
".git/objects/c3/bba063b2807e6d78fb5be7cdf9966ddd8b0512": "76be0a0224f38b5396bf981b02d122c8",
".git/objects/c4/1825f7efd87b1f77003da865963f5a472b4723": "586b07613c3f85409878c1b81c364199",
".git/objects/c7/c7071ffa5bc56455fef5609a35f355d785dfc4": "f92b608dc3efe5bb109f606ed837e04b",
".git/objects/c8/1afff9ecfdd0ac542b81aded633179d96138c4": "cbbe61a3d4c063895f9abc352cf2aa47",
".git/objects/c8/28c659ea9fc39439c6b5752fbdf863a5c58799": "2fe7bc8cdb49da04877dd1f283c7d2f7",
".git/objects/c9/2a629071e82f28cab224556b726f2689399609": "6007db89da54bb0378c7807fb480d10f",
".git/objects/c9/4c0576afac2ac7b528cff52124c332584bfe86": "78027c67e17721a57c18c664c80acf6f",
".git/objects/c9/af44f674409d92638a5acff0f61012f47fc47b": "b73ffe4fd21a4d491008d318325f4cd5",
".git/objects/c9/ba3bafce859d28d60621c41fa1004dd44c6518": "d0893ed7319d68abdd4d5569b223fa36",
".git/objects/ca/5fc7846cf9a196af11fffeacb9a2ff8a2a441e": "94980a36e5b6f26b84d123e151b78041",
".git/objects/cb/e675c1db4daec33bcc20b2a8bbe560b6e052da": "71b8925f96bd6d67c0b4132a7bd9d250",
".git/objects/cb/f843fd9c97a7240f033d74827333bae681e7ac": "55ad45f318900c36aa3dfacdce3cf5bf",
".git/objects/cc/77a54d07b3aca5f174fdc0ee0e1cf31232cf9b": "e8ab5714b977a526053efafe33ecf433",
".git/objects/cc/902d581f5f045cb6cb935c3c4cfe9c557bdb77": "11bc371c24c1a1ee2258a81b46768806",
".git/objects/ce/1956a0f5349307312650ae1f2cd3c9bfa63a1c": "152f8af1408408d0aee444a5b8856100",
".git/objects/d0/b2d6e6e72073d7b824624a6b4d0f2a573dfa19": "63ee6740174e349395bcd1b893b3133d",
".git/objects/d0/e87bc9b27798bc2dae9bb0881ab4717db16320": "f54b8977e5c58c6a0ac3c9474c53896a",
".git/objects/d1/c66b644b183ccfc78c0b3c2d3c3b74c0e7f76f": "8a3ddf42506527ab92b2345e5ed20014",
".git/objects/d2/90436d6658a010b7d1a07f6bd3af7859c699b5": "b27810a03cad07c3ab1f1ed9cd59c3ed",
".git/objects/d3/4d6af9893d5939e49e4956395380c503bfc8a7": "69d95878a851ccdb4ebab1472c09234b",
".git/objects/d4/c54dda584f053dab87741b57dfa667b2049990": "51dfd402379fb3cbae0bdd9c76a19506",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a771257fcbc93f0ab57839a654f69b166cf09d": "fa2adfabedad64df79b6d30bc170d5b3",
".git/objects/d8/e71031c800e9b9d8feffd68308857f90028223": "c05c57b17045acb5c4ae425a4c02f8f7",
".git/objects/d9/ec8b025952a34cce5c94851a7a7b2f9485ee5e": "b7065957c58a2526cd617bb85338a12c",
".git/objects/db/19dd7ad78ec6cf2d81a0032cccc545b457c051": "20e780e85054a7cacb69022761fc8970",
".git/objects/db/2f61f9cab1484cc58a2c3f18245b84df8d2587": "de7d52f6963d6d72970677a83b17f1fa",
".git/objects/db/6470fb47308b14417c07b7db1e87c97b6f578b": "dc6a88f34d8843b4eb9b1b31e620abd4",
".git/objects/db/8609bcdbff16f7879dd8003aa76381a10a5cf9": "b1d9efd18d0ae65cd895a6a0905cdfa4",
".git/objects/db/b4e1ad059186f258ae0c0fb075c843fd470ec0": "60ef4c517a2f74ce8255ab72287913c8",
".git/objects/de/588436a5a459f4bc95702836e6d0c23f7f948d": "39a16d4bfe3994322d9bfba4c03fb847",
".git/objects/df/179369cf8221a7eff9849ffb60f34f050505d2": "cbfa7dc0f6055e2b49fb3e581cbd1b42",
".git/objects/e1/5d9f95c0de16bee64cf6584e7a4c16833b298f": "226e889d60140cc1371a0b7519d343e4",
".git/objects/e3/16e0a42952b108863d861b9b7263ee0f715146": "9ca7b4a3cf3d4079b2949dc8322c0d98",
".git/objects/e4/9768781d37347db991abc8b6f43a2cf2375bb3": "b78e87cf30dab48e7cce46b62355fb71",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/d1f2d4928feca3359675f0ed14fef7b8bb64a4": "97a893eb8a028b9de2cce4d318616a3a",
".git/objects/e6/9425e72e537845c7aa757c97ddb5d02f465646": "a7acccdfc53be9f922aa2f79fc2916ae",
".git/objects/e8/61957627970020e50039ab7bb74c4bcf5bed6d": "e7ecc6fe5bd65617dbe1cfa489ce9a08",
".git/objects/e8/8e016ca7aed6cf4bf64ad1502d8e78e2fdc24b": "d85024618d09c4cfe1fbdf2420639f11",
".git/objects/e8/df1d67e9d61cdba700b0efe2ce988de469deb5": "e28fa8dadf8cb894fb04a4d135ec2031",
".git/objects/e9/0e847dc6160070cb306823e57376465788b483": "02e414cd8dc1477e8747e7ae9cb8ad52",
".git/objects/e9/36f4c32ec663f2ab0c23d8d54796ce4eff3b90": "604a6cb2e70bd89cb35da117d79cc86a",
".git/objects/e9/43348b8ad98d37f96e82948c001c2dc67c895c": "3a917b7eba4941ac305f4bacb6ca5609",
".git/objects/e9/8171cc46aefbbfe00ff3d21ac32f3a793733b1": "75367b75cd360933446fd88f224c6218",
".git/objects/ea/9ac0abac4da99c9d602228885f9aa82f3c294f": "1c899611f107044d91f8c05112b8e046",
".git/objects/eb/45d98b67f8d0740688b5503a4e1fab401d4c45": "64bbb7d589c36f527568132c091d57d6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d8bb62c285a70be3c0a17eb82e90efe4cb6493": "bd6d16d43e1d7350cba9e9d704394b00",
".git/objects/ec/478139c923f8c926a14ddd2018e41a916d4d56": "ec1f895ccfb6faeee011e132391833dd",
".git/objects/ee/1a299a0159dc38157a6678cfb2c8a187a0647c": "f50c3411f097cb0531f71d6ddac42450",
".git/objects/ee/6cd2fea4194993fbcab09fa245927f96dbbed9": "14932f8573722c56e52a277721eb3af7",
".git/objects/ef/4c9fac8a87dd81fd8ccff892c5040333c7b5c5": "512bf9a0d0e5234c20fc925ea4ea3615",
".git/objects/ef/fec7b276352054027d67ccd80225c83e815dba": "1893a53de559535e905c3b3ce49beaf0",
".git/objects/f0/8d8f2b44ae05e336289156009eed3acdb58f7b": "35dda0997e54aaff09d4d061748d0139",
".git/objects/f2/276b5e567e40559856359479074d307001b59f": "e84d2bc6b00291a7752f687db0ca97a3",
".git/objects/f2/4261ab6e99206909c85d8c60d5a72e33d82000": "a7c7f4a4f4a322878d31452916a8d0f0",
".git/objects/f2/821b89479df1408ee7502e9cf4ded9e8aa8079": "ccae5671321e262f935992f95d77a0c7",
".git/objects/f2/a2cb3ac99bd2abdcffa6c2788941870d39bb83": "0eea6ace8f6d8e17e02771b17e793364",
".git/objects/f3/f9036fc8e3e74c3d9f551dc1c2c7e2aa9ea385": "f5ba8595d384d7fda408c170d66e835e",
".git/objects/f4/30b2d518028aa937bfaca450999bcc49317835": "d2184dadfd2aab426e73be81bc286d41",
".git/objects/f7/fcf467b7f3ee7de652272e828f35dd87c8a392": "35ed6fd241362da71aa43b43e04458d3",
".git/objects/f9/1dfa27482e298a14747d933ecd03fbe356110d": "8b2f5da7e6718f34b52853002be075dd",
".git/objects/f9/4479c006c872c4e401be685c062bbcc3ceb6b2": "1196fb7ec963cf19eee7fa5ce786cb72",
".git/objects/f9/7c204888ca6b67daeec2c24e717384b2e51d01": "ba32bf372187c98c8c117b9ad62445f2",
".git/objects/f9/9ea7f40d652e1393114015bfa73c406b704453": "4f6fcafce79867e2fe34405439ee2dc9",
".git/objects/fa/0417da77468e0926ed040f1d3d9d7a1e539279": "5f9aaff101c0b986d24a27f10669e326",
".git/objects/fa/ad77fb860095ef01284ab310bbc729daa6f81a": "c70b84a154d7a130f0e612be0dc34a36",
".git/objects/fc/b57b368e490f5f539493b82ed2e52fe08c6583": "844bc0927f1c9e62e90107def7817cf2",
".git/objects/fd/a354973734747aa2a1c1300243dd44616fb38a": "fc45580b6d111002abb0c6b93c771542",
".git/objects/ff/f4f11859aa101142d9a07c9ced2f519eac1cf3": "0771d7dac6cc9ce7a0760901132a0166",
".git/ORIG_HEAD": "fad59c4e8dd7307b61d8bb248bbb29f6",
".git/refs/heads/main": "dad9137dd027acff8ba7b4f009561a09",
".git/refs/remotes/origin/main": "dad9137dd027acff8ba7b4f009561a09",
"assets/AssetManifest.json": "f8426a04f7c472e4d43d25f140c180da",
"assets/assets/images/iFutureLogo.png": "3271e2271463ff8c21bd049d5c9af454",
"assets/assets/images/iFuture_Workforce.jpg": "4d88b484723f6bc4bed09fbfbbf8c282",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9497da8a4d1678f07aaadc31906d2938",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f3834ba9cba39dfa91f1cd2e31a6f45",
"/": "8f3834ba9cba39dfa91f1cd2e31a6f45",
"main.dart.js": "74f1787133caecf56c077f000776e561",
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
