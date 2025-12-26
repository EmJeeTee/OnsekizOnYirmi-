// 🎄 ADVENT CALENDAR VERİLERİ 🎄
// Her günün içeriğini buradan özelleştirebilirsin!
// startDate: Takvimin başlangıç tarihi (YYYY-MM-DD formatında)

const calendarConfig = {
    startDate: "2025-12-01", // Takvimin başlangıç tarihi
    totalDays: 24, // Toplam gün sayısı
    title: "💝 Türkan Yücebaş 💝",
    subtitle: ""
};

// Her gün için içerik
// icon: Emoji veya ikon
// title: Başlık
// message: Ana mesaj
// extra: Ekstra içerik (opsiyonel) - resim, link, vb.

const calendarData = {
    1: {
        icon: "💕",
        title: "18/10/2023 - ♾️",
        message: "18 Ekim 2023'te başlayan hikayemizin kısa bir özetini hazırlamaya çalıştım. Umarım beğenirsin :)",
        extra: "<img src='img/first.jpeg' style='max-width: 100%; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);'>"
    },
    2: {
        icon: "☕",
        title: "Kahve Zamanı",
        message: "Bugün seninle kahve içmek isterdim. Ama uzaktayken bile her yudum kahvede seni düşünüyorum. Favori kahven her zaman aklımda! ☕💕",
        extra: ""
    },
    3: {
        icon: "🎵",
        title: "Şarkımız",
        message: "Bu şarkıyı her duyduğumda sen aklıma geliyorsun. Birlikte dinlediğimiz o anlar... Hepsini biriktiriyorum kalbimde.",
        extra: "<a href='https://open.spotify.com' target='_blank'>🎧 Şarkıyı Dinle</a>"
    },
    4: {
        icon: "📸",
        title: "Anılarımız",
        message: "Seninle geçirdiğimiz her an bir hazine. Bu fotoğraf benim favorilerimden... Daha nice güzel anılara! 📸",
        extra: "<p style='color: #feca57;'>Buraya özel bir fotoğraf ekleyebilirsin!</p>"
    },
    5: {
        icon: "🌟",
        title: "Sen Bir Yıldızsın",
        message: "Hayatıma ışık saçıyorsun. Karanlık gecelerde bile sen benim yol gösterenim. Parlak yıldızım benim! ⭐",
        extra: ""
    },
    6: {
        icon: "🎁",
        title: "Mini Sürpriz",
        message: "Bugün sana sanal bir sarılış gönderiyorum! 🤗 Kollarımı açtım, gel içine! Seni o kadar çok özlüyorum ki...",
        extra: ""
    },
    7: {
        icon: "📝",
        title: "Sana Bir Söz",
        message: "Sana söz veriyorum: Her zaman yanında olacağım. İyi günde, kötü günde, zor zamanlarda... Elimden asla bırakmayacağım.",
        extra: ""
    },
    8: {
        icon: "🍫",
        title: "Tatlı Bir Gün",
        message: "Bugün tatlı bir gün olsun! Çikolata kadar tatlısın sen. Aslında daha da tatlısın! 🍫💕",
        extra: ""
    },
    9: {
        icon: "💫",
        title: "Dilek Zamanı",
        message: "Bir dilek hakkın var! Gözlerini kapat ve dile... Ben zaten en büyük dileğimi gerçekleştirdim: Seni bulmak! 🌠",
        extra: ""
    },
    10: {
        icon: "🎬",
        title: "Film Gecesi",
        message: "Seninle film izlemek dünyanın en güzel şeyi. Patlamış mısır hazır mı? Bir sonraki buluşmamızda favori filmini izleyelim! 🍿",
        extra: ""
    },
    11: {
        icon: "💌",
        title: "Aşk Mektubu",
        message: "Keşke kelimeler sana olan sevgimi tam olarak anlatabilse... Ama bil ki, her kelime yetersiz kalıyor. Çünkü seni sevmek kelimelerden öte bir şey. 💌",
        extra: ""
    },
    12: {
        icon: "🌹",
        title: "Gül Bahçesi",
        message: "Sana gerçek güller veremiyorum ama bu sanal güller de içten geliyor: 🌹🌹🌹 Bir gün sana kocaman bir buket alacağım!",
        extra: ""
    },
    13: {
        icon: "😊",
        title: "Gülüşün",
        message: "Senin gülüşün benim en büyük motivasyonum. O gülümsemeyi görmek için her şeyi yaparım. Bugün en az 3 kez gülümse, tamam mı? 😊",
        extra: ""
    },
    14: {
        icon: "💑",
        title: "Birlikte",
        message: "Seninle birlikte olmak hayatımın en güzel kararı. Her günümüz bir macera, her anımız bir hediye. Teşekkür ederim hayatımda olduğun için.",
        extra: ""
    },
    15: {
        icon: "🎭",
        title: "Komik Anımız",
        message: "Hatırlıyor musun o günü? [Buraya komik bir anınızı yazabilirsin] 😂 Seninle gülmek çok güzel!",
        extra: ""
    },
    16: {
        icon: "🏠",
        title: "Gelecek Hayallerim",
        message: "Seninle kurmak istediğim bir gelecek var. Küçük bir ev, sabah kahveleri, akşam sohbetleri... Hepsi seninle güzel olacak. 🏡💕",
        extra: ""
    },
    17: {
        icon: "🎨",
        title: "Renklerim",
        message: "Hayatıma renk kattın. Senden önce her şey gri gibiydi, şimdi gökkuşağı gibi! Sen benim en güzel rengimsin. 🌈",
        extra: ""
    },
    18: {
        icon: "🧸",
        title: "Sarılma Günü",
        message: "Bugün sana ekstra sıkı sarılmak istiyorum! 🤗 Bu sanal sarılış gerçeğinin yerini tutmaz ama... *sarılır* 💕",
        extra: ""
    },
    19: {
        icon: "✨",
        title: "Özelsin",
        message: "Dünyada milyarlarca insan var ama sen bir tanesin. Özelsin, benzersizsin ve benim için dünyanın en değerli insanısın! ✨",
        extra: ""
    },
    20: {
        icon: "🎄",
        title: "Yılbaşı Heyecanı",
        message: "Yeni yıla seninle girmek için sabırsızlanıyorum! Bu yıl da, gelecek yıl da, her yıl seninle... 🎄🎆",
        extra: ""
    },
    21: {
        icon: "🍪",
        title: "Kurabiye Zamanı",
        message: "Keşke şimdi seninle kurabiye yapıyor olsaydık! Belki biraz dağıtırdık mutfağı ama çok eğlenirdik! 🍪",
        extra: ""
    },
    22: {
        icon: "🌙",
        title: "İyi Geceler",
        message: "Her gece uyumadan önce seni düşünüyorum. Rüyalarıma giriyorsun. İyi ki varsın, iyi geceler aşkım! 🌙💤",
        extra: ""
    },
    23: {
        icon: "🎶",
        title: "Son Gün Yaklaşıyor",
        message: "Yarın son gün! Ama bu son değil, sadece bir başlangıç. Sana olan sevgim her gün biraz daha büyüyor! 💝",
        extra: ""
    },
    24: {
        icon: "🎅",
        title: "Mutlu Noeller! 🎄",
        message: "Ve işte final! 24 gün boyunca her gün sana ne kadar özel olduğunu hatırlatmak istedim. Mutlu Noeller aşkım! Seni çok ama çok seviyorum! Bu takvim bitebilir ama sevgim asla bitmeyecek! 💝🎄✨",
        extra: "<p style='font-size: 2rem;'>🎄🎁🎅❤️🎄</p>"
    }
};
