<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../public/img/lg1.png" class="h-8" alt="Flowbite Logo" />
                <span
                    class="self-center text-xl font-playfair font-medium bg-gradient-to-l from-violet-800 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap dark:text-white">Sukma
                    Rizki</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-mono flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="../pages/Home.vue"
                            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About
                            Me</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skill</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact
                            Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- <nav class="navbar">
        <div class="navbar-left">
            <img src="/public/img/lg1.png" alt="Logo" class="logo" />
        </div>
        <div class="navbar-right">
            <ul class="nav-links">
                <li><a href="#home" class="contact-button">Home</a></li>
                <li><a href="../pages/About.vue">About Me</a></li>
                <li><a href="../pages/Skill.vue">Skill</a></li>
                <li><a href="../pages/Contact.vue">Contact Me</a></li>
            </ul>
        </div>
    </nav> -->

</template>
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-left {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    margin-right: 10px;
}

.brand-name {
    font-size: 18px;
    font-weight: bold;
    color: #555;
}

.navbar-right {
    display: flex;
    font-family: 'Bricolage Grotesque';
    font-size: 15px;


}

.nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links li {
    margin: 0 10px;
}

.nav-links a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.nav-links a:hover {
    color: #290974;
    border-color: #290974;
}

.contact-button {

    color: #ffffff;
    background: linear-gradient(to top, #381C63, #8DB2F2);

}

.contact-button:hover {
    background-color: #5a4ecf;
    border-color: #5a4ecf;

}
</style>
<script>
export default {
    name: 'NavbarComponent'
}
</script>