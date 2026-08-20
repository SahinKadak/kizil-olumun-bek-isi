const chapters = [
  { n: 1, title: 'Uyanış', file: 'bolum-1.html' },
  { n: 2, title: 'Yol', file: 'bolum-2.html' },
  { n: 3, title: 'İlk Şehir', file: 'bolum-3.html' },
  { n: 4, title: 'Demirci', file: 'bolum-4.html' },
  { n: 5, title: 'İlk Gün', file: 'bolum-5.html' },
  { n: 6, title: 'Şehrin İçinde', file: 'bolum-6.html' },
  { n: 7, title: 'Yolun Ötesi', file: 'bolum-7.html' },
  { n: 8, title: 'İsimsiz', file: 'bolum-8.html' },
  { n: 9, title: 'İz', file: 'bolum-9.html' },
  { n: 10, title: 'Kırmızı Gölge', file: 'bolum-10.html' },
  { n: 11, title: 'Sessizlik', file: 'bolum-11.html' },
  { n: 12, title: 'Kuzey', file: 'bolum-12.html' },
  { n: 13, title: 'Dağ Yolu', file: 'bolum-13.html' },
  { n: 14, title: 'Karanlıkta', file: 'bolum-14.html' },
  { n: 15, title: 'Ses', file: 'bolum-15.html' },
  { n: 16, title: 'Bekleyiş', file: 'bolum-16.html' },
  { n: 17, title: 'Kırılma', file: 'bolum-17.html' },
  { n: 18, title: 'Rüya', file: 'bolum-18.html' },
  { n: 19, title: 'Kuzeye Doğru', file: 'bolum-19.html' },
  { n: 20, title: 'Kızıl Yansıma', file: 'bolum-20.html' },
  { n: 21, title: 'İlk Darbe', file: 'bolum-21.html' },
  { n: 22, title: 'İçimdeki Şey', file: 'bolum-22.html' },
  { n: 23, title: 'Yardım', file: 'bolum-23.html' },
  { n: 24, title: 'Üç Kişi', file: 'bolum-24.html' },
  { n: 25, title: 'Kılavuz', file: 'bolum-25.html' }
];

function renderChapterNavigation(currentNumber) {
  const nav = document.querySelector('[data-chapter-nav]');
  if (!nav) return;
  const current = chapters.find(c => c.n === currentNumber);
  if (!current) return;
  const previous = chapters.find(c => c.n === currentNumber - 1);
  const next = chapters.find(c => c.n === currentNumber + 1);
  nav.innerHTML = '';
  if (previous) nav.insertAdjacentHTML('beforeend', `<a class="prev" href="${previous.file}"><small>ÖNCEKİ BÖLÜM</small>Bölüm ${String(previous.n).padStart(2,'0')} — ${previous.title}</a>`);
  nav.insertAdjacentHTML('beforeend', `<a href="index.html#chapters"><small>BÖLÜM LİSTESİ</small>Bölümler</a>`);
  if (next) nav.insertAdjacentHTML('beforeend', `<a class="next" href="${next.file}"><small>SONRAKİ BÖLÜM</small>Bölüm ${String(next.n).padStart(2,'0')} — ${next.title}</a>`);
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.chapter;
  if (page) renderChapterNavigation(Number(page));
});
