import React from "react";
import certFile from "../../../assets/Damian-Krzoska-CodersLab.pdf";
import harmoFile from "../../../assets/Damian-Krzoska_suplement-CodersLab.pdf";
import harmoFileNodeJS from "../../../assets/Harmonogram-NodeJS.pdf";

function Aboutme() {
  return (
    <div>
      Obecnie poszukuję pracy na stanowisko{" "}
      <strong>"Junior Front-End Developer (React)"</strong>. Mimo, że jestem
      konstruktorem maszyn od 9 lat to poszukuje nowego wyzwania.
      <br />
      Przypomniałem sobie jak około 20 lat temu próbwałem tworzyć strony
      internetowe używając takich edytorów jak Front-Page i&nbsp;Pajączek.
      Postanowiłem odnowić więdzę na ten temat, dlatego ukończyłem
      w&nbsp;zeszłym roku kurs
      <strong>"JavaScript Fron-End Developer"</strong> w szkole Coders Lab. Kurs
      obejmował naukę <strong>HTML, CSS, Java Script</strong> oraz biblioteki{" "}
      <strong>React</strong>. Projektowanie z użyciem metodyki{" "}
      <strong>Scrum</strong>. Zapoznanie się z narzędziami jak{" "}
      <strong>gulp</strong> i&nbsp;<strong>webpack</strong>, środowiskami{" "}
      <strong>IDE</strong>
      (ja używam <strong>Visual Studio Code</strong>) i&nbsp;
      <strong>node</strong> oraz posługiwaniem się repozytorium{" "}
      <strong>GitHub</strong>.<br />
      W dziale portfolio jest kilka moich projektów stworzonych podczas tego
      kursu.
      <br />
      Obecnie jestem w trakcie kursu <strong>Node.js</strong>, żeby dowiedzieć
      się jak wygląda połączenie Front-Endu z&nbsp;Back&#8209;Endem.
      <br />
      <strong>Certyfikat</strong>{" "}
      <a href={certFile} target="_blank">
        <strong>"JavaScript Fron-End Developer"</strong>
      </a><br />
      <strong>Zakres kursu</strong>{" "}
      <a href={harmoFile} target="_blank">
        <strong>"JavaScript Fron-End Developer"</strong>
      </a><br />
      <strong>Harmonogram</strong>{" "}
      <a href={harmoFileNodeJS} target="_blank">
        <strong>"Node.js"</strong>
      </a>
    </div>
  );
}

export default Aboutme;
