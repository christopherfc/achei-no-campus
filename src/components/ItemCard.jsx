function ItemCard({ image, category, name, description, location, date }) {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={`Imagem ilustrativa de ${name}`} />
      <div className="card-content">
        <span className="tag">{category}</span>
        <h3>{name}</h3>
        <p className="card-description">{description}</p>
        <p className="card-location"><strong>Local:</strong> {location}</p>
        <p className="card-date"><strong>Data:</strong> {date}</p>
        <a className="contact-button" href="https://wa.me/5582900000000" target="_blank" rel="noopener noreferrer">
          Entrar em contato
        </a>
      </div>
    </article>
  );
}

export default ItemCard;
