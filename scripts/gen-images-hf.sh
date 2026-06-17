#!/usr/bin/env bash
# Image generation via Hugging Face FLUX.1-schnell (backup per gemini-image skill)
set -u
OUT="/workspace/Websites/buildingmaterialdealerinsurance.com/public/images"
mkdir -p "$OUT"
TOKEN="$HF_TOKEN"
MODEL="black-forest-labs/FLUX.1-schnell"

gen() {
  local name="$1"; local prompt="$2"; local idx="$3"
  echo "==> $name"
  # schnell needs num_inference_steps & guidance; retries on 503
  for attempt in 1 2 3 4 5; do
    curl -s "https://router.huggingface.co/hf-inference/models/${MODEL}" \
      -H "Authorization: Bearer $TOKEN" \
      -H "Content-Type: application/json" \
      -X POST \
      -d "{\"inputs\": \"$prompt\", \"parameters\": {\"num_inference_steps\": 4, \"guidance_scale\": 0.0}}" \
      -o "$OUT/$name"
    # Check it's a real image
    ftype=$(file -b --mime-type "$OUT/$name")
    if [[ "$ftype" == image/* ]]; then
      echo "  OK ($ftype) attempt $attempt"
      return 0
    fi
    echo "  attempt $attempt failed ($ftype): $(head -c 200 "$OUT/$name")"
    sleep $((attempt * 6))
  done
  echo "  FAILED $name after retries"
  return 1
}

gen "hero.jpg" "professional wide daytime photograph of a clean organized commercial lumber yard and building supply dealer, tall neat stacks of lumber on racks, forklift in background, delivery box truck at loading dock, warm professional corporate lighting, amber and emerald green color grade, bright airy high-end commercial photography, sharp focus" "1"
gen "og-image.jpg" "wide professional photograph representing a building material dealer and lumber yard, stacked lumber, pallets of building supplies, forklift, delivery truck, warm daylight, emerald green and amber corporate color grade, clean and bright, no text" "2"
gen "service-property-inventory.jpg" "photorealistic photograph of neatly stacked lumber bundles and pallets of building materials in a well lit warehouse yard, dramatic daylight, warm corporate tone with emerald and amber palette, clean organized inventory, no text" "3"
gen "service-general-liability.jpg" "photorealistic photograph of a busy building supply dealer loading dock with a contractor customer picking up materials, a forklift operator, loading ramp, bright daylight, professional commercial photography, warm corporate color grade with emerald accents, no text" "4"
gen "service-commercial-auto.jpg" "photorealistic photograph of a clean delivery box truck and flatbed truck loaded with lumber and building materials leaving a supply yard at sunrise, professional fleet, warm emerald and amber corporate color grade, no text" "5"
gen "service-inland-marine.jpg" "photorealistic photograph of building materials and lumber secured on a flatbed truck being transported on a highway, cargo in transit, bright daylight, professional corporate photography, warm tone with emerald accents, no text" "6"
gen "service-product-liability.jpg" "photorealistic close up of stacked building products on a dealer shelf, bags of material, drywall sheets, roofing bundles, hardware, representing a distributor product inventory, bright clean professional corporate photography, warm emerald tone, no readable labels, no text" "7"
gen "service-equipment-breakdown.jpg" "photorealistic photograph of industrial equipment in a building supply facility, large boiler, compressor, dust collection system, clean industrial setting, daylight, professional corporate photography, subtle emerald and amber tone, no text" "8"
gen "cta-dealer-counter.jpg" "photorealistic photograph of a friendly professional building supply dealer counter interior, clean modern showroom with lumber and material samples, a service counter, warm daylight through large windows, emerald and amber corporate palette, no readable text" "9"
gen "why-choose-warehouse.jpg" "photorealistic wide photograph looking down a clean aisle of tall warehouse storage racks filled with building materials and pallets, perspective lines leading inward, bright daylight, professional corporate photography, warm emerald and amber tone, no text" "10"
gen "service-workers-comp.jpg" "photorealistic photograph of a forklift operator in safety vest moving pallets of building materials in a supply yard, loading dock scene, bright daylight, professional corporate photography, warm emerald tone, safety theme, no text" "11"
gen "service-umbrella.jpg" "photorealistic wide aerial photograph of a large building material dealer facility with multiple warehouse buildings, lumber yard, delivery fleet, bright daylight, professional corporate photography, emerald and amber tone, no text" "12"

echo "=== DONE ==="
ls -la "$OUT"
