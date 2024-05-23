function handleRedirect() {
    var redirectPath = window.location.pathname.replace('/your-repo-name/', '/');
    window.location.replace("/?" + redirectPath);
}
handleRedirect();