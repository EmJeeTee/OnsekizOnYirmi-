// DOM Elementleri
const calendarGrid = document.getElementById('calendar');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const modalDay = document.getElementById('modalDay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalExtra = document.getElementById('modalExtra');

// 🎭 Perde Açılış Animasyonu
const curtainIntro = document.getElementById('curtainIntro');
const openCurtainBtn = document.getElementById('openCurtain');

// 🎵 Müzik Kontrolü
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

function playMusic() {
    bgMusic.volume = 0.3; // Ses seviyesi %30
    bgMusic.play().then(() => {
        isMusicPlaying = true;
        musicToggle.textContent = '🔊';
    }).catch(err => {
        console.log('Müzik için butona tıklayın');
    });
}

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔇';
        isMusicPlaying = false;
    } else {
        bgMusic.volume = 0.3;
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            musicToggle.textContent = '🔊';
        });
    }
}

musicToggle.addEventListener('click', toggleMusic);

// Perde açma fonksiyonu
function openCurtain() {
    curtainIntro.classList.add('open');
    
    // Konfeti efekti
    setTimeout(() => {
        createConfetti();
    }, 500);
    
    // Perdeyi tamamen kaldır ve müziği başlat
    setTimeout(() => {
        curtainIntro.classList.add('hidden');
        playMusic(); // 🎵 Müziği başlat
    }, 1400);
}

// Perde açma butonu
if (openCurtainBtn) {
    openCurtainBtn.addEventListener('click', openCurtain);
}

// 🔄 Her girişte açılan kutuları sıfırla
localStorage.removeItem('adventCalendarOpened');

// Başlık ve alt başlığı güncelle
document.querySelector('h1').textContent = calendarConfig.title;
document.querySelector('.subtitle').textContent = calendarConfig.subtitle;

// Bugünün tarihini al
function getCurrentDay() {
    const today = new Date();
    const startDate = new Date(calendarConfig.startDate);
    
    // Bugün başlangıç tarihinden önceyse 0 döndür
    if (today < startDate) {
        return 0;
    }
    
    // Gün farkını hesapla
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    return Math.min(diffDays, calendarConfig.totalDays);
}

// Açılmış günleri localStorage'dan al
function getOpenedDays() {
    const opened = localStorage.getItem('adventCalendarOpened');
    return opened ? JSON.parse(opened) : [];
}

// Günü açılmış olarak kaydet
function markDayAsOpened(day) {
    const opened = getOpenedDays();
    if (!opened.includes(day)) {
        opened.push(day);
        localStorage.setItem('adventCalendarOpened', JSON.stringify(opened));
    }
}

// Takvimi oluştur
function createCalendar() {
    const currentDay = getCurrentDay();
    const openedDays = getOpenedDays();
    
    // Günleri karışık sırada göstermek için array oluştur
    const days = [];
    for (let i = 1; i <= calendarConfig.totalDays; i++) {
        days.push(i);
    }
    
    // Günleri rastgele sırala (opsiyonel - kapatmak için aşağıdaki satırı yorum satırı yap)
    // shuffleArray(days);
    
    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.dataset.day = day;
        
        const isLocked = day > currentDay;
        const isOpened = openedDays.includes(day);
        
        if (isLocked) {
            dayElement.classList.add('locked');
        }
        
        if (isOpened) {
            dayElement.classList.add('opened');
        }
        
        const dayData = calendarData[day] || {};
        
        dayElement.innerHTML = `
            <span class="day-number">${day}</span>
            ${isOpened ? `<span class="day-icon">${dayData.icon || '🎁'}</span>` : ''}
            ${isLocked ? '<span class="lock-icon">🔒</span>' : ''}
        `;
        
        dayElement.addEventListener('click', () => openDay(day, isLocked));
        
        calendarGrid.appendChild(dayElement);
    });
}

