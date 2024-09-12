"use client";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        {/* flower */}
        <div className="flower xl:top-[350px] top-[100px] xl:right-[420px]">
          <div className="mid"></div>
          <div className="Petal1 p1"></div>
          <div className="Petal1 p2"></div>
          <div className="Petal1 p3"></div>
          <div className="Petal1 p4"></div>
          <div className="Petal2 p1"></div>
          <div className="Petal2 p2"></div>
          <div className="Petal2 p3"></div>
          <div className="Petal2 p4"></div>
          <div className="Petal3 p1"></div>
          <div className="Petal3 p2"></div>
          <div className="Petal3 p3"></div>
          <div className="Petal3 p4"></div>
        </div>
        <div className="relative top-[225px] xl:top-1/2 xl:right-[200px] xl:absolute xl:transform xl:-translate-y-1/2">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 text-center mb-6 text-[30px] xl:text-[50px]">
              Felíz <br/> 21 De Septiembre ✨🥰
            </h1>
            <br />
            <div className="text-center">
              <TypeAnimation
                className="text-accent text-accent-animation h1"
                sequence={[
                  "Alejandra Granados 👀",
                  1000,
                  "Sensual Y Bella 👌",
                  1000,
                  "Encantadora Y Apasionada 🔥",
                  1000,
                  "Seductora Y Dulce 💋",
                  1000,
                  "Radiante Y Cautivadora 😍",
                  1000,
                  "Esa Es Mi Novia 😁",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <br />
            <p className="xl:max-w-[700px] xl:text-[20px] text-justify mb-9 text-white/80">
              <div className="parrafo1 text-indent">
                Quiero agradecerte profundamente por permitirme formar parte de
                tu vida. Cada momento contigo será un regalo, y tu presencia
                llenará mi mundo de una manera maravillosa. La forma en que tu
                sensualidad y tu ternura se entrelazan hace que cada instante a
                tu lado sea una experiencia inolvidable.
              </div>
              <br />
              <div className="parrafo2 text-indent">
                Estoy emocionado por todo lo que nos espera. Con cada día que
                pasa, siento que nuestra conexión se puede volver más intensa y
                apasionada. Espero que juntos logremos todos nuestros sueños y
                que sigamos explorando esta chispa inigualable que compartimos.
              </div>
              <br />
              <div className="parrafo3 text-center font-bold">
                💖 Gracias por ser mi compañera en esta aventura tan extraordinaria. 💖
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
