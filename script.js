// DOM Elementleri
const calendarGrid = document.getElementById('calendar');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const modalDay = document.getElementById('modalDay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalExtra = document.getElementById('modalExtra');

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

// Sayfa yüklendiğinde hoş geldin mesajı (opsiyonel)
window.addEventListener('load', () => {
    console.log('💝 Advent Calendar Yüklendi!');
    console.log('Bugün açılabilecek maksimum gün:', getCurrentDay());
});
