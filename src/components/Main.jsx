import Card from "./Card";
import NavMain from "./NavMain";

export default function Main({ comics, nav_main }) {
    return (
        <main className="list_comics">

            <div className="bg-top-main"></div>

            <div className="container-page py-3">

                <button className="current-list">CURRENT SERIES</button>

                <div className="row d-flex row-cols-6 g-3">

                    {
                        comics.map(comic => (
                            <Card key={comic.id} thumb={comic.thumb} series={comic.series} />
                        ))
                    }


                </div>
                <div className="text-center">
                    <button className="load-list">LOAD MORE</button>
                </div>
            </div>

            <div className="bg-dc py-3">

                <div className="container-page">
                    <NavMain nav_main={nav_main} />
                </div>
            </div>
        </main>
    )
}