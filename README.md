# 📊 Instagram Takip Analizi

Modern ve görsel bir arayüz ile Instagram'da seni takip etmeyen kullanıcıları kolayca bulun ve yönetin!

## ✨ Özellikler

- 🎨 **Modern UI Tasarımı** - Gradient renkler ve animasyonlar ile görsel deneyim
- 📈 **Gerçek Zamanlı İlerleme** - Yükleme durumunu anlık takip edin
- 📊 **İstatistik Kartları** - Takipçi, takip edilen ve takip etmeyen sayıları
- 👤 **Kullanıcı Kartları** - Her kullanıcı için detaylı bilgi kartı
- ✅ **Seçici Takipten Çıkma** - İstediğiniz kişileri seçerek takipten çıkın
- 🚫 **Toplu Takipten Çıkma** - Tüm listeyi tek seferde temizleyin
- 📋 **Tek Tık Kopyalama** - Tüm profil linklerini panoya kopyalayın
- 👥 **Çoklu Profil Desteği** - Kendi profiliniz veya arkadaşlarınızın profillerini analiz edin
- 🎯 **Kolay Kullanım** - Sadece kodu çalıştırın, gerisini script halleder
- 🚀 **Hızlı ve Güvenli** - Instagram API kullanır, şifre gerektirmez

## 🖼️ Görünüm────────────────┐
<img width="553" height="748" alt="3" src="https://github.com/user-attachments/assets/4482a2cf-a04b-450f-a1ec-596ac853535a" />


```

## 🚀 Kurulum ve Kullanım

### Yöntem 1: Browser Console (Önerilen)

1. **Instagram'a giriş yapın** ve herhangi bir profil sayfasına gidin
2. **Developer Tools**'u açın:
   - Windows/Linux: `F12` veya `Ctrl + Shift + I`
   - Mac: `Cmd + Option + I`
3. **Console** sekmesine geçin
4. [script.js](script.js) dosyasındaki tüm kodu kopyalayın
5. Console'a yapıştırın ve `Enter`'a basın
6. **Modern UI** otomatik olarak açılacak! 🎉

### Yöntem 2: Bookmarklet (Hızlı Erişim)

1. Tarayıcınızda yeni bir **yer imi/bookmark** oluşturun
2. İsim: `IG Takip Kontrol`
3. URL: Aşağıdaki kodu yapıştırın:

```javascript
javascript:(async()=>{/* script.js içeriğini buraya yapıştırın */})();
```

4. Instagram'da kullanmak istediğinizde bookmark'a tıklayın

### Yöntem 3: Chrome Extension (Gelişmiş)

```bash
# Yakında eklenecek
```

## 📖 Nasıl Çalışır?

1. **Kullanıcı Tespiti** - Aktif profil sayfasından kullanıcı adı alınır
2. **Takipçi Listesi** - Instagram API üzerinden takipçi listesi çekilir
3. **Takip Edilen Listesi** - Takip ettiğiniz kişilerin listesi alınır
4. **Karşılaştırma** - İki liste karşılaştırılır
5. **Sonuç Gösterimi** - Modern UI ile sonuçlar görüntülenir

## 🔒 Güvenlik

- ✅ **Şifre Gerektirmez** - Instagram oturum bilgilerinizi kullanır
- ✅ **Yerel Çalışır** - Tüm işlemler tarayıcınızda gerçekleşir
- ✅ **Veri Saklamaz** - Hiçbir veri harici sunucuya gönderilmez
- ✅ **Açık Kaynak** - Kodları inceleyebilir ve güvenliğini doğrulayabilirsiniz

## ⚙️ Teknik Detaylar

### Kullanılan Teknolojiler

- **Vanilla JavaScript** - Harici bağımlılık yok
- **Instagram Web API** - Resmi web API endpoint'leri
- **CSS3 Animations** - Modern animasyonlar ve geçişler
- **Async/Await** - Asenkron işlemler için modern JavaScript

### API Endpoint'leri

```javascript
// Profil bilgisi
GET /api/v1/users/web_profile_info/?username={username}

// Takipçiler
GET /api/v1/friendships/{userId}/followers/?count=50&search_surface=follow_list_page

