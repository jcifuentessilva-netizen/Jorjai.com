"use client";
import { useState } from "react";
import { SERVICES_DATA, TOOLS_COST, formatCurrency } from "@/data/services";

interface CartItem {
  categoryId: string;
  categoryTitle: string;
  levelName: string;
  levelIndex: number;
  paymentType: "unique" | "monthly" | "annual";
  price: number;
}

export default function ServiciosPage() {
  const [activeCategory, setActiveCategory] = useState("landing");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showTools, setShowTools] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const activeData = SERVICES_DATA.find((c) => c.id === activeCategory)!;

  const selectService = (categoryId: string, levelIndex: number, paymentType: "unique" | "monthly" | "annual") => {
    const cat = SERVICES_DATA.find((c) => c.id === categoryId)!;
    const level = cat.levels[levelIndex];
    const price = level.prices[paymentType];
    if (price === 0) return;
    setCart((prev) => {
      const filtered = prev.filter((item) => item.categoryId !== categoryId);
      return [...filtered, { categoryId, categoryTitle: cat.title, levelName: level.name, levelIndex, paymentType, price }];
    });
  };

  const removeService = (categoryId: string) => {
    setCart((prev) => prev.filter((item) => item.categoryId !== categoryId));
  };

  const getPaymentLabel = (type: string) => {
    switch (type) {
      case "unique": return "Pago Único";
      case "monthly": return "Suscripción Mensual";
      case "annual": return "Suscripción Anual";
      default: return type;
    }
  };

  const totalUnique = cart.filter((i) => i.paymentType === "unique").reduce((s, i) => s + i.price, 0);
  const totalMonthly = cart.filter((i) => i.paymentType === "monthly").reduce((s, i) => s + i.price, 0);
  const totalAnnual = cart.filter((i) => i.paymentType === "annual").reduce((s, i) => s + i.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let summary = "";
    if (cart.length > 0) {
      summary = "\n\nServicios Cotizados:\n" + cart.map((i) => `- ${i.categoryTitle} (${i.levelName}): ${getPaymentLabel(i.paymentType)} - ${formatCurrency(i.price)}`).join("\n");
    }
    const body = encodeURIComponent(`Hola Jorjai Digitalizaciones,\n\nMi nombre es ${formName}.\n\n${formMessage}${summary}\n\nMi correo de contacto: ${formEmail}`);
    window.location.href = `mailto:jorjai.digitalizaciones@gmail.com?subject=Cotización de Servicios - ${formName}&body=${body}`;
  };

  const whatsappMsg = encodeURIComponent(
    `Hola Jorjai Digitalizaciones, vi sus servicios y me gustaría más información.${
      cart.length > 0
        ? "\n\nMi cotización actual:\n" +
          cart.map((i) => `- ${i.categoryTitle} (${i.levelName}): ${getPaymentLabel(i.paymentType)} - ${formatCurrency(i.price)}`).join("\n")
        : ""
    }`
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-2">Catálogo de Servicios</h1>
        <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto">
          Explora todas nuestras soluciones digitales. Selecciona los módulos que tu negocio necesita y arma tu presupuesto en tiempo real.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SERVICES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.id ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {activeData.levels.map((level, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 flex flex-col border border-gray-700 animate-slideUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{level.name}</h3>
              <ul className="flex-grow space-y-2 mb-6">
                {level.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="space-y-2 mt-auto">
                {(["unique", "monthly", "annual"] as const).map((pt) => {
                  if (level.prices[pt] === 0) return null;
                  const isSelected = cart.some((i) => i.categoryId === activeCategory && i.levelIndex === idx && i.paymentType === pt);
                  const label = pt === "unique" ? "Pago Único" : pt === "monthly" ? "Susc. Mensual" : "Susc. Anual";
                  return (
                    <button
                      key={pt}
                      onClick={() => selectService(activeCategory, idx, pt)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isSelected ? "bg-green-600 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="font-bold">{formatCurrency(level.prices[pt])}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <section className="mb-12 bg-gray-800 rounded-xl p-6 border border-gray-700 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Tu Cotización</h2>
            <div className="space-y-3 mb-4">
              {cart.map((item) => (
                <div key={item.categoryId} className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-3">
                  <div>
                    <p className="font-semibold">{item.categoryTitle}</p>
                    <p className="text-sm text-gray-400">{item.levelName} &middot; {getPaymentLabel(item.paymentType)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-blue-400">{formatCurrency(item.price)}</span>
                    <button onClick={() => removeService(item.categoryId)} className="text-red-400 hover:text-red-300">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-600 pt-4">
              <div>
                <p className="text-sm text-gray-400">Pago Único</p>
                <p className="text-xl font-bold">{formatCurrency(totalUnique)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Susc. Mensual</p>
                <p className="text-xl font-bold text-blue-400">{totalMonthly > 0 ? `${formatCurrency(totalMonthly)}/mes` : "$0"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Susc. Anual</p>
                <p className="text-xl font-bold text-green-400">{totalAnnual > 0 ? `${formatCurrency(totalAnnual)}/año` : "$0"}</p>
              </div>
            </div>
          </section>
        )}

        <section className="mb-12 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Solicitar Cotización</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Nombre o Empresa</label>
              <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500" placeholder="Ej. Juan Pérez / PYME Digital" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Correo Electrónico</label>
              <input type="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500" placeholder="juan@empresa.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Detalles del Proyecto</label>
              <textarea value={formMessage} onChange={(e) => setFormMessage(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 h-24" placeholder="Cuéntanos más sobre lo que buscas..." />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all">Enviar por Correo</button>
              <a href={`https://wa.me/56930973700?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all text-center">Consultar por WhatsApp</a>
            </div>
          </form>
        </section>

        <section className="mb-12">
          <button onClick={() => setShowTools(!showTools)} className="text-2xl font-bold mb-4 text-blue-400 hover:text-blue-300 transition-all flex items-center gap-2">
            {showTools ? "▼" : "▶"} Transparencia de Costos de Herramientas
          </button>
          {showTools && (
            <div className="overflow-hidden">
              <p className="text-gray-300 mb-4">¿Cuánto cuesta levantar y mantener esta infraestructura por tu cuenta en la nube?</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-700 text-left">
                      <th className="px-4 py-3 rounded-tl">Herramienta / Recurso</th>
                      <th className="px-4 py-3">Propósito</th>
                      <th className="px-4 py-3 rounded-tr">Costo Mensual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOOLS_COST.map((tool, i) => (
                      <tr key={i} className="border-b border-gray-700 hover:bg-gray-750">
                        <td className="px-4 py-3 font-semibold">{tool.name}</td>
                        <td className="px-4 py-3 text-gray-300">{tool.purpose}</td>
                        <td className="px-4 py-3 font-mono">{tool.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-700 rounded-lg p-4 border border-red-500/30">
                  <h4 className="font-bold text-red-400 mb-2">Levantarlo tú mismo (Licencias Cloud)</h4>
                  <p className="text-2xl font-bold">$330 - $370 USD<span className="text-sm font-normal">/mes</span></p>
                  <p className="text-sm text-gray-400 mt-2">Pagas licencias comerciales a cada proveedor SaaS, sin contar mano de obra ni mantenimiento.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 border border-green-500/30">
                  <h4 className="font-bold text-green-400 mb-2">Con Jorjai Digitalizaciones (VIP)</h4>
                  <p className="text-2xl font-bold">Desde $140 USD<span className="text-sm font-normal">/mes</span></p>
                  <p className="text-sm text-gray-400 mt-2">Ahorras más de $230 USD/mes usando open-source optimizado en tu servidor VPS dedicado.</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