// Günü aç
function openDay(day, isLocked) {
    if (isLocked) {
        showLockedMessage();
        return;
    }
    
    const dayData = calendarData[day];
    
    if (!dayData) {
        console.error('Bu gün için veri bulunamadı:', day);
        return;
    }
    
    // Günü açılmış olarak işaretle
    markDayAsOpened(day);
    
    // Takvim görünümünü güncelle
    const dayElement = document.querySelector(`[data-day="${day}"]`);
    if (dayElement && !dayElement.classList.contains('opened')) {
        dayElement.classList.add('opened');
        const dayIcon = document.createElement('span');
        dayIcon.className = 'day-icon';
        dayIcon.textContent = dayData.icon || '🎁';
        dayElement.appendChild(dayIcon);
        
        // Konfeti efekti
        createConfetti();
    }
    
    // Modal'ı doldur ve göster
    modalDay.textContent = `Gün ${day}`;
    modalIcon.textContent = dayData.icon || '🎁';
    modalTitle.textContent = dayData.title || 'Sürpriz!';
    modalMessage.textContent = dayData.message || '';
    modalExtra.innerHTML = dayData.extra || '';
    
    modal.classList.add('active');
}

// Kilitli mesaj göster
function showLockedMessage() {
    modalDay.textContent = '🔒 Kilitli';
    modalIcon.textContent = '⏰';
    modalTitle.textContent = 'Henüz Değil!';
    modalMessage.textContent = 'Bu günün sürprizi henüz açılmadı. Sabırla bekle, her güzel şey zamanında gelir! 💕';
    modalExtra.innerHTML = '';
    
    modal.classList.add('active');
}

// Modal'ı kapat
function closeModal() {
    modal.classList.remove('active');
}

// 💌 Mektup Modal Fonksiyonları
const letterModal = document.getElementById('letterModal');
const closeLetterBtn = document.getElementById('closeLetter');

function openLetter() {
    // Mevcut modal'ı kapat
    modal.classList.remove('active');
    
    // Mektup modal'ı aç
    setTimeout(() => {
        letterModal.classList.add('active');
        createConfetti();
    }, 300);
}

function closeLetter() {
    letterModal.classList.remove('active');
}

// Mektup modal event listeners
if (closeLetterBtn) {
    closeLetterBtn.addEventListener('click', closeLetter);
}

if (letterModal) {
    letterModal.addEventListener('click', (e) => {
        if (e.target === letterModal) {
            closeLetter();
        }
    });
}

// Konfeti efekti
function createConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 30);
    }
}

// Array'i karıştır (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event Listeners
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC tuşu ile modal'ı kapat
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Takvimi başlat
createCalendar();

// ❄️ Dinamik Kar Animasyonu
const snowflakesContainer = document.getElementById('snowflakes');
const snowflakeChars = ['❄', '❅', '❆', '✻', '✼', '❉', '✺'];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
    
    // Rastgele pozisyon (0% - 100%)
    const leftPos = Math.random() * 100;
    snowflake.style.left = `${leftPos}%`;
    
    // Rastgele boyut (0.6em - 1.8em)
    const size = 0.6 + Math.random() * 1.2;
    snowflake.style.fontSize = `${size}em`;
    
    // Rastgele düşme süresi (5s - 12s) - daha hızlı
    const duration = 5 + Math.random() * 7;
    snowflake.style.animationDuration = `${duration}s`;
    
    // Rastgele sürüklenme değerleri (rüzgar efekti)
    const drift = (Math.random() - 0.5) * 100;
    const driftEnd = (Math.random() - 0.5) * 100;
    snowflake.style.setProperty('--drift', `${drift}px`);
    snowflake.style.setProperty('--drift-end', `${driftEnd}px`);
    
    // Rastgele opaklık (0.5 - 1)
    snowflake.style.opacity = 0.5 + Math.random() * 0.5;
    
    snowflakesContainer.appendChild(snowflake);
    
    // Animasyon bitince kar tanesini kaldır
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

function startSnowfall() {
    // Başlangıçta birkaç kar tanesi oluştur
    for (let i = 0; i < 25; i++) {
        setTimeout(() => createSnowflake(), i * 100);
    }
    
    // Sürekli rastgele aralıklarla kar tanesi ekle
    function scheduleNextSnowflake() {
        // Rastgele aralık: 50ms - 150ms arası (yoğun kar yağışı)
        const delay = 50 + Math.random() * 100;
        setTimeout(() => {
            createSnowflake();
            scheduleNextSnowflake();
        }, delay);
    }
    
    scheduleNextSnowflake();
}

// Kar yağışını başlat
startSnowfall();

// Sayfa yüklendiğinde hoş geldin mesajı (opsiyonel)
window.addEventListener('load', () => {
    console.log('💝 Advent Calendar Yüklendi!');
    console.log('Bugün açılabilecek maksimum gün:', getCurrentDay());
});
