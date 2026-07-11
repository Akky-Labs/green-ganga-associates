"use client";

import React, { useState, useEffect } from "react";
import { Calculator, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicePrices: Record<string, { name: string; rate: number; unit: string }> = {
  "landscaping": { name: "Landscaping & Lawn Design", rate: 65, unit: "sq. ft." },
  "garden-design": { name: "Garden Design & Development", rate: 80, unit: "sq. ft." },
  "garden-maintenance": { name: "Premium Garden Maintenance", rate: 5, unit: "sq. ft. / month" },
  "lawn-maintenance": { name: "Lawn Installation & Turf Care", rate: 45, unit: "sq. ft." },
  "terrace-garden": { name: "Terrace Garden Setup", rate: 130, unit: "sq. ft." },
  "vertical-garden": { name: "Vertical Garden Installation", rate: 245, unit: "sq. ft." },
  "artificial-grass": { name: "Premium Artificial Grass Setup", rate: 60, unit: "sq. ft." },
};

const addOnsList = [
  { id: "drip-irrigation", name: "Smart Drip Irrigation System", rate: 18, type: "per-sqft" },
  { id: "garden-lighting", name: "Decorative Garden Lighting Setup", rate: 12, type: "per-sqft" },
  { id: "soil-enrichment", name: "Premium Organic Composting & Soil Bedding", rate: 6, type: "per-sqft" },
  { id: "vastu-consultation", name: "Vastu Shastra Plantation Consulting", rate: 5000, type: "flat" },
];

interface CostEstimatorProps {
  defaultService?: string;
  className?: string;
}

export default function CostEstimator({ defaultService = "landscaping", className = "" }: CostEstimatorProps) {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [areaSize, setAreaSize] = useState(500);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // Recalculate cost
    const serviceDetails = servicePrices[selectedService] || servicePrices["landscaping"];
    let baseCost = serviceDetails.rate * areaSize;

    let addonsCost = 0;
    selectedAddons.forEach((addonId) => {
      const addon = addOnsList.find((a) => a.id === addonId);
      if (addon) {
        if (addon.type === "per-sqft") {
          addonsCost += addon.rate * areaSize;
        } else {
          addonsCost += addon.rate;
        }
      }
    });

    setTotalCost(baseCost + addonsCost);
  }, [selectedService, areaSize, selectedAddons]);

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleWhatsAppShare = () => {
    const serviceName = servicePrices[selectedService]?.name || selectedService;
    const formattedPrice = totalCost.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
    
    const addonsNames = selectedAddons
      .map((id) => addOnsList.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `*Green Ganga Cost Estimate Request*%0A%0A` +
      `*Service:* ${serviceName}%0A` +
      `*Covered Area:* ${areaSize} sq. ft.%0A` +
      `*Add-ons Selected:* ${addonsNames || "None"}%0A` +
      `*Estimated Cost:* ${formattedPrice}%0A%0A` +
      `Please contact me to arrange a site visit and formal quote.`;

    const whatsappUrl = `https://wa.me/919999177119?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className={`py-20 lg:py-24 bg-white dark:bg-background relative overflow-hidden transition-colors duration-300 ${className}`}>
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-deep-green/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl -translate-y-1/2" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-deep-green/5 dark:bg-white/10 px-4 py-1.5 mb-4 border border-deep-green/10 dark:border-white/10">
            <Calculator className="w-4 h-4 text-fresh-green animate-pulse" />
            <span className="text-deep-green dark:text-accent-gold text-xs font-semibold uppercase tracking-widest">Instant Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-green dark:text-white mt-2 mb-4 leading-tight">
            Estimate Your Landscaping Cost
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 text-sm lg:text-base max-w-2xl mx-auto">
            Select your preferred service type, adjust the slider to match your garden space area size, and calculate an instant rough budget estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Panel (7 cols) */}
          <div className="lg:col-span-7 bg-soft-beige/50 dark:bg-card p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl shadow-deep-green/5 space-y-8">
            {/* Service Select */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-deep-green dark:text-white uppercase tracking-wider">
                1. Select Garden Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(servicePrices).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedService(key)}
                    className={`flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-300 ${
                      selectedService === key
                        ? "border-deep-green dark:border-fresh-green bg-deep-green dark:bg-fresh-green text-white shadow-lg"
                        : "border-gray-200 dark:border-white/10 bg-white dark:bg-background text-foreground dark:text-white hover:border-deep-green/30 dark:hover:border-fresh-green/30"
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold leading-tight">{value.name}</div>
                      <div className={`text-[11px] mt-1 ${selectedService === key ? "text-white/80" : "text-muted-foreground dark:text-gray-400"}`}>
                        ₹{value.rate}/{value.unit}
                      </div>
                    </div>
                    {selectedService === key && <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-deep-green dark:text-white uppercase tracking-wider">
                  2. Area Size (sq. ft.)
                </label>
                <span className="bg-deep-green/10 dark:bg-white/10 text-deep-green dark:text-accent-gold font-extrabold px-3 py-1 rounded-lg text-sm">
                  {areaSize} sq. ft.
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-deep-green dark:accent-fresh-green"
              />
              <div className="flex justify-between text-xs text-muted-foreground dark:text-gray-400 font-medium">
                <span>100 sq. ft.</span>
                <span>2,500 sq. ft.</span>
                <span>5,000 sq. ft.</span>
              </div>
            </div>

            {/* Add-ons Checklist */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-deep-green dark:text-white uppercase tracking-wider">
                3. Premium Optional Add-ons
              </label>
              <div className="space-y-2">
                {addOnsList.map((addon) => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 ${
                      selectedAddons.includes(addon.id)
                        ? "border-fresh-green bg-fresh-green/5 dark:bg-fresh-green/10 text-deep-green dark:text-white"
                        : "border-gray-200 dark:border-white/10 bg-white dark:bg-background text-muted-foreground dark:text-gray-300 hover:border-deep-green/20 dark:hover:border-fresh-green/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        selectedAddons.includes(addon.id)
                          ? "bg-deep-green dark:bg-fresh-green border-deep-green dark:border-fresh-green text-white"
                          : "border-gray-300 dark:border-white/20"
                      }`}>
                        {selectedAddons.includes(addon.id) && <span className="text-[10px]">✓</span>}
                      </div>
                      <span className="text-sm font-bold text-gray-800 dark:text-white/90">{addon.name}</span>
                    </div>
                    <span className="text-xs font-extrabold text-deep-green dark:text-accent-gold shrink-0">
                      +{addon.type === "per-sqft" ? `₹${addon.rate}/sq. ft.` : `₹${addon.rate.toLocaleString("en-IN")}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Card (5 cols) */}
          <div className="lg:col-span-5 bg-linear-to-br from-deep-green to-dark-green text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-between h-full sticky top-28 border border-deep-green/20 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 mb-6 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                <span className="text-white text-xs font-semibold uppercase tracking-wider">Estimated Budget</span>
              </div>

              <h3 className="text-xl font-bold mb-2">Estimation Summary</h3>
              <p className="text-white/60 text-xs mb-6">
                Calculated according to standard labor & material charges in Lucknow/UP.
              </p>

              <div className="space-y-4 border-t border-b border-white/10 py-6 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/70">Selected Base Service</span>
                  <span className="font-bold">
                    ₹{(servicePrices[selectedService]?.rate || 65) * areaSize}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/70">Total Covered Area</span>
                  <span className="font-bold">{areaSize} sq. ft.</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/70">Premium Add-ons Total</span>
                  <span className="font-bold">
                    ₹{totalCost - (servicePrices[selectedService]?.rate || 65) * areaSize}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-white/70 text-xs uppercase font-bold tracking-wider">Estimated Total</span>
                <span className="text-3xl sm:text-4xl font-black text-accent-gold">
                  {totalCost.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}
                </span>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppShare}
                  className="w-full rounded-2xl bg-accent-gold hover:bg-accent-gold/90 text-deep-green font-extrabold h-14 text-base shadow-xl shadow-accent-gold/10 hover:scale-[1.03] transition-all"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Share Quote on WhatsApp
                </Button>
                <p className="text-[10px] text-center text-white/40">
                  *Note: Final pricing will depend upon actual ground layout assessments, soil condition, and species selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
