(async () => {
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const APP_ID = '936619743392459'; // Instagram Web App ID
  const csrfMatch = document.cookie.match(/csrftoken=([^;]+)/);
  const CSRF = csrfMatch ? csrfMatch[1] : '';

  let usernameFromPath = (location.pathname || '').split('/').filter(Boolean)[0];
  let username = usernameFromPath || prompt('Kullanıcı adınız (profilinizde değilseniz yazın):');
  if (!username) {
    console.error('Kullanıcı adı bulunamadı. Profil sayfanızda çalıştırın veya kullanıcı adı girin.');
    return;
  }

  const headers = {
    'X-IG-App-ID': APP_ID,
    'X-CSRFToken': CSRF,
    'Accept': '*/*'
  };

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
      if (json?.next_max_id) {
        max_id = json.next_max_id;
        await sleep(500); // nazik davran: istekler arasında bekle
      } else {
        break;
      }
    }
    return items;
  }

  try {
    console.log('Bilgiler toplanıyor...');
    const userId = await getUserId(username);

    const followers = await paginateList(
      `https://www.instagram.com/api/v1/friendships/${userId}/followers/?count=50&search_surface=follow_list_page`,
      'followers'
    );
    const following = await paginateList(
      `https://www.instagram.com/api/v1/friendships/${userId}/following/?count=50&search_surface=follow_list_page`,
      'following'
    );

    const followerSet = new Set(followers.map(u => u.username));
    const notFollowingBack = following.filter(u => !followerSet.has(u.username));

    console.log(`Toplam takip edilen: ${following.length}`);
    console.log(`Toplam takipçi: ${followers.length}`);
    console.log(`Seni takip etmeyenler: ${notFollowingBack.length}`);

    const resultTable = notFollowingBack.map(u => ({
      username: u.username,
      full_name: u.full_name,
      url: `https://www.instagram.com/${u.username}/`
    }));
    console.table(resultTable);

    const urls = resultTable.map(r => r.url).join('\n');
    try {
      await navigator.clipboard.writeText(urls);
      console.log('Seni takip etmeyenlerin profil linkleri panoya kopyalandı.');
    } catch {
      console.warn('Panoya kopyalama başarısız oldu; yukarıdaki tablodan linkleri alabilirsin.');
    }
  } catch (err) {
    console.error('Hata:', err?.message || err);
    console.info('Girişli olduğundan ve profil sayfanızda çalıştırdığınızdan emin olun.');
  }
})();