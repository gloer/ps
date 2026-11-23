"use client";

import { useState } from "react";
import "./page.css";
import { categories } from "@/data/data";

export type Info = {
  kategorinavn: string;
  elementnavn: string;
  elementsymbol: string;
};

export default function Home() {

  const [info, setInfo] = useState<Info | null>(null);

  return (
    <section className="ps">
      {
        categories.map(category => (
          <article key={category.name} className="sub">
            {
              category.elements.map(element => (
                <span
                  tabIndex={element.atomic_number}
                  onFocus={
                    () => {

                      setInfo({
                        kategorinavn: category.name,
                        elementnavn: element.name,
                        elementsymbol: element.symbol,
                      });
                    }
                  }
                  onMouseEnter={
                    () => {
                      setInfo({
                        kategorinavn: category.name,
                        elementnavn: element.name,
                        elementsymbol: element.symbol,
                      });
                    }
                  }
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

      {
        info !== null &&
        <article className="sub info">
          <div>
            <h1>{info.elementnavn}</h1>
            <p>Kjemisk sybol: {info.elementsymbol}</p>
            <p>Kategori: {info.kategorinavn}</p>
          </div>
        </article>
      }

    </section>
  );
}
