export default defineNuxtRouteMiddleware((to, from) => {
    if (from.fullPath === '/') {
        return navigateTo('/');
    }
    console.log('from', from);
    console.log('to', to);
});
