// public/main.ts
document.addEventListener('DOMContentLoaded', function () {
    console.log("NestJS Frontend Loaded");
    var header = document.querySelector('header h1');
    if (header) {
        header.textContent = "Learn NestJS with TypeScript: A Step-by-Step Guide";
    }
});
