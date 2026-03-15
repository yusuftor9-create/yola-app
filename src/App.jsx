import { useMemo, useState } from 'react'

const photos = {
  hero: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  listing1: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=1200&q=80',
  listing2: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
  listing3: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  interior: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  coast: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
  mountains: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
}

function Logo() {
  return (
    <div className="logo-wrap">
      <div className="logo-mark">Y</div>
      <div>
        <div className="logo-title">YOLA</div>
        <div className="logo-subtitle">Karavanla başlar, mobiliteye büyür.</div>
      </div>
    </div>
  )
}

function PhotoCard({ src, alt, height = 240 }) {
  return (
    <div className="photo-card" style={{ height }}>
      <img src={src} alt={alt} />
      <div className="photo-overlay" />
    </div>
  )
}

function Layout({ children, currentPage, setCurrentPage }) {
  const navItems = [
    ['home', 'Ana Sayfa'],
    ['search', 'İlanlar'],
    ['mobile', 'Mobil'],
    ['host', 'Ev Sahibi'],
    ['dashboard', 'Panel'],
    ['admin', 'Admin'],
  ]

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <button className="ghost-button left-logo" onClick={() => setCurrentPage('home')}>
            <Logo />
          </button>

          <nav className="desktop-nav">
            {navItems.map(([key, label]) => (
              <button
                key={key}
                className={currentPage === key ? 'nav-btn active' : 'nav-btn'}
                onClick={() => setCurrentPage(key)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button className="outline-btn" onClick={() => setCurrentPage('auth')}>Giriş Yap</button>
            <button className="dark-btn" onClick={() => setCurrentPage('host')}>Karavanını Listele</button>
          </div>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p className="muted mt16">Karavanla başlayan, mobiliteye büyüyen yeni nesil rezervasyon platformu.</p>
          </div>
          <div>
            <h4>Platform</h4>
            <div className="footer-links">
              <button onClick={() => setCurrentPage('search')}>Karavan Kirala</button>
              <button onClick={() => setCurrentPage('mobile')}>Mobil Deneyim</button>
              <button onClick={() => setCurrentPage('host')}>Ev Sahibi Ol</button>
            </div>
          </div>
          <div>
            <h4>Şirket</h4>
            <div className="footer-links">
              <span>Hakkımızda</span>
              <span>İletişim</span>
              <span>Kariyer</span>
            </div>
          </div>
          <div>
            <h4>Yasal</h4>
            <div className="footer-links">
              <span>KVKK</span>
              <span>Gizlilik Politikası</span>
              <span>Çerez Politikası</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HomePage({ setCurrentPage }) {
  const featured = [
    { title: 'Volkswagen California Ocean', location: 'İzmir', price: '₺5.800 / gün', details: '4 kişi • Otomatik • Mutfak • Duş', image: photos.listing1 },
    { title: 'Fiat Ducato Explorer', location: 'İstanbul', price: '₺4.250 / gün', details: '3 kişi • Dizel • Güneş paneli', image: photos.listing2 },
    { title: 'Family Road Karavan', location: 'Antalya', price: '₺3.900 / gün', details: '5 kişi • Klima • WC', image: photos.listing3 },
  ]

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="pill">Yeni nesil karavan kiralama deneyimi</div>
            <h1 className="hero-title">Premium bir yolculuk hissi, sade bir rezervasyon akışı.</h1>
            <p className="hero-text">YOLA, Türkiye genelinde karavan sahipleriyle kiracıları güven odaklı bir deneyimde buluşturan modern bir mobilite markasıdır.</p>
            <div className="search-box">
              <input placeholder="Şehir veya rota" />
              <input placeholder="Başlangıç" />
              <input placeholder="Bitiş" />
              <button className="sky-btn" onClick={() => setCurrentPage('search')}>Karavan Ara</button>
            </div>
          </div>
          <div className="hero-card">
            <PhotoCard src={photos.hero} alt="Yola hero" height={340} />
            <div className="hero-card-content">
              <div>
                <div className="mini-pill">Öne çıkan ilan</div>
                <h3>Volkswagen California Ocean</h3>
                <p className="muted">İzmir • 4 kişi • Otomatik • Mutfak • Duş</p>
              </div>
              <div className="price-chip">₺5.800 / gün</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Keşfet</div>
              <h2>Seçilmiş ilanlar</h2>
            </div>
            <button className="outline-btn" onClick={() => setCurrentPage('search')}>Tüm ilanları gör</button>
          </div>
          <div className="cards-grid three">
            {featured.map((item) => (
              <button key={item.title} className="listing-card" onClick={() => setCurrentPage('listing')}>
                <PhotoCard src={item.image} alt={item.title} height={240} />
                <div className="listing-body">
                  <div className="listing-topline">
                    <span className="muted uppercase">{item.location}</span>
                    <span className="mini-pill gray">Premium</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.details}</p>
                  <div className="listing-footer">
                    <strong>{item.price}</strong>
                    <span className="sky-badge">Detay</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function SearchPage({ setCurrentPage }) {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    title: ['Volkswagen California', 'Fiat Ducato Camper', 'Mercedes Sprinter', 'Aile Karavanı', 'Coastal Van', 'Explorer X'][i],
    location: ['İzmir', 'İstanbul', 'Muğla', 'Antalya', 'Bodrum', 'Kapadokya'][i],
    price: ['₺5.800', '₺4.250', '₺6.100', '₺3.900', '₺5.400', '₺4.750'][i],
    image: [photos.listing1, photos.listing2, photos.mountains, photos.listing3, photos.coast, photos.hero][i],
  }))

  return (
    <section className="section">
      <div className="container two-col-layout">
        <aside className="sidebar-card">
          <h3>Filtreler</h3>
          <div className="stack16">
            <input placeholder="Şehir veya rota" />
            <input placeholder="Başlangıç" />
            <input placeholder="Bitiş" />
            <button className="dark-btn full">Filtrele</button>
          </div>
        </aside>
        <div>
          <div className="section-head left-only">
            <div>
              <h2>İlanlar</h2>
              <p className="muted">24 sonuç bulundu</p>
            </div>
          </div>
          <div className="cards-grid three">
            {items.map((item) => (
              <button key={item.title} className="listing-card" onClick={() => setCurrentPage('listing')}>
                <PhotoCard src={item.image} alt={item.title} height={220} />
                <div className="listing-body">
                  <span className="muted uppercase">{item.location}</span>
                  <h3>{item.title}</h3>
                  <div className="listing-footer">
                    <strong>{item.price} / gün</strong>
                    <span className="sky-badge">İncele</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ListingPage({ setCurrentPage }) {
  return (
    <section className="section">
      <div className="container detail-layout">
        <div>
          <button className="back-link" onClick={() => setCurrentPage('search')}>← İlanlara dön</button>
          <div className="gallery-grid">
            <PhotoCard src={photos.listing1} alt="Ana foto" height={360} />
            <PhotoCard src={photos.interior} alt="İç mekan" height={172} />
            <PhotoCard src={photos.coast} alt="Sahil" height={172} />
          </div>
          <div className="panel-card mt24">
            <span className="muted uppercase">İzmir</span>
            <h1 className="page-title">Volkswagen California Ocean</h1>
            <p className="muted">4 kişi • Otomatik • Mutfak • Duş • Klima</p>
            <div className="feature-grid mt24">
              {['Tam donanımlı mutfak', 'Konforlu yatak alanı', 'Kamp ekipman uyumu', 'Şehir dışı teslim opsiyonu'].map((f) => (
                <div key={f} className="feature-chip">{f}</div>
              ))}
            </div>
          </div>
        </div>
        <aside className="panel-card sticky-card">
          <div className="price-line"><strong>₺5.800</strong><span>/ gün</span></div>
          <div className="stack16 mt16">
            <input placeholder="Başlangıç tarihi" />
            <input placeholder="Bitiş tarihi" />
            <div className="summary-box">
              <div><span>3 gün</span><span>₺17.400</span></div>
              <div><span>Hizmet bedeli</span><span>₺870</span></div>
              <div><span>Koruma paketi</span><span>₺450</span></div>
              <div className="total"><span>Toplam</span><span>₺18.720</span></div>
            </div>
            <button className="dark-btn full" onClick={() => setCurrentPage('checkout')}>Rezervasyona devam et</button>
          </div>
        </aside>
      </div>
    </section>
  )
}

function CheckoutPage() {
  return (
    <section className="section">
      <div className="container checkout-layout">
        <div className="stack24">
          <div className="panel-card">
            <h2>Rezervasyon bilgileri</h2>
            <div className="form-grid mt16">
              <input placeholder="Ad Soyad" />
              <input placeholder="Telefon" />
              <input className="span-2" placeholder="E-posta" />
            </div>
          </div>
          <div className="panel-card">
            <h2>Ödeme</h2>
            <div className="stack16 mt16">
              <input placeholder="Kart üzerindeki isim" />
              <input placeholder="Kart numarası" />
              <div className="form-grid two">
                <input placeholder="AA / YY" />
                <input placeholder="CVV" />
              </div>
            </div>
          </div>
        </div>
        <aside className="panel-card sticky-card">
          <PhotoCard src={photos.listing1} alt="Checkout" height={220} />
          <h3 className="mt16">Volkswagen California Ocean</h3>
          <p className="muted">İzmir • 3 gece</p>
          <div className="summary-box mt16">
            <div><span>Kiralama</span><span>₺17.400</span></div>
            <div><span>Hizmet bedeli</span><span>₺870</span></div>
            <div><span>Koruma paketi</span><span>₺450</span></div>
            <div className="total"><span>Toplam</span><span>₺18.720</span></div>
          </div>
          <button className="dark-btn full mt16">Ödemeyi tamamla</button>
        </aside>
      </div>
    </section>
  )
}

function AuthPage() {
  const [tab, setTab] = useState('login')
  return (
    <section className="section">
      <div className="container auth-layout">
        <div className="panel-card">
          <div className="pill">Hesap merkezi</div>
          <h1 className="page-title">YOLA hesabın</h1>
          <p className="muted">Giriş yap, hesap oluştur, şifreni yenile veya doğrulama akışını tamamla.</p>
          <div className="tabs mt24">
            {[
              ['login', 'Giriş'],
              ['register', 'Kayıt Ol'],
              ['forgot', 'Şifre Sıfırla'],
              ['verify', 'Doğrulama'],
            ].map(([key, label]) => (
              <button key={key} className={tab === key ? 'tab active' : 'tab'} onClick={() => setTab(key)}>{label}</button>
            ))}
          </div>
          {tab === 'login' && (
            <div className="stack16 mt24">
              <button className="outline-btn full">Google ile devam et</button>
              <button className="outline-btn full">Apple ile devam et</button>
              <input placeholder="E-posta adresi" />
              <input placeholder="Şifre" type="password" />
              <button className="dark-btn full">Giriş Yap</button>
            </div>
          )}
          {tab === 'register' && (
            <div className="stack16 mt24">
              <input placeholder="Ad Soyad" />
              <input placeholder="E-posta adresi" />
              <input placeholder="Telefon" />
              <input placeholder="Şifre" type="password" />
              <button className="dark-btn full">Hesap Oluştur</button>
            </div>
          )}
          {tab === 'forgot' && (
            <div className="stack16 mt24">
              <div className="summary-box">Şifre yenileme bağlantısı için e-posta adresini gir.</div>
              <input placeholder="E-posta adresi" />
              <button className="dark-btn full">Şifre Yenileme Linki Gönder</button>
            </div>
          )}
          {tab === 'verify' && (
            <div className="stack16 mt24">
              {[
                ['Kimlik doğrulama', 'Bekliyor'],
                ['Ehliyet doğrulama', 'Yüklenmedi'],
                ['Telefon doğrulama', 'Tamamlandı'],
              ].map(([title, status]) => (
                <div key={title} className="verify-row">
                  <div>
                    <strong>{title}</strong>
                    <p className="muted">Güvenli rezervasyon için gerekli</p>
                  </div>
                  <span className="status-pill">{status}</span>
                </div>
              ))}
              <button className="sky-btn full">Belgeleri Yükle</button>
            </div>
          )}
        </div>
        <div className="panel-card no-pad overflow-hidden">
          <PhotoCard src={photos.hero} alt="Auth visual" height={620} />
        </div>
      </div>
    </section>
  )
}

function MobilePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head left-only">
          <div>
            <div className="section-kicker">Mobil ürün dili</div>
            <h2>Web ile uyumlu mobil deneyim</h2>
          </div>
        </div>
        <div className="cards-grid three">
          <div className="mobile-frame">
            <div className="mobile-topbar"><span>9:41</span><span>Ana Sayfa</span><span>100%</span></div>
            <PhotoCard src={photos.hero} alt="Mobil ana sayfa" height={180} />
            <div className="mobile-content">
              <h3>Yola çıkmanın en kolay yolu.</h3>
              <input placeholder="Şehir veya rota" />
              <button className="dark-btn full mt16">Karavan Ara</button>
            </div>
          </div>
          <div className="mobile-frame">
            <div className="mobile-topbar"><span>9:41</span><span>İlan Detay</span><span>100%</span></div>
            <PhotoCard src={photos.listing1} alt="Mobil detay" height={220} />
            <div className="mobile-content">
              <h3>Volkswagen California</h3>
              <p className="muted">İzmir • 4 kişi • Otomatik</p>
              <button className="sky-btn full mt16">Rezervasyona Devam Et</button>
            </div>
          </div>
          <div className="mobile-frame">
            <div className="mobile-topbar"><span>9:41</span><span>Ev Sahibi Paneli</span><span>100%</span></div>
            <div className="mobile-content">
              <div className="dark-card">
                <div className="muted-light">Bu ay kazanç</div>
                <div className="big-white">₺42.500</div>
              </div>
              <div className="stack16 mt16">
                {['Takvimi düzenle', 'Fiyat güncelle', 'Rezervasyon talepleri', 'Yorumlar'].map((item) => (
                  <div key={item} className="feature-chip">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HostPage({ setCurrentPage }) {
  return (
    <section className="host-section">
      <div className="container host-grid">
        <div>
          <div className="pill dark">Ev sahibi ol</div>
          <h1 className="hero-title light">Karavanın boş durmasın, gelir üretsin.</h1>
          <p className="hero-text light">YOLA ile ilan oluştur, takvimini yönet, rezervasyon kabul et ve tüm operasyonu modern bir panelden takip et.</p>
          <div className="row-gap mt24">
            <button className="light-btn" onClick={() => setCurrentPage('dashboard')}>Paneli Gör</button>
            <button className="outline-light-btn">Ev Sahibi Rehberi</button>
          </div>
        </div>
        <div className="glass-card">
          <PhotoCard src={photos.mountains} alt="Host" height={260} />
          <div className="glass-content">
            <h3>YOLA ev sahibi paketi</h3>
            <div className="feature-grid mt24">
              {['Takvim ve fiyat yönetimi', 'Rezervasyon talepleri', 'Kazanç takibi', 'Doğrulama araçları'].map((item) => (
                <div key={item} className="glass-chip">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardPage() {
  const reservations = [
    ['15–18 Nisan', 'Volkswagen California', 'Onaylandı', '₺18.720'],
    ['21–23 Nisan', 'Fiat Ducato Camper', 'Bekliyor', '₺8.500'],
    ['27–30 Nisan', 'Family Road', 'Onaylandı', '₺12.600'],
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-head left-only">
          <div>
            <div className="section-kicker">Ev sahibi paneli</div>
            <h2>Karavanlarını ve rezervasyonlarını yönet</h2>
          </div>
        </div>
        <div className="stats-grid">
          {[
            ['₺42.500', 'Bu ay kazanç'],
            ['8', 'Tamamlanan rezervasyon'],
            ['%74', 'Doluluk oranı'],
            ['4.9', 'Ortalama puan'],
          ].map(([value, label]) => (
            <div key={label} className="stat-card">
              <div className="stat-value">{value}</div>
              <div className="muted">{label}</div>
            </div>
          ))}
        </div>
        <div className="dashboard-grid mt24">
          <div className="panel-card">
            <h3>Rezervasyonlar</h3>
            <div className="table-wrap mt16">
              <table>
                <thead>
                  <tr><th>Tarih</th><th>İlan</th><th>Durum</th><th>Tutar</th></tr>
                </thead>
                <tbody>
                  {reservations.map((row) => (
                    <tr key={row.join('-')}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="stack24">
            <div className="panel-card no-pad overflow-hidden"><PhotoCard src={photos.listing2} alt="Panel" height={200} /></div>
            <div className="panel-card">
              <h3>Hızlı işlemler</h3>
              <div className="stack16 mt16">
                <button className="dark-btn full">Yeni ilan ekle</button>
                <button className="outline-btn full">Takvimi düzenle</button>
                <button className="outline-btn full">Fiyat güncelle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AdminPage() {
  const users = [
    ['Ahmet Yılmaz', 'Ev sahibi', 'Doğrulandı', 'İstanbul'],
    ['Ece Demir', 'Kiracı', 'Bekliyor', 'İzmir'],
    ['Mert Kaya', 'Ev sahibi', 'Doğrulandı', 'Antalya'],
  ]

  const listings = [
    ['Volkswagen California', 'Aktif', 'İzmir', '₺5.800'],
    ['Family Road Karavan', 'İncelemede', 'Antalya', '₺3.900'],
    ['Coastal Van', 'Aktif', 'Bodrum', '₺5.400'],
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-head left-only">
          <div>
            <div className="section-kicker">Admin paneli</div>
            <h2>Platformu merkezi olarak yönet</h2>
          </div>
        </div>
        <div className="stats-grid">
          {[
            ['1.284', 'Toplam kullanıcı'],
            ['312', 'Aktif ilan'],
            ['86', 'Açık rezervasyon'],
            ['14', 'İnceleme bekleyen'],
          ].map(([value, label]) => (
            <div key={label} className="stat-card">
              <div className="stat-value">{value}</div>
              <div className="muted">{label}</div>
            </div>
          ))}
        </div>
        <div className="cards-grid two mt24">
          <div className="panel-card">
            <h3>Kullanıcılar</h3>
            <div className="table-wrap mt16">
              <table>
                <thead>
                  <tr><th>Ad</th><th>Rol</th><th>Durum</th><th>Şehir</th></tr>
                </thead>
                <tbody>
                  {users.map((row) => <tr key={row.join('-')}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel-card">
            <h3>İlan moderasyonu</h3>
            <div className="table-wrap mt16">
              <table>
                <thead>
                  <tr><th>İlan</th><th>Durum</th><th>Şehir</th><th>Fiyat</th></tr>
                </thead>
                <tbody>
                  {listings.map((row) => <tr key={row.join('-')}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const page = useMemo(() => {
    switch (currentPage) {
      case 'search': return <SearchPage setCurrentPage={setCurrentPage} />
      case 'listing': return <ListingPage setCurrentPage={setCurrentPage} />
      case 'checkout': return <CheckoutPage />
      case 'host': return <HostPage setCurrentPage={setCurrentPage} />
      case 'dashboard': return <DashboardPage />
      case 'auth': return <AuthPage />
      case 'mobile': return <MobilePage />
      case 'admin': return <AdminPage />
      default: return <HomePage setCurrentPage={setCurrentPage} />
    }
  }, [currentPage])

  return <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>{page}</Layout>
}
