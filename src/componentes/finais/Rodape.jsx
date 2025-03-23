const Rodape = () => {

    const contactLinks = [
        {
            name: "Whatsapp",
            url: "https://wa.me/5549991145655",
            imgSrc: "https://guismith.github.io/portfolio/media/whatsapp.png",
            alt: "Ícone whatsapp"
        },
        {
            name: "Github",
            url: "https://github.com/GuiSmith",
            imgSrc: "https://guismith.github.io/portfolio/media/github.png",
            alt: "Ícone github"
        },
        {
            name: "E-mail",
            url: "mailto:guilhermessmith2014@gmail.com",
            imgSrc: "https://guismith.github.io/portfolio/media/email.png",
            alt: "Ícone email"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/shimiters/",
            imgSrc: "https://guismith.github.io/portfolio/media/instagram.png",
            alt: "Ícone instagram"
        },
        {
            name: "Telefone",
            url: "",
            imgSrc: "https://guismith.github.io/portfolio/media/number.png",
            alt: "Ícone telefone"
        }
    ];

    return (
        <footer id="footer" >
            <h4>Contatos</h4>
            <div className="footer-content">
                {contactLinks.map((contact) => (
                    <a key={contact.name} href={contact.url} target="_blank" rel="noopener noreferrer">
                        <img src={contact.imgSrc} alt={contact.alt} />
                    </a>
                ))}
            </div>
        </footer>
    )
};

export default Rodape;