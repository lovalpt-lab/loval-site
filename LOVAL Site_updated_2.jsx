function App() {
  const COPPER = "#a15c32";
  const COPPER_DARK = "#7c4526";
  const NAVY = "#0b2038";

  const [filter, setFilter] = React.useState("Todos");
  const [form, setForm] = React.useState({ nome: "", contacto: "", servico: "Remodelação de casa de banho", mensagem: "" });
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const services = [
    { titulo: "Remodelação de Casas de Banho", desc: "Projeto completo — demolição, canalização, eletricidade e acabamentos de luxo." },
    { titulo: "Aplicação de Ladrilhos", desc: "Assentamento nivelado de mosaico e porcelanato, juntas milimétricas, cortes precisos." },
    { titulo: "Pavimentos e Revestimentos", desc: "Pisos interiores e exteriores, impermeabilização e acabamento antiderrapante." },
    { titulo: "Acabamentos Finais", desc: "Pintura, rodapés, sancas e detalhes que fazem a diferença na entrega." }
  ];

  const processo = [
    { n: "01", t: "Pedido de Orçamento", d: "Envia fotos e medidas pelo WhatsApp ou formulário." },
    { n: "02", t: "Visita Técnica", d: "Avaliamos o espaço em Moita e raio de 50km." },
    { n: "03", t: "Execução da Obra", d: "Equipa própria, prazos definidos e acompanhamento diário." },
    { n: "04", t: "Entrega Final", d: "Limpeza da obra e vistoria conjunta com o cliente." }
  ];

  const portfolio = [
    { cat: "Casas de Banho", titulo: "Remodelação de casa de banho", img: "https://cdn.abacus.ai/images/acd398d6-bc66-4deb-aef7-c46d36e9948a.png", alt: "renovated bathroom by LOVAL" },
    { cat: "Casas de Banho", titulo: "Casa de banho concluída", img: "https://cdn.abacus.ai/images/39852663-c548-4e88-82f0-736f89bbe6ba.png", alt: "finished bathroom renovation by LOVAL" },
    { cat: "Ladrilhos", titulo: "Aplicação de ladrilhos", img: "https://cdn.abacus.ai/images/f36735f0-0839-4e0f-b6c0-a346e1e2d282.png", alt: "tile installation work by LOVAL" },
    { cat: "Ladrilhos", titulo: "Revestimento em ladrilho", img: "https://cdn.abacus.ai/images/ae7b9a20-2108-487e-bd91-9a258689f222.png", alt: "tile covering finished by LOVAL" },
    { cat: "Casas de Banho", titulo: "Duche remodelado", img: "https://cdn.abacus.ai/images/d71493aa-658e-4326-b241-ce46d6628a15.png", alt: "renovated shower by LOVAL" },
    { cat: "Pavimentos", titulo: "Piso revestido", img: "https://cdn.abacus.ai/images/73ea01c0-c7f4-4864-b179-6fa6722b36a4.png", alt: "tiled flooring finished by LOVAL" },
    { cat: "Casas de Banho", titulo: "Casa de banho renovada", img: "https://cdn.abacus.ai/images/99f63b86-d39d-4bcf-bd19-b837f73b7982.png", alt: "renovated bathroom interior by LOVAL" },
    { cat: "Pavimentos", titulo: "Pavimento exterior", img: "https://cdn.abacus.ai/images/8a92c88a-b8f8-4195-8594-46493fe1a593.png", alt: "outdoor tiled pavement by LOVAL" },
    { cat: "Casas de Banho", titulo: "Detalhe de acabamento", img: "https://cdn.abacus.ai/images/dd62da04-0620-4551-9352-86ed57001a24.png", alt: "bathroom finishing detail by LOVAL" },
    { cat: "Ladrilhos", titulo: "Ladrilho em obra concluída", img: "https://cdn.abacus.ai/images/cf80dacb-aff1-4d08-bfc0-bc642685b264.png", alt: "completed tile work by LOVAL" },
    { cat: "Casas de Banho", titulo: "Casa de banho com ladrilho", img: "https://cdn.abacus.ai/images/fcbd428b-3f78-42db-a102-d0ffded28dcd.png", alt: "bathroom with tile finishing by LOVAL" },
    { cat: "Pavimentos", titulo: "Revestimento de piso", img: "https://cdn.abacus.ai/images/7a77c4c8-eaac-42d7-b4c3-5764912a0481.png", alt: "floor covering finished by LOVAL" }
  ];

  const categorias = ["Todos", "Casas de Banho", "Ladrilhos", "Pavimentos"];
  const filtrado = filter === "Todos" ? portfolio : portfolio.filter(p => p.cat === filter);

  const waLink = "https://wa.me/351930916452";

  function validar() {
    const e = {};
    if (!form.nome.trim()) e.nome = "Indique o seu nome.";
    if (!form.contacto.trim()) e.contacto = "Indique telefone ou e-mail.";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validar();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ nome: "", contacto: "", servico: "Remodelação de casa de banho", mensagem: "" });
      setTimeout(() => setSent(false), 5000);
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 font-inter text-stone-800">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
              <rect x="0" y="0" width="40" height="40" fill={NAVY} />
              <path d="M10 10 L10 28 L20 28" stroke="#fff" strokeWidth="2.5" fill="none" />
              <path d="M18 28 L28 10 L28 28" stroke={COPPER} strokeWidth="2.5" fill="none" />
            </svg>
            <span className="font-display text-lg tracking-tight text-stone-900">LOVAL</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-stone-600">
            <a href="#servicos" className="hover:text-stone-900">Serviços</a>
            <a href="#processo" className="hover:text-stone-900">Processo</a>
            <a href="#portfolio" className="hover:text-stone-900">Portfólio</a>
            <a href="#sobre" className="hover:text-stone-900">Sobre</a>
            <a href="#contacto" className="hover:text-stone-900">Contacto</a>
            <a href="#trabalhe-conosco" className="hover:text-stone-900">Trabalhe Conosco</a>
          </nav>
          <a href={waLink} target="_blank" rel="noreferrer" className="text-sm font-medium px-4 py-2 border" style={{ borderColor: COPPER, color: COPPER_DARK }}>
            <i className="fa-brands fa-whatsapp mr-2"></i>930 916 452
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: COPPER_DARK }}>Casas de Banho & Ladrilhos · Moita, Setúbal</p>
            <h1 className="font-display text-4xl sm:text-5xl leading-tight text-stone-900 text-balance">
              Não fazemos apenas obras.<br />Entregamos sonhos.
            </h1>
            <p className="mt-6 text-stone-600 max-w-prose text-pretty">
              A LOVAL transforma casas de banho e espaços com ladrilhos e revestimentos de qualidade, com rigor técnico e acabamento de detalhe. Atendemos Moita e um raio de até 50km.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={waLink} target="_blank" rel="noreferrer" className="px-6 py-3 text-white text-sm uppercase tracking-widest" style={{ backgroundColor: NAVY }}>
                Pedir Orçamento
              </a>
              <a href="#portfolio" className="px-6 py-3 border border-stone-300 text-sm uppercase tracking-widest text-stone-700 hover:border-stone-500">
                Ver Trabalhos
              </a>
            </div>
          </div>
          <div className="relative">
            <img src="https://cdn.abacus.ai/images/acd398d6-bc66-4deb-aef7-c46d36e9948a.png" alt="renovated bathroom by LOVAL" className="w-full h-80 md:h-[26rem] object-cover" />
            <div className="absolute -bottom-5 -left-5 bg-white border border-stone-200 px-5 py-4 hidden sm:block">
              <p className="text-2xl font-display tabular-nums" style={{ color: NAVY }}>50<span className="text-sm align-top">km</span></p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Raio de atuação</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="text-white" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/15">
          <div className="px-4 first:pl-0">
            <p className="text-3xl font-display tabular-nums" style={{ color: "#e0b183" }}>50km</p>
            <p className="text-xs uppercase tracking-widest text-stone-300 mt-1">Zona de trabalho</p>
          </div>
          <div className="px-4">
            <p className="text-3xl font-display tabular-nums" style={{ color: "#e0b183" }}>100%</p>
            <p className="text-xs uppercase tracking-widest text-stone-300 mt-1">Equipa própria</p>
          </div>
          <div className="px-4">
            <p className="text-3xl font-display tabular-nums" style={{ color: "#e0b183" }}>WhatsApp</p>
            <p className="text-xs uppercase tracking-widest text-stone-300 mt-1">Resposta rápida</p>
          </div>
          <div className="px-4">
            <p className="text-3xl font-display tabular-nums" style={{ color: "#e0b183" }}>Moita</p>
            <p className="text-xs uppercase tracking-widest text-stone-300 mt-1">Sede, Setúbal</p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: COPPER_DARK }}>O que fazemos</p>
        <h2 className="font-display text-3xl text-stone-900 mb-10 text-balance">Serviços</h2>
        <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
          {services.map((s, i) => (
            <div key={i} className="grid sm:grid-cols-[80px_1fr] gap-4 py-6">
              <span className="text-sm font-display tabular-nums text-stone-400">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-medium text-stone-900">{s.titulo}</h3>
                <p className="text-stone-600 mt-1 max-w-prose">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: COPPER_DARK }}>Como funciona</p>
          <h2 className="font-display text-3xl text-stone-900 mb-10 text-balance">Do Orçamento à Entrega</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processo.map((p, i) => (
              <div key={i} className="border-t-2 pt-4" style={{ borderColor: i === processo.length - 1 ? COPPER : "#d6d3d1" }}>
                <p className="text-sm font-display tabular-nums text-stone-400">{p.n}</p>
                <h3 className="mt-2 font-medium text-stone-900">{p.t}</h3>
                <p className="mt-1 text-sm text-stone-600">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: COPPER_DARK }}>Trabalhos realizados</p>
            <h2 className="font-display text-3xl text-stone-900 text-balance">Portfólio</h2>
          </div>
          <div className="inline-flex border border-stone-300 divide-x divide-stone-300 text-xs uppercase tracking-widest">
            {categorias.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="px-4 py-2"
                style={filter === c ? { backgroundColor: NAVY, color: "#fff" } : { color: "#57534e" }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrado.map((p, i) => (
            <figure key={i} className="group">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.alt} className="w-full h-56 object-cover" />
              </div>
              <figcaption className="mt-3 flex items-center justify-between">
                <span className="text-stone-900 font-medium">{p.titulo}</span>
                <span className="text-xs uppercase tracking-widest text-stone-500">{p.cat}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="text-white" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
          <img src="https://www.rubi.com/en/blog/wp-content/uploads/2024/03/IMG_4599.jpg" alt="tiler cutting ceramic tile with professional tools" className="w-full h-72 object-cover" />
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e0b183" }}>Sobre a LOVAL</p>
            <h2 className="font-display text-3xl text-stone-50 mb-5 text-balance">Rigor técnico, acabamento de detalhe</h2>
            <p className="text-stone-300 max-w-prose text-pretty">
              Sediada na Moita, Setúbal, a LOVAL trabalha remodelações de casas de banho e aplicação de ladrilhos num raio de até 50km. Cada obra é acompanhada do início ao fim pela mesma equipa, garantindo consistência entre o projeto combinado e o resultado entregue.
            </p>
            <ul className="mt-6 space-y-3">
              {["Orçamento claro antes de começar", "Equipa própria, sem subcontratação", "Prazos definidos e cumpridos", "Limpeza da obra na entrega"].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-200">
                  <i className="fa-solid fa-check mt-1" style={{ color: "#e0b183" }}></i>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACTO / ORÇAMENTO */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: COPPER_DARK }}>Fale connosco</p>
            <h2 className="font-display text-3xl text-stone-900 mb-6 text-balance">Peça o seu Orçamento</h2>
            <p className="text-stone-600 max-w-prose mb-8">
              Preencha o formulário com o essencial da sua obra ou fale connosco diretamente pelo WhatsApp. Respondemos o mais rápido possível.
            </p>
            <div className="space-y-4 text-stone-700">
              <div className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp w-5" style={{ color: COPPER_DARK }}></i>
                <a href={waLink} target="_blank" rel="noreferrer" className="hover:underline">930 916 452</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope w-5" style={{ color: COPPER_DARK }}></i>
                <a href="mailto:loval.pt@gmail.com" className="hover:underline">loval.pt@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-brands fa-instagram w-5" style={{ color: COPPER_DARK }}></i>
                <span>@loval.pt</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot w-5" style={{ color: COPPER_DARK }}></i>
                <span>Moita, Setúbal — raio de 50km</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-stone-200 p-6 sm:p-8 bg-white">
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Nome</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  className="w-full border border-stone-300 px-3 py-2 focus:outline-none focus-visible:ring-2"
                  style={{ outlineColor: COPPER }}
                  placeholder="O seu nome"
                />
                {errors.nome && <p className="text-xs text-red-700 mt-1">{errors.nome}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Telefone ou E-mail</label>
                <input
                  type="text"
                  value={form.contacto}
                  onChange={e => setForm({ ...form, contacto: e.target.value })}
                  className="w-full border border-stone-300 px-3 py-2 focus:outline-none"
                  placeholder="912 345 678 ou email@exemplo.com"
                />
                {errors.contacto && <p className="text-xs text-red-700 mt-1">{errors.contacto}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Serviço</label>
                <select
                  value={form.servico}
                  onChange={e => setForm({ ...form, servico: e.target.value })}
                  className="w-full border border-stone-300 px-3 py-2 bg-white"
                >
                  <option>Remodelação de casa de banho</option>
                  <option>Aplicação de ladrilhos</option>
                  <option>Pavimentos e revestimentos</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Mensagem</label>
                <textarea
                  value={form.mensagem}
                  onChange={e => setForm({ ...form, mensagem: e.target.value })}
                  rows="4"
                  className="w-full border border-stone-300 px-3 py-2"
                  placeholder="Descreva brevemente a obra, medidas ou fotos que quer partilhar"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-3 text-white text-sm uppercase tracking-widest" style={{ backgroundColor: NAVY }}>
                Enviar Pedido
              </button>
              {sent && (
                <p className="text-sm border px-4 py-3" style={{ borderColor: COPPER, color: COPPER_DARK, backgroundColor: "#f5ede6" }}>
                  Pedido registado. Entraremos em contacto em breve — obrigado!
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* TRABALHE CONOSCO */}
      <section id="trabalhe-conosco" className="bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: COPPER_DARK }}>Faça parte da equipa</p>
            <h2 className="font-display text-3xl text-stone-900 mb-5 text-balance">Trabalhe Conosco</h2>
            <p className="text-stone-600 max-w-prose text-pretty mb-6">
              A LOVAL está sempre em busca de profissionais sérios e experientes em remodelação de casas de banho, aplicação de ladrilhos e acabamentos. Se tem experiência na área e quer integrar a nossa equipa em Moita e região, envie o seu contacto.
            </p>
            <ul className="space-y-3 mb-8">
              {["Experiência comprovada em obras ou ladrilhos", "Disponibilidade para trabalhar num raio de 50km", "Compromisso com prazos e qualidade de acabamento"].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <i className="fa-solid fa-check mt-1" style={{ color: COPPER_DARK }}></i>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href={waLink} target="_blank" rel="noreferrer" className="px-6 py-3 text-white text-sm uppercase tracking-widest" style={{ backgroundColor: NAVY }}>
                Candidatar via WhatsApp
              </a>
              <a href="mailto:loval.pt@gmail.com?subject=Candidatura%20Trabalhe%20Conosco" className="px-6 py-3 border border-stone-300 text-sm uppercase tracking-widest text-stone-700 hover:border-stone-500">
                Enviar E-mail
              </a>
            </div>
          </div>
          <img src="https://picsum.photos/seed/construction-worker-tiling-team-portugal/900/650" alt="construction and tiling worker on a renovation site" className="w-full h-72 object-cover" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 40 40" className="w-7 h-7" aria-hidden="true">
                <rect x="0" y="0" width="40" height="40" fill="#0b2038" />
                <path d="M10 10 L10 28 L20 28" stroke="#fff" strokeWidth="2.5" fill="none" />
                <path d="M18 28 L28 10 L28 28" stroke="#e0b183" strokeWidth="2.5" fill="none" />
              </svg>
              <span className="font-display text-lg">LOVAL</span>
            </div>
            <p className="text-stone-300 text-sm max-w-xs">Não fazemos apenas obras. Entregamos sonhos.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Navegação</p>
            <ul className="space-y-2 text-sm text-stone-300">
              <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfólio</a></li>
              <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
              <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Contacto</p>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>930 916 452 (WhatsApp)</li>
              <li>loval.pt@gmail.com</li>
              <li>@loval.pt</li>
              <li>Moita, Setúbal</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-stone-400">
          © 2026 LOVAL — Casas de Banho & Ladrilhos
        </div>
      </footer>
    </div>
  );
}