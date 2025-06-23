import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StarshipList from './components/StarshipList';
import StarshipDetail from './components/StarshipDetail';
import './App.css';

// ===== HEADER BİLEŞENİ =====
// Üst menü bileşeni, arama ve geri dönüş fonksiyonlarını içerir
function Header({ searchTerm, onSearchChange }) { // searchTerm: Arama terimi, onSearchChange: Arama değişiklik fonksiyonu
  const location = useLocation(); // Mevcut url konumunu alır
  const isHomePage = location.pathname === '/'; // Ana sayfada olup olmadığımızı kontrol eder

  return (
    <header className="App-header">
      <div className="header-content">
        {/* Logo ve ana sayfaya dönüş linki */}
        <Link to="/" className="logo-container">
          <img src="/logo.png" alt="Star Wars Logo" className="logo" />
        </Link>
        {isHomePage ? ( // Ana sayfadaysak arama kutusunu göster
          <div className="search-container">
            <div className="search-input-wrapper">
              <i className="fa-brands fa-searchengin search-icon"></i>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm} // App.jsxden gelen arama terimi
                onChange={onSearchChange} // App.jsxden gelen arama değişiklik fonksiyonu
                className="search-input"
              />
            </div>
          </div>
        ) : ( // Ana sayfada değilsek geri dönüş butonunu göster
          <div className="header-right">
            <Link to="/" className="back-button">← Back to List</Link>
          </div>
        )}
      </div>
    </header>
  );
}

// ===== ANA UYGULAMA BİLEŞENİ =====
function App() {
  // ===== STATE TANIMLAMALARI =====
  const [searchTerm, setSearchTerm] = useState(''); // Arama terimini tutan state

  // ===== ARAMA FONKSİYONU =====
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Input değeri değiştiğinde arama terimini günceller
  };

  // ===== FARE HAREKETİ TAKİBİ =====
  // Arka plan animasyonu için fare hareketlerini takip eder. Mouse hareketlerine göre arka planın pozisyonunu günceller. Yıldızların hareket etmesini sağlar.
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e; // Fare koordinatlarını alır
      const x = (clientX / window.innerWidth - 0.5) * 50; // X ekseni için normalize edilmiş değer
      const y = (clientY / window.innerHeight - 0.5) * 50; // Y ekseni için normalize edilmiş değer
      
      // CSS değişkenlerini günceller
      document.body.style.setProperty('--mouse-x', `${x}px`);
      document.body.style.setProperty('--mouse-y', `${y}px`);
      
      // Arka plan pozisyonunu günceller
      const beforeElement = document.body;
      if (beforeElement) {
        beforeElement.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
      }
    };

    // Fare hareketi event listener'ını ekler
    window.addEventListener('mousemove', handleMouseMove);
    // Component unmount olduğunda event listenerı kaldırır
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ===== ANA GÖRÜNÜM =====
  return (
    // Router: Tüm uygulamanın yönlendirme sistemini sarmalayan ana bileşen
    // BrowserRouter: Tarayıcı geçmişini kullanarak url'leri yönetir
    // Routes: İçindeki Route bileşenlerini yöneten container
    <Router> {/* React Router'ı başlatır */}
      <div className="App">
        {/* Header bileşeni her sayfada görünür */}
        <Routes>
          {/* path="*": Herhangi bir url'de çalışacak route
              Header bileşeni tüm sayfalarda görünmesi gerektiği için * kullanıldı */}
          <Route path="*" element={<Header 
            searchTerm={searchTerm} // Arama terimini Header'a gönderir
            onSearchChange={handleSearch} // Arama değişiklik fonksiyonunu Header'a gönderir
          />} />
        </Routes>
        <main>
          {/* Sayfa içeriği için route'lar */}
          <Routes>
            {/* Ana sayfa route'u
                path="/" tam olarak ana sayfa url'i / olduğunda çalışır
                element, Bu route aktif olduğunda gösterilecek bileşen */}
            <Route path="/" element={<StarshipList 
              searchTerm={searchTerm} // Arama terimini StarshipList'e gönderir
            />} />
            {/* Gemi detay sayfası route'u
                path="/starship/:id": /starship/ ile başlayan ve sonrasında bir id parametresi alan urller için çalışır
                :id: Dinamik parametre, urldeki sayı değerini temsil eder
                Örnek: /starship/1, /starship/2 gibi urller bu route'a uyar */}
            <Route path="/starship/:id" element={<StarshipDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
