
# Twitter Clone

Bu proje, eğitim amacıyla geliştirilen bir Twitter klonudur. Twitter'ın temel işlevlerini taklit eden bir web uygulaması oluşturmak için modern web teknolojileri kullanılmıştır. Projenin amacı web uygulaması geliştirme becerilerimi geliştirmek ve modern web teknolojilerini öğrenmektir. Twitter'ın temel özelliklerini anlamak, kullanıcı kayıt ve giriş işlemlerini gerçekleştirmek, tweetleri oluşturmak, yanıtları görüntülemek, beğenileri takip etmek gibi işlevleri öğrenmek için bu projeyi kullanabilirsiniz.

Proje, React framework'ü üzerine kurulmuş olup, Tailwind CSS ile kolayca özelleştirilebilir ve duyarlı bir kullanıcı arayüzü sağlar. Next.js, sayfa yönlendirmeleri ve veri ön yükleme gibi performans iyileştirmelerini destekler. Prisma ve MongoDB, veritabanı işlemleri için kullanılırken, NextAuth kullanıcı kimlik doğrulama ve yetkilendirme işlemlerini yönetmek için kullanılmaktadır.

Bu projeyi çalıştırarak, gerçek bir web uygulaması geliştirme sürecini deneyimleyebilir, bir projeyi baştan sona nasıl inşa edeceğinizi ve modern web teknolojilerini nasıl kullanacağınızı öğrenebilirsiniz.

Bu proje, web geliştirme öğrenimi sürecinde öğrenciler, yazılım geliştiriciler ve yeni başlayanlar için mükemmel bir öğrenme kaynağıdır. Kodları analiz ederek ve projeyi uygulayarak, deneyim kazanabilirsiniz.

Not: Bu proje, Twitter'ın tamamen aynısını oluşturmaktan ziyade, Twitter'ın temel işlevlerini taklit etmeyi hedeflemektedir ve orijinal Twitter ile bağlantısı veya entegrasyonu bulunmamaktadır.


## Özellikler

- Kayıt olma ve giriş yapma
- Kullanıcılar tweetlerini oluşturabilir. (Düzenleme ve silme daha sonra eklenecektir.)
- Kullanıcılar tweetlere yanıt verebilir ve beğenebilir.
- Kullanıcılar profil sayfalarını düzenleyebilir ve profil fotoğraflarını ve kapak fotoğraflarını değiştirebilir.
- Ana sayfa, kullanıcının kendi tweetlerini ve takip ettikleri kullanıcıların tweetlerini görüntüler.
- Kullanıcılar diğer kullanıcıları takip edebilir ve takip edilen kullanıcıların tweetlerini görüntüleyebilir.
- Kullanıcılar anlık olarak bildirim alabilirler.

  
## Kullanılan Teknolojiler

**React**, 
**Tailwind CSS**, 
**Next.js**, 
**Prisma**, 
**Mongo DB**, 
**NextAuth**

  
## Ekran Görüntüleri

  <p float="left" align="center">
  <img src="https://github.com/kadirmetin/twitter-clone/assets/82063998/62f91b76-97f8-4d2d-b595-315c190b6374" width="225" />
  <img src="https://github.com/kadirmetin/twitter-clone/assets/82063998/8ac38ce3-4968-499b-9865-4c7ea3cf6f6a" width="225" /> 
  <img src="https://github.com/kadirmetin/twitter-clone/assets/82063998/a95935d6-c4ae-42e8-9efc-02892c0e41c2" width="225" />
  <img src="https://github.com/kadirmetin/twitter-clone/assets/82063998/bfff489a-13b0-4447-b6b1-d63cd1ee9db2" width="225" />
</p>

## Bilgisayarınızda Çalıştırın

1. Projeyi klonlayın

```bash
  git clone https://github.com/kadirmetin/twitter-clone.git
```

2. Proje dizinine gidin

```bash
  cd twitter-clone
```

3. Gerekli paketleri yükleyin

```bash
  npm install
```

4. Ortam değişkenlerini ayarlayın:

```bash
  DATABASE_URL=<MongoDB bağlantı URL'si>
  NEXTAUTH_JWT_SECRET="NEXT_AUTH_JWT_SECRET"
  NEXTAUTH_SECRET="NEXT_AUTH_SECRET"
```

5. Sunucuyu çalıştırın

```bash
  npm run dev
```

  
## Teşekkür

- [@AntonioErdeljac](https://github.com/AntonioErdeljac) thanks for the amazing study video :)

  
## Lisans

[MIT](https://github.com/kadirmetin/twitter-clone/blob/main/LICENSE)

  
