import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// ===== STARSHIP KART BİLEŞENİ =====
// Her bir gemi için kart oluşturan alt bileşen
// Link ile detay sayfasına yönlendirme yapar
const StarshipCard = ({ starship, index }) => ( // starship(gemi verileri) ve index(gemi listesindeki sırası) prop'larını alan fonksiyonel bileşen
  // starship prop'u: StarshipList'ten gelen gemi verileri
  // index prop'u: map fonksiyonundan gelen gemi sırası
  <Link // React Router'ın Link bileşeni ile sayfa yönlendirmesi
    to={`/starship/${index + 1}`} // Detay sayfasına yönlendirme URL'i (index + 1 ile ID oluşturma)
    // index değeri, starships array'indeki bir geminin sıfırdan başlayan pozisyonunu temsil eder (0, 1, 2)
    // index 0'ken URL /starship/1 olur
    key={starship.name} // React'in liste elemanları için gerekli unique key
    className="starship-card" 
  >
    <h3>{starship.name}</h3> {/*Gemi adı (starship prop'undan gelen veri)*/} 
    <p>Model: {starship.model}</p> {/*Gemi modeli (starship prop'undan gelen veri)*/}
    <div className="speed-container"> {/*Maksimum hız container'ı*/}
      <p>Max Speed: {starship.max_atmosphering_speed}</p> {/* Maksimum hız (starship prop'undan gelen veri) */}
      <span className="material-icons">speed</span> {/*Hız iconu*/}
    </div>
  </Link>
);

// ===== STARSHIP LİSTE BİLEŞENİ =====
// Tüm uzay gemilerinin listesini gösteren ana bileşen
// Arama terimine göre filtreleme yapar
const StarshipList = ({ searchTerm }) => { // searchTerm prop'u: App.js'den gelen arama terimi
  // ===== STATE TANIMLAMALARI =====
  // starships: Tüm gemi verilerini tutan state
  // loading: Yükleme durumunu kontrol eden state
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);

  // ===== VERİ ÇEKME İŞLEMİ =====
  // Bileşen yüklendiğinde tüm gemileri çeker
  useEffect(() => {
    fetchAllStarships();
  }, []);

  // ===== TÜM GEMİLERİ ÇEKME FONKSİYONU =====
  // API'den tüm sayfalardaki gemileri çeker
  // Tekrar eden gemileri filtreler
  const fetchAllStarships = async () => { 
    setLoading(true); // Yükleme durumunu true yaparak loading göstergesini aktif eder
    try { // Hata yönetimi için try-catch bloğu başlangıcı
      let allStarships = []; // Tüm gemileri depolamak için boş array oluşturur
      let nextUrl = 'https://swapi.py4e.com/api/starships/'; // API'nin ilk sayfasının URL'ini tanımlar
      
      // Tüm sayfaları döngü ile gezer
      while (nextUrl) { // nextUrl değeri olduğu sürece döngü devam eder
        const response = await axios.get(nextUrl); // API'den veri çeker
        // response.data: API'den gelen tüm yanıt objesi
        // response.data.results: Mevcut sayfadaki gemi listesi array'i
        allStarships = [...allStarships, ...response.data.results]; // Yeni gelen gemileri mevcut listeye ekler
        // response.data.next: Bir sonraki sayfanın URL'i (eğer varsa)
        nextUrl = response.data.next; // Bir sonraki sayfanın URL'ini alır
      }
      
      // Tekrar eden gemileri filtrele
      const uniqueStarships = allStarships.filter((starship, index, self) =>
        index === self.findIndex((s) => s.name === starship.name)
      );
      
      setStarships(uniqueStarships); // Filtrelenmiş benzersiz gemi listesini state'e kaydeder
    } catch (error) { // Hata durumunda
      console.error('Error fetching starships:', error); // Hata mesajını konsola yazdırır
    }
    setLoading(false); // Yükleme durumunu false yaparak loading göstergesini kapatır
  };

  // ===== ARAMA FİLTRELEME =====
  // Gemi adı veya modeline göre filtreleme yapar
  const filteredStarships = starships.filter(starship => 
    // searchTerm: App.js'den gelen arama terimi
    // toLowerCase(): Büyük/küçük harf duyarlılığını kaldırmak için
    starship.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Gemi adında arama veya
    starship.model.toLowerCase().includes(searchTerm.toLowerCase()) // Gemi modelinde arama
  );

  // ===== ANA GÖRÜNÜM =====
  // Yükleme durumuna göre ya loading mesajı ya da gemi listesini gösterir
  return (
    <div className="starship-list"> {/* Ana container div */}
      {loading ? ( // Yükleme durumu kontrolü
        <div className="loading">Loading starships...</div> // Yükleme mesajı
      ) : (
        <div className="starships-grid"> {/* Gemi kartlarının grid container'ı */}
          {filteredStarships.map((starship, index) => ( // Filtrelenmiş gemi listesini döngü ile gezer, gemiler filtrelenerek gelir
            <StarshipCard 
              key={starship.name} // Her kart için benzersiz key
              starship={starship} // Gemi verilerini prop olarak geçer (filteredStarships'ten gelen veri)
              index={index} // Gemi sırasını prop olarak geçer (map fonksiyonundan gelen index)
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StarshipList; 