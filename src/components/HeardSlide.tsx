import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <article className="heard-slide">
        <header className="heard-bar">
          <span>Customer brief</span>
          <span>Updated live</span>
        </header>
        <div className="heard-main">
          <h3>Needs, context, and next questions</h3>
          <ol>
            {slides.map((slide) => (
              <li key={slide.n}>
                <small>{slide.kicker}</small>
                <p className="heard-quote">
                  <strong>{slide.title}</strong>
                  <span>{slide.body}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </div>
  );
}
