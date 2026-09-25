#!/usr/bin/env bash
# Fetch all 14 portfolio sites via curl and extract <title> and <meta description>.

SITES=(
  "1|https://halcyonest.space-z.ai/"
  "2|https://crestwoodhayesest.space-z.ai/"
  "3|https://northbridgeadvisory.space-z.ai/"
  "4|https://embersandoakwoodfiredkitchen.space-z.ai/"
  "5|https://northbeamconstructiongroup.space-z.ai/"
  "6|https://emberoakwoodfired.space-z.ai/"
  "7|https://abidexest.space-z.ai/"
  "8|https://havenmarkest.space-z.ai"
  "9|https://forgebuilt.space-z.ai"
  "10|https://ironcrestconstruction.space-z.ai"
  "11|https://crownbladebarbershop.space-z.ai"
  "12|https://nestorarealty.space-z.ai"
  "13|https://lumiraaesthetics.space-z.ai"
  "14|https://maisonlumierehair.space-z.ai"
)

mkdir -p /tmp/portfolio-html
for entry in "${SITES[@]}"; do
  id="${entry%%|*}"
  url="${entry##*|}"
  curl -s -L --max-time 20 "$url" > /tmp/portfolio-html/$id.html &
done
wait
echo "--- All fetches done ---"
for entry in "${SITES[@]}"; do
  id="${entry%%|*}"
  url="${entry##*|}"
  title=$(grep -oP '<title[^>]*>\K[^<]+' /tmp/portfolio-html/$id.html | head -1)
  desc=$(grep -oP '<meta\s+name="description"\s+content="\K[^"]+' /tmp/portfolio-html/$id.html | head -1)
  echo ""
  echo "#$id $url"
  echo "  TITLE: $title"
  echo "  DESC : $desc"
done