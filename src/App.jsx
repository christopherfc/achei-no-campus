import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="main-container">
        <section className="apresentacao-section">
          <div>
            <p className="presentation-label">ACHADOS E PERDIDOS</p>
            <h1>Encontre objetos perdidos no campus</h1>
            <p className="presentation-text">
              Consulte os objetos encontrados e saiba onde procurar o seu.
            </p>
          </div>
          <img
            src="/itens-perdidos-campus.png"
            alt="Objetos encontrados em uma universidade"
          />
        </section>

        <section id="objetos" className="objetos-section">
          <h2>Objetos encontrados</h2>

          <div className="card-list">
            <ItemCard
              image="/garrafa-azul.png"
              category="Outros"
              name="Garrafa azul"
              description="Garrafa azul com tampa prateada."
              location="Biblioteca"
              date="18/09/2026"
            />
            <ItemCard
              image="/carteira-estudantil.png"
              category="Documentos"
              name="Carteira estudantil"
              description="Documento entregue à administração do RU."
              location="Restaurante Universitário"
              date="17/09/2026"
            />
            <ItemCard
              image="/fone-de-ouvido.png"
              category="Eletrônicos"
              name="Fone de ouvido"
              description="Fone preto encontrado perto do computador 12."
              location="Laboratório de Informática"
              date="16/09/2026"
            />
            <ItemCard
              image="/casaco-cinza.png"
              category="Roupas"
              name="Casaco cinza"
              description="Casaco de moletom sem estampa."
              location="Auditório"
              date="15/09/2026"
            />
          </div>
        </section>

        <section className="comoFunciona-section" id="como-funciona">
          <div>
            <p className="info-label">COMO FUNCIONA</p>
            <h2>Perdeu ou encontrou um objeto?</h2>
            <p className="info-text">
              Procure o objeto na lista e pergunte no local indicado.
            </p>
          </div>
          <p className="info-note">
            Encontrou algo? Entregue à administração do campus para facilitar
            a devolução. Se precisar falar com o responsável, {" "}
            <a href="https://wa.me/5582900000000" target="_blank" rel="noopener noreferrer">
              entre em contato pelo WhatsApp
            </a>.
          </p>
        </section>

        <section className="sobreNos-section" id="sobre">
          <h2>Sobre nós</h2>
          <p className="about-problem">
            Somos estudantes da disciplina de Programação Web I e criamos o
            Achei no Campus a partir de uma situação comum na universidade:
            perder um objeto e não saber onde procurar. Muitas vezes, os avisos
            ficam espalhados em grupos de mensagens ou dependem de alguém que
            encontrou o item conhecer seu dono.
          </p>
          <p className="about-proposal">
            Nossa proposta é reunir, em um só lugar, informações como a
            descrição do objeto, a data e o local onde ele foi encontrado.
            Assim, quem perdeu algo pode conferir os avisos e saber por onde
            começar a busca. Quem encontrou um item pode entregá-lo à
            administração do campus para ajudar na devolução.
          </p>
        </section>

        <section className="mapa-section" id="localizacao">
          <h2>Onde estamos</h2>
          <p>UFAL - Unidade Educacional Penedo/Anexo</p>
          <iframe
            title="Mapa da UFAL - Unidade Educacional Penedo/Anexo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.745219633528!2d-36.55499035995755!3d-10.28164256357508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x704550046783eff%3A0x7e40e45f6fd92721!2sUFAL%20-%20U.E.%20Penedo%2FAnexo!5e1!3m2!1spt-BR!2sbr!4v1790108845979!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
