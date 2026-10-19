import { Clock3 } from "lucide-react";
import { processContent as content } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="content-section process-section" id="process">
      <div className="wrap">
        <div className="process-intro">
          <div className="process-heading">
            <h2 className="process-title">
              <span className="process-title__line">
                {content.titleStart}{" "}
                <span className="process-title__highlight">{content.titleHighlight}</span>
              </span>
              <span className="process-title__line">{content.titleEnd}</span>
            </h2>
            <p className="process-description">
              {content.description.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>

          <aside className="process-pace">
            <div className="process-pace__heading">
              <span className="process-pace__icon" aria-hidden="true">
                <Clock3 size={18} strokeWidth={1.8} />
              </span>
              <h3>{content.pace.title}</h3>
            </div>
            <p className="process-pace__prompt">{content.pace.prompt}</p>
            <p className="process-pace__answer">{content.pace.answer}</p>
            <p className="process-pace__schedule">{content.pace.schedule}</p>
          </aside>
        </div>

        <ol className="process-steps">
          {content.steps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="process-step__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="process-step__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <a className="button button-dark process-cta" href={content.cta.href}>
          {content.cta.label}
        </a>
      </div>
    </section>
  );
}
