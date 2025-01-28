export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id === '1') {
        return abortNavigation()
    }
})

function nameObject(this: { a: number, b: number }, a: number, b: number) {
    this.a = a;
    this.b = b;
    return this
}

const annoucment = "Hello";
annoucment.split
document.write(annoucment, "Sukma");
console.log()