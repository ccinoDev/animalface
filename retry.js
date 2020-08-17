function gaReload1() {
    gtag('event', '다른 사진으로 재시도 1차', {
        event_category: '다른 사진으로 재시도',
    });
}
function gaReload2() {
    gtag('event', '다른 사진으로 재시도 2차', {
        event_category: '다른 사진으로 재시도',
    });
    window.location.reload();
}

(function () {
    var d = document,
        s = d.createElement('script');
    s.src = 'https://jocoding.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();