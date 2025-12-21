(async () => {
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const APP_ID = '936619743392459';
  const csrfMatch = document.cookie.match(/csrftoken=([^;]+)/);
  const CSRF = csrfMatch ? csrfMatch[1] : '';

  // Modern UI Overlay Olustur
  function createUI() {
    const overlay = document.createElement('div');
    overlay.id = 'ig-checker-overlay';
    overlay.innerHTML = `
      <style>
        #ig-checker-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          animation: fadeIn 0.3s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .ig-modal {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 24px;
          padding: 40px;
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s ease-out;
        }
        .ig-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .ig-logo {
          font-size: 48px;
          margin-bottom: 20px;
          animation: pulse 2s infinite;
          line-height: 1;
        }
        .ig-title {
          color: white;
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          line-height: 1.2;
        }
        .ig-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          margin-top: 5px;
        }
        .ig-progress-container {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
        }
        .ig-status {
          color: white;
          font-size: 16px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ig-spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .ig-progress-bar {
          background: rgba(255, 255, 255, 0.2);
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }
        .ig-progress-fill {
          background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
        }
        .ig-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin: 20px 0;
        }
        .ig-stat-card {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .ig-stat-icon {
          font-size: 32px;
          margin-bottom: 8px;
        }
        .ig-stat-value {
          color: white;
          font-size: 28px;
          font-weight: 700;
          margin: 5px 0;
        }
        .ig-stat-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 13px;
        }
        .ig-results {
          background: white;
          border-radius: 12px;
          padding: 20px;
          max-height: 400px;
          overflow-y: auto;
        }
        .ig-result-header {
          font-size: 18px;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ig-user-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          border-bottom: 1px solid #f0f0f0;
          transition: background 0.2s;
          gap: 12px;
        }
        .ig-user-card:hover {
          background: #f9f9f9;
        }
        .ig-user-checkbox {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: #667eea;
        }
        .ig-user-info {
          flex: 1;
        }
        .ig-username {
          font-weight: 600;
          color: #262626;
          font-size: 14px;
        }
        .ig-fullname {
          color: #8e8e8e;
          font-size: 12px;
        }
        .ig-user-link {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          transition: transform 0.2s;
        }
        .ig-user-link:hover {
          transform: scale(1.05);
        }
        .ig-buttons {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .ig-btn {
          flex: 1;
          padding: 14px 20px;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .ig-btn-primary {
          background: white;
          color: #667eea;
        }
        .ig-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .ig-btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        .ig-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .ig-btn-danger {
          background: rgba(239, 68, 68, 0.9);
          color: white;
        }
        .ig-btn-danger:hover {
          background: rgba(220, 38, 38, 1);
        }
        .ig-btn-danger:disabled {
          background: rgba(156, 163, 175, 0.5);
          cursor: not-allowed;
          transform: none;
        }
        .ig-select-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        .ig-select-btn {
          background: none;
          border: none;
          color: #667eea;
          font-weight: 600;
          cursor: pointer;
          font-size: 13px;
        }
        .ig-select-btn:hover {
          text-decoration: underline;
        }
        .ig-selected-count {
          color: #666;
          font-size: 13px;
          font-weight: 600;
        }
        .ig-unfollow-progress {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 20px;
          margin-top: 15px;
        }
        .ig-unfollow-status {
          color: white;
          font-size: 14px;
          margin-bottom: 10px;
        }
        .ig-success-message {
          background: rgba(74, 222, 128, 0.2);
          color: white;
          padding: 12px;
          border-radius: 8px;
          margin-top: 15px;
          text-align: center;
          border: 1px solid rgba(74, 222, 128, 0.4);
        }
        .ig-error {
          background: rgba(239, 68, 68, 0.2);
          color: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }
      </style>
      <div class="ig-modal">
        <div class="ig-header">
          <div class="ig-logo">📊</div>
          <div class="ig-title">Instagram Takip Analizi</div>
          <div class="ig-subtitle">Seni takip etmeyenleri bul</div>
        </div>
        <div id="ig-content"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  }

  function updateUI(content) {
    const contentDiv = document.getElementById('ig-content');
    if (contentDiv) contentDiv.innerHTML = content;
  }

  function showProgress(message, progress = 0) {
    updateUI(`
      <div class="ig-progress-container">
        <div class="ig-status">
          <div class="ig-spinner"></div>
          <span>${message}</span>
        </div>
        <div class="ig-progress-bar">
          <div class="ig-progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
    `);
  }

  function showResults(stats, notFollowingBack) {
    const resultsHTML = notFollowingBack.length > 0 ? `
      <div class="ig-results">
        <div class="ig-result-header">
          ⚠️ Seni Takip Etmeyenler (${notFollowingBack.length})
        </div>
        <div class="ig-select-controls">
          <button class="ig-select-btn" id="ig-select-all-btn">Tümünü Seç</button>
          <span class="ig-selected-count" id="ig-selected-count">0 kişi seçildi</span>
          <button class="ig-select-btn" id="ig-deselect-all-btn">Seçimi Temizle</button>
        </div>
        ${notFollowingBack.map(u => `
          <div class="ig-user-card">
            <input type="checkbox" class="ig-user-checkbox" data-user-id="${u.id}" data-username="${u.username}">
            <div class="ig-user-info">
              <div class="ig-username">@${u.username}</div>
              <div class="ig-fullname">${u.full_name || '-'}</div>
            </div>
            <a href="https://www.instagram.com/${u.username}/" target="_blank" class="ig-user-link">
              Profili Gör
            </a>
          </div>
        `).join('')}
      </div>
    ` : `
      <div class="ig-success-message">
        ✅ Harika! Takip ettiğin herkes seni takip ediyor! 🎉
      </div>
    `;

    updateUI(`
      <div class="ig-stats">
        <div class="ig-stat-card">
          <div class="ig-stat-icon">👥</div>
          <div class="ig-stat-value">${stats.following}</div>
          <div class="ig-stat-label">Takip Edilen</div>
        </div>
        <div class="ig-stat-card">
          <div class="ig-stat-icon">❤️</div>
          <div class="ig-stat-value">${stats.followers}</div>
          <div class="ig-stat-label">Takipçi</div>
        </div>
        <div class="ig-stat-card">
          <div class="ig-stat-icon">⚠️</div>
          <div class="ig-stat-value">${stats.notFollowingBack}</div>
          <div class="ig-stat-label">Takip Etmiyor</div>
        </div>
      </div>
      ${resultsHTML}
      <div class="ig-buttons">
        ${notFollowingBack.length > 0 ? `
          <button class="ig-btn ig-btn-danger" id="ig-unfollow-selected-btn" disabled>
            🚫 Seçilenleri Takipten Çık
          </button>
          <button class="ig-btn ig-btn-danger" id="ig-unfollow-all-btn">
            ⚠️ Tümünü Takipten Çık
          </button>
        ` : ''}
      </div>
      <div class="ig-buttons">
        <button class="ig-btn ig-btn-primary" onclick="document.getElementById('ig-checker-overlay').remove()">
          ✅ Kapat
        </button>
        ${notFollowingBack.length > 0 ? `
          <button class="ig-btn ig-btn-secondary" id="ig-copy-btn">
            📋 Linkleri Kopyala
          </button>
        ` : ''}
      </div>
      <div id="ig-copy-message"></div>
      <div id="ig-unfollow-message"></div>
    `);

    if (notFollowingBack.length > 0) {
      // Checkbox seçim sayacı
      const updateSelectedCount = () => {
        const checkboxes = document.querySelectorAll('.ig-user-checkbox:checked');
        const count = checkboxes.length;
        document.getElementById('ig-selected-count').textContent = `${count} kişi seçildi`;
        const unfollowBtn = document.getElementById('ig-unfollow-selected-btn');
        if (unfollowBtn) {
          unfollowBtn.disabled = count === 0;
        }
      };

      // Checkbox değişikliklerini dinle
      document.querySelectorAll('.ig-user-checkbox').forEach(cb => {
        cb.addEventListener('change', updateSelectedCount);
      });

      // Tümünü seç
      document.getElementById('ig-select-all-btn')?.addEventListener('click', () => {
        document.querySelectorAll('.ig-user-checkbox').forEach(cb => cb.checked = true);
        updateSelectedCount();
      });

      // Seçimi temizle
      document.getElementById('ig-deselect-all-btn')?.addEventListener('click', () => {
        document.querySelectorAll('.ig-user-checkbox').forEach(cb => cb.checked = false);
        updateSelectedCount();
      });

      // Linkleri kopyala
      document.getElementById('ig-copy-btn')?.addEventListener('click', async () => {
        const urls = notFollowingBack.map(u => `https://www.instagram.com/${u.username}/`).join('\n');
        try {
          await navigator.clipboard.writeText(urls);
          document.getElementById('ig-copy-message').innerHTML = `
            <div class="ig-success-message">
              ✅ ${notFollowingBack.length} profil linki panoya kopyalandı!
            </div>
          `;
        } catch {
          document.getElementById('ig-copy-message').innerHTML = `
            <div class="ig-error">
              ❌ Kopyalama başarısız. Lütfen manuel olarak kopyalayın.
            </div>
          `;
        }
      });

      // Seçilenleri takipten çık
      document.getElementById('ig-unfollow-selected-btn')?.addEventListener('click', async () => {
        const checkboxes = document.querySelectorAll('.ig-user-checkbox:checked');
        if (checkboxes.length === 0) return;
        
        const confirmMsg = `${checkboxes.length} kişiyi takipten çıkarmak istediğinize emin misiniz?`;
        if (!confirm(confirmMsg)) return;

        const users = Array.from(checkboxes).map(cb => ({
          id: cb.dataset.userId,
          username: cb.dataset.username
        }));
        
        await unfollowUsers(users);
      });

      // Tümünü takipten çık
      document.getElementById('ig-unfollow-all-btn')?.addEventListener('click', async () => {
        const confirmMsg = `TÜM ${notFollowingBack.length} kişiyi takipten çıkarmak istediğinize EMİN MİSİNİZ?\n\nBu işlem geri alınamaz!`;
        if (!confirm(confirmMsg)) return;
        
        const doubleCheck = prompt(`Onaylamak için "EVET" yazın:`);
        if (doubleCheck !== 'EVET') {
          alert('İşlem iptal edildi.');
          return;
        }

        await unfollowUsers(notFollowingBack);
      });
    }
  }

  function showError(message) {
    updateUI(`
      <div class="ig-error">
        <div style="font-size: 48px; margin-bottom: 15px;">❌</div>
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 10px;">Bir Hata Oluştu</div>
        <div>${message}</div>
        <div style="margin-top: 20px; font-size: 14px; opacity: 0.8;">
          💡 Instagram'a giriş yaptığınızdan ve profil sayfanızda olduğunuzdan emin olun.
        </div>
      </div>
      <div class="ig-buttons">
        <button class="ig-btn ig-btn-primary" onclick="document.getElementById('ig-checker-overlay').remove()">
          Kapat
        </button>
      </div>
    `);
  }

  // Ana program baslangici
  const ui = createUI();

  let usernameFromPath = (location.pathname || '').split('/').filter(Boolean)[0];
  let username = usernameFromPath || prompt('📱 Instagram kullanıcı adınızı girin:');
  
  if (!username) {
    showError('Kullanıcı adı bulunamadı. Lütfen Instagram profil sayfanızda bu scripti çalıştırın veya kullanıcı adınızı girin.');
    return;
  }

  const headers = {
    'X-IG-App-ID': APP_ID,
    'X-CSRFToken': CSRF,
    'Accept': '*/*'
  };

  async function unfollowUser(userId) {
    const url = `https://www.instagram.com/api/v1/friendships/destroy/${userId}/`;
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      credentials: 'same-origin'
    });
    if (!res.ok) throw new Error(`Takipten çıkma başarısız (${res.status})`);
    return await res.json();
  }

  async function unfollowUsers(users) {
    const messageDiv = document.getElementById('ig-unfollow-message');
    let successCount = 0;
    let failCount = 0;
    
    // Butonları devre dışı bırak
    document.querySelectorAll('.ig-btn-danger').forEach(btn => btn.disabled = true);
    
    messageDiv.innerHTML = `
      <div class="ig-unfollow-progress">
        <div class="ig-unfollow-status">⏳ Takipten çıkılıyor: 0 / ${users.length}</div>
        <div class="ig-progress-bar">
          <div class="ig-progress-fill" style="width: 0%"></div>
        </div>
      </div>
    `;

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      try {
        await unfollowUser(user.id);
        successCount++;
        
        // İlgili checkbox'ı işaretle ve kartı gri yap
        const checkbox = document.querySelector(`[data-user-id="${user.id}"]`);
        if (checkbox) {
          const card = checkbox.closest('.ig-user-card');
          if (card) {
            card.style.opacity = '0.5';
            card.style.backgroundColor = '#e8f5e9';
          }
          checkbox.checked = false;
          checkbox.disabled = true;
        }
      } catch (err) {
        failCount++;
        console.error(`@${user.username} takipten çıkılamadı:`, err);
      }

      // İlerlemeyi güncelle
      const progress = ((i + 1) / users.length) * 100;
      messageDiv.querySelector('.ig-unfollow-status').textContent = 
        `⏳ Takipten çıkılıyor: ${i + 1} / ${users.length} (Başarılı: ${successCount}, Başarısız: ${failCount})`;
      messageDiv.querySelector('.ig-progress-fill').style.width = `${progress}%`;

      // Instagram rate limiting için bekleme
      if (i < users.length - 1) {
        await sleep(Math.random() * 1000 + 1500); // 1.5-2.5 saniye arası rastgele bekleme
      }
    }

    // Sonuç mesajı
    messageDiv.innerHTML = `
      <div class="ig-success-message">
        ✅ İşlem tamamlandı!<br>
        Başarılı: ${successCount} | Başarısız: ${failCount}
      </div>
    `;

    // Seçimi temizle ve butonları güncelle
    document.querySelectorAll('.ig-user-checkbox:not(:disabled)').forEach(cb => cb.checked = false);
    document.getElementById('ig-selected-count').textContent = '0 kişi seçildi';
    document.getElementById('ig-unfollow-selected-btn').disabled = true;
    
    // Eğer tümü başarılıysa, "Tümünü Takipten Çık" butonunu da devre dışı bırak
    if (successCount === users.length) {
      const unfollowAllBtn = document.getElementById('ig-unfollow-all-btn');
      if (unfollowAllBtn) {
        unfollowAllBtn.disabled = true;
        unfollowAllBtn.textContent = '✅ Tümü Takipten Çıkarıldı';
      }
    }
  }

  async function getUserId(uname) {
    const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(uname)}`;
    const res = await fetch(url, { headers, credentials: 'same-origin' });
    if (!res.ok) throw new Error(`Profil bilgisi alınamadı (${res.status})`);
    const data = await res.json();
    const id = data?.data?.user?.id || data?.data?.user?.pk || data?.user?.id || data?.user?.pk;
    if (!id) throw new Error('Kullanıcı ID bulunamadı');
    return id;
  }

  async function paginateList(urlBase, label = 'list') {
    let max_id = '';
    const items = [];
    let pageCount = 0;
    while (true) {
      const url = `${urlBase}${max_id ? `&max_id=${encodeURIComponent(max_id)}` : ''}`;
      const res = await fetch(url, { headers, credentials: 'same-origin' });
      if (!res.ok) throw new Error(`${label} isteği başarısız: ${res.status}`);
      const json = await res.json();
      const users = json?.users || [];
      for (const u of users) {
        items.push({
          username: u.username,
          full_name: u.full_name,
          id: u.pk || u.id
        });
      }
      pageCount++;
      const labelTr = label === 'followers' ? 'takipçiler' : 'takip edilenler';
      showProgress(
        `${labelTr} yükleniyor... (${items.length} kullanıcı bulundu)`,
        label === 'followers' ? 33 : 66
      );
      
      if (json?.next_max_id) {
        max_id = json.next_max_id;
        await sleep(500);
      } else {
        break;
      }
    }
    return items;
  }

  try {
    showProgress('🔍 Profil bilgileri alınıyor...', 10);
    const userId = await getUserId(username);

    showProgress('👥 Takipçiler yükleniyor...', 20);
    const followers = await paginateList(
      `https://www.instagram.com/api/v1/friendships/${userId}/followers/?count=50&search_surface=follow_list_page`,
      'followers'
    );

    showProgress('📋 Takip edilenler yükleniyor...', 50);
    const following = await paginateList(
      `https://www.instagram.com/api/v1/friendships/${userId}/following/?count=50&search_surface=follow_list_page`,
      'following'
    );

    showProgress('⚡ Sonuçlar hesaplanıyor...', 90);
    await sleep(500);

    const followerSet = new Set(followers.map(u => u.id));
    const notFollowingBack = following.filter(u => !followerSet.has(u.id));

    const stats = {
      following: following.length,
      followers: followers.length,
      notFollowingBack: notFollowingBack.length
    };

    showProgress('✅ Tamamlandı!', 100);
    await sleep(300);

    showResults(stats, notFollowingBack);

  } catch (err) {
    showError(err?.message || 'Bilinmeyen bir hata oluştu');
    console.error('Hata:', err);
  }
})();

