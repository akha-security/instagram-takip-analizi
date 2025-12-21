# Instagram "Geri Takip Etmeyenler" 

Bu açık kaynak betik, Instagram’da takip ettiğiniz fakat sizi geri takip etmeyen hesapları listelemenize yardımcı olur. Tamamen tarayıcınızda, mevcut oturumunuzla çalışır; kimlik bilgilerinizi veya verilerinizi üçüncü kişilerle paylaşmaz.

> Önemli: İnternette self‑XSS suistimali yapan veya Instagram hesaplarını çalmaya çalışan çok sayıda benzer kod parçacığı vardır. Bu proje bilerek basit, şeffaf ve güvenlidir: Kaynağın tamamını okuyabilirsiniz; sizden asla şifre, 2FA kodu istemez veya herhangi bir yere giriş yapmanızı talep etmez.

## Ne Yapar
- Instagram’ın web uç noktaları üzerinden takipçi ve takip edilen listelerinizi çeker.
- Listeleri tarayıcınızda yerel olarak karşılaştırır.
- Sizi geri takip etmeyenleri bir tabloda gösterir, dilerseniz profil URL’lerini panoya kopyalar.

## Nasıl Çalışır (Yüksek Seviye)
- Tarayıcı konsolunuzda tek seferlik bir fonksiyon olarak çalışır.
- `instagram.com` için (aynı kaynakta) mevcut oturum çerezlerinizi ve CSRF token’ınızı kullanır.
- İki başlık gönderir: `X-IG-App-ID` (Instagram Web Uygulama Kimliği) ve `X-CSRFToken` (çerezinizden). Harici sunucu yok, kimlik bilgisi isteme yok.

## Kullanım
1. Web’de Instagram’a giriş yapın (https://www.instagram.com/).
2. Kendi profil sayfanıza gidin (ya da hedef kullanıcı adını hazır bulundurun).
3. Geliştirici Araçları → Konsol’u açın:
   - Windows: `F12` veya `Ctrl+Shift+I`, sonra "Console" sekmesine geçin.
4. `script.ts` (betik) içeriğini konsola yapıştırın.
5. Enter’a basın. Betik şunları yapar:
   - Konsolda ilerlemeyi gösterir.
   - Sizi geri takip etmeyen hesapların tablosunu üretir.
   - İzin verilirse profil URL’lerini panoya kopyalar.

## Güvenlik ve Gizlilik
- %100 tarayıcı tarafı: tarayıcınızda çalışır, üçüncü taraf alanlara ağ çağrısı yapmaz.
- Şifrenizi, SMS/2FA kodlarını istemez; kimlik bilgilerinizi yakalamaya çalışmaz.
- Yalnızca mevcut oturumunuz ve CSRF çereziyle çalışır; istek kapsamı `instagram.com` ile sınırlıdır.
- Adınıza herhangi bir işlem yapmaz (takip/çıkma, paylaşım yok). Sadece listeleri okur ve sonucu gösterir.

### Self‑XSS Uyarısı
Güvenilmeyen kaynaklardan tarayıcı konsoluna kod yapıştırmayın. Self‑XSS, saldırganların oturumunuzu çalabilecek veya istenmeyen işlemler yapabilecek kodu çalıştırmanız için sizi kandırmasıdır. Bu depo açık kaynaktır; betiğin ne yaptığını doğrulayabilirsiniz. Başka yerlerde bulduğunuz rastgele kodları çalıştırmayın.

## Notlar ve Sınırlamalar
- Instagram’ın dahili web uç noktalarını kullanır; bunlar herhangi bir zamanda değişebilir.
- `403`/`429` hataları görürseniz, hız sınırına takılmış olabilir veya başlık/çerezler eksik olabilir. Biraz bekleyip tekrar deneyin.
- Servise nazik olmak için sayfalamada istekler arasında kısa bekleme içerir.
- Kişisel kullanım için tasarlanmıştır. Büyük hesaplarda sayfalama nedeniyle daha uzun sürebilir.

## SSS
- `APP_ID` nedir?
  - `APP_ID`, istemci türünü tanımlamak için `X-IG-App-ID` başlığında kullanılan Instagram Web Uygulama Kimliğidir. Gizli değildir ve tek başına erişim sağlamaz.
- Bu izinli mi?
  - Sorumluluk size aittir; Instagram’ın Kullanım Koşullarına ve hız sınırlarına saygı gösterin. Betik, oturumunuza açık olan verileri okur ve eylemleri otomatikleştirmez.
- Ban riski var mı?
  - Ölçülü kullanımda olası değildir; ancak belgelenmemiş uç noktalarla her etkileşim bir miktar risk taşır. Betik kibar olmak için gecikmeler içerir.
- Takip/çıkarma veya mesaj gönderir mi?
  - Hayır. Sadece takipçi/takip edilen listelerini getirir ve karşılaştırır.

## Sorun Giderme
- "Kullanıcı adı bulunamadı": Profil sayfanızdan çalıştırın veya istendiğinde bir kullanıcı adı girin.
- `403` (Forbidden): Girişli olduğunuzdan emin olun ve çerezlerde `X-CSRFToken` bulunduğunu kontrol edin.
- `429` (Too Many Requests): Çok fazla istek yaptınız; bekleyip daha sonra tekrar deneyin.
- Panoya kopyalama hatası: Tarayıcınız konsoldan pano yazımını engelliyor olabilir; URL’leri yazdırılan tablodan kopyalayın.

## Güven ve Şeffaflık
- Açık kaynak: `script.ts` içindeki kodu inceleyin.
- Gizleme yok, izleyici yok, harici çağrı yok.
- Net sınırlar: sadece okuma amaçlı istekler; hesapta değişiklik yapan işlemler yok.

## Katkıda Bulunma
Hata kayıtları (issues) ve çekme istekleri (pull requests) memnuniyetle karşılanır. Instagram web uç noktaları değişirse, betiği güncel tutmaya yönelik katkılar değerlidir.

## Sorumluluk Reddi
Bu proje olduğu gibi sunulur; herhangi bir garanti verilmez. Kişisel amaçlarla kullanın, Instagram’ın Hizmet Koşullarına saygı gösterin ve hız sınırları ile gizlilik konularına dikkat edin.]
