#!/usr/bin/env node
// Fetch all 14 portfolio sites SERIALY with a delay between requests to avoid 429s.

import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const PORTFOLIO_SITES = [
  { id: 1,  url: 'https://halcyonest.space-z.ai/',                image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790364859/portfolio_1000x750.png' },
  { id: 2,  url: 'https://crestwoodhayesest.space-z.ai/',          image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790365348/portfolio_1000x750_2_1.png' },
  { id: 3,  url: 'https://northbridgeadvisory.space-z.ai/',        image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790366265/portfolio_1000x750_3.png' },
  { id: 4,  url: 'https://embersandoakwoodfiredkitchen.space-z.ai/', image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790367245/portfolio_1000x750_1.png' },
  { id: 5,  url: 'https://northbeamconstructiongroup.space-z.ai/',  image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790363798/northbeam_portfolio_1000x750_1.png' },
  { id: 6,  url: 'https://emberoakwoodfired.space-z.ai/',           image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790346798/ChatGPT_Image_Sep_25_2026_03_29_49_PM.png' },
  { id: 7,  url: 'https://abidexest.space-z.ai/',                   image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790347479/ChatGPT_Image_Sep_25_2026_03_42_46_PM.png' },
  { id: 8,  url: 'https://havenmarkest.space-z.ai',                 image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790350766/ChatGPT_Image_Sep_25_2026_04_36_27_PM.png' },
  { id: 9,  url: 'https://forgebuilt.space-z.ai',                   image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790351358/ChatGPT_Image_Sep_25_2026_04_47_25_PM.png' },
  { id: 10, url: 'https://ironcrestconstruction.space-z.ai',        image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790352087/ChatGPT_Image_Sep_25_2026_04_59_00_PM.png' },
  { id: 11, url: 'https://crownbladebarbershop.space-z.ai',         image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790357966/ChatGPT_Image_Sep_25_2026_05_08_10_PM.png' },
  { id: 12, url: 'https://nestorarealty.space-z.ai',                image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790359923/ChatGPT_Image_Sep_25_2026_07_08_28_PM.png' },
  { id: 13, url: 'https://lumiraaesthetics.space-z.ai',             image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790361141/ChatGPT_Image_Sep_25_2026_07_28_32_PM.png' },
  { id: 14, url: 'https://maisonlumierehair.space-z.ai',            image: 'https://res.cloudinary.com/vrvebbss/image/upload/v1790362088/ChatGPT_Image_Sep_25_2026_07_42_34_PM.png' },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchOne(zai, site) {
  // Try up to 3 times with backoff
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const r = await zai.functions.invoke('page_reader', { url: site.url });
      const data = r.data || {};
      const text = (data.text || data.html || '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();
      return {
        id: site.id,
        url: site.url,
        image: site.image,
        title: (data.title || '').trim(),
        description: text.slice(0, 280),
      };
    } catch (e) {
      if (attempt < 3) {
        await sleep(8000 * attempt); // backoff
        continue;
      }
      return { id: site.id, url: site.url, image: site.image, title: '', description: '', error: String(e).slice(0, 200) };
    }
  }
}

async function main() {
  const zai = await ZAI.create();
  const results = [];
  for (const site of PORTFOLIO_SITES) {
    const r = await fetchOne(zai, site);
    results.push(r);
    console.log(`#${site.id} ${site.url}`);
    console.log(`  TITLE: ${r.title}`);
    console.log(`  DESC : ${(r.description || '').slice(0, 140)}`);
    if (r.error) console.log(`  ERROR: ${r.error}`);
    await sleep(2500); // throttle between requests
  }
  fs.writeFileSync(
    '/home/z/my-project/scripts/portfolio-content.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\nSaved to portfolio-content.json');
}

main().catch((e) => { console.error(e); process.exit(1); });
