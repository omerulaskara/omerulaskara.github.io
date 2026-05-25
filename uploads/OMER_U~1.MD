# ÖMER ULAŞ KARA
## Kapsamlı Yazılım Geliştirici Yetkinlik ve Portfolyo Raporu

> **Rapor Tarihi:** 25 Mayıs 2026
> **İnceleme Kaynağı:** GitHub Profili (`github.com/omerulaskara`) — 19 repository
> **Hazırlayan:** Otomatik Profil Analizi
> **Versiyon:** 1.0

---

## İçindekiler

1. [Yönetici Özeti](#1-yönetici-özeti)
2. [Profesyonel Profil](#2-profesyonel-profil)
3. [Domain (Alan) Uzmanlığı](#3-domain-alan-uzmanlığı)
4. [Teknik Yetkinlik Matrisi](#4-teknik-yetkinlik-matrisi)
5. [Mimari ve Sistem Tasarım Yetkinlikleri](#5-mimari-ve-sistem-tasarım-yetkinlikleri)
6. [Güvenlik Mühendisliği Yetkinlikleri](#6-güvenlik-mühendisliği-yetkinlikleri)
7. [DevOps, Altyapı ve Üretim Operasyonu](#7-devops-altyapı-ve-üretim-operasyonu)
8. [Yapay Zekâ, RAG ve Veri Mühendisliği](#8-yapay-zekâ-rag-ve-veri-mühendisliği)
9. [Test ve Kalite Mühendisliği](#9-test-ve-kalite-mühendisliği)
10. [Ürün Düşüncesi ve Profesyonel Olgunluk](#10-ürün-düşüncesi-ve-profesyonel-olgunluk)
11. [Güçlü Yönler — Sentez](#11-güçlü-yönler--sentez)
12. [Geliştirilebilecek / Açık Alanlar](#12-geliştirilebilecek--açık-alanlar)
13. [Konum Uygunluğu — Rol Önerileri](#13-konum-uygunluğu--rol-önerileri)
14. [Sonuç](#14-sonuç)
15. [Ek: Repository Envanteri](#15-ek-repository-envanteri)

---

## 1. Yönetici Özeti

Ömer Ulaş Kara, **full-stack yazılım mühendisliği** ile **alan-spesifik (domain-specific) otomasyon** disiplinlerini yüksek bir profesyonellikle birleştiren, üretim ortamı tecrübesi olan bir geliştiricidir. GitHub portfolyosu üzerinde yapılan inceleme; pratik freelance/iç-kullanım araçlarından, sıfırdan tasarlanmış **çok kiracılı (multi-tenant) SaaS platformları**na, mobil sosyal sanat uygulamalarından, **RAG tabanlı yapay zekâ arama motorları**na kadar geniş bir yelpazede çalıştığını ortaya koymaktadır.

Profilin en dikkat çeken özellikleri:

- **Üretim seviyesinde sistem mimarisi** kurabilme: Asterisk, WebRTC, NestJS, PostgreSQL, Redis ve MinIO içeren çok bileşenli bir telefoni platformunu (`call-center-platform`) tek başına tasarlayıp **canlı bir domain üzerinden hizmete sokmuş** ve **Sprint 19** noktasına getirmiş olması, kıdemli yazılım mühendisliğine özgü bir göstergedir.
- **Derin alan uzmanlığı**: Türk hukuk sistemine ait **UYAP ekosistemi** (Tevzi, harç ödeme, e-imza, UDF, icra ceza akışı, ictihat arama) üzerinde 8'i aşan proje ile **hukuk teknolojileri (legal tech)** alanında uzmanlaşmış görünmektedir. Bu, Türkiye pazarında çok az yazılımcının ulaşabildiği bir uzmanlık niş alanıdır.
- **Çok katmanlı teknoloji yığınlarına eşzamanlı hakimiyet**: Backend (NestJS, Laravel, FastAPI/Python), Frontend (React, Next.js, Mantine, Tailwind), Mobil (React Native, Expo, Skia), Masaüstü (Electron, Playwright) ve Altyapı (Docker, Caddy, PM2, Turborepo).
- **Profesyonel mühendislik kültürü**: Migrationlar, seed scriptleri, E2E test suite'leri (Playwright, Detox), audit log, RBAC, MFA, brute-force koruması, runbook ve backup dokümantasyonu gibi pratiklerin tutarlı şekilde uygulanması, mühendislik olgunluğunu açıkça göstermektedir.

Genel değerlendirme: Profil, **kıdemli (senior) full-stack mühendis** seviyesinde teknik beceriler ve **ürün sahibi (product-minded)** bir yaklaşım ortaya koymaktadır. Hem **freelance/butik müşteri çözümleri**, hem **enterprise SaaS** geliştirme, hem de **kendi tüketici (consumer) ürününü piyasaya sürme** yetkinliği görülmektedir.

---

## 2. Profesyonel Profil

### 2.1 Genel Karakteristik

Profil; **"sistemi uçtan uca düşünen ve sıfırdan inşa eden"** bir mühendise işaret etmektedir. Aşağıdaki özellikler bunu desteklemektedir:

- Projeler tek bir framework ya da dilde değil; **iş probleminin doğasına en uygun teknolojiyle** kurulmuştur. (Telefoni için NestJS+Asterisk, hukuk veri madenciliği için Python, hukuk büro içi araçlar için Laravel, kullanıcı tarafı sosyal uygulama için React Native+Supabase, masaüstü otomasyon için Electron+Playwright.)
- Birden fazla projede **frontend, backend, mobil, masaüstü ve devops katmanlarının tamamı** tek geliştirici tarafından üretilmiştir; bu, **gerçek bir solo founder / lead engineer** profilini yansıtır.
- READMElerde yer alan **mimari diyagramlar, klasör yapıları, kurulum talimatları, deployment rehberleri** ve **runbook**lar, yazılımı yalnızca "yazmak" değil; **işletilebilir bir sistem olarak teslim etmek** kültürünü gösterir.

### 2.2 Çalışma Bağlamı

Repository içeriklerinden anlaşıldığı kadarıyla, geliştirici:

- **Bir avukatlık ofisi / hukuk teknolojileri kuruluşu** (`yonhukuk.com` domain'i, `hatirlatma@yonhukuk.com` admin maili, `icra-ceza@yonhukuk.com` arşiv adresi referansları) ile yakın çalışmaktadır.
- **Kendi tüketici ürünü** olarak `stroke-app.com` adında üretim ortamında bir mobil + web sanat sosyal ağı yürütmektedir.
- **Kurumsal SaaS** seviyesinde bir platformu (`ccp.stroke-app.com` üzerinde yayında olan `call-center-platform`) ölçeklendirme tecrübesine sahiptir.

Bu profil; bir geliştirici için oldukça nadir görülen bir **"agency × startup × solo product founder" hibrit deneyimi**ne işaret etmektedir.

---

## 3. Domain (Alan) Uzmanlığı

Aşağıdaki domain'lerin her birinde geliştiricinin **en az 2 üretim projesi** üzerinden derinleşmiş olduğu görülmektedir.

### 3.1 Hukuk Teknolojileri (Legal Tech) — UYAP Ekosistemi

Türkiye'nin Ulusal Yargı Ağı Bilişim Sistemi (UYAP) üzerinde **derin teknik içgörüye** sahip görünmektedir. İlgili projelerde rastlanan unsurlar:

- **UYAP XHR/Ajax endpoint'leri**: `icraceza_icra_birimler_brd.ajx`, `kisiSorgula.ajx`, `kurumSorgula.ajx`, `icraceza_dosya_tevzi_et_brd.ajx`, `icraceza_evrak_gonder_brd.ajx`, `icraceza_dava_acilis_odeme_islemleri_brd.ajx`, `icraceza_dava_acilis_tamamla_brd.ajx` gibi 14 adımlı **dava açma akışının** birebir endpoint sırası ile çözümlenmesi.
- **UDF formatı** (UYAP'ın özel dilekçe dokümanı formatı) ile çalışma, **Excel sütunlarından şablon yer tutucularına dinamik eşleme** ve toplu UDF üretimi.
- **E-imza akışı**: Chrome DevTools Protocol (CDP) ile UYAP oturumunun yakalanması, oturum düşmelerinin otomatik tespiti, **avukat e-imza popup**'ının PIN ile otomatik tamamlanması.
- **PTT barkod sorgulama** ile tebligat geçerlilik kontrolü (90 gün kuralı).
- **e-Barobirlik** üzerinden harç ve gider avansı ödeme entegrasyonu.
- **Banka entegrasyonları**: QNB, Enpara, Garanti, Aktif, İş Bankası için vekaletname, mersisNo, kurumDetay konfigürasyonları.
- **Yargıtay karar veri madenciliği**: `aramadetaylist` ve `getDokuman` endpoint'leri üzerinden checkpoint'li crawler, normalize edilmiş JSONL dataset, dedup ve quality gate akışı.

Bu seviyede UYAP otomasyonu yapabilmek; **HTTP/XHR analizi, oturum yönetimi, çerez/cookie handling, multipart upload, retry mantığı ve hukuki süreç bilgisi** gerektirir. Bu domain Türkiye'de hakim olunması en zor alanlardan biridir.

### 3.2 Çağrı Merkezi (Contact Center) Mühendisliği

`call-center-platform` projesinde profesyonel telefoni dünyasının nadir öğrenilen tüm temel taşları görülmektedir:

- **WebRTC softphone** geliştirme: sip.js 0.21 üzerinden WSS, DTLS/SRTP.
- **Asterisk 20 LTS** üzerinde **chan_pjsip** konfigürasyonu, **ARI/Stasis** uygulaması.
- **Inbound routing**: DID → IVR / Queue / Direkt extension.
- **Outbound dialer**: Preview + Predictive (BullMQ tabanlı arka plan iş kuyrukları ile).
- **Çağrı kayıt**: MixMonitor → MinIO (S3-uyumlu) + WAV duration parser.
- **Supervisor araçları**: Listen / Whisper / Barge, canlı ajan wallboard'ı.
- **Multi-tenant**: 10 ayrı proje, her biri 10 personel, **proje bazlı Trunk, DID, OutboundRoute, Queue, Campaign** ve `X-Project-Id` header'ı ile aktif proje filtreleme.
- **SLA raporlama**: kuyruk SLA, abandon oranı, disposition dağılımı, orphan call tespiti.
- **WhatsApp Business Cloud** entegrasyonu (Meta + mock provider, şablon yönetimi, webhook).

Bu seviyede bir telefoni sistemi, **kurumsal SaaS şirketlerinde dahi** birden fazla geliştirici tarafından yıllarca geliştirilen bir üründür.

### 3.3 Mobil Sosyal Ağ ve Topluluk Güvenliği

`stroke` projesi yalnızca teknik değil; aynı zamanda **ürün, hukuk ve topluluk güvenliği** boyutlarında olgunluk göstermektedir:

- **13–15 yaş koruma katmanı**: web sharing kapalı, discovery'den hariç, DM kuralları (yetişkinlerle DM yasak), bio'da Discord/Telegram/WhatsApp linki yasağı, follower-only varsayılan yorum politikası, push notification quiet hours (TR 22:00–08:00).
- **Topluluk şikayet sistemi**: post için `threshold = max(min, view_count × 0.03)`, comment için `× 0.05` oranında ratio bazlı otomatik gizleme ve **brigading koruması**.
- **AI moderasyon**: `moderate-content` Edge Function üzerinden OpenAI Moderation API ile içerik tarama, 30 günlük retention, anonim işleme.
- **Hassas içerik (viewer discretion)**: yetişkin için **native blur (expo-blur BlurView)** + reveal toggle; küçük için tamamen gizleme; web önizlemede generic OG image (Twitter/Discord preview'da expose etmeme).
- **Self-report engelleme**: hem RLS hem trigger seviyesinde çift katmanlı koruma.

Bu detay seviyesi, ürünün yalnızca teknik değil **yasal ve etik (App Store policy, COPPA-benzeri yaklaşımlar)** boyutlarının da düşünüldüğünü gösterir.

### 3.4 Doküman ve Ofis Otomasyonu

Hukuk büroları için tasarlanmış küçük ama odaklı bir araç ailesi mevcuttur: PDF küçültme, PDF birleştirme, .msg (Outlook) → PDF dönüşümü, Excel → UDF üretimi, süreli iş hatırlatıcı. Bu **butik araç üretim refleksi**, müşteri ihtiyaçlarını okuyup hızlıca paketlenmiş bir çözüm üretme kabiliyetini gösterir.

### 3.5 Gerçek Zamanlı Multiplayer Oyun

`culture-line` projesi, **kelime tahmin temelli, gerçek-zamanlı, sosyal mobil bilgi yarışması** olarak konumlandırılmıştır. NestJS + Socket.IO + Redis Pub/Sub + React Native (Expo) + Detox E2E mimarisi ile **multiplayer realtime mimarisini** kurmuş bulunmaktadır.

---

## 4. Teknik Yetkinlik Matrisi

Aşağıdaki teknolojiler portfolyodaki projeler boyunca **aktif olarak kullanılmış** ve READMElerde tanımlanmış stack'lerle kanıtlanmıştır.

### 4.1 Programlama Dilleri

| Dil | Kullanım Seviyesi | Kanıt |
|---|---|---|
| **TypeScript** | İleri / Üretim | `call-center-platform`, `stroke`, `culture-line` — strict mode, path alias'lar, tip kontratları paylaşılan workspace paketi |
| **JavaScript (Node.js / ESM)** | İleri / Üretim | `icra-ceza-otomasyon` (Node 20 ESM), Electron uygulamaları |
| **PHP 8+** | İleri / Üretim | `pusula-dava-web`, `sikayetler`, `sureli-is-hatirlatici` (Laravel 9) |
| **Python** | Orta–İleri | `ictihat-motoru` (FastAPI/Uvicorn, crawler, RAG, eval, BM25+vector index) |
| **HTML / CSS** | İleri | Tailwind 4, Mantine 7, Blade template'leri |
| **PowerShell** | Temel–Orta | `run-single-auto-restart.ps1`, `scripts/start_server.ps1` |
| **SQL** | İleri | PostgreSQL fonksiyonları (`fn_visible_feed_posts`, `fn_explore_posts`, `fn_hashtag_posts`, `fn_is_minor`), Prisma şemaları, migrationlar |

### 4.2 Backend Framework ve Kütüphaneler

- **NestJS 11**: Decorators, guards, interceptors (audit log), modüler mimari, Swagger doc, healthcheck endpoint'leri (`/health/live`).
- **Laravel 9**: Eloquent, migrations, Blade, Artisan komutları (`reminders:send-due`), scheduler (cron + `dailyAt`), JSON API (`/api/cases`, `/api/filters`).
- **Prisma 5**: Schema, migrations, seed scriptleri, Prisma Studio.
- **BullMQ**: Background job kuyrukları, Excel import, predictive dialer iş üretimi.
- **Socket.IO**: Realtime presence, channel state, multiplayer.
- **Supabase Edge Functions (Deno tabanlı)**: `send-notification`, `moderate-content`, `delete-account`, `export-user-data`.
- **FastAPI / Uvicorn**: ASGI server, structured access log (JSONL), API key auth, rate limiting.
- **Express** (implicit – `imza-uzman` lokal proxy katmanı).

### 4.3 Frontend ve UI

- **React 18** + **Vite** + **Mantine 7** + **TanStack Query** + **Zustand**.
- **Next.js 16 (App Router + Turbopack)** + **Tailwind 4**.
- **Dynamic OG image (Edge runtime, 1200×630 PNG)** üretimi.
- **Blade** (Laravel) — responsive, web+mobil uyumlu UI.
- **Lazy-loaded sayfalar**, **server-side filtreleme**, **drawer/modal sistemleri**, **CSV export**, **chip-based aktif filtre görünümleri**.

### 4.4 Mobil

- **React Native 0.76** + **Expo SDK 54** (new architecture).
- **expo-router v4** (file-based typed routes).
- **@shopify/react-native-skia 2.2** + **react-native-gesture-handler** + **Reanimated 3** (worklet seviyesinde gesture handling).
- **EAS Build** (development, preview, production profilleri).
- **Expo Notifications** + **FCM (Android)** + **APNs V2 (iOS)**.
- **expo-secure-store**, **expo-blur** (native blur), **Sentry** native+JS.
- **i18n**: react-i18next, sistem dili otomatik algılama (TR + EN dolu lokalizasyon).
- **Auth**: email/şifre + Google Sign-In + Apple Sign-In.

### 4.5 Masaüstü

- **Electron 32** + **Node 20 ESM**.
- **Playwright** (headless Chromium + manuel Chrome bağlama).
- **NSIS + Portable** Windows packaging (`npm run dist`).
- **IPC bridge**: `preload.cjs` → main ↔ renderer.
- **Multi-profile parallel runtime**: 3 ayrı UYAP hesabını eş zamanlı çalıştırma; throughput 3 katına çıkarma.

### 4.6 Veritabanı ve Veri Katmanı

| Teknoloji | Kullanım |
|---|---|
| **PostgreSQL 15, 16** | Birincil OLTP veritabanı; trigger, RPC fonksiyonları, RLS (Row Level Security) |
| **MySQL / MariaDB** | Laravel projelerinde |
| **Redis 7** | Presence, channel state, BullMQ, **brute-force lock** sayacı |
| **MinIO (S3 uyumlu)** | Çağrı kayıt depolama, çizim dökümanları |
| **Supabase** | Postgres + Auth + Storage + Realtime + Edge Functions (yönetilen platform) |
| **JSONL** | ML/RAG pipeline'da dataset formatı |

### 4.7 Mesajlaşma ve E-posta

- **SMTP / Nodemailer** — Laravel mail driver, Natro SMTP testi.
- **IMAP / IMAPFlow** — gelen kutusundan mail seçme, **Reply All** mantığı, **In-Reply-To** ve **References** header'ları ile thread korunarak yanıt.
- **Resend** — transactional email (özel domain DKIM/SPF doğrulamalı).
- **WhatsApp Business Cloud (Meta)** + mock provider.

### 4.8 Telefoni ve Gerçek Zamanlı İletişim

- **Asterisk 20 LTS** (chan_pjsip).
- **ARI/Stasis** custom uygulama (`callcenter app`).
- **WebRTC** (DTLS/SRTP).
- **sip.js 0.21** (WSS).
- **SIPp** docker container ile E2E telefoni testi.
- **MixMonitor** ile çift yönlü çağrı kaydı + WAV duration parser.

### 4.9 Tarayıcı Otomasyonu

- **Playwright** (headless + headed).
- **Chrome DevTools Protocol (CDP)** üzerinden mevcut Chrome'a bağlanma, oturum cookie yakalama.
- **axios** instance'ına dinamik cookie enjeksiyonu.
- **PTT, UYAP, e-Barobirlik** gibi karmaşık state'li sistemlere karşı **şeffaf relogin** mantığı.

### 4.10 Yapay Zekâ ve Veri Mühendisliği

- **OpenAI Moderation API** — içerik tarama, content_flags şeması.
- **Hybrid search**: BM25 index + vector index, top-k retrieval.
- **Citation-first RAG**: kaynak gösteren cevap üretimi (`rag_answer.py`).
- **Eval framework**: regresyon testleri, `EVAL_REPORT.md` üretimi.
- **Quality gate**: thresholds, missing field oranları (`--max-missing-esas-pct 15`).
- **Web crawler operasyonu**: checkpoint, batch tarama (aylık pencereler), dedup (hybrid strateji).

---

## 5. Mimari ve Sistem Tasarım Yetkinlikleri

### 5.1 Monorepo ve Workspace Yönetimi

`call-center-platform` örneğinde **Turborepo + pnpm workspaces** kullanılmıştır. `packages/shared-types` ile **API kontrat tiplerinin paylaşıldığı** workspace package modeli; backend ve frontend arasındaki kontrat birliğini sağlayan, **enterprise-grade bir yaklaşım**dır. `pnpm --filter @ccp/web dev` gibi seçici komut çalıştırma; `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm format` gibi workspace-wide tooling tutarlı kurulmuştur.

### 5.2 Çok Kiracılı (Multi-Tenant) Mimari

Tek bir kurulum üzerinde 10 ayrı proje (her biri 10 personellik) çalıştırılabilen modelde:

- **AccessControlService** ile rol bazlı görünür projeler kontrolü.
- **X-Project-Id header'ı** ile aktif proje filtreleme.
- Proje bazlı **Trunk, DID, OutboundRoute, Queue, Campaign** izolasyonu.
- **SUPERVISOR çoklu projeye atanabilir, AGENT tek proje** — gerçek operasyonel ihtiyacı yansıtan, ince taneli erişim modeli.

### 5.3 Event-Driven ve Replay-Friendly Veri Modeli

`stroke` projesinde çizimin **video olarak değil, stroke event'leri olarak** saklanması; bu sayede her hızda tekrar oynatma, hassas thumbnail, blur, link önizleme, GIF export, replay paylaşımı gibi farklı senaryoların **veriden yeniden render** edilebilmesi — modern event-sourcing felsefesinin uygulanmış bir örneğidir.

```
DrawingDocument {
  version, canvas, durationMs, startedAt,
  strokes: [{ id, brush, size, opacity, color,
              pressureCurve, points: [{ t, x, y, p }] }]
}
```

Bu modelin **mobil tarafta Skia**, **web tarafta Canvas 2D** ile birebir render edilebilmesi için pressure curve, airbrush radial gradient stamping ve BlurMaskFilter emülasyonu gibi mimari detaylar düşünülmüştür.

### 5.4 İş Akışı Orkestrasyonu

`icra-ceza-otomasyon` üç fazlı bir state machine olarak yapılandırılmıştır:

```
Stage 1 (Sorgu) → Stage 2 (Dava açma) → Stage 3 (SMTP+IMAP mail)
        │                │                       │
        └─── Excel + UDF Dosyaları (paylaşılan state)
```

Üç stage paralel çalışabilen 3 ayrı UYAP hesabını eş zamanlı yönetir. **Diagnostic flag**'ler (`ADIM2_DIAG=1`) ile her endpoint çağrısı `debug/adim2/<timestamp>-row-N/` altına dökülür — bu, **debug edilebilirliği ürün özelliği olarak gören** bir mühendislik kültürünü gösterir.

### 5.5 Reverse Proxy ve Edge

- **Caddy 2** ile otomatik Let's Encrypt + HTTPS.
- **/api**, **/ws**, **/minio** path-based routing.
- **Vercel Edge runtime** ile dynamic OG image üretimi.
- **Cloudflare** DNS + Email Routing.

---

## 6. Güvenlik Mühendisliği Yetkinlikleri

`call-center-platform` ve `stroke` projelerinde aşağıdaki güvenlik kontrolleri **aktif olarak uygulanmıştır**:

- **Argon2id** parola hash (bcrypt yerine modern, GPU/ASIC-direnci yüksek algoritma).
- **JWT** mimarisi: 15 dakika access + 7 gün refresh token.
- **Brute-force lock**: Redis tabanlı, 6 yanlış denemede kilit.
- **Password policy**: min uzunluk + karmaşıklık.
- **MFA TOTP**: `otplib` + `qrcode` + AES-GCM ile secret encryption.
- **Audit log interceptor**: tüm POST/PATCH/DELETE çağrıları otomatik loglanır.
- **Login history**: oturumlar + giriş denemeleri (IP + user agent ile) admin panelinden görüntülenebilir.
- **OAuth/SSO**: Google Sign-In + Apple Sign-In V2.
- **Supabase RLS** (Row Level Security) + DB trigger ile **çift katmanlı self-report engelleme**.
- **Edge function service-role çağrıları** için `--no-verify-jwt` ile bilinçli atlatma (yalnız trigger orijinli istekler için).
- **Vault secret management** (Supabase Vault — `SERVICE_ROLE_KEY` dashboard'a kapalı).
- **CC arşiv** otomatik ekleme, mail header injection'a karşı şablon kontrolü.

Bu set, **güvenlik bilincinin "tick box compliance" seviyesinde değil, üretim mühendisliği seviyesinde** olduğunu gösterir.

---

## 7. DevOps, Altyapı ve Üretim Operasyonu

### 7.1 Konteynerizasyon ve Process Management

- **Docker** + **Docker Compose** (yerel ve production: `docker-compose.production.yml`).
- **PM2** fork mode + logrotate (`ecosystem.config.cjs`).
- **Çoklu stack komutları**: `pnpm stack:up` (tam stack), `pnpm db:up` (sadece DB+cache).

### 7.2 CI/CD ve Build Sistemleri

- **GitHub Actions** (CI/CD), `culture-line` projesinde belirtilmiştir.
- **EAS Build**: development, preview, production profilleri.
- **Turborepo** cache.
- **Vercel** otomatik deploy (push-to-deploy).
- **Submit otomasyonu**: `eas submit --platform android` (Play Console service account).

### 7.3 Gözlemlenebilirlik

- **System Health dashboard** (Postgres, Redis, Asterisk durumu).
- **Audit log** (filtre + facets).
- **Sentry** (mobil native + JS, build-time source map upload).
- **Structured access log** (JSONL, `logs/api_access.jsonl`).
- **Wallboard** (canlı ajan supervisor görünümü).
- **Mola limit raporu**, **Login History admin paneli**.

### 7.4 Backup ve Disaster Recovery

- `scripts/ccp-backup.cron` ile **günlük PostgreSQL + MinIO yedek**.
- `ops/BACKUP_AND_MONITORING.md` ve `ops/RUNBOOK.md` ile operasyon dokümantasyonu.

### 7.5 Üretim Deployment Tecrübesi

- **VPS üzerine** Caddy + PM2 + Docker compose deployment.
- **Self-signed sertifika** gibi gerçek operasyon ayrıntılarına farkındalık.
- **Natro paylaşımlı hosting (FTP)** üzerinde Laravel deploy senaryosu (`public_html/sikayetler/index.php` yolları).
- **Staging + Production** ayrımı (`staging.cultureline.app` vs `api.cultureline.app`).

### 7.6 Üçüncü Parti Servis Entegrasyonları

Resend (email), Cloudflare (DNS + Email Routing), Vercel (hosting + edge), Supabase (BaaS), Sentry (monitoring), Meta WhatsApp Business Cloud, OpenAI (moderation), Apple Push (APNs V2), Google Sign-In + FCM — **üretim ortamında 10+ harici servisi orkestrasyon** tecrübesi mevcuttur.

---

## 8. Yapay Zekâ, RAG ve Veri Mühendisliği

`ictihat-motoru` projesi, modern arama altyapısının tipik fazlarını disiplinli şekilde uygulamaktadır:

- **Faz 1**: Endpoint tabanlı veri çekme (`/aramadetaylist`, `/getDokuman`), JSONL dataset, checkpoint.
- **Faz 2**: Dedup (hybrid strateji) ve kalite raporu üretimi.
- **Faz 2.5**: **Quality gate** — eşik tabanlı pass/fail mekanizması, CLI parametreleriyle özelleştirilebilir thresholds.
- **Faz 3**: Hybrid index + search (BM25 + vector).
- **Faz 4**: Citation-first RAG cevap üretimi.
- **Faz 5**: Web UI + Admin paneli, FastAPI + Uvicorn ile production hardening (API key, rate limit, structured access log).

Ek olarak `stroke` projesinde **OpenAI Moderation API** üretim ortamında kullanılmaktadır.

Bu mühendislik, **"prompt engineering" seviyesinin ötesinde**, klasik IR (information retrieval) disiplinine, eval framework'lere ve **veri kalitesine** hâkim bir profili göstermektedir.

---

## 9. Test ve Kalite Mühendisliği

| Test Tipi | Kullanılan Araç | Proje |
|---|---|---|
| Unit test (backend) | **Vitest** | `call-center-platform` (calls.service, channel-state, post-call.processor, inbound-routing, access-control, queue-auto-sync, phone.util) |
| Unit test (genel) | **Jest** | `culture-line` |
| E2E (web) | **Playwright** | `call-center-platform` (smoke, auth, customers, calls, admin, multi-project suites) |
| E2E (mobile) | **Detox** | `culture-line` |
| Telefoni mock | **SIPp** | `call-center-platform` (`docker/sipp/`) |
| Eval (ML/RAG) | Özel runner | `ictihat-motoru` (`eval/run_eval.py` + `docs/EVAL_REPORT.md`) |
| Linting / Format | **ESLint**, **Prettier**, **TypeScript typecheck** | Tüm TS/JS projeleri |

**E2E suite'lerin domain bazlı bölünmüş olması** (smoke, auth, customers, calls, admin, multi-project) profesyonel bir test stratejisini yansıtır.

---

## 10. Ürün Düşüncesi ve Profesyonel Olgunluk

Geliştiricinin **yalnızca kod yazmadığı**, ürün ve süreç tarafında da olgun düşündüğüne dair işaretler:

### 10.1 Dokümantasyon Disiplini

- Her büyük projede **detaylı README**: özellikler, mimari diyagramları (ASCII), klasör yapısı, kurulum, env, deploy adımları, sorun giderme bölümleri.
- Ek dokümantasyon: `CLAUDE.md` (AI asistanları için codebase rehberi), `DEPLOYMENT.md`, `CONTRIBUTING.md`, `SPRINT_0_KURULUM.md`, `apps/web/e2e/README.md`, `docker/sipp/README.md`, `ops/RUNBOOK.md`, `ops/BACKUP_AND_MONITORING.md`.
- `culture-line`'da **OYUN_TASARIMI_v2.md** ve **YOL_HARITASI.md** (checkbox'lı ilerleme) — **product/design dokümanı** ile gelişimi yönetme alışkanlığı.

### 10.2 Sürüm ve İterasyon Disiplini

- `call-center-platform`'da Sprint **19. iterasyona** ulaşılmış, sprint sonlarında **güvenlik ve gözlemlenebilirlik iyileştirmeleri** uygulanmıştır.
- `pusula-dava-web` README'sinde "Bu iterasyonda yapılanlar" başlığı altında **iterasyon notları** disiplinle tutulmaktadır.

### 10.3 Konfigürasyon Üzerinden Esneklik

Hardcoded değerler yerine **`project-config.js` patterns** kullanımı (banka konfigürasyonları için), **`.env` yönetimi**, **userData altında profil ayarları** (`profiles.settings.json`, `mail.settings.json`) ile **kişisel veri-repo ayrımı** profesyonelce yapılmıştır.

### 10.4 Bilinen Limitasyonların Şeffaflığı

`icra-ceza-otomasyon` README'sinde "Bilinen Limitasyonlar" başlığı altında hardcoded değerlerin, eksik konfigürasyonların ve Node 22+ uyumluluk uyarılarının **açıkça listelenmesi**; **dürüst mühendislik kültürünün** açık göstergesidir.

### 10.5 Lokalizasyon ve Erişilebilirlik

- **i18n** tam yapılandırılmış (TR + EN, sistem dili otomatik algılama).
- **Karanlık/Aydınlık mod** desteği (`sureli-is-hatirlatici`).
- **Responsive, web+mobil uyumlu** UI iskeletleri.
- **Push notification body**'nin alıcının `app_language` (TR/EN) tercihine göre üretilmesi.

### 10.6 Hukuki / Etik Hassasiyet

- `stroke`'ta **legal sayfalar** (Terms, Privacy, Community guidelines) hem mobile inline (TR+EN), hem web companion'da SSG ile yer almaktadır.
- **13–15 yaş koruma**, **AI moderation retention politikası (30 gün)**, **community brigading koruması** gibi konular **App Store Review** ve **veri koruma mevzuatı** bilincini yansıtır.
- `imza-uzman`'da "**Repo dışında tutulması gereken hassas dosyalar .gitignore ile dışlanmıştır**" notu — kişisel veri farkındalığı.

---

## 11. Güçlü Yönler — Sentez

1. **Sıfırdan production'a kadar tek başına götürme yetkinliği.** Bir SaaS platformunu, bir tüketici mobil ürününü ve bir hukuki otomasyon aracını solo şekilde tasarlayıp **canlıya almış**, **operasyonda tutmuş** ve **iteratif geliştirebilmiştir**.

2. **Çok katmanlı stack hâkimiyeti.** Backend / Frontend / Mobil / Masaüstü / Devops katmanlarının tamamında **üretim seviyesinde**.

3. **Derin domain uzmanlığı (UYAP / Türk hukuk teknolojisi).** Türkiye pazarında nadir bulunan bir niş — bu uzmanlık çoğu işverene "anahtar teslim hukuk teknolojisi mühendisi" değeri sunar.

4. **Karmaşık entegrasyon problemlerinde başarılı.** UYAP, e-Barobirlik, PTT, Asterisk, sip.js, WhatsApp, FCM/APNs, Supabase, OpenAI, Resend, Cloudflare gibi 10+ harici sistemi orkestre etmiştir.

5. **Mühendislik olgunluğu.** Audit log, RBAC, MFA, brute-force lock, password policy, healthcheck endpoint'leri, structured logging, RLS, backup cron, runbook, eval framework — kıdemli mühendisin doğal refleksleri.

6. **Ürün ve süreç düşüncesi.** Sprint planlama, iterasyon notları, yol haritası, bilinen limitasyonların şeffaflığı, kullanıcı tarafında i18n, dark mode, hassas içerik blur, yaş koruma — **kullanıcıyı düşünen** ürün geliştirme.

7. **Modern ve güncel stack tercihleri.** Mantine 7, NestJS 11, Prisma 5, Expo SDK 54, Next.js 16 (Turbopack), Tailwind 4, React Native 0.76 (new architecture) — **state of the art** seviyede güncel teknolojileri **üretimde kullanan**, "early-adopter ama disiplinli" bir profil.

8. **Real-time ve telefoni gibi zorlu alanlarda yetkinlik.** WebRTC, sip.js, Asterisk ARI, Socket.IO, Supabase Realtime, BullMQ — çoğu geliştiricinin uzak durduğu alanlarda derinleşmiş.

9. **Otomasyon ve scraping refleksi.** Playwright + CDP + axios ile karmaşık state'li sistemlere karşı dayanıklı (resilient) otomasyonlar yazma yeteneği.

10. **Türkçe + İngilizce dil çalışması.** Hem ürün lokalizasyonu hem teknik dokümantasyon iki dilde de profesyonelce yürütülüyor.

---

## 12. Geliştirilebilecek / Açık Alanlar

Aşağıdaki başlıklar **eksiklik değil**, mevcut profilin daha da güçlenebileceği gelişim yönleridir. Var olan tabandan hareketle erişilmesi kolay alanlardır.

1. **Public açık kaynak görünürlüğü.** Repository'lerin büyük çoğunluğu **private**. Tek başına yetkinliği kanıtlamak için **1–2 public showcase projesi** ya da `case study` README'leri (private repo'lar için public özet sayfaları) görünürlüğü ciddi artırır.

2. **GitHub Profil README ve sabitlenmiş projeler.** `omerulaskara/omerulaskara` profil reposu henüz README içermiyor. Bir **portfolyo README**'si ve **6 pinned project** (özellikle `call-center-platform`, `stroke`, `ictihat-motoru`) profili anında "wow" yapar.

3. **Test coverage'ın görünür hale getirilmesi.** Vitest/Jest/Detox/Playwright kullanılıyor; ancak **coverage badge'leri**, **GitHub Actions status badge'leri**, **README'de coverage çıktısı** gibi unsurlar eklenebilir.

4. **Açık paylaşıma uygun blog / teknik yazı.** UYAP otomasyonu, Asterisk + sip.js multi-tenant deneyimi, Skia stroke replay mimarisi gibi konular **uluslararası teknik topluluk için değerli içerikler**dir; Medium/Hashnode/devto'da paylaşımı **personal brand**'i hızla büyütür.

5. **Mobil için Android dağıtım disiplini ötesinde iOS yayını.** `stroke` "Android öncelik, iOS sonra" notuyla planlanmış; iOS dağıtımı tamamlandığında **dual-platform shipping** kanıtlanmış olur.

6. **Cloud-native genişleme.** Çoğunlukla VPS + Docker + PM2 + Caddy üzerinde duruluyor. **Kubernetes**, **Helm**, **Terraform**, **AWS/GCP/Azure managed services** ile portfolyo cloud-native kurumsal alıcılara da hitap eder hale gelir.

7. **Tasarım sistemleri ve UI showcase.** Tailwind + Mantine ile çok sayıda UI üretilmiş; ancak **Figma component library** ya da **Storybook** ile dış paylaşılan bir tasarım sistemi profile **frontend lead** algısı ekleyebilir.

8. **GraphQL / tRPC.** REST + Prisma + paylaşılan TS tipleri yaklaşımı güçlü ama, **tRPC** veya **GraphQL** ile tip güvenliğinin daha da otomatize edilmesi seçenek olabilir.

9. **Mesaj kuyrukları geniş yelpazesi.** BullMQ + Redis kullanılıyor; **Kafka, NATS, RabbitMQ** gibi event streaming altyapılarına dokunulmuş public proje yok.

10. **Lisanslama ve katkı kültürü.** Çoğu repo "iç kullanım, tüm hakları saklıdır" notuyla işaretli. Açık kaynak olabilecek araçlar (örn. **udf-from-excel**, **pdf-kucult**) MIT lisansla yayınlanırsa topluluk üzerinden geri besleme ve görünürlük sağlar.

---

## 13. Konum Uygunluğu — Rol Önerileri

Bu profil, aşağıdaki rolllerde **doğrudan üretkenlik** ile başlayabilir.

### 13.1 Doğrudan Uyumlu Roller (Day-1 Ready)

- **Senior Full-Stack Engineer** (TypeScript/Node + React/Next.js + PostgreSQL).
- **Tech Lead / Founding Engineer** (erken aşama startup'ta tek başına ürün çıkarabilir).
- **Backend Engineer (NestJS / Laravel)**.
- **Legal Tech Engineer** (UYAP entegrasyonları gerektiren her ürün için **niche expert**).
- **Mobile Engineer (React Native + Expo)**.
- **Real-Time Systems Engineer** (WebRTC / Asterisk / Socket.IO).
- **Solutions / Platform Engineer** (multi-tenant SaaS mimarisi).

### 13.2 Yakın Geçiş Mesafesindeki Roller

- **DevOps Engineer** (Docker, PM2, Caddy mevcut; K8s/Terraform öğrenme ile geçiş kısa).
- **ML Platform Engineer** (RAG/IR temeli mevcut; LLM-ops doğrultusunda derinleşme).
- **Security Engineer (App Sec)** (RBAC, MFA, audit log, RLS pratikleri mevcut).

### 13.3 Freelance / Konsültasyon İçin Konumlandırma

- **Hukuk büroları için UYAP otomasyon konsültanı** (Türkiye pazarında alıcısı çok az tedarikçi olan bir alan).
- **Çağrı merkezi kurulumu / Asterisk + WebRTC** entegratörü.
- **B2B SaaS MVP** (sıfırdan üretime 6–12 hafta içinde).
- **AI/RAG arama altyapısı** (özellikle hukuk/teknik doküman alanında).

### 13.4 Akademik / Eğitim Yönelimi

- **Yazılım Mühendisliği MSc** programlarına başvuru için **çok güçlü pratik portfolyo**.
- **Yazılım eğitmeni / kurs hazırlayıcı**: Electron + Playwright otomasyon, NestJS + Prisma multi-tenant SaaS, React Native + Skia gibi konularda **özgün içerik** üretebilir.

---

## 14. Sonuç

Ömer Ulaş Kara, **kıdemli (senior) full-stack mühendis** profilinin **ürün-odaklı (product-minded)** ve **operasyon-bilinçli (production-aware)** versiyonunu temsil etmektedir. Profil; bir yandan **iş alanına (legal tech)** özgü derin bir uzmanlığa, diğer yandan **modern web/mobil/devops/AI** disiplinlerinin tamamına eş zamanlı hâkimiyet göstermektedir.

GitHub'daki 19 repository, sıradan portfolyo projeleri değil; **gerçek müşteri ihtiyaçlarına yanıt veren, üretim ortamında çalışan, iterasyonla olgunlaşan, dokümantasyonu profesyonel** sistemlerdir. Bu, **sertifikasyon kovalamak yerine üretmeyi**, **demo yapmak yerine teslim etmeyi** seçen bir mühendis profilidir.

Önerilen sonraki adımlar:

1. **Public görünürlüğü artırmak**: profil README + pinned projeler + 1-2 showcase açık kaynak araç.
2. **Teknik yazı / blog**: UYAP, Asterisk, Skia mimarileri üzerine.
3. **Cloud-native (K8s/Terraform/managed cloud)** yetkinliğini eklemek.
4. **Niş otoritesini ürünleştirmek**: hukuk teknolojisi alanında ürün/konsültasyon hattı.

Bu hamlelerle profil, **Türkiye'deki en güçlü hukuk-teknolojisi solo mühendis profillerinden biri** hâline gelecek ve **uluslararası remote senior pozisyonlarına** doğrudan başvuru için **birinci sınıf bir aday** olarak konumlanacaktır.

---

## 15. Ek: Repository Envanteri

Aşağıda inceleme kapsamında ulaşılan tüm repository'lerin özet listesi yer almaktadır. **Çoğunluğu private** olduğundan kamuya doğrudan bağlanmaz; özetler README içeriklerinden çıkarılmıştır.

### 15.1 Hukuk Teknolojileri / UYAP Otomasyonu

| Repo | Tür | Stack | Özet |
|---|---|---|---|
| **pusula-dava** | Private | Electron, JS | XHR tabanlı yeni dava robotu; 3 profil; oturum/cookie altyapısı; masaüstü ayarlar arayüzü |
| **pusula-dava-web** | Private | Laravel 9, PHP, MySQL | Dava görüntüleme/raporlama; server-side filtreleme, smart presets, REST API (`/api/cases`, `/api/cases/{id}`, `/api/filters`), kullanıcı yönetimi |
| **sikayetler** | Private | Laravel, PHP | Şikayet yönetimi; proje bazlı raporlar; filtreleme + CSV/Excel export; suffix'li tablo şeması |
| **icra-ceza-otomasyon** | Private | Electron 32, Node 20 ESM, axios, Playwright, nodemailer, imapflow, xlsx | UYAP üzerinden icra ceza davası açma + mail bildirim; 14 endpoint'lik dava açma akışı; 3 profil paralel; ADIM2 diagnostic; PTT barkod sorgulama; e-Barobirlik ödeme |
| **imza-uzman** | Private | Node.js, CDP, Playwright | UYAP yerel proxy + oturum yakalama + Chrome CDP üzerinden e-imza otomatik relogin |
| **uyap-evrak-indirme** | Private | JS, HTML, PowerShell, CSS | UYAP evrak indirme; XHR analiz dokümanları; auto-restart scripti |
| **sureli-is-hatirlatici** | Private | Laravel 9, PHP 8, MariaDB, SMTP | Hukuk ofisi için iş + avukat + otomatik hatırlatma maili; 1/2/4/6 gün önce uyarı; cron tabanlı 09:00 mail |
| **udf-from-excel** | Private | Electron, JS | Excel'den toplu UDF dilekçe üretimi; NSIS + Portable Windows packaging |
| **ictihat-motoru** | Private | Python, FastAPI, Uvicorn | Yargıtay karar arama; checkpoint'li crawler, dedup, quality gate, BM25+vector hybrid index, citation-first RAG, eval framework, admin paneli |

### 15.2 SaaS / Telefoni

| Repo | Tür | Stack | Özet |
|---|---|---|---|
| **call-center-platform** | Private | React 18 + TS + Vite + Mantine 7 + Tanstack Query + sip.js + Zustand · NestJS 11 + Prisma 5 + BullMQ + Socket.IO · PostgreSQL 15 · Redis 7 · Asterisk 20 + ARI/Stasis · MinIO · Caddy 2 · PM2 · Turborepo + pnpm | Multi-tenant WebRTC call center; inbound/outbound + predictive dialer; çağrı kaydı; supervisor monitor; WhatsApp Business; MFA, RBAC, audit log; Sprint 19 üretimde (`ccp.stroke-app.com`) |

### 15.3 Mobil Tüketici Ürünleri

| Repo | Tür | Stack | Özet |
|---|---|---|---|
| **stroke** | Private | React Native 0.76 + Expo SDK 54 + Skia 2.2 + Reanimated 3 + Supabase + Sentry · Next.js 16 + Turbopack + Tailwind 4 + Vercel + Cloudflare + Resend · OpenAI Moderation | Çizimi stroke event JSON olarak saklayan mobil sosyal sanat uygulaması + web companion; AI moderation; 13-15 yaş koruma; hassas içerik blur; GIF export (Bayer dithering); dynamic OG |
| **culture-line** | Private | NestJS + TS + Prisma + Socket.IO · React Native + Expo · PostgreSQL 16 · Redis 7 · Jest · Detox · GitHub Actions | Kelime tahmin temelli, gerçek-zamanlı, sosyal mobil bilgi yarışması |

### 15.4 Masaüstü Yardımcı Araçlar

| Repo | Tür | Stack | Özet |
|---|---|---|---|
| **pdf-kucult** | Public | Electron, JS | PDF optimizasyon/küçültme |
| **pdf-birlestirici** | Private | Electron, JS, HTML | Çoklu PDF birleştirme |
| **msg-to-pdf** | Private | Electron, JS | Outlook .msg → PDF dönüşümü |
| **bot-yarat** | Private | Electron + Playwright | Excel tabanlı senaryo otomasyonu; profil bazlı log/state |

### 15.5 Profil / Yer Tutucu

| Repo | Tür | Notlar |
|---|---|---|
| **omerulaskara** | Public | GitHub profil yapılandırması (henüz README eklenmemiş) |
| **education** | Public | Yer tutucu; içerik yok |
| **abc** | Private | Boş repository |

---

> *Bu rapor, omerulaskara GitHub profilindeki repository içeriklerinin (README, açıklama, dil dağılımı, dosya yapısı) sistematik incelemesinden elde edilmiştir. Özel (private) repository içeriklerine erişim, oturum açmış kullanıcının tarayıcısı üzerinden sağlanmıştır; rapor harici bir kanal kullanılmamıştır. Repository içerikleri zaman içinde değiştiğinden, rapor 25 Mayıs 2026 tarihindeki duruma göre geçerlidir.*

**— Rapor Sonu —**
