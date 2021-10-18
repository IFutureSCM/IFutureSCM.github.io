'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "85d4cf9d1a90b4879cbb8b652c95e26e",
".git/config": "36f17b0ebe801996f8ace7f471931ca3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c1971062def9972d26a18bdc4dedd8b9",
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
".git/index": "1d2b2aba44cc824d71301f485387ee7d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69b06da5232cd0614db5994b455abab3",
".git/logs/refs/heads/main": "69b06da5232cd0614db5994b455abab3",
".git/logs/refs/remotes/origin/main": "8bb0d6250dc32de81ee6bafe87838d14",
".git/objects/00/6e31da01d4b7645164c283f879acdc7d950639": "ed0c04c53011f942dc22afe16cae4333",
".git/objects/0e/f95d3ee8af1c3d52b3ad409e9a779a8e4f9a40": "e4b86ec2d966d16b06602fe5ce396519",
".git/objects/0f/845d96534ace277aaefd9744080a8057713ced": "db0a3e2f40a7a9cd990d948d4be32296",
".git/objects/0f/f67d5c80d4a1ab0536a6890ed6cc7c5ee80aa0": "f3ae93438c74af78889daecb9c41475b",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/4cf7697dcde37105935619d3b2b2df7861ccad": "de8c97076719ae07971a89522c8642f1",
".git/objects/2a/c3bdd8a4c6e204f897f1826a4370dbc15e438d": "07aae9a3a4a1e1e233bc6219241cb5de",
".git/objects/2c/5ae6326440b75776460e2b0f3502160cd0113d": "7a82d7f81e151f5d8402a96eac197321",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/5fda2f701695565a68fe7eacf10e9abac8b908": "7117ed75ef28d0036560160641c4e2c4",
".git/objects/37/0e48eed7045434f77478065fddd3d51ecf8ef3": "8d03471db4b9ef3933c750f0242ee7d5",
".git/objects/3a/2ec6aa659745b6a6214a7b004aeb94d8a81497": "22cfefddcb63e33f38591dc44f804e73",
".git/objects/3b/798dfae2e57fbe4456264d06692bf98103ab16": "fb6258e38a6dea7b0a0abb04f669b772",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/41/ce54fbbfeadcd1e46483be869b9e676839afac": "6ae5b8b775c5cab83259fdb184afa7f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/65bbf6c4ce3a0f5090408b25923e8b68a8a803": "02e6b664b16be26fb38468ac8958dca1",
".git/objects/4f/44e1d432d5755f5cd2f952532505a5c573193f": "3ea64ede9880618f94420d317994e8ef",
".git/objects/50/192dcb5ec19d9b480d2b0c8261befc225870c3": "5c93a189da1981703c62620327dc9016",
".git/objects/61/e0b8cf11266061aac7f1fdc25c9d7c5172aff8": "fd4df23d66a76fa4087e089777a251d5",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/66/aafd57fc8b867f4b721fafc5128d6a24a8ee5a": "e1356b7b39f420068bb4105e8375087c",
".git/objects/69/1e7a651f23e4730940aa67038cba6ef49c8aa7": "a1e4cbbaf444938fe2c6183eb0b3daaf",
".git/objects/72/0645368e850fbcf0121db4461b1d50f9f91fd5": "a50061c7bbd98cbc779f1b74690bd4b4",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/8895638b0193d2557bfa403fc4a34a2c7c16bb": "e4b06d8a960e6de3aeafb2f5e7896f4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/7d0eee53b5f03d707b11517b612e333eadb0b4": "c2945f22499a1943d7e7f0f969ef9aff",
".git/objects/9a/cb93d11364ece773eba2e28d10a4dc3d0a296b": "9a86654ab5a21460751e4b61089a135c",
".git/objects/9b/acf0a24dc3f21c331e60bd5a98f28906f0ab1d": "8b710465a5a62cc761f63fa5f6e337e8",
".git/objects/9d/830d90d524afd3c801d3cc334238f3edc046f4": "7e223c0807d3932fdb033ed548be258a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b4/39621ec8d9e90cb441b6962959946b8069c36a": "160e1a452fcc5338dde2823ffe0eb5a3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/8c783cac34846c1bcca1d7bef95833c9fa8570": "e21e705946f104768238ab55ad48ef6b",
".git/objects/c7/c7071ffa5bc56455fef5609a35f355d785dfc4": "f92b608dc3efe5bb109f606ed837e04b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/16e0a42952b108863d861b9b7263ee0f715146": "9ca7b4a3cf3d4079b2949dc8322c0d98",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/4261ab6e99206909c85d8c60d5a72e33d82000": "a7c7f4a4f4a322878d31452916a8d0f0",
".git/objects/f9/1dfa27482e298a14747d933ecd03fbe356110d": "8b2f5da7e6718f34b52853002be075dd",
".git/refs/heads/main": "a63876c142fe7c793fcfb6a03d69cd51",
".git/refs/remotes/origin/main": "a63876c142fe7c793fcfb6a03d69cd51",
"assets/AssetManifest.json": "6758c0e8428b6a3afe9b14bcae1b823a",
"assets/assets/images/iFutureLogo.png": "3271e2271463ff8c21bd049d5c9af454",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d0affd07a80c2e694aa9e1c2dd968410",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3ba2d1927042611781622b98776e976",
"/": "b3ba2d1927042611781622b98776e976",
"main.dart.js": "7914dfc133156e902e0046f1c6614bd3",
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
