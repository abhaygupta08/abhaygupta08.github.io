const staticDevCoffee = "abhay-gupta-portfolio-v1"
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/contact.html",
    "/about.html",
    "/contact.css",
    "/CNAME",
    "/boiler.css",
    "/animation.css",
    "/about.css",
    "/fonts/VisueltPro-Bold.e06be4a7d7345624af47aadbd145bddc.woff2",
    "/fonts/VisueltPro-Regular.f00251d89110a6d8cac2cc1ad91a9e03.woff2",
    "/config/pp-removebg-preview.png",
    "/config/resume.pdf",
    "/assets/vertical_align_bottom_white_24dp.svg",
    "/assets/twitter.svg",
    "/assets/linkedin.svg",
    "/assets/github.svg",
    "/assets/instagram.svg",
    "/assets/paper-plane-svgrepo-com.svg",
    "/assets/mail.svg",
    "/assets/favicon.png",
    "/assets/favicon.ico",
    "/assets/ceasar-bust.c2bf68cb3b24b5361c95d04c445511a8.png",
    "/assets/abhay.svg",
    "/assets/abhay2.svg",
    "/assets/icons/icon-192x192.png",
    "/assets/icons/icon-256x256.png",
    "/assets/icons/icon-384x384.png",
    "/assets/icons/icon-512x512.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
        .then(() => self.skipWaiting())
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            if(res && !navigator.onLine) return res;
            else{
                return fetch(fetchEvent.request)
                .then(res => {
                    return caches.open(staticDevCoffee).then(cache => {
                        cache.put(fetchEvent.request.url, res.clone())
                        return res;
                    })
                })
                .catch((err) => {
                    console.log(err)
                }) // end of fetch
            }
        })
    )
})