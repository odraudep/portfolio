

const vw = window.innerWidth

if (vw <= 1097) {
    alert('[ERROR] Device too small')
} else {
    setTimeout(() => {
        alert('[Warning!] This website does not have any database, it is just for simulation')
    }, 500)
}