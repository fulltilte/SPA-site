function handleRedirect() {
    var redirectPath = window.location.pathname.replace('/fulltilte.github.io/', '/');
    window.location.replace("/?" + redirectPath);
}
handleRedirect();