// Takip edilenler
GET /api/v1/friendships/{userId}/following/?count=50&search_surface=follow_list_page
```

### Gereksinimler

- ✅ Modern web tarayıcısı (Chrome, Firefox, Edge, Safari)
- ✅ Instagram hesabına giriş yapılmış olmalı
- ✅ JavaScript etkin olmalı
- ✅ Developer Console erişimi

## 📊 İstatistikler

Script size şu bilgileri gösterir:

| İstatistik | Açıklama |
|------------|----------|
| 👥 Takip Edilen | Takip ettiğiniz toplam kişi sayısı |
| ❤️ Takipçi | Sizi takip eden toplam kişi sayısı |
| ⚠️ Takip Etmiyor | Sizi takip etmeyen kişi sayısı |

## 🎯 Özellik Detayları

### İlerleme Göstergesi
- 🔍 Profil bilgileri alınıyor (10%)
- 👥 Takipçiler yükleniyor (20-40%)
- 📋 Takip edilenler yükleniyor (50-80%)
- ⚡ Sonuçlar hesaplanıyor (90%)
- ✅ Tamamlandı (100%)

### Kullanıcı Kartları
Her kullanıcı için:
- Username (`@kullanici`)
- Tam ad
- Profil linki (yeni sekmede açılır)
- Hover efektleri

### Kopyalama Özelliği
- 📋 Tek tıkla tüm profil linklerini kopyalayın
- Satır satır düzenlenmiş format
- Başarı/hata bildirimleri

## 🛠️ Sorun Giderme

### "Kullanıcı adı bulunamadı" Hatası
- ✅ Instagram'da profil sayfasında olduğunuzdan emin olun
- ✅ Giriş yapmış olmalısınız

### "Profil bilgisi alınamadı" Hatası
- ✅ İnternet bağlantınızı kontrol edin
- ✅ Instagram'dan çıkış yapıp tekrar giriş yapın
- ✅ Birkaç dakika bekleyip tekrar deneyin

### Script Çalışmıyor
- ✅ Console'da hata mesajlarını kontrol edin
- ✅ Tarayıcıyı yenileyin ve tekrar deneyin
- ✅ Başka bir tarayıcıda deneyin

## ⚠️ Yasal Uyarı

Bu script yalnızca **eğitim amaçlı** geliştirilmiştir. Kullanırken dikkat edilmesi gerekenler:

- 📜 Instagram'ın [Hizmet Şartları](https://help.instagram.com/581066165581870)'nı okuyun
- ⏱️ Rate limiting nedeniyle çok sık kullanmayın
- 🚫 Spam veya otomatik işlemler için kullanmayın
- ⚖️ Kişisel hesabınızda kullanın, başkalarınınkinde değil

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Nasıl katkıda bulunabilirsiniz:

1. 🍴 Repo'yu fork edin
2. 🌿 Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. 💻 Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. 📤 Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. 🎉 Pull Request oluşturun

### Geliştirme Önerileri

- [ ] Filtre ve sıralama özellikleri
- [ ] Export to CSV/JSON
- [ ] Karşılıklı takip etmeyenler
- [ ] Dark/Light tema switcher
- [ ] Çoklu hesap desteği
- [ ] Chrome extension versiyonu
- [ ] İstatistik grafikleri

## 📝 Değişiklik Geçmişi

### v1.0.0 (2025-12-21)
- ✨ İlk sürüm yayınlandı
- 🎨 Modern UI tasarımı eklendi
- 📊 İlerleme çubuğu ve animasyonlar
- 👥 Kullanıcı kartları ve profil linkleri
- 📋 Kopyalama özelliği

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır. Detaylar için LICENSE dosyasına bakın.

## 👨‍💻 Geliştirici

**Caner**

- 💼 GitHub: [@kullaniciadi](https://github.com/caneraktas1337)

## 🌟 Destek

Bu projeyi beğendiyseniz:
- ⭐ Yıldız verin
- 🐛 Bug bildirin
- 💡 Önerilerde bulunun
- 🔄 Paylaşın

## 📞 İletişim

Sorularınız veya önerileriniz için:
- 🐛 [Issue açın](https://github.com/kullaniciadi/repo/issues)
- 💬 [Discussion başlatın](https://github.com/kullaniciadi/repo/discussions)

---

<div align="center">

**⚡ Made with ❤️ for Instagram Users**

[⬆ Başa Dön](#-instagram-takip-analizi)

</div>
