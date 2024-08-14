(function() {
    function getGtmId() {
        const urlParams = new URLSearchParams(window.location.search);
        const gtmId = urlParams.get('gtmid');
        return gtmId && gtmId.startsWith('GTM-') ? gtmId : localStorage.getItem('gtmId');
    }

    function loadGTM(i) {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',i);
    }

    const gtmId = getGtmId();
    if (gtmId) {
        localStorage.setItem('gtmId', gtmId);
        loadGTM(gtmId);
    }
})();