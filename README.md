# 💝 Advent Calendar - Sevgiline Özel

Kız arkadaşına özel, interaktif ve mobil uyumlu bir advent calendar!

## 🎯 Özellikler

- ✅ 24 günlük interaktif takvim
- ✅ Mobil uyumlu (responsive) tasarım
- ✅ Kar yağışı animasyonu
- ✅ Konfeti efekti
- ✅ Her gün için özelleştirilebilir mesajlar
- ✅ Tarih kontrolü (günü gelmeden açılamaz)
- ✅ Açılan günler hafızada kalır

---

## 🛠️ Nasıl Özelleştiririm?

### 1. Mesajları Düzenle
[data.js](data.js) dosyasını aç ve her gün için kendi mesajlarını yaz:

```javascript
1: {
    icon: "💕",           // Emoji
    title: "Başlık",      // Gün başlığı
    message: "Mesajın",   // Ana mesaj
    extra: ""             // Ekstra içerik (link, resim vb.)
},
```

### 2. Başlangıç Tarihini Ayarla
```javascript
const calendarConfig = {
    startDate: "2025-12-01", // İstediğin tarihi yaz
    totalDays: 24,
    // ...
};
```

### 3. Resim Eklemek İstersen
`extra` kısmına HTML ekleyebilirsin:
```javascript
extra: "<img src='resim.jpg' alt='Anımız'>"
```

---

## 🚀 ÜCRETSİZ YAYINLAMA ADIMLARI

### Seçenek 1: GitHub Pages (ÖNERİLEN - Tamamen Ücretsiz)

1. **GitHub hesabı aç**: https://github.com/signup

2. **Yeni repository oluştur**:
   - Sağ üstteki "+" → "New repository"
   - İsim: `advent-calendar` (veya istediğin bir isim)
   - Public seç
   - "Create repository" tıkla

3. **Dosyaları yükle**:
   - "uploading an existing file" linkine tıkla
   - Tüm dosyaları sürükle bırak (index.html, style.css, script.js, data.js)
   - "Commit changes" tıkla

4. **GitHub Pages'i aktifleştir**:
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main" ve "/ (root)" seç
   - Save

5. **2-3 dakika bekle**, sitenin linki görünecek:
   - `https://KULLANICIADIN.github.io/advent-calendar`

---

### Seçenek 2: Netlify (Sürükle-Bırak Yöntem)

1. https://www.netlify.com adresine git
2. GitHub ile giriş yap
3. "Sites" → "Add new site" → "Deploy manually"
4. Proje klasörünü sürükle bırak
5. Otomatik link alırsın: `random-name.netlify.app`
6. Site settings'den özel isim verebilirsin

---

### Seçenek 3: Vercel

1. https://vercel.com adresine git
2. GitHub ile giriş yap
3. "Add New Project"
4. GitHub repo'nu seç veya dosyaları yükle
5. Deploy!

---

## 💰 Özel Domain İstersen (Opsiyonel)

Ücretsiz hosting kullandıktan sonra özel domain bağlayabilirsin:

| Hizmet | Fiyat | Link |
|--------|-------|------|
| Namecheap | ~$8-12/yıl | namecheap.com |
| Google Domains | ~$12/yıl | domains.google |
| GoDaddy | ~$10-15/yıl | godaddy.com |

**Domain bağlama**: Her hosting hizmetinin ayarlarında "Custom Domain" seçeneği var.

---

## 📱 Test Etme

Yayınlamadan önce lokalde test etmek için:

1. VS Code'da "Live Server" eklentisini kur
2. `index.html` dosyasına sağ tıkla → "Open with Live Server"
3. Tarayıcıda `http://localhost:5500` açılacak

---

## 🎨 Ekstra Fikirler

- **Fotoğraf ekle**: Birlikte çekildiğiniz fotoğrafları `images/` klasörüne koyup linkle
- **Şarkı linki**: Spotify/YouTube linki ekle
- **Video**: YouTube embed kodu ekle
- **Harita**: Özel bir mekânın Google Maps linki

---

## 💕 İyi Eğlenceler!

Kız arkadaşın bu sürprize çok sevinecek! Her gün açılacak yeni bir mesaj, ona ne kadar önemsediğini gösterecek.

Sorularınız olursa yardımcı olurum! 🎄
