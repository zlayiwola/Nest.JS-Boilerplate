// public/main.ts
document.addEventListener('DOMContentLoaded', () => {
    console.log("NestJS Frontend Loaded");
    
    const header = document.querySelector('header h1');
    if (header) {
        header.textContent = "Learn NestJS with TypeScript: A Step-by-Step Guide";
    }
});
