#!/usr/bin/env bash
# Image generation for buildingmaterialdealerinsurance.com via Gemini
set -u
OUT="/workspace/Websites/buildingmaterialdealerinsurance.com/public/images"
mkdir -p "$OUT"
MODEL="${GEMINI_MODEL:-gemini-2.5-flash-image}"
KEY="$GEMINI_API_KEY"

gen() {
  local name="$1"; local prompt="$2"
  echo "==> $name ($MODEL)"
  curl -s "https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=$KEY" \
    -H "Content-Type: application/json" \
    -d "{\"contents\":[{\"parts\":[{\"text\": \"$prompt\"}]}],\"generationConfig\":{\"responseModalities\":[\"TEXT\",\"IMAGE\"]}}" \
    | python3 -c "
import sys, json, base64
try:
    d=json.load(sys.stdin)
except Exception as e:
    print('  parse error', e); sys.exit(1)
parts = d.get('candidates',[{}])[0].get('content',{}).get('parts',[])
saved=False
for p in parts:
    if 'inlineData' in p:
        open('$OUT/$name','wb').write(base64.b64decode(p['inlineData']['data']))
        saved=True
    elif 'text' in p:
        print('  text:', p['text'][:120])
if saved:
    print('  OK saved $name')
else:
    print('  NO IMAGE. full:', json.dumps(d)[:400])
"
}

gen "hero.jpg" "Photorealistic wide daytime photograph of a clean, well-organized commercial lumber yard and building supply dealer yard. Tall neat stacks of lumber and building materials on racks, a forklift in the background, a delivery box truck at a loading dock. Warm professional corporate lighting, slight warm amber and emerald green color grade. Bright, airy, high-end commercial photography, sharp focus, no people in foreground, no text, no logos."
gen "og-image.jpg" "Photorealistic professional wide image representing a building material dealer and lumber yard operation: stacked lumber, pallets of building supplies, a forklift, and a delivery truck. Warm daylight, emerald green and amber corporate color grade, clean and bright. No text, no watermark. Composition leaves clean space for an overlay."
gen "service-property-inventory.jpg" "Photorealistic close photograph of neatly stacked lumber bundles and pallets of building materials in a well-lit warehouse yard, dramatic daylight, warm corporate tone with subtle emerald and amber palette. Clean, organized inventory. No text."
gen "service-general-liability.jpg" "Photorealistic photograph of a busy building supply dealer loading dock with a contractor customer picking up materials, a forklift operator, loading ramp. Bright daylight, professional commercial photography, warm corporate color grade with emerald accents. No text."
gen "service-commercial-auto.jpg" "Photorealistic photograph of a clean delivery box truck and flatbed truck loaded with lumber and building materials leaving a supply yard at sunrise. Professional fleet, warm emerald and amber corporate color grade. No text, no readable license plates."
gen "service-inland-marine.jpg" "Photorealistic photograph of building materials and lumber secured on a flatbed truck being transported on a highway, cargo in transit, bright daylight, professional corporate photography, warm tone with emerald accents. No text."
gen "service-product-liability.jpg" "Photorealistic close-up of stacked building products on a dealer shelf: bags of concrete, drywall sheets, roofing bundles, hardware, representing a distributor's product inventory. Bright, clean, professional corporate photography, warm emerald tone. No readable labels, no text."
gen "service-equipment-breakdown.jpg" "Photorealistic photograph of industrial equipment in a building supply facility: a large boiler, compressor, dust collection system, kiln. Clean industrial setting, daylight, professional corporate photography, subtle emerald and amber tone. No text."
gen "cta-dealer-counter.jpg" "Photorealistic photograph of a friendly professional building supply dealer counter interior, clean modern showroom with lumber and material samples, a service counter, warm daylight through large windows, emerald and amber corporate palette, no readable text, no people faces visible."
gen "why-choose-warehouse.jpg" "Photorealistic wide photograph looking down a clean aisle of tall warehouse storage racks filled with building materials and pallets, perspective lines leading inward, bright daylight, professional corporate photography, warm emerald and amber tone. No text."

echo "=== ALL DONE ==="
ls -la "$OUT"
