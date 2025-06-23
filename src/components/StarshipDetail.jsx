import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// ===== GEMİ DETAY BİLEŞENİ =====
// Seçilen geminin detaylı bilgilerini gösteren bileşen
const StarshipDetail = () => {
  // ===== HOOK TANIMLAMALARI =====
  // useParams: urlden id parametresini almak için kullanılan hook
  // id: urldeki /starship/:id kısmından gelen gemi ID'si
  const { id } = useParams();
  
  // ===== STATE TANIMLAMALARI =====
  // starship: Gemi detay verilerini tutan state
  // loading: Yükleme durumunu kontrol eden state
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===== VERİ ÇEKME İŞLEMİ =====
  // useEffect: Bileşen yüklendiğinde ve id değiştiğinde çalışır
  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        // apiden gemi detaylarını çeker
        // id: urlden gelen gemi ID'si
        const response = await axios.get(`https://swapi.py4e.com/api/starships/${id}/`);
        // response.data, API'den gelen gemi detay verileri
        // setStarship, Gelen veriyi state'e kaydeder
        setStarship(response.data);
      } catch (error) {
        // Hata durumunda konsola hata mesajı yazdırır
        console.error('Error fetching starship details:', error);
      }
      // İşlem bittiğinde loading durumunu false yapar
      setLoading(false);
    };

    // fetchStarshipDetails fonksiyonunu çağırır
    fetchStarshipDetails();
  }, [id]); // id değiştiğinde useEffect tekrar çalışır

  // ===== YÜKLEME DURUMU KONTROLÜ =====
  // loading true ise yükleme mesajını gösterir
  if (loading) {
    return <div className="loading">Loading starship details...</div>;
  }

  // ===== GEMİ BULUNAMADI KONTROLÜ =====
  // starship null ise hata mesajını gösterir
  if (!starship) {
    return <div className="error">Starship not found</div>;
  }

  // ===== ANA GÖRÜNÜM =====
  // Gemi detaylarını gösteren ana container
  return (
    <div className="starship-detail">
      <div className="detail-card">
        {/* Gemi bilgileri containerıdır. "starship." ile api içerisindeki o api içerisinde hangi veriye ulaşmak istiyorsak onu yazarız */}
        <h2>{starship.name}</h2>
        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">Model</span>
            <span className="detail-value">{starship.model}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Manufacturer</span>
            <span className="detail-value">{starship.manufacturer}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Max Speed</span>
            <span className="detail-value">{starship.max_atmosphering_speed}</span>
            <div className="speed-container">
              <span className="material-icons">speed</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Crew</span>
            <span className="detail-value">{starship.crew}</span>
            <div className="crew-container">
              <span className="material-icons">group</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Passengers</span>
            <span className="detail-value">{starship.passengers}</span>
            <div className="passengers-container">
              <span className="material-icons">people</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Cargo Capacity</span>
            <span className="detail-value">{starship.cargo_capacity}</span>
            <div className="cargo-container">
              <span className="material-icons">inventory</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Hyperdrive Rating</span>
            <span className="detail-value">{starship.hyperdrive_rating}</span>
            <div className="hyperdrive-container">
              <span className="material-icons">rocket_launch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetail; 