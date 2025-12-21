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

<img width="553" height="748" alt="3" src="https://github.com/user-attachments/assets/eda4a80e-f608-4ce3-8465-15d2edc634f8" />

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
analiz etmek istediğiniz profil sayfasına gidin
   - 🔑 **Kendi profiliniz**: Hem görüntüleme hem takipten çıkma özelliği aktif
   - 👥 **Arkadaş profili**: Sadece görüntüleme (takipten çıkma devre dışı)
```bash
# Yakında eklenecek
```

## 📖 Nasıl Çalışır?

1. **Kullanıcı Tespiti** - Aktif profil sayfasından kullanıcı adı alınır
2. **Takipçi Listesi** - Instagram API üzerinden takipçi listesi çekilir (pagination ile tüm sayfa)
3. **Takip Edilen Listesi** - Takip edilen kişilerin listesi alınır (pagination ile tüm sayfa)
4. **Karşılaştırma** - İki liste karşılaştırılır ve takip etmeyenler belirlenir
5. **Sonuç Gösterimi** - Modern UI ile sonuçlar görüntülenir
6. **Takipten Çıkma** - *(Sadece kendi profilinizde)* Seçili veya tüm kullanıcıları takipten çıkarın

### ⚠️ Önemli Notlar

- **Kendi Profiliniz**: Script kendi profil sayfanızda çalıştırılırsa, takipten çıkma butonları aktif olur
- **Başka Profiller**: Arkadaşlarınızın veya başkalarının profillerinde çalıştırırsanız, sadece analiz yapabilir ve listeyi görebilirsiniz. Takipten çıkma özellikleri devre dışı kalır
- **Güvenlik**: Instagram API, başka hesaplar adına takipten çıkma işlemine izin vermez

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

// Takipçiler (pagination destekli)
GET /api/v1/friendships/{userId}/followers/?count=50&search_surface=follow_list_page&max_id={cursor}

// Takip edilenler (pagination destekli)
GET /api/v1/friendships/{userId}/following/?count=50&search_surface=follow_list_page&max_id={cursor}

// Takipten çıkma (sadece kendi hesabınızda)
POST /api/v1/friendships/destroy/{userId}/
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
- ☑️ Checkbox (seçim için)
- Username (`@kullanici`)
- Tam ad
- Profil linki (yeni sekmede açılır)
- Hover efektleri

### Seçim Sistemi
- **Tümünü Seç** - Listedeki tüm kullanıcıları seçer
- **Seçimi Temizle** - Tüm seçimleri kaldırır
- **Seçili Sayı Göstergesi** - Kaç kişinin seçili olduğunu gösterir
- Checkbox'larla manuel seçim yapabilirsiniz

### Takipten Çıkma Özellikleri *(Sadece Kendi Profilinizde)*

#### 🚫 Seçilenleri Takipten Çık
- Sadece seçtiğiniz kişileri takipten çıkarır
- Onay penceresi ister
- Gerçek zamanlı ilerleme gösterir
- Başarı/hata sayısını raporlar

#### ⚠️ Tümünü Takipten Çık
- Listedeki TÜM kişileri takipten çıkarır
- Çift onay sistemi (confirm + "EVET" yazma)
- Her kişi için 1.5-2.5 saniye bekleme (rate limiting)
- İşlem tamamlandığında detaylı rapor

#### Güvenlik Önlemleri
- ✅ Her takipten çıkarma işleminde 1.5-2.5 saniye rastgele bekleme
- ✅ Instagram rate limiting'e karşı koruma
- ✅ Takipten çıkarılan kişiler yeşil arka plan ile işaretlenir
- ✅ Başarısız işlemler console'da loglanır
- ✅ İşlem iptal edilebilir

### Kopyalama Özelliği
- 📋 Tek tıkla tüm profil linklerini kopyalayın
- Satır satır düzenlenmiş format
- Başarı/hata bildirimleri

## 🛠️ Sorun Giderme

- ✅ Profil URL'inin doğru olduğunu kontrol edin

### "Profil bilgisi alınamadı" Hatası
- ✅ İnternet bağlantınızı kontrol edin
- ✅ Instagram'dan çıkış yapıp tekrar giriş yapın
- ✅ Birkaç dakika bekleyip tekrar deneyin
- ✅ Instagram'ın rate limiting uygulamış olabilir

