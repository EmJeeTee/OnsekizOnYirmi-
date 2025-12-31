// 🎄 ADVENT CALENDAR VERİLERİ 🎄
// Her günün içeriğini buradan özelleştirebilirsin!
// startDate: Takvimin başlangıç tarihi (YYYY-MM-DD formatında)

const calendarConfig = {
    startDate: "2025-12-01", // Takvimin başlangıç tarihi
    totalDays: 12, // Toplam gün sayısı
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
        icon: "☃️",
        title: "Yeni yıl",
        message: "Hayal ettiğimiz yeni yıla beraber girebildiğimiz gözlerine bakıp geçmişe ve geleceğe dalabildiğim için çok mutluyum. Yeni yılımız kutlu olsun! 💕",
        extra: "<img src='img/2.jpeg' style='max-width: 100%; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);'>"
    },
    3: {
        icon: "🎵",
        title: "Şarkımız",
        message: "İkimizin de ilk tanıştığımızdaki birbirimize söylediği şarkıları hatırlıyor musun?",
        extra: `<a href='https://open.spotify.com/intl-tr/track/4T73JmNNhtkFBzjRfCeMzN?si=151b88a003cb4dac' target='_blank' style='font-size: 2rem; text-decoration: none;'>👧🎧</a>
                <br><a href='https://open.spotify.com/intl-tr/track/5n1MwdIRqFtsFO4qp86USa?si=2611534d13cc4a26' target='_blank' style='font-size: 2rem; text-decoration: none;'>👦🎧</a>`
    },
    4: {
        icon: "📸",
        title: "Anılarımız",
        message: "Seninle geçirdiğimiz her an bir hazine. Bu fotoğraf benim favorilerimden... Daha nice güzel anılara! 📸",
        extra: "<img src='img/4.jpeg' style='max-width: 100%; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);'>"
    },
    5: {
        icon: "🌞",
        title: "Sen Benim Güneşimsin",
        message: "Hayatıma ışık saçıyorsun. Karanlık gecelerde bile sen benim yol gösterenim. Parlak yıldızım benim! ☀️",
        extra: "<img src='img/5.jpeg' style='max-width: 100%; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);'>"
    },
    6: {
        icon: "🏢",
        title: "Enteresan Bir Hediye",
        message: "Bazen Çarşamba genlerin aktif olsa da seni bana kavuşturduğu için minnettarım. Sen benim en güzel hediyemsin! 🎁",
        extra: "<img src='img/6.jpg' style='max-width: 100%; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);'>"
    },
    7: {
        icon: "📝",
        title: "Sana Bir Söz",
        message: "Sana söz veriyorum: Her zaman yanında olacağım. İyi günde, kötü günde, zor zamanlarda... Elimden asla bırakmayacağım.",
        extra: "<img src='img/7.png' style='max-width: 100%;'>"
    },
    8: {
        icon: "🌸",
        title: "Güzellik",
        message: "Gülün gözü olsa senin güzelliğin karşısında daha da parıldardı. Çünkü ben her an seninle parıldıyorum. 🌹",
        extra: "<img src='img/8.jpeg' style='max-width: 100%; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);'>"
    },
    9: {
        icon: "💫",
        title: "Dilek Zamanı",
        message: "Bir dilek hakkın var! Gözlerini kapat ve dile... Ben zaten en büyük dileğimi gerçekleştirdim: Seni bulmak veee bir deeee 🌠",
        extra: "<img src='img/9.png' style='max-width: 100%;'>"
    },
    10: {
        icon: "✉️",
        title: "Geleceğe Mektup",
        message: "Bazen tartışabiliriz bazen çok gülebiliriz ama bil ki seni her zaman seveceğim. İşte sana gelecekte açman için küçük bir mektup. 💌",
        extra: "<button class='open-letter-btn' onclick='openLetter()'>💌 Mektubu Aç 💌</button>"
    },
    11: {
        icon: "🎁",
        title: "Hediye Zamanııı",
        message: "Bana en büyük hediye sensin. Ama bugün sana küçük bir sürprizim var! Umarım beğenirsin! 🎉",
        extra: "<img src='img/10.jpeg' style='max-width: 100%; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);'>"
    },
    12: {
        icon: "🎅",
        title: "Mutlu Noeller! 🎄",
        message: "Ve işte final! 24 gün boyunca her gün sana ne kadar özel olduğunu hatırlatmak istedim. Mutlu Noeller aşkım! Seni çok ama çok seviyorum! Bu takvim bitebilir ama sevgim asla bitmeyecek! 💝🎄✨",
        extra: "<p style='font-size: 2rem;'>🎄🎁🎅❤️🎄</p>"
    }
};
