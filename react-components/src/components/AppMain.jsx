export default function AppMain() {

    const components = [
        {
            id: 1,
            title: "Buona la pizza!",
            description: "Lorem ipsum, dolor siat amet consectetur adipisicing elit. Omnis quisquam ut aperiam hic atque at ab rem corporis veniam repudiandae nihil, dolores ipsa laboriosam, recusandae soluta quo impedit. Unde, tempora.",
            button: "LEGGI DI PIU'",
            img: "../assets/499725.jpg"
        },
        {
            id: 2,
            title: "Buona la pizza!",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quisquam ut aperiam hic atque at ab rem corporis veniam repudiandae nihil, dolores ipsa laboriosam, recusandae soluta quo impedit. Unde, tempora.",
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
                        <div>{components.img}</div>
                        <div>
                            <h3>{components.title}</h3>
                            <div>{components.description}</div>
                            <button>{components.button}</button>
                        </div>
                    </div>)
                }
            </section>
        </main>
    )
}