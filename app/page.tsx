import "./page.css";
import { categories } from "@/data/data";

export default function Home() {
  return (
    <section className="ps">
      {
        categories.map(category => (
          <article key={category.name} className="sub">
            {
              category.elements.map(element => (
                <span
                  className="element"
                  key={element.symbol}
                  style={{
                    gridColumn: element.group,
                    gridRow: element.period,
                    backgroundColor: category.color,
                  }}
                >
                  {element.symbol}
                </span>
              ))
            }
          </article>
        ))
      }

      <article className="sub info">
        <div>
          <h1>Helium sdsds</h1>
        </div>
      </article>

    </section>
  );
}
