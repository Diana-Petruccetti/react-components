export default function AppMain() {

    const components = [
        {
            id: 1,
            title: "Margherita",
            description: "Lorem ipsum, Margherita siat amet consectetur adipisicing elit. Omnis quisquam ut aperiam hic atque at ab rem corporis veniam repudiandae nihil, dolores ipsa laboriosam, recusandae soluta quo impedit. Unde, tempora.",
            button: "LEGGI DI PIU'",
            img: "../assets/499725.jpg"
        },
        {
            id: 2,
            title: "Cacio e Pepe",
            description: "Lorem ipsum, Cacio e Pepe sit amet consectetur adipisicing elit. Omnis quisquam ut aperiam hic atque at ab rem corporis veniam repudiandae nihil, dolores ipsa laboriosam, recusandae soluta quo impedit. Unde, tempora.",
            button: "LEGGI DI PIU'",
            img: "../assets/499725.jpg"
        }
    ];

    console.log(components);

    return (
        <main>
            <section className="components">
                {components.map(component =>
                    <div key={component.id}>
                        <img src="{component.img}"></img>
                        <div>
                            <h3>{component.title}</h3>
                            <div>{component.description}</div>
                            <button>{component.button}</button>
                        </div>
                    </div>)
                }
            </section>
        </main>
    )
}