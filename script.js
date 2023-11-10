console.log('hello')

// import { L, ResizeObserver} from 'leaflet'

document.querySelectorAll('nav > span').forEach(a => {
    // const s = document.createElement('span')
    // s.setAttribute('data-href', a.href.split('#').pop())
    // s.innerText = a.innerText
    a.addEventListener('click', (ev) => {
        ev.stopImmediatePropagation()
        Array.from(document.getElementsByClassName('active-link')).forEach(link => link.classList.remove('active-link'))
        ev.target.classList.add('active-link')
        const target = document.getElementById(a.getAttribute('data-href'))
        if (!target) return
        Array.from(document.getElementsByClassName("targeted")).forEach(tar => {
            tar.classList.remove('targeted')
        })
        target.classList.add('targeted')
    })

    // a.parentNode.replaceChild(s, a)
})

// window.addEventListener('load', ()=> {
//     const map = L.map('map').setView([48.630841, -2.979158], 14);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);
//
//     L.marker([48.630841, -2.979158]).addTo(map);
//
//     const resizeObserver = new ResizeObserver(() => {
//         map.invalidateSize();
//     });
//
//     resizeObserver.observe(document.getElementById('map'));
// })