### Takipten Çıkma Butonları Görünmüyor
- ✅ Kendi profil sayfanızda olduğunuzdan emin olun
- ✅ Başka birinin profilindeyseniz, takipten çıkma butonları görünmez
- ✅ Bu bir güvenlik özelliğidir

### Takipten Çıkma Hatası
- ✅ Çok hızlı işlem yapıyorsanız Instagram rate limiting uygulayabilir
- ✅ 15-30 dakika bekleyip tekrar deneyin
- ✅ Daha az kişiyi seçerek dve kişisel kullanım amaçlı** geliştirilmiştir. Kullanırken dikkat edilmesi gerekenler:

- 📜 Instagram'ın [Hizmet Şartları](https://help.instagram.com/581066165581870)'nı okuyun ve uygulayın
- ⏱️ Rate limiting nedeniyle çok sık kullanmayın (özellikle toplu takipten çıkma)
- 🚫 Spam, otomatik işlemler veya taciz amaçlı kullanmayın
- ⚖️ Kişisel hesabınızda ve sorumluluğunuzda kullanın
- 👥 Başkalarının hesaplarını analiz ederken izin alın
- 🔒 Takipten çıkma özelliği yalnızca kendi hesabınızda çalışır
- ⚠️ Aşırı kullanım hesabınızın geçici olarak kısıtlanmasına neden olabilir
- 📊 Sadece analiz yapmak için kullanırsanız daha güvenlidir
- ✅ Başka bir tarayıcıda deneyin
- ✅ Developer Tools'un açık olduğundan emin olu
- ✅ Console'da hata mesajlarını kontrol edin
- ✅ Tarayıcıyı yenileyin ve tekrar deneyin
- ✅ Başka bir tarayıcıda deneyin

## ⚠️ Yasal Uyarı

Bu script yalnızca **eğitim amaçlı** geliştirilmiştir. Kullanırken dikkat edilmesi gerekenler:
x] Seçici takipten çıkma
- [x] Toplu takipten çıkma
- [x] İlerleme göstergesi
- [ ] Filtre ve sıralama özellikleri
- [ ] Export to CSV/JSON
- [ ] Karşılıklı takip etmeyenler (mutual followers)
- [ ] Dark/Light tema switcher
- [ ] Otomatik rate limit algılama
- [ ] Chrome extension versiyonu
- [ ] İstatistik grafikleri
- [ ] Geçmiş analiz kayıtları

Katkılarınızı bekliyoruz! Nasıl katkıda bulunabilirsiniz:

1. 🍴 Repo'yu fork edin
2. 🌿 Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. 💻 Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. 📤 Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. 🎉 Pull Request oluşturun

### Geliştirme Önerileri

- [ ] Filtre ve sıralama özellikleri
- [ ] Export to CSV/JSON
- [ ]2.0.0 (2025-12-21)
- 🚫 **YENİ**: Seçici takipten çıkma özelliği
- ⚠️ **YENİ**: Toplu takipten çıkma özelliği
- ✅ **YENİ**: Checkbox seçim sistemi
- 📊 **YENİ**: Takipten çıkma ilerleme göstergesi
- 🔒 **YENİ**: Çift onay güvenlik sistemi
- ⏱️ **YENİ**: Rate limiting koruması
- 👥 **YENİ**: Çoklu profil analizi desteği
- 🎨 İyileştirilmiş UI/UX

### v Karşılıklı takip etmeyenler
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

- 💼 GitHub: [@caneraktas1337](https://github.com/caneraktas1337)
- 🔗 Repo: [instagram-takip-analizi](https://github.com/caneraktas1337/instagram-takip-analizi)

## 🌟 Destek

Bu projeyi beğendiyseniz:
- ⭐ Star verin
- 🐛 Bug bildirin
- 💡 Önerilerde bulunun
- 🔄 Paylaşın

## 📞 İletişim

Sorularınız veya önerileriniz için:
- 🐛 [Issue açın](https://github.com/caneraktas1337/instagram-takip-analizi/issues)
- 💬 [Discussion başlatın](https://github.com/caneraktas1337/instagram-takip-analizi/discussions)

---

<div align="center">

**⚡ Made with ❤️ for Instagram Users**

[⬆ Başa Dön](#-instagram-takip-analizi)

</div>
