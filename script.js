function initMap() { // Localização do escritório var officeLocation = {lat: -23.602245, lng: -46.844779}; var map = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: officeLocation }); var marker = new google.maps.Marker({ position: officeLocation, map: map }); } const counters = document.querySelectorAll('.counter'); counters.forEach(counter => { counter.innerText = '0'; const updateCounter = () => { const target = +counter.getAttribute('data-target'); const count = +counter.innerText; const increment = target / 200; if (count < target) { counter.innerText = Math.ceil(count + increment); setTimeout(updateCounter, 30); } else { counter.innerText = target; } }; updateCounter(); }); // Efeito de parallax para a imagem de fundo document.addEventListener('scroll', function() { const scrollPos = window.scrollY; const hero = document.querySelector('.hero'); hero.style.backgroundPositionY = `${scrollPos * 0.5}px`; });

